"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { BookOpen } from "lucide-react";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";

export interface AddonServicesSectionProps {
  coursesData: any;
  workshopsData: any;
  selectedCourse: string | undefined;
  selectedWorkshop: string | undefined;
  onCourseChange: (val: string) => void;
  onWorkshopChange: (val: string) => void;
  courseError?: boolean;
  workshopError?: boolean;
  description?: string;
}

const courseWorkshopMapping: Record<string, string> = {
  "Group Course": "دورة جماعية",
  "Semi-private Course": "دورة شبه خاصة",
  "Semi-Private Course": "دورة شبه خاصة",
  "In-person One-to-one": "دورة حضورية شخص لشخص",
  "In-Person One-to-One Course": "دورة فردية حضورية",
  "Online One-to-one": "دورة عبر الإنترنت شخص لشخص",
  "Online One-to-One Course": "دورة فردية عبر الإنترنت",
  "Hybrid One-to-one": "دورة هجينة شخص لشخص",
  "Hybrid One-to-One Course": "دورة فردية هجينة",
  "2-Hour Workshop": "ورشة عمل مركزة لمدة ساعتين",
  "2-Hour Targeted Workshop": "ورشة عمل مركزة لمدة ساعتين",
  "4-Hour Focus Workshop": "ورشة عمل مركزة لمدة 4 ساعات",
  "6-Hour IELTS Workshop": "ورشة IELTS لمدة 6 ساعات",
  "6-Hour Intensive Workshop": "ورشة عمل مكثفة لمدة 6 ساعات",
  "8-Hour Complete Exam Workshop": "ورشة عمل شاملة لمدة 8 ساعات",
};

export function getLocalizedCourseName(c: any, locale: string): string {
  if (!c) return "";
  if (locale === "ar") {
    const cTrans = c.translations?.ar || c.translations?.[locale];
    const translated = cTrans?.name || cTrans?.title;
    if (translated) return translated;
    if (c.name && courseWorkshopMapping[c.name]) return courseWorkshopMapping[c.name];
    if (c.title && courseWorkshopMapping[c.title]) return courseWorkshopMapping[c.title];
  }
  return c.name || c.title || "";
}

export function getLocalizedWorkshopLabel(w: any, locale: string): string {
  if (!w) return "";
  if (locale === "ar") {
    const wTrans = w.translations?.ar || w.translations?.[locale];
    const translated = wTrans?.title || wTrans?.name || wTrans?.sub_title;
    if (translated) return translated;
    if (w.name && courseWorkshopMapping[w.name]) return courseWorkshopMapping[w.name];
    if (w.title && courseWorkshopMapping[w.title]) return courseWorkshopMapping[w.title];
  }
  return w.name || w.title || "";
}

function getDisplayDiscount(courseName: string, actualDiscount: number): number {
  const name = courseName.toLowerCase();
  if (name.includes("group")) return 10;
  if (name.includes("semi-private")) return 15;
  if (name.includes("hybrid")) return 25;
  if (name.includes("online") && (name.includes("one-to-one") || name.includes("1-to-1") || name.includes("private") || name.includes("vip"))) return 20;
  if (name.includes("in-person") || name.includes("classroom") || name.includes("one-to-one") || name.includes("1-to-1") || name.includes("vip") || name.includes("private")) return 20;
  return actualDiscount;
}

