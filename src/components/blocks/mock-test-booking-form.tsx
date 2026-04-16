"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";

const MOCK_TESTS = [
  {
    id: "ielts",
    title: "IELTS",
    description: "Full academic simulation including all four modules.",
    price: 45,
    badge: "Most Popular",
    category: "Academic",
  },
  {
    id: "oet",
    title: "OET",
    description: "Profession-specific English test for medical workers.",
    price: 60,
    badge: "Healthcare",
    category: "Medical",
  },
  {
    id: "pte",
    title: "PTE",
    description: "AI-scored academic English proficiency test.",
    price: 50,
    badge: "Pearson",
    category: "Academic",
  },
];

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

export default function MockTestBookingForm() {
  const [selectedId, setSelectedId] = useState(MOCK_TESTS[0].id);
  const [selectedDate, setSelectedDate] = useState("Nov 05, 2024");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedMock = MOCK_TESTS.find((m) => m.id === selectedId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl text-emerald-600 font-bold">
            check_circle
          </span>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">
            Booking Confirmed
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your {selectedMock?.title} mock test has been successfully scheduled
            for {selectedDate} at {selectedTime}. Check your email for access
            credentials.
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Selection & Payment */}
      <div className="lg:col-span-7 space-y-16">
        {/* Section 1: Examination Selection */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              1
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Select Examination
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MOCK_TESTS.map((test) => (
              <div
                key={test.id}
                onClick={() => setSelectedId(test.id)}
                className={cn(
                  "p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 relative group",
                  selectedId === test.id
                    ? "border-primary bg-white shadow-2xl shadow-primary/5 ring-4 ring-primary/5"
                    : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white",
                )}
              >
                <div
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors",
                    selectedId === test.id
                      ? "text-primary"
                      : "text-secondary/40",
                  )}
                >
                  {test.badge}
                </div>
                <h3 className="text-2xl font-headline font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                  {test.title}
                </h3>
                <div className="text-3xl font-headline font-black text-secondary mb-4 leading-none">
                  ${test.price}.00
                </div>
                <p className="text-[11px] text-on-surface-variant/60 font-medium leading-relaxed mb-8">
                  {test.description}
                </p>

                <button
                  type="button"
                  className={cn(
                    "w-full py-4 rounded-xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                    selectedId === test.id
                      ? "bg-primary text-white shadow-xl shadow-primary/20"
                      : "bg-surface-container-high text-secondary/40 hover:bg-primary hover:text-white",
                  )}
                >
                  {selectedId === test.id && (
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                  )}
                  {selectedId === test.id ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Secure Payment */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              3
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Secure Payment
            </h2>
          </div>

          <div className="bg-surface-container p-8 rounded-[3rem] space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <button
                type="button"
                className="bg-white p-8 rounded-[2rem] border-2 border-transparent hover:border-primary transition-all flex flex-col items-center gap-4 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="material-symbols-outlined text-4xl text-secondary/30 group-hover:text-primary transition-colors">
                  credit_card
                </span>
                <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest group-hover:text-secondary transition-colors">
                  Credit Card
                </span>
              </button>
              <button
                type="button"
                className="bg-white p-8 rounded-[2rem] border-2 border-transparent hover:border-primary transition-all flex flex-col items-center gap-4 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="material-symbols-outlined text-4xl text-secondary/30 group-hover:text-primary transition-colors">
                  account_balance_wallet
                </span>
                <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest group-hover:text-secondary transition-colors">
                  Digital Wallet
                </span>
              </button>
            </div>

            <div className="p-6 bg-white/50 rounded-2xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-xl">
                encrypted
              </span>
              <p className="text-xs text-on-surface-variant font-medium leading-snug">
                Your credentials are encrypted via 256-bit AES and processed
                through PCI-compliant gateways.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-headline font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              Proceed to Enrollment
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>

      {/* Right Column: Calendar & Summary */}
      <div className="lg:col-span-5 sticky top-28 space-y-8">
        {/* Section 2: Date & Time Selection */}
        <section className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-sm border border-outline/5">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              2
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Select Date & Time
            </h2>
          </div>

          <div className="space-y-12">
            {/* Calendar Mockup */}
            {/* <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline font-black text-lg text-secondary">November 2024</h3>
                <div className="flex gap-2">
                  <button type="button" className="w-10 h-10 rounded-full border border-outline/10 flex items-center justify-center text-secondary/40 hover:bg-secondary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button type="button" className="w-10 h-10 rounded-full border border-outline/10 flex items-center justify-center text-secondary/40 hover:bg-secondary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-secondary/30 uppercase tracking-widest mb-4">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const dateStr = `Nov ${day.toString().padStart(2, "0")}, 2024`;
                  const isSelected = selectedDate === dateStr;
                  const isAvailable = [5, 12, 18, 24].includes(day);
                  
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => isAvailable && setSelectedDate(dateStr)}
                      disabled={!isAvailable}
                      className={cn(
                        "aspect-square rounded-2xl flex items-center justify-center text-xs font-black transition-all",
                        isSelected 
                          ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110 z-10" 
                          : isAvailable 
                            ? "bg-surface-container-high text-secondary hover:bg-secondary hover:text-white" 
                            : "text-secondary/10 cursor-not-allowed"
                      )}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div> */}
            <Calendar
              className="rounded-md border p-2"
              classNames={{
                day_button: "rounded-full",
              }}
              mode="single"
              onSelect={() => {}}
              selected={new Date()}
            />
            {/* Time Slots */}
            <div className="space-y-6">
              <h3 className="font-headline font-black text-xs text-secondary/40 uppercase tracking-widest">
                Available Time Slots
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-4 rounded-2xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedTime === time
                        ? "border-primary bg-white text-secondary shadow-lg shadow-primary/5"
                        : "border-outline/5 bg-surface-container-low text-secondary/30 hover:bg-white hover:border-primary/20",
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Order Summary */}
        <section className="bg-secondary p-10 rounded-[3rem] text-white shadow-2xl shadow-secondary/20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />

          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-headline font-black tracking-tight">
              Order Summary
            </h3>
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              Secure
            </span>
          </div>

          <div className="space-y-6 mb-12 relative z-10">
            <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                Selected Test
              </span>
              <span className="text-xl font-bold tracking-tight">
                {selectedMock?.title} Mock Exam
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  Session Date
                </span>
                <span className="text-sm font-bold">{selectedDate}</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  Time Slot
                </span>
                <span className="text-sm font-bold uppercase">
                  {selectedTime}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4">
              <span className="text-sm font-black text-white/40 uppercase tracking-widest">
                Total Investment
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-primary">$</span>
                <span className="text-5xl font-headline font-black text-white tracking-tighter">
                  {selectedMock?.price}.00
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
