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

export default function VisionAndMission() {
  const t = useTranslations("AboutUsPage.MissionAndVision");
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
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

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/study-1.jpg"
                alt="Strategic Vision"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/study-2.jpg"
                alt="Education Impact"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-8">
            {/* Section Badge */}
            <SectionHeader
              badge={t("PhilosophySection.badge")}
              title={
                <>
                  {t("PhilosophySection.title")}
                  <span className="text-primary">{t("PhilosophySection.titleAccent")}</span>
                </>
              }
              className="space-y-4"
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="section-description text-primary">
                {t("PhilosophySection.p1")}
              </p>
              <p className="section-description">
                {t("PhilosophySection.p2")}
              </p>
            </div>

            {/* Core Values List */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">
                {t("CoreValues.title")}
              </h3>
              <div className="grid gap-6">
                {t.raw("CoreValues.values").map((value: any, idx: number) => (
                  <BaseCard
                    key={idx}
                    className="flex flex-row items-start gap-6 p-6"
                  >
                    <BaseCardIcon className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-100 transition-colors">
                      0{idx + 1}
                    </BaseCardIcon>
                    <div className="space-y-2">
                      <BaseCardTitle className="font-black text-slate-900 uppercase text-sm tracking-widest group-hover:text-slate-900">
                        {value.title}
                      </BaseCardTitle>
                      <BaseCardDescription className="text-slate-500 text-sm leading-relaxed">
                        {value.text}
                      </BaseCardDescription>
                    </div>
                  </BaseCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
