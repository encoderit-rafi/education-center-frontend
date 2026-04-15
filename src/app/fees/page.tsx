"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FeesPage() {
  return (
    <main className="font-sans selection:bg-red-100 selection:text-red-900">
      {/* ── Hero Section: Editorial Focus ── */}
      <header className="relative min-h-[550px] flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="serene high-end university library interior"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_EzxdZD7VmTxWnhgG2Yz5hd6MU9511vqitJUoW9as32exQWE5gzjhVclGF5ma3IAUdA8Lx8rn6Oc5x5p1UQ3DepGWfaswTkiPdhOWDADqI0iZFmwUOKBy6mpQr3TyutmvcCpEFVfuKPZxretF51mt3qyB6xuKwrmvL2vZKc3kTzAqGlaPsX2cIp9g-B9YgeZ6hQdxp6Ii3PEnCF08bATWxZWkA2wUnXC91IlCH__aTZYTNlWm-nkP2lIwLboqWAVtIYmFKEOdGtP"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-[#991B1B] uppercase tracking-[0.3em] font-extrabold text-[10px] mb-6 block">
              Invest in Your Future
            </span>
            <h1 className="text-white text-6xl md:text-7xl font-headline font-black tracking-tight mb-8 leading-[1.05]">
              Academic Investment & <br />
              <span className="text-[#991B1B] italic">Exam Fees</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">
              Transparent pricing for world-class certifications. TEPTH provides a streamlined pathway to your global academic and professional ambitions.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link
                href="#major-exams"
                className="bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] text-white px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-wide shadow-[0_20px_40px_rgba(153,27,27,0.3)] transition-all hover:translate-y-[-2px] hover:opacity-90 active:scale-95"
              >
                View Exam Categories
              </Link>
              <Link
                href="#"
                className="text-white flex items-center gap-3 font-headline font-bold text-sm hover:translate-x-2 transition-transform"
              >
                Download Fee Catalog
                <span className="material-symbols-outlined text-xl">download</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Major Exams Bento Grid ── */}
      <section className="py-32 bg-[#F9FAFB] px-8" id="major-exams">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
              International Examinations
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto text-lg leading-relaxed">
              Standardized testing accepted by thousands of institutions worldwide. Choose the format that fits your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* IELTS Card */}
            <div className="bg-white p-10 rounded-[2rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-[#991B1B]/5 border border-[#E5E7EB]/50">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#991B1B] font-black text-xs uppercase tracking-[0.2em]">IELTS</span>
                  <span className="text-[#991B1B] material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <h3 className="text-2xl font-headline font-black text-[#111827] mb-3 leading-tight">
                  British Council IELTS
                </h3>
                <p className="text-[#4B5563] text-sm mb-8 leading-relaxed">
                  Academic and General Training modules available for study or migration.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Official Test Report Form (TRF)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Practice materials included
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Secure testing environment
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-headline font-black text-[#111827]">AED 1,150</span>
                  <span className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Incl. VAT</span>
                </div>
                <Link
                  href="/book-a-test"
                  className="block w-full text-center bg-[#F3F4F6] text-[#111827] py-4 rounded-2xl font-headline font-bold text-sm group-hover:bg-[#991B1B] group-hover:text-white transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* OET Card (High-Impact Featured) */}
            <div className="bg-[#111827] p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group border border-[#111827] shadow-2xl">
              <div className="absolute top-0 right-0 p-6">
                <span className="bg-[#991B1B] text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Professional Choice
                </span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#991B1B] font-black text-xs uppercase tracking-[0.2em]">OET</span>
                  <span className="text-[#991B1B] material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <h3 className="text-3xl font-headline font-black text-white mb-4 leading-[1.1]">
                  Occupational <br />English Test
                </h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-[240px]">
                  Specialized for healthcare professionals across 12 disciplines.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Profession-specific sub-tests
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    World-wide clinical recognition
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Fast-track results processing
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-headline font-black text-white tracking-tighter">AED 1,650</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Incl. VAT</span>
                </div>
                <Link
                  href="/book-a-test"
                  className="block w-full text-center bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] text-white py-5 rounded-2xl font-headline font-bold text-sm tracking-wide shadow-[0_20px_40px_rgba(153,27,27,0.4)] hover:scale-[1.02] transition-all"
                >
                  Book Priority Slot
                </Link>
              </div>
            </div>

            {/* PTE Card */}
            <div className="bg-white p-10 rounded-[2rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-[#991B1B]/5 border border-[#E5E7EB]/50">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#991B1B] font-black text-xs uppercase tracking-[0.2em]">PTE Academic</span>
                  <span className="text-[#991B1B] material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>computer</span>
                </div>
                <h3 className="text-2xl font-headline font-black text-[#111827] mb-3 leading-tight">
                  Pearson PTE Academic
                </h3>
                <p className="text-[#4B5563] text-sm mb-8 leading-relaxed">
                  AI-powered English testing for study and migration with rapid turnaround.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Results typically in 48 hours
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Flexible booking slots
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#4B5563] font-medium">
                    <span className="material-symbols-outlined text-[#991B1B] text-xl">check_circle</span>
                    Unlimited score reports
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-headline font-black text-[#111827]">AED 980</span>
                  <span className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Incl. VAT</span>
                </div>
                <Link
                  href="/book-a-test"
                  className="block w-full text-center bg-[#F3F4F6] text-[#111827] py-4 rounded-2xl font-headline font-bold text-sm group-hover:bg-[#991B1B] group-hover:text-white transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional & Prep Layout ── */}
      <section className="py-32 bg-[#F3F4F6] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Certifications column */}
            <div className="space-y-12">
              <div className="space-y-2">
                <span className="text-[#991B1B] text-[10px] font-black uppercase tracking-[0.3em]">Credentials</span>
                <h2 className="text-[#111827] text-3xl md:text-4xl font-headline font-black tracking-tight">
                  Professional Certifications
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  { name: "TESOL Professional Course", type: "Teacher training & certification", price: "4,500" },
                  { name: "HR Professional Certification", type: "Associate level certification", price: "2,800" },
                  { name: "Digital Marketing Associate", type: "Practical workshop & exam", price: "1,950" },
                ].map((item) => (
                  <div key={item.name} className="bg-white p-8 rounded-3xl flex justify-between items-center group hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]/50">
                    <div className="space-y-1">
                      <h4 className="font-headline font-black text-[#111827] text-lg leading-tight transition-colors group-hover:text-[#991B1B]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#4B5563] font-medium tracking-wide">
                        {item.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-headline font-black text-[#991B1B]">AED {item.price}</span>
                      <span className="text-[8px] font-bold text-[#4B5563] uppercase tracking-widest">Tuition & Exam</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prep column */}
            <div className="space-y-12">
              <div className="space-y-2">
                <span className="text-[#991B1B] text-[10px] font-black uppercase tracking-[0.3em]">Excellence</span>
                <h2 className="text-[#111827] text-3xl md:text-4xl font-headline font-black tracking-tight">
                  Preparation Courses
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  { name: "IELTS Intensive (2 Weeks)", type: "Includes 2 official mock tests", price: "1,200", featured: true },
                  { name: "OET Premium Prep", type: "Expert tutoring for doctors/nurses", price: "1,850", featured: false },
                  { name: "PTE Essential Skills", type: "Platform access + 10 hours live", price: "950", featured: false },
                ].map((item) => (
                  <div 
                    key={item.name} 
                    className={cn(
                      "bg-white p-8 rounded-3xl flex justify-between items-center transition-all duration-300 border border-[#E5E7EB]/50 hover:shadow-xl",
                      item.featured ? "border-l-8 border-l-[#991B1B] shadow-lg shadow-[#991B1B]/5" : ""
                    )}
                  >
                    <div className="space-y-1">
                      <h4 className="font-headline font-black text-[#111827] text-lg leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#4B5563] font-medium tracking-wide">
                        {item.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-headline font-black text-[#912d2d]">AED {item.price}</span>
                      <span className="text-[8px] font-bold text-[#4B5563] uppercase tracking-widest">Course Fee</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Administrative Fees Grid ── */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-5xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-4xl font-headline font-black text-[#111827] tracking-tight">
            Administrative Services & Fees
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-lg">
            Customized support for your unique academic requirements and logistical flexibility.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Rescheduling", icon: "history", desc: "Transfer your test date to a later period.", fee: "250" },
            { label: "Extra TRF Copy", icon: "verified", desc: "Official physical copies for universities.", fee: "100", suffix: "/copy" },
            { label: "Priority Courier", icon: "local_shipping", desc: "Expedited international delivery of results.", fee: "150" },
            { label: "Enquiry on Results", icon: "quiz", desc: "Formal remarking of your examination.", fee: "480" },
          ].map((item) => (
            <div key={item.label} className="p-10 bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB]/40 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] group">
              <span className="material-symbols-outlined text-[#991B1B] mb-8 text-4xl block transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <h5 className="font-headline font-black text-[#111827] text-lg mb-3 tracking-tight">{item.label}</h5>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-10 h-10 line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-headline font-black text-[#111827]">AED {item.fee}</span>
                {item.suffix && <span className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest">{item.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final Crimson Conversion Banner ── */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative min-h-[450px] flex items-center bg-[#991B1B] shadow-[0_40px_80px_rgba(153,27,27,0.4)]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-overlay rotate-12 scale-125"
              alt="crimson cardstock pattern"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAyA_531Jx4MrPPjMz7csLMMUe8KoIt9fi5SxMp-xGuZWDY7aYje8jL45mEUn6Clyw6Zd5YrwMBOyPh1-o5Ystsv_OewvpIgtWEwE1qa0toW20kROCU2ETxYQ91LOa1jSdxfUOCwh9_y7kFSx_V69GifcOl6VdptdIDRpXEA2tPLKiy2Iyt9cSbLVGyi3DbNWujE44wR0lXWKpRSf4e0PYmFwcPlRAUw7DBU4Vxwl9v3KIB2guQjk2z4rbLgER8Akp96eklZJoThyB"
            />
          </div>
          <div className="relative z-10 w-full p-16 md:p-24 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="max-w-xl space-y-6 text-center md:text-left">
              <h2 className="text-white text-5xl md:text-6xl font-headline font-black tracking-tight leading-none">
                Ready to start <br />your journey?
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                Our academic counselors are available to guide you through the selection and booking process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <Link
                href="/book-a-test"
                className="bg-white text-[#991B1B] px-12 py-6 rounded-2xl font-headline font-black text-sm tracking-widest uppercase shadow-2xl hover:scale-105 transition-all text-center"
              >
                Book Your Seat
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-headline font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all text-center"
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
