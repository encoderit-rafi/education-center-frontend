import React from "react";
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
  label: string;
}

export const BRITISH_COUNCIL_MARKETING_OPTIONS: MarketingOption[] = [
  {
    id: "all",
    label:
      "I am happy to receive updates about products, services and events organised by British Council.",
  },
  {
    id: "some",
    label:
      "I am happy to receive information from British Council and selected third parties.",
  },
  {
    id: "none",
    label: "Please do not send me any marketing updates.",
  },
];

export const TEPTH_MARKETING_OPTIONS: MarketingOption[] = [
  {
    id: "all",
    label:
      "I am happy to receive updates about products, services and events organised by TEPTH.",
  },
  {
    id: "some",
    label:
      "I am happy to receive information from TEPTH and selected third parties.",
  },
  {
    id: "none",
    label: "Please do not send me any marketing updates.",
  },
];

export const TEPTH_THIRD_PARTY_MARKETING_OPTIONS: MarketingOption[] = [
  {
    id: "all",
    label: "I am happy to receive updates from TEPTH.",
  },
  {
    id: "third_party",
    label: "I am happy to receive info from selected third parties.",
  },
  {
    id: "none",
    label: "Please do not send me any marketing updates.",
  },
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
  return (
    <div className="pt-8 border-t border-slate-100 space-y-6">
      <Field data-invalid={!!error}>
        <FieldLabel>Marketing preferences</FieldLabel>
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
                <span className="text-sm">{opt.label}</span>
              </Label>
            ))}
          </RadioGroup>
          <FieldError errors={[error]} />
        </FieldContent>
      </Field>
    </div>
  );
}
