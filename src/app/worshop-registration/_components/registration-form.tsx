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

import exam_workshops from "@/lib/demo-data/exam-workshops";
import workshops from "@/lib/demo-data/workshops";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  examId: z.string().min(1, "Please select an exam workshop"),
  durationId: z.string().min(1, "Please select a duration"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    message: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface RegistrationFormProps {
  initialExamId?: string;
  initialDurationId?: string;
}

export default function RegistrationForm({
  initialExamId,
  initialDurationId,
}: RegistrationFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      examId: initialExamId || exam_workshops[0].id,
      durationId: initialDurationId || workshops[0].id,
      paymentMethod: "card",
    },
  });

  const selectedExamId = watch("examId");
  const selectedDurationId = watch("durationId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const selectedExam =
    exam_workshops.find((e) => e.id === selectedExamId) || exam_workshops[0];
  const selectedDuration =
    workshops.find((w) => w.id === selectedDurationId) || workshops[0];

  const onSubmit = (data: BookingValues) => {
    console.log("Registration Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">
            Registration Confirmed
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your registration for the <strong>{selectedExam.title}</strong> (
            {selectedDuration.duration}) has been successfully scheduled for{" "}
            {selectedDate ? format(selectedDate, "PPP") : ""} at {selectedTime}.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          View Dashboard
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
    >
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-16">
        {/* Section 1: Exam Workshop */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              1
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Select Exam Workshop
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {exam_workshops.map((exam) => (
              <button
                key={exam.id}
                type="button"
                onClick={() => setValue("examId", exam.id)}
                className={cn(
                  "px-6 py-5 rounded-2xl border-2 text-left transition-all",
                  selectedExamId === exam.id
                    ? "border-[#991B1B] bg-white shadow-xl shadow-red-900/5"
                    : "border-outline/5 bg-surface-container-low hover:bg-white hover:border-[#991B1B]/20",
                )}
              >
                {/* <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  {exam.exam}
                </div> */}
                <div
                  className={cn(
                    "font-bold text-sm",
                    selectedExamId === exam.id
                      ? "text-[#991B1B]"
                      : "text-secondary",
                  )}
                >
                  {exam.title}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Section 2: Duration */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              2
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Select Workshop Duration
            </h2>
          </div>

          <Field>
            <RadioGroup
              value={selectedDurationId}
              onValueChange={(val) => setValue("durationId", val as string)}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {workshops.map((item) => (
                <Field key={item.id} className="relative">
                  <RadioGroupItem
                    value={item.id}
                    id={item.id}
                    className="sr-only"
                  />
                  <label
                    htmlFor={item.id}
                    className={cn(
                      "p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 relative group h-full flex flex-col items-center text-center",
                      selectedDurationId === item.id
                        ? "border-[#991B1B] bg-white shadow-xl shadow-red-900/5"
                        : "border-transparent bg-slate-50 hover:bg-slate-100",
                    )}
                  >
                    <div
                      className={cn(
                        "text-xl font-headline font-black mb-2",
                        selectedDurationId === item.id
                          ? "text-secondary"
                          : "text-secondary/70",
                      )}
                    >
                      {item.duration}
                    </div>
                    <div className="text-lg font-bold text-[#991B1B]">
                      {item.currency} {item.price}
                    </div>
                  </label>
                </Field>
              ))}
            </RadioGroup>
            <FieldError errors={[errors.durationId]} />
          </Field>
        </section>

        {/* Section 3: Schedule & Information */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              3
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
                    onValueChange={(val) => setValue("timeSlot", val as string)}
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
                <Info className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  We will send your schedule confirmation and access link to
                  this email address within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Secure Payment */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              4
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Secure Payment
            </h2>
          </div>

          <div className="bg-surface-container p-8 rounded-[3rem] space-y-8">
            <Payment amount={selectedDuration.price || 0} currency="aed" />
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
                Selected Workshop
              </span>
              <span className="text-xl font-bold tracking-tight">
                {selectedExam.title}
              </span>
              <span className="text-sm text-white/70">
                Duration: {selectedDuration.duration}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  Start Date
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
                Total Amount
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-primary">
                  {selectedDuration.currency}
                </span>
                <span className="text-5xl font-headline font-black text-white tracking-tighter">
                  {selectedDuration.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
