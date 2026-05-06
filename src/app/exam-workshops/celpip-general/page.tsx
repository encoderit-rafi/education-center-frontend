import React from "react";
import Link from "next/link";
import {
  Clock,
  Target,
  Zap,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { buttonVariants } from "@/components/ui/button";
import ExamWorkshopForm from "../_components/exam-workshop-form";

export const celpipWorkshop = {
  id: "celpip-general",
  title: "CELPIP General Workshops",
  subtitle: "Canadian English Language Proficiency Index Program",
  tagline: "Exam Coming Up Soon? Prepare Smart, Not Just Hard.",

  description:
    "Our intensive workshops at TEPTH – The Exam Preparation & Testing House help you quickly understand the exam format, master key strategies, and improve your performance in CELPIP — all in focused sessions designed for busy candidates.",

  workshops: [
    {
      id: "2hr",
      duration: "2-Hour",
      title: "Targeted Workshop",
      price: 600,
      currency: "AED",
      description:
        "The 2-hour workshop is ideal for candidates who want to focus on one specific module of their exam.",

      details: [
        "Many test-takers feel confident in some areas but struggle with others.",
        "This short session allows them to work directly on the section that needs the most attention.",
      ],

      focusModules: ["Reading", "Writing", "Listening", "Speaking"],

      includes: [
        "Explanation of exam format",
        "Scoring criteria breakdown",
        "Common mistakes analysis",
        "Practical examples and strategies",
      ],

      outcome:
        "Helps candidates quickly understand a specific section before their exam.",
    },

    {
      id: "4hr",
      duration: "4-Hour",
      title: "Focus Workshop",
      price: 1000,
      currency: "AED",
      description:
        "The 4-hour workshop allows candidates to work on two modules of the exam in a focused and structured session.",

      suitableFor: [
        "Reading and Writing",
        "Listening and Speaking",
        "Any combination based on the candidate’s needs",
      ],

      includes: [
        "Task structure explanation",
        "Scoring expectations",
        "Proven strategies",
        "Practical exercises",
        "Performance tips",
      ],

      outcome:
        "Ideal for targeted preparation without committing to a full course.",
    },

    {
      id: "6hr",
      duration: "6-Hour",
      title: "Intensive Workshop",
      price: 1350,
      currency: "AED",
      description:
        "Provides a more comprehensive review of three exam modules.",

      suitableFor: [
        "Candidates who want to quickly strengthen multiple skills before their exam",
      ],

      includes: [
        "Exam structure and task types",
        "Practical strategies for each selected module",
        "Guided practice with exam-style questions",
        "Immediate feedback and performance tips",
      ],

      extra:
        "Instructor can address individual challenges with detailed explanations and additional practice.",

      outcome:
        "Balanced, practical preparation across multiple modules in a short time.",
    },

    {
      id: "8hr",
      duration: "8-Hour",
      title: "Complete Exam Workshop",
      price: 1600,
      currency: "AED",
      description:
        "Offers a complete overview of the exam and covers all four modules, or any combination preferred by the candidate.",

      suitableFor: [
        "Full introduction to the exam structure",
        "Short but comprehensive crash course",
        "Last-minute preparation before exam deadline",
      ],

      includes: [
        "Understanding how each section works",
        "Examiner expectations",
        "Task strategies",
      ],

      outcome:
        "Candidates gain a clear understanding of the exam format, scoring system, and effective techniques for handling each module.",
    },
  ],

  commonFeatures: {
    title: "Flexible Workshops at TEPTH",
    description:
      "All workshops at TEPTH – The Exam Preparation & Testing House are:",
    features: [
      "Face-to-face and one-on-one",
      "Fully customizable according to the candidate’s needs",
      "Focused on practical exam strategies and performance",
    ],
  },

  idealFor: [
    "Candidates who have an exam scheduled soon",
    "Those who want to refresh their knowledge quickly",
    "Students needing guidance on specific modules",
    "Anyone who wants to understand the exam format before starting preparation",
  ],

  logistics: {
    location: "Suite 703, Apricot Tower, DSO",
    scheduling: "Flexible",
  },

  finalOutcome:
    "These focused sessions allow candidates to gain clarity, improve their approach, and walk into the exam with greater confidence.",
};

export default function ExamWorkshopsCELPIP() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Award className="size-3.5" />
              {celpipWorkshop.subtitle}
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-6xl mb-6">
              {celpipWorkshop.title}
            </h1>
            <p className="text-2xl font-bold text-slate-800 mb-6 italic">
              "{celpipWorkshop.tagline}"
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {celpipWorkshop.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#packages"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "px-8 py-6 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                )}
              >
                View Packages
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <div className="flex items-center gap-6 px-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <MapPin className="size-4 text-primary" />
                  {celpipWorkshop.logistics.location}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Calendar className="size-4 text-primary" />
                  {celpipWorkshop.logistics.scheduling} Schedule
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshop Variants Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 lg:text-4xl mb-4">
              Workshop <span className="text-primary">Packages</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Choose the duration that fits your needs. Each session is one-on-one
              and fully customized to your target score.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {celpipWorkshop.workshops.map((w) => (
              <BaseCard
                key={w.id}
                className="p-8 flex flex-col h-full border-slate-200 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock className="size-24 -mr-8 -mt-8" />
                </div>
                
                <div className="mb-6">
                  <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full">
                    {w.duration}
                  </span>
                </div>

                <BaseCardTitle className="text-xl mb-2">
                  {w.title}
                </BaseCardTitle>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm font-bold text-slate-400">{w.currency}</span>
                  <span className="text-3xl font-black text-slate-900">{w.price}</span>
                </div>

                <BaseCardDescription className="text-sm mb-6 line-clamp-none text-slate-600 font-medium">
                  {w.description}
                </BaseCardDescription>

                <div className="space-y-4 mt-auto">
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                      Includes
                    </p>
                    <ul className="space-y-2">
                      {w.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-600">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="#booking-section"
                    className={cn(
                      buttonVariants(),
                      "w-full font-bold transition-all"
                    )}
                  >
                    Select Plan
                  </Link>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideal For & Common Features ── */}
      <section className="base-py bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">
                  Ideal <span className="text-primary">Candidates</span>
                </h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {celpipWorkshop.idealFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="size-4 text-primary" />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-secondary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Users className="size-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-6">
                  {celpipWorkshop.commonFeatures.title}
                </h2>
                <p className="text-white/70 mb-8 text-lg font-medium">
                  {celpipWorkshop.commonFeatures.description}
                </p>
                <ul className="space-y-6">
                  {celpipWorkshop.commonFeatures.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                        <ArrowRight className="size-3 text-white" />
                      </div>
                      <span className="text-xl font-bold tracking-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-12 border-t border-white/10 italic text-white/60 font-medium">
                  {celpipWorkshop.finalOutcome}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Section ── */}
      <section id="booking-section" className="base-py bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 lg:text-5xl mb-6">
              Book Your <span className="text-primary">CELPIP Workshop</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Secure your session now. Our team will contact you to confirm the
              schedule and customize your module focus.
            </p>
          </div>
          <ExamWorkshopForm examType="celpip-general" />
        </div>
      </section>
    </div>
  );
}
