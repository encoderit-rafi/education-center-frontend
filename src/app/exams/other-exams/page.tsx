"use client";

import { useTranslations, useLocale } from "next-intl";
import { BaseCardIcon } from "@/components/blocks/cards/base-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const OTHER_EXAMS_KEYS = ["pearson-non-pte", "gre"] as const;

export default function OtherExamsPage() {
  const t = useTranslations("OtherExamsPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div className="min-h-screen">
      {/* ── Exam Cards ── */}
      <div className="section-container base-px base-py">
        <h2 className="section-title text-center">
          {t("title")}
          <span>{t("titleAccent")}</span>
          {t("titleEnd")}
        </h2>
        <p className="mx-auto section-subtitle text-center">
          {t("subtitle")}
        </p>

        <Accordion
          type="single"
          className="w-full max-w-4xl mx-auto mt-20 space-y-8 rounded-none border-none"
        >
          {OTHER_EXAMS_KEYS.map((key, index) => (
            <AccordionItem
              key={key}
              value={key}
              className="bg-white! overflow-hidden rounded-none border-none"
            >
              <AccordionTrigger className="bg-white rounded-md hover:no-underline items-center">
                <div
                  className={cn(
                    "flex items-center gap-3",
                    isRtl ? "text-right" : "text-left"
                  )}
                >
                  <BaseCardIcon className="rounded-full size-10 text-lg font-bold shrink-0">
                    {index + 1}
                  </BaseCardIcon>
                  <div className="space-y-1">
                    <h3 className="font-bold text-secondary text-lg tracking-tight">
                      {t(`exams.${key}.name`)}
                    </h3>
                    <p className="text-xs text-primary font-semibold">
                      {t("authorizedProvider")} {t(`exams.${key}.provider`)}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={cn(
                    "pt-5 text-slate-600 leading-relaxed mb-8 max-w-2xl",
                    isRtl ? "pr-12" : "pl-12"
                  )}
                >
                  {t(`exams.${key}.description`)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

