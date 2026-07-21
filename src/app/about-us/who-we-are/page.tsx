"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export default function WhoWeAre() {
  const t = useTranslations("AboutUsPage.WhoWeAre");

  const exams = t.raw("NarrativeSection.examsList") as string[];

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-100 h-100 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <SectionHeader
              badge={t("HeroSection.badge")}
              title={
                <>
                  {t("HeroSection.title")}{" "}
                  <span className="text-primary">{t("HeroSection.titleAccent")}</span>
                </>
              }
              description={t("HeroSection.description")}
              className="space-y-4"
            />
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-2">
              <Image
                src="/images/about-us/business-meeting-office.jpg"
                alt="TEPTH Strategic Collaboration"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-16 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
              {t("NarrativeSection.title")}{t("NarrativeSection.titleAccent")}
            </h2>
            <div className="h-1 w-16 bg-[#A11D1D] rounded-full" />
            <p 
              className="text-slate-650 text-base leading-relaxed text-justify font-medium"
              dangerouslySetInnerHTML={{ __html: t.raw("NarrativeSection.p1") }}
            />
          </div>
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/study.jpg"
                alt="Students Empowering Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Prep Section */}
      <section className="py-16 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-headline border-s-4 border-[#A11D1D] ps-4">
              {t("NarrativeSection.expertTitle")}
            </h3>
            <p className="text-slate-655 text-sm leading-relaxed text-justify font-medium">
              {t("NarrativeSection.expertDesc")}
            </p>
          </div>

          {/* Right Block - Exams Pill Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {exams.map((exam, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-300 flex items-center gap-3 group"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#A11D1D] group-hover:bg-[#A11D1D] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <Check className="size-4" />
                  </span>
                  <span className="font-bold text-slate-900 text-xs tracking-wide">
                    {exam}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Approach Section */}
      <section className="py-8 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="relative bg-slate-50/50 border border-slate-100 rounded-3xl p-8 lg:p-12 overflow-hidden hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-75 h-75 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs">
              {t("NarrativeSection.visionBadge")}
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight font-headline">
              {t("NarrativeSection.visionTitle")}
            </h3>
            <div className="space-y-6 text-slate-655 text-sm md:text-base leading-relaxed text-justify font-medium">
              <p>{t("NarrativeSection.visionDesc1")}</p>
              <p>{t("NarrativeSection.visionDesc2")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
