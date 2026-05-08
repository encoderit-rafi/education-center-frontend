"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { COURSES } from "@/lib/courses-data";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Briefcase, CalendarCheck, Check, SendHorizontal, CheckCircle2, ShieldCheck, ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTEXTS = [
  { id: "academic", label: "Academic Guidance", icon: GraduationCap },
  { id: "professional", label: "Career Strategy", icon: Briefcase },
];

const formSchema = z
  .object({
    context: z.string().min(1, "Please select a context"),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    courseId: z.string().optional(),
    description: z.string().optional(),
    preferredDate: z.date({
      error: "Please select a preferred date",
    }),
    preferredTime: z.string().min(1, "Please select a preferred time"),
  })
  .refine(
    (data) => {
      if (data.context === "academic" && !data.courseId) {
        return false;
      }
      return true;
    },
    {
      message: "Please select a course",
      path: ["courseId"],
    }
  );

type FormValues = z.infer<typeof formSchema>;

export default function FreeConsultationForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting },
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

  const onSubmit = async (data: FormValues) => {
    console.log("Submitting:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-10 text-center space-y-6 animate-fade-up">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
        <div className="space-y-2">
          <h3 className="text-3xl font-black uppercase tracking-tight">Session Confirmed!</h3>
          <p className="text-emerald-700 font-medium text-lg">
            Thank you! Your Discovery Session is booked. Check your inbox for the calendar invite.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="border-emerald-200 text-emerald-800 hover:bg-emerald-100/50"
        >
          Book Another Session
        </Button>
      </div>
    );
  }

  const isAcademic = selectedContext === "academic";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 lg:space-y-16">
      {/* 1. Context Selection */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">1</span>
          <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Select Context</h4>
        </div>

        <RadioGroup
          value={selectedContext}
          onValueChange={(val) => {
            setValue("context", val as string);
            if (val === "professional") {
              setValue("courseId", "");
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CONTEXTS.map((ctx) => (
            <Field key={ctx.id} className="relative">
              <RadioGroupItem value={ctx.id} id={ctx.id} className="sr-only" />
              <label
                htmlFor={ctx.id}
                className={cn(
                  "p-4 md:p-6 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 w-full",
                  selectedContext === ctx.id
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-slate-200 bg-slate-50/30 hover:border-primary/30 hover:bg-slate-50/50",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors",
                    selectedContext === ctx.id
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-400",
                  )}
                >
                  <ctx.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span
                  className={cn(
                    "text-sm md:text-base font-bold transition-colors",
                    selectedContext === ctx.id ? "text-slate-900" : "text-slate-400",
                  )}
                >
                  {ctx.label}
                </span>
                {selectedContext === ctx.id && (
                  <div className="ml-auto w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </label>
            </Field>
          ))}
        </RadioGroup>
        {errors.context && <FieldError>{errors.context.message}</FieldError>}
      </div>

      {isAcademic && (
        <>
          <div className="w-full h-px bg-slate-100/80" />

          {/* 2. Course Selection */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">2</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Target Course</h4>
            </div>

            <Field data-invalid={!!errors.courseId}>
              <FieldLabel className="text-sm font-medium">
                Which course are you interested in? <span className="text-primary font-bold">*</span>
              </FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="courseId"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 font-medium focus:ring-4 focus:ring-primary/5">
                        <SelectValue placeholder="Select an academic course" />
                      </SelectTrigger>
                      <SelectContent>
                        {COURSES.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.category} - {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldContent>
              {errors.courseId && <FieldError>{errors.courseId.message}</FieldError>}
            </Field>
          </div>
        </>
      )}

      <div className="w-full h-px bg-slate-100/80" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* 2 or 3. Scheduling */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">{isAcademic ? 3 : 2}</span>
            <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Scheduling</h4>
          </div>

          <div className="space-y-6">
            <Field data-invalid={!!errors.preferredDate}>
              <FieldLabel className="text-sm font-medium">Preferred Date <span className="text-primary font-bold">*</span></FieldLabel>
              <FieldContent>
                <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-0 sm:p-4 overflow-hidden">
                  <Calendar
                    mode="single"
                    selected={watch("preferredDate")}
                    onSelect={(date) => setValue("preferredDate", date as Date)}
                    className="mx-auto scale-[0.82] xs:scale-90 sm:scale-100 origin-top"
                  />
                </div>
              </FieldContent>
              {errors.preferredDate && <FieldError>{errors.preferredDate.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.preferredTime}>
              <FieldLabel className="text-sm font-medium">Time (GST) <span className="text-primary font-bold">*</span></FieldLabel>
              <FieldContent>
                <RadioGroup
                  value={selectedTime}
                  onValueChange={(val) => setValue("preferredTime", val as string)}
                  className="grid grid-cols-2 gap-2 sm:gap-3"
                >
                  {["09:00 AM", "02:00 PM"].map((t) => (
                    <div key={t}>
                      <RadioGroupItem value={t} id={t} className="sr-only" />
                      <label
                        htmlFor={t}
                        className={cn(
                          "flex items-center justify-center py-4 rounded-xl border font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all cursor-pointer w-full",
                          selectedTime === t
                            ? "border-primary bg-primary/5 text-primary shadow-sm"
                            : "border-slate-200 bg-slate-50/30 text-slate-400 hover:bg-slate-50/50",
                        )}
                      >
                        {t}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FieldContent>
              {errors.preferredTime && <FieldError>{errors.preferredTime.message}</FieldError>}
            </Field>
          </div>
        </div>

        {/* 3 or 4. Personal Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">{isAcademic ? 4 : 3}</span>
            <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Personal Details</h4>
          </div>

          <div className="space-y-6 shadow-2xl shadow-primary/5 border border-slate-100 rounded-xl p-4 sm:p-6 md:p-10">
            <Field data-invalid={!!errors.fullName}>
              <FieldLabel className="text-sm font-medium">
                Full Name <span className="text-primary font-bold">*</span>
              </FieldLabel>
              <FieldContent>
                <Input
                  {...register("fullName")}
                  className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
                  placeholder="John Doe"
                />
              </FieldContent>
              {errors.fullName && <FieldError>{errors.fullName.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel className="text-sm font-medium">
                Email Address <span className="text-primary font-bold">*</span>
              </FieldLabel>
              <FieldContent>
                <Input
                  {...register("email")}
                  type="email"
                  className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
                  placeholder="john@example.com"
                />
              </FieldContent>
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>

            <Field>
              <FieldLabel className="text-sm font-medium">Additional Context / Goals</FieldLabel>
              <FieldContent>
                <Textarea
                  {...register("description")}
                  rows={4}
                  className="bg-slate-50/50 border-slate-200 rounded-xl p-6 placeholder:text-slate-400 font-medium resize-none"
                  placeholder="Tell us about your academic goals..."
                />
              </FieldContent>
            </Field>

            <div className="pt-6 space-y-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-16 px-12 rounded-xl font-black uppercase tracking-widest text-[10px] sm:text-sm w-full transition-all active:scale-95 shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  {isSubmitting ? "Processing..." : "Confirm Discovery Session"}
                  {!isSubmitting && <SendHorizontal className="w-5 h-5" />}
                </div>
              </Button>

              <p className="flex items-center gap-2 text-[10px] sm:text-sm text-slate-500 font-medium justify-center lg:justify-start">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Private and secure.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
