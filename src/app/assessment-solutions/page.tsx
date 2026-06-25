"use client";

import Image from "next/image";
import FormPartnershipRequest from "./_components/form-partnership-request";
import {
  BookOpen,
  CheckSquare,
  Eye,
  Users,
  Calendar,
  CreditCard,
  Building,
  Mail,
  Phone,
  UserCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Layers,
  Cpu,
  Monitor,
  Smartphone,
  Info,
  ChevronRight,
  MessageSquare,
  Headphones,
  BarChart3,
  ScrollText,
  TrendingUp
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

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 overflow-x-hidden">
      {/* Hero Header Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-20 lg:py-28 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-800/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Strategic Partnership
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 font-headline max-w-4xl">
            {t("title")} <br />
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent italic font-semibold">
              {t("subtitle")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {t("intro")}
          </p>

          <div className="h-1 w-24 bg-linear-to-r from-red-600 to-red-800 rounded-full" />
        </div>
      </section>

      {/* Tailored System Management Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle background lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

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
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-800 font-extrabold uppercase tracking-[0.25em] text-xs">
            Product Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-headline">
            {t("suiteTitle")}
          </h2>
          <div className="h-1 w-16 bg-red-800 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-24">
          {/* SmarTest Invigilate Showcase */}
          <div className="space-y-12">
            {/* Top Text/Description Section (Full Width) */}
            <div className="space-y-6 max-w-7xl">
              <div className="flex items-center gap-2 bg-red-50 text-red-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <ShieldAlert className="w-3.5 h-3.5" />
                Featured Platform
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                  {t("invigilate.title")}
                </h3>
                <p className="text-red-800 font-extrabold uppercase tracking-widest text-[11px]">
                  {t("invigilate.subtitle")}
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm font-semibold">
                {t("invigilate.description")}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t("invigilate.featuresTitle")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.raw("invigilate.features").map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-red-800 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-3 pt-2 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
                <p>{t("invigilate.detail1")}</p>
                <p>{t("invigilate.detail2")}</p>
              </div>
            </div>

            {/* Vertical Stack of Individual Interfaces (Below Text Section) */}
            <div className="grid grid-cols-1 gap-8 max-w-7xl">
              {/* 1. AI-Powered Monitoring Platform */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-8">
                  {/* Title Header */}
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
                    <Sparkles className="w-5 h-5 text-red-800 shrink-0" />
                    {t("invigilate.tabOverview")}
                  </div>

                  {/* Graphic/Grid containing Pills and Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: 5 Pills */}
                    <div className="lg:col-span-5 flex flex-col gap-3.5">
                      {t.raw("invigilate.monitoringPills").map((pill: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-5 py-3 rounded-full border border-emerald-500/80 bg-white shadow-sm hover:bg-emerald-50/10 transition-colors duration-200"
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="font-bold text-slate-800 text-xs tracking-tight">
                            {pill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right: Business Meeting Image */}
                    <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[3960/2640] w-full max-w-[600px] mx-auto shadow-md">
                      <Image
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                        src="/images/study-1.jpg"
                        alt="AI-Powered Monitoring Platform"
                        fill
                      />
                    </div>
                  </div>

                  {/* Bottom: Test-taker features list */}
                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="font-extrabold text-slate-900 text-sm tracking-wide uppercase border-l-4 border-red-800 pl-3">
                      {t("invigilate.testTakerFeaturesTitle")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {t.raw("invigilate.testTakerFeatures").map((feat: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <ChevronRight className={`w-4 h-4 text-red-800 shrink-0 mt-0.5 ${isRtl ? "rotate-180" : ""}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Proctor Experience */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-8">
                  {/* Title Header */}
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
                    <Monitor className="w-5 h-5 text-red-800 shrink-0" />
                    {t("invigilate.tabProctor")}
                  </div>

                  {/* Two-Column Grid: Image on Left, Features on Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Dashboard Image */}
                    <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[1024/585] w-full max-w-[600px] mx-auto shadow-md">
                      <Image
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                        src="/images/smartest-invigilate-dashboard.jpg"
                        alt="SmarTest Invigilate Proctor Dashboard"
                        fill
                      />
                    </div>

                    {/* Right: 4 Sub-features with Green Icons */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                      {t.raw("invigilate.proctorFeatures").map((feat: { title: string; desc: string }, idx: number) => {
                        // Dynamically assign appropriate icons based on index
                        const icons = [
                          <Layers className="w-6 h-6 text-white" key="0" />,
                          <Headphones className="w-6 h-6 text-white" key="1" />,
                          <MessageSquare className="w-6 h-6 text-white" key="2" />,
                          <Cpu className="w-6 h-6 text-white" key="3" />
                        ];
                        return (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                              {icons[idx]}
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-extrabold text-slate-900 text-sm tracking-tight leading-none">
                                {feat.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {feat.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Candidate View */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <Users className="w-5 h-5 text-red-800 shrink-0" />
                    {t("invigilate.tabCandidate")}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {t("invigilate.tabCandidateDesc")}
                  </p>
                  <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-2 aspect-[4/3] mt-2">
                    <Image
                      className="object-contain w-full h-full rounded-lg group-hover:scale-[1.03] transition-transform duration-500"
                      src="/images/smartest-invigilate.jpg"
                      alt="SmarTest Invigilate Desk Setup"
                      width={1024}
                      height={1024}
                    />
                  </div>
                </div>
              </div>

              {/* 4. Mobile Setup */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <Smartphone className="w-5 h-5 text-red-800 shrink-0" />
                    {t("invigilate.tabMobile")}
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {t("invigilate.tabMobileDesc")}
                  </p>

                  {/* Portrait aspect image with slanted text overlay */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 w-full aspect-[796/1024] max-w-[650px] mx-auto mt-2 group/banner">
                    <Image
                      src="/images/hijab-student.jpg"
                      alt="SmarTest Invigilate Smartphone Monitoring"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/banner:scale-[1.02]"
                    />

                    {/* Flat horizontal overlay bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 w-full bg-slate-950/80 text-white p-4 md:p-5 text-center backdrop-blur-sm border-t border-white/10"
                    >
                      <p className="text-xs md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
                        {t("invigilate.overlayText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SmarTest Examiner Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                Assessment Design & Delivery
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("examiner.title")}
              </h3>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed font-semibold">
                  {t("examiner.description")}
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  {t("examiner.detail")}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {[
                  "Bulk Question Importing & Management",
                  "Advanced Exam-building Capabilities",
                  "Comprehensive Performance & Psychometric Analytics"
                ].map((exFeat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <span>{exFeat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-invigilate-features.jpg"
                alt="SmarTest Examiner Assessment Development"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* SmarTest Examiner - Smarter Question Authoring Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 border-t border-slate-100/80">
            <div className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Advanced Authoring
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("examiner.authoring.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-sm">
                {t("examiner.authoring.description")}
              </p>

              {/* Formats Checklist */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 gap-3">
                  {t.raw("examiner.authoring.features").map((feat: string, i: number) => {
                    const isLast = i === 5;
                    return (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-1 text-sm text-slate-700 leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <ChevronRight className={`w-4 h-4 text-slate-800 shrink-0 mt-0.5 ${isRtl ? "rotate-180" : ""}`} />
                          <span className="font-bold text-slate-800">{feat}</span>
                        </div>
                        {isLast && (
                          <span className="text-slate-800 font-bold sm:pl-12 rtl:sm:pr-12">
                            {t("examiner.authoring.enhanceText")}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-2 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-examiner.jpg"
                alt="Smarter Question Authoring"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* SmarTest Examiner - Flexible & Test-Taker Friendly Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 border-t border-slate-100/80">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" />
                Test-Taker Experience
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("examiner.friendly.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-sm">
                Examiner delivers a flexible, intuitive interface designed to minimize stress and maximize candidates' focus during the assessment process.
              </p>

              {/* Friendly Checklist */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 gap-3">
                  {t.raw("examiner.friendly.features").map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <ChevronRight className={`w-4 h-4 text-slate-800 shrink-0 mt-0.5 ${isRtl ? "rotate-180" : ""}`} />
                      <span className="font-bold text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/study.jpg"
                alt="Flexible & Test-Taker Friendly"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* SmarTest Examiner - Designed for Test Providers Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 border-t border-slate-100/80">
            <div className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                Operations & Evaluation
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("examiner.providers.title")}
              </h3>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-semibold">
                <p>{t("examiner.providers.p1")}</p>
                <p>{t("examiner.providers.p2")}</p>
              </div>

              {/* Marking & Feedback Block */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xl font-bold text-amber-800 font-headline">
                  {t("examiner.providers.markingTitle")}
                </h4>
                <div className="space-y-3.5 text-slate-700 text-sm">
                  {t.raw("examiner.providers.markingFeatures").map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-amber-600 shrink-0 mt-0.5 text-base">❖</span>
                      <span className="font-bold text-slate-800">{feat}</span>
                    </div>
                  ))}

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 shrink-0 mt-0.5 text-base">❖</span>
                      <span className="font-bold text-slate-800">{t("examiner.providers.reportsTitle")}</span>
                    </div>
                    <div className="pl-7 rtl:pr-7 space-y-2">
                      {t.raw("examiner.providers.reportsFeatures").map((subFeat: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-slate-650 text-xs font-semibold">
                          <span className="text-amber-600 shrink-0 mt-1">▪</span>
                          <span>{subFeat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-2 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[480px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-examiner-providers.jpg"
                alt="Designed for Test Providers"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* SmarTest Examiner - Performance Insights Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 border-t border-slate-100/80">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <TrendingUp className="w-3.5 h-3.5" />
                Performance Analytics
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("examiner.performance.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-sm">
                Examiner translates assessment data into actionable feedback, maintaining a robust audit trail and delivering rich psychometric calculations.
              </p>

              {/* Performance Checklist */}
              <div className="space-y-4 pt-2">
                {t.raw("examiner.performance.features").map((feat: string, i: number) => {
                  const icons = [
                    <BarChart3 className="w-5 h-5 text-white" key="0" />,
                    <ScrollText className="w-5 h-5 text-white" key="1" />,
                    <TrendingUp className="w-5 h-5 text-white" key="2" />
                  ];
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        {icons[i]}
                      </div>
                      <p className="text-sm font-bold text-slate-800">
                        {feat}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[480px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-examiner-performance.jpg"
                alt="Performance Insights with Audit-Grade Logging"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* SmarTest Nexus Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-wider shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                Operations Hub
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("nexus.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-sm">
                {t("nexus.description1")}
              </p>

              {/* Operations Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {t.raw("nexus.features").map((feat: string, i: number) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <span className="text-blue-600 font-extrabold shrink-0 mt-0.5">✓</span>
                    <span className="font-bold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed font-semibold text-sm pt-2">
                {t("nexus.description2")}
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-nexus.jpg"
                alt="SmarTest Nexus"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>

        {/* SmarTest Proctors & Centres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* SmarTest Proctors */}
          {/* <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-800 flex items-center justify-center mb-6 group-hover:bg-red-800 group-hover:text-white transition-all duration-300">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-headline">
                {t("proctors.title")}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t("proctors.description")}
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold text-red-800 uppercase tracking-widest cursor-pointer group-hover:translate-x-1.5 transition-transform duration-300 mt-4">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div> */}

          {/* SmarTest Centres */}
          {/* <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-6 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-headline">
                {t("centres.title")}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t("centres.description")}
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-widest cursor-pointer group-hover:translate-x-1.5 transition-transform duration-300 mt-4">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Why SmarTest Section */}
      <section className="py-24 px-6 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-800/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                {t("whySmartest.badge")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight font-headline leading-tight mb-4">
              {t("whySmartest.title")}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t("whySmartest.subtitle")}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {t.raw("whySmartest.stats").map((stat: { value: string; label: string }, i: number) => (
              <div
                key={i}
                className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <p className="text-4xl font-black text-white tracking-tight font-headline mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.raw("whySmartest.pillars").map((pillar: { title: string; desc: string }, i: number) => {
              const pillarIcons = [
                <ShieldAlert className="w-6 h-6 text-red-400" key="0" />,
                <Layers className="w-6 h-6 text-blue-400" key="1" />,
                <Users className="w-6 h-6 text-emerald-400" key="2" />,
                <ArrowRight className="w-6 h-6 text-amber-400" key="3" />,
              ];
              const pillarColors = [
                "from-red-500/10 to-red-800/5 border-red-500/20 hover:border-red-500/40",
                "from-blue-500/10 to-blue-800/5 border-blue-500/20 hover:border-blue-500/40",
                "from-emerald-500/10 to-emerald-800/5 border-emerald-500/20 hover:border-emerald-500/40",
                "from-amber-500/10 to-amber-800/5 border-amber-500/20 hover:border-amber-500/40",
              ];
              const iconBgs = [
                "bg-red-500/15",
                "bg-blue-500/15",
                "bg-emerald-500/15",
                "bg-amber-500/15",
              ];
              return (
                <div
                  key={i}
                  className={`group bg-linear-to-br ${pillarColors[i]} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
                >
                  <div className={`w-12 h-12 rounded-xl ${iconBgs[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {pillarIcons[i]}
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-3 leading-tight font-headline">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Divider line */}
          <div className="mt-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">
              Trusted · Secure · Innovative
            </span>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Strategic Partnership Logos Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-10 lg:p-16 overflow-hidden shadow-2xl border border-slate-800/60">
          {/* Decorative ambient glowing circles */}
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-10 pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
                {t("partnershipLogos.badge")}
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight font-headline leading-tight">
              {t("partnershipLogos.title")}
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-light">
              {t("partnershipLogos.subtitle")}
            </p>
            <div className="h-1.5 w-20 bg-linear-to-r from-red-500 to-amber-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto">
            {/* Certify Logo Card */}
            <div className="group relative flex-1 w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-white border border-slate-200/50 flex items-center justify-center p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-red-500/5">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-full h-full max-h-[160px] transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/certify-logo.png"
                  alt="Certify Assessment Solutions"
                  fill
                  className="object-contain filter drop-shadow-[0_4px_12px_rgba(239,68,68,0.1)]"
                />
              </div>
            </div>

            {/* Alliance Indicator */}
            <div className="flex flex-col items-center justify-center shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md text-slate-400 font-black text-lg transition-transform duration-500 hover:rotate-180 select-none">
                ✕
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-white/10 to-transparent hidden md:block mt-2" />
            </div>

            {/* TEPTH Logo Card */}
            <div className="group relative flex-1 w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-white border border-slate-200/50 flex items-center justify-center p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-blue-500/5">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-full h-full max-h-[160px] transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/tepth-logo.jpg"
                  alt="TEPTH - The Exam Preparation & Testing House"
                  fill
                  className="object-contain filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partnership Request Form Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-slate-900 rounded-3xl text-white my-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-red-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-800/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:p-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight font-headline text-white mb-4">
                {t("partner.title")}
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {t("partner.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-800 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-300">
                    {t("partner.directInquiriesTitle")}
                  </h4>
                  <a
                    href={`mailto:${t("partner.directInquiriesText")}`}
                    className="text-white hover:text-red-400 font-semibold text-sm transition-colors duration-200"
                  >
                    {t("partner.directInquiriesText")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-800 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-300">
                    {t("partner.institutionalSupportTitle")}
                  </h4>
                  <a
                    href={`tel:${t("partner.institutionalSupportText")}`}
                    className="text-white hover:text-red-400 font-semibold text-sm transition-colors duration-200"
                  >
                    {t("partner.institutionalSupportText")}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              TEPTH & Certify Partnership Initiative © {new Date().getFullYear()}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
            <FormPartnershipRequest />
          </div>
        </div>
      </section>
    </main>
  );
}
