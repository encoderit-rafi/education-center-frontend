"use client";

import TestYourEnglishForm from "@/components/blocks/test-your-english-form";
import { useTranslations } from "next-intl";

export default function TestYourEnglishPage() {
  const t = useTranslations("TestYourEnglish");

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tight mb-4">
            {t("title")} <span className="text-primary italic">{t("titleAccent")}</span>
          </h1>
          <p className="text-slate-500 text-lg">
            {t("subtitle")}
          </p>
        </div>
        <TestYourEnglishForm />
      </div>
    </main>
  );
}
