"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { PriceDisplay } from "@/components/ui/price-display";
import { useTranslations } from "next-intl";

interface TermsStepProps {
    onNext: () => void;
    examFee: number;
    additionalFee: number;
}

export function TermsStep({ onNext, examFee, additionalFee }: TermsStepProps) {
    const t = useTranslations("TermsSteps");

    const notices: (React.ReactNode | string)[] = Array.from({ length: 6 }).map((_, idx) => {
        return t.rich(`toefl.${idx}`, {
            price_express: () => <span className="font-bold text-primary"><PriceDisplay amount={130} /></span>,
            price_additional: () => <span className="font-bold text-primary"><PriceDisplay amount={additionalFee} /></span>,
            price_late: () => <span className="font-bold text-primary"><PriceDisplay amount={180} /></span>,
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
