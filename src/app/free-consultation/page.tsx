"use client";

import Image from "next/image";
import FreeConsultationForm from "@/components/blocks/free-consultation-form";
import { cn } from "@/lib/utils";

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      {/* ── Hero Spotlight ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
              Academic Navigation
            </span>
            <h1 className="text-5xl lg:text-7xl font-headline font-black text-secondary tracking-tighter leading-none mb-6">
              Expert Guidance for Your <br />
              <span className="text-primary italic">Academic Journey</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-xl font-light leading-relaxed mb-10">
              Navigate the complexities of global assessments with personalized insights from TEPTH's master consultants. Your success starts with a conversation.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#booking-form" className="px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10">
                Schedule Session
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-lg shadow-secondary/5 border border-outline/5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">timer</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30">Next Available</p>
                  <p className="text-xs font-bold text-secondary">Today, 04:30 PM (GST)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 bg-surface-container-low border border-outline/5">
              <Image
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Expert consultant provide guidance"
                src="/images/about-us/mission-student.png"
                width={600}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 1: Select Track ── */}
      <section className="px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-black text-secondary tracking-tight">Select Your Path</h2>
            <p className="text-on-surface-variant/60 font-medium text-lg">Choose a specialized consultation track to ensure we match you with the right advisor.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Academic Path", desc: "For students focusing on university admissions and language benchmarks.", icon: "school", color: "primary" },
              { title: "Migration Hub", desc: "Guidance for residency exams and immigration language requirements.", icon: "public", color: "secondary" },
              { title: "Professional Suite", desc: "Executive training and corporate language certification strategy.", icon: "business_center", color: "secondary" }
            ].map((track) => (
              <div key={track.title} className="p-10 rounded-[2.5rem] bg-surface-container-low border border-outline/5 hover:border-primary/20 hover:bg-white transition-all group scale-100 hover:scale-[1.02] duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                <div className={cn(
                  "w-16 h-16 rounded-3xl mb-8 flex items-center justify-center transition-all",
                  track.color === "primary" ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-white text-secondary shadow-lg"
                )}>
                  <span className="material-symbols-outlined text-3xl font-light">{track.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-black text-secondary mb-4 group-hover:text-primary transition-colors">{track.title}</h3>
                <p className="text-sm text-on-surface-variant/60 leading-relaxed font-medium mb-8">{track.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Select Track <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section id="booking-form" className="px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-secondary/5 border border-outline/5">
            <div className="text-center mb-16 space-y-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Reservation</span>
              <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">Confirm Your Session</h2>
            </div>
            <FreeConsultationForm />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">
              *Our consultations are strictly advisory. Final decisions remain with the candidate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
