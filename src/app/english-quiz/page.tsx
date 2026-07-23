import React from "react";
import EnglishQuizForm from "@/components/blocks/english-quiz-form";
import { useTranslations } from "next-intl";

export default function EnglishQuizPage() {
  const t = useTranslations("EnglishQuiz");

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 sm:pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tight mb-4">
            {t("title")} <span className="text-primary italic">{t("titleAccent")}</span>
          </h1>
          <p className="text-slate-500 text-lg">
            {t("description")}
          </p>
        </div>
        <EnglishQuizForm />
      </div>
    </main>
  );
}
