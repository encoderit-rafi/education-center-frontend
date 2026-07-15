"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface MarketingOption {
  id: string;
  label?: string;
  labelKey?: string;
}

export const BRITISH_COUNCIL_MARKETING_OPTIONS: MarketingOption[] = [
  { id: "all", labelKey: "bcAll" },
  { id: "some", labelKey: "bcSome" },
  { id: "none", labelKey: "bcNone" },
];

export const TEPTH_MARKETING_OPTIONS: MarketingOption[] = [
  { id: "all", labelKey: "tepthAll" },
  { id: "some", labelKey: "tepthSome" },
  { id: "none", labelKey: "tepthNone" },
];

export const TEPTH_THIRD_PARTY_MARKETING_OPTIONS: MarketingOption[] = [
  { id: "all", labelKey: "tepthThirdAll" },
  { id: "third_party", labelKey: "tepthThirdSome" },
  { id: "none", labelKey: "tepthThirdNone" },
];

export interface MarketingPreferencesSectionProps {
  value: string | undefined;
  onChange: (val: string) => void;
  error?: any;
  options?: MarketingOption[];
}

export function MarketingPreferencesSection({
  value,
  onChange,
  error,
  options = BRITISH_COUNCIL_MARKETING_OPTIONS,
}: MarketingPreferencesSectionProps) {
  const t = useTranslations("FormsShared.MarketingPreferences");
  return (
    <div className="pt-8 border-t border-slate-100 space-y-6">
      <Field data-invalid={!!error}>
        <FieldLabel required>{t("title")}</FieldLabel>
        <FieldContent className="mt-4">
          <RadioGroup
            name="marketingPreference"
            onValueChange={onChange}
            value={value}
          >
            {options.map((opt) => (
              <Label
                key={opt.id}
                htmlFor={`mkt-${opt.id}`}
                data-invalid={!!error}
                className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
              >
                <RadioGroupItem value={opt.id} id={`mkt-${opt.id}`} />
                <span className="text-sm">{opt.labelKey ? t(opt.labelKey) : opt.label}</span>
              </Label>
            ))}
          </RadioGroup>
          <FieldError errors={[error]} />
        </FieldContent>
      </Field>
    </div>
  );
}
