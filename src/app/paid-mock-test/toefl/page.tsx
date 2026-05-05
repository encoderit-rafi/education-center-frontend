import React from "react";
import Link from "next/link";
import {
  Shuffle,
  Gauge,
  BookOpen,
  Mic,
  Timer,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { buttonVariants } from "@/components/ui/button";
import MockTestBookingForm from "../_components/mock-test-booking-form";

const benefits = [
  {
    title: "Adaptive Test Readiness",
    description:
      "The updated TOEFL uses an adaptive system in Reading and Listening where difficulty changes based on your performance. Mock tests help you master this dynamic flow.",
    icon: <Shuffle />,
    points: [
      "Maintain accuracy from the start",
      "Stay calm when difficulty shifts",
      "Avoid distraction during difficulty shifts",
    ],
  },
  {
    title: "Mastering the Faster Pace",
    description:
      "With the overall time reduced to 90 minutes, the pace is noticeably faster. Practice under real time limits to prioritize essential information over overthinking.",
    icon: <Gauge />,
    points: [
      "Faster reading comprehension",
      "Quick note-taking during listening",
      "Immediate response planning",
    ],
  },
  {
    title: "New Academic Task Practice",
    description:
      "The latest TOEFL includes tasks that resemble real academic interactions. Mock tests ensure you understand the level of detail expected in these responses.",
    icon: <BookOpen />,
    points: [
      "Familiarity with new task structures",
      "Efficient response planning",
      "Master practical communication styles",
    ],
  },
  {
    title: "Rapid Speaking Response",
    description:
      "In the updated format, speaking tasks provide very little preparation time. Timed mock testing is the only way to build real speaking confidence and fluency.",
    icon: <Mic />,
    points: [
      "Structure responses within seconds",
      "Speak clearly without long pauses",
      "Maintain organization under pressure",
    ],
  },
  {
    title: "Digital Intensive Stamina",
    description:
      "Although shorter, the test demands continuous concentration. Learn to manage mental fatigue and maintain consistency across all sections.",
    icon: <Timer />,
    points: [
      "Manage mental fatigue effectively",
      "Focus during rapid task transitions",
      "Remain consistent across sections",
    ],
  },
  {
    title: "Realistic Score Patterns",
    description:
      "Well-designed mock tests reveal patterns like weak speaking organization or slow reading speed, making your preparation far more focused and productive.",
    icon: <TrendingUp />,
    points: [
      "Identify weak speaking organization",
      "Measure reading speed under pressure",
      "Analyze writing structure patterns",
    ],
  },
];

export default function PaidMockTestTOEFL() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-5xl xl:text-6xl mb-6">
                TOEFL iBT <span className="text-primary">Mock Test</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                "The TOEFL exam is not only about English ability anymore — it
                is about how quickly and efficiently you can respond in a
                digital, adaptive test environment."
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                With the updated TOEFL format being shorter, faster, and more
                adaptive, mock tests have become even more critical for
                achieving elite scores.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#booking-section"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "px-8 py-6 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                  )}
                >
                  Book Your Test
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/free-consultation"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "px-8 py-6 text-base font-bold hover:bg-slate-50 transition-all duration-300"
                  )}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="base-py bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 lg:text-4xl mb-4">
              Benefits of Mock Tests for{" "}
              <span className="text-primary">TOEFL iBT</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Master the 2026 adaptive format and faster pace before your
              actual test day.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BaseCard
                key={index}
                className="p-8 flex flex-col h-full border-slate-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <BaseCardIcon>{benefit.icon}</BaseCardIcon>
                  <span className="text-4xl font-black text-slate-50 opacity-10 select-none group-hover:opacity-20 transition-opacity">
                    0{index + 1}
                  </span>
                </div>

                <BaseCardTitle className="mb-4 text-lg">
                  {benefit.title}
                </BaseCardTitle>

                <BaseCardDescription className="mb-6 line-clamp-none text-slate-600 leading-relaxed">
                  {benefit.description}
                </BaseCardDescription>

                {benefit.points && (
                  <ul className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    {benefit.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h3 className="text-white text-3xl font-bold italic mb-8 leading-snug">
            "Students who only study theory often struggle with these tasks
            because the challenge is not language difficulty but response
            efficiency."
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">
            Master the Shorter, Faster TOEFL iBT
          </p>
        </div>
      </section>

      <section id="booking-section" className="base-py bg-white">
        <div className="section-container base-px">
          <h2 className="section-title text-center mb-10">
            Book Your <span className="text-primary">TOEFL Mock Test</span>
          </h2>
          <MockTestBookingForm initialMockTestId="toefl" />
        </div>
      </section>
    </div>
  );
}
