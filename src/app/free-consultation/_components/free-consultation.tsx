"use client";
import Link from "next/link";
import { Calendar, Check } from "lucide-react";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function FreeConsultation() {
  const t = useTranslations("HomePage.FreeConsultation");
  const features = t.raw("features") as string[];

  return (
    <GradientBox>
      <div className="relative mx-auto px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center  lg:text-left">
          <div>
            <h2 className="text-4xl font-black text-white lg:text-5xl tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-lg">
              {t("description")}
            </p>
            <Link
              href="/free-consultation"
              className={buttonVariants({
                size: "lg",
                variant: "light",
                className: "mt-6",
              })}
            >
              <Calendar className="h-5 w-5" />
              {t("cta")}
            </Link>
          </div>

          <div className="flex flex-col!  justify-around gap-4 sm:flex-row w-full sm:w-auto">
            {features.map((feature, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-sm font-medium text-white/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <Check className="h-3 w-3 text-white" />
                </span>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GradientBox>
  );
}
