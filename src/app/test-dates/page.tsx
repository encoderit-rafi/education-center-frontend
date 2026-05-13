"use client";

import Link from "next/link";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardArrow,
} from "@/components/blocks/cards/base-card";
import { TEST_DATES_CARDS_DATA } from "@/data";

export default function TestDatesPage() {
  return (
    <main className="bg-white">
      {/* ── Header ── */}
      <section className="pt-32 pb-16 px-8 bg-[#F9FAFB]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tighter leading-none">
              Test <span className="text-primary italic">Dates</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Choose an exam to view upcoming available sessions, venues, and
              technical formats across our testing centers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Exam Grid ── */}
      <section className="py-24 px-8 bg-[#F9FAFB] border-t border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEST_DATES_CARDS_DATA.map((exam, index) => (
              <Link key={exam.id} href={`/test-dates/${exam.id}`}>
                <BaseCard className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <BaseCardIcon>{index + 1}</BaseCardIcon>
                    <BaseCardArrow />
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                      {exam.name}
                    </BaseCardTitle>
                    <BaseCardDescription className="mb-4">
                      {exam.description}
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
