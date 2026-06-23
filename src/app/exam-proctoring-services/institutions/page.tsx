import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import {
  UserRound,
  Eye,
  MonitorUp,
  Mic2,
  Flag,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AI_ICONS = [
  <UserRound key="user" className="size-5" />,
  <Eye key="eye" className="size-5" />,
  <MonitorUp key="monitor" className="size-5" />,
  <Mic2 key="mic" className="size-5" />,
  <Flag key="flag" className="size-5" />,
];

export default function InstitutionsPage() {
  const t = useTranslations("ExamProctoringServicesPage.InstitutionsPage");

  const aiTechRaw = t.raw("aiTech") as { title: string; desc: string }[];
  const facilitiesRaw = t.raw("facilities") as {
    title: string;
    desc: string;
  }[];
  const partnerFeatures = t.raw("partnerFeatures") as string[];

  const aiTech = aiTechRaw.map((item, i) => ({
    ...item,
    icon: AI_ICONS[i],
  }));

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-24 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              {t("heroTitle")}{" "}
              <span className="text-[#A11D1D]">{t("heroTitleAccent")}</span>
            </h1>

            <p className="max-w-3xl text-base md:text-lg text-gray-600 leading-8">
              {t("heroDescription")}
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-24 py-16 space-y-16">
        {/* AI Proctoring */}
        <section>
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {t("aiSectionTitle")}
            </h2>

            <p className="text-gray-600 leading-8">
              {t("aiSectionDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {aiTech.map((tech, i) => (
              <BaseCard
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <BaseCardIcon className="size-11 rounded-xl bg-red-50 text-[#A11D1D]">
                  {tech.icon}
                </BaseCardIcon>

                <BaseCardTitle className="mt-5 mb-3 text-lg font-semibold text-gray-900">
                  {tech.title}
                </BaseCardTitle>

                <BaseCardDescription className="text-gray-600 leading-7">
                  {tech.desc}
                </BaseCardDescription>
              </BaseCard>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-600 leading-8">
              {t("contactBoxText1")}{" "}
              <span className="font-medium text-gray-900">
                {t("contactBoxPhone")}
              </span>{" "}
              {t("contactBoxText2")}{" "}
              <a
                href={`mailto:${t("contactBoxEmail")}`}
                className="font-medium text-[#A11D1D] hover:underline"
              >
                {t("contactBoxEmail")}
              </a>
              {t("contactBoxText3")}
            </p>
          </div>
        </section>

        {/* Facilities + CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Facility Standards */}
          <div className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {t("facilitiesTitle")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {facilitiesRaw.map((facility, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#A11D1D] font-semibold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-2">
                      {facility.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-6">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#A11D1D] to-[#871818] p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-5">
                {t("partnerTitle")}
              </h2>

              <p className="text-white/85 leading-8 mb-8">
                {t("partnerDescription")}
              </p>

              <ul className="space-y-4">
                {partnerFeatures.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-white/90"
                  >
                    <CheckCircle2 className="size-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact-us"
              className="mt-10 rounded-xl bg-white py-3.5 text-center text-sm font-medium text-[#A11D1D] transition hover:bg-gray-50"
            >
              {t("partnerCta")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
