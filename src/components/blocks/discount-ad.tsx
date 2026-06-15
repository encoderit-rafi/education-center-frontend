"use client";

import React, { useState, useEffect } from "react";
import { X, Gift, Percent, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DiscountAd() {
  const t = useTranslations("DiscountSection");
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("tepth_discount_ad_dismissed");
    if (!dismissed) {
      setIsMounted(true);
      // Delay to allow page to load before ad pops up
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("tepth_discount_ad_dismissed", "true");
    setTimeout(() => setIsMounted(false), 300);
  };

  const handleScrollToPackages = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[90%] max-w-[360px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out dark:border-slate-800/80 dark:bg-slate-950/95 sm:w-full ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95 pointer-events-none"
      }`}
      role="complementary"
      aria-label="Special Discount Promotion"
    >
      {/* Ad Tag & Close Button */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2 dark:border-slate-800">
        <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-black tracking-widest text-primary dark:bg-primary/20">
          <Percent className="size-2.5" /> {t("specialOffer")}
        </span>
        <button
          onClick={handleClose}
          className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close promotion"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Main Promo Copy */}
      <div className="space-y-2 mb-4">
        <h4 className="font-headline font-black text-slate-900 dark:text-white text-lg flex items-center gap-1.5 leading-tight">
          <Gift className="size-5 text-primary shrink-0 animate-pulse" />
          {t("saveUpTo")} <span className="text-primary italic">25%</span>
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
          {t("adText")}
        </p>
      </div>

      {/* Discount Rates List */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50/50 p-2 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-emerald-950/30 dark:bg-emerald-950/10">
          <span className="font-medium text-slate-700 dark:text-slate-300">{t("groupCourse")}</span>
          <span className="font-extrabold text-emerald-700 dark:text-emerald-400">{t("savePct", { val: "10%" })}</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-red-100 bg-red-50/50 p-2 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-red-950/30 dark:bg-red-950/10">
          <span className="font-medium text-slate-700 dark:text-slate-300">{t("semiPrivateCourse")}</span>
          <span className="font-extrabold text-red-600 dark:text-red-400">{t("savePct", { val: "15%" })}</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50/50 p-2 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-blue-950/30 dark:bg-blue-950/10">
          <span className="font-medium text-slate-700 dark:text-slate-300">{t("inPersonOneToOne")}</span>
          <span className="font-extrabold text-blue-700 dark:text-blue-400">{t("savePct", { val: "20%" })}</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-amber-100 bg-amber-50/50 p-2 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-amber-950/30 dark:bg-amber-950/10">
          <span className="font-medium text-slate-700 dark:text-slate-300">{t("onlineOneToOne")}</span>
          <span className="font-extrabold text-amber-600 dark:text-amber-500">{t("savePct", { val: "20%" })}</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-orange-100 bg-orange-50/50 p-2 text-xs transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-orange-950/30 dark:bg-orange-950/10">
          <span className="font-medium text-slate-700 dark:text-slate-300">{t("hybridOneToOne")}</span>
          <span className="font-extrabold text-orange-600 dark:text-orange-400">{t("savePct", { val: "25%" })}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleScrollToPackages}
        className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 px-4 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/30"
      >
        <span>{t("viewPackages")}</span>
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
