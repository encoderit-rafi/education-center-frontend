import Image from "next/image";
import {
  Info,
  CreditCard,
  CalendarDays,
  Mail,
  Phone,
  ShieldCheck,
  Check,
} from "lucide-react";

import { PriceDisplay } from "@/components/ui/price-display";
import { INSTITUTIONS_INFO } from "@/data";
import { useTranslations } from "next-intl";

type FeeEntry = {
  duration: string;
  fee: string;
};

const FEES: FeeEntry[] = [
  { duration: "60 min", fee: "250" },
  { duration: "120 min", fee: "300" },
  { duration: "150 min", fee: "350" },
  { duration: "180 min", fee: "400" },
  { duration: "210 min", fee: "450" },
  { duration: "240 min", fee: "500" },
];

export default function CandidatesProctoringPage() {
  const t = useTranslations("ExamProctoringServicesPage.CandidatesPage");
  const paymentMethods = t.raw("paymentMethods") as string[];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-20">
        <div className="container px-6 mx-auto lg:px-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 leading-tight">
                {t("heroTitle")}{" "}
                <span className="text-primary">{t("heroTitleAccent")}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {t("heroDescription")}
              </p>
            </div>
            {/* Right Column - Showing Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-112.5 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-1.5">
                <Image
                  className="w-full h-auto rounded-xl object-contain block"
                  alt="Exam proctoring services for candidates at TEPTH"
                  src="/images/exam_proctoring_services.jpg"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container px-6 mx-auto lg:px-24 py-16 space-y-12">
        {/* 2. Main Split Content: Booking & Fees */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Booking Process (7 cols) */}
          <section className="lg:col-span-7 bg-white p-5 rounded-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-10">
              {t("bookingHeading")}
            </h2>

            <div className="relative space-y-10 ">
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 border-4 border-white text-primary font-semibold shrink-0 shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-1">
                    {t("step1Title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("step1Description")}
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 border-4 border-white text-primary font-semibold shrink-0 shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-1">
                    {t("step2Title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {t("step2Description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`tel:${INSTITUTIONS_INFO.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      {INSTITUTIONS_INFO.phone}
                    </a>
                    <a
                      href={`mailto:${INSTITUTIONS_INFO.email}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      {INSTITUTIONS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 border-4 border-white text-primary font-semibold shrink-0 shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-1">
                    {t("step3Title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("step3Description")}
                  </p>
                  <div className="inline-flex items-start gap-3 p-4 rounded-2xl bg-slate-50 text-sm text-slate-600 border border-slate-100">
                    <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p>{t("step3Disclaimer")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: Fees (5 cols) */}
          <section className="lg:col-span-5 bg-white p-5 rounded-lg">
            <div className=" sticky top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {t("feesHeading")}
                </h2>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="py-4 px-5 font-semibold text-secondary text-left">
                        {t("feesColDuration")}
                      </th>
                      <th className="py-4 px-5 font-semibold text-secondary text-right">
                        {t("feesColFee")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FEES.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-5">
                          <span className="font-medium text-slate-700">
                            {row.duration}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          <div className="text-right flex items-center justify-end">
                            <PriceDisplay
                              amount={parseInt(row.fee)}
                              className="text-lg font-semibold text-primary"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{t("feeNote1")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{t("feeNote2")}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 3. Bottom Row: Payment & Day-of (Grid 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment */}
          <section className=" flex flex-col bg-white p-5 rounded-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {t("paymentHeading")}
              </h2>
            </div>

            <ul className="space-y-5 mb-8 flex-1">
              {paymentMethods.map((m, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl text-sm leading-relaxed">
              <span className="font-semibold block mb-1">
                {t("paymentRecommendationLabel")}
              </span>
              {t("paymentRecommendationText")}
            </div>
          </section>

          {/* Day-of */}
          <section className=" flex flex-col bg-white p-5 rounded-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <CalendarDays className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {t("dayOfHeading")}
              </h2>
            </div>

            <div className="space-y-6 flex-1 text-slate-600 leading-relaxed">
              <p>{t("dayOfText")}</p>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{t("dayOfTip")}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
