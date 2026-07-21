"use client";

import Link from "next/link";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardArrow,
} from "@/components/blocks/cards/base-card";
import { TEST_DATES_CARDS_DATA } from "@/data";
import { useTranslations, useLocale } from "next-intl";

const EXAM_ARABIC_NAMES: Record<string, string> = {
  ielts: "آيلتس",
  pte: "بي تي إي",
  toefl: "توفل آي بي تي",
  "toefl-ibt": "توفل آي بي تي",
  cael: "كايل",
  "celpip-general": "سيلبيب العام",
  celpip: "سيلبيب",
  "skill-for-english-selt": "سكيلز فور إنجلش (سيلت)",
  oet: "أو إي تي",
  gre: "جي آر إي",
};

export default function TestDatesPage() {
  const t = useTranslations("TestDatesPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <main className="bg-white">
      {/* ── Header ── */}
      <section className="pt-32 pb-16 px-8 bg-[#F9FAFB]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tighter leading-none">
              {t("title")}<span className="text-primary italic">{t("titleAccent")}</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Exam Grid ── */}
      <section className="py-24 px-8 bg-[#F9FAFB] border-t border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEST_DATES_CARDS_DATA.map((exam, index) => (
              <Link key={exam.id} href={`/test-dates/${exam.id}`}>
                <BaseCard className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <BaseCardIcon>{index + 1}</BaseCardIcon>
                    <BaseCardArrow />
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                      {isRtl ? (EXAM_ARABIC_NAMES[exam.id] || exam.name) : exam.name}
                    </BaseCardTitle>
                    <BaseCardDescription className="mb-4">
                      {t.has(`descriptions.${exam.id}`) ? t(`descriptions.${exam.id}`) : exam.description}
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

