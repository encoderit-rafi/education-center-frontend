"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";

interface TermsStepProps {
  onNext: () => void;
  examFee: number;
  additionalFee: number;
}

export function TermsStep({ onNext, examFee, additionalFee }: TermsStepProps) {
  const notices: string[] = [
    "The Skills for English Test (SELT) registration service is offered by The Exam Preparation & Testing House LLC for the convenience of the test-takers. We hold no control or responsibility regarding any issues related to test results, scoring or other. We have no involvement in the test itself.",
    `The registration service is entirely voluntary and candidates can book their test at the center directly through Pearson without paying for the additional fee. Any candidate who wishes to use TEPTH registration service offered by our staff will be charged an additional AED ${additionalFee} (service charge) on top of the Skills for English Test (SELT) fee.`,
    "The test center bears responsibility of any incorrect information filled out during registration by one of our staff.",
    "Candidates registering using this service and others who register themselves online will be treated the same while taking the test at our center.",
    "If you are a minor, you will need consent from your parent or guardian.",
    "If you need special arrangements for the test, please do not complete this online form and contact us to assist your further.",
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-justify">
      <BaseNoteBox
        title="Terms and Conditions"
        notes={notices}
      />

      <div className="mt-8 flex justify-end">
        <Button onClick={onNext}>
          I Agree &amp; Continue
        </Button>
      </div>
    </div>
  );
}
