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
import { useTranslations, useLocale } from "next-intl";

import { EXAM_DETAILE_DATA } from "@/data";

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

const SLUG_TO_STATIC_ID: Record<string, string> = {
  "ukvi-speaking-and-listening-level-a1": "selt-a1",
  "ukvi-speaking-and-listening-at-level-a1": "selt-a1",
  "ukvi-speaking-and-listening-level-a2": "selt-a2",
  "ukvi-speaking-and-listening-at-level-a2": "selt-a2",
  "ukvi-speaking-and-listening-level-b1": "selt-b1",
  "ukvi-speaking-and-listening-at-level-b1": "selt-b1",
  "ukvi-speaking-listening-reading-and-writing-b1": "selt-b1-r-w",
  "ukvi-speaking-listening-reading-and-writing-at-level-b1": "selt-b1-r-w",
  "ukvi-speaking-listening-reading-and-writing-b2": "selt-b2",
  "ukvi-speaking-listening-reading-and-writing-at-level-b2": "selt-b2",
  "ukvi-speaking-and-listening-at-level-b2": "selt-b2",
  "ukvi-speaking-listening-reading-and-writing-c1": "selt-c1",
  "ukvi-speaking-listening-reading-and-writing-at-level-c1": "selt-c1",
  "ukvi-speaking-and-listening-at-level-c1": "selt-c1",
  "ukvi-speaking-listening-reading-and-writing-c2": "selt-c2",
  "ukvi-speaking-listening-reading-and-writing-at-level-c2": "selt-c2",
  "ukvi-speaking-and-listening-at-level-c2": "selt-c2",
};

