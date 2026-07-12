"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  Info,
  BookOpen,
  Headphones,
  PenTool,
  Mic2,
  ShieldCheck,
  TrendingUp,
  Activity,
  Zap,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { BaseCard } from "@/components/blocks/cards/base-card";
import { Button, buttonVariants } from "@/components/ui/button";

/* ── Icon mapper (mirrors exam-details.tsx) ──────────────────────────────── */
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

/* ── Formatted-text renderer (mirrors exam-details.tsx) ──────────────────── */
function renderFormattedText(text: string): React.ReactNode {
  if (!text) return "";
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((boldPart, boldIdx) => {
    if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
      return (
        <strong key={`b-${boldIdx}`} className="font-bold text-slate-900">
          {boldPart.slice(2, -2)}
        </strong>
      );
    }
    const italicParts = boldPart.split(/(\*.*?\*)/g);
    return italicParts.map((italicPart, italicIdx) => {
      if (italicPart.startsWith("*") && italicPart.endsWith("*")) {
        return (
          <em
            key={`i-${boldIdx}-${italicIdx}`}
            className="italic text-slate-900 font-medium"
          >
            {italicPart.slice(1, -1)}
          </em>
        );
      }
      return italicPart;
    });
  });
}

/* ── Overview/body text renderer (tables + paragraphs) ───────────────────── */
function OverviewBody({ text }: { text: string }) {
  if (!text) return null;
  return (
    <>
      {text.split("\n\n").map((para, i) => {
        const lines = para.trim().split("\n");
        const isTable =
          lines.length > 1 &&
          lines.every((l) => {
            const t = l.trim();
            return t.startsWith("|") && t.endsWith("|");
          });

        if (isTable) {
          const tableRows = lines.filter((l) => !/^[|:\s-]+$/.test(l.trim()));
          if (tableRows.length > 0) {
            const parseCells = (row: string) =>
              row
                .split("|")
                .slice(1, -1)
                .map((c) => c.trim());
            const headers = parseCells(tableRows[0]);
            const bodyRows = tableRows.slice(1).map((r) => parseCells(r));
            return (
              <div
                key={i}
                className="my-6 w-full overflow-x-auto rounded-xl border border-slate-200/80 shadow-sm bg-white"
              >
                <table className="w-full min-w-125 border-collapse text-left text-xs lg:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80">
                      {headers.map((h, hi) => (
                        <th
                          key={hi}
                          className="px-5 py-3.5 font-black text-slate-900 border-r last:border-r-0 border-slate-200/85"
                        >
                          {renderFormattedText(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/60">
                    {bodyRows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="hover:bg-slate-50/30 transition-colors"
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-5 py-3.5 text-slate-700 leading-relaxed border-r last:border-r-0 border-slate-200/60 text-justify"
                          >
                            {renderFormattedText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        return (
          <p key={i} className="whitespace-pre-line text-justify">
            {renderFormattedText(para)}
          </p>
        );
      })}
    </>
  );
}

/* ── Props ───────────────────────────────────────────────────────────────── */
interface BookExamOverviewWrapperProps {
  exam: {
    name: string;
    slug?: string;
    description?: string;
    subtitle?: string;
    overview?: string;
    stats?: Array<{ label: string; value: string }>;
    sections?: Array<{
      name: string;
      duration?: string;
      details?: string;
      icon?: string;
      skills?: string[];
      format?: string;
      questions?: string;
      taskTypes?: string | string[];
      marks?: string;
    }>;
    whoShouldTake?: string[];
    acceptedFor?: string[];
    faqs?: Array<{ question: string; answer: string }>;
  };
  children: React.ReactNode;
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function BookExamOverviewWrapper({
  exam,
  children,
}: BookExamOverviewWrapperProps) {
  const slug = exam.slug || "";
  const isExternalExam =
    slug === "celpip" ||
    slug === "celpip-general" ||
    slug === "celpip-general-ls" ||
    slug === "cael";

  const [showForm, setShowForm] = useState(!isExternalExam);

  /* Once the user clicks "Continue to Book", reveal the form */
  if (showForm) {
    return <>{children}</>;
  }

  const stats = exam.stats || [];
  const sections = exam.sections || [];
  const whoShouldTake = exam.whoShouldTake || [];
  const acceptedFor = exam.acceptedFor || [];
  const faqs = exam.faqs || [];
  const overviewText = exam.overview || exam.description || "";
  const subtitle = exam.subtitle || "";

  const hideSections =
    slug === "pte-academic-ukvi" ||
    slug === "pte-home-a1" ||
    slug === "pte-home-a2" ||
    slug === "pte-home-b1";

  const isIelts = slug === "ielts-academic" || slug === "ielts-general";

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* ── Hero header (identical to exam-details) ── */}
      <div className="bg-slate-50 base-px base-py">
        <div className="section-container base-px w-full">
          <div className="max-w-4xl space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-secondary leading-tight">
              {exam.name} <span className="text-primary italic">Test</span>
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base font-medium text-secondary">
                {subtitle}
              </p>
            )}
            {/* "Register" button replaced by "Continue to Book" */}
            <Button
              onClick={() => {
                setShowForm(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-fit gap-2"
            >
              <Calendar size={16} /> Register
            </Button>
          </div>
        </div>
      </div>

      {/* ── Body grid (identical to exam-details) ── */}
      <div className="section-container base-px base-py">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ── Main column ── */}
          <div className="lg:col-span-2 space-y-6 min-w-0">
            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-[11px] text-slate-500 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-10 h-auto">
              {/* Overview Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 bg-primary rounded-full" />
                  <h2 className="text-xl font-black text-slate-900">
                    Overview
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-xs lg:text-sm text-justify">
                  <OverviewBody text={overviewText} />

                  {whoShouldTake.length > 0 && !hideSections && (
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      {whoShouldTake.map((item, i) => (
                        <li
                          key={i}
                          className="text-slate-600 leading-relaxed text-xs lg:text-sm text-justify"
                        >
                          {item.includes(":") ? (
                            <>
                              <strong className="font-bold text-slate-900">
                                {item.split(":")[0]}:
                              </strong>
                              {item.split(":").slice(1).join(":")}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* Test Format Section */}
              {sections.length > 0 && !hideSections && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h2 className="text-xl font-black text-slate-900">
                      Test Format
                    </h2>
                  </div>

                  <div
                    className={cn(
                      "grid gap-4",
                      isIelts ? "md:grid-cols-2" : "grid-cols-1",
                    )}
                  >
                    {sections.map((section, i) => (
                      <div
                        key={i}
                        className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-4 lg:p-5 transition-all hover:bg-white hover:shadow-md hover:border-primary/10"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                            <IconTile icon={section.icon || ""} />
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
                            <p className="text-slate-600 leading-relaxed text-xs whitespace-pre-line text-justify">
                              {section.details}
                            </p>

                            {section.skills && (
                              <div className="space-y-3">
                                {!isIelts && (
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Skills Assessed
                                  </p>
                                )}
                                <div
                                  className={cn(
                                    "grid gap-2",
                                    section.skills.some((s) => s.length > 50)
                                      ? "grid-cols-1"
                                      : "sm:grid-cols-2",
                                  )}
                                >
                                  {section.skills.map((skill, si) => (
                                    <div
                                      key={si}
                                      className="flex items-start gap-2 text-slate-700"
                                    >
                                      <CheckCircle2 className="size-3 text-primary shrink-0 mt-0.5" />
                                      <span className="text-xs text-justify">
                                        {skill.includes(":") ? (
                                          <>
                                            <strong className="font-bold text-slate-900">
                                              {skill.split(":")[0]}:
                                            </strong>
                                            {skill
                                              .split(":")
                                              .slice(1)
                                              .join(":")}
                                          </>
                                        ) : (
                                          skill
                                        )}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {(section.format ||
                              section.questions ||
                              section.taskTypes ||
                              section.marks) && (
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
                            )}
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
                    {faqs.map((faq, i) => (
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

          {/* ── Sidebar (identical to exam-details, but button is "Continue to Book") ── */}
          <aside className="space-y-4 lg:sticky lg:top-44 self-start">
            {acceptedFor.length > 0 && (
              <BaseCard className="p-5 bg-slate-900 border-slate-800 text-white h-auto">
                <h3 className="text-[11px] text-slate-500 mb-4">
                  Accepted For
                </h3>
                <ul className="space-y-3">
                  {acceptedFor.map((item, i) => (
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
                  </div>
                  <button
                    onClick={() => {
                      setShowForm(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={cn(
                      buttonVariants({ variant: "light", size: "sm" }),
                      "w-full font-black text-xs py-5 rounded-xl shadow-xl hover:scale-[1.02] transition-all",
                    )}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
