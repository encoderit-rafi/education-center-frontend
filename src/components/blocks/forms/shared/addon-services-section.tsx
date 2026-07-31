"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { BookOpen } from "lucide-react";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";

import {
  getCourseDiscountPercentage,
  calculateCourseDiscountedPrice,
} from "@/lib/course-discount";

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

export function getLocalizedCourseName(c: any, locale: string): string {
  if (!c) return "";
  const cTrans = c.translations?.[locale];
  const translated = cTrans?.name || cTrans?.title;
  return translated || c.title || c.name || "";
}

export function getLocalizedWorkshopLabel(w: any, locale: string): string {
  if (!w) return "";
  const wTrans = w.translations?.[locale];
  const translated = wTrans?.title || wTrans?.name || wTrans?.sub_title;
  return translated || w.title || w.name || "";
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
    const name = c.name || c.title || "";
    return calculateCourseDiscountedPrice(c.price || 0, name, c.special_discount || 0);
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
                ...sortedCourses.map((c: any) => {
                  const name = c.name || c.title || "";
                  const discPct = getCourseDiscountPercentage(
                    name,
                    c.special_discount || 0
                  );
                  const effPrice =
                    c.discounted_price != null
                      ? c.discounted_price
                      : calculateCourseDiscountedPrice(c.price, name, c.special_discount || 0);
                  const hasDiscount = discPct > 0 || effPrice < c.price;

                  return {
                    label: getLocalizedCourseName(c, locale),
                    description: hasDiscount ? (
                      <span className="flex flex-col gap-1.5 mt-1">
                        <span className="inline-flex items-center gap-1">
                          <PriceDisplay
                            amount={effPrice}
                            minimumFractionDigits={2}
                            maximumFractionDigits={2}
                            className="text-primary font-semibold"
                          />
                          <span className="text-primary font-semibold">
                            ({discPct}% OFF)
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
                  };
                }),
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
