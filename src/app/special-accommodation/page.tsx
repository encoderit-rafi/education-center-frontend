import React from "react";
import Image from "next/image";
import {
  Timer,
  DoorOpen,
  Accessibility,
  FileText,
  Cpu,
  ShieldAlert,
  Check,
  AlertCircle,
  Phone,
  Mail,
  HelpCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function SpecialAccommodation() {
  const t = useTranslations("SpecialAccommodationPage");

  const whoCanRequestItems = t.raw("whoCanRequest.items") as string[];

  const supportsItems = t.raw("supports.items") as {
    title: string;
    desc: string;
  }[];

  const steps = t.raw("howToApply.steps") as {
    title: string;
    desc: string;
  }[];

  const importantNotesItems = t.raw("importantNotes.items") as {
    title: string;
    desc: string;
  }[];

  const supportsIcons = [
    <Timer className="w-5 h-5" key="0" />,
    <DoorOpen className="w-5 h-5" key="1" />,
    <Calendar className="w-5 h-5" key="2" />,
    <Accessibility className="w-5 h-5" key="3" />,
    <FileText className="w-5 h-5" key="4" />,
    <Cpu className="w-5 h-5" key="5" />,
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        {/* Subtle light glow behind content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(161,29,29,0.05),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(161,29,29,0.02),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-xs font-bold uppercase tracking-widest text-[#A11D1D] shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5" />
              Candidate Support
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
                {t("title")}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#A11D1D]">
                {t("titleAccent")}
              </h1>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg text-justify">
              {t("description")}
            </p>

            {/* Governance Alert */}
            <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-red-50/40 backdrop-blur-md p-5 shadow-xs">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#A11D1D] to-[#7a1212] rounded-l-2xl" />
              <div className="flex gap-4 pl-3">
                <AlertCircle className="w-5 h-5 text-[#A11D1D] shrink-0 mt-0.5" />
                <p className="text-sm text-slate-650 leading-relaxed font-semibold text-justify">
                  {t("governanceNote")}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Glow ring behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#A11D1D]/10 to-rose-500/5 blur-2xl" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl ring-1 ring-slate-100 group">
                <Image
                  src="/images/ADA.jpg"
                  alt={t("title")}
                  width={480}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO CAN REQUEST ─── */}
      <section className="relative py-20 px-6 bg-slate-50">
        {/* Decorative blob */}
        <div className="absolute right-0 top-0 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Eligibility
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Heading */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-snug">
                {t("whoCanRequest.title")}
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed text-justify">
                {t("whoCanRequest.intro")}
              </p>
            </div>

            {/* Cards grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whoCanRequestItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-rose-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCOMMODATIONS SUPPORTED ─── */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest">
              Our Facility
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {t("supports.title")}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {t("supports.intro")}
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportsItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-7 hover:bg-white hover:shadow-2xl hover:border-transparent hover:-translate-y-1 transition-all duration-400 cursor-default flex flex-col"
              >
                {/* Gradient corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-100/80 to-transparent rounded-bl-[3rem] group-hover:from-rose-200/60 transition-all" />

                {/* Icon */}
                <div className="relative mb-5 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-primary group-hover:border-rose-200 group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  {supportsIcons[index] || <Check className="w-5 h-5" />}
                </div>

                <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 text-justify">
                  {item.desc}
                </p>

                {/* Bottom hover accent */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Included</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW THE PROCESS WORKS ─── */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#7a1212] via-[#590b0b] to-[#330404] text-white overflow-hidden">
        {/* Mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(239,68,68,0.15),transparent)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-red-300 text-xs font-bold uppercase tracking-widest">
              Step by Step
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              {t("howToApply.title")}
            </h2>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {t("howToApply.intro")}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center text-center space-y-5 cursor-default">
                {/* Number bubble */}
                <div className="relative w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                  <span className="text-3xl font-black text-white/20 group-hover:text-white transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Corner badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary border-2 border-[#590b0b] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-base text-slate-100 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-justify">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPORTANT NOTES + CONTACT ─── */}
      <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-rose-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Important Notes */}
            <div className="lg:col-span-7 space-y-8">
              {/* Label */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">
                    Please Note
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                  {t("importantNotes.title")}
                </h2>
              </div>

              {/* Note cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {importantNotesItems.map((note, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-xl hover:border-rose-100 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Top colored strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-red-600 rounded-t-2xl" />

                    <div className="mt-2 mb-4 w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertCircle className="w-4 h-4 text-primary" />
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 mb-2">
                      {note.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      {note.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 shadow-2xl">
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <HelpCircle className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-2xl font-black">
                      {t("questions.title")}
                    </h3>
                    <div className="h-0.5 w-10 bg-gradient-to-r from-rose-500 to-red-400 rounded-full" />
                  </div>

                  <div className="space-y-3">
                    {/* Phone */}
                    <a
                      href="tel:+97165531250"
                      className="group/link flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-rose-500/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover/link:bg-rose-500/20 transition-colors">
                        <Phone className="w-4 h-4 text-rose-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                          Call us
                        </p>
                        <p className="text-sm font-bold text-white">
                          +971 6 553 1250
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 ml-auto group-hover/link:text-rose-400 group-hover/link:translate-x-0.5 transition-all" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@tepth.org"
                      className="group/link flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-rose-500/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover/link:bg-rose-500/20 transition-colors">
                        <Mail className="w-4 h-4 text-rose-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                          Email us
                        </p>
                        <p className="text-sm font-bold text-white">
                          info@tepth.org
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 ml-auto group-hover/link:text-rose-400 group-hover/link:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
