"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { useTranslations } from "next-intl";
import { AED } from "@/components/ui/aed";

interface TermsStepProps {
  onNext: () => void;
  examFee: number;
  additionalFee: number;
}

export function TermsStep({ onNext, examFee, additionalFee }: TermsStepProps) {
  const t = useTranslations("TermsSteps");

  const notices: (React.ReactNode | string)[] = Array.from({ length: 6 }).map((_, idx) => {
    return t.rich(`selt.${idx}`, {
      aed_additional: () => (
        <strong className="font-semibold whitespace-nowrap">
          <AED className="h-[0.8em] w-auto fill-current inline-block" /> {additionalFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </strong>
      ),
      bold: (chunks) => <strong className="font-semibold">{chunks}</strong>,
    });
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-justify">
      <BaseNoteBox
        title={t("title")}
        notes={notices}
      />

      <div className="mt-8 flex justify-end">
        <Button onClick={onNext}>
          {t("agreeBtn")}
        </Button>
      </div>
    </div>
  );
}
