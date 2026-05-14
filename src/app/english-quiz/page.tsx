"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trophy, ArrowRight, User, Mail, Info } from "lucide-react";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which sentence is grammatically correct?",
    options: [
      { id: "a", text: "She don't like coffee.", points: 0 },
      { id: "b", text: "She doesn't likes coffee.", points: 0 },
      { id: "c", text: "She doesn't like coffee.", points: 10 },
      { id: "d", text: "She not like coffee.", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Choose the correct synonym for 'Enormous':",
    options: [
      { id: "a", text: "Tiny", points: 0 },
      { id: "b", text: "Huge", points: 10 },
      { id: "c", text: "Weak", points: 0 },
      { id: "d", text: "Bright", points: 0 },
    ],
  },
  {
    id: 3,
    question: "I have been living here ___ 2010.",
    options: [
      { id: "a", text: "for", points: 0 },
      { id: "b", text: "since", points: 10 },
      { id: "c", text: "from", points: 0 },
      { id: "d", text: "during", points: 0 },
    ],
  },
  {
    id: 4,
    question: "What is the past participle of 'Write'?",
    options: [
      { id: "a", text: "Wrote", points: 0 },
      { id: "b", text: "Writing", points: 0 },
      { id: "c", text: "Written", points: 10 },
      { id: "d", text: "Writes", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Identify the antonym of 'Generous':",
    options: [
      { id: "a", text: "Kind", points: 0 },
      { id: "b", text: "Selfish", points: 10 },
      { id: "c", text: "Rich", points: 0 },
      { id: "d", text: "Polite", points: 0 },
    ],
  },
  {
    id: 6,
    question: "If I ___ you, I would take the job.",
    options: [
      { id: "a", text: "am", points: 0 },
      { id: "b", text: "was", points: 0 },
      { id: "c", text: "were", points: 10 },
      { id: "d", text: "be", points: 0 },
    ],
  },
  {
    id: 7,
    question: "Which of these is a noun?",
    options: [
      { id: "a", text: "Quickly", points: 0 },
      { id: "b", text: "Beautiful", points: 0 },
      { id: "c", text: "Happiness", points: 10 },
      { id: "d", text: "Run", points: 0 },
    ],
  },
  {
    id: 8,
    question: "They ___ playing football when it started to rain.",
    options: [
      { id: "a", text: "is", points: 0 },
      { id: "b", text: "was", points: 0 },
      { id: "c", text: "were", points: 10 },
      { id: "d", text: "are", points: 0 },
    ],
  },
  {
    id: 9,
    question: "Choose the correctly spelled word:",
    options: [
      { id: "a", text: "Accomodate", points: 0 },
      { id: "b", text: "Accommodate", points: 10 },
      { id: "c", text: "Acomodate", points: 0 },
      { id: "d", text: "Acommodify", points: 0 },
    ],
  },
  {
    id: 10,
    question: "The book is ___ the table.",
    options: [
      { id: "a", text: "in", points: 0 },
      { id: "b", text: "at", points: 0 },
      { id: "c", text: "on", points: 10 },
      { id: "d", text: "over", points: 0 },
    ],
  },
];

const quizSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  answers: z.record(
    z.string(),
    z.string().min(1, "Please answer this question"),
  ),
});

type QuizFormValues = z.infer<typeof quizSchema>;

export default function EnglishQuizPage() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      fullName: "",
      email: "",
      answers: Object.fromEntries(
        QUIZ_QUESTIONS.map((q) => [q.id.toString(), ""]),
      ),
    },
  });

  const onSubmit = (data: QuizFormValues) => {
    let totalScore = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      const selectedOptionId = data.answers[q.id.toString()];
      const option = q.options.find((o) => o.id === selectedOptionId);
      if (option) {
        totalScore += option.points;
      }
    });
    setScore(totalScore);
    setShowResult(true);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tight mb-4">
            English Proficiency{" "}
            <span className="text-primary italic">Quiz</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Test your English skills and get instant results.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Info Card */}
          <div className="bg-white border border-slate-200 rounded-md p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-secondary">
                Personal Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel required>Full Name</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("fullName")}
                      className="pl-10"
                      placeholder="John Doe"
                    />
                  </div>
                  <FieldError errors={[errors.fullName]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Email Address</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("email")}
                      className="pl-10"
                      placeholder="john@example.com"
                    />
                  </div>
                  <FieldError errors={[errors.email]} />
                </FieldContent>
              </Field>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {QUIZ_QUESTIONS.map((q, idx) => (
              <Field
                key={q.id}
                className="bg-white border border-slate-200 rounded-md p-8 shadow-sm"
              >
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <div className="space-y-6 flex-1">
                    <FieldLabel className="text-lg font-bold text-secondary leading-tight normal-case">
                      {q.question}
                    </FieldLabel>

                    <FieldContent>
                      <Controller
                        name={`answers.${q.id}`}
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="grid gap-3"
                          >
                            {q.options.map((option) => (
                            <div key={option.id} className="relative">
                              <Label
                                htmlFor={`q${q.id}-${option.id}`}
                                className="flex items-center px-5 py-4 border-2 border-slate-100 rounded-md cursor-pointer hover:bg-slate-50 has-data-checked:border-primary has-data-checked:bg-primary/5 transition-all"
                              >
                                <RadioGroupItem
                                  value={option.id}
                                  id={`q${q.id}-${option.id}`}
                                  className="mr-3"
                                />
                                <span className="text-slate-700 font-medium">
                                  {option.text}
                                </span>
                              </Label>
                            </div>
                          ))}
                          </RadioGroup>
                        )}
                      />
                      <FieldError
                        errors={[
                          errors.answers?.[q.id.toString()] as
                            | { message?: string }
                            | undefined,
                        ]}
                      />
                    </FieldContent>
                  </div>
                </div>
              </Field>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              className="px-12 h-14 text-lg font-bold rounded-md group"
            >
              Submit Quiz
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </form>
      </div>

      {/* Result Dialog */}
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none rounded-md">
          <div className="bg-primary p-8 text-white text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Trophy size={40} className="text-white" />
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight text-white">
              Quiz Completed!
            </DialogTitle>
            <p className="text-white/80 font-medium">
              Here's how you performed
            </p>
          </div>

          <div className="p-8 space-y-8 bg-white">
            <div className="flex justify-around items-center">
              <div className="text-center">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Your Score
                </p>
                <p className="text-5xl font-black text-secondary">
                  {score}
                  <span className="text-xl text-slate-300">/100</span>
                </p>
              </div>
              <div className="h-12 w-px bg-slate-100" />
              <div className="text-center">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Rank
                </p>
                <p className="text-2xl font-black text-primary">
                  {score >= 80
                    ? "Expert"
                    : score >= 50
                      ? "Intermediate"
                      : "Beginner"}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-md p-4 border border-slate-100 flex items-start gap-3">
              <Info className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-slate-600 leading-relaxed">
                {score >= 80
                  ? "Outstanding! You have a strong command of the English language. Consider taking our advanced IELTS/PTE courses."
                  : score >= 50
                    ? "Good job! You have a solid foundation. Our preparation courses can help you achieve even better results."
                    : "Keep practicing! Our beginner-friendly courses are designed to help you build confidence and core skills."}
              </p>
            </div>

            <Button
              className="w-full h-12 font-bold rounded-md"
              onClick={() => {
                setShowResult(false);
                reset();
              }}
            >
              Take Quiz Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
