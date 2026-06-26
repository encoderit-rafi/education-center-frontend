import React from "react";
import SpecialAccommodationForm from "@/components/blocks/special-accommodation-form";
import { Timer, ArrowRight, Eye, DoorOpen, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function SpecialAccommodation() {
  const t = useTranslations("SpecialAccommodationPage");

  const steps = t.raw("howToApply.steps") as { title: string; desc: string }[];
  const assistiveTags = t.raw("cards.assistivePersonnel.tags") as string[];

  return (
    <main className="bg-white min-h-screen">
      {/* Types of Accommodations - Bento Grid */}
      <section className="py-12 md:py-16 bg-red-50/30">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <SectionHeader
            title={
              <>
                {t("title")} <span className="text-primary">{t("titleAccent")}</span>
              </>
            }
            description={t("description")}
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white shadow-sm p-6 md:p-8 rounded-xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500 border border-slate-100 hover:border-primary">
              <div>
                <Timer className="w-8 h-8 mb-4 text-primary group-hover:text-white transition-colors" />
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-white transition-colors text-secondary">
                  {t("cards.additionalTime.title")}
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 transition-colors text-sm leading-relaxed">
                  {t("cards.additionalTime.desc")}
                </p>
              </div>
              <div className="mt-6">
                <a
                  className="text-primary font-bold group-hover:text-white flex items-center gap-2 text-sm"
                  href="#"
                >
                  {t("cards.additionalTime.link")} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-red-50 p-6 md:p-8 rounded-xl flex flex-col group hover:shadow-xl transition-all border border-red-100">
              <Eye className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary">
                {t("cards.visualAids.title")}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {t("cards.visualAids.desc")}
              </p>
              <div className="mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {t("cards.visualAids.badge")}
                </span>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm flex flex-col group border border-slate-100 border-b-4 border-b-transparent hover:border-b-primary transition-all">
              <DoorOpen className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary">
                {t("cards.privateRoom.title")}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t("cards.privateRoom.desc")}
              </p>
            </div>
            <div className="md:col-span-2 bg-secondary text-white p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {t("cards.assistivePersonnel.title")}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                    {t("cards.assistivePersonnel.desc")}
                  </p>
                </div>
                <div className="flex gap-3 mt-6 flex-wrap">
                  {assistiveTags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 px-3.5 py-1.5 rounded-lg text-xs backdrop-blur-md border border-white/20"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <Users className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply & Documentation */}
      <section className="py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-4 text-secondary">
                {t("howToApply.title")}
                <div className="h-1 w-16 bg-primary/20"></div>
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-secondary">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-100 shadow-sm rounded-xl p-4 md:p-6 bg-white">
              <h2 className="text-xl font-headline font-bold mb-3 text-secondary">
                {t("inquiry.title")}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To apply or enquire about special accommodations, please contact us at{" "}
                <a href="mailto:info@tepth.org" className="text-red-800 font-semibold hover:underline">
                  info@tepth.org
                </a>{" "}
                or call us on{" "}
                <a href="tel:+97165531250" className="text-red-800 font-semibold hover:underline">
                  +97165531250
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
