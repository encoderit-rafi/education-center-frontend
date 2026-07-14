"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Moon,
  ClipboardCheck,
  Ban,
  Clock,
  PenTool,
  AlertTriangle,
  Award,
  Sparkles,
  Check,
  X,
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";
import Link from "next/link";

interface SectionConfig {
  id: string;
  translationKey: string;
  icon: React.ComponentType<any>;
  colorClasses: {
    iconBg: string;
    titleHover: string;
    bulletBg: string;
    bulletIcon: React.ComponentType<any>;
    border: string;
  };
  hasAlert?: boolean;
  isProhibited?: boolean;
  isAdvice?: boolean;
}

const SECTIONS: SectionConfig[] = [
  {
    id: "before",
    translationKey: "before",
    icon: Moon,
    colorClasses: {
      iconBg: "bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
      titleHover: "group-hover:text-blue-700",
      bulletBg: "bg-blue-50 text-blue-700",
      bulletIcon: Check,
      border: "hover:border-blue-200",
    },
  },
  {
    id: "what-to-bring",
    translationKey: "whatToBring",
    icon: ClipboardCheck,
    colorClasses: {
      iconBg: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white",
      titleHover: "group-hover:text-emerald-700",
      bulletBg: "bg-emerald-50 text-emerald-700",
      bulletIcon: Check,
      border: "hover:border-emerald-200",
    },
    hasAlert: true,
  },
  {
    id: "what-not-to-bring",
    translationKey: "whatNotToBring",
    icon: Ban,
    colorClasses: {
      iconBg: "bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white",
      titleHover: "group-hover:text-rose-700",
      bulletBg: "bg-rose-50 text-rose-700",
      bulletIcon: X,
      border: "hover:border-rose-200",
    },
    isProhibited: true,
  },
  {
    id: "arrival",
    translationKey: "arrival",
    icon: Clock,
    colorClasses: {
      iconBg: "bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white",
      titleHover: "group-hover:text-amber-700",
      bulletBg: "bg-amber-50 text-amber-700",
      bulletIcon: Check,
      border: "hover:border-amber-200",
    },
  },
  {
    id: "during-test",
    translationKey: "duringTest",
    icon: PenTool,
    colorClasses: {
      iconBg: "bg-violet-50 text-violet-700 group-hover:bg-violet-700 group-hover:text-white",
      titleHover: "group-hover:text-violet-700",
      bulletBg: "bg-violet-50 text-violet-700",
      bulletIcon: Check,
      border: "hover:border-violet-200",
    },
  },
  {
    id: "rules",
    translationKey: "rules",
    icon: AlertTriangle,
    colorClasses: {
      iconBg: "bg-red-50 text-red-700 group-hover:bg-red-700 group-hover:text-white",
      titleHover: "group-hover:text-red-700",
      bulletBg: "bg-red-50 text-red-700",
      bulletIcon: Check,
      border: "hover:border-red-200",
    },
  },
  {
    id: "after-test",
    translationKey: "afterTest",
    icon: Award,
    colorClasses: {
      iconBg: "bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white",
      titleHover: "group-hover:text-teal-700",
      bulletBg: "bg-teal-50 text-teal-700",
      bulletIcon: Check,
      border: "hover:border-teal-200",
    },
  },
  {
    id: "advice",
    translationKey: "advice",
    icon: Sparkles,
    colorClasses: {
      iconBg: "bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white",
      titleHover: "group-hover:text-purple-700",
      bulletBg: "bg-purple-50 text-purple-700",
      bulletIcon: Check,
      border: "hover:border-purple-200",
    },
    isAdvice: true,
  },
];

