"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Moon,
  Check,
  X,
  Clock,
  PenTool,
  ShieldAlert,
  Flag,
  Sparkles,
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const GUIDELINE_SECTIONS = [
  { id: "before", label: "Before Test Day" },
  { id: "what-to-bring", label: "What to Bring" },
  { id: "what-not-to-bring", label: "What Not to Bring" },
  { id: "arrival", label: "Arrival Time" },
  { id: "during-test", label: "During the Test" },
  { id: "rules", label: "Test Environment Rules" },
  { id: "after-test", label: "After the Test" },
  { id: "advice", label: "Our Advice" },
];

export default function TestDayGuidelinesClient() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of GUIDELINE_SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      {/* ── Premium Hero ── */}
      <section className="relative overflow-hidden bg-white pt-20">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-40"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 lg:text-6xl italic">
              Be Prepared. Be Confident. <br />
              <span className="text-primary not-italic">
                Perform Your Best.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              Your test day is not just about knowledge — it&apos;s about calm
              execution, timing, and following correct procedures. These
              guidelines help you arrive prepared and avoid unnecessary stress.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky Navigation ── */}
      <section className="sticky top-20 z-30 border-y border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none scroll-smooth">
            {GUIDELINE_SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300",
                  activeSection === section.id
                    ? "border-primary/20 bg-primary/5 text-primary shadow-sm"
                    : "border-slate-100 bg-white text-slate-600 hover:border-primary/20 hover:bg-primary/5 hover:text-primary",
                )}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guidelines Grid ── */}
      <section className="bg-slate-50/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
            {/* Before Test Day */}
            <div
              id="before"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Moon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  Before Test Day
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                To ensure a smooth experience:
              </p>
              <ul className="space-y-3.5">
                {[
                  "Get a full night of rest before your exam",
                  "Avoid last-minute intensive studying",
                  "Check your exam confirmation email carefully",
                  "Know the exact date, time, and location",
                  "Plan your route in advance (account for Dubai traffic)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Bring */}
            <div
              id="what-to-bring"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  What to Bring
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                On the day of your exam, you must bring:
              </p>
              <ul className="space-y-3.5">
                {[
                  "Valid original passport or accepted ID (no copies or expired documents)",
                  "Booking confirmation (printed or digital)",
                  "Any additional items mentioned in your exam instructions email",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-xs leading-relaxed text-amber-900">
                  <strong className="block mb-0.5">Crucial Requirement</strong>
                  Without valid identification, you will not be allowed to enter
                  the test room under any circumstances.
                </p>
              </div>
            </div>

            {/* What Not to Bring */}
            <div
              id="what-not-to-bring"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  What Not to Bring
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                Prohibited items inside the test room:
              </p>
              <ul className="space-y-3.5">
                {[
                  "Mobile phones or smart devices",
                  "Smart watches or electronic accessories",
                  "Bags, notes, or study materials",
                  "Food or drinks (unless medically pre-approved)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <X className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-slate-50 p-4 text-xs font-medium text-slate-500">
                Secure lockers are provided at the center for all prohibited
                items.
              </p>
            </div>

            {/* Arrival Time */}
            <div
              id="arrival"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  Arrival Time
                </h2>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Arrive at least 30 to 45 minutes early",
                  "Late arrivals will not be admitted (no exceptions)",
                  "Allow extra time for Dubai traffic and parking search",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* During the Test */}
            <div
              id="during-test"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <PenTool className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  During the Test
                </h2>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Follow all instructions given by the invigilators",
                  "Remain silent and focused at all times",
                  "Do not attempt to communicate with other candidates",
                  "Manage your time carefully for each section",
                  "Stay calm — difficult questions are a normal part of the test",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Test Environment Rules */}
            <div
              id="rules"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  Environment Rules
                </h2>
              </div>
              <ul className="space-y-3.5">
                {[
                  "You must follow all center rules strictly",
                  "Any form of misconduct leads to immediate disqualification",
                  "Breaks (if allowed) are only at designated times",
                  "Respect the exam environment and other candidates",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After the Test */}
            <div
              id="after-test"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Flag className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  After the Test
                </h2>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Collect belongings only when instructed",
                  "Leave the test area quietly and immediately",
                  "Results shared per official exam body timelines",
                  "One test does not define your entire potential",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-700"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Advice */}
            <div
              id="advice"
              className="scroll-mt-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  Our Expert Advice
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Most candidates lose marks{" "}
                <strong className="text-slate-900">not</strong> because of their
                English ability — but because of anxiety and poor strategy.
              </p>
              <div className="mt-6 rounded-2xl bg-primary/5 p-6 text-center">
                <p className="text-lg font-bold italic leading-relaxed text-primary">
                  &ldquo;Stay calm. Stay focused. Trust your preparation.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 shadow-2xl md:px-16 relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32" />

            <div className="relative z-10 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
                Still Have Questions?
              </h2>
              <p className="mb-10 text-slate-400 text-lg max-w-xl">
                Our support team is here to ensure you have a seamless
                experience. Contact us Sunday to Thursday, 9am – 6pm.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Link
                  href="tel:+97143333616"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +971 4 333 3616
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/40"
                >
                  Send an Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
