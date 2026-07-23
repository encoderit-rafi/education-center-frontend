"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Star, Mail, Phone, Copy } from "lucide-react";
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

  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+971 6 553 1250");
    setCopiedPhone(true);
    setTimeout(() => {
      setCopiedPhone(false);
    }, 2000);
  };

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
          <Check size={48} className="text-white animate-bounce" strokeWidth={3} />
          <Star size={16} className="absolute top-2 right-2 text-amber-300 animate-pulse" />
        </div>
        <div className="space-y-2 relative">
          <h1 className="text-4xl font-black tracking-tight text-white">
            {t("result.title")}
          </h1>
        </div>
      </div>

      {/* Main Results Container */}
      <div className="p-4 sm:p-8 lg:p-12 space-y-8 bg-white">
        <div>
          {/* Score Display */}
          <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-2">
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
        </div>

        {/* Feedback Alert box */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 text-start space-y-6">
          <div className="space-y-2">
            <p className="text-base font-bold text-slate-800 leading-snug">
              {isRtl ? "شكرًا لك على إجراء كويز تيبث للغة الإنجليزية!" : "Thank you for taking the TEPTH English Quiz!"}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl ? (
                <>
                  لقد حصلت على نتيجة نهائية قدرها <strong className="text-primary font-black">{correct} من 60</strong>. لمعرفة المزيد عن خدماتنا وكيف يمكننا دعمك، يرجى التواصل مع فريقنا:
                </>
              ) : (
                <>
                  You achieved a final score of <strong className="text-primary font-black">{correct} out of 60</strong>. To learn more about our services and how we can support you, please reach out to our team:
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Phone Contact Button */}
            <button
              onClick={handleCopyPhone}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all text-start group relative active:scale-[0.98] w-full"
            >
              <div className="p-2.5 sm:p-3 bg-secondary/10 rounded-lg text-secondary group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {isRtl ? "اتصل بنا" : "Call Us"}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-slate-700 mt-0.5 rtl:text-right" dir="ltr">
                  +971 6 553 1250
                </span>
              </div>
              <div className="flex items-center justify-center p-2 rounded-md hover:bg-slate-100 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>
              {/* Tooltip */}
              <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl transition-all duration-200 whitespace-nowrap z-10 ${
                  copiedPhone ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                }`}
              >
                {isRtl ? "تم النسخ!" : "Copied to clipboard!"}
              </div>
            </button>

            {/* Email Contact Link */}
            <a
              href="mailto:info@tepth.org"
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all text-start group active:scale-[0.98] w-full"
            >
              <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {isRtl ? "البريد الإلكتروني" : "Email Us"}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-slate-700 mt-0.5 whitespace-nowrap">
                  info@tepth.org
                </span>
              </div>
              <div className="flex items-center justify-center p-2 rounded-md hover:bg-slate-100 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
            </a>
          </div>
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
