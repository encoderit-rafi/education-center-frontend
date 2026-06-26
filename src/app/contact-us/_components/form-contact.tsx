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
import { useTranslations } from "next-intl";

import { ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  enquiryTopic: string;
  message: string;
};

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const t = useTranslations("ContactUsPage");
  const tForm = useTranslations("ContactUsPage.FormSection.form");

  const ENQUIRY_TOPICS = [
    { value: "Exam Registration", label: tForm("topics.exam_registration") },
    { value: "Exam Preparation Courses", label: tForm("topics.prep_courses") },
    { value: "Exam Proctoring", label: tForm("topics.proctoring") },
    { value: "Special Accommodation", label: tForm("topics.accommodation") },
    { value: "Test Dates & Availability", label: tForm("topics.dates_availability") },
    { value: "Fees & Payment", label: tForm("topics.fees_payment") },
    { value: "Free Consultation", label: tForm("topics.consultation") },
    { value: "Paid Mock Test", label: tForm("topics.mock_test") },
    { value: "Partnership", label: tForm("topics.partnership") },
    { value: "General Enquiry", label: tForm("topics.general_enquiry") },
    { value: "Referral", label: tForm("topics.referral") },
    { value: "Value-driven Collaboration", label: tForm("topics.value_driven_collaboration") },
    { value: "Venue Rental", label: tForm("topics.venue_rental") },
    { value: "Assessment Solutions", label: tForm("topics.assessment_solutions") },
    { value: "Exam Delivery", label: tForm("topics.exam_delivery") },
    { value: "Venue Availability", label: tForm("topics.venue_availability") },
    { value: "Other", label: tForm("topics.other") },
  ];

  const contactSchema = z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.firstNameRequired") })
      .min(2, { message: tForm("validation.firstNameMin") }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.lastNameRequired") })
      .min(2, { message: tForm("validation.lastNameMin") }),
    email: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.emailRequired") })
      .email({ message: tForm("validation.emailInvalid") }),
    city: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.cityRequired") }),
    country: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.countryRequired") }),
    enquiryTopic: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.topicRequired") }),
    message: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.messageRequired") })
      .min(10, { message: tForm("validation.messageMin") }),
  });

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
      city: "",
      country: "",
      enquiryTopic: "",
      message: "",
    },
  });
  console.log("👉 ~ ContactForm ~ errors:", errors);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        city: data.city,
        country: data.country,
        category: data.enquiryTopic
          ? data.enquiryTopic.toLowerCase().replace(/[^a-z0-9]+/g, "_")
          : "general",
        subject: data.enquiryTopic || "Inquiry",
        message: data.message,
      };

      await api.post("/contact", payload);

      toast.success(tForm("toast.successTitle"), {
        description: tForm("toast.successDesc"),
      });

      reset();
      captchaRef.current?.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(tForm("toast.errorTitle"), {
        description: tForm("toast.errorDesc"),
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => handleSubmit(onSubmit)(e)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.firstName}>
          <FieldLabel required>{tForm("firstName")}</FieldLabel>
          <FieldContent>
            <Input placeholder={tForm("firstNamePlaceholder")} {...register("firstName")} />
          </FieldContent>
          {errors.firstName && (
            <FieldError>{errors.firstName.message}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.lastName}>
          <FieldLabel required>{tForm("lastName")}</FieldLabel>
          <FieldContent>
            <Input placeholder={tForm("lastNamePlaceholder")} {...register("lastName")} />
          </FieldContent>
          {errors.lastName && (
            <FieldError>{errors.lastName.message}</FieldError>
          )}
        </Field>
      </div>

      <div className="w-full bg-slate-100/80 my-4" />

      <div className="grid grid-cols-1 gap-6">
        <Field data-invalid={!!errors.email}>
          <FieldLabel required>{tForm("email")}</FieldLabel>
          <FieldContent>
            <Input
              type="email"
              placeholder={tForm("emailPlaceholder")}
              {...register("email")}
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <div className="w-full bg-slate-100/80 my-4" />
      <Field data-invalid={!!errors.city}>
        <FieldLabel required>{tForm("city")}</FieldLabel>
        <FieldContent>
          <Input {...register("city")} placeholder={tForm("cityPlaceholder")} />
        </FieldContent>
        <FieldError errors={[errors.city]} />
      </Field>
      <div className="w-full bg-slate-100/80 my-4" />

      <Field data-invalid={!!errors.country}>
        <FieldLabel className="text-sm font-medium">
          {tForm("country")} <span className="text-primary font-bold">*</span>
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
          {tForm("topic")} <span className="text-primary font-bold">*</span>
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
                      {field.value
                        ? ENQUIRY_TOPICS.find((t) => t.value === field.value)?.label
                        : tForm("selectTopic")}
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
                  <DropdownMenuRadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    {ENQUIRY_TOPICS.map((topic) => (
                      <DropdownMenuRadioItem key={topic.value} value={topic.value}>
                        {topic.label}
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
        <FieldLabel required>{tForm("message")}</FieldLabel>
        <FieldContent>
          <Textarea
            placeholder={tForm("messagePlaceholder")}
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
            {isSubmitting ? tForm("submitting") : tForm("submit")}
          </div>
        </Button>

        <p className="flex items-center gap-1 text-sm">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="font-medium">
            {tForm("responseTime")}
          </span>
        </p>
      </div>
    </form>
  );
}
