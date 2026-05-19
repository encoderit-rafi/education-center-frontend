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
import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { toast } from "sonner";
import api from "@/axios";

import { ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.string().min(1, { message: "Please select your country" }),
  enquiryTopic: z
    .string()
    .min(1, { message: "Please select an enquiry topic" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ENQUIRY_TOPICS = [
  "Exam Registration",
  "Exam Preparation Courses",
  "Exam Proctoring",
  "Special Accommodation",
  "Test Dates & Availability",
  "Fees & Payment",
  "Free Consultation",
  "Paid Mock Test",
  "Partnership",
  "General Enquiry",
];

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      enquiryTopic: "",
      message: "",
    },
  });
  console.log("👉 ~ ContactForm ~ errors:", errors);

  const onSubmit = async (data: ContactFormValues) => {
    const token = captchaRef.current?.getValue();

    if (!token) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }

    setCaptchaError(null);

    try {
      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        country: data.country,
        category: data.enquiryTopic
          ? data.enquiryTopic.toLowerCase().replace(/[^a-z0-9]+/g, "_")
          : "general",
        subject: data.enquiryTopic || "Inquiry",
        message: data.message,
      };

      await api.post("/contact", payload);

      toast.success("Enquiry Sent Successfully!", {
        description: "Our team will get back to you within 24 business hours.",
      });

      reset();
      captchaRef.current?.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to Send Enquiry", {
        description: "An error occurred while submitting. Please try again.",
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.firstName}>
          <FieldLabel required>First Name</FieldLabel>
          <FieldContent>
            <Input placeholder="John" {...register("firstName")} />
          </FieldContent>
          {errors.firstName && (
            <FieldError>{errors.firstName.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.lastName}>
          <FieldLabel required>Last Name</FieldLabel>
          <FieldContent>
            <Input placeholder="Doe" {...register("lastName")} />
          </FieldContent>
          {errors.lastName && (
            <FieldError>{errors.lastName.message}</FieldError>
          )}
        </Field>
      </div>

      <div className="w-full bg-slate-100/80 my-4" />

      <div className="grid grid-cols-1 gap-6">
        <Field data-invalid={!!errors.email}>
          <FieldLabel required>Email Address</FieldLabel>
          <FieldContent>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <div className="w-full bg-slate-100/80 my-4" />

      <Field data-invalid={!!errors.country}>
        <FieldLabel className="text-sm font-medium">
          Country <span className="text-primary font-bold">*</span>
        </FieldLabel>
        <FieldContent>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <CountryDropdown
                value={field.value}
                onChange={(c) => field.onChange(c.name)}
              />
            )}
          />
        </FieldContent>
        {errors.country && <FieldError>{errors.country.message}</FieldError>}
      </Field>

      <div className="w-full bg-slate-100/80 my-4" />

      <Field data-invalid={!!errors.enquiryTopic}>
        <FieldLabel className="text-sm font-medium">
          Enquiry Topic <span className="text-primary font-bold">*</span>
        </FieldLabel>
        <FieldContent>
          <Controller
            control={control}
            name="enquiryTopic"
            render={({ field }) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex h-11 w-full bg-white items-center justify-between whitespace-nowrap rounded-md border border-slate-200 px-3 py-2 text-base outline-none focus:border-primary focus:ring-3 focus:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium hover:border-slate-200 hover:text-inherit hover:bg-white hover:shadow-none transition-none"
                  >
                    <span className={!field.value ? "text-slate-400" : ""}>
                      {field.value || "Select a topic"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                  <DropdownMenuRadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    {ENQUIRY_TOPICS.map((topic) => (
                      <DropdownMenuRadioItem key={topic} value={topic}>
                        {topic}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          />
        </FieldContent>
        {errors.enquiryTopic && (
          <FieldError>{errors.enquiryTopic.message}</FieldError>
        )}
      </Field>

      <div className="w-full bg-slate-100/80 my-4" />

      <Field data-invalid={!!errors.message}>
        <FieldLabel required>Message</FieldLabel>
        <FieldContent>
          <Textarea
            placeholder="Tell us more about your inquiry..."
            rows={5}
            {...register("message")}
            className="bg-white border border-slate-200 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 rounded-md px-3 py-2 placeholder:text-slate-400 font-medium resize-none transition-[color,box-shadow,background-color] outline-none"
          />
        </FieldContent>
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>

      <div className="space-y-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-4 py-2 rounded-md font-semibold text-sm w-full md:w-auto transition-all active:scale-95"
        >
          <div className="flex items-center gap-3">
            {isSubmitting ? "Sending..." : "Submit"}
          </div>
        </Button>

        <p className="flex items-center gap-1 text-sm">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="font-medium">
            We&apos;ll get back to you within 1 to 2 working days. Your
            information is kept confidential.
          </span>
        </p>
      </div>
    </form>
  );
}
