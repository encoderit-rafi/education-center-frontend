import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Award,
  Users,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/axios";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";
import { calculateDirectCourseDiscountedPrice } from "@/lib/course-discount";
import { BaseCard } from "@/components/blocks/cards/base-card";
import {
  PackageChecklistSection,
  PackageStatCard,
} from "./components";

interface CoursePackage {
  id: string;
  image: string | null;
  name: string;
  slug: string;
  description: string;
  price: string;
  discountType: "PERCENTAGE" | "FIXED" | null;
  discountValue: number | null;
  specialDiscountType?: "PERCENTAGE" | "FIXED" | null;
  specialDiscount?: string | number | null;
  duration: string;
  scheduleInfo: string;
  totalHours: string;
  bestFor: string[];
  requirements?: string | null;
}

interface CourseDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  packages?: CoursePackage[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface PageProps {
  params: Promise<{
    id: string;
    packageId: string;
  }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id: courseSlug, packageId } = await params;
  const locale = await getLocale();
  const t = await getTranslations("ExamPrepPage");

  let course: CourseDetail | null = null;
  try {
    const response = await api.get<ApiResponse<CourseDetail>>(
      `/courses/${courseSlug}`,
    );
    if (response.data.success) {
      course = response.data.data;

    }
  } catch (error) {
    console.error("Error fetching course detail:", error);
  }

  if (!course) {
    notFound();
  }

  // Apply course translation if available
  const courseTranslatedName = (course as any)?.translations?.[locale]?.name;
  const courseTranslatedDescription = (course as any)?.translations?.[locale]?.description;
  if (courseTranslatedName) course.name = courseTranslatedName;
  if (courseTranslatedDescription) course.description = courseTranslatedDescription;

  const pkg = course.packages?.find((p) => p.id === packageId);
  if (!pkg) {
    notFound();
  }

  // Helper to parse ** bolds
  const renderPoint = (text: string) => {
    if (typeof text !== "string") return text;
    const parts = text.split("**");
    if (parts.length <= 1) return text;
    return (
      <span>
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-bold">
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </span>
    );
  };

  // Apply package translation if available
  const pkgTrans = (pkg as any)?.translations?.[locale];
  const pkgTranslatedName = pkgTrans?.name || pkgTrans?.title;
  const pkgTranslatedDescription = pkgTrans?.description;
  const pkgTranslatedRequirements = pkgTrans?.requirements;
  const pkgTranslatedBestFor = pkgTrans?.best_for || pkgTrans?.bestFor;
  const pkgTranslatedScheduleInfo = pkgTrans?.schedule_info || pkgTrans?.scheduleInfo;

  if (pkgTranslatedName) pkg.name = pkgTranslatedName;
  if (pkgTranslatedDescription) pkg.description = pkgTranslatedDescription;
  if (pkgTranslatedRequirements) pkg.requirements = pkgTranslatedRequirements;
  if (pkgTranslatedBestFor) {
    pkg.bestFor = Array.isArray(pkgTranslatedBestFor)
      ? pkgTranslatedBestFor
      : typeof pkgTranslatedBestFor === "string"
        ? pkgTranslatedBestFor.split("\n").map((s: string) => s.trim()).filter(Boolean)
        : (pkg.bestFor || []);
  } else {
    pkg.bestFor = pkg.bestFor || [];
  }
  if (pkgTranslatedScheduleInfo) pkg.scheduleInfo = pkgTranslatedScheduleInfo;

  // Calculate pricing logic exactly as in CourseCard
  const basePrice = parseFloat(pkg.price) || 0;
  let discount = 0;
  let discountType: "PERCENTAGE" | "FIXED" | null = pkg.discountType;

  if (pkg.discountValue !== null && pkg.discountValue !== undefined) {
    discount =
      typeof pkg.discountValue === "string"
        ? parseFloat(pkg.discountValue)
        : pkg.discountValue;
  } else if (
    pkg.specialDiscount !== null &&
    pkg.specialDiscount !== undefined
  ) {
    discount =
      typeof pkg.specialDiscount === "string"
        ? parseFloat(pkg.specialDiscount)
        : pkg.specialDiscount;
    if (pkg.specialDiscountType) {
      discountType = pkg.specialDiscountType as "PERCENTAGE" | "FIXED";
    }
  }

  const discountedPrice = calculateDirectCourseDiscountedPrice(
    basePrice,
    pkg.name,
    discount,
    discountType
  );

  const registrationUrl = `/exam-preparation-courses/registration?examId=${courseSlug}&courseId=${pkg.id}&price=${discountedPrice}&currency=AED`;

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Link */}
        {/* <Link
          href={`/exam-preparation-courses/${courseSlug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to {course.name} Course
        </Link> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12 items-start">
          {/* Left Column: Details */}
          <div className="space-y-8">
            {/* Header Card */}
            <div className="space-y-6">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src={pkg.image || "/images/hero/image-3.jpg"}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {renderPoint(pkg.name)}
                </h1>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium text-justify">
                  {renderPoint(pkg.description)}
                </p>
              </div>
            </div>
            {/* Requirements */}
            {pkg.requirements && (
              <PackageChecklistSection
                title={t("packages.requirementsTitle")}
                icon={Award}
                items={pkg.requirements}
              />
            )}

            {/* Course Features / Best For */}
            <PackageChecklistSection
              title={t("packages.bestForTitle")}
              icon={User}
              items={pkg.bestFor}
            />

            {/* Course Specifications */}
            <div className="grid sm:grid-cols-3 gap-6">
              <PackageStatCard
                icon={Clock}
                label={t("packages.durationLabel")}
                value={pkg.duration}
                suffix={t("packages.hoursSuffix")}
              />
              <PackageStatCard
                icon={BookOpen}
                label={t("packages.weeksLabel")}
                value={pkg.totalHours}
                suffix={t("packages.weeksSuffix")}
              />
              <PackageStatCard
                icon={Calendar}
                label={t("packages.scheduleLabel")}
                value={pkg.scheduleInfo}
                compact
              />
            </div>
          </div>

          {/* Right Column: Pricing & Sticky Register CTA */}
          <div className="lg:sticky lg:top-44 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-2">
                {t("packages.pricingTitle")}
              </p>
              <div className="flex items-baseline gap-3 flex-wrap">
                <PriceDisplay
                  amount={discountedPrice}
                  className="text-4xl font-black text-primary"
                />
                {discount > 0 && (
                  <span className="text-lg text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
                    <PriceDisplay
                      amount={basePrice}
                      iconClassName="h-[0.7em]"
                    />
                  </span>
                )}
              </div>
              {discount > 0 && (
                <div className="mt-2.5">
                  <Badge className="py-1 px-3 font-bold shadow-sm bg-emerald-50 text-emerald-600 hover:bg-emerald-50/80 border-emerald-200">
                    {t("packages.saveInstant", {
                      discount,
                      type: discountType === "PERCENTAGE" ? "%" : " AED"
                    })}
                  </Badge>
                </div>
              )}
            </div>

            <div className="h-px bg-slate-100" />

            <div className="space-y-4">
              <Link
                href={registrationUrl}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full font-black py-6 text-base shadow-md flex items-center justify-center gap-2 transition-all duration-300",
                )}
              >
                <Calendar className="size-5" />
                {t("packages.registerNow")}
              </Link>
              <p className="text-center text-xs text-slate-400 font-medium">
                {t("packages.securePayment")}
              </p>
            </div>

            <div className="h-px bg-slate-100" />


            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />

                <span>{t("packages.certifiedInstructors")}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <ShieldCheck className="size-5 text-emerald-500 shrink-0" />

                <span>{t("packages.licensedCenter")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
