import React from "react";
import Link from "next/link";
import exam_workshops from "@/lib/demo-data/exam-workshops";
import { Clock, CalendarDays, MapPin, Check, ArrowRight } from "lucide-react";

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
            Each workshop is designed around the specific format and scoring criteria of its exam. Delivered by certified instructors with deep exam experience.
          </p>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-full opacity-5 blur-3xl bg-secondary/20 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* ── Workshops Grid ── */}
      <section className="px-8 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {exam_workshops.map((workshop) => (
              <div 
                key={workshop.id} 
                className="group relative bg-white rounded-[2rem] p-8 border border-outline/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {workshop.category}
                    </p>
                    <h3 className="text-2xl font-headline font-black text-secondary leading-tight">
                      {workshop.title}
                    </h3>
                  </div>
                  <span className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-widest font-black ${workshop.badgeStyle}`}>
                    {workshop.badgeText}
                  </span>
                </div>

                {/* Specs */}
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {workshop.durationStr}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {workshop.hoursStr}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {workshop.formatStr}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-10 space-y-3 flex-1">
                  {workshop.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer CTA */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <Link 
                    href={`/exam-workshops/${workshop.id}`}
                    className="flex w-full items-center justify-between bg-secondary text-white px-6 py-4 rounded-xl font-headline font-black text-xs uppercase tracking-widest transition-all hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
