"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  phone: z.string().min(8, { message: "Valid phone number is required." }),
  source: z.string().min(1, { message: "Please select an option." }),
  course: z.string().min(1, { message: "Please select a course." }),
  q1: z.string({ required_error: "Please select an answer." }),
  q2: z.string({ required_error: "Please select an answer." }),
  writing: z.string().min(20, { message: "Please provide a slightly more detailed response (min 20 characters)." }),
});

type TestFormValues = z.infer<typeof testSchema>;

export default function TestYourEnglishForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TestFormValues>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      source: "",
      course: "",
      writing: "",
    },
  });

  const onSubmit = async (data: TestFormValues) => {
    console.log("Assessment Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-10 text-center space-y-4 shadow-sm h-full flex flex-col items-center justify-center min-h-[400px]">
        <span className="material-symbols-outlined text-6xl text-emerald-500">task_alt</span>
        <h2 className="text-3xl font-bold font-headline text-secondary tracking-tight">Assessment Submitted</h2>
        <p className="text-emerald-700 text-lg max-w-lg mx-auto">
          Thank you for completing the proficiency check! Our academic experts are reviewing your responses and will email your personalized course recommendations shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Step 1: Basic Info */}
      <div className="bg-slate-50 p-10 rounded-xl shadow-sm border-b-4 border-primary/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-headline">Basic Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field data-invalid={!!errors.fullName} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                badge
              </span>
              <input
                {...register("fullName")}
                className={cn(
                  "w-full pl-12 pr-4 py-4 bg-white border-none rounded-lg focus:ring-0 shadow-sm focus:bg-white border-b-2 border-transparent focus:border-primary transition-all placeholder:text-slate-300",
                  errors.fullName ? "border-b-red-500 bg-red-50" : ""
                )}
                placeholder="Enter your name"
                type="text"
              />
            </div>
            {errors.fullName && <FieldError className="mt-2 ml-1">{errors.fullName.message}</FieldError>}
          </Field>

          <Field data-invalid={!!errors.email} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                mail
              </span>
              <input
                {...register("email")}
                className={cn(
                  "w-full pl-12 pr-4 py-4 bg-white border-none rounded-lg focus:ring-0 shadow-sm focus:bg-white border-b-2 border-transparent focus:border-primary transition-all placeholder:text-slate-300",
                  errors.email ? "border-b-red-500 bg-red-50" : ""
                )}
                placeholder="example@email.com"
                type="email"
              />
            </div>
            {errors.email && <FieldError className="mt-2 ml-1">{errors.email.message}</FieldError>}
          </Field>

          <Field data-invalid={!!errors.phone} className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                call
              </span>
              <input
                {...register("phone")}
                className={cn(
                  "w-full pl-12 pr-4 py-4 bg-white border-none rounded-lg focus:ring-0 shadow-sm focus:bg-white border-b-2 border-transparent focus:border-primary transition-all placeholder:text-slate-300",
                  errors.phone ? "border-b-red-500 bg-red-50" : ""
                )}
                placeholder="+971 00 000 0000"
                type="tel"
              />
            </div>
            {errors.phone && <FieldError className="mt-2 ml-1">{errors.phone.message}</FieldError>}
          </Field>
        </div>
      </div>

      {/* Step 2: Insights */}
      <div className="bg-slate-50 p-10 rounded-xl shadow-sm border-b-4 border-primary/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-800">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-headline">Your Interests</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field data-invalid={!!errors.source} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
              How did you hear about us?
            </label>
            <select
              {...register("source")}
              className={cn(
                "w-full px-4 py-4 bg-white border-none rounded-lg focus:ring-0 shadow-sm focus:bg-white border-b-2 border-transparent focus:border-primary transition-all appearance-none cursor-pointer",
                errors.source ? "border-b-red-500 bg-red-50" : ""
              )}
            >
              <option value="">Select an option</option>
              <option value="Social Media">Social Media</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Friend Referral">Friend Referral</option>
              <option value="Advertisement">Advertisement</option>
            </select>
            {errors.source && <FieldError className="mt-2 ml-1">{errors.source.message}</FieldError>}
          </Field>

          <Field data-invalid={!!errors.course} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
              Interested Course
            </label>
            <select
              {...register("course")}
              className={cn(
                "w-full px-4 py-4 bg-white border-none rounded-lg focus:ring-0 shadow-sm focus:bg-white border-b-2 border-transparent focus:border-primary transition-all appearance-none cursor-pointer",
                errors.course ? "border-b-red-500 bg-red-50" : ""
              )}
            >
              <option value="">Select a course</option>
              <option value="IELTS Academic">IELTS Academic</option>
              <option value="General English">General English</option>
              <option value="Business English">Business English</option>
              <option value="Mock Test Only">Mock Test Only</option>
            </select>
            {errors.course && <FieldError className="mt-2 ml-1">{errors.course.message}</FieldError>}
          </Field>
        </div>
      </div>

      {/* Step 3: Test Questions */}
      <div className="bg-slate-50 p-10 rounded-xl shadow-sm border-b-4 border-primary/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">quiz</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-headline">Proficiency Assessment</h3>
        </div>
        <div className="space-y-12">
          {/* Question 1 */}
          <Field data-invalid={!!errors.q1} className="space-y-4">
            <p className="font-bold text-slate-900">
              1. Grammar: Choose the correct form to complete the sentence: "If she _______ harder, she would have passed the exam."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["studies", "studied", "had studied", "has studied"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center p-4 rounded-lg bg-white shadow-sm border-2 border-transparent hover:border-slate-200 cursor-pointer transition-all group"
                >
                  <input
                    {...register("q1")}
                    value={opt}
                    className="w-5 h-5 text-primary border-slate-300 focus:ring-0"
                    type="radio"
                  />
                  <span className="ml-3 font-medium group-hover:text-primary transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.q1 && <FieldError className="mt-2">{errors.q1.message}</FieldError>}
          </Field>

          {/* Question 2 */}
          <Field data-invalid={!!errors.q2} className="space-y-4">
            <p className="font-bold text-slate-900">2. Vocabulary: Which word is a synonym for 'Meticulous'?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Careless", "Thorough", "Quick", "Boring"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center p-4 rounded-lg bg-white shadow-sm border-2 border-transparent hover:border-slate-200 cursor-pointer transition-all group"
                >
                  <input
                    {...register("q2")}
                    value={opt}
                    className="w-5 h-5 text-primary border-slate-300 focus:ring-0"
                    type="radio"
                  />
                  <span className="ml-3 font-medium group-hover:text-primary transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.q2 && <FieldError className="mt-2">{errors.q2.message}</FieldError>}
          </Field>

          {/* Written Answer */}
          <Field data-invalid={!!errors.writing} className="space-y-4">
            <label className="block font-bold text-slate-900">
              3. Short Writing: Describe your primary goal for improving your English in 2-3 sentences.
            </label>
            <textarea
              {...register("writing")}
              className={cn(
                "w-full p-6 bg-white shadow-sm border-none rounded-lg focus:ring-0 focus:bg-white border-b-2 border-transparent focus:border-primary transition-all placeholder:text-slate-300 resize-none",
                errors.writing ? "border-b-red-500 bg-red-50" : ""
              )}
              placeholder="Type your response here..."
              rows={4}
            />
            {errors.writing && <FieldError className="mt-2">{errors.writing.message}</FieldError>}
          </Field>
        </div>
      </div>

      {/* Submit Section */}
      <div className="flex flex-col items-center gap-6 pt-8">
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-primary text-white w-full md:w-auto px-24 py-5 rounded-lg font-extrabold text-xl shadow-lg hover:bg-red-800 hover:scale-[1.02] transition-all active:scale-95 duration-100 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? <span className="material-symbols-outlined animate-spin mr-2">refresh</span> : null}
          {isSubmitting ? "Submitting..." : "Submit Test"}
        </button>
        <div className="flex items-center gap-2 text-slate-500">
          <span className="material-symbols-outlined text-lg">verified_user</span>
          <p className="text-sm font-medium">Your results will be reviewed by our team.</p>
        </div>
      </div>
    </form>
  );
}
