import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Monitor,
  Building2,
  VolumeX,
  Cpu,
  Accessibility,
  Calendar,
  ArrowRight,
  FileCheck,
  Lock,
  ChevronRight,
  Phone,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type BadgeVariant = "default" | "highlight";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: { label: string; variant?: BadgeVariant }[];
}

export default function ExamProviderPage() {
  const t = useTranslations("ExamDeliveryPage.ExamProviderPage");

  const capabilitiesRaw = t.raw("capabilities");
  const capabilities: Capability[] = [
    {
      icon: FileCheck,
      title: capabilitiesRaw[0].title,
      description: capabilitiesRaw[0].description,
      badges: [
        { label: capabilitiesRaw[0].badges[0] },
        { label: capabilitiesRaw[0].badges[1] },
      ],
    },
    {
      icon: Lock,
      title: capabilitiesRaw[1].title,
      description: capabilitiesRaw[1].description,
      badges: [
        { label: capabilitiesRaw[1].badges[0] },
        { label: capabilitiesRaw[1].badges[1], variant: "highlight" },
      ],
    },
    {
      icon: Monitor,
      title: capabilitiesRaw[2].title,
      description: capabilitiesRaw[2].description,
      badges: [{ label: capabilitiesRaw[2].badges[0] }],
    },
    {
      icon: Building2,
      title: capabilitiesRaw[3].title,
      description: capabilitiesRaw[3].description,
      badges: [{ label: capabilitiesRaw[3].badges[0] }],
    },
    {
      icon: VolumeX,
      title: capabilitiesRaw[4].title,
      description: capabilitiesRaw[4].description,
      badges: [
        { label: capabilitiesRaw[4].badges[0] },
        { label: capabilitiesRaw[4].badges[1], variant: "highlight" },
      ],
    },
    {
      icon: Cpu,
      title: capabilitiesRaw[5].title,
      description: capabilitiesRaw[5].description,
      badges: [{ label: capabilitiesRaw[5].badges[0] }],
    },
    {
      icon: Accessibility,
      title: capabilitiesRaw[6].title,
      description: capabilitiesRaw[6].description,
      badges: [{ label: capabilitiesRaw[6].badges[0] }],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased selection:bg-maroon-100 selection:text-maroon-900">
      {/* Sleek & Compact Hero Section */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden bg-white border-b border-slate-100">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg
            className="w-full h-full fill-slate-900"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M50,0 L100,0 L100,100 L0,100 Z" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-maroon-50 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold bg-maroon-50 text-maroon-800 border border-maroon-100 mb-4 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("badge")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-slate-900 leading-tight mb-5 tracking-tight">
                {t("title")}{" "}
                <span className="text-primary italic">{t("titleAccent")}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans mb-6 max-w-2xl font-light text-justify">
                {t("description")}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="/our-venues/360-degree-virtual-tour">
                  <Button className="bg-primary text-white hover:bg-primary-variant px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 group shadow-md shadow-primary/10 cursor-pointer h-10">
                    {t("tourBtn")}

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-transform duration-300" />
                  </Button>
                </Link>
                {/* <Link href="/our-venues/360-degree-virtual-tour">
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer h-10"
                  >
                    {t("tourBtn")}
                  </Button>
                </Link> */}
              </div>
            </div>

            {/* Right Column - Showing FULL uncropped image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-145 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-1.5">
                <Image
                  className="w-full h-auto rounded-xl object-contain block"
                  alt="Elite professional exam delivery and test-taking facility at TEPTH"
                  src="/images/exam-providers.jpg"
                  width={600}
                  height={450}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section - Simple List in One Column */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-2 inline-block">
            {t("capabilitiesBadge")}
          </span>
          <h2 className="text-2xl md:text-3xl font-headline font-black text-slate-900 tracking-tight">
            {t("capabilitiesTitle")}
          </h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-3"></div>
        </div>

        <div className="space-y-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <cap.icon className="w-6 h-6" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-sans text-sm font-light text-justify">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                  {cap.badges.map((badge) =>
                    badge.variant === "highlight" ? (
                      <span
                        key={badge.label}
                        className="inline-flex items-center px-3 py-1 bg-maroon-50/50 border border-maroon-100/50 text-maroon-800 rounded-full text-[11px] font-semibold tracking-wide"
                      >
                        {badge.label}
                      </span>
                    ) : (
                      <span
                        key={badge.label}
                        className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide"
                      >
                        {badge.label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white border-t border-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 tracking-tight mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-slate-600 leading-relaxed font-sans text-base max-w-2xl mx-auto mb-8 font-light">
            {t("contactInfo")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:+97165531250"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-primary text-white hover:bg-primary-variant font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center shadow-md shadow-primary/10"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+971 6 553 1250</span>
            </a>
            <a
              href="mailto:info@tepth.org"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>info@tepth.org</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
