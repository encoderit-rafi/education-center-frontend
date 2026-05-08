import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Info,
  BookOpen,
  Headphones,
  PenTool,
  Mic2,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import BaseHeroSection from "@/components/base-hero-section";
import { EXAM_IDS_DATA } from "@/data";
import { cn } from "@/lib/utils";

const IconTile = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "reading":
      return <BookOpen size={24} />;
    case "listening":
      return <Headphones size={24} />;
    case "writing":
      return <PenTool size={24} />;
    case "speaking":
      return <Mic2 size={24} />;
    default:
      return <Info size={24} />;
  }
};

const seltData = {
  id: EXAM_IDS_DATA.selt.id,
  name: "Skills for English: SELT",
  image: "/images/exams/selt/selt-hero.jpg",
  content:
    "A UK Home Office-approved Secure English Language Test used for visa and immigration purposes (work, study, or settlement).",
  overview:
    "Skills for English: SELT is a secure, monitored, and recorded test conducted in a single session. It assesses English proficiency across levels A1 to C2, following the Common European Framework of Reference for Languages (CEFR).\n\nThe test is entirely computer-based and designed to provide a stress-free experience for candidates. Results are delivered quickly, usually within 3 to 5 days, making it an efficient choice for UK visa applicants.",
  testFormatIntro:
    "The test offers two main variants depending on your visa requirements. Candidates can choose between a two-skill or a four-skill assessment.",
  resultTimeline: "3-5 Days",
  stats: [
    { label: "Levels", value: "A1 to C2" },
    { label: "Format", value: "Computer" },
    { label: "Approval", value: "UK Home Office" },
    { label: "Sitting", value: "Single" },
  ],
  whoShouldTake: [
    "Individuals applying for a UK Work Visa",
    "Students applying for a UK Study Visa",
    "Individuals seeking UK Settlement or Citizenship",
    "Healthcare professionals requiring UK registration",
  ],
  acceptedFor: [
    "UK Work Visas",
    "UK Student Visas",
    "UK Settlement",
    "UK Citizenship",
  ],
  sections: [
    {
      icon: "speaking",
      name: "Two-Skill Test",
      duration: "Approx. 50 minutes",
      details: "Focuses on essential oral communication skills.",
      format: "Evaluates Speaking and Listening proficiency. This variant is typically required for family, spouse, or settlement visas at levels A1, A2, and B1.",
    },
    {
      icon: "writing",
      name: "Four-Skill Test",
      duration: "Up to 190 minutes",
      details: "Comprehensive assessment of academic and professional English.",
      format: "Evaluates Speaking, Listening, Reading, and Writing proficiency. This variant is usually required for work and study visas at levels B1, B2, C1, and C2.",
    },
  ],
};

export default function ExamSELT() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={seltData.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            UK Approved Test
          </div>
          <h1 className="base-hero-section-heading text-white">
            {seltData.name}{" "}
            <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {seltData.content}
          </p>
          <Link
            href={`/book-exams/${seltData.id}`}
            className={buttonVariants({ size: "lg", className: "gap-2" })}
          >
            <Calendar className="size-4" />
            Book Your Exam
          </Link>
        </div>
      </BaseHeroSection>

      {/* Stats/Quick Info */}
      <div className="relative z-10 -mt-12 section-container base-px">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {seltData.stats?.map((stat, i) => (
            <BaseCard
              key={i}
              className="flex flex-col items-center justify-center p-6 text-center shadow-xl"
            >
              <p className="text-2xl font-bold text-gray-900 lg:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">
                {stat.label}
              </p>
            </BaseCard>
          ))}
          {seltData.resultTimeline && (
            <BaseCard className="flex flex-col items-center bg-white justify-center p-6 text-center shadow-xl border-primary/20 ">
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {seltData.resultTimeline}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                Result Timeline
              </p>
            </BaseCard>
          )}
        </div>
      </div>

      <div className="section-container base-px base-py grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-16">
          {/* Overview Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
            </div>
            <div className="prose prose-red max-w-none text-gray-600 leading-relaxed space-y-4">
              {seltData.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Test Format Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Test Variants</h2>
            </div>
            {seltData.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {seltData.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {seltData.sections.map((section, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <IconTile icon={section.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {section.name}
                        </h3>
                        <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 border border-gray-100">
                          <Clock className="size-4" />
                          {section.duration}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {section.details}
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-gray-50">
                          {section.format && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Component Details
                              </p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {section.format}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Grading Section */}
          <section className="bg-blue-50 rounded-3xl p-8 border border-blue-100 space-y-4">
            <div className="flex items-center gap-3 text-blue-600 font-bold">
              <Award size={20} />
              <span>Grading & Results</span>
            </div>
            <div className="prose prose-blue max-w-none text-blue-900 font-medium">
              <p>
                Pass/fail results are provided for CEFR levels B1, B2, or C2.
                High achievement in these levels may also indicate a "Merit"
                status, reflecting superior language proficiency.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {seltData.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Who Should Take This?
              </h3>
              <ul className="space-y-4">
                {seltData.whoShouldTake.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          {seltData.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Accepted For
              </h3>
              <ul className="space-y-4">
                {seltData.acceptedFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          <GradientBox className="p-8 text-center rounded-3xl">
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ShieldCheck size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Start?
                </h3>
                <p className="text-sm text-red-100">
                  Book your {seltData.name} test date today at TEPTH.
                </p>
              </div>
              <Link
                href={`/book-exams/${seltData.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg",
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official SELT Test Centre partners ensuring high standards of
                delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
