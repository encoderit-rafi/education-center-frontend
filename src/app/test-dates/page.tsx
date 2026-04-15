"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TEST_SCHEDULE, VENUES, EXAMS } from "@/lib/exams-data";
import Link from "next/link";

export default function TestDatesPage() {
  const [filter, setFilter] = useState("All");

  const filteredSchedule = TEST_SCHEDULE.filter(
    (slot) => filter === "All" || slot.category === filter
  );

  return (
    <main className="min-h-screen bg-background pt-32 pb-32">
      {/* ── Hero Section ── */}
      <section className="px-8 pb-16">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Planning Your Success
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter leading-none">
            Upcoming Test <br />
            <span className="text-primary italic">Schedule</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed font-light">
            Secure your seat for international certifications in Abu Dhabi and Dubai. View real-time availability and technical formats.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {["All", "IELTS", "PTE", "OET"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-3 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all",
                filter === cat
                  ? "bg-secondary text-white shadow-xl shadow-secondary/20 scale-105"
                  : "bg-surface-container-low text-secondary/40 hover:bg-white hover:text-secondary border border-transparent hover:border-outline/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Schedule Grid ── */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-secondary/5 border border-outline/5 transition-all">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 p-8 bg-secondary/[0.02] border-b border-outline/5 text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">
              <div className="col-span-2">Examination</div>
              <div>Date & Time</div>
              <div>Venue</div>
              <div>Status</div>
              <div className="text-right">Action</div>
            </div>

            <div className="divide-y divide-outline/5">
              {filteredSchedule.map((slot) => {
                const exam = EXAMS.find(e => e.id === slot.examId);
                const venue = VENUES.find(v => v.id === slot.venueId);

                return (
                  <div key={slot.id} className="grid md:grid-cols-6 gap-6 md:gap-4 p-8 items-center group hover:bg-surface-container-lowest transition-colors">
                    {/* Exam Column */}
                    <div className="md:col-span-2 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{exam?.icon || "quiz"}</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-secondary text-base leading-tight group-hover:text-primary transition-colors">{exam?.title}</h4>
                        <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest mt-1">{slot.category}</p>
                      </div>
                    </div>

                    {/* DateTime Column */}
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-secondary">{slot.date}</span>
                      <span className="text-[10px] font-bold text-secondary/30 uppercase tracking-widest">{slot.time}</span>
                    </div>

                    {/* Venue Column */}
                    <div>
                      <span className="text-sm font-bold text-secondary">{venue?.name}</span>
                    </div>

                    {/* Status Column */}
                    <div>
                      <span className={cn(
                        "text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest",
                        slot.status === "Open" ? "bg-emerald-50 text-emerald-700" :
                        slot.status === "Filling Fast" ? "bg-amber-50 text-amber-700" :
                        "bg-slate-100 text-slate-400"
                      )}>
                        {slot.status}
                      </span>
                    </div>

                    {/* Action Column */}
                    <div className="text-right">
                      <Link
                        href={slot.status === "Closed" ? "#" : `/book-a-test?exam=${slot.examId}`}
                        className={cn(
                          "inline-block px-6 py-3 rounded-xl font-headline font-bold text-[10px] uppercase tracking-widest transition-all",
                          slot.status === "Closed"
                            ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                            : "bg-surface-container-low text-secondary hover:bg-primary hover:text-white shadow-sm"
                        )}
                      >
                        {slot.status === "Closed" ? "Unavailable" : "Book This Seat"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredSchedule.length === 0 && (
              <div className="p-20 text-center space-y-4">
                <span className="material-symbols-outlined text-5xl text-secondary/10">calendar_today</span>
                <p className="text-secondary/40 font-bold uppercase tracking-widest text-xs">No sessions found for this category</p>
              </div>
            )}
          </div>

          <div className="mt-16 bg-secondary rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-headline font-black mb-4 tracking-tight leading-none">Can't find your <br />preferred date?</h3>
                <p className="text-white/60 font-light text-lg">Contact our testing coordination team for bulk bookings or specialized session requests.</p>
              </div>
              <Link href="/contact-us" className="px-12 py-5 bg-primary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-secondary transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
