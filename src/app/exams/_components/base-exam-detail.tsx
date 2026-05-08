import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, CheckCircle2, Clock, FileText, Info } from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import BaseHeroSection from "@/components/base-hero-section";

export interface ExamSection {
  icon: "reading" | "listening" | "writing" | "speaking";
  name: string;
  duration: string;
  details: string;
  format?: string;
  questions?: string;
  taskTypes?: string | string[];
  marks?: string;
  skills?: string[];
  extraInfo?: string;
}

export interface ExamData {
  id: string;
  name: string;
  subtitle?: string;
  content: string;
  overview: string;
  testFormatIntro?: string;
  sections: ExamSection[];
  stats?: { label: string; value: string }[];
  whoShouldTake?: string[];
  acceptedFor?: string[];
  image: string;
  resultTimeline?: string;
}

const IconTile = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "reading":
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "listening":
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      );
    case "writing":
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      );
    case "speaking":
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      );
    default:
      return <Info size={24} />;
  }
};

export default function BaseExamDetail({ data }: { data: ExamData }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={data.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Exam Details
          </div>
          <h1 className="base-hero-section-heading text-white">
            {data.name} <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {data.content}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={`/book-exams/${data.id}`}
              className={buttonVariants({ size: "lg", className: "gap-2" })}
            >
              <Calendar className="size-4" />
              Book Your Exam
            </Link>
            <Link
              href="/free-consultation"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "bg-white/10 text-white border-white/20 hover:bg-white/20",
              })}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </BaseHeroSection>

      {/* Stats/Quick Info */}
      <div className="relative z-10 -mt-12 section-container base-px">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {data.stats?.map((stat, i) => (
            <BaseCard key={i} className="flex flex-col items-center justify-center p-6 text-center shadow-xl">
              <p className="text-2xl font-bold text-gray-900 lg:text-3xl">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">{stat.label}</p>
            </BaseCard>
          ))}
          {data.resultTimeline && (
            <BaseCard className="flex flex-col items-center justify-center p-6 text-center shadow-xl border-primary/20 bg-primary/5">
              <p className="text-2xl font-bold text-primary lg:text-3xl">{data.resultTimeline}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">Result Timeline</p>
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
              {data.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Test Format Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Test Format</h2>
            </div>
            {data.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {data.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {data.sections.map((section, i) => (
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
                        <h3 className="text-2xl font-bold text-gray-900">{section.name}</h3>
                        <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 border border-gray-100">
                          <Clock className="size-4" />
                          {section.duration}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">{section.details}</p>
                        
                        {section.skills && (
                          <div className="space-y-3">
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">Skills Assessed</p>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {section.skills.map((skill, si) => (
                                <div key={si} className="flex items-center gap-2 text-gray-700">
                                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                                  <span className="text-sm">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-gray-50">
                          {section.format && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Format</p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">{section.format}</p>
                            </div>
                          )}
                          {section.questions && (
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Questions</p>
                              <p className="text-sm font-medium text-gray-900 whitespace-pre-line">{section.questions}</p>
                            </div>
                          )}
                          {section.taskTypes && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Task Types</p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {Array.isArray(section.taskTypes) ? section.taskTypes.join(", ") : section.taskTypes}
                              </p>
                            </div>
                          )}
                          {section.marks && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Marks & Scoring</p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">{section.marks}</p>
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
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {data.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Who Should Take This?</h3>
              <ul className="space-y-4">
                {data.whoShouldTake.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          {data.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Accepted For</h3>
              <ul className="space-y-4">
                {data.acceptedFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          <GradientBox className="p-8 text-center rounded-3xl">
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FileText size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Ready to Start?</h3>
                <p className="text-sm text-red-100">Book your {data.name} test date today at TEPTH.</p>
              </div>
              <Link
                href={`/book-exams/${data.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg"
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official IELTS Test Centre partners ensuring high standards of delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
