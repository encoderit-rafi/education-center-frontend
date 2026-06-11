"use client";

import {
  MapPin,
  Wifi,
  ShieldCheck,
} from "lucide-react";
import { CampusGallery } from "@/components/blocks/campus-gallery";
import { useTranslations } from "next-intl";

export default function OurVenues() {
  const t = useTranslations("OurVenuesPage.360DegreeVirtualTourPage");

  const featureIcons = [MapPin, Wifi, ShieldCheck];
  const features = (t.raw("features") as { title: string; desc: string }[]).map((f, idx) => ({
    ...f,
    icon: featureIcons[idx]
  }));

  return (
    <main className=" bg-background">
      {/* ── Virtual Tour Section ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
                {t("title")}
              </h2>
              <p className="text-on-surface-variant text-lg">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12">
            <iframe
              src="https://my.matterport.com/show/?m=J3Go7kFamvE"
              className="w-full aspect-video rounded-3xl border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CampusGallery />

      {/* ── Facilities Grid (Editorial Feel) ── */}
      <section className="max-w-7xl mx-auto px-8 mb-24 pt-24 border-t border-outline/10">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            {t("advantageTitle")}
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">
            {t("advantageSubtitle")}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-10 bg-surface-container-high rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1 border border-[#E5E7EB]/40 hover:border-[#991B1B]/30"
            >
              <f.icon className="text-primary w-10 h-10 mb-6 block" />
              <h4 className="text-2xl font-headline font-extrabold text-secondary mb-3">
                {f.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
