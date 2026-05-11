import {
  BaseCard,
  BaseCardDescription,
  BaseCardImportantInfo,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FEES_DATA } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exam = FEES_DATA.find((exam) => exam.id === id);
  if (!exam) return notFound();
  return (
    <section id="packages" className="base-py bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {exam.name} <span className="text-primary">Fees</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Here are the latest exam fees for the {exam.name} exam in the UAE.
            Please choose the option that best suits your preparation needs.
          </p>
        </div>
        <div className="space-y-8">
          <div className=" space-y-4">
            <div className="">
              <h3 className="section-title">Course Fees</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exam.courses.map((course, index) => {
                const discountedPrice = course.general_discount
                  ? Math.round(
                      course.price * (1 - course.general_discount / 100),
                    )
                  : course.price;

                return (
                  <BaseCard
                    key={index}
                    //   className="p-8 flex flex-col h-full border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out"
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <BaseCardTitle className="text-xl mb-4 leading-tight">
                          {course.name}
                        </BaseCardTitle>

                        <Badge className="py-0.5 px-2 font-semibold">
                          SAVE {course.general_discount}%
                        </Badge>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-primary">
                            {discountedPrice}
                          </span>
                        </div>
                        {course.general_discount > 0 && (
                          <span className="text-sm text-slate-400 line-through decoration-slate-300">
                            {course.price} {course.currency}
                          </span>
                        )}
                      </div>
                    </div>

                    <BaseCardImportantInfo>
                      You get {course.special_discount}% on this course if you
                      book exam with TEPTH.
                    </BaseCardImportantInfo>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <Link
                        href={`/book-exams/${exam.id}`}
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        <Calendar />
                        Register Now
                      </Link>
                      <Link
                        href={`/exam-preparation-courses/registration?examId=${exam.id}&courseId=${course.id}&price=${course.price}&currency=${course.currency}`}
                        className={buttonVariants({
                          variant: "outline",
                          className: "w-full",
                        })}
                      >
                        Enroll in Course
                        <ArrowRight />
                      </Link>
                    </div>
                  </BaseCard>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="section-title">Workshop Fees</h3>
            </div>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
              {exam.workshops.map((course, index) => {
                return (
                  <BaseCard
                    key={index}
                    //   className="p-8 flex flex-col h-full border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out"
                  >
                    <div className="flex flex-col gap-2">
                      <BaseCardTitle className="text-xl mb-4 leading-tight">
                        {course.name}
                      </BaseCardTitle>

                      <Link
                        href={`/workshop-registration?examId=${exam.id}&workshopId=${course.id}&price=${course.price}&currency=${course.currency}`}
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        <Calendar />
                        Register Now
                      </Link>
                    </div>
                  </BaseCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
