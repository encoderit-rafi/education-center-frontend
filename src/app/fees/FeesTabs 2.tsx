"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import { PriceDisplay } from "@/components/ui/price-display";
import { buttonVariants } from "@/components/ui/button";

interface ExamCategoryItem {
  key: string;
  slug: string;
  price: string | number;
  estimatedAed?: number;
}

interface ExamCategory {
  id: string;
  nameKey: string;
  brandColor: string;
  textColor: string;
  badgeBg: string;
  isMultiRow: boolean;
  items: ExamCategoryItem[];
}

interface FeesTabsProps {
  initialBrand: string;
  exams: any[];
}

export default function FeesTabs({ initialBrand, exams }: FeesTabsProps) {
  const t = useTranslations("ExamFeesPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [activeBrand, setActiveBrand] = useState<string>(initialBrand || "all");

  useEffect(() => {
    if (initialBrand) {
      setActiveBrand(initialBrand);
    }
  }, [initialBrand]);

  // Static pricing definition for all official exams
  const examCategories: ExamCategory[] = [
    {
      id: "ielts",
      nameKey: "categories.ielts",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: true,
      items: [
        { key: "ieltsAcademic", slug: "ielts-academic", price: 1470 },
        { key: "ieltsGeneral", slug: "ielts-general", price: 1470 },
        { key: "ieltsUkviAcademic", slug: "ielts-for-ukvi-academic", price: 1570 },
        { key: "ieltsUkviGeneral", slug: "ielts-for-ukvi-general-training", price: 1570 },
        { key: "ieltsLifeSkillsA1", slug: "ielts-for-ukvi-life-skills-a1", price: 750 },
        { key: "ieltsLifeSkillsA2", slug: "ielts-for-ukvi-life-skills-a2", price: "GBP 182", estimatedAed: 913 },
        { key: "ieltsLifeSkillsB1", slug: "ielts-for-ukvi-life-skills-b1", price: 750 }
      ]
    },
    {
      id: "pte",
      nameKey: "categories.pte",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: true,
      items: [
        { key: "pteAcademic", slug: "pte-academic", price: 1450 },
        { key: "pteCore", slug: "pte-core", price: 1450 },
        { key: "pteUkvi", slug: "pte-academic-ukvi", price: 1450 },
        { key: "pteHomeA1", slug: "pte-home-a1", price: 1230 },
        { key: "pteHomeA2", slug: "pte-home-a2", price: 1230 },
        { key: "pteHomeB1", slug: "pte-home-b1", price: 1230 }
      ]
    },
    {
      id: "toefl",
      nameKey: "categories.toefl",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: false,
      items: [
        { key: "toeflIbt", slug: "toefl-ibt", price: "US$340", estimatedAed: 1270 }
      ]
    },
    {
      id: "cael",
      nameKey: "categories.cael",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: false,
      items: [
        { key: "cael", slug: "cael", price: 1100 }
      ]
    },
    {
      id: "celpip",
      nameKey: "categories.celpip",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: false,
      items: [
        { key: "celpipGeneral", slug: "celpip-general", price: 1100 }
      ]
    },
    {
      id: "selt",
      nameKey: "categories.selt",
      brandColor: "bg-primary",
      textColor: "text-primary",
      badgeBg: "bg-rose-50 text-primary border-rose-100",
      isMultiRow: true,
      items: [
        { key: "seltA1", slug: "ukvi-speaking-and-listening-at-level-a1", price: "US$175", estimatedAed: 660 },
        { key: "seltA2", slug: "ukvi-speaking-and-listening-at-level-a2", price: "US$175", estimatedAed: 660 },
        { key: "seltB1", slug: "ukvi-speaking-and-listening-at-level-b1", price: "US$175", estimatedAed: 660 },
        { key: "seltB1RW", slug: "ukvi-speaking-listening-reading-and-writing-at-level-b1", price: "US$235", estimatedAed: 880 },
        { key: "seltB2", slug: "ukvi-speaking-listening-reading-and-writing-at-level-b2", price: "US$235", estimatedAed: 880 },
        { key: "seltC1", slug: "ukvi-speaking-listening-reading-and-writing-at-level-c1", price: "US$235", estimatedAed: 880 },
        { key: "seltC2", slug: "ukvi-speaking-listening-reading-and-writing-at-level-c2", price: "US$235", estimatedAed: 880 }
      ]
    }
  ];

  const filteredCategories = activeBrand === "all"
    ? examCategories
    : examCategories.filter(cat => cat.id === activeBrand);

  // Group single items for a beautiful grid (TOEFL, CAEL, CELPIP, OET)
  const singleItemCategories = filteredCategories.filter(cat => !cat.isMultiRow);
  const multiRowCategories = filteredCategories.filter(cat => cat.isMultiRow);

  // Resolves the redirect link and target based on the exam's database settings
  const getExamLinkDetails = (slug: string) => {
    const dbExam = exams.find(e => e.slug === slug);
    if (dbExam?.examFormRedirectUrl) {
      return { href: dbExam.examFormRedirectUrl, isExternal: true };
    }
    return { href: `/book-exams/${slug}`, isExternal: false };
  };

  return (
    <div className="w-full space-y-12">
      {/* ── Multi-Row Exams (IELTS, PTE, SELT) ── */}
      <div className="space-y-12 max-w-7xl mx-auto px-4 lg:px-8">
        {multiRowCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md relative pt-1"
          >
            {/* Top red accent line that curves with rounded corners */}
            <div className={cn("absolute top-0 left-0 right-0 h-1", cat.brandColor)} />
            <div className="px-6 py-5 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={cn("text-lg font-black tracking-tight", cat.textColor)}>
                  {t(cat.nameKey)}
                </span>

              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse" dir={isRtl ? "rtl" : "ltr"}>
                <thead>
                  <tr className="bg-slate-50/60 border-b border-slate-100 text-slate-500 text-xs font-bold tracking-wider uppercase">
                    <th className="px-6 py-4 text-start font-black">{t("table.module")}</th>
                    <th className="px-6 py-4 text-center font-black w-48 md:w-64">{t("table.fee")}</th>
                    <th className="px-6 py-4 text-center font-black w-36 md:w-48">{t("table.register")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cat.items.map((item, idx) => {
                    const linkDetails = getExamLinkDetails(item.slug);
                    return (
                      <tr key={idx} className="hover:bg-slate-50/40 transition-colors group/row">
                        {/* Exam Module Name */}
                        <td className="px-6 py-4.5 text-slate-900 font-bold text-sm md:text-base text-start">
                          <Link
                            href={linkDetails.href}
                            target={linkDetails.isExternal ? "_blank" : undefined}
                            rel={linkDetails.isExternal ? "noopener noreferrer" : undefined}
                            className="hover:text-primary transition-colors hover:underline cursor-pointer"
                          >
                            {t(`examNames.${item.key}`)}
                          </Link>
                        </td>
                        {/* Fee / Price */}
                        <td className="px-6 py-4.5 text-center">
                          {typeof item.price === "number" ? (
                            <PriceDisplay amount={item.price} className="text-base md:text-lg font-black text-primary" />
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <span className="font-black text-slate-800 text-base md:text-lg">
                                {item.price === "paidExternally" ? t("table.paidExternally") : item.price}
                              </span>
                              {item.estimatedAed && (
                                <span className="text-[13px] text-slate-900 font-bold mt-0.5">
                                  ({t("table.estimated")}: <PriceDisplay amount={item.estimatedAed} />)
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                        {/* Registration Button */}
                        <td className="px-6 py-4.5 text-center">
                          <Link
                            href={linkDetails.href}
                            target={linkDetails.isExternal ? "_blank" : undefined}
                            rel={linkDetails.isExternal ? "noopener noreferrer" : undefined}
                            className={cn(
                              buttonVariants({ variant: "default", size: "sm" }),
                              "font-black text-xs h-9 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-1.5 text-white hover:opacity-90 cursor-pointer shadow-xs"
                            )}
                          >
                            <span>{t("buttons.registerNow")}</span>
                            {linkDetails.isExternal ? (
                              <ExternalLink className="size-3" />
                            ) : (
                              <ArrowRight className="size-3 transition-transform group-hover/row:translate-x-1 rtl:group-hover/row:-translate-x-1" />
                            )}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* ── Single-Row Exams Grid (TOEFL, CAEL, CELPIP, OET) ── */}
      {singleItemCategories.length > 0 && (
        <div className={cn(
          "max-w-7xl mx-auto px-4 lg:px-8",
          singleItemCategories.length === 1
            ? "flex justify-center py-6"
            : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {singleItemCategories.map((cat) => {
            const item = cat.items[0];
            const linkDetails = getExamLinkDetails(item.slug);
            return (
              <div
                key={cat.id}
                className={cn(
                  "bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full relative overflow-hidden pt-7",
                  singleItemCategories.length === 1 ? "max-w-md" : ""
                )}
              >
                {/* Top red accent line that curves with rounded corners */}
                <div className={cn("absolute top-0 left-0 right-0 h-1", cat.brandColor)} />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn("text-lg font-black tracking-tight", cat.textColor)}>
                      {t(cat.nameKey)}
                    </span>
                    <Globe className="size-5 text-slate-300" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 leading-tight mb-2">
                    <Link
                      href={`/exams/${item.slug}`}
                      className="hover:text-primary transition-colors hover:underline cursor-pointer"
                    >
                      {t(`examNames.${item.key}`)}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 text-justify">
                    {cat.id === "toefl"
                      ? (isRtl ? "اختبار TOEFL iBT هو المعيار العالمي لتقييم اللغة الإنجليزية للأغراض الأكاديمية والهجرة والعمل." : "The TOEFL iBT test is the premier English proficiency exam for academic, work, and migration purposes worldwide.")
                      : cat.id === "cael"
                      ? (isRtl ? "اختبار CAEL يقيس مستوى الكفاءة اللغوية للطلاب الراغبين في الدراسة بمؤسسات التعليم العالي الكندية." : "The CAEL test measures the English language proficiency of students planning to study in Canadian post-secondary institutions.")
                      : cat.id === "celpip"
                      ? (isRtl ? "اختبار CELPIP General معتمد للهجرة والإقامة الدائمة والجنسية الكندية والترخيص المهني." : "The CELPIP General test is accepted for Canadian permanent residency, citizenship applications, and professional licensing.")
                      : (isRtl ? "اختبار اللغة الإنجليزية المهني (OET) هو اختبار لغة إنجليزية دولي مصمم خصيصاً للعاملين في القطاع الصحي." : "The Occupational English Test (OET) is the international English language test designed specifically for healthcare professionals.")}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-400">{t("table.fee")}</span>
                    {typeof item.price === "number" ? (
                      <PriceDisplay amount={item.price} className="text-2xl font-black text-primary" />
                    ) : (
                      <div className="flex flex-col items-end">
                        <span className="font-black text-slate-800 text-xl">
                          {item.price === "paidExternally" ? t("table.paidExternally") : item.price}
                        </span>
                        {item.estimatedAed && (
                          <span className="text-[12px] text-slate-900 font-bold mt-0.5">
                            ({t("table.estimated")}: <PriceDisplay amount={item.estimatedAed} />)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <Link
                    href={linkDetails.href}
                    target={linkDetails.isExternal ? "_blank" : undefined}
                    rel={linkDetails.isExternal ? "noopener noreferrer" : undefined}
                    className={cn(
                      buttonVariants(),
                      "w-full font-black h-11 shadow-sm flex items-center justify-center gap-2 group transition-all duration-300"
                    )}
                  >
                    <span>{t("buttons.registerNow")}</span>
                    {linkDetails.isExternal ? (
                      <ExternalLink className="size-4" />
                    ) : (
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
