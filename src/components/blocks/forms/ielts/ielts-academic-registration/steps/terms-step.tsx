"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";

const NOTICES: string[] = [
  "For your convenience, The Exam Preparation & Testing House LLC offers the CD-IELTS test registration service. We hold no responsibility regarding any issues related to test results or scoring and we have no control or involvement in the test itself, the scoring of the test or the release of the results. This service is optional and candidates can book the exam directly on the exam provider’s website and select our venue and take the test.",

  "If there are insufficient candidate numbers, the test might not be held at our testing venue. If needed, candidates will be informed and moved to the nearest available testing venue as determined by the British Council. Please ensure you provide your current cellphone number and email address when you register.",

  "It is very important that you provide your full address information including the P.O. Box number and/or Postal Code (Zip Code). TEPTH holds no responsibility regarding the delivery of your original IELTS Score Report. If you take IELTS on computer, you will receive your results electronically only. You can download the electronic version (eTRF) from the Test Taker portal 1–8 days after your test. The British Council will not issue an additional paper Test Report Form.",

  "You can print your electronic Test Report Form (eTRF) to send it to the organisations you are applying to, or you can send it via email. Alternatively, you can send your results directly to the organisation through the Test Taker portal.",
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
        // className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group"
        >
          I Agree & Continue
          {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
        </Button>
      </div>
    </div>
  );
}
