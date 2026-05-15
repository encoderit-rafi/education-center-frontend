"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { PriceDisplay } from "@/components/ui/price-display";

const A2_NOTICES: (string | React.ReactNode)[] = [
  "The PTE Home A2 Test registration service is offered by The Exam Preparation & Testing House LLC for the convenience of the test-takers. We hold no control or responsibility regarding any issues related to test results, scoring or other. We have no involvement in the test itself.",
  <span key="1">
    The registration service is entirely voluntary and candidates can book
    their test at the center directly through Pearson without paying for the
    additional fee. Any candidate who wishes to use TEPTH registration
    service offered by our staff will be charged an additional{" "}
    <span className="font-bold text-primary">
      <PriceDisplay amount={100} /> (service charge)
    </span>{" "}
    on top of the PTE Home A2 Test fee.
  </span>,
  "The test center bears responsibility of any incorrect information filled out during registration by one of our staff.",
  "Candidates registering using this service and others who register themselves online will be treated the same while taking the test at our center.",
  "If you need special arrangements for the test, please do not complete this online form and contact us to assist your further.",
];

interface TermsStepProps {
  onNext: () => void;
}

export function TermsStep({ onNext }: TermsStepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <BaseNoteBox
        title="PTE Home A2 Terms and Conditions"
        notes={A2_NOTICES}
      />

      <div className="mt-8 flex justify-end">
        <Button onClick={onNext}>
          I Agree & Continue
        </Button>
      </div>
    </div>
  );
}
