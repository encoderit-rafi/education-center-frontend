import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Monitor,
  Sofa,
  BellOff,
  Zap,
  ShieldCheck,
  Microscope,
} from "lucide-react";
import { useTranslations } from "next-intl";

const FACILITY_ICONS = [
  <BellOff key="bell" className="w-6 h-6" />,
  <Monitor key="monitor" className="w-6 h-6" />,
  <Sofa key="sofa" className="w-6 h-6" />,
  <Zap key="zap" className="w-6 h-6" />,
  <ShieldCheck key="shield" className="w-6 h-6" />,
  <Microscope key="microscope" className="w-6 h-6" />,
];

export default function FacilitiesPage() {
  const t = useTranslations("FacilitiesPage");
  const facilitiesRaw = t.raw("facilities") as {
    title: string;
    description: string;
  }[];

  const facilities = facilitiesRaw.map((f, i) => ({
    ...f,
    icon: FACILITY_ICONS[i],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
            {t("heroTitle")}{" "}
            <span className="text-[#A11D1D]">{t("heroTitleAccent")}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Core Belief Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-1 bg-[#A11D1D] shrink-0 hidden md:block" />
            <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
              {t("beliefText")}{" "}
              <span className="text-[#A11D1D]">{t("beliefAccent")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-sm border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-[#A11D1D] transition-all" />

                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                  <div className="text-gray-400 group-hover:text-[#A11D1D] transition-colors">
                    {facility.icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">
                  {facility.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Callout */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#A11D1D]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <h2
            className={cn(
              "text-4xl md:text-6xl font-black text-white tracking-tighter mb-8",
              "font-heading",
            )}
          >
            {t("calloutTitle")} <br /> <span>{t("calloutAccent")}</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-2 bg-white" />
          </div>
        </div>
      </section>

      {/* Experience Detail */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 font-heading tracking-tighter mb-8">
                {t("experienceTitle")} <br />{" "}
                <span className="text-[#A11D1D]">
                  {t("experienceTitleAccent")}
                </span>
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>{t("experienceP1")}</p>
                <p>{t("experienceP2")}</p>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square bg-gray-100 overflow-hidden rounded-sm">
              <Image
                src="/images/about-us/infrastructure-center.png"
                alt="Modern Testing Equipment"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
