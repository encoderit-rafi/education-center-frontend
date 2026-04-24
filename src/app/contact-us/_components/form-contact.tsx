"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";



import { CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const token = captchaRef.current?.getValue();

    if (!token) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }

    setCaptchaError(null);

    // Simulate API call
    console.log("Submitting:", { ...data, recaptchaToken: token });
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
    captchaRef.current?.reset();
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h3 className="text-2xl font-headline font-bold">Message Sent!</h3>
        <p className="text-emerald-700">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.fullName}>
          <FieldLabel className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">
            Full Name <span className="text-red-500">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              placeholder="John Doe"
              {...register("fullName")}
              className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12 rounded-md px-6 placeholder:text-gray-500"
            />
          </FieldContent>
          {errors.fullName && (
            <FieldError>{errors.fullName.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">
            Email Address <span className="text-red-500 font-extrabold">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              type="email"
              placeholder="john@university.edu"
              {...register("email")}
              className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12 rounded-md px-6 placeholder:text-gray-500"
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <Field data-invalid={!!errors.subject}>
        <FieldLabel className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">
          Subject <span className="text-red-500 font-extrabold">*</span>
        </FieldLabel>
        <FieldContent>
          <Input
            placeholder="How can we help you?"
            {...register("subject")}
            className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12 rounded-md px-6 placeholder:text-gray-500"
          />
        </FieldContent>
        {errors.subject && <FieldError>{errors.subject.message}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.message}>
        <FieldLabel className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">
          Message
        </FieldLabel>
        <FieldContent>
          <Textarea
            placeholder="How can we help illuminate your path?"
            rows={6}
            {...register("message")}
            className="bg-slate-50 border-slate-200 focus-visible:ring-primary rounded-md p-4 placeholder:text-gray-500"
          />
        </FieldContent>
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>

      <div className="space-y-2">
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={() => setCaptchaError(null)}
        />
        {captchaError && (
          <p className="text-red-500 text-sm font-medium">{captchaError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="crimson-gradient text-white w-full md:w-auto px-12 py-4 rounded-md font-headline font-bold text-lg active:scale-95 duration-200 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
