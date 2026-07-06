"use client";

import Image from "next/image";
import {
  BookOpen,
  CheckSquare,
  Eye,
  Users,
  Calendar,
  CreditCard,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function AssessmentSolutionsPage() {
  const t = useTranslations("AssessmentSolutionsPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Helper icons for the 6 management categories
  const manageIcons = [
    <BookOpen className="w-6 h-6 text-red-800" key="0" />,
    <CheckSquare className="w-6 h-6 text-red-800" key="1" />,
    <Eye className="w-6 h-6 text-red-800" key="2" />,
    <Users className="w-6 h-6 text-red-800" key="3" />,
    <Calendar className="w-6 h-6 text-red-800" key="4" />,
    <CreditCard className="w-6 h-6 text-red-800" key="5" />
  ];

  const platforms = [
    {
      id: "invigilate",
      title: t("invigilate.title"),
      logo: "/images/smartest-invigilate-logo.jpg",
      images: ["/images/smartest-invigilate.jpg", "/images/hijab-student.jpg"],
      description: t("invigilate.description"),
      accentClass: "border-t-red-600",
      glowClass: "bg-red-500/10",
    },
    {
      id: "examiner",
      title: t("examiner.title"),
      logo: "/images/smartest-examiner-logo.jpg",
      images: ["/images/study.jpg"],
      description: t("examiner.cardDescription"),
      accentClass: "border-t-amber-500",
      glowClass: "bg-amber-500/10",
    },
    {
      id: "nexus",
      title: t("nexus.title"),
      logo: "/images/smartest-nexus-logo.jpg",
      images: ["/images/smartest-nexus.jpg"],
      description: t("nexus.cardDescription"),
      accentClass: "border-t-blue-600",
      glowClass: "bg-blue-600/10",
    },
    {
      id: "proctors",
      title: t("proctors.title"),
      logo: "/images/smartest-proctors-logo.jpg",
      images: ["/images/live_proctoring.jpg"],
      description: t("proctors.description"),
      accentClass: "border-t-emerald-600",
      glowClass: "bg-emerald-600/10",
    },
    {
      id: "centres",
      title: t("centres.title"),
      logo: "/images/smartest-centres-logo.jpg",
      images: ["/images/about-us/Classroom.jpg"],
      description: t("centres.description"),
      accentClass: "border-t-indigo-600",
      glowClass: "bg-indigo-600/10",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 overflow-x-hidden">
      {/* Hero Header Section */}
      <section className="relative bg-white border-b border-slate-100 text-slate-900 py-20 lg:py-28 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-100 h-100 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 whitespace-nowrap">
              {t("title")}
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8 text-justify">
              {t("intro")}
            </p>

            <div className="h-1 w-24 bg-linear-to-r from-red-600 to-red-800 rounded-full" />
          </div>

          {/* Right: Partnership Logos */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Certify Logo */}
            <div className="flex-1 max-w-50 bg-white rounded-2xl p-5 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" />
              <div className="relative h-25">
                <Image
                  src="/images/certify-logo-main.jpg"
                  alt="Certify Assessment Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Handshake indicator */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-4xl select-none">🤝</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-550">Partners</span>
            </div>

            {/* TEPTH Logo */}
            <div className="flex-1 max-w-50 bg-white rounded-2xl p-5 shadow-xl border border-slate-200/40">
              <div className="relative h-25">
                <Image
                  src="/images/tepth-logo.jpg"
                  alt="TEPTH - The Exam Preparation & Testing House"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored System Management Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle background lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-10 tracking-tight font-headline border-l-4 border-red-800 pl-4">
              {t("manageTitle")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.raw("manageItems").map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-red-50 rounded-lg  group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                    {manageIcons[idx] || <CheckCircle className="w-6 h-6 text-red-800" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {item}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                      Enterprise Standard
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SmarTest Suite Platforms Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-800 font-extrabold uppercase tracking-[0.25em] text-xs">
            Product Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-headline">
            {t("suiteTitle")}
          </h2>
          <div className="h-1 w-16 bg-red-800 mx-auto mt-4 rounded-full" />
        </div>

        {/* 5-item Grid, centered on the second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {platforms.map((platform, idx) => {
            let gridColSpan = "lg:col-span-2";
            if (idx === 3) {
              gridColSpan = "lg:col-span-2 lg:col-start-2";
            }
            return (
              <a
                href={`#detail-${platform.id}`}
                key={platform.id}
                className={`md:col-span-1 ${gridColSpan} bg-white rounded-2xl border border-slate-100 p-6 shadow-xs hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col group relative overflow-hidden border-t-4 ${platform.accentClass} hover:-translate-y-1`}
              >
                {/* Decorative top-right glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-20 ${platform.glowClass}`} />

                {/* Banner Image */}
                {platform.images && platform.images[0] && (
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={platform.images[0]}
                      alt={platform.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Logo Container */}
                <div className="relative h-10 w-40 mb-4 shrink-0 rtl:ml-auto ltr:mr-auto">
                  <Image
                    src={platform.logo}
                    alt={platform.title}
                    fill
                    className="object-contain object-left rtl:object-right"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5">
                  {platform.title}
                  <span className="text-xs text-slate-400 group-hover:text-red-850 transition-colors font-normal">→</span>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed text-justify grow">
                  {platform.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Detailed Platforms Sections */}
        <div className="mt-32 space-y-32">
          {/* 1. SmarTest Invigilate Details */}
          <div id="detail-invigilate" className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-12 space-y-10 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-0 right-0 w-100 h-100 bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-red-800 font-extrabold uppercase tracking-[0.2em] text-[11px] bg-red-50 px-3 py-1 rounded-full">
                  Featured Platform
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                SmarTest Invigilate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify max-w-5xl">
                {t("invigilate.overlayText")}
              </p>
            </div>

            <div className="relative w-full max-w-3xl mx-auto aspect-3/4 rounded-2xl overflow-hidden">
              <Image
                src="/images/smartest-invigilate-features.jpg"
                alt="SmarTest Invigilate Features"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 border-t border-slate-100">
              <div className="space-y-6">
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight font-headline">
                  {t("invigilate.subtitle")}
                </h4>
                <p className="text-slate-650 text-sm leading-relaxed text-justify font-medium">
                  {t("invigilate.featuresTitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.raw("invigilate.features").map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                      <span className="text-red-800 text-base">➤</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-justify flex flex-col justify-center">
                <p>{t("invigilate.detail1")}</p>
                <p>{t("invigilate.detail2")}</p>
              </div>
            </div>

            {/* Proctor Experience Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("invigilate.tabProctor")}
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Dashboard Image */}
                <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-1024/585 w-full max-w-150 mx-auto shadow-md">
                  <Image
                    className="object-contain w-full h-full transition-transform duration-700"
                    src="/images/smartest-invigilate-dashboard.jpg"
                    alt="SmarTest Invigilate Proctor Dashboard"
                    fill
                  />
                </div>

                {/* Right: 4 Sub-features */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  {t.raw("invigilate.proctorFeatures").map((feat: { title: string; desc: string }, idx: number) => {
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-extrabold text-slate-900 text-sm tracking-tight leading-none">
                            {feat.title}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed text-justify">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* AI-Powered Monitoring Sub-section */}
            <div className="pt-10 border-t border-slate-100">
              <div className="relative w-full max-w-3xl mx-auto aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white">
                <Image
                  className="object-contain rounded-2xl"
                  src="/images/2.jpg"
                  alt="AI-Powered Monitoring Platform"
                  fill
                />
              </div>
            </div>

            {/* Test-Taker Features Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("invigilate.testTakerFeaturesTitle")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.raw("invigilate.testTakerFeatures").map((feat: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-semibold leading-relaxed">
                    <span className="text-red-800 shrink-0 mt-0.5">➤</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. SmarTest Examiner Details */}
          <div id="detail-examiner" className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-12 space-y-10 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-0 right-0 w-100 h-100 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-amber-800 font-extrabold uppercase tracking-[0.2em] text-[11px] bg-amber-50 px-3 py-1 rounded-full">
                  Assessment Design & Delivery
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                SmarTest Examiner
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify max-w-5xl">
                {t("examiner.description")} {t("examiner.detail")}
              </p>
            </div>

            <div className="relative w-full max-w-3xl mx-auto aspect-16/10 overflow-hidden">
              <Image
                src="/images/study.jpg"
                alt="SmarTest Examiner Features"
                fill
                className="object-contain rounded-3xl"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 border-t border-slate-100">
              <div className="space-y-6">
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight font-headline">
                  {t("examiner.authoring.title")}
                </h4>
                <p className="text-slate-650 text-sm leading-relaxed text-justify font-medium">
                  {t("examiner.authoring.description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.raw("examiner.authoring.features").map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                      <span className="text-amber-600 text-base">➤</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Portrait student image inside the authoring section */}
                <div className="relative w-full max-w-xs mx-auto aspect-3/4  overflow-hidden mt-6">
                  <Image
                    src="/images/5.jpg"
                    alt="Smarter Question Authoring"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-6 text-slate-650 text-sm leading-relaxed text-justify">
                <h4 className="text-lg font-extrabold text-slate-900 tracking-tight font-headline">
                  {t("examiner.friendly.title")}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {t.raw("examiner.friendly.features").map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 text-sm font-semibold">
                      <span className="text-slate-800 shrink-0 mt-1 text-xs">▪</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Providers and Marking details */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("examiner.providers.title")}
              </h4>

              <div className="relative w-full max-w-3xl mx-auto aspect-16/10 overflow-hidden">
                <Image
                  className="object-contain rounded-2xl"
                  src="/images/smartest-examiner-providers.jpg"
                  alt="Designed for Test Providers"
                  fill
                />
              </div>

              <div className="space-y-4 max-w-4xl mx-auto text-slate-600 text-sm leading-relaxed text-justify">
                <p>{t("examiner.providers.p1")}</p>
                <p>{t("examiner.providers.p2")}</p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h4 className="text-xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("examiner.providers.markingTitle")}
              </h4>

              <div className="space-y-4 max-w-4xl mx-auto">
                {t.raw("examiner.providers.markingFeatures").map((feat: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-semibold leading-relaxed">
                    <span className="text-slate-800 shrink-0 mt-1">❖</span>
                    <span>{feat}</span>
                  </div>
                ))}

                <div className="space-y-3 pl-8 rtl:pr-8 pt-2">
                  <span className="font-extrabold text-slate-800 text-sm">
                    {t("examiner.providers.reportsTitle")}
                  </span>
                  <div className="pl-6 rtl:pr-6 space-y-2">
                    {t.raw("examiner.providers.reportsFeatures").map((subFeat: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-slate-600 text-sm font-semibold leading-relaxed">
                        <span className="text-slate-800 shrink-0 mt-1.5 text-xs">▪</span>
                        <span>{subFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Insights Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden">
                <Image
                  className="object-contain rounded-2xl"
                  src="/images/smartest-examiner-performance.jpg"
                  alt="Performance Insights with Audit-Grade Logging"
                  fill
                />
              </div>
            </div>
          </div>

          {/* 3. SmarTest Nexus Details */}
          <div id="detail-nexus" className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-12 space-y-10 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-0 right-0 w-100 h-100 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-800 font-extrabold uppercase tracking-[0.2em] text-[11px] bg-blue-50 px-3 py-1 rounded-full">
                  Operations Hub
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                SmarTest Nexus
              </h3>
            </div>

            <div className="relative w-full max-w-3xl mx-auto aspect-16/10 overflow-hidden">
              <Image
                src="/images/smartest-nexus.jpg"
                alt="SmarTest Nexus"
                fill
                className="object-contain rounded-3xl"
              />
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {t("nexus.description1")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-b border-slate-100">
                {t.raw("nexus.features").map((feat: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-semibold leading-relaxed">
                    <span className="text-blue-605 shrink-0 mt-0.5">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {t("nexus.description2")}
              </p>
            </div>

            {/* Candidate Profile Management Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("nexus.candidateManagement.title")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.raw("nexus.candidateManagement.features").map((feat: { title: string; desc: string }, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 font-bold text-lg group-hover:bg-blue-800 group-hover:text-white transition-all duration-300 shadow-xs select-none">
                        ➤
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-bold text-slate-900 text-sm tracking-tight leading-none group-hover:text-blue-850 transition-colors duration-200">
                          {feat.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed text-justify font-semibold">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment System Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("nexus.paymentSystem.title")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.raw("nexus.paymentSystem.features").map((feat: { title: string; desc: string }, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 font-bold text-lg group-hover:bg-blue-800 group-hover:text-white transition-all duration-300 shadow-xs select-none">
                        ❖
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-bold text-slate-900 text-sm tracking-tight leading-none group-hover:text-blue-850 transition-colors duration-200">
                          {feat.title}
                        </h5>
                        <p className="text-xs text-slate-650 leading-relaxed text-justify font-semibold">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Proctor Management Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                  {t("nexus.proctorManagement.title")}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed text-justify font-medium">
                  {t("nexus.proctorManagement.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 rtl:pr-4">
                {t.raw("nexus.proctorManagement.features").map((feat: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700 text-sm font-semibold leading-relaxed">
                    <span className="text-slate-800 shrink-0 mt-1 text-xs">▪</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Empower Your Organisation Sub-section */}
            <div className="pt-10 border-t border-slate-100 space-y-6">
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight font-headline">
                {t("nexus.empower.title")}
              </h4>

              <div className="space-y-4 text-slate-655 text-sm leading-relaxed text-justify font-medium">
                <p>{t("nexus.empower.p1")}</p>
                <p className="text-slate-900 font-extrabold text-base pt-2 border-t border-slate-100/50">{t("nexus.empower.p2")}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact / Partnership / Request a Demo Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative bg-white border border-slate-100 rounded-3xl p-8 lg:p-16 overflow-hidden shadow-md">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-75 h-75 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-50 h-50 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <span className="text-red-800 bg-red-50 px-3 py-1 rounded-full font-extrabold uppercase tracking-[0.25em] text-xs">
              Request a Demo
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight font-headline text-slate-900">
              {t("partner.title")}
            </h2>
            <p className="text-slate-650 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-justify md:text-center">
              {t("partner.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6">
              {/* Email Contact Box */}
              <a
                href={`mailto:${t("partner.directInquiriesText")}`}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-800 flex items-center justify-center group-hover:bg-red-800 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-center space-y-1">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {t("partner.directInquiriesTitle")}
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-red-800 transition-colors">
                    {t("partner.directInquiriesText")}
                  </span>
                </div>
              </a>

              {/* Phone Contact Box */}
              <a
                href={`tel:${t("partner.institutionalSupportText")}`}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center group-hover:bg-blue-800 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-center space-y-1">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {t("partner.institutionalSupportTitle")}
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-850 transition-colors">
                    {t("partner.institutionalSupportText")}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>





    </main>
  );
}
