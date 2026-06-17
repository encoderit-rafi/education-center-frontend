"use client";

import React, { useState } from "react";
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
}

export function AcceptPayButton({
  data,
  className,
  children,
  selectedType,
}: AcceptPayButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const homePrice = parseFloat(data.price || "350");
  const rawCenterPrice = data.details?.center_price ?? data.center_price;
  const centerPrice = rawCenterPrice ? parseFloat(String(rawCenterPrice)) : 450;
  const diffPrice = Math.max(0, centerPrice - homePrice);

  const handleContinue = (location: "home" | "center") => {
    setIsOpen(false);
    const selectedPrice = location === "center" ? centerPrice : homePrice;
    const variantParam = selectedType
      ? `&variant=${encodeURIComponent(selectedType)}`
      : "";
    router.push(
      `/paid-mock-tests/registration?id=${data.slug}&location=${location}&price=${selectedPrice}${variantParam}`,
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children || "I Accept, Pay"}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-3xl lg:max-w-4xl p-6 bg-white rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl font-extrabold text-slate-900 tracking-tight text-center md:text-left">
              Choose your Mock Test Option
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left Card: Basic (Home-based) */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Online badge — top right inside the image */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md">
                    Online
                  </span>
                </div>

                {/* Title overlaid at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <p className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-0.5">
                    Self-managed
                  </p>
                  <h3 className="text-xl font-black text-white flex items-center gap-1.5 leading-tight drop-shadow-md">
                    Home-based
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
                      <span>Self-managed distraction-prone environment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>No on-site technical support or internet check</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Standard domestic testing experience</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>No physical proctor presence or venue simulation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>Timed practice</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-5 border-t border-slate-100 space-y-4">
                  {/* Price section */}
                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-3 flex items-center justify-between">
                    <span className="text-xs font-semibold">Mock Test Price</span>
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
                      I agree that my Home-based Mock Test must be taken on my own device and internet.
                    </label>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handleContinue("home")}
                    disabled={!agreed}
                    className="w-full py-5 font-bold"
                  >
                    Continue with Home-based Mock Test
                  </Button>
                </div>
              </div>
            </div>

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Upgrade badge — top right inside the image */}
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Upgrade
                  </span>
                </div>

                {/* Title overlaid at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <p className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-0.5">
                    In-Center
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">
                    Center-based
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
                      <span className="font-medium text-slate-700">Distraction-free environment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">Reliable internet &amp; tech support on-site</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">Experiencing an authentic, exam-like environment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">Timed practice under exam conditions</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">Replicates physical venue stress &amp; proctor presence</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">Timed practice under exam conditions</span>
                    </li>
                  </ul>

                  {/* Schedule Availability Box */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex gap-2.5 items-start">
                    <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-700">Schedule Availability</h4>
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        Please note that date &amp; time need to be confirmed by our staff and it must be taken within our working hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Footer: price + button ── */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-4">
                  {/* Price section */}
                  <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Upgrade cost</span>
                    <div className="text-xl font-black text-[#1e824c] mt-0.5 flex items-center gap-1">
                      <span>+</span>
                      <PriceDisplay amount={diffPrice} className="text-[#1e824c]" />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-0.5">additional per registration</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handleContinue("center")}
                    className="w-full py-5 font-bold"
                  >
                    Upgrade to Center-based Mock Test
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

