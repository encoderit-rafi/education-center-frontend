"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { EXAMS, VENUES, Exam } from "@/lib/exams-data";

export default function BookATestPage() {
  const [step, setStep] = useState(1);
  const [selectedExamId, setSelectedExamId] = useState<string>(EXAMS[0].id);
  const [selectedVenueId, setSelectedVenueId] = useState<string>(VENUES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>("Oct 24, 2024");

  const selectedExam = EXAMS.find((e) => e.id === selectedExamId);
  const selectedVenue = VENUES.find((v) => v.id === selectedVenueId);

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      {/* ── Hero Spotlight ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
            International Standards
          </span>
          <h1 className="text-5xl lg:text-7xl font-headline font-black text-secondary tracking-tighter leading-none mb-6">
            Global Testing <br />
            <span className="text-primary italic">Registration</span>
          </h1>
          <p className="text-lg text-on-surface-variant/70 max-w-xl font-light leading-relaxed">
            Standardized examination services for study, migration, and professional registration. Select your category and secure your seat in just a few minutes.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 blur-3xl bg-primary/20 -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      <section className="px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content: Registration Steps */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-secondary/30">
                <span className={cn("transition-colors", step >= 1 && "text-primary")}>01 Selection</span>
                <span className="w-8 h-[1px] bg-outline/20" />
                <span className={cn("transition-colors", step >= 2 && "text-primary")}>02 Session</span>
                <span className="w-8 h-[1px] bg-outline/20" />
                <span className={cn("transition-colors", step >= 3 && "text-primary")}>03 Details</span>
              </div>

              {/* Step 1: Exam Selection */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl font-headline font-black text-secondary mb-10 tracking-tight">Select Test Category</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {EXAMS.map((exam) => (
                      <div
                        key={exam.id}
                        onClick={() => setSelectedExamId(exam.id)}
                        className={cn(
                          "p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 relative group",
                          selectedExamId === exam.id 
                            ? "border-primary bg-white shadow-2xl shadow-primary/5" 
                            : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white"
                        )}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                            selectedExamId === exam.id ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary"
                          )}>
                            <span className="material-symbols-outlined">{exam.icon}</span>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary/30">{exam.category}</span>
                        </div>
                        <h3 className="text-xl font-headline font-black text-secondary mb-2 group-hover:text-primary transition-colors">{exam.title}</h3>
                        <p className="text-xs text-on-surface-variant/60 leading-relaxed font-medium mb-6">{exam.description}</p>
                        
                        <div className="flex gap-2 flex-wrap mb-4">
                          {exam.modules.slice(0, 3).map(m => (
                            <span key={m} className="px-3 py-1 bg-surface-container-high rounded-full text-[9px] font-bold text-secondary/60 uppercase tracking-widest leading-none flex items-center">{m}</span>
                          ))}
                        </div>

                        {selectedExamId === exam.id && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white text-white shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="mt-12 px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
                  >
                    Select & Continue
                  </button>
                </div>
              )}

              {/* Step 2: Session Selection */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-4 mb-10">
                    <button onClick={() => setStep(1)} className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all">
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                    </button>
                    <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">Session & Venue</h2>
                  </div>

                  <div className="space-y-12">
                    {/* Venue Grid */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Choose Venue</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {VENUES.map(venue => (
                          <div
                            key={venue.id}
                            onClick={() => setSelectedVenueId(venue.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                              selectedVenueId === venue.id ? "border-primary bg-white shadow-lg shadow-primary/5" : "border-outline/5 bg-surface-container-low"
                            )}
                          >
                            <h4 className="font-bold text-secondary text-base mb-1">{venue.name}</h4>
                            <p className="text-[10px] text-secondary/40 font-medium uppercase tracking-widest">{venue.address}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Grid (Static Example) */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Available Dates</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {["Oct 24, 2024", "Oct 26, 2024", "Nov 02, 2024", "Nov 15, 2024"].map(d => (
                          <div
                            key={d}
                            onClick={() => setSelectedDate(d)}
                            className={cn(
                              "p-4 rounded-xl border-2 text-center cursor-pointer transition-all",
                              selectedDate === d ? "border-primary bg-white font-bold text-secondary scale-105 shadow-md shadow-primary/5" : "border-outline/5 bg-surface-container-low text-secondary/60 text-sm font-medium"
                            )}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(3)}
                    className="mt-12 px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
                  >
                    Confirm Session
                  </button>
                </div>
              )}

              {/* Step 3: Registration Form */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-4 mb-10">
                    <button onClick={() => setStep(2)} className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all">
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                    </button>
                    <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">Candidate Details</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Given Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Family Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="Surname" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="email@address.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">ID Number (Passport/Emirates ID)</label>
                      <input type="text" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="Type here..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Reason for Test</label>
                      <select className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 appearance-none font-bold text-sm text-secondary cursor-pointer">
                        <option>Study / Education</option>
                        <option>Professional / Jobs</option>
                        <option>Migration</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 border-dashed">
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-primary">cloud_upload</span>
                      <div>
                        <h4 className="font-bold text-secondary text-base mb-1">Upload ID Copy</h4>
                        <p className="text-[10px] text-secondary/50 font-medium uppercase tracking-widest leading-relaxed">Please provide a clear scan of your ID documents (JPG or PDF, max 5MB).</p>
                        <button className="mt-4 px-6 py-2 bg-white border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm">Choose File</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right: Booking Summary Sidebar */}
            <div className="lg:col-span-4 sticky top-32">
              <div className="bg-secondary rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-secondary/20 active:scale-[0.99] transition-transform">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none" />
                
                <h3 className="text-2xl font-headline font-black mb-10 tracking-tight">Exam Summary</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Selected Test</span>
                    <div className="text-lg font-bold flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">{selectedExam?.icon}</span>
                      {selectedExam?.title}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Session Date</span>
                      <p className="text-sm font-bold text-white/90">{selectedDate}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Venue</span>
                      <p className="text-sm font-bold text-white/90">{selectedVenue?.name}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Registration Fee</span>
                      <p className="text-[9px] text-primary font-bold uppercase tracking-widest leading-none">Includes VAT</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold">AED</span>
                      <span className="text-5xl font-headline font-black text-primary animate-in zoom-in-50 duration-500">{selectedExam?.fee.toLocaleString()}</span>
                    </div>
                  </div>

                  <button 
                    disabled={step < 3}
                    className={cn(
                      "w-full py-5 rounded-2xl font-headline font-black text-sm tracking-[0.2em] uppercase transition-all shadow-xl",
                      step >= 3 
                        ? "bg-primary text-white hover:bg-white hover:text-secondary shadow-primary/20" 
                        : "bg-white/5 text-white/20 cursor-not-allowed shadow-none"
                    )}
                  >
                    Complete Booking
                  </button>
                  
                  <div className="flex items-center justify-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">shield_check</span>
                    Secure SSL Payment
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-8 bg-surface-container-low rounded-3xl border border-outline/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">help</span>
                </div>
                <p className="text-[10px] font-medium text-secondary/60 leading-relaxed uppercase tracking-widest">
                  Need help? Contact our academic support at <span className="text-primary font-black">+971 4 333 3333</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
