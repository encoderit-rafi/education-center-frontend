"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AcceptPayButton } from "./AcceptPayButton";
import { buttonVariants } from "@/components/ui/button";
import { AED } from "@/components/ui/aed";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    name?: string;
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
  const [selectedLocation, setSelectedLocation] = useState<"home" | "center">("home");
  const [locationOpen, setLocationOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const getTriggerClass = (isOpen: boolean) =>
    cn(
      "flex h-12 w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm text-left font-semibold text-slate-800 outline-none shadow-xs transition-all duration-200 cursor-pointer",
      isOpen
        ? "border-primary ring-3 ring-primary/15 bg-slate-50/50"
        : "border-slate-300 hover:border-primary/50 hover:bg-slate-50/30"
    );

  const homePrice = data.price && parseFloat(data.price) > 0 ? parseFloat(data.price) : 350;
  const rawCenterPrice = data.details?.center_price ?? data.center_price;
  const centerPrice = rawCenterPrice && parseFloat(String(rawCenterPrice)) > 0 ? parseFloat(String(rawCenterPrice)) : 450;

  const activePrice = selectedLocation === "center" ? centerPrice : homePrice;

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

  if (!types) {
    return (
      <div className="space-y-4 w-full max-w-sm">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
            {t("selectLocationLabel")}
          </label>
          <DropdownMenu open={locationOpen} onOpenChange={setLocationOpen}>
            <DropdownMenuTrigger asChild>
              <button type="button" className={getTriggerClass(locationOpen)}>
                {selectedLocation === "home" ? (
                  <span className="inline-flex items-center gap-0.5">
                    {t("homeOption")} (
                    <AED className="size-auto h-[0.85em] fill-current text-primary" />
                    <span className="text-primary">{homePrice}</span>)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-0.5">
                    {t("centerOption")} (
                    <AED className="size-auto h-[0.85em] fill-current text-primary" />
                    <span className="text-primary">{centerPrice}</span>)
                  </span>
                )}
                <ChevronDown
                  className={cn(
                    "size-4 text-slate-500 transition-transform duration-200",
                    locationOpen && "rotate-180 text-primary"
                  )}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) bg-white rounded-xl border border-slate-200 p-1.5 shadow-xl">
              <DropdownMenuRadioGroup
                value={selectedLocation}
                onValueChange={(val) => setSelectedLocation(val as "home" | "center")}
              >
                <DropdownMenuRadioItem value="home" className="rounded-lg font-medium cursor-pointer">
                  <span className="inline-flex items-center gap-0.5">
                    {t("homeOption")} (
                    <AED className="size-auto h-[0.85em] fill-current text-primary" />
                    <span className="text-primary">{homePrice}</span>)
                  </span>
                </DropdownMenuRadioItem>
                {centerPrice > 0 && (
                  <DropdownMenuRadioItem value="center" className="rounded-lg font-medium cursor-pointer">
                    <span className="inline-flex items-center gap-0.5">
                      {t("centerOption")} (
                      <AED className="size-auto h-[0.85em] fill-current text-primary" />
                      <span className="text-primary">{centerPrice}</span>)
                    </span>
                  </DropdownMenuRadioItem>
                )}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider">
            {t("mockTestPrice")}
          </p>
          <span className="text-xl font-extrabold text-primary inline-flex items-center gap-0.5">
            <AED className="h-[0.85em] w-auto fill-current" />
            {activePrice}
          </span>
        </div>

        <AcceptPayButton
          data={data}
          className={cn(buttonVariants(), "w-full")}
          selectedLocation={selectedLocation}
          selectedType={data.name}
        >
          {t("register")}
        </AcceptPayButton>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full max-w-sm">
      {/* ── 1. Exam Type Dropdown ── */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
          {selectTypeLabel}
        </label>
        <DropdownMenu open={typeOpen} onOpenChange={setTypeOpen}>
          <DropdownMenuTrigger asChild>
            <button type="button" className={getTriggerClass(typeOpen)}>
              <span className={cn(!selectedType && "text-slate-400 font-normal")}>
                {selectedType ? getSelectedTypeDisplay() : chooseExamTypePlaceholder}
              </span>
              <ChevronDown
                className={cn(
                  "size-4 text-slate-500 transition-transform duration-200",
                  typeOpen && "rotate-180 text-primary"
                )}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) bg-white rounded-xl border border-slate-200 p-1.5 shadow-xl">
            <DropdownMenuRadioGroup value={selectedType} onValueChange={setSelectedType}>
              {types.map((typeObj) => (
                <DropdownMenuRadioItem key={typeObj.value} value={typeObj.value} className="rounded-lg font-medium cursor-pointer">
                  {getDisplayLabel(typeObj)}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ── 2. Test Location Dropdown (visible when exam type is chosen) ── */}
      {selectedType && (
        <div className="animate-in fade-in slide-in-from-top-1 duration-200 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t("selectLocationLabel")}
            </label>
            <DropdownMenu open={locationOpen} onOpenChange={setLocationOpen}>
              <DropdownMenuTrigger asChild>
                <button type="button" className={getTriggerClass(locationOpen)}>
                  {selectedLocation === "home" ? (
                    <span className="inline-flex items-center gap-0.5">
                      {t("homeOption")} (
                      <AED className="size-auto h-[0.85em] fill-current text-primary" />
                      <span className="text-primary">{homePrice}</span>)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5">
                      {t("centerOption")} (
                      <AED className="size-auto h-[0.85em] fill-current text-primary" />
                      <span className="text-primary">{centerPrice}</span>)
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-500 transition-transform duration-200",
                      locationOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) bg-white rounded-xl border border-slate-200 p-1.5 shadow-xl">
                <DropdownMenuRadioGroup
                  value={selectedLocation}
                  onValueChange={(val) => setSelectedLocation(val as "home" | "center")}
                >
                  <DropdownMenuRadioItem value="home" className="rounded-lg font-medium cursor-pointer">
                    <span className="inline-flex items-center gap-0.5">
                      {t("homeOption")} (
                      <AED className="size-auto h-[0.85em] fill-current text-primary" />
                      <span className="text-primary">{homePrice}</span>)
                    </span>
                  </DropdownMenuRadioItem>
                  {centerPrice > 0 && (
                    <DropdownMenuRadioItem value="center" className="rounded-lg font-medium cursor-pointer">
                      <span className="inline-flex items-center gap-0.5">
                        {t("centerOption")} (
                        <AED className="size-auto h-[0.85em] fill-current text-primary" />
                        <span className="text-primary">{centerPrice}</span>)
                      </span>
                    </DropdownMenuRadioItem>
                  )}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* ── Dynamic Price Card & Summary ── */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {t("mockTestPrice")}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-extrabold text-primary inline-flex items-center gap-0.5">
                <AED className="h-[0.85em] w-auto fill-current" />
                {activePrice}
              </span>
              <span className="text-xs font-semibold bg-[#A11D1D] text-white px-2.5 py-1 rounded-md">
                {selectedLocation === "center" ? t("centerOption") : t("homeOption")}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {getSelectedTypeDisplay()} ({selectedLocation === "center" ? t("centerOption") : t("homeOption")}) {t("selected")}
            </div>
          </div>

          {/* ── Action Button ── */}
          <AcceptPayButton
            data={data}
            className={cn(buttonVariants(), "w-full py-6 font-bold text-base")}
            selectedType={selectedType}
            selectedLocation={selectedLocation}
          >
            {t("register")}
          </AcceptPayButton>
        </div>
      )}
    </div>
  );
}
