"use client";
import {
  GraduationCap,
  MapPin,
  ShieldCheck,
  Trophy,
  Calendar,
  Laptop,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "./cards/base-card";
import { useTranslations, useLocale } from "next-intl";

const STAT_ICONS = [GraduationCap, MapPin, ShieldCheck, Trophy];
const FEATURE_ICONS = [ShieldCheck, Calendar, GraduationCap, ClipboardCheck, Laptop, CheckCircle2];

const WhyChooseUs = () => {
  const t = useTranslations("HomePage.WhyChooseUs");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const stats = t.raw("stats") as { label: string }[];
  const features = t.raw("features") as { title: string; description: string }[];

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="base-px base-py bg-white">
      <div className="section-container">
        <div className="mb-16">
          <span className="section-label">{t("label")}</span>
          <h3 className="section-title">
            {t("title")} <span>{t("titleAccent")}</span>
          </h3>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-100 pt-8 lg:gap-4">
          {stats.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold leading-tight text-slate-800">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <BaseCard key={i} className="p-6 space-y-3">
                <BaseCardIcon>
                  <Icon />
                </BaseCardIcon>
                <BaseCardTitle>{feature.title}</BaseCardTitle>
                <BaseCardDescription>{feature.description}</BaseCardDescription>
              </BaseCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
