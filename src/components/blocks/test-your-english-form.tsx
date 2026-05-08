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
import { Textarea } from "@/components/ui/textarea";

const QUESTIONS = [
  {
    id: "q1",
    text: "Grammar Assessment",
    subtext: 'Choose the correct form to complete: "If she _______ harder, she would have passed the exam."',
    options: ["studies", "studied", "had studied", "has studied"],
  },
  {
    id: "q2",
    text: "Vocabulary Mastery",
    subtext: "Which word is a synonym for 'Meticulous'?",
    options: ["Careless", "Thorough", "Quick", "Boring"],
  },
];

const testSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(5, "Please enter a valid phone number"),
  answers: z.record(z.string(), z.string().min(1, "Please select an answer")),
  writtenExpression: z.string().min(10, "Response must be at least 10 characters"),
});

type TestValues = z.infer<typeof testSchema>;

export default function TestYourEnglishForm() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<TestValues>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      answers: {},
      writtenExpression: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = form;

  const currentAnswers = watch("answers");

  const handleNext = async () => {
    let fieldsToValidate: (keyof TestValues)[] = [];
    if (step === 1) {
      fieldsToValidate = ["fullName", "email", "phoneNumber"];
    } else if (step === 2) {
      // Ensure all questions are answered
      const allAnswered = QUESTIONS.every((q) => currentAnswers[q.id]);
      if (!allAnswered) {
        // We can manually trigger validation for "answers" if needed
        await trigger("answers");
        return;
      }
      fieldsToValidate = ["answers"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const onSubmit = (data: TestValues) => {
    console.log("Assessment Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 animate-in zoom-in-95 duration-500 shadow-2xl shadow-emerald-500/5">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-5xl text-emerald-600 font-bold">
            verified
          </span>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-headline font-black text-emerald-900 tracking-tight leading-none">
            Assessment Complete
          </h3>
          <p className="text-emerald-700/70 text-lg leading-relaxed font-medium max-w-lg mx-auto">
            Our academic board has received your responses. Your personalized
            proficiency profile and course roadmap will be sent to your email
            within 4 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setStep(1);
            setIsSuccess(false);
            form.reset();
          }}
          className="px-12 py-5 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-16 rounded-full transition-all duration-500",
                step >= i ? "bg-primary" : "bg-surface-container-high",
              )}
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">
          Phase {step} of 3
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        {step === 1 && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-black text-secondary tracking-tight">
                Basic Profile
              </h3>
              <p className="text-on-surface-variant/60 font-medium">
                Please provide your contact details for the official results
                report.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Field>
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Full Name
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("fullName")}
                    className="w-full h-auto px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                    placeholder="First & Last Name"
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
                    className="w-full h-auto px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                    placeholder="results@example.com"
                  />
                  <FieldError errors={[errors.email]} />
                </FieldContent>
              </Field>

              <Field className="md:col-span-2">
                <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                  Phone Number
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("phoneNumber")}
                    type="tel"
                    className="w-full h-auto px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary placeholder:text-slate-500"
                    placeholder="+971 -- --- ----"
                  />
                  <FieldError errors={[errors.phoneNumber]} />
                </FieldContent>
              </Field>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
            >
              Begin Proficiency Check
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-16">
            {QUESTIONS.map((q) => (
              <div key={q.id} className="space-y-8">
                <Field>
                  <div className="space-y-2 mb-8">
                    <h4 className="text-2xl font-headline font-black text-secondary tracking-tight">
                      {q.text}
                    </h4>
                    <p className="text-on-surface-variant/60 font-medium leading-relaxed">
                      {q.subtext}
                    </p>
                  </div>
                  <FieldContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {q.options.map((opt) => (
                        <div
                          key={opt}
                          onClick={() =>
                            setValue(`answers.${q.id}`, opt, {
                              shouldValidate: true,
                            })
                          }
                          className={cn(
                            "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group",
                            currentAnswers[q.id] === opt
                              ? "border-primary bg-white shadow-xl shadow-primary/5"
                              : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white",
                          )}
                        >
                          <span
                            className={cn(
                              "text-sm font-bold transition-colors",
                              currentAnswers[q.id] === opt
                                ? "text-primary"
                                : "text-secondary/60 group-hover:text-secondary",
                            )}
                          >
                            {opt}
                          </span>
                          {currentAnswers[q.id] === opt && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white scale-110 shadow-lg">
                              <span className="material-symbols-outlined text-xs font-bold">
                                check
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <FieldError errors={[errors.answers?.[q.id]]} />
                  </FieldContent>
                </Field>
              </div>
            ))}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                type="button"
                className="w-16 h-16 rounded-2xl border-2 border-outline/5 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="flex-grow py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl"
              >
                Proceed to Writing Section
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-black text-secondary tracking-tight">
                Written Expression
              </h3>
              <p className="text-on-surface-variant/60 font-medium">
                Describe your primary goal for improving your English in 2-3
                sentences. This helps us gauge your sentence structure and
                coherence.
              </p>
            </div>
            <Field>
              <FieldLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">
                Your Response
              </FieldLabel>
              <FieldContent>
                <Textarea
                  {...register("writtenExpression")}
                  className="w-full p-8 bg-surface-container-low rounded-[2rem] border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary resize-none placeholder:text-slate-500"
                  rows={6}
                  placeholder="Type your response here..."
                />
                <FieldError errors={[errors.writtenExpression]} />
              </FieldContent>
            </Field>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                type="button"
                className="w-16 h-16 rounded-2xl border-2 border-outline/5 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                type="submit"
                className="flex-grow py-5 bg-primary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20"
              >
                Submit Assessment
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-secondary/30 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              AI-Augmented Academic Evaluation
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
