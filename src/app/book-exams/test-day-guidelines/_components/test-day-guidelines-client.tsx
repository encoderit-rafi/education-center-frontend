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
import { useTranslations, useLocale } from "next-intl";

const GUIDELINE_SECTION_IDS = ["before","what-to-bring","what-not-to-bring","arrival","during-test","rules","after-test","advice"];

export default function TestDayGuidelinesClient() {
  const t = useTranslations("TestDayGuidelinesPage");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const navSections = t.raw("navSections") as { id: string; label: string }[];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of GUIDELINE_SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary"
    >
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column (Text Content) */}
            <div className="md:col-span-8 text-center md:text-start">
              <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-red-50 border border-red-200/50 text-sm font-bold text-[#A11D1D] mb-6 shadow-sm">
                <Info className="w-4 h-4" />
                <span>{t("hero.badge")}</span>
              </div>

              <h1 className="flex flex-col gap-2 md:gap-3.5 tracking-tight uppercase leading-tight mb-8">
                <span className="block text-4xl md:text-5xl lg:text-6.5xl font-black text-slate-950">
                  {t("hero.title1")}
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6.5xl font-black text-slate-950 md:ms-12">
                  {t("hero.title2")}
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6.5xl font-black text-primary md:ms-24 relative md:whitespace-nowrap self-center md:self-start">
                  {t("hero.title3")}
                  <span className="absolute left-0 bottom-1 w-full h-2.5 bg-primary/10 rounded-full -z-10" />
                </span>
              </h1>
              <p className="text-slate-700 text-lg md:text-xl font-semibold leading-relaxed max-w-2xl">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Right Column (Image Content) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-4xl overflow-hidden border border-slate-200/60 shadow-2xl bg-white p-2 transition-transform duration-300 hover:scale-102">
                <img
                  src="/images/test-day-guidelines.png"
                  alt={isRtl ? "إرشادات يوم الاختبار" : "Test Day Guidelines Illustration"}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Navigation ── */}
      <section className="sticky top-20 z-30 border-y border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none scroll-smooth">
            {navSections.map((section) => (
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
                  {t("before.title")}
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                {t("before.subtitle")}
              </p>
              <ul className="space-y-3.5">
                {(t.raw("before.items") as string[]).map((item, i) => (
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
                  {t("whatToBring.title")}
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                {t("whatToBring.subtitle")}
              </p>
              <ul className="space-y-3.5">
                {(t.raw("whatToBring.items") as string[]).map((item, i) => (
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
                  <strong className="block mb-0.5">{t("whatToBring.alertTitle")}</strong>
                  {t("whatToBring.alertText")}
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
                  {t("whatNotToBring.title")}
                </h2>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                {t("whatNotToBring.subtitle")}
              </p>
              <ul className="space-y-3.5">
                {(t.raw("whatNotToBring.items") as string[]).map((item, i) => (
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
                {t("whatNotToBring.lockerNote")}
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
                  {t("arrival.title")}
                </h2>
              </div>
              <ul className="space-y-3.5">
                {(t.raw("arrival.items") as string[]).map((item, i) => (
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
                  {t("duringTest.title")}
                </h2>
              </div>
              <ul className="space-y-3.5">
                {(t.raw("duringTest.items") as string[]).map((item, i) => (
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
                  {t("rules.title")}
                </h2>
              </div>
              <ul className="space-y-3.5">
                {(t.raw("rules.items") as string[]).map((item, i) => (
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
                  {t("afterTest.title")}
                </h2>
              </div>
              <ul className="space-y-3.5">
                {(t.raw("afterTest.items") as string[]).map((item, i) => (
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
                  {t("advice.title")}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {t("advice.text")}
              </p>
              <div className="mt-6 rounded-2xl bg-primary/5 p-6 text-center">
                <p className="text-lg font-bold italic leading-relaxed text-primary">
                  &ldquo;{t("advice.quote")}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-red-950/50 via-slate-950 to-slate-950 border border-red-900/30 px-8 py-16 shadow-2xl md:px-16 relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32" />

            <div className="relative z-10 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
                {t("cta.title")}
              </h2>
              <p className="mb-10 text-slate-400 text-lg max-w-xl">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Link
                  href="tel:+97143333616"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {t("cta.callButton")}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/40"
                >
                  {t("cta.enquiryButton")}
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
