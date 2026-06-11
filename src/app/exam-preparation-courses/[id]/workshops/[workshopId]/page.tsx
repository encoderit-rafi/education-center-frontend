import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  User,
  Zap,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/axios";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";
import { WorkshopChecklistSection, WorkshopStatCard } from "./components";

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

  const workshop = course.workshops?.find((w) => w.id === workshopId);
  if (!workshop) {
    notFound();
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
    `Comprehensive ${workshop.duration}-hour intensive workshop focusing on core strategies, mock practice, and live feedback for the ${workshop.subTitle || course.name} exam.`;

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
                    {workshop.type || "Workshop"}
                  </Badge>
                  {workshop.subTitle && (
                    <Badge
                      variant="outline"
                      className="uppercase text-[10px] tracking-wider font-bold px-2 py-0.5"
                    >
                      {workshop.subTitle}
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
              </div>
            </div>

            {/* Requirements */}
            {workshop.requirements && (
              <WorkshopChecklistSection
                title="During the workshop, candidates work on:"
                icon={Award}
                items={workshop.requirements}
              />
            )}

            {/* Best For */}
            {workshop.bestFor && (
              <WorkshopChecklistSection
                title="This workshop is particularly suitable for candidates who:"
                icon={User}
                items={workshop.bestFor}
                fallback="Anyone looking to sharpen their skills in a focused, intensive session."
              />
            )}

            {/* Stat Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              <WorkshopStatCard
                icon={Timer}
                label="Duration"
                value={workshop.duration}
                suffix="Hours"
              />
              {workshop.startTime && (
                <WorkshopStatCard
                  icon={Clock}
                  label="Start Time"
                  value={workshop.startTime}
                  compact
                />
              )}
              {workshop.endTime && (
                <WorkshopStatCard
                  icon={Calendar}
                  label="End Time"
                  value={workshop.endTime}
                  compact
                />
              )}
            </div>
          </div>

          {/* ── Right Column: Pricing & CTA ── */}
          <div className="lg:sticky lg:top-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Workshop Pricing
              </p>
              <div className="flex items-baseline gap-3 flex-wrap">
                <PriceDisplay
                  amount={discountedPrice}
                  className="text-4xl font-black text-primary"
                />
                {discountRaw > 0 && (
                  <span className="text-lg text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
                    <PriceDisplay
                      amount={basePrice}
                      iconClassName="h-[0.7em]"
                    />
                  </span>
                )}
              </div>
              {discountRaw > 0 && (
                <div className="mt-2.5">
                  <Badge className="py-1 px-3 font-bold shadow-sm bg-emerald-50 text-emerald-600 hover:bg-emerald-50/80 border-emerald-200">
                    SAVE {discountRaw}
                    {workshop.discountType === "PERCENTAGE" ? "%" : " AED"}{" "}
                    INSTANTLY
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
                Book Now
              </Link>
              <p className="text-center text-xs text-slate-400 font-medium">
                Secure online payment processing
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Quick info */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <Timer className="size-5 text-primary shrink-0" />
                <span>{workshop.duration}-hour intensive session</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />
                <span>Certified Instructors</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
                <span>Licensed Prep. Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
