"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { TEST_DATES_CARDS_DATA } from "@/data";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import CaelInfo from "@/components/blocks/cael-info";
import CelpipInfo from "@/components/blocks/celpip-info";
import { cn } from "@/lib/utils";
import { useBookingStore } from "@/store/booking-store";

export default function TestDatesDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const selectedDate = useBookingStore((state) => state.selectedDate);
  const setSelectedDate = useBookingStore((state) => state.setSelectedDate);

  // Clear selected date on mount or when id changes
  React.useEffect(() => {
    setSelectedDate(null);
  }, [id, setSelectedDate]);

  const handleBookNow = () => {
    if (selectedDate) {
      router.push(`/book-exams/${id}`);
    }
  };

  // Find the exam metadata from our cards data
  const examMetadata = TEST_DATES_CARDS_DATA.find((e) => e.id === id);

  if (!examMetadata) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Exam not found</h1>
          <Link href="/test-dates" className="text-primary hover:underline">
            Back to all test dates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ── Header ── */}
      <section className="base-py base-px bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="space-y-3">
            <h1 className="text-4xl font-headline font-black text-secondary tracking-tight leading-tight">
              {examMetadata.name}{" "}
              <span className="text-primary italic">Test Dates</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed font-light max-w-2xl">
              {examMetadata.description}
            </p>
          </div>
          <div
            className={
              ["cael", "celpip-general"].includes(id)
                ? "flex justify-center"
                : "grid md:grid-cols-2 grid-cols-1 gap-16"
            }
          >
            <div
              className={
                ["cael", "celpip-general"].includes(id)
                  ? "space-y-4 w-full max-w-2xl"
                  : "space-y-4"
              }
            >
              {id === "ielts" && (
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/15 border border-red-100/80 rounded-2xl p-6 shadow-md shadow-red-950/5 max-w-xl transition-all duration-300 hover:shadow-lg hover:border-red-200">
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white p-2.5 shadow-md shadow-primary/20">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">IELTS Weekly Schedule</h3>
                      <p className="text-[10px] text-slate-400">Regular weekly test sessions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Testing Days
                      </div>
                      <div className="flex flex-wrap gap-2 pl-3.5">
                        <span className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-md px-3 py-1 shadow-xs">
                          Sunday Only
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Clock className="w-4 h-4 text-primary" />
                        Available Time Slots
                      </div>
                      <div className="flex flex-wrap gap-2 pl-5">
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          Morning Session (AM)
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          Afternoon Session (PM)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {id === "toefl" && (
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/15 border border-red-100/80 rounded-2xl p-6 shadow-md shadow-red-950/5 max-w-xl transition-all duration-300 hover:shadow-lg hover:border-red-200">
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white p-2.5 shadow-md shadow-primary/20">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">TOEFL iBT Weekly Schedule</h3>
                      <p className="text-[10px] text-slate-400">Regular weekly test sessions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Testing Days
                      </div>
                      <div className="flex flex-wrap gap-2 pl-3.5">
                        <span className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-md px-3 py-1 shadow-xs">
                          Wednesday
                        </span>
                        <span className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-md px-3 py-1 shadow-xs">
                          Saturday
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Clock className="w-4 h-4 text-primary" />
                        Available Time Slots
                      </div>
                      <div className="flex flex-wrap gap-2 pl-5">
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          AM / PM Sessions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {id === "skill-for-english-selt" && (
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/15 border border-red-100/80 rounded-2xl p-6 shadow-md shadow-red-950/5 max-w-xl transition-all duration-300 hover:shadow-lg hover:border-red-200">
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white p-2.5 shadow-md shadow-primary/20">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">Skills for English (SELT) Schedule</h3>
                      <p className="text-[10px] text-slate-400">Regular weekly test sessions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Testing Days
                      </div>
                      <div className="flex flex-wrap gap-2 pl-3.5">
                        <span className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-md px-3 py-1 shadow-xs">
                          Monday, Tuesday & Wednesday
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Clock className="w-4 h-4 text-primary" />
                        Available Time Slots
                      </div>
                      <div className="flex flex-wrap gap-2 pl-5">
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          10:00 AM
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          01:30 PM
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2.5 py-1 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                          05:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {id === "pte" && (
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/15 border border-red-100/80 rounded-2xl p-6 shadow-md shadow-red-950/5 max-w-4xl transition-all duration-300 hover:shadow-lg hover:border-red-200">
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white p-2.5 shadow-md shadow-primary/20">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">PTE Weekly Schedule</h3>
                      <p className="text-[10px] text-slate-400">Regular weekly test sessions</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1: PTE Academic / Core / UKVI */}
                    <div className="bg-slate-50/60 rounded-xl p-5 border border-slate-100/80 space-y-4">
                      <div className="pb-2 border-b border-slate-200/60">
                        <h4 className="text-xs font-black uppercase tracking-wider text-primary">
                          PTE Academic / Core / UKVI
                        </h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200/40 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                            <span className="text-xs font-bold text-slate-700">Sat, Tue, Wed</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end max-w-md">
                            {["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"].map((t) => (
                              <span key={t} className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2 py-0.5 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200/40 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                            <span className="text-xs font-bold text-slate-700">Sunday</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end max-w-md">
                            {["6:15 PM"].map((t) => (
                              <span key={t} className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2 py-0.5 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200/40 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                            <span className="text-xs font-bold text-slate-700">Monday</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end max-w-md">
                            {["10:00 AM", "1:00 PM", "3:30 PM", "6:15 PM"].map((t) => (
                              <span key={t} className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2 py-0.5 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200/40 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                            <span className="text-xs font-bold text-slate-700">Thursday</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end max-w-md">
                            {["3:30 PM", "6:15 PM"].map((t) => (
                              <span key={t} className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2 py-0.5 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: PTE Home */}
                    <div className="bg-slate-50/60 rounded-xl p-5 border border-slate-100/80 space-y-4 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="pb-2 border-b border-slate-200/60">
                          <h4 className="text-xs font-black uppercase tracking-wider text-primary">
                            PTE Home (A1, A2, B1)
                          </h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200/40 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mt-1">
                              <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                              <span className="text-xs font-bold text-slate-700">Monday</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end max-w-md">
                              {["1:15 PM"].map((t) => (
                                <span key={t} className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md px-2 py-0.5 shadow-xs hover:border-primary/30 hover:text-primary hover:bg-red-50/10 transition-all duration-200 cursor-default">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-auto">
                        <p className="text-[12px] flex items-center gap-1.5 bg-white border border-slate-100 rounded-lg p-2.5 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full text-black" />
                          Times may vary slightly based on center capacity and public holidays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {id === "cael" && <CaelInfo />}
              {id === "celpip-general" && <CelpipInfo />}
            </div>
            <div className="flex flex-col items-center gap-6">
              {!["cael", "celpip-general"].includes(id) && (
                <>
                  <Calendar
                    mode="single"
                    selected={selectedDate || undefined}
                    onSelect={(date) => setSelectedDate(date || null)}
                    modifiers={{
                      available: (date) =>
                        (id === "ielts" && date.getDay() === 0) ||
                        (id === "toefl" && [3, 6].includes(date.getDay())) ||
                        (id === "skill-for-english-selt" && [1, 2, 3].includes(date.getDay())) ||
                        (id === "pte" &&
                          [0, 1, 2, 3, 4, 6].includes(date.getDay())),
                    }}
                    modifiersClassNames={{
                      available:
                        "font-semibold text-primary underline underline-offset-4 decoration-primary",
                    }}
                    disabled={(date) => {
                      const isPast =
                        date < new Date(new Date().setHours(0, 0, 0, 0));
                      if (id === "ielts") {
                        return isPast || date.getDay() !== 0;
                      }
                      if (id === "toefl") {
                        return isPast || ![3, 6].includes(date.getDay());
                      }
                      if (id === "skill-for-english-selt") {
                        return isPast || ![1, 2, 3].includes(date.getDay());
                      }
                      if (id === "pte") {
                        return (
                          isPast || ![0, 1, 2, 3, 4, 6].includes(date.getDay())
                        );
                      }
                      return isPast;
                    }}
                    className="w-full max-w-xl mx-auto border rounded-md p-8 bg-white shadow-xl"
                  />
                  <div className="w-full max-w-xl flex flex-col items-center gap-3">
                    <button
                      onClick={handleBookNow}
                      disabled={!selectedDate}
                      className={cn(
                        "w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl",
                        selectedDate
                          ? "bg-primary hover:bg-primary/95 hover:-translate-y-0.5"
                          : "bg-slate-300 cursor-not-allowed opacity-80"
                      )}
                    >
                      Book Now
                      <ArrowRight className="size-4" />
                    </button>
                    {!selectedDate && (
                      <p className="text-xs text-slate-400">
                        * Please select an available date on the calendar to book.
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
