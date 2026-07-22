"use client";

import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

function Input({ className, type, placeholder, ...props }: React.ComponentProps<"input">) {
  const locale = useLocale();

  let displayPlaceholder = placeholder;
  if (locale === "ar" && displayPlaceholder) {
    const lower = displayPlaceholder.toLowerCase().trim();
    if (lower === "please specify") {
      displayPlaceholder = "يرجى التحديد";
    } else if (lower.includes("first language")) {
      displayPlaceholder = "يرجى تحديد لغتك الأولى";
    } else if (lower.includes("current situation")) {
      displayPlaceholder = "يرجى تحديد وضعك الحالي";
    } else if (lower.includes("reason")) {
      displayPlaceholder = "يرجى تحديد سببك";
    } else if (lower.includes("education level")) {
      displayPlaceholder = "يرجى تحديد مستواك التعليمي";
    } else if (lower.includes("field of study")) {
      displayPlaceholder = "يرجى تحديد مجال دراستك";
    } else if (lower.includes("occupation sector")) {
      displayPlaceholder = "يرجى تحديد قطاعك الوظيفي";
    }
  }

  return (
    <InputPrimitive
      type={type}
      placeholder={displayPlaceholder}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-md border placeholder:text-sm border-slate-200 px-3 py-2 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 placeholder:text-slate-400",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
