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
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import FreeConsultation from "../free-consultation/_components/free-consultation";

const exams = [
  {
    id: "ielts",
    title: "IELTS Academic & General",
    shortTitle: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "One of the most widely recognized English proficiency exams, accepted by over 11,000 universities and organizations across more than 140 countries.",
    highlights: [
      "Accepted in 140+ countries",
      "Trusted by 11,000+ institutions",
      "Ideal for study, work, and migration",
    ],
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    shortTitle: "TOEFL",
    fullName: "Test of English as a Foreign Language (Internet-Based Test)",
    description:
      "One of the oldest and most respected English proficiency exams, widely used for university admission, especially in the United States and Canada.",
    highlights: [
      "Accepted in 160+ countries",
      "11,500+ institutions worldwide",
      "Best for academic study abroad",
    ],
  },
  {
    id: "pte",
    title: "PTE Academic",
    shortTitle: "PTE",
    fullName: "Pearson Test of English",
    description:
      "A fully computer-based English proficiency exam with fast results and AI-based scoring.",
    highlights: [
      "Results within 48 hours",
      "AI-based scoring system",
      "Ideal for fast results & computer-based testing",
    ],
  },
  {
    id: "celpip",
    title: "CELPIP General",
    shortTitle: "CELPIP",
    fullName: "Canadian English Language Proficiency Index Program",
    description:
      "A test specifically designed for Canadian immigration and citizenship applications.",
    highlights: [
      "Designed for Canada immigration",
      "Real-life practical scenarios",
      "Evaluates all four skills",
    ],
  },
  {
    id: "selt",
    title: "Skills for English - SELT",
    shortTitle: "SELT",
    fullName: "Secure English Language Test",
    description:
      "An English test approved by the UK Home Office for visa and immigration applications.",
    highlights: [
      "UK Home Office approved",
      "Required for UK visas",
      "Official SELT-certified exams only",
    ],
  },
];

export default function ExamPreparationCoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Exam Preparation <span className="text-primary">Courses</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Achieve your target score with our premium training programs. 
              Our specialized courses combine expert pedagogy with rigorous practice to ensure academic and professional success.
            </p>
          </div>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="base-py bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam, index) => (
              <Link
                key={exam.id}
                href={`/exam-preparation-courses/${exam.id}`}
                className="group"
              >
                <BaseCard className="p-8 h-full flex flex-col border-slate-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out">
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-8">
                    <BaseCardIcon className="bg-primary/5 text-primary">
                      0{index + 1}
                    </BaseCardIcon>
                    <BaseCardArrow />
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4 mb-8">
                    <BaseCardTitle className="text-xl leading-tight">
                      {exam.title}
                    </BaseCardTitle>
                    <BaseCardDescription className="text-sm line-clamp-3 leading-relaxed">
                      {exam.description}
                    </BaseCardDescription>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {exam.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-600">
                        <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Footer Important Info */}
                  <BaseCardImportantInfo className="mt-auto pt-6 border-t border-slate-100 bg-slate-50/50 -mx-8 -mb-8 px-8 py-6 rounded-b-[2rem]">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Official Full Name</div>
                    <div className="text-xs font-black text-slate-900">
                      {exam.fullName}
                    </div>
                  </BaseCardImportantInfo>
                </BaseCard>
              </Link>
            ))}
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
