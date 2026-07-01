"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/ui/price-display";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface WorkshopBookingSidebarProps {
  discountedPrice: number;
  basePrice: number;
  discountRaw: number;
  discountType: string;
  baseUrl: string;
  pricingTitle: string;
  saveInstantText: string;
  bookNowText: string;
  securePaymentText: string;
  mockTestTypeTitle?: string;
  mockTestTypePlaceholder?: string;
  onlineOptionText?: string;
  inPersonOptionText?: string;
  children?: React.ReactNode;
}

export function WorkshopBookingSidebar({
  discountedPrice,
  basePrice,
  discountRaw,
  discountType,
  baseUrl,
  pricingTitle,
  saveInstantText,
  bookNowText,
  securePaymentText,
  mockTestTypeTitle = "mock test type",
  mockTestTypePlaceholder = "select your mock test type",
  onlineOptionText = "Online",
  inPersonOptionText = "In-Person",
  children,
}: WorkshopBookingSidebarProps) {
  const [selectedType, setSelectedType] = useState<string>("");

  // Construct dynamic registration URL with the selected type parameter
  const registrationUrl = selectedType
    ? `${baseUrl}&type=${encodeURIComponent(selectedType)}`
    : baseUrl;

  return (
    <div className="lg:sticky lg:top-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider mb-2">
          {pricingTitle}
        </p>
        <div className="flex items-baseline gap-3 flex-wrap">
          <PriceDisplay
            amount={discountedPrice}
            className="text-4xl font-black text-primary"
          />
          {discountRaw > 0 && (
            <span className="text-lg text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
              <PriceDisplay amount={basePrice} iconClassName="h-[0.7em]" />
            </span>
          )}
        </div>
        {discountRaw > 0 && (
          <div className="mt-2.5">
            <Badge className="py-1 px-3 font-bold shadow-sm bg-emerald-50 text-emerald-600 hover:bg-emerald-50/80 border-emerald-200">
              {saveInstantText}
            </Badge>
          </div>
        )}
      </div>

      <div className="h-px bg-slate-100" />

      {/* Mock Test Type Dropdown */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
          {mockTestTypeTitle}
        </label>
        <Select value={selectedType} onValueChange={(val) => setSelectedType(val || "")}>
          <SelectTrigger className="w-full h-11 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-primary/20">
            <SelectValue placeholder={mockTestTypePlaceholder} />
          </SelectTrigger>
          <SelectContent className="bg-white border border-slate-150">
            <SelectItem value="Online">{onlineOptionText}</SelectItem>
            <SelectItem value="In-Person">{inPersonOptionText}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-px bg-slate-100" />

      <div className="space-y-4">
        <Link
          href={registrationUrl}
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full font-black py-6 text-base shadow-md flex items-center justify-center gap-2 transition-all duration-300",
            !selectedType && "pointer-events-none opacity-50"
          )}
        >
          <Calendar className="w-5 h-5 shrink-0" />
          {bookNowText}
        </Link>
      </div>

      {children}
    </div>
  );
}
