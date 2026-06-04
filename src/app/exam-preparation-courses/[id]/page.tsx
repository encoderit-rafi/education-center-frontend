/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { PriceDisplay } from "@/components/ui/price-display";
import api from "@/axios";
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
          <div className="grid lg:grid-cols-[1fr_450px] gap-16 items-center">
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-6xl mb-6">
                {data.name}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-8 font-medium">
                {data.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-sm  text-slate-400 mb-4 flex items-center gap-2">
                    <Target className="size-4 text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {data.keyBenefits?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm  text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                    <Zap className="size-4 text-primary" />
                    Focus Area
                  </h3>
                  <ul className="space-y-3">
                    {data.focusArea?.map((area, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm  text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gorgeous Discount Banner ── */}
      {/* <section className="relative overflow-hidden  mx-auto bg-primary py-14 md:py-20">
       
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/[0.03] blur-2xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative px-4 lg:px-8 max-w-6xl mx-auto text-center space-y-8">
        
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <BadgePercent className="size-3.5" />
            Exclusive Online Offer
          </div>

         
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.08] tracking-tight">
              Save up to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">25%</span>
                <span className="absolute inset-0 -mx-2 rounded-lg bg-white/15 blur-sm" />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-xl text-white/80 leading-relaxed font-medium">
              On <em className="not-italic font-semibold text-white">some</em> of our courses when you book your exam and register for the course with{" "}
              <span className="font-extrabold text-white underline underline-offset-4 decoration-white/40">TEPTH</span>{" "}
              and pay online on our website.
            </p>
          </div>

          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              {
                label: "Group Course",
                value: "10%",
                color:
                  "bg-emerald-400/20 border-emerald-300/30 text-emerald-100",
              },
              {
                label: "Semi-private Course",
                value: "15%",
                color: "bg-rose-400/20 border-rose-300/30 text-rose-100",
              },
              {
                label: "In-person 1-to-1",
                value: "20%",
                color: "bg-sky-400/20 border-sky-300/30 text-sky-100",
              },
              {
                label: "Online 1-to-1",
                value: "20%",
                color: "bg-amber-400/20 border-amber-300/30 text-amber-100",
              },
              {
                label: "Hybrid 1-to-1",
                value: "25%",
                color: "bg-orange-400/20 border-orange-300/30 text-orange-100",
              },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-transform duration-200 hover:scale-105 ${color}`}
              >
                <span className="font-black text-base">{value}</span>
                <span className="opacity-80">·</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <PromoDiscount />
      {/* ── Packages Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="px-4 lg:px-8  mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {data.name} <span className="text-primary">Preparation Path</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Master the {data.name} exam with our strategic preparation
              programs tailored for your success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <CourseCard key={index} pkg={pkg} examSlug={slug} />
            ))}
          </div>
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
                <Sparkles className="size-3" /> Targeted Skills Boost
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight lg:text-5xl">
                <span className="text-primary">Workshops</span>
              </h2>
              <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                Need a targeted boost? Our high-intensity, topic-focused
                workshops are engineered to deliver immediate results in
                specific exam sections.
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
                          `Comprehensive ${workshop.duration}-hour intensive workshop focusing on core strategies, mock practice, and live feedback for the ${workshop.subTitle} exam.`}
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
                        <span>Book</span>
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
