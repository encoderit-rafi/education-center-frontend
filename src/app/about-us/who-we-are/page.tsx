"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function WhoWeAre() {
  const t = useTranslations("AboutUsPage.WhoWeAre");
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
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/business-meeting-office.jpg"
                alt="TEPTH Lecture Hall"
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
                src="/images/study.jpg"
                alt="Students Collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-12">
            <SectionHeader
              badge={t("NarrativeSection.badge")}
              title={
                <>
                  {t("NarrativeSection.title")}
                  <span className="text-primary">
                    {t("NarrativeSection.titleAccent")}
                  </span>
                </>
              }
              description={
                <p className="italic text-sm font-bold">{t("NarrativeSection.quoteAuthor")}</p>
              }
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed text-justify">
              <p className="text-primary">
                {t("NarrativeSection.p1")}
              </p>
              <p>
                {t("NarrativeSection.p2")}
              </p>
              <p>
                {t("NarrativeSection.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
