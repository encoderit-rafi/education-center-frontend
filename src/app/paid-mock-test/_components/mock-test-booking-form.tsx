 "use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import Payment from "@/components/blocks/payment";

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

const COURSE_OPTIONS = [
  {
    id: "group",
    title: "Group Course",
    description: "Learn in a collaborative environment with fellow students and live feedback.",
    price: 1850,
    badge: "Best Value",
    category: "Classroom",
  },
  {
    id: "private",
    title: "Private Course",
    description: "One-on-one intensive sessions tailored perfectly to your individual pace.",
    price: 4850,
    badge: "Premium",
    category: "Classroom",
  },
  {
    id: "semi-private",
    title: "Semi-Private",
    description: "Focused learning in an intimate small group for maximum interaction.",
    price: 2850,
    badge: "Balanced",
    category: "Classroom",
  },
  {
    id: "online",
    title: "Online Course",
    description: "Flexible digital learning with full access to our virtual classroom suite.",
    price: 3850,
    badge: "Remote",
    category: "Online",
  },
];

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  selectionId: z.string().min(1, "Please make a selection"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    error: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface MockTestBookingFormProps {
  courseTitle?: string;
  mode?: string;
  className?: string;
}

export default function MockTestBookingForm({ courseTitle, mode, className }: MockTestBookingFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const isCourseMode = !!courseTitle;

  // Determine which options to show
  const availableOptions = isCourseMode 
    ? COURSE_OPTIONS.filter(opt => {
        if (mode?.toLowerCase().includes("online")) return opt.category === "Online";
        return opt.category === "Classroom";
      })
    : MOCK_TESTS;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      selectionId: isCourseMode 
        ? availableOptions[0]?.id 
        : (courseTitle?.toLowerCase().includes("ielts") ? "ielts" : 
           courseTitle?.toLowerCase().includes("oet") ? "oet" : 
           courseTitle?.toLowerCase().includes("pte") ? "pte" : 
           availableOptions[0]?.id),
      paymentMethod: "card",
    },
  });

  const selectedId = watch("selectionId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const selectedItem = availableOptions.find((m) => m.id === selectedId);

  const onSubmit = (data: BookingValues) => {
    console.log("Booking Data:", data);
    setIsSuccess(true);
  };

  const currency = isCourseMode ? "AED" : "$";

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
            Your {isCourseMode ? courseTitle : ""} {selectedItem?.title} has been successfully scheduled
            for {selectedDate ? format(selectedDate, "PPP") : ""} at{" "}
            {selectedTime}. Check your email for access credentials.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", className)}
    >
      {/* Left Column: Selection & Payment */}
      <div className="lg:col-span-8 space-y-16">
        {/* Section 1: Selection */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              1
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              {isCourseMode ? "Select Enrollment Option" : "Select Examination"}
            </h2>
          </div>

          <Field>
            <RadioGroup
              value={selectedId}
              onValueChange={(val) => setValue("selectionId", val)}
              className="grid md:grid-cols-3 gap-6"
            >
              {availableOptions.map((item) => (
                <Field key={item.id} className="relative">
                  <RadioGroupItem
                    value={item.id}
                    id={item.id}
                    className="sr-only"
                  />
                  <label
                    htmlFor={item.id}
                    className={cn(
                      "p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 relative group h-full flex flex-col",
                      selectedId === item.id
                        ? "border-primary bg-white shadow-2xl shadow-primary/5 ring-4 ring-primary/5"
                        : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white",
                    )}
                  >
                    <div
                      className={cn(
                        "text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors",
                        selectedId === item.id
                          ? "text-primary"
                          : "text-secondary/40",
                      )}
                    >
                      {item.badge}
                    </div>
                    <h3 className="text-xl font-headline font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-2xl font-headline font-black text-secondary mb-4 leading-none">
                      {currency} {item.price.toLocaleString()}
                    </div>
                    <p className="text-[11px] text-on-surface-variant/60 font-medium leading-relaxed mb-8 flex-1">
                      {item.description}
                    </p>

                    <div
                      className={cn(
                        "w-full py-4 rounded-xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                        selectedId === item.id
                          ? "bg-primary text-white shadow-xl shadow-primary/20"
                          : "bg-surface-container-high text-secondary/40 group-hover:bg-primary group-hover:text-white",
                      )}
                    >
                      {selectedId === item.id && (
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                      )}
                      {selectedId === item.id ? "Selected" : "Select"}
                    </div>
                  </label>
                </Field>
              ))}
            </RadioGroup>
            <FieldError errors={[errors.selectionId]} />
          </Field>
        </section>

        {/* Section 2: Schedule & Information */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              2
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Schedule & Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Start Date
                </FieldLabel>
                <FieldContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => setValue("date", date as Date)}
                    className="rounded-3xl border border-outline/5 bg-surface-container-low p-6 h-fit"
                  />
                  <FieldError errors={[errors.date]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Time Slot (GST)
                </FieldLabel>
                <FieldContent>
                  <RadioGroup
                    value={selectedTime}
                    onValueChange={(val) => setValue("timeSlot", val)}
                    className="grid grid-cols-2 gap-3"
                  >
                    {TIME_SLOTS.map((time) => (
                      <div key={time}>
                        <RadioGroupItem
                          value={time}
                          id={time}
                          className="sr-only"
                        />
                        <label
                          htmlFor={time}
                          className={cn(
                            "flex items-center justify-center py-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer w-full text-center",
                            selectedTime === time
                              ? "border-primary bg-white text-secondary scale-105 shadow-md"
                              : "border-outline/5 bg-surface-container-low text-secondary/30",
                          )}
                        >
                          {time}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.timeSlot]} />
                </FieldContent>
              </Field>
            </div>

            <div className="space-y-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Full Name
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("fullName")}
                    className="w-full h-auto px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                    placeholder="Candidate Name"
                  />
                  <FieldError errors={[errors.fullName]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Email Address
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("email")}
                    type="email"
                    className="w-full h-auto px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                    placeholder="email@example.com"
                  />
                  <FieldError errors={[errors.email]} />
                </FieldContent>
              </Field>

              <div className="p-6 bg-primary/5 rounded-2xl flex items-start gap-4 mt-12">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                  info
                </span>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  We will send your {isCourseMode ? "access" : "testing"} credentials and link to this
                  email address 24 hours before your selected slot.
                </p>
              </div>
            </div>
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
            <Payment />
            <button
              type="submit"
              className="w-full bg-primary text-white font-headline font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              Confirm & Pay
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>

      {/* Right Column: Summary */}
      <div className="lg:col-span-4 sticky top-28 space-y-8">
        {/* Dynamic Order Summary */}
        <section className="bg-secondary p-10 rounded-xl text-white shadow-2xl shadow-secondary/20 overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-headline font-black tracking-tight">
              Order Summary
            </h3>
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              Secure
            </span>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                {isCourseMode ? "Selection" : "Selected Test"}
              </span>
              <span className="text-xl font-bold tracking-tight">
                {isCourseMode ? courseTitle : ""} {selectedItem?.title}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  Session Date
                </span>
                <span className="text-sm font-bold">
                  {selectedDate ? format(selectedDate, "PPP") : "Not selected"}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  Time Slot
                </span>
                <span className="text-sm font-bold uppercase">
                  {selectedTime || "Not selected"}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4">
              <span className="text-sm font-black text-white/40 uppercase tracking-widest">
                Total Investment
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-primary">{currency}</span>
                <span className="text-5xl font-headline font-black text-white tracking-tighter">
                  {selectedItem?.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
