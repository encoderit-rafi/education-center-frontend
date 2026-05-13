"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { TEST_DATES_CARDS_DATA } from "@/data";
import { ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function TestDatesDetailPage() {
  const params = useParams();
  const id = params.id as string;

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
      <section className="pt-32 pb-16 px-8 bg-[#F9FAFB]">
        <div className="section-container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tighter leading-none">
              {examMetadata.name}{" "}
              <span className="text-primary italic">Test Dates</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl">
              {examMetadata.description}
            </p>

            {id === "ielts" && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 max-w-xl">
                <div className="text-sm font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Testing occurs every Sunday
                </div>
                <p className="text-xs text-slate-500 mt-1 ml-4">
                  All Sundays are available for testing (public holidays falling
                  on Sundays will be deactivated separately).
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Available Time Slots
                  </p>
                  <p className="text-sm font-bold text-secondary mt-1 ml-4">
                    Morning Session (AM)
                  </p>
                </div>
              </div>
            )}
            {id === "toefl" && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 max-w-xl">
                <div className="text-sm font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Testing occurs every Wednesday
                </div>
                <p className="text-xs text-slate-500 mt-1 ml-4">
                  All Wednesdays are available for testing dates that do not
                  participate will be deactivated separately.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Available Time Slots
                  </p>
                  <p className="text-sm font-bold text-secondary mt-1 ml-4">
                    AM / PM Sessions
                  </p>
                </div>
              </div>
            )}
            {id === "selt" && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 max-w-xl">
                <div className="text-sm font-bold text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Testing occurs Mon, Tue & Wed
                </div>
                <p className="text-xs text-slate-500 mt-1 ml-4">
                  Secure your seat for upcoming SELT sessions available every
                  Monday, Tuesday, and Wednesday.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Available Time Slots
                  </p>
                  <p className="text-sm font-bold text-secondary mt-1 ml-4">
                    10:00 AM, 01:30 PM, 05:30 PM
                  </p>
                </div>
              </div>
            )}
            {id === "pte" && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 max-w-4xl">
                <div className="text-sm font-bold text-secondary flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  PTE Weekly Schedule
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">
                      PTE Academic / Core / UKVI
                    </h4>
                    <ul className="text-xs space-y-2 text-slate-600">
                      <li className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="font-bold">Sat, Tue, Wed</span>
                        <span>10:00 AM, 12:45 PM, 3:30 PM, 6:15 PM</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="font-bold">Sunday</span>
                        <span>6:15 PM</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="font-bold">Monday</span>
                        <span>10:00 AM, 1:00 PM, 3:30 PM, 6:15 PM</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="font-bold">Thursday</span>
                        <span>3:30 PM, 6:15 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">
                      PTE Home (A1, A2, B1)
                    </h4>
                    <ul className="text-xs space-y-2 text-slate-600">
                      <li className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="font-bold">Monday</span>
                        <span>1:15 PM</span>
                      </li>
                    </ul>
                    <p className="text-[10px] text-slate-400 italic mt-4">
                      * Times may vary slightly based on center capacity and
                      public holidays.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Calendar
            modifiers={{
              available: (date) =>
                (id === "ielts" && date.getDay() === 0) ||
                (id === "toefl" && date.getDay() === 3) ||
                (id === "selt" && [1, 2, 3].includes(date.getDay())) ||
                (id === "pte" && [0, 1, 2, 3, 4, 6].includes(date.getDay())),
            }}
            modifiersClassNames={{
              available:
                "font-semibold text-primary underline underline-offset-4 decoration-primary",
            }}
            disabled={(date) => {
              const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
              if (id === "ielts") {
                return isPast || date.getDay() !== 0;
              }
              if (id === "toefl") {
                return isPast || date.getDay() !== 3;
              }
              if (id === "selt") {
                return isPast || ![1, 2, 3].includes(date.getDay());
              }
              if (id === "pte") {
                return isPast || ![0, 1, 2, 3, 4, 6].includes(date.getDay());
              }
              return isPast;
            }}
            className="w-full max-w-xl mx-auto mt-8 border rounded-3xl p-8 bg-white shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}
