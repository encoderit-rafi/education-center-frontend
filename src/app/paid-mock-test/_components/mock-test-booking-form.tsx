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
import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";

import { CheckCircle2, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  mockTestId: z.string().min(1, "Please select a mock test"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    message: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface MockTestBookingFormProps {
  initialMockTestId?: string;
  className?: string;
}

export default function MockTestBookingForm({
  initialMockTestId,
  className,
}: MockTestBookingFormProps) {
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
      mockTestId: initialMockTestId || paid_mock_tests[0].id,
      paymentMethod: "card",
    },
  });

  const selectedId = watch("mockTestId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const selectedItem =
    paid_mock_tests.find((m) => m.id === selectedId) || paid_mock_tests[0];

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
            Booking Confirmed
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your {selectedItem.exam_name} Mock Test has been successfully
            scheduled for {selectedDate ? format(selectedDate, "PPP") : ""} at{" "}
            {selectedTime}. Check your email for testing credentials.
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
      className={cn("space-y-16 max-w-5xl mx-auto", className)}
    >
      <div className="space-y-16">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              1
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Schedule & Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Test Date
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
                <Info className="text-primary w-5 h-5 mt-0.5" />
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  We will send your testing credentials and link to this email
                  address 24 hours before your selected slot.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              2
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              Secure Payment
            </h2>
          </div>

          <Payment amount={selectedItem?.price?.fee || 0} currency="aed" />
          <Button type="submit" className="w-full mt-6 py-3">
            Confirm & Pay
            <ArrowRight className="w-5 h-5" />
          </Button>
        </section>
      </div>
    </form>
  );
}
