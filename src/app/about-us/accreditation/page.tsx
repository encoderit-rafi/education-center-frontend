"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function Accreditation() {
  const t = useTranslations("AboutUsPage.Accreditation");
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge={t("HeroSection.badge")}
            title={
              <>
                {t("HeroSection.title")}
                <span className="text-primary">
                  {t("HeroSection.titleAccent")}
                </span>
              </>
            }
            description={t("HeroSection.description")}
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/approve.png"
                alt="Accreditation Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          {/* Left Narrative */}
          <div className="flex-1 space-y-12">
            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* SEDD */}
              <div className="flex flex-col md:flex-row items-center gap-10 group">
                <div className="w-full md:flex-1">
                  <div className="relative w-full aspect-2/1 overflow-hidden transition-all">
                    <Image
                      src="/images/about-us/goverment.png"
                      alt="SEDD Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-base leading-relaxed font-medium text-justify">
                    {t("SEDD.description")}
                  </p>
                </div>
              </div>

              {/* SPEA */}
              <div className="flex flex-col md:flex-row items-center gap-10 group">
                <div className="flex-1 space-y-6">
                  <p className="text-base leading-relaxed font-medium text-justify">
                    {t("SPEA.description")}
                  </p>
                </div>
                <div className="w-full md:flex-1">
                  <div className="relative w-full aspect-2/1 overflow-hidden transition-all">
                    <Image
                      src="/images/about-us/private.png"
                      alt="SPEA Logo"
                      fill
                      className="object-contain"
                    />
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
