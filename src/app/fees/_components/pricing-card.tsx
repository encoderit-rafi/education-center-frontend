"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface PricingCardProps {
  title: string;
  category?: string;
  description: string;
  price: string;
  priceLabel?: string;
  icon: LucideIcon;
  details: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
  course?: string;
  planId?: string;
}

export function PricingCard({
  title,
  category,
  description,
  price,
  priceLabel = "Excl. VAT",
  icon: Icon,
  details,
  buttonText,
  buttonHref,
  isPopular,
  course,
  planId,
}: PricingCardProps) {
  const finalHref = course && planId 
    ? `${buttonHref}?course=${course.toLowerCase()}&type=${planId.toLowerCase()}`
    : buttonHref;

  return (
    <div className="p-8 rounded-[2.5rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl relative overflow-hidden h-full bg-white border border-slate-200 hover:bg-[#111827] hover:border-[#111827] text-[#111827] hover:text-white">
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#991B1B] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
          Popular
        </div>
      )}
      <div>
        <div className="flex justify-between items-start mb-8">
          {category && (
            <span className="font-black text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#991B1B]/10 text-[#991B1B] group-hover:bg-[#991B1B] group-hover:text-white transition-colors duration-500">
              {category}
            </span>
          )}
          <div className={cn(
            "p-3 rounded-xl bg-[#991B1B]/5 group-hover:bg-[#991B1B] transition-colors duration-500",
            !category && "ml-auto"
          )}>
            <Icon className="w-6 h-6 text-[#991B1B] group-hover:text-white transition-colors duration-500" />
          </div>
        </div>

        <h3 className="text-xl font-headline font-black mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-xs mb-8 leading-relaxed text-[#4B5563] group-hover:text-slate-400 transition-colors duration-500">
          {description}
        </p>

        <ul className="space-y-4 mb-10">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-3 text-[13px] font-medium">
              <CheckCircle2 className="text-[#991B1B] w-4 h-4 shrink-0" />
              <span className="text-[#4B5563] group-hover:text-slate-300 transition-colors duration-500">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-3xl font-headline font-black">
            AED {price}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#4B5563] group-hover:text-slate-500 transition-colors duration-500">
            {priceLabel}
          </span>
        </div>

        <Link
          href={finalHref}
          className="block w-full text-center py-4 rounded-xl font-headline font-bold text-xs transition-all duration-500 tracking-widest uppercase bg-[#F3F4F6] text-[#111827] group-hover:bg-gradient-to-br group-hover:from-[#991B1B] group-hover:to-[#7F1D1D] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#991B1B]/20"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
