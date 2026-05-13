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
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block">
              SCHEDULE & AVAILABILITY
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tighter leading-none">
              {examMetadata.name}{" "}
              <span className="text-primary italic">Test Dates</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl">
              {examMetadata.description}
            </p>

            {id === "ielts" && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 max-w-xl">
                <p className="text-sm font-bold text-secondary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Testing occurs every Sunday
                </p>
                <p className="text-xs text-slate-500 mt-1 ml-4">
                  All Sundays are available for testing (public holidays falling
                  on Sundays will be deactivated separately).
                </p>
              </div>
            )}
          </div>
          <Calendar
            modifiers={{
              available: (date) => id === "ielts" && date.getDay() === 0,
            }}
            modifiersClassNames={{
              available: "font-semibold text-primary underline underline-offset-4 decoration-primary",
            }}
            disabled={(date) => {
              const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
              if (id === "ielts") {
                return isPast || date.getDay() !== 0;
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
