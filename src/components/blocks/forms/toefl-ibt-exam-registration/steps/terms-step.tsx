"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";

const NOTICES: string[] = [
    "The TOEFL iBT test registration service is offered by The Exam Preparation & Testing House LLC for the convenience of the test-takers. It is very important that you provide your full address information including the P.O. Box number or Postal Code (Zip Code) for the delivery of your test score report.",
    "Express shipping for a hard copy TOEFL iBT Score Report delivers within 2–5 business days after scores are confirmed. This service is available in GCC Countries for an additional estimated fee (AED 130 when selected during registration) and it provides tracking faster than standard mail, which can take several weeks. Express shipping only speeds up the delivery of the report once mailed, not the scoring process itself. However, we hold no responsibility regarding any issues related to test results and have no control or involvement in the test itself, the scoring of the test, the release of the results or the delivery of your score report.",
    "Registering online is voluntary and candidates can book their exam directly through ETS without incurring the additional fee. Any candidate who wishes to use TEPTH registration service offered by our staff will be charged an additional AED 100 (Estimated Late registration fee AED 180 applies for late registration period).",
    "Please be advised that registration is subject to seats availability. It is unlikely that a seat would not be secured. However, if a seat is not available, you can either ask for a refund or reschedule for the next available test date. Before booking the exam using our registration service, candidates are advised to contact our Help Desk to check the seats availability.",
    "Candidates registering using this service and others who register themselves online will be treated the same while taking the test at our center.",
    "If you have a permanent disability that is causing you a learning difficulty that requires a special arrangement, please do not complete this online form and contact us. Our employees would be happy to assist your further."
];

interface TermsStepProps {
    onNext: () => void;
}

export function TermsStep({ onNext }: TermsStepProps) {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <BaseNoteBox
                title="Important Notices"
                notes={NOTICES}
                className="bg-slate-50/50"
            />

            <div className="flex justify-end pt-4">
                <Button
                    onClick={onNext}
                    className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-10 h-14 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 flex items-center gap-3 group transition-all"
                >
                    I Agree & Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
