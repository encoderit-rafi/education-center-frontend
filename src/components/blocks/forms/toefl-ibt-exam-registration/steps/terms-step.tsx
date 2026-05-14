"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";

import { PriceDisplay } from "@/components/ui/price-display";

const NOTICES: (string | React.ReactNode)[] = [
    "The TOEFL iBT test registration service is offered by The Exam Preparation & Testing House LLC for the convenience of the test-takers. It is very important that you provide your full address information including the P.O. Box number or Postal Code (Zip Code) for the delivery of your test score report.",
    <span key="1">
        Express shipping for a hard copy TOEFL iBT Score Report delivers within 2–5
        business days after scores are confirmed. This service is available in GCC
        Countries for an additional estimated fee (
        <span className="font-bold text-primary">
            <PriceDisplay amount={130} />
        </span>{" "}
        when selected during registration) and it provides tracking faster than
        standard mail, which can take several weeks. Express shipping only speeds up
        the delivery of the report once mailed, not the scoring process itself.
        However, we hold no control or responsibility regarding any issues related
        to test results and have no control or involvement in the test itself, the
        scoring of the test, the release of the results or the delivery of your
        score report.
    </span>,
    <span key="2">
        Any candidate who wishes
        to use TEPTH registration service offered by our staff will be charged an
        additional{" "}
        <span className="font-bold text-primary">
            <PriceDisplay amount={100} />
        </span>{" "}
        (Estimated Late registration fee{" "}
        <span className="font-bold text-primary">
            <PriceDisplay amount={180} />
        </span>{" "}
        applies for late registration period).
    </span>,
    "Please be advised that registration is subject to seats availability. It is unlikely that a seat would not be secured. However, if a seat is not available, you can either ask for a refund or reschedule for the next available test date. Before booking the exam using our registration service, candidates are advised to contact our Help Desk to check the seats availability.",
    "Candidates registering using this service and others who register themselves online will be treated the same while taking the test at our center.",
    "If you have a permanent disability that is causing you a learning difficulty that requires a special arrangement, please do not complete this online form and contact us. Our employees would be happy to assist your further."
];

interface TermsStepProps {
    onNext: () => void;
}

export function TermsStep({ onNext }: TermsStepProps) {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <BaseNoteBox
                title="Terms and Conditions"
                notes={NOTICES}
            />

            <div className="mt-8 flex justify-end">
                <Button
                    onClick={onNext}
                >
                    I Agree & Continue
                </Button>
            </div>
        </div>
    );
}
