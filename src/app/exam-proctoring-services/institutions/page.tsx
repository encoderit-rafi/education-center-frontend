import Image from "next/image";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import {
  ShieldCheck,
  UserCheck,
  Eye,
  Lock,
  FileText,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

const SERVICE_ICONS = [
  <ShieldCheck key="supervision" className="size-5" />,
  <UserCheck key="auth" className="size-5" />,
  <Eye key="observation" className="size-5" />,
  <Lock key="security" className="size-5" />,
  <FileText key="documentation" className="size-5" />,
  <Globe key="adaptability" className="size-5" />,
];

export default function InstitutionsPage() {
  const t = useTranslations("ExamProctoringServicesPage.InstitutionsPage");

  const servicesRaw = t.raw("services") as { title: string; desc: string }[];
  const onsiteFeatures = t.raw("onsite.features") as { title: string; desc: string }[];
  const onlineFeatures = t.raw("online.features") as { title: string; desc: string }[];

  const services = servicesRaw.map((item, i) => ({
    ...item,
    icon: SERVICE_ICONS[i],
  }));

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-16 md:py-20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-100 h-100 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-headline leading-tight">
                {t("heroTitle")}{" "}
                <span className="text-[#A11D1D]">{t("heroTitleAccent")}</span>
              </h1>

              <p className="max-w-3xl text-base md:text-lg text-slate-650 leading-relaxed text-justify">
                {t("heroDescription")}
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-112.5 rounded-3xl overflow-hidden relative group/image">
                <div className="absolute top-4 right-4 bg-[#A11D1D]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5 border border-white/20 select-none">
                  <p>{t("liveProctoring")}</p>
                </div>
                <Image
                  className="w-full h-auto rounded-2xl object-cover block transition-transform duration-500 group-hover/image:scale-105"
                  alt="Professional Exam Proctoring services by TEPTH"
                  src="/images/Live Proctoring.jpg"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 lg:px-24 py-16 space-y-20">
        {/* Core Services Section */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs md:text-sm rtl:text-sm md:rtl:text-base">
              {t("capabilitiesLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-headline">
              {t("servicesTitle")}
            </h2>
            <div className="h-1 w-16 bg-[#A11D1D] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <BaseCard
                key={i}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <BaseCardIcon className="size-11 rounded-xl bg-red-55 text-[#A11D1D] group-hover:bg-[#A11D1D] group-hover:text-white transition-all duration-300 shadow-xs">
                  {service.icon}
                </BaseCardIcon>

                <BaseCardTitle className="mt-5 mb-3 text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#A11D1D] transition-colors duration-200">
                  {service.title}
                </BaseCardTitle>

                <BaseCardDescription className="text-slate-600 leading-relaxed text-justify text-xs font-semibold">
                  {service.desc}
                </BaseCardDescription>
              </BaseCard>
            ))}
          </div>
        </section>

        {/* Proctoring Options Section */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs md:text-sm rtl:text-sm md:rtl:text-base">
              {t("flexibleDeliveryLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-headline">
              {t("optionsTitle")}
            </h2>
            <div className="h-1 w-16 bg-[#A11D1D] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* On-Site Proctoring */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 lg:p-10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-headline border-s-4 border-[#A11D1D] ps-4">
                {t("onsite.title")}
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed text-justify font-medium">
                {t("onsite.description")}
              </p>
              <div className="space-y-5 pt-4 border-t border-slate-50 grow">
                {onsiteFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#A11D1D] shrink-0 mt-1 select-none">❖</span>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 text-sm block">
                        {feat.title}:
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed text-justify block">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Online Proctoring */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 lg:p-10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-headline border-s-4 border-[#A11D1D] ps-4">
                {t("online.title")}
              </h3>
              <p className="text-slate-655 text-sm leading-relaxed text-justify font-medium">
                {t("online.description")}
              </p>
              <div className="space-y-5 pt-4 border-t border-slate-50 grow">
                {onlineFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#A11D1D] shrink-0 mt-1 select-none">❖</span>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 text-sm block">
                        {feat.title}:
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed text-justify block">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-8">
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-75 h-75 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <span className="text-[#A11D1D] font-extrabold uppercase tracking-[0.25em] text-xs md:text-sm rtl:text-sm md:rtl:text-base">
                {t("qualityAssuranceLabel")}
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight font-headline">
                {t("commitmentTitle")}
              </h3>
              <p className="text-slate-650 text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
                {t("commitmentDescription")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
