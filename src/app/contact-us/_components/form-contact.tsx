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
import { Button } from "@/components/ui/button";

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
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-8 text-center space-y-4 animate-fade-up">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h3 className="text-2xl font-black uppercase tracking-tight">Message Sent!</h3>
        <p className="text-emerald-700 font-medium">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.fullName}>
          <FieldLabel className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
            Full Name <span className="text-primary">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              placeholder="John Doe"
              {...register("fullName")}
              className="bg-slate-50/50 border-slate-200 focus-visible:ring-primary h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
            />
          </FieldContent>
          {errors.fullName && (
            <FieldError>{errors.fullName.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
            Email Address <span className="text-primary">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="bg-slate-50/50 border-slate-200 focus-visible:ring-primary h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <Field data-invalid={!!errors.subject}>
        <FieldLabel className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
          Subject <span className="text-primary">*</span>
        </FieldLabel>
        <FieldContent>
          <Input
            placeholder="How can we help you?"
            {...register("subject")}
            className="bg-slate-50/50 border-slate-200 focus-visible:ring-primary h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
          />
        </FieldContent>
        {errors.subject && <FieldError>{errors.subject.message}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.message}>
        <FieldLabel className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
          Message <span className="text-primary">*</span>
        </FieldLabel>
        <FieldContent>
          <Textarea
            placeholder="Tell us more about your inquiry..."
            rows={5}
            {...register("message")}
            className="bg-slate-50/50 border-slate-200 focus-visible:ring-primary rounded-xl p-6 placeholder:text-slate-400 font-medium resize-none"
          />
        </FieldContent>
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>

      <div className="space-y-4">
        <div className="scale-90 origin-left">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={() => setCaptchaError(null)}
          />
        </div>
        {captchaError && (
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{captchaError}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 px-12 rounded-xl font-black uppercase tracking-widest text-xs w-full md:w-auto transition-all active:scale-95"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

