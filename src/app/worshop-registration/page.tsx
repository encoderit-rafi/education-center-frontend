"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import RegistrationForm from "./_components/registration-form";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const exam = searchParams.get("exam");
  const duration = searchParams.get("duration");

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* ── Hero Section ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Secure Your Spot
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter leading-none">
            Workshop <br />
            <span className="text-primary italic">Registration</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Select your preferred workshop duration and schedule below to finalize your booking.
          </p>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-full opacity-5 blur-3xl bg-secondary/20 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      <section className="px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <RegistrationForm 
            initialExamId={exam || undefined} 
            initialDurationId={duration || undefined} 
          />
        </div>
      </section>
    </div>
  );
}

export default function WorkshopRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RegistrationContent />
    </Suspense>
  );
}