export default function ExamDetails({ data }: { data: any }) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("ExamDetailsPage");

  // Find matching static metadata to enrich the dynamic backend data
  const targetId = SLUG_TO_STATIC_ID[data.slug] || data.slug || data.id;
  const staticMeta = EXAM_DETAILE_DATA.find(
    (item: any) =>
      item.id === targetId ||
      item.id === data.id ||
      item.id === data.slug ||
      item.slug === data.slug ||
      item.name?.toLowerCase() === data.name?.toLowerCase(),
  ) as any;

  // Look up localized metadata from translations
  const examId = staticMeta?.id || data.slug || data.id;
  let localizedMeta: any = {};
  if (examId) {
    try {
      localizedMeta = t.raw(examId) || {};
    } catch (e) {
      // Graceful fallback to static English data if translation key doesn't exist
    }
  }

  const stats =
    (isRtl && localizedMeta.stats?.length ? localizedMeta.stats : null) ||
    (data.stats?.length ? data.stats : null) ||
    staticMeta?.stats ||
    [];

  // Safely merge sections to preserve the static icon property
  let sections = (
    (isRtl && localizedMeta.sections?.length ? localizedMeta.sections : null) ||
    (data.sections?.length ? data.sections : null) ||
    staticMeta?.sections ||
    []
  ).map((section: any, idx: number) => {
    const staticSection = staticMeta?.sections?.[idx] || {};
    return {
      ...staticSection,
      ...section,
    };
  });

  if (data.slug === "pte-academic" || data.slug === "pte-core") {
    sections = [];
  }

  const whoShouldTake =
    (isRtl && localizedMeta.whoShouldTake?.length ? localizedMeta.whoShouldTake : null) ||
    (data.whoShouldTake?.length ? data.whoShouldTake : null) ||
    staticMeta?.whoShouldTake ||
    [];

  const acceptedFor =
    (isRtl && localizedMeta.acceptedFor?.length ? localizedMeta.acceptedFor : null) ||
    (data.acceptedFor?.length ? data.acceptedFor : null) ||
    staticMeta?.acceptedFor ||
    [];

  const faqs =
    (isRtl && localizedMeta.faqs?.length ? localizedMeta.faqs : null) ||
    (data.faqs?.length ? data.faqs : null) ||
    staticMeta?.faqs ||
    [];

  const description =
    (isRtl && localizedMeta.description) ||
    data.translations?.[locale]?.description ||
    data.description ||
    staticMeta?.description ||
    data.content ||
    "";

  const subtitle =
    (isRtl && localizedMeta.subtitle) ||
    data.translations?.[locale]?.subtitle ||
    data.subtitle ||
    staticMeta?.subtitle ||
    "";

  const overview =
    (isRtl && localizedMeta.overview) ||
    data.translations?.[locale]?.overview ||
    (data?.overview && data.overview.length > 150 ? data.overview : null) ||
    staticMeta?.overview ||
    data?.overview ||
    description;

  const cleanDisplayExamName = (name: string) => {
    if (!name) return "";
    const trimmed = name.trim();
    if (trimmed.toLowerCase() === "celpip general" || trimmed.toLowerCase() === "celpip-general") {
      return "CELPIP-G";
    }
    return trimmed;
  };

  const name = cleanDisplayExamName(
    (isRtl && localizedMeta.name) ||
    data.translations?.[locale]?.name ||
    data.translations?.[locale]?.title ||
    data.name ||
    staticMeta?.name ||
    ""
  );

  const image = data.image || staticMeta?.image || "/images/exams/ielts/ielts-1.jpg";

  const registerUrl = data.examFormRedirectUrl || `/book-exams/${data.slug}`;
  const isExternalRegister = !!data.examFormRedirectUrl;

  const rawEng = data.originalName || "";
  const displayEng = cleanDisplayExamName(rawEng);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <div className="bg-slate-50 base-px base-py">
        <div className="section-container base-px w-full">
          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-secondary leading-tight">
              {name} {isRtl && displayEng && displayEng !== name ? `(${displayEng})` : ""} <span className="text-primary italic">{isRtl ? "اختبار" : "Test"}</span>
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base font-medium text-secondary leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="pt-1">
              <Link
                href={registerUrl}
                target={isExternalRegister ? "_blank" : undefined}
                rel={isExternalRegister ? "noopener noreferrer" : undefined}
                className={cn(buttonVariants(), "w-fit flex items-center gap-2")}
              >
                <Calendar className="size-4" /> {isRtl ? "تسجيل" : "Register"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container base-px base-py">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 min-w-0">
            {/* Stats Grid Card */}
            {stats.length > 0 && (
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4 bg-slate-50/50 p-3 sm:p-4.5 rounded-2xl border border-slate-100/80">
                {stats.map((stat: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
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
                    {isRtl ? "نظرة عامة" : "Overview"}
                  </h2>
                </div>
                <div className="w-full text-slate-600 leading-relaxed text-sm md:text-[15px] lg:text-base space-y-5 text-justify">
                  {(() => {
                    const renderFormattedText = (text: string) => {
                      if (!text) return "";
                      const boldParts = text.split(/(\*\*.*?\*\*)/g);
                      return boldParts.map((boldPart, boldIdx) => {
                        if (
                          boldPart.startsWith("**") &&
                          boldPart.endsWith("**")
                        ) {
                          return (
                            <strong
                              key={`b-${boldIdx}`}
                              className="font-bold text-slate-900"
                            >
                              {boldPart.slice(2, -2)}
                            </strong>
                          );
                        }
                        const italicParts = boldPart.split(/(\*.*?\*)/g);
                        return italicParts.map((italicPart, italicIdx) => {
                          if (
                            italicPart.startsWith("*") &&
                            italicPart.endsWith("*")
                          ) {
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
                    };

                    return (overview || description)
                      ?.split("\n\n")
                      .map((para: string, i: number) => {
                        const trimmedPara = para.trim();
                        if (!trimmedPara) return null;

                        const lines = trimmedPara.split("\n");
                        const isTable =
                          lines.length > 1 &&
                          lines.every((line) => {
                            const trimmed = line.trim();
                            return (
                              trimmed.startsWith("|") && trimmed.endsWith("|")
                            );
                          });

                        if (isTable) {
                          const tableRows = lines.filter(
                            (line) => !/^[|:\s-]+$/.test(line.trim()),
                          );
                          if (tableRows.length > 0) {
                            const parseCells = (rowStr: string) => {
                              return rowStr
                                .split("|")
                                .slice(1, -1)
                                .map((cell) => cell.trim());
                            };
                            const headers = parseCells(tableRows[0]);
                            const bodyRows = tableRows
                              .slice(1)
                              .map((row) => parseCells(row));
                            return (
                              <div
                                key={i}
                                className="my-6 w-full overflow-x-auto rounded-2xl border border-slate-200/60 shadow-sm bg-white"
                              >
                                <table className="w-full min-w-150 border-collapse text-left rtl:text-right text-xs lg:text-sm">
                                  <thead>
                                    <tr className="bg-slate-50/80 border-b border-slate-200/60">
                                      {headers.map((h, hi) => (
                                        <th
                                          key={hi}
                                          className="px-6 py-4 font-black text-slate-900 border-r last:border-r-0 border-slate-200/60 text-left rtl:text-right"
                                        >
                                          {renderFormattedText(h)}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-200/50">
                                    {bodyRows.map((row, ri) => (
                                      <tr
                                        key={ri}
                                        className="hover:bg-slate-50/30 transition-colors"
                                      >
                                        {row.map((cell, ci) => (
                                          <td
                                            key={ci}
                                            className="px-6 py-4.5 text-slate-700 leading-relaxed border-r last:border-r-0 border-slate-200/50 text-justify"
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

                        // Check if paragraph itself is just a single subheading
                        if (
                          trimmedPara.startsWith("**") &&
                          trimmedPara.endsWith("**") &&
                          !trimmedPara.includes("\n")
                        ) {
                          const headingText = trimmedPara.slice(2, -2);
                          return (
                            <h3
                              key={i}
                              className="text-base md:text-lg lg:text-xl font-black text-slate-900 mt-8 mb-4 flex items-center gap-2.5"
                            >
                              <span className="h-5 w-1 bg-primary rounded-full inline-block shrink-0" />
                              {renderFormattedText(headingText)}
                            </h3>
                          );
                        }

                        // Process paragraph line-by-line to parse lists, takeaways, and subheadings
                        const elements: React.ReactNode[] = [];
                        let currentList: React.ReactNode[] = [];

                        const flushList = (listKey: string) => {
                          if (currentList.length > 0) {
                            const listContent = [...currentList];
                            elements.push(
                              <ul key={listKey} className="my-4 pl-1 space-y-3">
                                {listContent}
                              </ul>
                            );
                            currentList = [];
                          }
                        };

                        lines.forEach((line, lineIdx) => {
                          const trimmedLine = line.trim();
                          if (!trimmedLine) return;

                          // Check if bullet point or numbered item
                          const bulletMatch = trimmedLine.match(/^([•\-\*]|\d+\.)\s*(.*)/);
                          if (bulletMatch) {
                            const isNumbered = /^\d+\./.test(bulletMatch[1]);
                            const content = bulletMatch[2];
                            currentList.push(
                              <li
                                key={`li-${lineIdx}`}
                                className="flex items-start gap-3 text-slate-600 text-sm md:text-[15px] leading-relaxed text-justify"
                              >
                                {isNumbered ? (
                                  <span className="text-primary font-bold text-[11px] md:text-xs mt-0.5 shrink-0 select-none bg-primary/10 rounded-md w-5 h-5 flex items-center justify-center">
                                    {bulletMatch[1].slice(0, -1)}
                                  </span>
                                ) : (
                                  <span className="text-primary mt-2 shrink-0 select-none">
                                    <span className="block h-2 w-2 rounded-full bg-primary/70" />
                                  </span>
                                )}
                                <span className="flex-1">
                                  {renderFormattedText(content)}
                                </span>
                              </li>
                            );
                          } else {
                            flushList(`list-${lineIdx}`);

                            // Check if line is a bold subheading inside a paragraph block
                            if (
                              trimmedLine.startsWith("**") &&
                              trimmedLine.endsWith("**")
                            ) {
                              elements.push(
                                <h4
                                  key={`h-${lineIdx}`}
                                  className="text-sm md:text-base font-extrabold text-slate-900 mt-6 mb-3 flex items-center gap-2"
                                >
                                  <span className="h-4 w-1 bg-primary/70 rounded-full inline-block shrink-0" />
                                  {renderFormattedText(trimmedLine.slice(2, -2))}
                                </h4>
                              );
                            }
                            // Check if it's a takeaway block
                            else if (
                              trimmedLine.startsWith("**Key Takeaway:**") ||
                              trimmedLine.startsWith("**نصيحة رئيسية:**") ||
                              trimmedLine.startsWith("Key Takeaway:") ||
                              trimmedLine.startsWith("نصيحة رئيسية:")
                            ) {
                              const prefix = trimmedLine.startsWith("**Key Takeaway:**")
                                ? "**Key Takeaway:**"
                                : trimmedLine.startsWith("**نصيحة رئيسية:**")
                                  ? "**نصيحة رئيسية:**"
                                  : trimmedLine.startsWith("Key Takeaway:")
                                    ? "Key Takeaway:"
                                    : "نصيحة رئيسية:";
                              const content = trimmedLine.slice(prefix.length).trim();
                              elements.push(
                                <div
                                  key={`takeaway-${lineIdx}`}
                                  className="my-6 p-4 md:p-5 rounded-2xl border border-primary/20 bg-primary/3 shadow-sm flex gap-3.5 items-start text-justify"
                                >
                                  <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                                    <Info size={18} />
                                  </div>
                                  <div className="space-y-1 flex-1">
                                    <h5 className="font-bold text-slate-900 text-sm md:text-[15px]">
                                      {prefix.replace(/\*\*/g, "").replace(":", "")}
                                    </h5>
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                      {renderFormattedText(content)}
                                    </p>
                                  </div>
                                </div>
                              );
                            } else {
                              // Normal paragraph line
                              elements.push(
                                <p
                                  key={`p-${lineIdx}`}
                                  className="text-slate-600 leading-relaxed text-sm md:text-[15px] lg:text-base text-justify my-3"
                                >
                                  {renderFormattedText(line)}
                                </p>
                              );
                            }
                          }
                        });

                        flushList("list-end");

                        return (
                          <div key={i} className="space-y-2">
                            {elements}
                          </div>
                        );
                      });
                  })()}

                  {whoShouldTake.length > 0 &&
                    data.slug !== "pte-academic-ukvi" &&
                    data.slug !== "pte-home-a1" &&
                    data.slug !== "pte-home-a2" &&
                    data.slug !== "pte-home-b1" && (
                      <ul className="mt-6 space-y-3 pl-1">
                        {whoShouldTake.map((item: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600 text-sm md:text-[15px] leading-relaxed text-justify"
                          >
                            <span className="text-primary mt-2 shrink-0 select-none">
                              <span className="block h-2 w-2 rounded-full bg-primary/70" />
                            </span>
                            <span className="flex-1">
                              {item.includes(":") ? (
                                <>
                                  <strong className="font-extrabold text-slate-900">
                                    {item.split(":")[0]}:
                                  </strong>
                                  {item.split(":").slice(1).join(":")}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </section>

              {/* Test Format Section */}
              {sections.length > 0 &&
                data.slug !== "pte-academic-ukvi" &&
                data.slug !== "pte-home-a1" &&
                data.slug !== "pte-home-a2" &&
                data.slug !== "pte-home-b1" && (
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-1 bg-primary rounded-full" />
                      <h2 className="text-xl font-black text-slate-900">
                        {isRtl ? "تفاصيل صيغة الاختبار" : "Test Format"}
                      </h2>
                    </div>

                    <div
                      className={cn(
                        "grid gap-4",
                        data.slug === "ielts-academic" ||
                          data.slug === "ielts-general"
                          ? "md:grid-cols-2"
                          : "grid-cols-1",
                      )}
                    >
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
                              <p className="text-slate-600 leading-relaxed text-xs whitespace-pre-line text-justify">
                                {section.details}
                              </p>

                              {section.skills && (
                                <div className="space-y-3">
                                  {data.slug !== "ielts-academic" &&
                                    data.slug !== "ielts-general" && (
                                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                        Skills Assessed
                                      </p>
                                    )}
                                  <div
                                    className={cn(
                                      "grid gap-2",
                                      section.skills.some(
                                        (s: string) => s.length > 50,
                                      )
                                        ? "grid-cols-1"
                                        : "sm:grid-cols-2",
                                    )}
                                  >
                                    {section.skills.map(
                                      (skill: string, si: number) => (
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
                                      ),
                                    )}
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
                    <h2 className="text-xl font-black text-slate-900">
                      {isRtl ? "الأسئلة الشائعة" : "FAQs"}
                    </h2>
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
          <aside className="space-y-4 lg:sticky lg:top-44 self-start">
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
                      {isRtl ? "هل أنت جاهز للحجز؟" : "Ready to Book?"}
                    </h3>
                  </div>
                  <Link
                    href={registerUrl}
                    target={isExternalRegister ? "_blank" : undefined}
                    rel={isExternalRegister ? "noopener noreferrer" : undefined}
                    className={cn(
                      buttonVariants({ variant: "light", size: "sm" }),
                      "w-full font-black text-xs py-5 rounded-xl shadow-xl hover:scale-[1.02] transition-all",
                    )}
                  >
                    {isRtl ? "تسجيل" : "Register"}
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
