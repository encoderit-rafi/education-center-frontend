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
import exam_workshops from "@/lib/demo-data/exam-workshops";

import {
  CheckCircle2,
  Info,
  ArrowRight,
  Clock,
  Award,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  workshopTitle: z.string().min(1, "Please select a workshop package"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    message: "Please select a preferred date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface ExamWorkshopFormProps {
  examType: string; // e.g., "IELTS", "TOEFL", "CELPIP"
  className?: string;
}

export default function ExamWorkshopForm({
  examType,
  className,
}: ExamWorkshopFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  // Find the workshop data for the given exam type
  const examData =
    exam_workshops.find((e) => e.id.toLowerCase() === examType.toLowerCase()) ||
    exam_workshops[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      workshopTitle: examData.workshops[0].title,
      paymentMethod: "card",
    },
  });

  const selectedTitle = watch("workshopTitle");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const selectedWorkshop =
    examData.workshops.find((w) => w.title === selectedTitle) ||
    examData.workshops[0];

  const onSubmit = (data: BookingValues) => {
    console.log("Workshop Booking Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-emerald-900 tracking-tight">
            Booking Confirmed
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your <strong>{selectedTitle}</strong> has been successfully
            scheduled for {selectedDate ? format(selectedDate, "PPP") : ""} at{" "}
            {selectedTime}. Our team will contact you shortly to confirm the
            customization of your session.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-20 max-w-4xl mx-auto pb-20", className)}
    >
      {/* Step 1: Select Workshop */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
            1
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Select Workshop Package
          </h2>
        </div>

        <RadioGroup
          value={selectedTitle}
          onValueChange={(val) => setValue("workshopTitle", val)}
          className="grid sm:grid-cols-2 gap-4"
        >
          {examData.workshops.map((w) => (
            <div key={w.title}>
              <RadioGroupItem
                value={w.title}
                id={w.title}
                className="sr-only"
              />
              <label
                htmlFor={w.title}
                className={cn(
                  "relative block p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300",
                  selectedTitle === w.title
                    ? "border-primary bg-primary/5 shadow-xl shadow-primary/5"
                    : "border-slate-100 bg-white hover:border-slate-200",
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {w.title.split(" ")[0]} Package
                    </p>
                    <h3 className="font-bold text-slate-900">{w.title}</h3>
                  </div>
                  {selectedTitle === w.title && (
                    <CheckCircle2 className="size-6 text-primary" />
                  )}
                </div>
                <div className="text-2xl font-black text-slate-900">
                  AED {w.price}
                </div>
              </label>
            </div>
          ))}
        </RadioGroup>
        <FieldError errors={[errors.workshopTitle]} />
      </section>

      {/* Step 2: Schedule */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
            2
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Preferred Schedule
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Field>
            <FieldLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-4 block">
              Preferred Date
            </FieldLabel>
            <FieldContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => setValue("date", date as Date)}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm"
              />
              <FieldError errors={[errors.date]} />
            </FieldContent>
          </Field>

          <div className="space-y-8">
            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-4 block">
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
                          "flex items-center justify-center py-5 rounded-2xl border-2 text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer w-full",
                          selectedTime === time
                            ? "border-primary bg-primary/5 text-primary scale-105 shadow-md"
                            : "border-slate-100 bg-white text-slate-400 hover:border-slate-200",
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

            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="size-5 text-primary" />
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">
                  Flexible Scheduling
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Once booked, our academic coordinators will contact you to
                finalize the exact date and customize the session to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Candidate Info */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
            3
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Candidate Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Field>
            <FieldLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-4 block">
              Full Name
            </FieldLabel>
            <FieldContent>
              <Input
                {...register("fullName")}
                className="w-full h-auto px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-medium text-lg"
                placeholder="John Doe"
              />
              <FieldError errors={[errors.fullName]} />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-4 block">
              Email Address
            </FieldLabel>
            <FieldContent>
              <Input
                {...register("email")}
                type="email"
                className="w-full h-auto px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-medium text-lg"
                placeholder="john@example.com"
              />
              <FieldError errors={[errors.email]} />
            </FieldContent>
          </Field>
        </div>
      </section>

      {/* Step 4: Payment */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
            4
          </span>
          <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
            Payment
          </h2>
        </div>

        <Payment amount={selectedWorkshop.price} currency="aed" />
        <Button type="submit" className="w-full mt-6 py-3">
          Confirm & Pay
          <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </form>
  );
}
