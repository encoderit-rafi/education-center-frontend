"use client";

import { useState } from "react";
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
  Info
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AssessmentSolutionsPage() {
  const t = useTranslations("AssessmentSolutionsPage");
  
  // Interactive view switcher for SmarTest Invigilate
  const [activeView, setActiveView] = useState<"overview" | "proctor" | "candidate" | "mobile">("overview");

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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-20 lg:py-28 px-6 overflow-hidden">
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
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent italic font-semibold">
              {t("subtitle")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {t("intro")}
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full" />
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
                  <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-800 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {t.raw("invigilate.features").map((feat: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-red-800 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* View Switcher Controls */}
              <div className="bg-slate-100 p-1 rounded-lg flex flex-wrap gap-1 w-fit border border-slate-200">
                <button
                  onClick={() => setActiveView("overview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                    activeView === "overview"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {t("invigilate.tabOverview")}
                </button>
                <button
                  onClick={() => setActiveView("proctor")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                    activeView === "proctor"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  {t("invigilate.tabProctor")}
                </button>
                <button
                  onClick={() => setActiveView("candidate")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                    activeView === "candidate"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  {t("invigilate.tabCandidate")}
                </button>
                <button
                  onClick={() => setActiveView("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                    activeView === "mobile"
                      ? "bg-white text-red-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  {t("invigilate.tabMobile")}
                </button>
              </div>

              {/* Additional Details */}
              <div className="space-y-3 pt-2 text-slate-500 text-xs leading-relaxed border-t border-slate-100">
                <p>{t("invigilate.detail1")}</p>
                <p>{t("invigilate.detail2")}</p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center items-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <div className="relative flex justify-center w-full">
                {activeView === "overview" && (
                  <Image
                    className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 animate-fade-in"
                    src="/images/smartest-invigilate-features.jpg"
                    alt="SmarTest Invigilate Overview Panel"
                    width={825}
                    height={602}
                  />
                )}
                {activeView === "proctor" && (
                  <Image
                    className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 animate-fade-in"
                    src="/images/smartest-invigilate-dashboard.jpg"
                    alt="SmarTest Invigilate Proctor Dashboard"
                    width={1024}
                    height={585}
                  />
                )}
                {activeView === "candidate" && (
                  <Image
                    className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 animate-fade-in"
                    src="/images/smartest-invigilate.jpg"
                    alt="SmarTest Invigilate Desk Setup"
                    width={1024}
                    height={1024}
                  />
                )}
                {activeView === "mobile" && (
                  <Image
                    className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 animate-fade-in"
                    src="/images/hijab-student.jpg"
                    alt="SmarTest Invigilate Smartphone Monitoring"
                    width={796}
                    height={1024}
                  />
                )}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 justify-center">
                <Info className="w-3.5 h-3.5" />
                <span>Interactive View Demonstrating AI Invigilation</span>
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
              <p className="text-slate-600 leading-relaxed font-semibold">
                {t("examiner.description")}
              </p>

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
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-examiner.jpg"
                alt="SmarTest Examiner Assessment Development"
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
              <p className="text-slate-600 leading-relaxed font-semibold">
                {t("nexus.description")}
              </p>

              {/* Operations Highlights */}
              <div className="space-y-3 pt-2">
                {[
                  "Built-in Payment Gateways & Compliance",
                  "Registrations & Candidate Performance Tracking",
                  "Venue Logistics & Venue Capacity Management"
                ].map((hubFeat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{hubFeat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/10 to-transparent rounded-2xl blur-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <Image
                className="rounded-2xl w-auto h-auto max-h-[420px] max-w-full bg-white border border-slate-200/60 shadow-xl p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                src="/images/smartest-nexus.jpg"
                alt="SmarTest Nexus Operations Hub"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>

        {/* SmarTest Proctors & Centres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* SmarTest Proctors */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
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
          </div>

          {/* SmarTest Centres */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
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
