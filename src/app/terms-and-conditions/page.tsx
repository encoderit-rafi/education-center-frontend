"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CreditCard,
  Calendar,
  BookOpen,
  ClipboardCheck,
  Percent,
  RotateCcw,
  Shield,
  AlertTriangle,
  Scale,
  FileText,
  Clock
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  payment: CreditCard,
  attendance: Calendar,
  materials: BookOpen,
  registration: ClipboardCheck,
  discounts: Percent,
  refunds: RotateCcw,
  intellectual_property: Shield,
  disclaimer: AlertTriangle,
  jurisdiction: Scale,
};

export default function TermsAndConditionsPage() {
  const t = useTranslations("TermsAndConditionsPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const rawSections = t.raw("sections") as Record<string, any>;
  const sectionIds = Object.keys(rawSections);

  const renderAmount = (amount: string) => {
    const match = amount.match(/(\d+%)/);
    if (match) {
      const pct = match[1];
      const parts = amount.split(pct);
      return (
        <>
          {parts[0]}
          <span dir="ltr">{pct}</span>
          {parts[1]}
        </>
      );
    }
    return amount;
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-slate-50/50 pb-24 text-slate-800 font-sans"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-[#A11D1D]/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-50 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-r from-red-500/5 to-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header section */}
      <section className="pt-24 pb-8 relative z-10">
        <div className="container max-w-5xl px-6 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-150/30 text-xs font-semibold text-[#A11D1D] mb-6 shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>{t("lastUpdated")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-none mb-6">
            {t("title")}{" "}
            <span className="text-[#A11D1D] relative inline-block">
              {t("titleAccent")}
              <span className="absolute left-0 bottom-1 w-full h-1.5 bg-[#A11D1D]/10 rounded-full" />
            </span>
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium text-justify leading-relaxed mb-8">
            {t("description")}
          </p>

          {/* Important Note */}
          <div className={`bg-red-50/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-start mb-12 ${isRtl ? "border-r-4 border-[#A11D1D]" : "border-l-4 border-[#A11D1D]"
            }`}>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#A11D1D]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#A11D1D] mb-1 uppercase tracking-wider">
                  {isRtl ? "ملاحظة هامة" : "Important Note"}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {t("importantNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section contents list */}
      <section className="relative z-10">
        <div className="container max-w-4xl px-6 mx-auto">
          <div className="space-y-8">
            {sectionIds.map((id) => {
              const s = rawSections[id];
              const Icon = ICON_MAP[id] || FileText;

              return (
                <Card
                  key={id}
                  id={id}
                  className="group scroll-mt-36 gap-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <CardHeader className="flex-row items-center gap-4 border-b border-slate-100 pb-5 [.border-b]:pb-5">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-red-50 text-[#A11D1D] flex items-center justify-center group-hover:bg-[#A11D1D] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-[#A11D1D] transition-colors">
                      {s.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
                      {/* P1 Description if available */}
                      {s.p1 && (
                        <p
                          className="font-medium text-slate-700"
                          dangerouslySetInnerHTML={{ __html: s.p1 }}
                        />
                      )}

                      {/* Items list if available */}
                      {s.items && s.items.length > 0 && (
                        <ul className="space-y-3.5 pl-0">
                          {s.items.map((item: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex gap-3 items-start"
                            >
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#A11D1D] mt-2.5 shadow-sm" />
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                                className="flex-1"
                              />
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Discounts specific Note */}
                      {s.note && (
                        <div className={`mt-4 p-4 rounded-xl bg-slate-50 text-xs md:text-sm text-slate-600 font-medium italic ${isRtl ? "border-r-2 border-[#A11D1D]" : "border-l-2 border-[#A11D1D]"
                          }`}>
                          <span dangerouslySetInnerHTML={{ __html: s.note }} />
                        </div>
                      )}

                      {/* Refunds specific Timeline */}
                      {s.timeline && (
                        <div className="mt-6 border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
                          {s.timelineTitle && (
                            <h4 className="bg-slate-50 border-b border-slate-200/60 px-5 py-3.5 text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
                              {s.timelineTitle}
                            </h4>
                          )}
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-200/60 bg-slate-50/50">
                                  <th className={`px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                                    {s.thNotice}
                                  </th>
                                  <th className={`px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                                    {s.thRefund}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {s.timeline.map((row: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className="hover:bg-slate-50/40 transition-colors"
                                  >
                                    <td className="px-5 py-4 font-semibold text-slate-700">
                                      {row.notice}
                                    </td>
                                    <td className="px-5 py-4">
                                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-red-50 text-[#A11D1D]">
                                        {renderAmount(row.amount)}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Additional Rules */}
                      {s.additionalTitle && (
                        <div className="mt-6 pt-5 border-t border-slate-100">
                          <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                            {s.additionalTitle}
                          </h4>
                          {s.additionalItems && (
                            <ul className="space-y-3 pl-0">
                              {s.additionalItems.map(
                                (item: string, idx: number) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 items-start"
                                  >
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#A11D1D] mt-2.5 shadow-sm" />
                                    <span className="flex-1">{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
