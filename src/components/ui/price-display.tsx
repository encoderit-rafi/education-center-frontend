import React from "react";
import { AED } from "./aed";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface PriceDisplayProps {
  amount: number;
  className?: string;
  iconClassName?: string;
  currencyClassName?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export const PriceDisplay = ({
  amount,
  className,
  iconClassName,
  currencyClassName,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
}: PriceDisplayProps) => {
  const locale = useLocale();
  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  if (locale === "ar") {
    return (
      <span className={cn("inline-flex items-center gap-1", className)}>
        <span>{formattedAmount}</span>
        <span className={currencyClassName}>درهم</span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-1", className)} dir="ltr">
      <AED className={cn("h-[0.85em] w-auto relative top-[0.05em]", iconClassName)} />
      <span className={currencyClassName}>{formattedAmount}</span>
    </span>
  );
};