export function AddonServicesSection({
  coursesData,
  workshopsData,
  selectedCourse = "",
  selectedWorkshop = "",
  onCourseChange,
  onWorkshopChange,
  courseError,
  workshopError,
  description,
}: AddonServicesSectionProps) {
  const t = useTranslations("FormsShared.AddonServices");
  const locale = useLocale();
  const resolvedDescription = description ?? t("saveUpTo");
  const getCourseEffectivePrice = (c: any) => {
    if (c.discounted_price != null) return c.discounted_price;
    if (c.special_discount) return c.price * (1 - c.special_discount / 100);
    return c.price || 0;
  };

  const sortedCourses = Object.values(coursesData || {}).sort((a: any, b: any) => {
    return getCourseEffectivePrice(a) - getCourseEffectivePrice(b);
  });

  const sortedWorkshops = Object.values(workshopsData || {}).sort((a: any, b: any) => {
    return (a.price || 0) - (b.price || 0);
  });

  return (
    <div className="pt-8 border-t border-slate-100 space-y-6">
      <div className="flex items-center gap-2 text-slate-400 mb-4">
        <BookOpen className="size-5" />
        <h3 className="text-lg font-bold tracking-tight text-slate-800">
          {t("title")}
        </h3>
      </div>

      {resolvedDescription && (
        <p className="section-description text-sm">{resolvedDescription}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field>
          <FieldLabel>{t("coursesLabel")}</FieldLabel>
          <FieldContent>
            <SearchableDropdown
              name="selectedCourse"
              options={[
                { label: t("none"), value: "" },
                ...sortedCourses.map((c: any) => ({
                  label: getLocalizedCourseName(c, locale),
                  description: c.discounted_price != null ? (
                    <span className="flex flex-col gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-1">
                        <PriceDisplay
                          amount={c.discounted_price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="text-primary font-semibold"
                        />
                        <span className="text-primary font-semibold">
                          ({getDisplayDiscount(c.name || c.title || "", Math.round((1 - c.discounted_price / c.price) * 100))}% OFF)
                        </span>
                        <PriceDisplay
                          amount={c.price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="line-through text-muted-foreground"
                        />
                      </span>
                      <span className="flex items-center gap-1.5 flex-wrap">
                        {[t("freePrepMaterial"), t("freeConsultation"), t("freeMockTest")].map((item, index) => (
                          <Badge key={index}>{item}</Badge>
                        ))}
                      </span>
                    </span>
                  ) : c.special_discount ? (
                    <span className="flex flex-col gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-1">
                        <PriceDisplay
                          amount={c.price * (1 - c.special_discount / 100)}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="text-primary font-semibold"
                        />
                        <span className="text-primary font-semibold">
                          ({getDisplayDiscount(c.name || c.title || "", c.special_discount)}% OFF)
                        </span>
                        <PriceDisplay
                          amount={c.price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="line-through text-muted-foreground"
                        />
                      </span>
                      <span className="flex items-center gap-1.5 flex-wrap">
                        {[t("freePrepMaterial"), t("freeConsultation"), t("freeMockTest")].map((item, index) => (
                          <Badge key={index}>{item}</Badge>
                        ))}
                      </span>
                    </span>
                  ) : (
                    <PriceDisplay
                      amount={c.price}
                      minimumFractionDigits={0}
                      maximumFractionDigits={0}
                    />
                  ),
                  value: c.id,
                })),
              ]}
              placeholder={t("selectCourse")}
              value={selectedCourse}
              onChange={onCourseChange}
              aria-invalid={courseError}
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>{t("workshopsLabel")}</FieldLabel>
          <FieldContent>
            <SearchableDropdown
              name="selectedWorkshop"
              options={[
                { label: t("none"), value: "" },
                ...sortedWorkshops.map((w: any) => ({
                  label: getLocalizedWorkshopLabel(w, locale),
                  description: w.duration ? (
                    <span className="items-center gap-1">
                      <PriceDisplay
                        amount={w.price}
                        minimumFractionDigits={0}
                        maximumFractionDigits={0}
                      />
                    </span>
                  ) : (
                    <PriceDisplay
                      amount={w.price}
                      minimumFractionDigits={0}
                      maximumFractionDigits={0}
                    />
                  ),
                  value: w.id,
                })),
              ]}
              placeholder={t("selectWorkshop")}
              value={selectedWorkshop}
              onChange={onWorkshopChange}
              aria-invalid={workshopError}
            />
          </FieldContent>
        </Field>
      </div>
    </div>
  );
}
