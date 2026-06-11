"use client";
import { useTranslations } from "next-intl";

export default function ExperienceExcellence() {
  const t = useTranslations("HomePage.ExperienceExcellence");

  return (
    <section className="base-px base-py relative overflow-hidden ">
      <div className="section-container flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content Block */}
        <div className="flex-1 space-y-8">
          <h2 className="section-label">{t("label")}</h2>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary leading-tight">
              {t("title")}
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed text-justify">
              {t("description")}
            </p>
            <p className="text-2xl font-headline font-bold text-primary italic">
              {t("tagline")}
            </p>
          </div>
        </div>
        {/* Right Media Block */}
        <div className="flex-1 w-full space-y-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/images/about-us/Classroom.jpg"
              alt="TEPTH Testing Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
