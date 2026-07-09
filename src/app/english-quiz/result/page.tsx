"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trophy, Info, RotateCcw, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

function QuizResultContent() {
  const t = useTranslations("EnglishQuiz");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const searchParams = useSearchParams();
  const scoreParam = searchParams.get("score");
  const score = scoreParam ? parseInt(scoreParam, 10) : 0;
  const correctParam = searchParams.get("correct");
  const correct = correctParam ? parseInt(correctParam, 10) : Math.round((score * 60) / 100);

  // Rank and text feedback
  const isExpert = score >= 80;
  const isIntermediate = score >= 50 && score < 80;

  const rank = isExpert
    ? t("result.expert")
    : isIntermediate
      ? t("result.intermediate")
      : t("result.beginner");

  const rankColor = isExpert
    ? "text-emerald-600 bg-emerald-50 border-emerald-200"
    : isIntermediate
      ? "text-blue-600 bg-blue-50 border-blue-200"
      : "text-amber-600 bg-amber-50 border-amber-200";

  const feedbackText = isExpert
    ? t("result.feedbackExpert")
    : isIntermediate
      ? t("result.feedbackIntermediate")
      : t("result.feedbackBeginner");

  const levelDetails = isExpert
    ? t("result.levelAdvanced")
    : isIntermediate
      ? t("result.levelIntermediate")
      : t("result.levelBeginner");

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden"
    >
      {/* Visual Header Banner */}
      <div className="bg-primary p-12 text-white text-center space-y-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner">
          <Trophy size={48} className="text-white animate-bounce" />
          <Star size={16} className="absolute top-2 right-2 text-amber-300 animate-pulse" />
        </div>
        <div className="space-y-2 relative">
          <h1 className="text-4xl font-black tracking-tight text-white">
            {t("result.title")}
          </h1>
          <p className="text-white/80 font-medium text-lg">
            {t("result.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Results Container */}
      <div className="p-8 lg:p-12 space-y-8 bg-white">
        <div className="grid sm:grid-cols-2 gap-8 items-center text-center sm:text-start">
          {/* Score Display */}
          <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              {t("result.yourScore")}
            </span>
            <div className="flex items-baseline justify-center">
              <span className="text-6xl font-black text-secondary">{correct}</span>
              <span className="text-2xl text-slate-400 font-bold ml-1">/60</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-3">
              <div
                className="bg-primary h-full transition-all duration-1000"
                style={{ width: `${(correct / 60) * 100}%` }}
              />
            </div>
          </div>

          {/* Rank Card */}
          <div className="flex flex-col items-center justify-center border border-slate-100 rounded-2xl p-6 space-y-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              {t("result.proficiencyRank")}
            </span>
            <span
              className={cn(
                "inline-flex items-center px-4 py-1.5 rounded-full border text-xl font-black tracking-tight uppercase shadow-sm mt-1",
                rankColor
              )}
            >
              {rank}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-2">
              {levelDetails}
            </span>
          </div>
        </div>

        {/* Feedback Alert box */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex items-start gap-4 text-start">
          <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
            <Info className="text-primary mt-0.5" size={20} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-secondary text-sm">{t("result.feedbackTitle")}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl ? (
                <>
                  شكرًا لك على إجراء كويز اللغة الإنجليزية لدينا. نتيجتك النهائية هي <strong className="text-primary font-black">{correct}</strong> من 60. إذا كنت ترغب في معرفة المزيد عن خدماتنا، يرجى الاتصال بنا عبر الهاتف على الرقم <strong className="text-secondary font-black" dir="ltr">+97165531250</strong> أو عبر البريد الإلكتروني على <a href="mailto:info@tepth.org" className="text-primary underline font-medium">info@tepth.org</a>.
                </>
              ) : (
                <>
                  Thank you for taking our English Quiz. Your final score is <strong className="text-primary font-black">{correct}</strong> out of 60. If you would like to learn more about our services, please contact us by phone at <strong className="text-secondary font-black">+97165531250</strong> or via email at <a href="mailto:info@tepth.org" className="text-primary underline font-medium">info@tepth.org</a>.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <Link href="/english-quiz" className="w-full">
            <Button
              variant="outline"
              className="w-full h-12 font-bold rounded-xl border-slate-200 hover:bg-slate-50 hover:text-secondary flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} />
              <span>{t("result.takeAgain")}</span>
            </Button>
          </Link>
          <Link href="/exam-preparation-courses" className="w-full">
            <Button className="w-full h-12 font-bold rounded-xl flex items-center justify-center gap-2">
              <span>{t("result.viewCourses")}</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function EnglishQuizResultPage() {
  const t = useTranslations("EnglishQuiz");

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20 px-4">
      <Suspense
        fallback={
          <div className="max-w-2xl mx-auto text-center p-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
            <p className="text-slate-500 font-medium">{t("result.calculating")}</p>
          </div>
        }
      >
        <QuizResultContent />
      </Suspense>
    </main>
  );
}
