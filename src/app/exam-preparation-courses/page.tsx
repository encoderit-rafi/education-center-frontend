"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import FreeConsultation from "../free-consultation/_components/free-consultation";

const exams = [
  {
    id: "ielts",
    title: "IELTS",
    shortTitle: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "Master the world's most popular English proficiency test for higher education and global migration. Our expert-led programs ensure you achieve your target band score.",
    highlights: [
      "Accepted by 11,000+ organizations",
      "Available in 140+ countries",
      "Academic & General Training modules",
    ],
    icon: Trophy,
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    shortTitle: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description:
      "Excel in academic English communication. The TOEFL iBT is preferred by universities in the USA, Canada, and across the globe for undergraduate and postgraduate studies.",
    highlights: [
      "Preferred by USA/Canada universities",
      "Accepted by 11,500+ institutions",
      "Focus on academic communication",
    ],
    icon: Award,
  },
  {
    id: "pte-academic",
    title: "PTE Academic",
    shortTitle: "PTE",
    fullName: "Pearson Test of English",
    description:
      "A fast, computer-based English test with results typically delivered within 48 hours. Our training leverages AI-scoring insights to maximize your performance.",
    highlights: [
      "Fast results (48-hour turnaround)",
      "AI-driven objective scoring",
      "Highly trusted for Australia & NZ",
    ],
    icon: Sparkles,
  },
  {
    id: "celpip-general",
    title: "CELPIP General",
    shortTitle: "CELPIP",
    fullName: "Canadian English Language Proficiency Index Program",
    description:
      "The definitive test for Canadian Permanent Residency and Citizenship. Our courses focus on practical, real-life Canadian English scenarios.",
    highlights: [
      "Approved for IRCC applications",
      "Practical real-life scenarios",
      "100% Canadian English context",
    ],
    icon: ShieldCheck,
  },
  {
    id: "selt",
    title: "Skills for English (SELT)",
    shortTitle: "SELT",
    fullName: "Secure English Language Test",
    description:
      "Essential for UK visa and immigration applications. We provide specialized training for work, family, and settlement visa requirements (A1-C2).",
    highlights: [
      "UK Home Office approved",
      "Work, Family & Settlement visas",
      "Official SELT-certified preparation",
    ],
    icon: CheckCircle2,
  },
];

export default function ExamPreparationCoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.05),transparent_40%)]" />
        <div className="container relative mx-auto px-4 py-20 lg:px-8 lg:py-32 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="size-3.5" />
              Premium Academic Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Exam Preparation{" "}
              <span className="text-primary italic">Courses</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Master international proficiency standards with our elite
              preparation programs. We combine official pedagogy with intensive
              practice to guarantee your success.
            </p>
            <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <Link
                href="#courses-grid"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "px-8 py-7 text-base font-bold shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300",
                )}
              >
                Explore Programs
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section id="courses-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <Link
                  key={exam.id}
                  href={`/exam-preparation-courses/${exam.id}`}
                  className="group flex flex-col h-full"
                >
                  <BaseCard className="p-10 flex flex-col h-full border-slate-200 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out bg-white rounded-[2.5rem]">
                    <div className="flex items-center justify-between mb-10">
                      <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <Icon className="size-7" />
                      </div>
                      <BaseCardArrow className="group-hover:translate-x-2 transition-transform duration-500" />
                    </div>

                    <div className="space-y-5 mb-10">
                      <BaseCardTitle className="text-2xl font-black text-slate-900 leading-tight">
                        {exam.title}
                      </BaseCardTitle>
                      <BaseCardDescription className="text-base text-slate-600 line-clamp-3 leading-relaxed font-medium italic">
                        &quot;{exam.description}&quot;
                      </BaseCardDescription>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                      {exam.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[13px] font-bold text-slate-700"
                        >
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <BaseCardImportantInfo className="mt-auto pt-8 border-t border-slate-100 bg-slate-50/50 -mx-10 -mb-10 px-10 py-8 rounded-b-[2.5rem]">
                      <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">
                        Certification Scope
                      </div>
                      <div className="text-[13px] font-black text-slate-900 leading-tight">
                        {exam.fullName}
                      </div>
                    </BaseCardImportantInfo>
                  </BaseCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Expert Guidance Footer ── */}
      <div className="mt-20">
        <FreeConsultation />
      </div>
    </main>
  );
}
