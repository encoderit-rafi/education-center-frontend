import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  FileText,
  Info,
  BookOpen,
  Headphones,
  PenTool,
  Mic2,
  HelpCircle,
  ShieldCheck,
  TrendingUp,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardList,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";

const IconTile = ({ icon, size = 20 }: { icon: string; size?: number }) => {
  switch (icon) {
    case "reading":
      return <BookOpen size={size} />;
    case "listening":
      return <Headphones size={size} />;
    case "writing":
      return <PenTool size={size} />;
    case "speaking":
      return <Mic2 size={size} />;
    case "Activity":
      return <Activity size={size} />;
    case "Clock":
      return <Clock size={size} />;
    case "ShieldCheck":
      return <ShieldCheck size={size} />;
    case "TrendingUp":
      return <TrendingUp size={size} />;
    case "Zap":
      return <Zap size={size} />;
    default:
      return <Info size={size} />;
  }
};

export default function ExamDetails({ data }: { data: any }) {
  // Support both old nested structure and new flat structure
  const detailData = data.data || data;
  const stats = detailData.stats || [];
  const sections = detailData.sections || [];
  const whoShouldTake = detailData.whoShouldTake || [];
  const acceptedFor = detailData.acceptedFor || [];
  const faqs = detailData.faqs || [];
  const description =
    detailData.description || detailData.content || data.description;
  const subtitle = detailData.subtitle || "";
  const overview = detailData.overview || description;
  const image = data.image || "/images/exams/ielts/ielts-1.jpg";

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <div className="bg-slate-50 base-px base-py">
        <div className="section-container base-px w-full">
          <div className="max-w-4xl space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-secondary leading-tight">
              {data.name} <span className="text-primary italic">Test</span>
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base font-medium text-secondary">
                {subtitle}
              </p>
            )}
            <Link
              href={`/book-exams/${data.id}`}
              className={cn(buttonVariants(), "w-fit")}
            >
              <Calendar /> Register
            </Link>
          </div>
        </div>
      </div>
      <div className="section-container base-px base-py">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Tighter Stats Grid */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {stats.map((stat: any, i: number) => (
                  <div key={i} className="">
                    <p className="text-[11px]  text-slate-500 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Main Content Card (Tightened) */}
            <div className="space-y-10 h-auto">
              {/* Overview Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 bg-primary rounded-full" />
                  <h2 className="text-xl font-black text-slate-900">
                    Overview
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-xs lg:text-sm">
                  {overview
                    ?.split("\n\n")
                    .map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    )) || <p>{description}</p>}
                </div>
              </section>

              {/* Test Format Section */}
              {sections.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h2 className="text-xl font-black text-slate-900">
                      Test Format
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    {sections.map((section: any, i: number) => (
                      <div
                        key={i}
                        className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-4 lg:p-5 transition-all hover:bg-white hover:shadow-md hover:border-primary/10"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                            <IconTile icon={section.icon} />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="text-base font-black text-slate-900 group-hover:text-primary transition-colors">
                                {section.name}
                              </h3>
                              {section.duration && (
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2 py-0.5 text-[10px] font-bold text-slate-600 shadow-sm border border-slate-100">
                                  <Clock size={12} className="text-primary" />
                                  {section.duration}
                                </div>
                              )}
                            </div>
                            <p className="text-slate-600 leading-relaxed text-xs">
                              {section.details}
                            </p>

                            {section.skills && (
                              <div className="space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                  Skills Assessed
                                </p>
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {section.skills.map(
                                    (skill: string, si: number) => (
                                      <div
                                        key={si}
                                        className="flex items-center gap-2 text-slate-700"
                                      >
                                        <CheckCircle2 className="size-3 text-primary shrink-0" />
                                        <span className="text-xs">{skill}</span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}

                            <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-100">
                              {section.format && (
                                <div className="space-y-1 sm:col-span-2">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    Format
                                  </p>
                                  <p className="text-xs font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                                    {section.format}
                                  </p>
                                </div>
                              )}
                              {section.questions && (
                                <div className="space-y-1">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    Questions
                                  </p>
                                  <p className="text-sm font-medium text-slate-900 whitespace-pre-line">
                                    {section.questions}
                                  </p>
                                </div>
                              )}
                              {section.taskTypes && (
                                <div className="space-y-1 sm:col-span-2">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    Task Types
                                  </p>
                                  <p className="text-xs font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                                    {Array.isArray(section.taskTypes)
                                      ? section.taskTypes.join(", ")
                                      : section.taskTypes}
                                  </p>
                                </div>
                              )}
                              {section.marks && (
                                <div className="space-y-1 sm:col-span-2">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    Marks & Scoring
                                  </p>
                                  <p className="text-xs font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                                    {section.marks}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h2 className="text-xl font-black text-slate-900">FAQs</h2>
                  </div>
                  <div className="grid gap-2">
                    {faqs.map((faq: any, i: number) => (
                      <div
                        key={i}
                        className="group rounded-xl border border-slate-100 p-4 transition-all hover:bg-slate-50/50"
                      >
                        <div className="flex gap-3">
                          <HelpCircle className="size-4 text-primary shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="font-bold text-slate-900 leading-snug text-sm">
                              {faq.question}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar Area (Compact) */}
          <aside className="space-y-4 lg:pt-0">
            {whoShouldTake.length > 0 && (
              <BaseCard className="p-5 border-slate-200 bg-white h-auto">
                <h3 className="text-[11px]   text-slate-500 mb-4">
                  Who Should Take This?
                </h3>
                <ul className="space-y-3">
                  {whoShouldTake.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2.5">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 size={10} />
                      </div>
                      <span className="text-slate-600 leading-relaxed font-medium text-xs">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </BaseCard>
            )}

            {acceptedFor.length > 0 && (
              <BaseCard className="p-5 bg-slate-900 border-slate-800 text-white h-auto">
                <h3 className="text-[11px]   text-slate-500 mb-4">
                  Accepted For
                </h3>
                <ul className="space-y-3">
                  {acceptedFor.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      <span className="font-bold text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </BaseCard>
            )}

            <div className="relative group">
              <div className="bg-primary p-6 text-center rounded-2xl shadow-xl relative">
                <div className="space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-xl border border-white/20">
                    <Calendar size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-white">
                      Ready to Book?
                    </h3>
                    <p className="text-[11px] text-slate-100/80 leading-relaxed">
                      Secure your test date at TEPTH today.
                    </p>
                  </div>
                  <Link
                    href={`/book-exams/${data.id}`}
                    className={cn(
                      buttonVariants({ variant: "light", size: "sm" }),
                      "w-full font-black text-xs py-5 rounded-xl shadow-xl hover:scale-[1.02] transition-all",
                    )}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
