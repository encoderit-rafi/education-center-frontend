"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  PartyPopper,
  Calendar,
  Flag,
  ScrollText,
  Info,
  ChevronRight as ArrowRight,
} from "lucide-react";
import NavBar from "@/components/blocks/nav-bar";

export default function PublicHolidaysPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center overflow-hidden bg-[#141b2b]">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1ZQLLFrTmCR-RXs1MFPVnHwDKD6FDVcNoxcciexheM04bFekCpmNvVoN4Ohz66489jfCaxZn6cH877oVihjWQGA-buN5Y8jGm507gz8BmZfYa56qYPk4l6C-2cWqGAbxyq1v9v8ZWLggx4BJOl9kb7sBmqlJgCQb5PmkxrtEdeFYxxJxEsm1T8r50vJiQlp4OI8W1el3Wip84dDtRf875dNI5gCsnTCOkgke_urjk_Xqn5OpU9IeY5r5AK4YLrsdtpKgnukdx303"
            alt="Holiday Planner"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141b2b] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-12 w-full lg:px-24">
          <div className="max-w-2xl">
            <span className="text-[#ffb4ac] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Academic Calendar
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight font-headline mb-6 leading-tight">
              Holiday Schedule & <br />
              <span className="text-[#ffb4ac]">Center Closures</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Stay informed about upcoming public holidays and scheduled center
              maintenance. Plan your examination journey with clarity and
              precision across all our regional venues.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Interactive Calendar View */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/5">
            <h2 className="text-3xl font-extrabold text-[#261817] mb-6 font-headline tracking-tight">
              Upcoming Closures
            </h2>
            <p className="text-[#59413e] mb-10 leading-relaxed text-lg font-medium opacity-80">
              Select a highlighted date on the calendar to view specific closure
              details for our regional hubs and administrative centers.
            </p>

            <div className="space-y-6">
              <div className="bg-[#fce2df] p-8 rounded-2xl flex gap-6 items-center border-l-[6px] border-[#760009] shadow-sm transform transition-transform hover:scale-[1.02]">
                <div className="bg-[#760009] text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    Dec
                  </span>
                  <span className="text-xl font-black leading-none">02</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#261817] text-lg uppercase tracking-tight">
                    National Day
                  </h4>
                  <p className="text-sm text-[#59413e] font-medium opacity-80 mt-1 uppercase tracking-tight">
                    All centers closed. Online support active.
                  </p>
                </div>
              </div>

              <div className="bg-[#ffe9e6] p-8 rounded-2xl flex gap-6 items-center border-l-[6px] border-[#575e70] shadow-sm transform transition-transform hover:scale-[1.02]">
                <div className="bg-[#575e70] text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    Dec
                  </span>
                  <span className="text-xl font-black leading-none">25</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#261817] text-lg uppercase tracking-tight">
                    Winter Break
                  </h4>
                  <p className="text-sm text-[#59413e] font-medium opacity-80 mt-1 uppercase tracking-tight">
                    Maintenance window at Sharjah Hub.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#e1bfbb]/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#760009]/5 blur-3xl -mr-16 -mt-16" />

              <div className="flex justify-between items-center mb-10 relative z-10">
                <h3 className="text-2xl font-black text-[#261817] tracking-tight uppercase">
                  December 2024
                </h3>
                <div className="flex gap-3">
                  <button className="p-3 hover:bg-[#ffe9e6] bg-[#fff8f7] rounded-xl transition-all border border-[#e1bfbb]/20 shadow-sm active:scale-95">
                    <ChevronLeft className="w-5 h-5 text-[#760009]" />
                  </button>
                  <button className="p-3 hover:bg-[#ffe9e6] bg-[#fff8f7] rounded-xl transition-all border border-[#e1bfbb]/20 shadow-sm active:scale-95">
                    <ChevronRight className="w-5 h-5 text-[#760009]" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-3 text-center mb-6 relative z-10">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-[10px] font-black text-[#8d706d] uppercase tracking-[0.2em] py-2"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              <div className="grid grid-cols-7 gap-3 relative z-10">
                {[30, 31].map((d) => (
                  <div
                    key={d}
                    className="h-28 p-3 text-slate-300 font-bold border border-transparent flex items-start justify-end"
                  >
                    {d}
                  </div>
                ))}
                {[...Array(28)].map((_, i) => {
                  const day = i + 1;
                  const isHoliday = day === 2;
                  const isClosed = day === 25;

                  return (
                    <div
                      key={day}
                      className={`h-28 p-3 rounded-2xl flex flex-col justify-between transition-all border ${
                        isHoliday
                          ? "bg-[#760009] text-white shadow-xl shadow-[#760009]/20 border-transparent scale-105 z-20 hover:rotate-1"
                          : isClosed
                            ? "bg-[#ffe9e6] text-[#760009] border-[#760009]/20 hover:shadow-md"
                            : "bg-[#fff8f7] text-[#261817] border-[#e1bfbb]/30 hover:shadow-md hover:border-[#760009]/30 hover:-translate-y-1"
                      }`}
                    >
                      <span
                        className={`text-lg font-black ${isHoliday ? "text-white" : "text-[#261817]"}`}
                      >
                        {day}
                      </span>
                      {isHoliday && (
                        <span className="text-[8px] font-black uppercase tracking-[0.1em] leading-tight">
                          National <br /> Day
                        </span>
                      )}
                      {isClosed && (
                        <span className="text-[9px] font-black uppercase tracking-[0.1em] text-[#760009]">
                          Closed
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: List View Academic Year */}
      <section className="py-32 bg-[#fff0ef]">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="text-center mb-20">
            <span className="text-[#760009] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Official Calendar
            </span>
            <h2 className="text-5xl font-black text-[#261817] mb-6 font-headline tracking-tight uppercase leading-none">
              Academic Year 2024-2025
            </h2>
            <div className="w-24 h-1.5 bg-[#760009] mx-auto rounded-full mb-8"></div>
            <p className="text-[#59413e] max-w-3xl mx-auto text-xl font-medium leading-relaxed opacity-80">
              Detailed breakdown of institutional holidays and their specific
              impact on academic deliverables and examination sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Holiday Items */}
            {[
              {
                title: "Eid Al Fitr",
                date: "April (TBC)",
                icon: <PartyPopper className="w-10 h-10" />,
                desc: "Celebrated following the sighting of the moon. All centers and administrative offices will be closed for three consecutive days.",
                impact: "All computer-based exams rescheduled.",
              },
              {
                title: "New Year's Day",
                date: "Jan 01",
                icon: <Calendar className="w-10 h-10" />,
                desc: "Global holiday. Full institutional closure including digital helpdesk and tele-support channels.",
                impact: "Online dashboard remains accessible for booking.",
              },
              {
                title: "Flag Day",
                date: "Nov 03",
                icon: <Flag className="w-10 h-10" />,
                desc: "Official working day with adjusted morning ceremony hours. All services commence after the flag raising ceremony.",
                impact: "Morning exam sessions delayed by 2 hours.",
              },
              {
                title: "Commemoration Day",
                date: "Nov 30",
                icon: <ScrollText className="w-10 h-10" />,
                desc: "Public holiday to honor the sacrifice of Emirati martyrs. Full institutional closure across all regional venues.",
                impact: "Normal operations resume on Dec 01.",
              },
            ].map((holiday, idx) => (
              <div
                key={idx}
                className="bg-white p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_20px_60px_-15px_rgba(118,0,9,0.15)] transition-all duration-500 group border border-[#e1bfbb]/20"
              >
                <div className="bg-[#fff8f7] text-[#760009] p-5 rounded-2xl group-hover:bg-[#760009] group-hover:text-white transition-colors duration-500 shadow-sm">
                  {holiday.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-[#261817] tracking-tight uppercase">
                      {holiday.title}
                    </h3>
                    <span className="bg-[#dce2f7] text-[#404758] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {holiday.date}
                    </span>
                  </div>
                  <p className="text-[#59413e] leading-relaxed mb-6 font-medium opacity-80 text-sm">
                    {holiday.desc}
                  </p>
                  <div className="flex gap-4 items-center p-5 bg-[#fff0ef] rounded-2xl border border-[#760009]/10">
                    <Info className="w-5 h-5 text-[#760009] shrink-0" />
                    <span className="text-[11px] font-black text-[#760009] uppercase tracking-tight leading-tight">
                      {holiday.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
