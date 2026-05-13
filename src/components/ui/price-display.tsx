import React from "react";
import { AED } from "./aed";
import { cn } from "@/lib/utils";

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
  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return (
    <span className={cn("flex items-center gap-1 inline-flex", className)}>
      <AED className={cn("h-[0.8em] w-auto", iconClassName)} />
      <span className={currencyClassName}>{formattedAmount}</span>
    </span>
  );
};
