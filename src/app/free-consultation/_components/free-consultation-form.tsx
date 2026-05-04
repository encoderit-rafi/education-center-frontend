"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSES } from "@/lib/exam-preparation-courses-data";

import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Briefcase, CalendarCheck, Check } from "lucide-react";

const CONTEXTS = [
  { id: "academic", label: "Academic Guidance", icon: GraduationCap },
  { id: "professional", label: "Career Strategy", icon: Briefcase },
];

const formSchema = z.object({
  context: z.string().min(1, "Please select a context"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  courseId: z.string().min(1, "Please select a course"),
  description: z.string().optional(),
  preferredDate: z.date({
    error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
});

type FormValues = z.infer<typeof formSchema>;

export default function FreeConsultationForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      context: CONTEXTS[0].id,
      courseId: "",
      preferredDate: undefined,
      preferredTime: "",
    },
  });

  const selectedContext = watch("context");
  const selectedDate = watch("preferredDate");
  const selectedTime = watch("preferredTime");

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-8 py-10 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CalendarCheck className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-secondary tracking-tight">
            Session Confirmed
          </h2>
          <p className="text-on-surface-variant/70 text-lg leading-relaxed font-medium max-w-lg mx-auto">
            Your Discovery Session is booked. A personalized calendar invite
            with the meeting link has been sent to your inbox.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-12 py-4 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
      {/* 1. Context Selection */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
            Step 01
          </span>
          <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">
            Select Context
          </h4>
        </div>

        <RadioGroup
          value={selectedContext}
          onValueChange={(val) => setValue("context", val as string)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CONTEXTS.map((ctx) => (
            <Field key={ctx.id} className="relative">
              <RadioGroupItem value={ctx.id} id={ctx.id} className="sr-only" />
              <label
                htmlFor={ctx.id}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group flex items-center gap-4 w-full",
                  selectedContext === ctx.id
                    ? "border-primary bg-white shadow-xl shadow-primary/5"
                    : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    selectedContext === ctx.id
                      ? "bg-primary text-white"
                      : "bg-primary/5 text-primary",
                  )}
                >
                  <ctx.icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    "text-sm font-bold transition-colors",
                    selectedContext === ctx.id
                      ? "text-secondary"
                      : "text-secondary/40",
                  )}
                >
                  {ctx.label}
                </span>
                {selectedContext === ctx.id && (
                  <div className="ml-auto w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white scale-110">
                    <Check className="w-3 h-3 font-bold" />
                  </div>
                )}
              </label>
            </Field>
          ))}
        </RadioGroup>
        {errors.context && <FieldError errors={[errors.context]} />}
      </div>

      {/* 2. Course Selection */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
            Step 02
          </span>
          <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">
            Select Course
          </h4>
        </div>

        <RadioGroup
          value={watch("courseId")}
          onValueChange={(val) => setValue("courseId", val as string)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {COURSES.map((course) => (
            <Field key={course.id} className="relative">
              <RadioGroupItem
                value={course.id}
                id={course.id}
                className="sr-only"
              />
              <label
                htmlFor={course.id}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group flex flex-col items-start gap-4 w-full h-full",
                  watch("courseId") === course.id
                    ? "border-primary bg-white shadow-xl shadow-primary/5"
                    : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white",
                )}
              >
                <span className="text-[10px] font-black text-primary uppercase tracking-widest opacity-60">
                  {course.category}
                </span>
                <span
                  className={cn(
                    "text-sm font-bold transition-colors line-clamp-2",
                    watch("courseId") === course.id
                      ? "text-secondary"
                      : "text-secondary/40",
                  )}
                >
                  {course.title}
                </span>
                {watch("courseId") === course.id && (
                  <div className="absolute top-6 right-6 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white scale-110">
                    <Check className="w-3 h-3 font-bold" />
                  </div>
                )}
              </label>
            </Field>
          ))}
        </RadioGroup>
        {errors.courseId && <FieldError errors={[errors.courseId]} />}
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* 3. Lead Profiles */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
              Step 03
            </span>
            <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">
              Lead Profiles
            </h4>
          </div>
          <div className="space-y-6">
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

            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                Description / Goals
              </FieldLabel>
              <FieldContent>
                <Textarea
                  {...register("description")}
                  rows={4}
                  className="w-full h-auto px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                  placeholder="Tell us about your academic goals..."
                />
                <FieldError errors={[errors.description]} />
              </FieldContent>
            </Field>
          </div>
        </div>

        {/* 4. Availability */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
              Step 04
            </span>
            <h4 className="text-xl font-headline font-black text-secondary uppercase tracking-tight">
              Availability
            </h4>
          </div>
          <div className="space-y-8">
            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                Preferred Date
              </FieldLabel>
              <FieldContent>
                <Calendar
                  mode="single"
                  selected={watch("preferredDate")}
                  onSelect={(date) => setValue("preferredDate", date as Date)}
                  className="rounded-3xl border border-outline/5 bg-surface-container-low p-6"
                />
                <FieldError errors={[errors.preferredDate]} />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                Time (GST)
              </FieldLabel>
              <FieldContent>
                <RadioGroup
                  value={selectedTime}
                  onValueChange={(val) =>
                    setValue("preferredTime", val as string)
                  }
                  className="grid grid-cols-2 gap-3"
                >
                  {["09:00 AM", "02:00 PM"].map((t) => (
                    <div key={t}>
                      <RadioGroupItem value={t} id={t} className="sr-only" />
                      <label
                        htmlFor={t}
                        className={cn(
                          "flex items-center justify-center py-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer w-full text-center",
                          selectedTime === t
                            ? "border-primary bg-white text-secondary scale-105 shadow-md"
                            : "border-outline/5 bg-surface-container-low text-secondary/30",
                        )}
                      >
                        {t}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <FieldError errors={[errors.preferredTime]} />
              </FieldContent>
            </Field>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-outline/5">
        <button
          type="submit"
          className="w-full py-5 bg-secondary text-white font-headline font-black text-sm uppercase tracking-[0.2em] rounded-[2rem] hover:bg-primary transition-all shadow-2xl shadow-secondary/10 active:scale-[0.98]"
        >
          Confirm Discovery Session
        </button>
      </div>
    </form>
  );
}
