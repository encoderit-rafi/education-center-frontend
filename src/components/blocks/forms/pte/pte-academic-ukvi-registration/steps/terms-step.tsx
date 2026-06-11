"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { AED } from "@/components/ui/aed";

const UKVI_NOTICES: (React.ReactNode | string)[] = [
  <span key="1">
    <strong className="font-semibold">The Exam Preparation &amp; Testing House L.L.C</strong> facilitates{" "}
    <strong className="font-semibold">PTE Academic UKVI </strong>test registration strictly as an optional convenience
    for candidates. We expressly disclaim any liability or involvement regarding test administration, scoring, technical
    issues, or the distribution of results. Alternatively, candidates may choose to register directly via the official
    exam provider&apos;s portal while designating our facility as their testing location.
  </span>,
  "If you require special testing accommodations, please do not proceed with this online form. Instead, contact us directly so we can assist you with your registration.",
  "Our test center takes full responsibility for any data entry errors or incorrect information submitted by our staff during your registration process.",
  <span key="4">
    Registration for the <strong className="font-semibold">PTE Academic UKVI</strong> officially closes{" "}
    <strong className="font-semibold">24 hours (1 day)</strong> prior to exam date. Registration must be completed at
    least 24 hours before your chosen test time. Since testing seats often fill up quickly, we strongly encourage you to
    secure your booking well ahead of time.
  </span>,
  "It doesn't matter if you use our registration service or book the test yourself online—everyone gets the exact same treatment and experience on test day at our center.",
  <span key="6">
    In the UAE, the current fee for the <strong className="font-semibold">PTE Academic UKVI</strong> exam is{" "}
    <strong className="font-semibold">
      <AED className="h-[0.8em] w-auto fill-current inline-block" /> 1,450
    </strong>
    . Candidates opting to use the <strong className="font-semibold">TEPTH</strong> registration service will incur an
    administrative fee of{" "}
    <strong className="font-semibold">
      <AED className="h-[0.8em] w-auto fill-current inline-block" /> 150.00
    </strong>
    , which is applied in addition to the standard <strong className="font-semibold">PTE Academic UKVI</strong> exam fee.
  </span>,
  "Before you use our service to book your test, please reach out to our Help Desk to make sure we still have open seats for your preferred date and time slot.",
  <span key="8">
    If you are under 18, you will need to get written permission from your parent or guardian before you can proceed
    with your <strong className="font-semibold">PTE Academic UKVI</strong> Registration.
  </span>,
  <span key="9">
    Candidates must be at least 16 years of age to be eligible to sit for the{" "}
    <strong className="font-semibold">PTE Academic UKVI</strong> exam.
  </span>,
  "On the day of the exam, you must present the exact same, valid form of identification that you used during your registration.",
  "Candidates who arrive late to the exam will be denied entry and will not be permitted to take the test.",
  "Test administrators will conduct a respectful security check to verify that no prohibited items are being brought into the testing room. As part of this process, you may be requested to empty your pockets, perform a self-pat-down, or adjust clothing items—such as rolling up sleeves or lifting hoods and pant legs—to confirm no unauthorized materials are concealed.",
  "For candidates wearing glasses, the proctor will conduct a visual inspection of your eyewear to ensure compliance, strictly without physically touching them. The same applies to hearing aid.",
  "Before entering the exam room, all personal items, such as wallets, watches, and small purses, must be stored in your assigned locker. Large bags and backpacks are not allowed at your testing station and must be placed in a designated area at the front or back of the room, as instructed by the staff. Additionally, all electronic devices, including phones, smartwatches, and earbuds, are strictly prohibited; they must be completely powered off and locked away prior to entry.",
  "Candidates are not allowed to bring any food, beverages (including water), or chewing gum into the testing room.",
  "Using fraudulent identification or attempting to cheat will result in immediate disqualification and removal from the testing center. Furthermore, such actions including any suspicious behaviour will be reported to the exam provider, which can lead to the cancellation of your scores and the forfeiture of your testing fees.",
  "We are not responsible if we cannot run the test or fulfill our duties due to extreme situations entirely out of our hands. This includes major emergencies like natural disasters, wars, or unexpected power and technical blackouts.",
];

interface TermsStepProps {
  onNext: () => void;
}

export function TermsStep({ onNext }: TermsStepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-justify">
      <BaseNoteBox
        title="PTE Academic UKVI Terms and Conditions"
        notes={UKVI_NOTICES}
      />

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNext}
        >
          I Agree &amp; Continue
        </Button>
      </div>
    </div>
  );
}
