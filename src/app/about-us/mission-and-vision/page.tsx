"use client";

import Image from "next/image";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";
import { Compass, Lightbulb, GraduationCap } from "lucide-react";

const VALUE_ICONS = [
  <Lightbulb key="complex" className="size-5" />,
  <GraduationCap key="future" className="size-5" />,
  <Compass key="way" className="size-5" />,
];

export default function VisionAndMission() {
  const t = useTranslations("AboutUsPage.MissionAndVision");

  const coreValues = (t.raw("CoreValues.values") as { title: string; text: string }[]).map((val, idx) => ({
    ...val,
    icon: VALUE_ICONS[idx] || VALUE_ICONS[0],
  }));

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <SectionHeader
              badge={t("HeroSection.badge")}
              title={
                <>
                  {t("HeroSection.title")}
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-2">
              <Image
                src="/images/study-1.jpg"
                alt="TEPTH Strategic Vision"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Row */}
      <section className="py-16 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Box */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 lg:p-12 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight font-headline border-l-4 border-[#A11D1D] pl-4">
              {t("Vision.title")}
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed text-justify font-medium">
              {t("Vision.desc")}
            </p>
          </div>

          {/* Mission Box */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 lg:p-12 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight font-headline border-l-4 border-[#A11D1D] pl-4">
              {t("Mission.title")}
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed text-justify font-medium">
              {t("Mission.desc")}
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs">
              Foundational Principles
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-headline">
              {t("CoreValues.title")}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
              {t("CoreValues.subtitle")}
            </p>
            <div className="h-1 w-16 bg-[#A11D1D] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <BaseCard
                key={idx}
                className="rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group flex flex-col gap-5"
              >
                <BaseCardIcon className="size-12 rounded-xl bg-red-50 text-[#A11D1D] group-hover:bg-[#A11D1D] group-hover:text-white transition-all duration-300 shadow-xs">
                  {value.icon}
                </BaseCardIcon>

                <div className="space-y-3 flex-grow">
                  <BaseCardTitle className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#A11D1D] transition-colors duration-200 uppercase tracking-wider">
                    {value.title}
                  </BaseCardTitle>

                  <BaseCardDescription className="text-slate-600 text-xs leading-relaxed text-justify font-semibold">
                    {value.text}
                  </BaseCardDescription>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
