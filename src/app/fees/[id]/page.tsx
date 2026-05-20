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
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { PriceDisplay } from "@/components/ui/price-display";
import api from "@/axios";
import Image from "next/image";

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
  scheduleInfo: string;
  bestFor: string[];
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

  let course: CourseDetail | null = null;
  let packages: CoursePackage[] = [];
  let workshops: WorkshopDetail[] = [];
  try {
    const courseRes = await api.get<ApiResponse<CourseDetail>>(
      `/courses/${slug}`,
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
            {data.name} <span className="text-primary italic">Fees</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Here is the complete pricing structure for the {data.name} packages and skills workshops. 
            Choose the track that fits your goals and begin your journey.
          </p>
        </div>
      </section>

      {/* ── Course Packages Fees Section ── */}
      {packages.length > 0 && (
        <section id="packages" className="py-20 bg-white">
          <div className="px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Course Packages <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-slate-600 text-base font-medium">
                Comprehensive training courses built for maximum preparation quality and structured success.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 [grid-template-rows:repeat(7,auto)]">
              {packages.map((pkg, index) => {
                const basePrice = parseFloat(pkg.price) || 0;
                let discount = 0;
                let discountType: "PERCENTAGE" | "FIXED" | null = pkg.discountType;

                if (pkg.discountValue !== null && pkg.discountValue !== undefined) {
                  discount = typeof pkg.discountValue === "string" ? parseFloat(pkg.discountValue) : pkg.discountValue;
                } else if (pkg.specialDiscount !== null && pkg.specialDiscount !== undefined) {
                  discount = typeof pkg.specialDiscount === "string" ? parseFloat(pkg.specialDiscount) : pkg.specialDiscount;
                  if (pkg.specialDiscountType) {
                    discountType = pkg.specialDiscountType as "PERCENTAGE" | "FIXED";
                  }
                }

                const discountedPrice =
                  discountType === "PERCENTAGE"
                    ? Math.round(basePrice * (1 - discount / 100))
                    : basePrice - discount;

                return (
                  <BaseCard
                    key={index}
                    className="grid [grid-template-rows:subgrid] row-span-7 border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out p-0"
                  >
                    {/* Row 1 — Image & Save Badge */}
                    <div className="relative h-48 overflow-hidden">
                  <Image
                                        src={
                                          pkg.image
                                            ? pkg.image.startsWith("http")
                                              ? pkg.image
                                              : `https://vote.encoder-test-vpn.space/${pkg.image.startsWith("/") ? pkg.image.slice(1) : pkg.image}`
                                            : pkg.slug.includes("group")
                                              ? "/images/hero/image-3.jpg"
                                              : pkg.slug.includes("semi-private")
                                                ? "/images/hero/image-6.png"
                                                : pkg.slug.includes("vip")
                                                  ? "/images/hero/image-7.png"
                                                  : pkg.slug.includes("online")
                                                    ? "/images/hero/image-8.png"
                                                    : "/images/hero/image-3.jpg"
                                        }
                                        alt={pkg.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110 "
                                      />
                      {discount > 0 && (
                        <div className="absolute top-4 right-4">
                          <Badge className="py-1 px-3 font-bold shadow-lg bg-primary text-white">
                            SAVE {discount}
                            {discountType === "PERCENTAGE" ? "%" : ""}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Row 2 — Title */}
                    <div className="px-5 pt-4">
                      <BaseCardTitle className="text-xl leading-tight">
                        {pkg.name}
                      </BaseCardTitle>
                    </div>

                    {/* Row 3 — Price */}
                    <div className="px-5">
                      <div className="flex items-baseline gap-3">
                        <PriceDisplay
                          amount={discountedPrice}
                          className="text-3xl"
                        />
                        {discount > 0 && (
                          <span className="text-sm text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
                            <PriceDisplay
                              amount={basePrice}
                              iconClassName="h-[0.7em]"
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 4 — Description */}
                    <div className="px-5">
                      <BaseCardDescription className="text-sm line-clamp-none text-slate-600 font-medium">
                        {pkg.description}
                      </BaseCardDescription>
                    </div>

                    {/* Row 5 — Best For */}
                    <div className="px-5 space-y-2">
                      <Badge variant={"destructive"} className="text-[10px] font-bold tracking-wider uppercase">Best For</Badge>
                      <BaseCardList
                        items={
                          Array.isArray(pkg.bestFor)
                            ? pkg.bestFor
                            : pkg.bestFor && typeof pkg.bestFor === "object"
                              ? (pkg.bestFor as any).goals || []
                              : []
                        }
                        checked
                      />
                    </div>

                    {/* Row 6 — Duration & Schedule Info */}
                    <div className="px-5">
                      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
                          <p className="text-xs font-semibold text-slate-900">
                            {pkg.duration} Hours
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">Schedule</p>
                          <p className="text-xs font-semibold text-slate-900">
                            {pkg.scheduleInfo}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Row 7 — Action */}
                    <div className="px-5 pb-5 pt-2">
                      <Link
                        href={`/exam-preparation-courses/registration?examId=${slug}&courseId=${pkg.id}&price=${discountedPrice}&currency=AED`}
                        className={cn(
                          buttonVariants(),
                          "font-bold h-10 shadow-sm px-4 w-full flex items-center justify-center gap-2"
                        )}
                      >
                        <Calendar className="size-4" />
                        Register
                      </Link>
                    </div>
                  </BaseCard>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Workshops Fees Section ── */}
      {filteredWorkshops.length > 0 && (
        <section
          id="workshops"
          className="py-20 bg-slate-50 border-t border-slate-100"
        >
          <div className="px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <Sparkles className="size-3" /> Targeted Skills Boost
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight lg:text-4xl">
                Accelerated <span className="text-primary">Skills Workshops</span>
              </h2>
              <p className="text-slate-600 text-base font-medium max-w-2xl mx-auto">
                Need a targeted boost? High-intensity, section-focused workshops designed to maximize scores in specific areas.
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
                  <BaseCard key={workshop.id} className="flex flex-col justify-between h-full bg-white border border-slate-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <BaseCardIcon className="size-9 bg-primary/10 text-primary text-xs">
                          {workshop.duration}h
                        </BaseCardIcon>
                        <BaseCardTitle className="text-lg leading-tight font-black">{workshop.name}</BaseCardTitle>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-4 pt-2">
                        {workshop.description ||
                          `Comprehensive ${workshop.duration}-hour intensive workshop focusing on core strategies, mock practice, and live feedback for the ${workshop.subTitle} exam.`}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
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
                        href={`/workshop-registration?examId=${mappedExamId}&courseId=${workshop.id}&price=${discountedPrice}&currency=AED`}
                        className={cn(
                          buttonVariants(),
                          "font-bold h-11 shadow-sm px-4 w-full flex items-center justify-center gap-2 transition-all duration-300"
                        )}
                      >
                        <Calendar className="size-4" />
                        <span>Book Workshop</span>
                      </Link>
                    </div>
                  </BaseCard>
                );
              })}
            </div>
          </div>
        </section>
      )}
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
