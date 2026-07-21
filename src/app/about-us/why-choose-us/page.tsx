"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";
import {
  Target,
  MessageSquare,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

const VALUE_ICONS = [
  <Target key="skill" className="size-5" />,
  <MessageSquare key="feedback" className="size-5" />,
  <Sparkles key="adaptive" className="size-5" />,
  <GraduationCap key="prep" className="size-5" />,
];

export default function WhyChooseUs() {
  const t = useTranslations("AboutUsPage.WhyChooseUs");

  const features = (t.raw("NarrativeSection.features") as { title: string; text: string }[]).map((feat, idx) => ({
    ...feat,
    icon: VALUE_ICONS[idx] || VALUE_ICONS[0],
  }));

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
                src="/images/about-us/experience-student.png"
                alt="Student Confidence with TEPTH"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/hero/image-5.jpg"
                alt="Proven Success in Global Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline border-s-4 border-[#A11D1D] ps-4">
              {t("NarrativeSection.title")} <span className="text-primary">{t("NarrativeSection.titleAccent")}</span>
            </h3>
            <p className="text-slate-650 text-base leading-relaxed text-justify font-medium">
              {t("NarrativeSection.p1")}
            </p>
          </div>
        </div>
      </section>

      {/* How We Set You Up Section */}
      <section className="py-16 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-100">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs">
              {t("HeroSection.methodologyBadge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-headline">
              {t("NarrativeSection.subtitle")}
            </h2>
            <div className="h-1 w-16 bg-[#A11D1D] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <BaseCard
                key={idx}
                className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all duration-300 hover:bg-white hover:border-slate-200 hover:shadow-md group flex items-start gap-6"
              >
                <BaseCardIcon className="size-12 rounded-xl bg-red-50 text-[#A11D1D] group-hover:bg-[#A11D1D] group-hover:text-white transition-all duration-300 shadow-xs shrink-0 select-none">
                  {feat.icon}
                </BaseCardIcon>

                <div className="space-y-2">
                  <BaseCardTitle className="text-base font-bold text-slate-900 group-hover:text-[#A11D1D] transition-colors duration-200 uppercase tracking-wider">
                    {feat.title}
                  </BaseCardTitle>

                  <BaseCardDescription className="text-slate-600 text-xs leading-relaxed text-justify font-semibold">
                    {feat.text}
                  </BaseCardDescription>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-8 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="relative bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-75 h-75 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs">
              {t("HeroSection.confidenceBadge")}
            </span>
            <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-justify md:text-center font-bold">
              {t("NarrativeSection.conclusion")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
