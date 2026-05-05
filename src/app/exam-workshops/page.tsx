import React from "react";
import Link from "next/link";
import exam_workshops from "@/lib/demo-data/exam-workshops";
import { Clock, CalendarDays, MapPin, Check, ArrowRight } from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

export default function ExamWorkshopsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* ── Hero Section ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Available Workshops
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter leading-none">
            Choose Your <br />
            <span className="text-primary italic">Workshop</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Each workshop is designed around the specific format and scoring
            criteria of its exam. Delivered by certified instructors with deep
            exam experience.
          </p>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-full opacity-5 blur-3xl bg-secondary/20 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* ── Workshops Grid ── */}
      <section className="px-8 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {exam_workshops.map((workshop) => (
              <Link key={workshop.id} href={`/exam-workshops/${workshop.id}`}>
                {/* Header */}
                <BaseCard className="p-5">
                  <BaseCardTitle>{workshop.title}</BaseCardTitle>
                  <BaseCardDescription>
                    {workshop.short_description}
                  </BaseCardDescription>
                </BaseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
