"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { COURSES } from "@/lib/exam-preparation-courses-data";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Courses() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Course Grid ── */}
      <section className="base-py base-px bg-[#F9FAFB]">
        <div className="section-container">
          <div className="mb-14 text-center space-y-4">
            <h2 className="section-title">
              Available <span>Courses</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Explore our range of specialized training programs designed to
              help you achieve your academic and professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <BaseCard key={course.id} className="p-7">
                <div className="flex-1 flex flex-col space-y-2">
                  <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                    {course.title}
                  </BaseCardTitle>
                  <BaseCardDescription className="mb-4">
                    {course.description}
                  </BaseCardDescription>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/enroll-course?course=${course.id}`}
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        className:
                          "h-11 rounded-md font-bold uppercase tracking-widest text-xs",
                      }),
                      "w-full bg-primary! hover:bg-primary/90!",
                    )}
                  >
                    Register
                  </Link>
                  <Link
                    href={`/exam-preparation-courses/${course.id}`}
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        className:
                          "h-11 rounded-md font-bold uppercase tracking-widest text-xs",
                      }),
                      "w-full",
                    )}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expert Guidance Banner ── */}
      <GradientBox className="p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Need expert <br className="hidden lg:block" /> guidance?
          </h2>
          <p className="text-red-100 text-lg mb-10 leading-relaxed font-medium">
            Our academic advisors are ready to help you choose the right path
            for your specific goals. Step into our atelier for a personalized
            consultation session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/free-consultation"
              className={buttonVariants({
                variant: "light",
                className: "px-8 py-6 rounded-xl font-bold ",
              })}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </GradientBox>
    </main>
  );
}
