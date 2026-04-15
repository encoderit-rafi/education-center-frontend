"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const MOCK_TESTS = [
  {
    id: "ielts",
    title: "IELTS Mock Test",
    description: "Full academic simulation including all four modules.",
    price: 45,
    icon: "edit_note",
    badge: "Most Popular",
  },
  {
    id: "oet",
    title: "OET Mock Test",
    description: "Profession-specific English test for medical workers.",
    price: 60,
    icon: "medical_services",
    badge: "Healthcare",
  },
  {
    id: "pte",
    title: "PTE Mock Test",
    description: "AI-scored academic English proficiency test simulation.",
    price: 50,
    icon: "computer",
    badge: "Pearson",
  },
];

export default function MockTestBookingForm() {
  const [selectedId, setSelectedId] = useState(MOCK_TESTS[0].id);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedMock = MOCK_TESTS.find((m) => m.id === selectedId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl shadow-emerald-500/5 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl text-emerald-600 font-bold">check</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">Booking Confirmed</h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your academic simulation has been successfully scheduled. Check your email for the preparation guide and access credentials.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Book Another Test
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-16 items-start">
      {/* Left Column: Form Steps */}
      <div className="lg:col-span-8 space-y-20">
        
        {/* Step 1: Selection */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20">
              1
            </span>
            <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Select Test Category</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {MOCK_TESTS.map((test) => (
              <div
                key={test.id}
                onClick={() => setSelectedId(test.id)}
                className={cn(
                  "p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 relative group",
                  selectedId === test.id
                    ? "border-primary bg-white shadow-2xl shadow-primary/5"
                    : "border-outline/5 bg-surface-container-low hover:border-primary/20"
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    selectedId === test.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  )}>
                    <span className="material-symbols-outlined">{test.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-black text-secondary mb-2 group-hover:text-primary transition-colors">{test.title}</h3>
                <p className="text-[10px] text-secondary/40 font-black uppercase tracking-widest mb-4">{test.badge}</p>
                <p className="text-[11px] text-on-surface-variant/60 font-medium leading-relaxed">{test.description}</p>
                
                {selectedId === test.id && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white text-white shadow-lg">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Schedule */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-2xl bg-surface-container-highest text-secondary flex items-center justify-center font-black text-xl">
              2
            </span>
            <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Pick Date & Time</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Preferred Date</label>
              <div className="grid grid-cols-4 gap-3">
                {["Nov 12", "Nov 14", "Nov 16", "Nov 18"].map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={cn(
                      "p-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedDate === date ? "border-primary bg-white text-secondary scale-105 shadow-md" : "border-outline/5 bg-surface-container-low text-secondary/30"
                    )}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Available Slots</label>
              <div className="grid grid-cols-2 gap-3">
                {["09:00 AM", "02:00 PM"].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedTime === time ? "border-primary bg-white text-secondary scale-105 shadow-md" : "border-outline/5 bg-surface-container-low text-secondary/30"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Payment Type */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <span className="w-12 h-12 rounded-2xl bg-surface-container-highest text-secondary flex items-center justify-center font-black text-xl">
              3
            </span>
            <h2 className="text-3xl font-headline font-extrabold text-secondary tracking-tight">Secure Payment</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <button type="button" className="p-8 rounded-3xl bg-surface-container-low border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all group grayscale hover:grayscale-0">
              <img className="h-6 mb-4 mx-auto transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpt2YNzUZodOb0woUQcp6GQ_iZGyBCFnV2YOm2qp64zoGqJaB1GjPB81W0idLohdr9lTncEjotpCXL7E9ouZgGAdqTMmsRDmeTm75jTkumjiPyO3IHfEgQLWjIJJcsFHFVVHy0rFuzxV3C0La9oC1In-16U0RcZgdqhy-G6ppLBn6RAuis7BsZEnnuO-lJEy5L4VknJi79AKZKtX0njJmeVYMSOuUag-mWukmaNEkEuiVgq4MQ69jo8SCGlWrG6jTDE852elNgQ" alt="Stripe" />
              <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest text-center block">Credit Card</span>
            </button>
            <button type="button" className="p-8 rounded-3xl bg-surface-container-low border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all group grayscale hover:grayscale-0">
              <img className="h-6 mb-4 mx-auto transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLOBAWlddkR9xGMwNfgUak9iWjLYPARNYaGaqnh3R-TZIcQBRDGmKyEi-5Tg7V35E5hCW9cMQo3fxAkaje9HR-I4WfCb-eMYY2NhXxErgzFM-hbFJZiHrbOfd6pfeXzepxlFHEcibH40augUrQ_TjZyk7xGXXEfEr5JR7cnYEHe3WNq4IPl5Yr2eT-7kmAd20jEf14Iyffq4qTtNd1QldQRXLSo6mUN0PC5LrGdrqy6NTWFndqXMogskX1Um6BeMqceq1lMSG7A" alt="PayPal" />
              <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest text-center block">Digital Wallet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary Sidebar */}
      <div className="lg:col-span-4 sticky top-32">
        <div className="bg-secondary rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-secondary/20">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />
          
          <h3 className="text-2xl font-headline font-black mb-10 tracking-tight">Order Summary</h3>
          
          <div className="space-y-6 mb-12 relative z-10">
            <div className="flex flex-col gap-1 pb-6 border-b border-white/10">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Selected Session</span>
              <span className="text-lg font-bold text-white leading-tight">{selectedMock?.title}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Date</span>
                <span className="text-sm font-bold">{selectedDate || "-"}</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Time</span>
                <span className="text-sm font-bold">{selectedTime || "-"}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end pt-4">
              <span className="text-sm font-extrabold text-white/60">Investment</span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold">$</span>
                <span className="text-5xl font-headline font-black text-primary animate-in zoom-in-50 duration-500">{selectedMock?.price}.00</span>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-primary text-white font-headline font-extrabold text-sm rounded-2xl hover:bg-white hover:text-secondary transition-all shadow-xl shadow-primary/20 uppercase tracking-[0.2em]"
          >
            Confirm & Pay
          </button>
          
          <p className="text-[10px] text-center text-white/30 mt-8 leading-relaxed font-medium">
            *Official test board results are not included. All mock test results are for preparation purposes only.
          </p>
        </div>
      </div>
    </form>
  );
}