export default function TestDayGuidelines() {
  const t = useTranslations("TestDayGuidelinesPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="flex flex-col min-h-screen bg-slate-50/50 pb-24 text-slate-800 font-sans relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-[#A11D1D]/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-50 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-r from-red-500/5 to-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header section */}
      <section className="pt-24 pb-8 relative z-10 animate-fade-in">
        <div className="container max-w-7xl px-6 mx-auto">
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
                <span className="block text-4xl md:text-5xl lg:text-6.5xl font-black text-[#A11D1D] md:ms-24 relative md:whitespace-nowrap self-center md:self-start">
                  {t("hero.title3")}
                </span>
              </h1>

              <p className="text-slate-700 text-lg md:text-xl font-semibold leading-relaxed mb-4 max-w-2xl">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Right Column (Image Content) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl bg-white p-1 transition-transform duration-300 hover:scale-102">
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

      {/* Content Section (Cards Layout) */}
      <section className="relative z-10 py-8">
        <div className="container max-w-4xl px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const { iconBg, titleHover, bulletBg, bulletIcon: BulletIcon, border } = section.colorClasses;
              const tk = section.translationKey;

              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className={`group border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${border}`}
                >
                  <CardHeader className="flex-row items-center gap-4 border-b border-slate-100 pb-5 [.border-b]:pb-5">
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-inner ${iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className={`text-xl md:text-2xl font-black text-slate-900 transition-colors ${titleHover}`}>
                      {t(`${tk}.title`)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                      {/* Subtitle/instruction message if exists in translations */}
                      {(tk === "before" || tk === "whatToBring" || tk === "whatNotToBring") && (
                        <p className="font-semibold text-slate-700">
                          {t(`${tk}.subtitle`)}
                        </p>
                      )}

                      {/* Section contents list */}
                      {!section.isAdvice && (
                        <ul className="space-y-3.5 pl-0">
                          {(t.raw(`${tk}.items`) as string[]).map((item, idx) => (
                            <li key={idx} className="flex gap-3.5 items-start">
                              <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${bulletBg}`}>
                                <BulletIcon className="w-3 h-3" />
                              </span>
                              <span className="flex-1 text-slate-700 font-medium">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Advice Specific Formatting */}
                      {section.isAdvice && (
                        <div className="space-y-6">
                          <p className="text-slate-600 font-medium text-base">
                            {t("advice.text")}
                          </p>
                          <div className={`p-6 rounded-2xl bg-red-50/40 border-l-4 border-[#A11D1D] text-center shadow-sm ${isRtl ? "border-l-0 border-r-4" : ""}`}>
                            <p className="text-lg md:text-xl font-bold italic leading-relaxed text-[#A11D1D]">
                              &ldquo;{t("advice.quote")}&rdquo;
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Alert Message for What to Bring */}
                      {section.hasAlert && (
                        <div className={`mt-6 flex gap-4 p-5 rounded-2xl border border-amber-200 bg-amber-50/50 text-start shadow-2xs ${isRtl ? "border-r-4 border-r-amber-500" : "border-l-4 border-l-amber-500"}`}>
                          <Info className="shrink-0 w-6 h-6 text-amber-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-amber-800 mb-1 uppercase tracking-wider">
                              {t("whatToBring.alertTitle")}
                            </h4>
                            <p className="text-xs md:text-sm text-amber-900 leading-relaxed font-semibold">
                              {t("whatToBring.alertText")}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Note for What Not to Bring */}
                      {section.isProhibited && (
                        <div className={`mt-6 p-4 rounded-xl bg-slate-50 text-xs md:text-sm text-slate-500 font-semibold italic border-l-2 border-slate-300 ${isRtl ? "border-l-0 border-r-2" : ""}`}>
                          {t("whatNotToBring.lockerNote")}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative z-10 py-16">
        <div className="container max-w-4xl px-6 mx-auto">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-red-950/50 via-slate-950 to-slate-950 border border-red-900/30 px-8 py-14 shadow-2xl md:px-16 text-center md:text-left">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A11D1D]/10 blur-[100px] rounded-full -mr-32 -mt-32" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="mb-3 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                  {t("cta.title")}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  {t("cta.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                <Link
                  href={`tel:${t("cta.callButton").replace(/\s+/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-md transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-[#A11D1D]" />
                  {t("cta.callButton")}
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-white/5 hover:border-white/40"
                >
                  {t("cta.enquiryButton")}
                  <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
