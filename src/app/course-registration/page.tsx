"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format as formatDate } from "date-fns";
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
import { CheckCircle2, Info, ArrowRight, Check } from "lucide-react";
import EXAM_PREPARATION_COURSES from "@/lib/demo-data/exam-preparation-courses";
import COURSES_DATA from "@/lib/demo-data/courses";
import { Badge } from "@/components/ui/badge";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const bookingSchema = z.object({
  examId: z.string().min(1, "Please select an examination"),
  formatId: z.string().min(1, "Please select a format"),
  courseId: z.string().min(1, "Please select a course"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    error: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

function EnrollmentContent() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course");
  const initialFormat = searchParams.get("format");
  const initialType = searchParams.get("type");

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
      examId: initialCourse || "",
      formatId: initialFormat || "",
      courseId: initialType || "",
      paymentMethod: "card",
    },
  });

  const selectedExamId = watch("examId");
  const selectedFormatId = watch("formatId");
  const selectedCourseId = watch("courseId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  // Reset dependent fields when parent selection changes
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "examId" && type === "change") {
        setValue("formatId", "", { shouldValidate: true });
        setValue("courseId", "", { shouldValidate: true });
      }
      if (name === "formatId" && type === "change") {
        setValue("courseId", "", { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const selectedExam = EXAM_PREPARATION_COURSES.find(
    (e) => e.id === selectedExamId,
  );
  const formatOptions = selectedExam?.course_formats || [];
  const selectedFormat = formatOptions.find(
    (f) => f.course_type_id === selectedFormatId,
  );
  const courseOptions = selectedFormat?.courses || [];
  const selectedCourseDetails = courseOptions.find(
    (c) => c.course_id === selectedCourseId,
  );

  // Find price from courses data
  const coursePriceInfo = COURSES_DATA.find((c) => c.id === selectedCourseId);
  const price = coursePriceInfo?.price || 0;
  const currency = coursePriceInfo?.currency || "AED";

  const onSubmit = (data: BookingValues) => {
    console.log("Booking Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500 mt-20">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">
            Registration Confirmed
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your registration for {selectedExam?.name} -{" "}
            {selectedCourseDetails?.title} has been successfully scheduled for{" "}
            {selectedDate ? formatDate(selectedDate, "PPP") : ""} at{" "}
            {selectedTime}. Check your email for details.
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
    <div className="min-h-screen bg-background base-px base-py">
      <div className="section-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto items-start"
        >
          {/* Main Content: Selection & Payment */}
          <div className="space-y-16">
            {/* Hidden fields to ensure values are registered in form state */}
            <input type="hidden" {...register("examId")} />
            <input type="hidden" {...register("formatId")} />
            <input type="hidden" {...register("courseId")} />


            {/* Selected Course Details Showcase */}
            {selectedCourseDetails && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="destructive">
                        {selectedCourseDetails.title.includes("Private")
                          ? "Premium"
                          : "Standard"}
                      </Badge>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-headline font-black mb-4">
                      {selectedCourseDetails.title}
                    </h3>
                    <div className="text-lg font-medium mb-8 max-w-4xl whitespace-pre-wrap leading-relaxed">
                      {selectedCourseDetails.description}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Section 4: Schedule & Information */}
            {selectedCourseId && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                        Start Date
                      </FieldLabel>
                      <FieldContent>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) =>
                            setValue("date", date as Date, {
                              shouldValidate: true,
                            })
                          }
                          className="rounded-3xl border border-outline/5 bg-surface-container-low p-6 h-fit w-full flex justify-center"
                        />
                        <FieldError errors={[errors.date]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                        Preferred Time
                      </FieldLabel>
                      <FieldContent>
                        <RadioGroup
                          value={selectedTime}
                          onValueChange={(val) =>
                            setValue("timeSlot", val as string, {
                              shouldValidate: true,
                            })
                          }
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
                                    : "border-outline/5 bg-surface-container-low text-secondary/50 hover:bg-slate-50",
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
                          className="w-full h-auto px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-400"
                          placeholder="John Doe"
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
                          className="w-full h-auto px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-400"
                          placeholder="john@example.com"
                        />
                        <FieldError errors={[errors.email]} />
                      </FieldContent>
                    </Field>

                    <div className="p-6 bg-primary/5 rounded-2xl flex items-start gap-4 mt-12">
                      <Info className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                      <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                        We will send your schedule confirmation and portal
                        access credentials to this email address once payment is
                        complete.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Section 5: Secure Payment */}
            {selectedCourseId && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                    2
                  </span>
                  <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                    Secure Payment
                  </h2>
                </div>

                <div className="bg-surface-container p-8 rounded-[3rem] space-y-8">
                  <Payment amount={price} currency={currency.toLowerCase()} />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-headline font-black py-6 rounded-[2rem] text-sm uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    Confirm Registration & Pay
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </section>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function EnrollCoursePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <EnrollmentContent />
    </Suspense>
  );
}
