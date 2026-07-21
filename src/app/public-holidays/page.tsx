"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar as CalendarIcon,
  Info,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import api from "@/axios";
import { useTranslations } from "next-intl";

// ────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────
interface Holiday {
  id: string;
  title: string;
  description: string;
  holidayType: "RELIGIOUS" | "NATIONAL" | "PUBLIC" | string;
  startDate: string;
  endDate: string;
  isRecurring: boolean;
  country: string;
  isActive: boolean;
}

// ────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────
const TYPE_STYLES: Record<string, string> = {
  RELIGIOUS:
    "bg-amber-50 text-amber-700 border-amber-200",
  NATIONAL:
    "bg-red-50 text-[#A11D1D] border-red-200",
  PUBLIC:
    "bg-blue-50 text-blue-700 border-blue-200",
};

const MONTH_NAMES = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

function formatDay(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: MONTH_NAMES[d.getMonth()],
    day: String(d.getDate()).padStart(2, "0"),
    monthIndex: d.getMonth(),
  };
}

// ────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────
export default function PublicHolidaysPage() {
  const t = useTranslations("PublicHolidaysPage");
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-indexed

  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/holidays?year=${currentYear}`)
      .then((res) => {
        const data: Holiday[] = res.data?.data?.data ?? [];
        setHolidays(data.filter((h) => h.isActive));
      })
      .catch(() => setError(t("errorDefault")))
      .finally(() => setLoading(false));
  }, [currentYear]);

  // All holiday start-dates as Date objects for calendar highlighting
  const holidayDates = holidays.map((h) => new Date(h.startDate));

  // Only holidays in the current month (for the left panel)
  const thisMonthHolidays = holidays.filter((h) => {
    const d = new Date(h.startDate);
    return d.getMonth() === currentMonth;
  });

  const calendarMonth = new Date(currentYear, currentMonth);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-100 py-16">
        <div className="container px-6 mx-auto lg:px-24">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-3 block">
              {t("label")}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase leading-none mb-6">
              {t("title")}<span className="text-[#A11D1D]">{t("titleAccent")}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </header>

      <main className="container px-6 mx-auto lg:px-24 py-16 space-y-16">

        {/* ── Loading / Error states ── */}
        {loading && (
          <div className="flex items-center justify-center py-24 gap-3 text-gray-400">
            <Loader2 className="w-6 h-6 animate-spin text-[#A11D1D]" />
            <span className="text-sm font-semibold">{t("loading")}</span>
          </div>
        )}

        {error && !loading && (
          <div className="flex items-center gap-3 text-red-700 bg-red-50 border border-red-200 rounded-xl px-6 py-4">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* ── Calendar View ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* LEFT: This Month's Closures */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">
                  {MONTH_NAMES[currentMonth]} {currentYear} {t("thisMonthTitle")}
                </h2>

                <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
                  {thisMonthHolidays.length === 0 ? (
                    <div className="flex gap-3 items-center text-sm text-gray-400 font-medium">
                      <CalendarIcon className="w-5 h-5 text-[#A11D1D] shrink-0" />
                      <p>{t("noHolidaysMonth")}</p>
                    </div>
                  ) : (
                    thisMonthHolidays.map((h) => {
                      const { month, day } = formatDay(h.startDate);
                      const isNational = h.holidayType === "NATIONAL";
                      return (
                        <div key={h.id} className="flex gap-5 items-center">
                          <div
                            className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-black shrink-0 ${
                              isNational
                                ? "bg-red-50 text-[#A11D1D]"
                                : "bg-gray-50 text-gray-500"
                            }`}
                          >
                            <span className="text-[10px] uppercase">{month}</span>
                            <span className="text-lg leading-none">{day}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-wide">
                              {h.title}
                            </h4>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tight mt-1">
                              {(t.raw("typeLabels") as Record<string, string>)[h.holidayType] ?? h.holidayType}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}

                  <div className="pt-6 border-t border-gray-50">
                    <div className="flex gap-3 items-start text-xs text-gray-400 font-medium leading-relaxed">
                      <Info className="w-4 h-4 text-[#A11D1D] shrink-0 mt-0.5" />
                      <p>{t("calendarHint")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Calendar — read-only display */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-center">
                  {/* pointer-events-none makes entire calendar unclickable */}
                  <div className="pointer-events-none select-none w-full">
                    <Calendar
                      mode="single"
                      month={calendarMonth}
                      captionLayout="label"
                      modifiers={{ holiday: holidayDates }}
                      modifiersClassNames={{
                        holiday:
                          "bg-[#A11D1D] text-white font-bold rounded-md",
                      }}
                      className="rounded-2xl border border-gray-100 shadow-md w-full [--cell-size:40px] text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Yearly Holiday List ── */}
            <section className="pt-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">
                    {t("yearlyTitle")} {currentYear}–{currentYear + 1}
                  </h2>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                    {t("yearlySubtitle")}
                  </p>
                </div>
                <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block" />
              </div>

              {holidays.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-12 text-center">
                  <CalendarIcon className="w-10 h-10 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-400 font-semibold text-sm">
                    {t("noHolidaysYear")} {currentYear}.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {holidays.map((holiday) => {
                    const { month, day } = formatDay(holiday.startDate);
                    const endFormatted = formatDay(holiday.endDate);
                    const isSameDay =
                      holiday.startDate.slice(0, 10) ===
                      holiday.endDate.slice(0, 10);
                    const typeStyle =
                      TYPE_STYLES[holiday.holidayType] ??
                      "bg-slate-50 text-slate-600 border-slate-200";

                    return (
                      <div
                        key={holiday.id}
                        className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                      >
                        {/* Top row: type badge + date pill */}
                        <div className="flex flex-wrap gap-3 justify-between items-start mb-6">
                          <div
                            className={`p-3 rounded-xl border text-xs font-black uppercase tracking-widest ${typeStyle}`}
                          >
                            {(t.raw("typeLabels") as Record<string, string>)[holiday.holidayType] ?? holiday.holidayType}
                          </div>
                          <span className="bg-[#A11D1D] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                            {month} {day}
                            {!isSameDay &&
                              ` – ${endFormatted.month} ${endFormatted.day}`}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">
                          {holiday.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                          {holiday.description || "—"}
                        </p>

                        {/* Country tag */}
                        {holiday.country && (
                          <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <Info className="w-4 h-4 text-[#A11D1D] shrink-0" />
                            <span className="text-[10px] font-black text-[#A11D1D] uppercase tracking-tight">
                              {holiday.country}
                              {holiday.isRecurring && ` ${t("recurringLabel")}`}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
