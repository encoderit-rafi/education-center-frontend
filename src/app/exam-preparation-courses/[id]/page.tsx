/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, MapPin, Calendar, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import CourseCard from "@/components/blocks/cards/course-card";
import { buttonVariants } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { PriceDisplay } from "@/components/ui/price-display";
import api from "@/axios";
import DiscountAd from "@/components/blocks/discount-ad";
import PromoDiscount from "@/components/blocks/promo-discount";
import { getLocale, getTranslations } from "next-intl/server";

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
  bestFor: (string | React.ReactNode)[];
  requirements?: string | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export default async function ExamPreparationDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("ExamPrepPage");

  let course: CourseDetail | null = null;
  let packages: CoursePackage[] = [];
  let workshops: WorkshopDetail[] = [];
  try {
    const courseRes = await api.get<ApiResponse<CourseDetail>>(
      `/courses/${slug}?sort_by=orderIndex&sort_order=desc`,
    );
    console.log("👉 ~ ExamPreparationDynamicPage ~ courseRes:", courseRes);

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

  // Apply locale-aware description: use translations[locale].description when available
  const translatedDescription = (course as any)?.translations?.[locale]
    ?.description;
  if (translatedDescription) {
    course = { ...course, description: translatedDescription };
  }

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
          ),
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
    const pkgTranslatedScheduleInfo =
      pkgTrans?.schedule_info || pkgTrans?.scheduleInfo;

    const rawBestFor = pkgTranslatedBestFor
      ? Array.isArray(pkgTranslatedBestFor)
        ? pkgTranslatedBestFor
        : typeof pkgTranslatedBestFor === "string"
          ? pkgTranslatedBestFor
              .split("\n")
              .map((s: string) => s.trim())
              .filter(Boolean)
          : (pkg.bestFor || [])
      : (pkg.bestFor || []);

    const safeBestFor = Array.isArray(rawBestFor) ? rawBestFor : [];

    return {
      ...pkg,
      name: pkgTranslatedName || pkg.name,
      description: pkgTranslatedDescription || pkg.description,
      requirements: pkgTranslatedRequirements || pkg.requirements,
      bestFor: safeBestFor.map(renderPoint),
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
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl flex flex-col items-center">
          <div
            className={`grid ${data.bannerImage ? "lg:grid-cols-[1fr_450px]" : ""} gap-16 items-center`}
          >
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-6xl mb-6">
                {data.name}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-8 font-medium text-justify">
                {data.description}
              </p>
            </div>
            {data.bannerImage && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.bannerImage}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>
      {!["oet", "cael", "celpip"].includes(slug.toLowerCase()) && (
        <PromoDiscount />
      )}
      {/* ── Packages Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="px-4 lg:px-8  mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {data.name}{" "}
              <span className="text-primary">{t("packages.pathSpan")}</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              {t("packages.pathSubtitle", { name: data.name })}
            </p>
          </div>

          {packages.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <CourseCard key={index} pkg={pkg} examSlug={slug} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400">
              <p className="text-base font-medium">
                Course packages are not available yet.
              </p>
              <p className="text-sm mt-1">
                Please check back soon or contact us for enrollment details.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Workshops Section ── */}
      {filteredWorkshops.length > 0 && (
        <section
          id="workshops"
          className="base-py bg-slate-50 border-t border-slate-100"
        >
          <div className="container px-4 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <Sparkles className="size-3" />{" "}
                {t("workshops.skillsBoostBadge")}
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight lg:text-5xl">
                <span className="text-primary">{t("workshops.title")}</span>
              </h2>
              <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                {t("workshops.subtitle")}
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

                      <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-4 text-justify">
                        {workshop.description ||
                          t("workshopFallback", {
                            duration: workshop.duration,
                            subTitle: workshop.subTitle,
                          })}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 space-y-4">
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
                        href={`/exam-preparation-courses/${slug}/workshops/${workshop.id}`}
                        className={cn(
                          buttonVariants(),
                          "font-bold h-11 shadow-sm px-4 w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300",
                        )}
                      >
                        <span>{t("workshops.viewDetails")}</span>
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
