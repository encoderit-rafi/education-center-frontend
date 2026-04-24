"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Clock, CheckCircle2, Zap } from "lucide-react";
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import { PricingCard } from "../_components/pricing-card";

interface WorkshopPlan {
  duration: string;
  price: string;
  isPopular?: boolean;
}

interface WorkshopSection {
  title: string;
  subtitle: string;
  course: string;
  plans: WorkshopPlan[];
}

const WORKSHOP_SECTIONS: WorkshopSection[] = [
  {
    title: "IELTS Intensive Workshop",
    subtitle: "Targeted strategies and full simulation for IELTS success.",
    course: "ielts",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "PTE-A Intensive Workshop",
    subtitle: "Master the PTE Academic format with rapid-fire techniques.",
    course: "pte",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "CELPIP Private Workshop",
    subtitle: "One-on-one focused sessions for CELPIP achievement.",
    course: "celpip",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "CAEL Intensive Workshop",
    subtitle: "Sharpen your CAEL skills with intensive practice.",
    course: "cael",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "TOEFL-IBT Workshop",
    subtitle: "Comprehensive test-taking strategies for TOEFL.",
    course: "toefl",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "OET Writing Workshop",
    subtitle: "Specialized focus on OET Writing sub-test criteria.",
    course: "oet",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  },
  {
    title: "OET Reading Workshop",
    subtitle: "Proven techniques to master OET Reading complexity.",
    course: "oet",
    plans: [
      { duration: "2 Hours", price: "600" },
      { duration: "4 Hours", price: "1,000" },
      { duration: "6 Hours", price: "1,350", isPopular: true },
      { duration: "8 Hours", price: "1,600" },
    ]
  }
];

export default function ExamWorkshopPage() {
  return (
    <main className="font-sans selection:bg-red-100 selection:text-red-900">
      {/* ── Hero Section ── */}
      <header className="relative min-h-[500px] flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/about-us/vision-hero.png"
            alt="Intensive workshops"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-[#991B1B] text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              Skill Acceleration
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-headline font-black tracking-tight mb-8 leading-[1.1]">
              Intensive Exam <br />
              <span className="text-[#991B1B] italic">Workshops</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light max-w-xl">
              Targeted, high-impact sessions focused on examination techniques and full simulation. 
              Designed to give you the final edge before your test day.
            </p>
          </div>
        </div>
      </header>

      {/* ── Workshop Sections ── */}
      <div className="bg-white">
        {WORKSHOP_SECTIONS.map((section, sectionIdx) => (
          <section 
            key={section.title} 
            className={cn(
              "py-32 px-8",
              sectionIdx % 2 === 1 ? "bg-[#F9FAFB]" : "bg-white"
            )}
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[2px] w-12 bg-[#991B1B]" />
                  <span className="text-[#991B1B] text-xs font-black uppercase tracking-widest">Workshop Program</span>
                </div>
                <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
                  {section.title}
                </h2>
                <p className="text-[#4B5563] max-w-xl text-lg leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.plans.map((plan) => (
                  <PricingCard
                    key={plan.duration}
                    title={`${plan.duration} Session`}
                    description="Intensive private coaching session focused on your specific weaknesses."
                    price={plan.price}
                    priceLabel="Total Fee"
                    icon={Clock}
                    details={[
                      "One-on-One Training",
                      "Real Exam Simulation",
                      "Expert Feedback",
                      "Flexible Scheduling"
                    ]}
                    buttonText="Book Workshop"
                    buttonHref="/enroll-workshop"
                    isPopular={plan.isPopular}
                    course={section.course}
                    planId={plan.duration}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Global CTA ── */}
      <section className="py-24 bg-[#111827] px-8 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#991B1B]/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <Zap className="w-12 h-12 text-[#991B1B] mx-auto mb-6" />
          <h2 className="text-white text-4xl md:text-5xl font-headline font-black tracking-tight mb-4">
            Ready to <span className="text-[#991B1B]">Fast-Track</span> Your Score?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Our private workshops are the quickest way to identify and fix score-reducing habits.
          </p>
          <Link
            href="/free-consultation"
            className="inline-block bg-[#991B1B] text-white px-10 py-5 rounded-full font-headline font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 hover:bg-[#7F1D1D]"
          >
            Request Custom Schedule
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:py-32 md:px-8 bg-white">
        <FreeConsultation />
      </section>
    </main>
  );
}
