"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Calendar, AlertCircle, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PriceDisplay } from "@/components/ui/price-display";
import Image from "next/image";

interface AcceptPayButtonProps {
  data: {
    slug: string;
    name?: string;
    price: string;
    center_price?: string;
    details?: {
      center_price?: string | number;
    } | null;
  };
  className?: string;
  children?: React.ReactNode;
  /** Optional pre-selected exam type variant (e.g. "PTE Academic", "IELTS Academic") */
  selectedType?: string;
  /** Optional pre-selected location ("home" | "center") */
  selectedLocation?: "home" | "center";
}

export function AcceptPayButton({
  data,
  className,
  children,
  selectedType,
  selectedLocation,
}: AcceptPayButtonProps) {
  const t = useTranslations("PaidMockTestsPage");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const homePrice = data.price && parseFloat(data.price) > 0 ? parseFloat(data.price) : 350;
  const rawCenterPrice = data.details?.center_price ?? data.center_price;
  const centerPrice = rawCenterPrice && parseFloat(String(rawCenterPrice)) > 0 ? parseFloat(String(rawCenterPrice)) : 450;
  const diffPrice = Math.max(0, centerPrice - homePrice);

  const handleContinue = (location: "home" | "center") => {
    setIsOpen(false);
    const selectedPrice = location === "center" ? centerPrice : homePrice;
    const variantType = selectedType || data.name;
    const variantParam = variantType
      ? `&variant=${encodeURIComponent(variantType)}`
      : "";
    router.push(
      `/paid-mock-tests/registration?id=${data.slug}&location=${location}&price=${selectedPrice}${variantParam}`,
    );
  };

  const handleClick = () => {
    if (selectedLocation === "center") {
      handleContinue("center");
      return;
    }
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children || t("acceptPay")}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={cn(
          "p-6 bg-white rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]",
          selectedLocation === "center" ? "max-w-[95vw] md:max-w-md" : "max-w-[95vw] md:max-w-3xl lg:max-w-4xl"
        )}>
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl font-extrabold text-slate-900 tracking-tight text-center">
              {t("chooseOption")}
            </DialogTitle>
          </DialogHeader>

          <div className={cn(
            "grid gap-6 items-stretch",
            selectedLocation === "center" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          )}>
            {/* Left Card: Basic (Home-based) */}
            {selectedLocation !== "center" && (
              <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm flex-1 justify-between overflow-hidden">
                {/* ── Hero Image Strip ── */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                  <Image
                    src="/images/home_mock_test.png"
                    alt="Home-based mock testing environment"
                    fill
                    className="object-cover object-center scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark gradient overlay so text is legible */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

                  {/* Title overlaid at the bottom of the image */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                    <p className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-0.5">
                      {t("selfManaged")}
                    </p>
                    <h3 className="text-xl font-black text-white flex items-center gap-1.5 leading-tight drop-shadow-md">
                      {t("homeBased")}
                      <AlertCircle className="w-4 h-4 text-red-400 fill-red-950/20 animate-pulse" />
                    </h3>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex-1">
                    {/* Feature list */}
                    <ul className="space-y-3 mb-5 text-sm text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{t("homeFeatures.distractionProne")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{t("homeFeatures.noTechSupport")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{t("homeFeatures.domesticExperience")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{t("homeFeatures.noProctor")}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{t("homeFeatures.timedPractice")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto pt-5 border-t border-slate-100 space-y-4">
                    {/* Price section */}
                    <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-3 flex items-center justify-between">
                      <span className="text-xs font-semibold">{t("mockTestPrice")}</span>
                      <span className="text-base font-extrabold text-primary">
                        <PriceDisplay amount={homePrice} />
                      </span>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agree-home-test"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(!!checked)}
                        className="mt-0.5"
                      />
                      <label htmlFor="agree-home-test" className="text-xs text-slate-500 cursor-pointer select-none leading-tight">
                        {t("homeAgreeLabel")}
                      </label>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => handleContinue("home")}
                      disabled={!agreed}
                      className="w-full py-5 font-bold"
                    >
                      {t("continueHomeBtn")}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Right Card: Standard (Center-based) */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm flex-1 justify-between overflow-hidden">

              {/* ── Hero Image Strip ── */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <Image
                  src="/images/about-us/Computer_Room_3.jpg"
                  alt="Test center computer room"
                  fill
                  className="object-cover object-center scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark gradient overlay so text is legible */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

                {/* Upgrade badge — top right inside the image */}
                {selectedLocation !== "center" && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {t("upgrade")}
                    </span>
                  </div>
                )}

                {/* Title overlaid at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <p className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-0.5">
                    {t("inPerson")}
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">
                    {t("centerBased")}
                  </h3>
                </div>
              </div>

              {/* ── Card Body ── */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex-1">
                  {/* Feature list */}
                  <ul className="space-y-3 mb-5 text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{t("centerFeatures.distractionFree")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{t("centerFeatures.techSupport")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{t("centerFeatures.examEnvironment")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{t("centerFeatures.timedConditions")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{t("centerFeatures.proctorPresence")}</span>
                    </li>
                  </ul>

                  {/* Schedule Availability Box */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex gap-2.5 items-start">
                    <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-700">{t("scheduleAvailability")}</h4>
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        {t("scheduleNote")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Footer: price + button ── */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-4">
                  {/* Price section */}
                  <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                      {selectedLocation === "center" ? t("mockTestPrice") : t("upgradeCost")}
                    </span>
                    <div className="text-xl font-black text-[#1e824c] mt-0.5 flex items-center gap-1">
                      {selectedLocation !== "center" && <span>+</span>}
                      <PriceDisplay amount={selectedLocation === "center" ? centerPrice : diffPrice} className="text-[#1e824c]" />
                    </div>
                    {selectedLocation !== "center" && (
                      <span className="text-[10px] text-slate-400 mt-0.5">{t("additionalPerReg")}</span>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handleContinue("center")}
                    className="w-full py-5 font-bold"
                  >
                    {selectedLocation === "center"
                      ? (isRtl ? "المتابعة مع الاختبار التجريبي في المركز" : "Continue with Center-based Mock Test")
                      : t("upgradeBtn")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

