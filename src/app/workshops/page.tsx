"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const WORKSHOPS = [
  {
    id: "ielts-writing",
    title: "IELTS Writing Masterclass",
    description: "Focus on Task 2 academic structures and vocabulary.",
    date: "Oct 15, 2024",
    time: "10:00 AM",
    price: 149,
    icon: "menu_book",
    badge: "2 Seats Left",
    badgeType: "warning",
  },
  {
    id: "pte-speaking",
    title: "PTE Speaking Workshop",
    description: "AI-scoring strategies for 'Read Aloud' and 'Retell Lecture'.",
    date: "Oct 18, 2024",
    time: "02:00 PM",
    price: 129,
    icon: "record_voice_over",
    badge: "Open",
    badgeType: "success",
  },
];

export default function WorkshopsPage() {
  const [selectedId, setSelectedId] = useState(WORKSHOPS[0].id);
  const selectedWorkshop = WORKSHOPS.find((w) => w.id === selectedId);

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      {/* ── Hero Section ── */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">
              Academic Excellence
            </span>
            <h1 className="text-5xl lg:text-8xl font-headline font-extrabold text-secondary tracking-tighter leading-[0.9] mb-8">
              Reserve Your Spot in Our <br />
              <span className="text-primary">Upcoming Workshops</span>
            </h1>
            <p className="text-xl text-on-surface-variant/80 max-w-xl leading-relaxed mb-10 font-medium">
              Elevate your academic profile with intensive sessions led by
              certified examiners. Small groups, high impact, and guaranteed
              progress.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_48px_96px_-24px_rgba(118,0,9,0.12)] border border-outline/5 bg-surface-container-high relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8w-vwgG-NJORfSXuHFah4aZUndRiONmk1ag3cGH8osj2gB70L1gVnt2tuTe7o5XFnzMakIX7lx86z8ucpHFNJaHY9jK0atH8VOfVHAmuVLbNt8fRTIGeiZlzh2h-fqlDWjq7oTprJamb8Y0LYgqdAJlfzB8EjaBTlibKxsWt-ns2KA1AbDKhGhsviaq4tqmumMkC7ZkuIe7rb8J0AKhM_nxgYyo4hG20LeN9TU_88D99JwwNS49Lcan9rML0zT7HdznGfuXJAg"
                alt="Workshop Collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] max-w-[240px] border border-outline/10 animate-in slide-in-from-left-8 duration-700">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next Session
              </p>
              <p className="text-sm text-secondary font-extrabold leading-snug">
                IELTS Writing Masterclass starts in 48 hours.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 skew-x-12 translate-x-32 opacity-50" />
      </section>

      {/* ── Booking Workflow ── */}
      <section className="px-8 pt-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Form Steps */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Step 1: Selection */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20">
                    1
                  </span>
                  <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Workshop Selection</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {WORKSHOPS.map((workshop) => (
                    <div
                      key={workshop.id}
                      onClick={() => setSelectedId(workshop.id)}
                      className={cn(
                        "relative group cursor-pointer p-8 rounded-[2rem] border-2 transition-all duration-500",
                        selectedId === workshop.id
                          ? "border-primary bg-white shadow-2xl shadow-primary/5"
                          : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white"
                      )}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                          selectedId === workshop.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        )}>
                          <span className="material-symbols-outlined">{workshop.icon}</span>
                        </div>
                        <span className={cn(
                          "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest",
                          workshop.badgeType === "warning" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                        )}>
                          {workshop.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-headline font-extrabold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant/60 mb-6 font-medium leading-relaxed">
                        {workshop.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-[10px] font-black text-secondary/40 uppercase tracking-widest pt-6 border-t border-outline/5">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {workshop.date} • {workshop.time}
                      </div>

                      {/* Selection Checkmark */}
                      {selectedId === workshop.id && (
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                          <span className="material-symbols-outlined text-sm font-bold">check</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Basic Information */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <span className="w-12 h-12 rounded-2xl bg-surface-container-highest text-secondary flex items-center justify-center font-black text-xl">
                    2
                  </span>
                  <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Basic Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary"
                      placeholder="e.g. Alexander Sterling"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary"
                      placeholder="e.g. alexander@atelier.edu"
                    />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Current English Level</label>
                    <div className="relative group">
                      <select className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-black text-sm text-secondary appearance-none cursor-pointer">
                        <option>Beginner (A1-A2)</option>
                        <option>Intermediate (B1-B2)</option>
                        <option>Advanced (C1-C2)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none group-hover:text-primary transition-colors">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Method */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <span className="w-12 h-12 rounded-2xl bg-surface-container-highest text-secondary flex items-center justify-center font-black text-xl">
                    3
                  </span>
                  <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Payment Method</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <button className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-surface-container-low border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300">
                    <img
                      className="h-8 group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpt2YNzUZodOb0woUQcp6GQ_iZGyBCFnV2YOm2qp64zoGqJaB1GjPB81W0idLohdr9lTncEjotpCXL7E9ouZgGAdqTMmsRDmeTm75jTkumjiPyO3IHfEgQLWjIJJcsFHFVVHy0rFuzxV3C0La9oC1In-16U0RcZgdqhy-G6ppLBn6RAuis7BsZEnnuO-lJEy5L4VknJi79AKZKtX0njJmeVYMSOuUag-mWukmaNEkEuiVgq4MQ69jo8SCGlWrG6jTDE852elNgQ"
                      alt="Stripe"
                    />
                    <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">Pay with Card</span>
                  </button>
                  <button className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-surface-container-low border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300">
                    <img
                      className="h-8 group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLOBAWlddkR9xGMwNfgUak9iWjLYPARNYaGaqnh3R-TZIcQBRDGmKyEi-5Tg7V35E5hCW9cMQo3fxAkaje9HR-I4WfCb-eMYY2NhXxErgzFM-hbFJZiHrbOfd6pfeXzepxlFHEcibH40augUrQ_TjZyk7xGXXEfEr5JR7cnYEHe3WNq4IPl5Yr2eT-7kmAd20jEf14Iyffq4qTtNd1QldQRXLSo6mUN0PC5LrGdrqy6NTWFndqXMogskX1Um6BeMqceq1lMSG7A"
                      alt="PayPal"
                    />
                    <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">Pay with PayPal</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-secondary rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-secondary/20 border border-white/5">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                  
                  <h3 className="text-2xl font-headline font-extrabold mb-10 tracking-tight">Booking Summary</h3>
                  
                  <div className="space-y-6 mb-12 relative z-10">
                    <div className="flex flex-col gap-1 pb-6 border-b border-white/10">
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Selected Workshop</span>
                      <span className="text-lg font-bold text-white leading-snug">{selectedWorkshop?.title}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Date</span>
                        <span className="text-sm font-bold">{selectedWorkshop?.date}</span>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Time</span>
                        <span className="text-sm font-bold">{selectedWorkshop?.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end pt-4">
                      <span className="text-sm font-extrabold text-white/60">Total Investment</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold">$</span>
                        <span className="text-5xl font-black text-primary font-headline animate-in zoom-in-50 duration-300">{selectedWorkshop?.price}.00</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-primary text-white font-headline font-extrabold text-sm rounded-2xl hover:bg-white hover:text-secondary transition-all shadow-xl shadow-primary/20 uppercase tracking-[0.2em]">
                    Confirm Booking
                  </button>
                  
                  <p className="text-[10px] text-center text-white/30 mt-8 leading-relaxed font-medium">
                    By confirming, you agree to our <span className="text-white border-b border-white/20">Terms of Service</span> and <span className="text-white border-b border-white/20">Cancellation Policy</span>.
                  </p>
                </div>
                
                {/* Visual Trust Indicator */}
                <div className="p-8 bg-surface-container-low rounded-3xl border border-outline/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">shield_lock</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-extrabold text-secondary leading-tight">Secure Checkout</h5>
                    <p className="text-[10px] text-on-surface-variant/60 font-medium uppercase tracking-widest mt-1">256-bit SSL Encrypted</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
