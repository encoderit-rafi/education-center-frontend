"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AcceptPayButton } from "./AcceptPayButton";
import { buttonVariants } from "@/components/ui/button";
import { AED } from "@/components/ui/aed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/** Per-exam mock test type options */
const EXAM_TYPES: Record<string, { label: string; labelAr: string; value: string }[]> = {
  pte: [
    { label: "PTE Academic", labelAr: "بي تي إي الأكاديمي", value: "PTE Academic" },
    { label: "PTE Academic UKVI", labelAr: "بي تي إي الأكاديمي UKVI", value: "PTE Academic UKVI" },
    { label: "PTE Core", labelAr: "بي تي إي العام", value: "PTE Core" },
  ],
  ielts: [
    { label: "IELTS Academic", labelAr: "آيلتس الأكاديمي", value: "IELTS Academic" },
    { label: "IELTS General Training", labelAr: "آيلتس العام", value: "IELTS General Training" },
  ],
};

/** Resolve exam key from slug, e.g. "pte-1" → "pte", "ielts" → "ielts" */
function resolveExamKey(slug: string): string | null {
  const cleaned = slug.replace(/-\d+$/, "").toLowerCase();
  if (cleaned.includes("ielts")) return "ielts";
  if (cleaned.includes("pte")) return "pte";
  return null;
}

interface MockTestTypeSelectorProps {
  data: {
    slug: string;
    price: string;
    center_price?: string;
    details?: {
      center_price?: string | number;
    } | null;
  };
}

export function MockTestTypeSelector({ data }: MockTestTypeSelectorProps) {
  const t = useTranslations("PaidMockTestsPage");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const examKey = resolveExamKey(data.slug);
  const types = examKey ? EXAM_TYPES[examKey] : null;

  const [selectedType, setSelectedType] = useState<string>("");

  const homePrice = data.price && parseFloat(data.price) > 0 ? parseFloat(data.price) : 350;
  const rawCenterPrice = data.details?.center_price ?? data.center_price;
  const centerPrice = rawCenterPrice && parseFloat(String(rawCenterPrice)) > 0 ? parseFloat(String(rawCenterPrice)) : 450;

  const selectTypeLabel =
    examKey === "ielts"
      ? t("selectIeltsTypeLabel")
      : examKey === "pte"
      ? t("selectPteTypeLabel")
      : t("selectTypeLabel");

  const chooseExamTypePlaceholder =
    examKey === "ielts"
      ? t("chooseIeltsTypePlaceholder")
      : examKey === "pte"
      ? t("choosePteTypePlaceholder")
      : t("chooseExamTypePlaceholder");

  const getDisplayLabel = (typeObj: { label: string; labelAr: string }) => {
    return isRtl ? typeObj.labelAr : typeObj.label;
  };

  const getSelectedTypeDisplay = () => {
    if (!selectedType || !types) return selectedType;
    const match = types.find((t) => t.value === selectedType);
    return match ? (isRtl ? match.labelAr : match.label) : selectedType;
  };

  // TOEFL iBT (or any exam without subtypes) — show Pay button directly
  if (!types) {
    return (
      <AcceptPayButton data={data} className={cn(buttonVariants())}>
        {t("register")}
      </AcceptPayButton>
    );
  }

  return (
    <div className="space-y-4 w-full max-w-sm">
      {/* ── Type Selector ── */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
          {selectTypeLabel}
        </label>
        <Select
          value={selectedType}
          onValueChange={(val) => setSelectedType(val as string)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={chooseExamTypePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {types.map((typeObj) => (
              <SelectItem key={typeObj.value} value={typeObj.value}>
                {getDisplayLabel(typeObj)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ── Price + Pay Button (visible after a type is selected) ── */}
      {selectedType && (
        <div className="animate-in fade-in slide-in-from-top-1 duration-200 space-y-3">
          {/* Price card */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {t("mockTestPrice")}
            </p>

            {centerPrice ? (
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium">{t("homeBasedLabel")}</span>
                  <span className="text-base font-extrabold text-primary inline-flex items-center gap-0.5">
                    <AED className="h-[0.8em] w-auto fill-current" />
                    {homePrice}
                  </span>
                </div>
                <span className="text-slate-300 text-sm">/</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium">{t("centerBasedLabel")}</span>
                  <span className="text-base font-extrabold text-primary inline-flex items-center gap-0.5">
                    <AED className="h-[0.8em] w-auto fill-current" />
                    {centerPrice}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-xl font-extrabold text-primary inline-flex items-center gap-0.5">
                <AED className="h-[0.85em] w-auto fill-current" />
                {homePrice}
              </span>
            )}

            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {getSelectedTypeDisplay()} {t("selected")}
            </div>
          </div>

          {/* Pay button — passes selectedType as variant to AcceptPayButton */}
          <AcceptPayButton
            data={data}
            className={cn(buttonVariants(), "w-full")}
            selectedType={selectedType}
          >
            {t("register")}
          </AcceptPayButton>
        </div>
      )}
    </div>
  );
}
