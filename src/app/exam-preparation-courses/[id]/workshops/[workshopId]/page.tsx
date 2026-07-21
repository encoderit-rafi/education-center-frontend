import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  User,
  Zap,
  Timer,
  MapPin,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/axios";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";
import { WorkshopChecklistSection, WorkshopStatCard } from "./components";
import { WorkshopBookingSidebar } from "./WorkshopBookingSidebar";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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
  requirements?: string | null;
  bestFor?: string[] | string | null;
}

interface CourseDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  workshops?: WorkshopDetail[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface PageProps {
  params: Promise<{
    id: string;
    workshopId: string;
  }>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const slugToExamId: Record<string, string> = {
  ielts: "ielts",
  toefl: "toefl",
  pte: "pte",
  selt: "psi",
  cael: "celpip-cael",
  celpip: "celpip-cael",
  oet: "oet",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function WorkshopDetailPage({ params }: PageProps) {
  const { id: courseSlug, workshopId } = await params;
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
  const courseTranslatedDescription = (course as any)?.translations?.[locale]
    ?.description;
  if (courseTranslatedName) course.name = courseTranslatedName;
  if (courseTranslatedDescription)
    course.description = courseTranslatedDescription;

  const workshop = course.workshops?.find((w) => w.id === workshopId);
  if (!workshop) {
    notFound();
  }

  // Apply workshop translation if available
  const wTrans = (workshop as any)?.translations?.[locale];
  const wTranslatedName = wTrans?.name;
  const wTranslatedTitle = wTrans?.title;
  const wTranslatedDescription = wTrans?.description;
  const wTranslatedShortDescription =
    wTrans?.short_description || wTrans?.shortDescription;
  const wTranslatedSubTitle = wTrans?.sub_title || wTrans?.subTitle;
  const wTranslatedRequirements = wTrans?.requirements;
  const wTranslatedBestFor = wTrans?.best_for || wTrans?.bestFor;

  if (wTranslatedName) workshop.name = wTranslatedName;
  if (wTranslatedTitle) workshop.title = wTranslatedTitle;
  if (wTranslatedSubTitle) workshop.subTitle = wTranslatedSubTitle;
  if (wTranslatedDescription) workshop.description = wTranslatedDescription;
  if (wTranslatedShortDescription)
    workshop.shortDescription = wTranslatedShortDescription;
  if (wTranslatedRequirements) workshop.requirements = wTranslatedRequirements;
  if (wTranslatedBestFor) {
    workshop.bestFor = Array.isArray(wTranslatedBestFor)
      ? wTranslatedBestFor
      : typeof wTranslatedBestFor === "string"
        ? wTranslatedBestFor
          .split("\n")
          .map((s: string) => s.trim())
          .filter(Boolean)
        : workshop.bestFor;
  }

  // Pricing
  const basePrice = parseFloat(workshop.price) || 0;
  const discountRaw = parseFloat(workshop.discountValue) || 0;
  const discountedPrice =
    workshop.discountType === "PERCENTAGE"
      ? Math.round(basePrice * (1 - discountRaw / 100))
      : basePrice - discountRaw;

  const mappedExamId = slugToExamId[courseSlug.toLowerCase()] || courseSlug;
  const registrationUrl = `/workshop-registration?examId=${mappedExamId}&courseId=${course.id}&workshopId=${workshop.id}&price=${discountedPrice}&currency=AED`;

  // Fallback description
  const displayDescription =
    workshop.description ||
    workshop.shortDescription ||
    t("workshopFallback", {
      duration: workshop.duration,
      subTitle: workshop.subTitle || course.name,
    });

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12 items-start">
          {/* ── Left Column ── */}
          <div className="space-y-8">
            {/* Banner / Header */}
            <div className="space-y-6">
              {workshop.bannerImage && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src={workshop.bannerImage}
                    alt={workshop.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="uppercase text-[10px] tracking-wider font-bold px-2 py-0.5">
                    {locale === "ar" ? "ورشة عمل" : (workshop.type || "Workshop")}
                  </Badge>
                  {workshop.subTitle && (
                    <Badge
                      variant="outline"
                      className="uppercase text-[10px] tracking-wider font-bold px-2 py-0.5"
                    >
                      {locale === "ar"
                        ? workshop.subTitle
                            .replace(/(\d+)-HOUR INTENSIVE WORKSHOP/i, "ورشة عمل مكثفة لمدة $1 ساعات")
                            .replace(/(\d+)-HOUR WORKSHOP/i, "ورشة عمل لمدة $1 ساعات")
                            .replace(/INTENSIVE WORKSHOP/i, "ورشة عمل مكثفة")
                            .replace(/WORKSHOP/i, "ورشة عمل")
                        : workshop.subTitle}
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {workshop.title || workshop.name}
                </h1>

                {workshop.title && workshop.title !== workshop.name && (
                  <p className="text-base font-semibold text-slate-500">
                    {workshop.name}
                  </p>
                )}

                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium text-justify">
                  {displayDescription}
                </p>

                <div className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4 mt-6">
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Zap className="size-5" />
                  </div>
                  <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed relative z-10">
                    {t.rich("workshops.calloutText", {
                      courseName: course.name,
                      tepth: (chunks) => (
                        <span className="font-semibold text-slate-800">
                          {chunks}
                        </span>
                      ),
                      course: (chunks) => (
                        <span className="text-primary font-bold">
                          {chunks}
                        </span>
                      ),
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            {workshop.requirements && (
              <WorkshopChecklistSection
                title={t("workshops.requirementsTitle")}
                icon={Award}
                items={workshop.requirements}
              />
            )}

            {/* Best For */}
            {workshop.bestFor && (
              <WorkshopChecklistSection
                title={t("workshops.bestForTitle")}
                icon={User}
                items={workshop.bestFor}
                fallback={t("workshops.bestForFallback")}
              />
            )}

            {/* Stat Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              <WorkshopStatCard
                icon={Timer}
                label={t("workshops.durationLabel")}
                value={workshop.duration}
                suffix={t("workshops.hoursSuffix")}
              />
              {workshop.startTime && (
                <WorkshopStatCard
                  icon={Clock}
                  label={t("workshops.startTimeLabel")}
                  value={workshop.startTime}
                  compact
                />
              )}
              {workshop.endTime && (
                <WorkshopStatCard
                  icon={Calendar}
                  label={t("workshops.endTimeLabel")}
                  value={workshop.endTime}
                  compact
                />
              )}
            </div>
          </div>

          {/* ── Right Column: Pricing & CTA ── */}
          <WorkshopBookingSidebar
            discountedPrice={discountedPrice}
            basePrice={basePrice}
            discountRaw={discountRaw}
            discountType={workshop.discountType}
            baseUrl={registrationUrl}
            pricingTitle={t("workshops.pricingTitle")}
            saveInstantText={t("workshops.saveInstant", {
              discount: discountRaw,
              type:
                workshop.discountType === "PERCENTAGE" ? "%" : " AED",
            })}
            bookNowText={t("workshops.bookNow")}
            securePaymentText={t("workshops.securePayment")}
            mockTestTypeTitle={t("workshops.mockTestType")}
            mockTestTypePlaceholder={t("workshops.selectMockTestType")}
            onlineOptionText={t("workshops.online")}
            inPersonOptionText={t("workshops.inPerson")}
          >
            <div className="h-px bg-slate-100" />
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <Timer className="size-5 text-primary shrink-0" />
                <span>
                  {t("workshops.quickInfoDuration", {
                    duration: workshop.duration,
                  })}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />
                <span>{t("workshops.certifiedInstructors")}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
                <span>{t("workshops.licensedCenter")}</span>
              </div>
            </div>
          </WorkshopBookingSidebar>
        </div>
      </div>
      {/* Flexible Workshops Banner */}
      <div className="p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-slate-900 leading-tight">
                Flexible Workshops at{" "}
                <span className="text-primary">TEPTH</span>
              </h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                All workshops at TEPTH – The Exam Preparation & Testing House
                are:
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Face-to-face and one-on-one",
                "Fully customizable according to the candidate's needs",
                "Focused on practical exam strategies and performance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900 ">
                    The Exam Preparation & Testing House L.L.C <br />
                    Suite 701, 7th Floor, Tabarak Tower, Corniche Road, Al Mamzar, <br />
                    Sharjah, United Arab Emirates.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Scheduling
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Flexible
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Target className="size-6 text-primary" />
              <h4 className="text-xl font-bold text-slate-900">
                Who is this for?
              </h4>
            </div>
            <p className="text-slate-600 mb-6 font-medium">
              Workshops can be particularly helpful for candidates who:
            </p>
            <ul className="space-y-3">
              {[
                "Have an exam scheduled soon",
                "Want to refresh their knowledge quickly",
                "Need guidance on specific modules",
                "Want to understand the exam format before starting preparation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
              <p className="text-sm font-semibold text-slate-800 leading-relaxed text-center">
                These focused sessions allow candidates to gain clarity, improve
                their approach, and walk into the exam with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
