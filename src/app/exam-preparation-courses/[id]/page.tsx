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
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { PriceDisplay } from "@/components/ui/price-display";
import api from "@/axios";

interface CourseDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  keyBenefits: string[];
  focusArea: string[];
  bannerImage: string | null;
}

interface CoursePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  discountType: "PERCENTAGE" | "FIXED" | null;
  discountValue: number | null;
  duration: string;
  scheduleInfo: string;
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

  try {
    const [courseRes, packagesRes] = await Promise.all([
      api.get<ApiResponse<CourseDetail>>(`/courses/${slug}`),
      api.get<ApiResponse<CoursePackage[]>>(`/courses/${slug}/packages`),
    ]);

    if (courseRes.data.success) {
      course = courseRes.data.data;
    }
    if (packagesRes.data.success) {
      packages = packagesRes.data.data;
    }
  } catch (error) {
    console.error("Error fetching course data:", error);
  }

  if (!course) {
    notFound();
  }

  const data = course; // For easier mapping

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

      {/* ── Packages Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="px-4 lg:px-8 max-w-9xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {data.name} <span className="text-primary">Preparation Path</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Master the {data.name} exam with our strategic preparation
              programs tailored for your success.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-4 [grid-template-rows:repeat(7,auto)]">
            {packages.map((pkg, index) => {
              const basePrice = parseFloat(pkg.price);
              const discount = pkg.discountValue || 0;
              const discountedPrice =
                pkg.discountType === "PERCENTAGE"
                  ? Math.round(basePrice * (1 - discount / 100))
                  : basePrice - discount;

              return (
                <BaseCard
                  key={index}
                  className="grid [grid-template-rows:subgrid] row-span-7 border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out p-0"
                >
                  {/* Row 1 — Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        pkg.slug.includes("group")
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {discount > 0 && (
                      <div className="absolute top-4 right-4">
                        <Badge className="py-1 px-3 font-bold shadow-lg">
                          SAVE {discount}
                          {pkg.discountType === "PERCENTAGE" ? "%" : ""}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Row 2 — Title */}
                  <div className="px-3 pt-4">
                    <BaseCardTitle className="text-xl leading-tight">
                      {pkg.name}
                    </BaseCardTitle>
                  </div>

                  {/* Row 3 — Price */}
                  <div className="px-3 pt-2">
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
                  <div className="px-3 pt-3">
                    <BaseCardDescription className="text-sm line-clamp-none text-slate-600 font-medium">
                      {pkg.description}
                    </BaseCardDescription>
                  </div>

                  {/* Row 5 — Best For */}
                  <div className="px-3 pt-3 space-y-2">
                    <Badge variant={"destructive"}>Best For</Badge>
                    <BaseCardList items={pkg.bestFor || []} checked />
                  </div>

                  {/* Row 6 — Duration / Schedule */}
                  <div className="px-3 pt-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[11px] text-slate-400">Duration</p>
                        <p className="text-xs text-slate-900">
                          {pkg.duration} Hours
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400">Schedule</p>
                        <p className="text-xs text-slate-900">
                          {pkg.scheduleInfo}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Row 7 — CTA */}
                  <div className="px-3 pt-3 pb-4">
                    <Link
                      href={`/exam-preparation-courses/registration?examId=${slug}&courseId=${pkg.id}&price=${discountedPrice}&currency=AED`}
                      className={cn(
                        buttonVariants(),
                        "font-bold h-10 shadow-sm px-4 w-full",
                      )}
                    >
                      <Calendar />
                      Register
                    </Link>
                  </div>
                </BaseCard>
              );
            })}
          </div>
        </div>
      </section>
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
