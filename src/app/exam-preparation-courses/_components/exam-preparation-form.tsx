"use client";

import React, { useState, Suspense } from "react";
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
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Info,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  examType: z.string().min(1, "Please select an exam"),
  coursePlan: z.string().min(1, "Please select a course plan"),
  preferredDate: z.date({
    error: "Please select a start date",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
});

type FormValues = z.infer<typeof formSchema>;

const COURSE_PLANS = [
  {
    id: "vip",
    title: "Private One-to-One (VIP)",
    price: 4850,
    duration: "24 Hours",
    icon: UserCheck,
    description: "Personalized intensive coaching tailored to your goals.",
  },
  {
    id: "semi-private",
    title: "Semi-Private (2 Students)",
    price: 2850,
    duration: "24 Hours",
    icon: Users,
    description: "Learn with a partner in a small, focused environment.",
  },
  {
    id: "group",
    title: "Group Course (Small Group)",
    price: 1850,
    duration: "24 Hours",
    icon: Users,
    description: "Dynamic classroom learning with expert instructor guidance.",
  },
  {
    id: "online",
    title: "Online Preparation",
    price: 4850,
    duration: "20 Hours",
    icon: Zap,
    description: "Live interactive sessions from the comfort of your home.",
  },
];

function ExamPreparationFormInner({
  initialExam,
  initialPlan,
}: {
  initialExam?: string;
  initialPlan?: string;
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      examType: initialExam || searchParams.get("exam") || "IELTS",
      coursePlan: initialPlan || searchParams.get("plan") || "vip",
    },
  });

  const selectedPlanId = watch("coursePlan");
  const selectedPlan = COURSE_PLANS.find((p) => p.id === selectedPlanId);
  const selectedExam = watch("examType");
  const selectedDate = watch("preferredDate");

  const onSubmit = (data: FormValues) => {
    console.log("Enrollment Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-black text-emerald-900 tracking-tight">
            Enrollment Successful
          </h2>
          <p className="text-emerald-700/80 text-lg leading-relaxed font-medium">
            Your enrollment for {selectedExam} {selectedPlan?.title} has been
            received. Our academic team will contact you shortly to finalize
            your schedule starting from{" "}
            {selectedDate ? format(selectedDate, "PPP") : ""}.
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
      className="space-y-24 max-w-5xl mx-auto"
    >
      <div className="space-y-20">
        {/* Section 1: Plan Selection */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              1
            </span>
            <div className="space-y-1">
              <h2 className="text-2xl font-headline font-black text-slate-900 tracking-tight">
                Select Your Plan
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Enrolling for:{" "}
                <span className="text-primary">{selectedExam} Preparation</span>
              </p>
            </div>
          </div>

          <RadioGroup
            value={selectedPlanId}
            onValueChange={(val) => setValue("coursePlan", val)}
            className="grid sm:grid-cols-2 gap-6"
          >
            {COURSE_PLANS.map((plan) => (
              <div key={plan.id} className="relative">
                <RadioGroupItem
                  value={plan.id}
                  id={plan.id}
                  className="sr-only"
                />
                <label
                  htmlFor={plan.id}
                  className={cn(
                    "relative block p-8 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-300 h-full",
                    selectedPlanId === plan.id
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/5 scale-[1.02]"
                      : "border-slate-50 bg-slate-50/30 hover:border-slate-200 hover:bg-white",
                  )}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={cn(
                        "size-12 rounded-2xl flex items-center justify-center transition-colors",
                        selectedPlanId === plan.id
                          ? "bg-primary text-white"
                          : "bg-white text-slate-400",
                      )}
                    >
                      <plan.icon className="size-6" />
                    </div>
                    {selectedPlanId === plan.id && (
                      <CheckCircle2 className="size-6 text-primary" />
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h3 className="font-black text-slate-900 text-lg">
                      {plan.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      AED
                    </span>
                    <span className="text-3xl font-black text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 ml-auto">
                      {plan.duration}
                    </span>
                  </div>
                </label>
              </div>
            ))}
          </RadioGroup>
          <FieldError errors={[errors.coursePlan]} />
        </section>

        {/* Section 2: Schedule & Information */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              2
            </span>
            <h2 className="text-2xl font-headline font-black text-slate-900 tracking-tight">
              Schedule & Information
            </h2>
          </div>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Preferred Start Date
              </FieldLabel>
              <FieldContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setValue("preferredDate", date as Date)}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6 h-fit mx-auto md:mx-0 shadow-sm"
                />
                <FieldError errors={[errors.preferredDate]} />
              </FieldContent>
            </Field>

            <div className="space-y-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Full Name
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("fullName")}
                    className="w-full h-14 px-6 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                    placeholder="Candidate Name"
                  />
                  <FieldError errors={[errors.fullName]} />
                </FieldContent>
              </Field>

              <div className="grid grid-cols-1 gap-8">
                <Field>
                  <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Email Address
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      {...register("email")}
                      type="email"
                      className="w-full h-14 px-6 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                      placeholder="email@example.com"
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Phone Number
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      {...register("phone")}
                      className="w-full h-14 px-6 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                      placeholder="+971 50 000 0000"
                    />
                    <FieldError errors={[errors.phone]} />
                  </FieldContent>
                </Field>
              </div>

              <div className="p-8 bg-primary/5 rounded-3xl flex items-start gap-4 mt-4 border border-primary/10">
                <Info className="text-primary w-5 h-5 mt-0.5" />
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Our academic team will contact you within 24 hours to finalize
                  your specific class timings based on instructor availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Secure Payment */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              3
            </span>
            <h2 className="text-2xl font-headline font-black text-slate-900 tracking-tight">
              Secure Checkout
            </h2>
          </div>

          <div className=" bg-slate-50 rounded-[3rem] border border-slate-100">
            <div>
              {selectedPlan?.price && selectedPlan.price > 0 ? (
                <Payment amount={selectedPlan.price} currency="aed" />
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-slate-400 gap-4">
                  <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center">
                    <Info className="size-6" />
                  </div>
                  <p className="text-sm font-bold">
                    Please select a preparation plan to continue
                  </p>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full mt-10 h-16 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              Complete Enrollment
              <ArrowRight className="size-6 ml-2" />
            </Button>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
              <ShieldCheck className="size-4" />
              Secured by Stripe — 256-bit SSL Encrypted
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}

export default function ExamPreparationForm(props: {
  initialExam?: string;
  initialPlan?: string;
}) {
  return (
    <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-slate-50 rounded-[3rem]" />}>
      <ExamPreparationFormInner {...props} />
    </Suspense>
  );
}
