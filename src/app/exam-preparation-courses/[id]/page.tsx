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
import { EXAM_PREPARATION_COURSES_DATA } from "@/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";

export default async function ExamPreparationDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = EXAM_PREPARATION_COURSES_DATA.find((item) => item.id === id);

  if (!data) {
    notFound();
  }

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
                {data.exam.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-sm  text-slate-400 mb-4 flex items-center gap-2">
                    <Target className="size-4 text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {data.exam.usage.map((item, i) => (
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
                    {data.exam.types.map((type, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm  text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {type.name}
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
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {data.exam.name}{" "}
              <span className="text-primary">Preparation Path</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Master the {data.exam.name} exam with our strategic preparation
              programs tailored for your success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...data.courses]
              .sort((a, b) => {
                const order = [
                  "group",
                  "semi_private",
                  "vip_classroom",
                  "online",
                ];
                const aIndex = order.findIndex((id) => a.id.includes(id));
                const bIndex = order.findIndex((id) => b.id.includes(id));
                return aIndex - bIndex;
              })
              .map((course, index) => {
                const discountedPrice = course.general_discount
                  ? Math.round(
                      course.price * (1 - course.general_discount / 100),
                    )
                  : course.price;

              return (
                <BaseCard
                  key={index}
                  className="flex flex-col h-full border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out p-0"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        course.id.includes("group")
                          ? "/images/hero/image-3.jpg"
                          : course.id.includes("semi_private")
                            ? "/images/hero/image-6.png"
                            : course.id.includes("vip") &&
                                course.id.includes("classroom")
                              ? "/images/hero/image-7.png"
                              : course.id.includes("online")
                                ? "/images/hero/image-8.png"
                                : "/images/hero/image-3.jpg"
                      }
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="py-1 px-3 font-bold shadow-lg">
                        SAVE {course.general_discount}%
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-6">
                      <BaseCardTitle className="text-xl mb-4 leading-tight">
                        {course.name}
                      </BaseCardTitle>

                      <div className="flex items-baseline gap-3">
                        <PriceDisplay amount={discountedPrice} className="text-3xl" />
                        {course.general_discount > 0 && (
                          <span className="text-sm text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
                            <PriceDisplay amount={course.price} iconClassName="h-[0.7em]" />
                          </span>
                        )}
                      </div>
                    </div>

                    <BaseCardDescription className="text-sm mb-4 line-clamp-none text-slate-600 font-medium">
                      {course.description}
                    </BaseCardDescription>

                    <div className="space-y-4 mt-auto">
                      <Badge variant={"destructive"}>Best For</Badge>
                      <BaseCardList items={course.bestFor} checked />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[11px]  text-slate-400 ">
                            Duration
                          </p>
                          <p className="text-xs text-slate-900">
                            {course.details.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px]  text-slate-400">
                            Schedule
                          </p>
                          <p className="text-xs  text-slate-900">
                            {course.details.schedule}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/exam-preparation-courses/registration?examId=${id}&courseId=${course.id}&price=${discountedPrice}&currency=${course.currency}`}
                        className={cn(
                          buttonVariants(),
                          "font-bold h-10 shadow-sm mt-3 px-4",
                        )}
                      >
                        <Calendar />
                        Register
                      </Link>
                    </div>
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
  return EXAM_PREPARATION_COURSES_DATA.map((course) => ({
    id: course.id,
  }));
}
