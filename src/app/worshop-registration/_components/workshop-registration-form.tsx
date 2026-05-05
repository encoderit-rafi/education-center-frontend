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
import {
  CheckCircle2,
  Info,
  ArrowRight,
  CalendarDays,
  Clock,
  User,
  Mail,
  Tag,
} from "lucide-react";

import exam_workshops from "@/lib/demo-data/exam-workshops";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  examId: z.string().min(1, "Please select an exam workshop"),
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
  examID?: string;
  workshop?: {
    title: string;
    description: string;
    price: number;
    currency?: string;
  };
}

export default function WorkshopRegistrationForm({
  examID,
  workshop,
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
      examId: examID || exam_workshops[0].id,
      paymentMethod: "card",
    },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const selectedExam =
    exam_workshops.find((e) => e.id === examID) || exam_workshops[0];

  const onSubmit = (data: BookingValues) => {
    console.log("Registration Data:", {
      ...data,
      workshop: workshop?.title,
      price: workshop?.price,
    });
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
            Your registration for the{" "}
            <strong>{workshop?.title || selectedExam.title}</strong> has been
            successfully scheduled for{" "}
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
    <div className="max-w-4xl mx-auto">
      {/* Workshop Header */}

      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
            {selectedExam.title}
          </span>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5" />
            Workshop Registration
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tight leading-tight">
              {workshop?.title || "Workshop Registration"}
            </h1>
            <p className="text-lg leading-relaxed font-medium">
              {workshop?.description}
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Left Column: Contact & Schedule */}
        <div className="space-y-12">
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-headline font-black text-secondary tracking-tight">
                Basic Information
              </h3>
            </div>

            <div className="space-y-6">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Full Name
                </FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      {...register("fullName")}
                      className="w-full h-auto pl-14 pr-6 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <FieldError errors={[errors.fullName]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Email Address
                </FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      {...register("email")}
                      type="email"
                      className="w-full h-auto pl-14 pr-6 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-400"
                      placeholder="email@example.com"
                    />
                  </div>
                  <FieldError errors={[errors.email]} />
                </FieldContent>
              </Field>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-headline font-black text-secondary tracking-tight">
                Preferred Schedule
              </h3>
            </div>

            <div className="grid gap-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Select Date
                </FieldLabel>
                <FieldContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => setValue("date", date as Date)}
                    className="rounded-[2rem] border border-outline/5 bg-surface-container-low p-6 shadow-sm"
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
                              ? "border-primary bg-white text-secondary shadow-md scale-[1.02]"
                              : "border-outline/5 bg-surface-container-low text-secondary/30 hover:border-outline/20",
                          )}
                        >
                          <Clock
                            className={cn(
                              "w-3 h-3 mr-2",
                              selectedTime === time
                                ? "text-primary"
                                : "text-secondary/20",
                            )}
                          />
                          {time}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.timeSlot]} />
                </FieldContent>
              </Field>
            </div>
          </section>
        </div>

        {/* Right Column: Payment & Submit */}
        <div className="space-y-12">
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-headline font-black text-secondary tracking-tight">
                Secure Checkout
              </h3>
            </div>

            <div className="bg-surface-container p-8 md:p-10 rounded-[3rem] border border-outline/5 shadow-xl space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center text-secondary/60 font-medium">
                  <span>Registration Fee</span>
                  <span>AED {workshop?.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-secondary/60 font-medium pb-6 border-b border-outline/10">
                  <span>Service Tax</span>
                  <span>AED 0.00</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-black uppercase tracking-widest text-secondary/40">
                    Total
                  </span>
                  <div className="text-3xl font-headline font-black text-secondary">
                    AED {workshop?.price.toLocaleString()}
                  </div>
                </div>
              </div>

              <Payment amount={workshop?.price || 0} currency="aed" />

              <button
                type="submit"
                className="w-full bg-primary text-white font-headline font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                Complete Purchase
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="p-6 bg-slate-50 rounded-2xl flex items-start gap-4">
                <Info className="text-slate-400 w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  By clicking "Complete Purchase", you agree to our terms of
                  service. You will receive a confirmation email with workshop
                  access details.
                </p>
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
