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

import { CheckCircle2, Info, ArrowRight } from "lucide-react";

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
    id: "virtual",
    title: "Virtual Classroom",
    description: "Interactive online sessions from the comfort of your home.",
    price: 1250,
    badge: "Most Flexible",
    category: "Online Training",
  },
  {
    id: "group",
    title: "Group Course",
    description: "Standardized classroom training for collective excellence.",
    price: 1850,
    badge: "Best Value",
    category: "Standard Training",
  },
  {
    id: "semi-private",
    title: "Semi-Private",
    description: "Personalized attention in small focused groups.",
    price: 2850,
    badge: "Balanced",
    category: "Small Group",
  },
  {
    id: "private",
    title: "Private Course",
    description: "Exclusive 1-on-1 tutoring tailored to your pace.",
    price: 4850,
    badge: "Premium",
    category: "1-on-1 Focus",
  },
];

const WORKSHOP_OPTIONS = [
  {
    id: "2 hours",
    title: "2 Hours",
    description: "Rapid focus session for immediate strategy adjustment.",
    price: 600,
    badge: "Quick Fix",
    category: "Workshop",
  },
  {
    id: "4 hours",
    title: "4 Hours",
    description: "Deep dive into specific modules with intensive practice.",
    price: 1000,
    badge: "Popular",
    category: "Workshop",
  },
  {
    id: "6 hours",
    title: "6 Hours",
    description: "Comprehensive workshop covering multiple test areas.",
    price: 1350,
    badge: "Best Value",
    category: "Workshop",
  },
  {
    id: "8 hours",
    title: "8 Hours",
    description: "Full-day mastery session for complete confidence.",
    price: 1600,
    badge: "Mastery",
    category: "Workshop",
  },
];

const EXAMS = [
  // ...
  { id: "ielts", name: "IELTS" },
  { id: "pte", name: "PTE" },
  { id: "celpip", name: "CELPIP" },
  { id: "cael", name: "CAEL" },
  { id: "toefl", name: "TOEFL" },
  { id: "oet", name: "OET" },
];

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  courseId: z.string().min(1, "Please select a course"),
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
  initialCourse?: string;
  initialType?: string;
  mode?: "course" | "mock-test" | "workshop";
  className?: string;
}

export default function MockTestBookingForm({
  initialCourse,
  initialType,
  mode = "course",
  className
}: MockTestBookingFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const isCourseMode = mode === "course";
  const isWorkshopMode = mode === "workshop";
  const isMockTestMode = mode === "mock-test";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      courseId: initialCourse || EXAMS[0].id,
      selectionId: initialType?.toLowerCase() || (isCourseMode ? COURSE_OPTIONS[1].id : isWorkshopMode ? WORKSHOP_OPTIONS[2].id : MOCK_TESTS[0].id),
      paymentMethod: "card",
    },
  });

  const selectedCourseId = watch("courseId");
  const selectedId = watch("selectionId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const availableOptions = isWorkshopMode ? WORKSHOP_OPTIONS : isCourseMode ? COURSE_OPTIONS : MOCK_TESTS;
  const selectedCourse = EXAMS.find(e => e.id === selectedCourseId);
  const selectedItem = availableOptions.find((m) => m.id === selectedId);

  const onSubmit = (data: BookingValues) => {
    console.log("Booking Data:", data);
    setIsSuccess(true);
  };

  const currency = "AED";

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">
            {isWorkshopMode ? "Workshop Confirmed" : "Booking Confirmed"}
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your {isCourseMode || isWorkshopMode ? selectedCourse?.name : ""} {selectedItem?.title} {isWorkshopMode ? "Workshop" : ""} has been successfully scheduled
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
        {/* Section 1: Course Selection (Only in Course/Workshop Mode) */}
        {(isCourseMode || isWorkshopMode) && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                1
              </span>
              <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                {isWorkshopMode ? "Select Workshop Category" : "Select Your Course"}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {EXAMS.filter(exam => !initialCourse || exam.id === initialCourse).map((exam) => (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => setValue("courseId", exam.id)}
                  className={cn(
                    "px-8 py-3 rounded-full border-2 text-xs font-black uppercase tracking-widest transition-all",
                    selectedCourseId === exam.id
                      ? "border-[#991B1B] bg-white text-secondary shadow-md"
                      : "border-outline/5 bg-surface-container-low text-secondary/30 hover:border-[#991B1B]/20",
                  )}
                >
                  {exam.name}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Selection */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              {isCourseMode || isWorkshopMode ? "2" : "1"}
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              {isWorkshopMode ? "Select Workshop Duration" : isCourseMode ? "Select Training Plan" : "Select Examination"}
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
                      "p-10 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-300 relative group h-full flex flex-col items-center text-center",
                      selectedId === item.id
                        ? "border-[#991B1B] bg-white shadow-2xl shadow-red-900/5"
                        : "border-transparent bg-slate-50 hover:bg-slate-100",
                    )}
                  >
                    <div
                      className={cn(
                        "text-[10px] font-black uppercase tracking-[0.2em] mb-4 transition-colors",
                        selectedId === item.id
                          ? "text-[#991B1B]"
                          : "text-secondary/30",
                      )}
                    >
                      {item.badge}
                    </div>
                    <h3 className="text-2xl font-headline font-black text-secondary mb-1">
                      {item.title}
                    </h3>
                    <div className="text-3xl font-headline font-black text-secondary mb-6 leading-none">
                      {currency} {item.price.toLocaleString()}
                    </div>
                    <p className="text-xs text-on-surface-variant/50 font-medium leading-relaxed mb-10 max-w-[200px]">
                      {item.description}
                    </p>

                    <div
                      className={cn(
                        "mt-auto w-full max-w-[160px] py-4 rounded-2xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                        selectedId === item.id
                          ? "bg-[#991B1B] text-white shadow-xl shadow-red-900/20"
                          : "text-secondary/40",
                      )}
                    >
                      {selectedId === item.id && (
                        <CheckCircle2 className="w-3.5 h-3.5" />
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

        {/* Section 3: Schedule & Information */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              {isCourseMode || isWorkshopMode ? "3" : "2"}
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
                <Info className="text-primary w-5 h-5 mt-0.5" />
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  We will send your {isCourseMode ? "access" : "testing"} credentials and link to this
                  email address 24 hours before your selected slot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Secure Payment */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              {isCourseMode || isWorkshopMode ? "4" : "3"}
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
              <ArrowRight className="w-5 h-5" />
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
                {isWorkshopMode ? "Selected Workshop" : isCourseMode ? "Selected Course" : "Selected Test"}
              </span>
              <span className="text-xl font-bold tracking-tight">
                {isCourseMode || isWorkshopMode ? selectedCourse?.name : ""} {selectedItem?.title} {isWorkshopMode ? "Workshop" : ""}
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
                <span className="text-xl font-bold text-primary">AED</span>
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
