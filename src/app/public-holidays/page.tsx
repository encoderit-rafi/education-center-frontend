"use client";

import React from "react";
import {
  PartyPopper,
  Calendar as CalendarIcon,
  Flag,
  ScrollText,
  Info,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const HOLIDAYS = [
  {
    title: "Eid Al Fitr",
    date: "April (TBC)",
    icon: <PartyPopper className="w-8 h-8" />,
    desc: "Celebrated following the sighting of the moon. All centers and administrative offices will be closed for three consecutive days.",
    impact: "All computer-based exams rescheduled.",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    title: "New Year's Day",
    date: "Jan 01",
    icon: <CalendarIcon className="w-8 h-8" />,
    desc: "Global holiday. Full institutional closure including digital helpdesk and tele-support channels.",
    impact: "Online dashboard remains accessible for booking.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    title: "Flag Day",
    date: "Nov 03",
    icon: <Flag className="w-8 h-8" />,
    desc: "Official working day with adjusted morning ceremony hours. All services commence after the flag raising ceremony.",
    impact: "Morning exam sessions delayed by 2 hours.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    title: "Commemoration Day",
    date: "Nov 30",
    icon: <ScrollText className="w-8 h-8" />,
    desc: "Public holiday to honor the sacrifice of Emirati martyrs. Full institutional closure across all regional venues.",
    impact: "Normal operations resume on Dec 01.",
    color: "bg-slate-50 text-slate-600 border-slate-200",
  },
];

export default function PublicHolidaysPage() {
  const holidayDates = [new Date(2024, 11, 2), new Date(2024, 11, 25)];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* 1. Minimal Header */}
      <header className="bg-white border-b border-gray-100 py-16">
        <div className="container px-6 mx-auto lg:px-24">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-3 block">Academic Calendar</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase leading-none mb-6">
              HOLIDAY <span className="text-[#A11D1D]">SCHEDULE</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              Stay informed about upcoming public holidays and scheduled center closures. Plan your examination journey with clarity and precision.
            </p>
          </div>
        </div>
      </header>

      <main className="container px-6 mx-auto lg:px-24 py-16 space-y-16">

        {/* 2. Calendar View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Quick Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">Upcoming Closures</h2>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-red-50 text-[#A11D1D] rounded-xl flex flex-col items-center justify-center font-black shrink-0">
                  <span className="text-[10px] uppercase">Dec</span>
                  <span className="text-lg leading-none">02</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-wide">National Day</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-tight mt-1">All centers closed</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-xl flex flex-col items-center justify-center font-black shrink-0">
                  <span className="text-[10px] uppercase">Dec</span>
                  <span className="text-lg leading-none">25</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-wide">Winter Break</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-tight mt-1">Maintenance Window</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <div className="flex gap-3 items-start text-xs text-gray-400 font-medium leading-relaxed">
                  <Info className="w-4 h-4 text-[#A11D1D] shrink-0" />
                  <p>Select a highlighted date on the calendar to view specific closure details for our regional hubs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Calendar Component (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-center min-h-[500px]">
              <Calendar
                mode="single"
                month={new Date(2024, 11)}
                modifiers={{
                  holiday: holidayDates,
                }}
                modifiersClassNames={{
                  holiday: "bg-[#A11D1D] text-white hover:bg-[#8A1818] font-bold rounded-md",
                }}
                className="rounded-xl border border-gray-100 shadow-xl border-none [--cell-size:50px]"
              />
            </div>
          </div>
        </div>

        {/* 3. List View Academic Year */}
        <section className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Academic Year 2024-2025</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Official Institutional Holidays</p>
            </div>
            <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOLIDAYS.map((holiday, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-xl transition-colors ${holiday.color}`}>
                    {holiday.icon}
                  </div>
                  <span className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {holiday.date}
                  </span>
                </div>

                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">
                  {holiday.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                  {holiday.desc}
                </p>

                <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <Info className="w-4 h-4 text-[#A11D1D] shrink-0" />
                  <span className="text-[10px] font-black text-[#A11D1D] uppercase tracking-tight">
                    Impact: {holiday.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
