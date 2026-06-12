"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("AboutUsPage.WhyChooseUs");
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
                {t("HeroSection.title")}{" "}
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
                src="/images/about-us/why-choose-us.jpg"
                alt="Student Confidence"
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
                src="/images/hero/image-5.jpg"
                alt="Proven Success"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-12">
            {/* Section Badge */}
            <SectionHeader
              badge={t("NarrativeSection.badge")}
              title={
                <>
                  {t("NarrativeSection.title")} <span className="text-primary">{t("NarrativeSection.titleAccent")}</span>
                </>
              }
              className="space-y-4"
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed font-medium text-justify">
              <p className="section-description text-primary">
                {t("NarrativeSection.p1")}
              </p>
              <p className="section-description">
                {t("NarrativeSection.p2")}
              </p>
            </div>

            {/* Feature Block */}
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10 md:p-14 shadow-sm group hover:bg-primary transition-colors duration-500">
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-black group-hover:text-white text-justify">
                <span className="text-primary group-hover:text-white transition-colors">
                  {t("NarrativeSection.highlightStart")}
                </span>{" "}
                {t("NarrativeSection.highlightText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
