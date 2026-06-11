import Image from "next/image";
import ContactForm from "@/app/contact-us/_components/form-contact";
import {
  Building2,
  CheckCircle2,
  Globe2,
  LineChart,
  BarChart3,
  ScrollText,
  Zap,
  ShieldCheck,
  Mail,
  PhoneForwarded,
} from "lucide-react";
import { BaseCard } from "@/components/blocks/cards/base-card";
import { useTranslations } from "next-intl";

export default function AssessmentSolutionsPage() {
  const t = useTranslations("AssessmentSolutionsPage");
  return (
    <main className="pb-12">
      {/* Hero Section */}
      {/* <section className="relative px-8 py-32 min-h-[600px] flex items-center bg-white">
        <div className="relative z-10 max-w-6xl mx-auto text-left w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-8 font-headline">
            Global Standards in <br />
            <span className="text-red-800 italic">
              Assessment Intelligence.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
            Empowering higher education institutions with bespoke testing
            frameworks, rigorous proctoring standards, and deep analytical
            insights for the modern academic landscape.
          </p>
        </div>
      </section> */}

      {/* Assessment Solutions for Universities */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-headline">
              {t("title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Institutional Card */}
            <div className="md:col-span-8 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <Building2 className="text-red-800 w-8 h-8 mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 font-headline">
                  {t("LargeInstitutionalCard.title")}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  {t("LargeInstitutionalCard.description")}
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap relative z-10">
                <div className="flex items-center gap-2 bg-red-50/60 text-red-800 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t("LargeInstitutionalCard.badge1")}
                </div>
                <div className="flex items-center gap-2 bg-red-50/60 text-red-800 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5" />
                  {t("LargeInstitutionalCard.badge2")}
                </div>
              </div>
              <Image
                className="absolute -right-20 -bottom-20 w-80 h-80 object-cover opacity-10 grayscale pointer-events-none"
                src="/images/exams/ielts.png"
                alt="Decorative shield"
                width={320}
                height={320}
              />
            </div>

            {/* Analytical Insights */}
            <div className="md:col-span-4 bg-red-900 p-6 md:p-8 rounded-xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <LineChart className="w-8 h-8 mb-4 text-red-200" />
                <h3 className="text-lg md:text-xl font-bold mb-3 font-headline">
                  {t("AnalyticalInsights.title")}
                </h3>
                <p className="text-red-100/80 leading-relaxed text-sm md:text-base">
                  {t("AnalyticalInsights.description")}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                <BarChart3 className="w-[100px] h-[100px]" />
              </div>
            </div>

            {/* Reporting */}
            <div className="md:col-span-4 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <ScrollText className="text-red-800 w-7 h-7 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 font-headline">
                {t("Reporting.title")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("Reporting.description")}
              </p>
            </div>

            {/* Strategic Integration */}
            <div className="md:col-span-8 bg-slate-900 p-6 md:p-8 rounded-xl text-white flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-red-400 font-headline">
                  {t("StrategicIntegration.title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t("StrategicIntegration.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3 min-w-[140px] hover:bg-white/10 transition-colors">
                  <Zap className="text-red-400 w-5 h-5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">
                    {t("StrategicIntegration.badge1")}
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3 min-w-[140px] hover:bg-white/10 transition-colors">
                  <ShieldCheck className="text-red-400 w-5 h-5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">
                    {t("StrategicIntegration.badge2")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promoted Academic Services */}
      <section className="px-6 py-12 md:py-16 bg-red-50/30">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-800 font-bold uppercase tracking-[0.2em] text-[9px]">
              {t("PromotedAcademicServices.badge")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 tracking-tight font-headline">
              {t("PromotedAcademicServices.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.raw("PromotedAcademicServices.services").map((service: any, idx: number) => (
              <BaseCard
                key={idx}
                className="text-center group bg-transparent p-6 border border-slate-100 bg-white/40 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-3 text-slate-900 font-headline">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs max-w-xs mx-auto">
                  {service.description}
                </p>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us */}
      <section className="px-6 py-12 md:py-16 bg-red-100/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight font-headline">
              {t("PartnerWithUs.title1")} <br />
              {t("PartnerWithUs.title2")}
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              {t("PartnerWithUs.description")}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {t("PartnerWithUs.directInquiriesTitle")}
                  </h4>
                  <p className="text-slate-500 font-semibold text-sm">
                    {t("PartnerWithUs.directInquiriesText")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <PhoneForwarded className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {t("PartnerWithUs.institutionalSupportTitle")}
                  </h4>
                  <p className="text-slate-500 font-semibold text-sm">
                    {t("PartnerWithUs.institutionalSupportText")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
