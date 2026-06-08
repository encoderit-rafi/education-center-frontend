"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BaseNoteBox from "@/components/base-note-box";
import { AED } from "@/components/ui/aed";

const NOTICES: (React.ReactNode | string)[] = [
  <span key="1">
    <strong className="font-semibold">The Exam Preparation & Testing House L.L.C</strong> facilitates <strong className="font-semibold">CD-IELTS General Training</strong> test registration strictly as an optional convenience for candidates. We expressly disclaim any liability or involvement regarding test administration, scoring, technical issues, or the distribution of results. Alternatively, candidates may choose to register directly via the official exam provider's portal while designating our facility as their testing location.
  </span>,
  "If you require special testing accommodations, please do not proceed with this online form. Instead, contact us directly so we can assist you with your registration.",
  <span key="3">
    Registration for the CD-IELTS officially closes <strong className="font-semibold">72 hours (3 days)</strong> prior to the start of the Listening, Reading, and Writing sections. Since testing seats often fill up quickly, we strongly encourage you to secure your booking well ahead of time.
  </span>,
  <span key="4">
    Test sessions at our venue are contingent upon meeting minimum enrollment requirements. In the event of a cancellation due to low registration, the <strong className="font-semibold">British Council</strong> will reassign affected candidates to the nearest available testing center. Candidates will be notified accordingly; therefore, it is mandatory to provide a valid email address and mobile phone number upon registration.
  </span>,
  "Your CD-IELTS scores will only be delivered electronically. Between 1 and 8 days after your test, you can log into the Test Taker portal to download your digital results (eTRF). Keep in mind that the British Council will not mail you a printed paper copy.",
  "You have multiple options for sharing your electronic Test Report Form (eTRF) with institutions. You may print a hard copy to submit manually, send the digital file via email, or use the Test Taker portal to route your results directly to the organization.",
  "It doesn't matter if you use our registration service or book the test yourself online—everyone gets the exact same treatment and experience on test day at our center.",
  <span key="fee">
    In the UAE, the current fee for the computer-delivered (CD) <strong className="font-semibold">IELTS General Training</strong> exam is <strong className="font-semibold"><AED className="h-[0.8em] w-auto fill-current inline-block" /> 1,470</strong> (VAT inclusive). Candidates opting to use the <strong className="font-semibold">TEPTH</strong> registration service will incur an administrative fee of <strong className="font-semibold"><AED className="h-[0.8em] w-auto fill-current inline-block" /> 150</strong>, which is applied in addition to the standard CD-IELTS exam fee.
  </span>,
  "Before you use our service to book your test, please reach out to our Help Desk to make sure we still have open seats for your preferred date and time slot.",
  "If you are under 18, you will need to get written permission from your parent or guardian before you can proceed with your CD-IELTS Registration.",
  "The CD-IELTS exam is generally not advised for candidates who are younger than 16 years old.",
  <span key="12">
    Your Speaking Test may take place either face-to-face with an examiner or via video call. We will inform you of the intended format before finalizing your booking, though please note that the <strong className="font-semibold">British Council</strong> must ultimately approve it. If you have a strong preference for one format over the other, please contact us to verify the details before starting your CD-IELTS registration on our website.
  </span>,
  "On the day of the exam, you must present the exact same, valid form of identification that you used during your registration.",
  "Candidates who arrive late to the exam will be denied entry and will not be permitted to take the test.",
  "Using fraudulent identification or attempting to cheat will result in immediate disqualification and removal from the testing center. Furthermore, such actions including any suspicious behaviour will be reported to the exam provider, which can lead to the cancellation of your scores and the forfeiture of your testing fees.",
  "We are not responsible if we cannot run the test or fulfill our duties due to extreme situations entirely out of our hands. This includes major emergencies like natural disasters, wars, or unexpected power and technical blackouts.",
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
          className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group"
        >
          I Agree & Continue
        </Button>
      </div>
    </div>
  );
}
