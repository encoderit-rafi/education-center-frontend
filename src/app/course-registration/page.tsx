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
      courseId: "",
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

  const selectedExam = EXAM_PREPARATION_COURSES.find((e) => e.id === selectedExamId);
  const formatOptions = selectedExam?.course_formats || [];
  const selectedFormat = formatOptions.find((f) => f.course_type_id === selectedFormatId);
  const courseOptions = selectedFormat?.courses || [];
  const selectedCourseDetails = courseOptions.find((c) => c.course_id === selectedCourseId);
  
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
            Your registration for {selectedExam?.name} - {selectedCourseDetails?.title} has been successfully scheduled
            for {selectedDate ? formatDate(selectedDate, "PPP") : ""} at{" "}
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
    <div className="min-h-screen bg-background pb-32 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tight mb-6">
            Course Registration
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Complete your registration by selecting your preferred course format and scheduling your sessions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Selection & Payment */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section 1: Examination Selection */}
            {!initialCourse && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                    1
                  </span>
                  <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                    Select Examination
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {EXAM_PREPARATION_COURSES.map((exam) => (
                    <button
                      key={exam.id}
                      type="button"
                      onClick={() => setValue("examId", exam.id)}
                      className={cn(
                        "px-8 py-3 rounded-full border-2 text-xs font-black uppercase tracking-widest transition-all",
                        selectedExamId === exam.id
                          ? "border-[#991B1B] bg-[#991B1B]/5 text-[#991B1B] shadow-md"
                          : "border-outline/5 bg-surface-container-low text-secondary/50 hover:border-[#991B1B]/20 hover:text-secondary",
                      )}
                    >
                      {exam.name}
                    </button>
                  ))}
                </div>
                {errors.examId && (
                  <p className="text-destructive text-sm mt-3">{errors.examId.message}</p>
                )}
              </section>
            )}

            {/* Section 2: Format Selection */}
            {(selectedExamId && !initialFormat) && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                    {initialCourse ? "1" : "2"}
                  </span>
                  <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                    Select Format
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {formatOptions.map((format) => (
                    <button
                      key={format.course_type_id}
                      type="button"
                      onClick={() => setValue("formatId", format.course_type_id)}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all",
                        selectedFormatId === format.course_type_id
                          ? "border-[#991B1B] bg-white shadow-xl"
                          : "border-outline/5 bg-surface-container-low hover:bg-slate-50",
                      )}
                    >
                      <h3 className="text-xl font-headline font-black mb-2 text-secondary">{format.title}</h3>
                      <p className="text-sm text-on-surface-variant">{format.description}</p>
                    </button>
                  ))}
                </div>
                {errors.formatId && (
                  <p className="text-destructive text-sm mt-3">{errors.formatId.message}</p>
                )}
              </section>
            )}

            {/* Section 3: Course Selection */}
            {selectedFormatId && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                    {initialCourse && initialFormat ? "1" : (initialCourse ? "2" : "3")}
                  </span>
                  <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                    Select Course Type
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {courseOptions.map((course) => {
                    const priceInfo = COURSES_DATA.find((c) => c.id === course.course_id);
                    return (
                      <button
                        key={course.course_id}
                        type="button"
                        onClick={() => setValue("courseId", course.course_id)}
                        className={cn(
                          "p-8 rounded-[2rem] border-2 text-left transition-all relative flex flex-col h-full",
                          selectedCourseId === course.course_id
                            ? "border-[#991B1B] bg-white shadow-2xl shadow-red-900/5"
                            : "border-outline/5 bg-surface-container-low hover:bg-slate-50",
                        )}
                      >
                        <div className="mb-4">
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full",
                            selectedCourseId === course.course_id ? "bg-[#991B1B]/10 text-[#991B1B]" : "bg-secondary/10 text-secondary"
                          )}>
                            {course.tags?.[0] || "Standard"}
                          </span>
                        </div>
                        <h3 className="text-2xl font-headline font-black text-secondary mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-on-surface-variant font-medium mb-6">
                          {course.subtitle}
                        </p>
                        
                        {priceInfo && (
                          <div className="text-2xl font-headline font-black text-secondary mb-6">
                            {priceInfo.currency} {priceInfo.price.toLocaleString()}
                          </div>
                        )}

                        <p className="text-sm text-on-surface-variant/80 line-clamp-3 mb-8 flex-grow">
                          {course.overview}
                        </p>

                        <div
                          className={cn(
                            "w-full py-4 rounded-xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-auto",
                            selectedCourseId === course.course_id
                              ? "bg-[#991B1B] text-white shadow-xl shadow-red-900/20"
                              : "bg-white border-2 border-outline/10 text-secondary/60 group-hover:border-primary/20",
                          )}
                        >
                          {selectedCourseId === course.course_id && (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                          {selectedCourseId === course.course_id ? "Selected" : "Select Plan"}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.courseId && (
                  <p className="text-destructive text-sm mt-3">{errors.courseId.message}</p>
                )}
              </section>
            )}

            {/* Selected Course Details Showcase */}
            {selectedCourseDetails && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="bg-gradient-to-br from-secondary to-slate-800 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedCourseDetails.tags?.map((tag: string) => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-white/90">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-headline font-black mb-4">{selectedCourseDetails.title}</h3>
                      <p className="text-lg text-white/80 font-medium mb-12 max-w-2xl">{selectedCourseDetails.overview}</p>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50 mb-6">Key Benefits</h4>
                          <ul className="space-y-4">
                            {selectedCourseDetails.benefits?.map((benefit: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-white/90">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50 mb-6">Course Details</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-white/10">
                              <span className="text-white/60">Duration</span>
                              <span className="font-bold">{selectedCourseDetails.courseDetails?.completionTime}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-white/10">
                              <span className="text-white/60">Class Size</span>
                              <span className="font-bold">{selectedCourseDetails.courseDetails?.classSize}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/60">Format</span>
                              <span className="font-bold">{selectedCourseDetails.courseDetails?.format}</span>
                            </div>
                          </div>
                        </div>
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
                    {initialCourse && initialFormat ? "2" : (initialCourse ? "3" : "4")}
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
                          onSelect={(date) => setValue("date", date as Date, { shouldValidate: true })}
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
                          onValueChange={(val) => setValue("timeSlot", val as string, { shouldValidate: true })}
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
                        We will send your schedule confirmation and portal access credentials to this
                        email address once payment is complete.
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
                    {initialCourse && initialFormat ? "3" : (initialCourse ? "4" : "5")}
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

          {/* Right Column: Summary */}
          <div className="lg:col-span-4 sticky top-28 space-y-8">
            <section className="bg-secondary p-10 rounded-xl text-white shadow-2xl shadow-secondary/20 overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-headline font-black tracking-tight">
                  Registration Summary
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  Secure
                </span>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                    Selected Exam
                  </span>
                  <span className="text-xl font-bold tracking-tight">
                    {selectedExam?.name || "Not selected"}
                  </span>
                </div>

                <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                    Course & Format
                  </span>
                  <span className="text-lg font-bold tracking-tight">
                    {selectedCourseDetails?.title || "Not selected"}
                  </span>
                  {selectedFormat && (
                    <span className="text-sm text-white/60">{selectedFormat.title}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-8 pb-6 border-b border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                      Start Date
                    </span>
                    <span className="text-sm font-bold">
                      {selectedDate ? formatDate(selectedDate, "PPP") : "Not selected"}
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
                    <span className="text-xl font-bold text-primary">{currency}</span>
                    <span className="text-5xl font-headline font-black text-white tracking-tighter">
                      {price > 0 ? price.toLocaleString() : "0"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
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
