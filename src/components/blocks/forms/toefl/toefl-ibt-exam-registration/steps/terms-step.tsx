"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { AED } from "@/components/ui/aed";
import { useTranslations } from "next-intl";

interface TermsStepProps {
    onNext: () => void;
    examFee: number;
    additionalFee: number;
}

export function TermsStep({ onNext, examFee, additionalFee }: TermsStepProps) {
    const t = useTranslations("TermsSteps");

    const notices: (React.ReactNode | string)[] = Array.from({ length: 22 }).map((_, idx) => {
        return t.rich(`toefl.${idx}`, {
            aed_exam: () => (
                <strong className="font-semibold">
                    <AED className="h-[0.8em] w-auto fill-current inline-block" /> {examFee.toLocaleString()}
                </strong>
            ),
            aed_additional: () => (
                <strong className="font-semibold">
                    <AED className="h-[0.8em] w-auto fill-current inline-block" /> {additionalFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </strong>
            ),
            aed_express: () => (
                <strong className="font-semibold">
                    <AED className="h-[0.8em] w-auto fill-current inline-block" /> 190
                </strong>
            ),
            aed_reschedule: () => (
                <strong className="font-semibold">
                    <AED className="h-[0.8em] w-auto fill-current inline-block" /> 255
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
