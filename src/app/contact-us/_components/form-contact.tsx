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
import { Controller } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";



import { CheckCircle2, ChevronDown, SendHorizontal, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().min(5, { message: "Please enter a valid phone number" }),
  country: z.string().min(1, { message: "Please select your country" }),
  emiratesCity: z.string().optional(),
  enquiryTopic: z.string().min(1, { message: "Please select an enquiry topic" }),
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
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      emiratesCity: "",
      enquiryTopic: "",
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
          <FieldLabel className="text-sm font-medium">
            Full Name <span className="text-primary font-bold">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              placeholder="John Doe"
              {...register("fullName")}
            />
          </FieldContent>
          {errors.fullName && (
            <FieldError>{errors.fullName.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel className="text-sm font-medium">
            Email Address <span className="text-primary font-bold">*</span>
          </FieldLabel>
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

      <div className="w-full h-px bg-slate-100/80 my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.phoneNumber}>
          <FieldLabel className="text-sm font-medium">
            Phone number <span className="text-primary font-bold">*</span>
          </FieldLabel>
          <FieldContent>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <PhoneInput
                  value={field.value}
                  onChange={field.onChange}
                  defaultCountry="AE"
                />
              )}
            />
          </FieldContent>
          {errors.phoneNumber && (
            <FieldError>{errors.phoneNumber.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.emiratesCity}>
          <FieldLabel className="text-sm font-medium">
            Emirate / City <span className="text-primary font-bold">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              placeholder="Select City"
              {...register("emiratesCity")}
              className="h-11"
            />
          </FieldContent>
          {errors.emiratesCity && (
            <FieldError>{errors.emiratesCity.message}</FieldError>
          )}
        </Field>
      </div>

      <div className="w-full h-px bg-slate-100/80 my-4" />

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

      <div className="w-full h-px bg-slate-100/80 my-4" />

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
                    className="flex h-11 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-2 text-base transition-[color,box-shadow,background-color] outline-none focus:border-primary focus:ring-3 focus:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium"
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
                    <DropdownMenuRadioItem value="Exam Registration">
                      Exam Registration
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Exam Preparation Courses">
                      Exam Preparation Courses
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Exam Proctoring">
                      Exam Proctoring
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Special Accommodation">
                      Special Accommodation
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Test Dates & Availability">
                      Test Dates & Availability
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Fees & Payment">
                      Fees & Payment
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="General Enquiry">
                      General Enquiry
                    </DropdownMenuRadioItem>
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

      <div className="w-full h-px bg-slate-100/80 my-4" />

      <Field data-invalid={!!errors.message}>
        <FieldLabel className="text-sm font-medium">
          Message <span className="text-primary font-bold">*</span>
        </FieldLabel>
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

      <div className="space-y-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 px-12 rounded-xl font-black uppercase tracking-widest text-xs w-full md:w-auto transition-all active:scale-95"
        >
          <div className="flex items-center gap-3">
            {isSubmitting ? "Sending..." : "Send Enquiry"}
            {!isSubmitting && <SendHorizontal className="w-4 h-4" />}
          </div>
        </Button>

        <p className="flex items-center gap-1 text-sm">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="font-medium">We'll get back to you within 24 hours. Your information is kept confidential.</span>
        </p>
      </div>
    </form>
  );
}

