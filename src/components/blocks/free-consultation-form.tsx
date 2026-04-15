"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const CONTEXTS = [
  { id: "academic", label: "Academic Guidance", icon: "school" },
  { id: "professional", label: "Career Strategy", icon: "business_center" },
  { id: "migration", label: "Visa & Migration", icon: "public" },
];

export default function FreeConsultationForm() {
  const [step, setStep] = useState(1);
  const [selectedContext, setSelectedContext] = useState(CONTEXTS[0].id);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-8 py-10 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl text-emerald-600 font-bold">event_available</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-secondary tracking-tight">Session Conforded</h2>
          <p className="text-on-surface-variant/70 text-lg leading-relaxed font-medium max-w-lg mx-auto">
            Your Discovery Session is booked. A personalized calendar invite with the meeting link has been sent to your inbox.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-16">
      
      {/* 1. Track Selection */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">Step 01</span>
          <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">Select Context</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {CONTEXTS.map((ctx) => (
            <div
              key={ctx.id}
              onClick={() => setSelectedContext(ctx.id)}
              className={cn(
                "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group flex items-center gap-4",
                selectedContext === ctx.id 
                  ? "border-primary bg-white shadow-xl shadow-primary/5" 
                  : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                selectedContext === ctx.id ? "bg-primary text-white" : "bg-primary/5 text-primary"
              )}>
                <span className="material-symbols-outlined text-xl">{ctx.icon}</span>
              </div>
              <span className={cn(
                "text-sm font-bold transition-colors",
                selectedContext === ctx.id ? "text-secondary" : "text-secondary/40"
              )}>{ctx.label}</span>
              {selectedContext === ctx.id && (
                <div className="ml-auto w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white scale-110">
                  <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Personal & Schedule */}
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">Step 02</span>
            <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">Lead Profiles</h4>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Full Name</label>
              <input required type="text" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="Candidate Name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Email Address</label>
              <input required type="email" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="email@example.com" />
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">Step 03</span>
            <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">Availability</h4>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Preferred Date</label>
              <div className="grid grid-cols-2 gap-3">
                {["Oct 24, 2024", "Oct 25, 2024"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={cn(
                      "py-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedDate === d ? "border-primary bg-white text-secondary scale-105 shadow-md" : "border-outline/5 bg-surface-container-low text-secondary/30"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Time (GST)</label>
              <div className="grid grid-cols-2 gap-3">
                {["09:00 AM", "02:00 PM"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={cn(
                      "py-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedTime === t ? "border-primary bg-white text-secondary scale-105 shadow-md" : "border-outline/5 bg-surface-container-low text-secondary/30"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-outline/5">
        <button 
          type="submit"
          className="w-full py-5 bg-secondary text-white font-headline font-black text-sm uppercase tracking-[0.2em] rounded-[2rem] hover:bg-primary transition-all shadow-2xl shadow-secondary/10 active:scale-[0.98]"
        >
          Confirm Discovery Session
        </button>
      </div>

    </form>
  );
}
