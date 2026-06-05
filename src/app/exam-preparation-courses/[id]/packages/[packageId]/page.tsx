import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/axios";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";
import { BaseCard } from "@/components/blocks/cards/base-card";

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

  const pkg = course.packages?.find((p) => p.id === packageId);
  if (!pkg) {
    notFound();
  }

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

  const discountedPrice =
    discountType === "PERCENTAGE"
      ? Math.round(basePrice * (1 - discount / 100))
      : basePrice - discount;

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
                  {pkg.name}
                </h1>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  {pkg.description}
                </p>
              </div>
            </div>

            {/* Course Features / Best For */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Target Audience & Goals
              </h2>
              <div className="h-px bg-slate-100" />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="destructive"
                    className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5"
                  >
                    Best For
                  </Badge>
                </div>
                <ul className="space-y-3 text-slate-600 font-medium text-sm">
                  {Array.isArray(pkg.bestFor) && pkg.bestFor.length > 0 ? (
                    pkg.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : pkg.bestFor &&
                    typeof pkg.bestFor === "object" &&
                    (pkg.bestFor as any).goals ? (
                    ((pkg.bestFor as any).goals as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>
                        Comprehensive preparation targeting all exam modules.
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Course Specifications */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <Clock className="size-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Duration
                  </p>
                </div>
                <p className="text-lg font-black text-slate-800 mt-2">
                  {pkg.duration} Hours
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <BookOpen className="size-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Total Weeks
                  </p>
                </div>
                <p className="text-lg font-black text-slate-800 mt-2">
                  {pkg.totalHours} weeks
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <Calendar className="size-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Schedule
                  </p>
                </div>
                <p className="text-sm font-bold text-slate-800 mt-2 line-clamp-2">
                  {pkg.scheduleInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Sticky Register CTA */}
          <div className="lg:sticky lg:top-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Course Package Pricing
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
                    SAVE {discount}
                    {discountType === "PERCENTAGE" ? "%" : " AED"} INSTANTLY
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
                Register Now
              </Link>
              <p className="text-center text-xs text-slate-400 font-medium">
                Secure online payment processing
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Quality Seals */}
            <div className="space-y-3.5">
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
