import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  Zap,
  Target,
  Users,
  UserCheck,
  Calendar,
  Sparkles,
  BadgePercent,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import CourseCard from "@/components/blocks/cards/course-card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { PriceDisplay } from "@/components/ui/price-display";
import api from "@/axios";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import DiscountAd from "@/components/blocks/discount-ad";
import PromoDiscount from "@/components/blocks/promo-discount";

interface WorkshopDetail {
  id: string;
  courseId: string | null;
  name: string;
  slug: string;
  title: string;
  subTitle: string;
  shortDescription: string | null;
  description: string | null;
  logo: string | null;
  bannerImage: string | null;
  startTime: string | null;
  endTime: string | null;
  type: string;
  isActive: boolean;
  duration: string;
  price: string;
  discountValue: string;
  discountType: string;
  vatRate: string;
}

const slugToExamId: Record<string, string> = {
  ielts: "ielts",
  toefl: "toefl",
  pte: "pte",
  selt: "psi",
  cael: "celpip-cael",
  celpip: "celpip-cael",
  oet: "oet",
};

interface CourseDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  keyBenefits: string[];
  focusArea: string[];
  bannerImage: string | null;
  packages?: CoursePackage[];
  workshops?: WorkshopDetail[];
}

interface CoursePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  discountType: "PERCENTAGE" | "FIXED" | null;
  discountValue: number | null;
  specialDiscountType?: "PERCENTAGE" | "FIXED" | null;
  specialDiscount?: string | number | null;
  duration: string;
  totalHours: string;
  scheduleInfo: string;
  bestFor: (string | React.ReactNode)[];
  requirements?: string | null;
  image?: string | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export default async function FeesDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("FeesPage");
  const tPrep = await getTranslations("ExamPrepPage");

  let course: CourseDetail | null = null;
  let packages: CoursePackage[] = [];
  let workshops: WorkshopDetail[] = [];
  try {
    const courseRes = await api.get<ApiResponse<CourseDetail>>(
      `/courses/${slug}?sort_by=orderIndex&sort_order=desc`,
    );

    if (courseRes.data.success) {
      course = courseRes.data.data;
      packages = course.packages || [];
      workshops = course.workshops || [];
    }
  } catch (error) {
    console.error("Error fetching course data:", error);
  }

  if (!course) {
    notFound();
  }

  // Apply course translation if available
  const courseTranslatedName = (course as any)?.translations?.[locale]?.name;
  const courseTranslatedDescription = (course as any)?.translations?.[locale]?.description;
  if (courseTranslatedName) course.name = courseTranslatedName;
  if (courseTranslatedDescription) course.description = courseTranslatedDescription;

  // Apply locale-aware description/name for each workshop
  workshops = workshops.map((w) => {
    const wTrans = (w as any)?.translations?.[locale];
    const wTranslatedName = wTrans?.name;
    const wTranslatedDescription = wTrans?.description;
    return {
      ...w,
      name: wTranslatedName || w.name,
      description: wTranslatedDescription || w.description,
    };
  });

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
          )
        )}
      </span>
    );
  };

  // Apply locale-aware translations for each package
  packages = packages.map((pkg) => {
    const pkgTrans = (pkg as any)?.translations?.[locale];
    const pkgTranslatedName = pkgTrans?.name;
    const pkgTranslatedDescription = pkgTrans?.description;
    const pkgTranslatedRequirements = pkgTrans?.requirements;
    const pkgTranslatedBestFor = pkgTrans?.best_for || pkgTrans?.bestFor;
    const pkgTranslatedScheduleInfo = pkgTrans?.schedule_info || pkgTrans?.scheduleInfo;

    const rawBestFor = pkgTranslatedBestFor
      ? Array.isArray(pkgTranslatedBestFor)
        ? pkgTranslatedBestFor
        : typeof pkgTranslatedBestFor === "string"
          ? pkgTranslatedBestFor.split("\n").map((s: string) => s.trim()).filter(Boolean)
          : pkg.bestFor
      : pkg.bestFor;

    return {
      ...pkg,
      name: pkgTranslatedName || pkg.name,
      description: pkgTranslatedDescription || pkg.description,
      requirements: pkgTranslatedRequirements || pkg.requirements,
      bestFor: rawBestFor.map(renderPoint),
      scheduleInfo: pkgTranslatedScheduleInfo || pkg.scheduleInfo,
    };
  });

  const data = course; // For easier mapping
  const mappedExamId = slugToExamId[slug.toLowerCase()] || slug;

  const filteredWorkshops = workshops.filter((w) => {
    if (!course) return false;

    // Match by courseId if both exist
    if (w.courseId && course.id && w.courseId === course.id) {
      return true;
    }

    // Fallback: Match by subTitle vs slug or course name
    const subTitleLower = w.subTitle?.toLowerCase() || "";
    const slugLower = slug.toLowerCase();
    const courseNameLower = course.name?.toLowerCase() || "";

    return (
      subTitleLower === slugLower ||
      subTitleLower === courseNameLower ||
      (slugLower === "toefl" && subTitleLower === "toefl-ibt") ||
      (slugLower === "celpip" && subTitleLower === "celpip-general")
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header Section ── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-5xl">
            {data.name} <span className="text-primary italic">{t("titleSpan")}</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {t("subtitle", { name: data.name })}
          </p>
        </div>
      </section>

      {/* ── Packages Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="px-4 lg:px-8  mx-auto">
          {/* <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {data.name} <span className="text-primary">Preparation Path</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Master the {data.name} exam with our strategic preparation
              programs tailored for your success.
            </p>
          </div> */}

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <CourseCard
                key={index}
                pkg={pkg}
                examSlug={slug}
                showDetails={true}
              />
            ))}
          </div>
        </div>
      </section>
      {!["oet", "cael", "celpip"].includes(slug.toLowerCase()) && <PromoDiscount />}
      {/* ── Workshops Section ── */}
      {filteredWorkshops.length > 0 && (
        <section
          id="workshops"
          className="base-py bg-slate-50 border-t border-slate-100"
        >
          <div className="container px-4 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <Sparkles className="size-3" /> Targeted Skills Boost
              </div> */}
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight lg:text-5xl">
                <span className="text-primary">{tPrep("workshops.title")}</span>
              </h2>
              <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                {tPrep("workshops.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredWorkshops.map((workshop) => {
                const basePrice = parseFloat(workshop.price);
                const discount = parseFloat(workshop.discountValue) || 0;
                const discountedPrice =
                  workshop.discountType === "PERCENTAGE"
                    ? Math.round(basePrice * (1 - discount / 100))
                    : basePrice - discount;

                return (
                  <BaseCard key={workshop.id}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <BaseCardIcon className="size-9">
                          {workshop.duration}h
                        </BaseCardIcon>

                        <BaseCardTitle>{workshop.name}</BaseCardTitle>
                      </div>

                      <div className="space-y-2"></div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-4">
                        {workshop.description ||
                          tPrep("workshopFallback", { duration: workshop.duration, subTitle: workshop.subTitle })}
                      </p>
                    </div>

                    <div className=" my-3 space-y-4">
                      <div className="flex items-baseline gap-2">
                        <PriceDisplay
                          amount={discountedPrice}
                          className="text-xl font-black text-primary"
                        />
                        {discount > 0 && (
                          <span className="text-sm text-slate-400 line-through decoration-slate-300">
                            <PriceDisplay
                              amount={basePrice}
                              iconClassName="h-[0.7em]"
                            />
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/workshop-registration?examId=${mappedExamId}&courseId=${course.id}&workshopId=${workshop.id}&price=${discountedPrice}&currency=AED`}
                        className={cn(
                          buttonVariants(),
                          "font-bold h-11 shadow-sm px-4 w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300",
                        )}
                      >
                        {/* <Calendar className="size-4" /> */}
                        <span>{t("bookNow")}</span>
                      </Link>
                    </div>
                  </BaseCard>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <DiscountAd />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const response =
      await api.get<ApiResponse<{ data: { slug: string }[] }>>("/courses");
    if (response.data.success) {
      return response.data.data.data.map((course) => ({
        id: course.slug,
      }));
    }
  } catch (error) {
    console.error("Error generating static params:", error);
  }
  return [];
}
