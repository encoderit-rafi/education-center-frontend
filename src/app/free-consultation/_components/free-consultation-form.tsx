"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  SendHorizontal,
  ShieldCheck,
  Calendar as CalendarIcon,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/stepper";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { toast } from "sonner";
import api from "@/axios";

import { useTranslations, useLocale } from "next-intl";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  area: string;
  date: Date;
  time: string;
  message?: string;
};

export default function FreeConsultationForm() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const locale = useLocale();
  const t = useTranslations("FreeConsultationPage");
  const tForm = useTranslations("FreeConsultationPage.form");

  const AREAS = [
    { label: tForm("areas.booking"), value: "Exam Booking & Seat Availability" },
    { label: tForm("areas.prep"), value: "Exam Prep. Course" },
  ];

  const TIMES = [
    { label: tForm("times.morning"), value: "Morning" },
    { label: tForm("times.afternoon"), value: "Afternoon" },
    { label: tForm("times.evening"), value: "Evening" },
  ];

  const formSchema = z.object({
    fullName: z
      .string()
      .trim()
      .min(1, tForm("validation.fullNameRequired"))
      .min(2, tForm("validation.fullNameMin")),
    email: z
      .string()
      .trim()
      .min(1, tForm("validation.emailRequired"))
      .email(tForm("validation.emailInvalid")),
    phone: z
      .string()
      .trim()
      .min(1, tForm("validation.phoneRequired"))
      .min(5, tForm("validation.phoneMin")),
    country: z
      .string()
      .trim()
      .min(1, tForm("validation.countryRequired")),
    city: z
      .string()
      .trim()
      .min(1, tForm("validation.cityRequired")),
    area: z
      .string()
      .trim()
      .min(1, tForm("validation.areaRequired")),
    date: z.date({
      message: tForm("validation.dateRequired"),
    }),
    time: z
      .string()
      .trim()
      .min(1, tForm("validation.timeRequired")),
    message: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      area: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  const selectedDate = watch("date");

  const onSubmit = async (data: FormValues) => {
    try {
      const nameParts = data.fullName.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

      let consultationType = "exam";
      if (data.area === "Exam Prep. Course") {
        consultationType = "exam_preparation_course";
      }

      let preferredTime = undefined;
      if (data.time === "Morning") preferredTime = "09:00";
      if (data.time === "Afternoon") preferredTime = "12:00";
      if (data.time === "Evening") preferredTime = "18:00";

      const payload = {
        consultation_type: consultationType,
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        city: data.city,
        preferred_date: data.date ? format(data.date, "yyyy-MM-dd") : undefined,
        preferred_time: preferredTime,
        message: data.message,
      };

      const res = await api.post("/consultations", payload);
      if (res.data?.success || res.status === 200 || res.status === 201) {
        setIsSubmitted(true);
        reset();
      } else {
        toast.error(tForm("toast.errorTitle"), {
          description: res.data?.message || tForm("toast.errorDesc"),
        });
      }
    } catch (error: any) {
      toast.error(tForm("toast.errorTitle"), {
        description: error.response?.data?.message || tForm("toast.unexpectedError"),
      });
    }
  };

  if (isSubmitted) {
    const isRtl = locale === "ar";
    return (
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in text-slate-800"
      >
        <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
          <ShieldCheck size={36} />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-secondary">
            {tForm("toast.successTitle")}
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto text-base font-semibold text-justify">
            {tForm("toast.successDesc")}
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="font-bold px-8 h-12 rounded-xl transition-all active:scale-95 cursor-pointer"
        >
          {isRtl ? "إرسال طلب آخر" : "Submit Another Request"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <Stepper step={1}>{tForm("step1")}</Stepper>
          <div className="space-y-4">
            <Field data-invalid={!!errors.fullName}>
              <FieldLabel required>{tForm("fullName")}</FieldLabel>
              <FieldContent>
                <Input
                  {...register("fullName")}
                  placeholder={tForm("fullNamePlaceholder")}
                />
              </FieldContent>
              <FieldError errors={[errors.fullName]} />
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel required>{tForm("email")}</FieldLabel>
              <FieldContent>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder={tForm("emailPlaceholder")}
                />
              </FieldContent>
              <FieldError errors={[errors.email]} />
            </Field>

            <Field data-invalid={!!errors.phone}>
              <FieldLabel required>{tForm("phone")}</FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      defaultCountry="AE"
                      placeholder={tForm("phonePlaceholder")}
                      className="bg-slate-50 border border-slate-200 rounded-md overflow-hidden h-11 focus-within:ring-4 focus-within:ring-primary/5"
                    />
                  )}
                />
              </FieldContent>
              <FieldError errors={[errors.phone]} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field data-invalid={!!errors.country}>
                <FieldLabel required>{tForm("country")}</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <CountryDropdown
                        value={field.value}
                        onChange={(country) => field.onChange(country.name)}
                      />
                    )}
                  />
                </FieldContent>
                <FieldError errors={[errors.country]} />
              </Field>

              <Field data-invalid={!!errors.city}>
                <FieldLabel required>{tForm("city")}</FieldLabel>
                <FieldContent>
                  <Input
                    {...register("city")}
                    placeholder={tForm("cityPlaceholder")}
                  />
                </FieldContent>
                <FieldError errors={[errors.city]} />
              </Field>
            </div>
          </div>
        </div>

        {/* Consultation Details */}
        <div className="space-y-6">
          <Stepper step={2}>{tForm("step2")}</Stepper>
          <div className="space-y-4">
            <Field data-invalid={!!errors.area}>
              <FieldLabel required>{tForm("area")}</FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="area"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-slate-200 h-10 rounded-md px-4 font-medium">
                        <SelectValue placeholder={tForm("selectArea")} />
                      </SelectTrigger>
                      <SelectContent>
                        {AREAS.map((area) => (
                          <SelectItem key={area.value} value={area.value}>
                            {area.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldContent>
              <FieldError errors={[errors.area]} />
            </Field>

            <Field data-invalid={!!errors.date}>
              <FieldLabel required>{tForm("date")}</FieldLabel>
              <FieldContent>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-md border border-slate-200 px-3 py-2 text-sm transition-all outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 shadow-none hover:shadow-none hover:bg-transparent whitespace-nowrap",
                          !selectedDate && "text-slate-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                        {selectedDate ? (
                          format(selectedDate, "PPP")
                        ) : (
                          <span>{tForm("selectDate")}</span>
                        )}
                      </Button>
                    }
                  />
                  <PopoverContent className="w-auto p-0" align="start" initialFocus={false}>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setValue("date", date as Date);
                        setIsCalendarOpen(false);
                      }}
                      disabled={(date) =>
                        date <= new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FieldContent>
              <FieldError errors={[errors.date]} />
            </Field>

            <Field data-invalid={!!errors.time}>
              <FieldLabel required>{tForm("time")}</FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="time"
                  render={({ field }) => (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "flex h-10 w-full items-center justify-between overflow-hidden whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-base transition-[color,box-shadow,background-color] outline-none focus:border-primary focus:ring-3 focus:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
                            !field.value && "text-slate-400"
                          )}
                        >
                          {field.value
                            ? TIMES.find((t) => t.value === field.value)?.label
                            : tForm("selectTime")}
                          <ChevronDown className="h-4 w-4 text-slate-400" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width) w-auto bg-white">
                        <DropdownMenuRadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          {TIMES.map((t) => (
                            <DropdownMenuRadioItem key={t.value} value={t.value}>
                              {t.label}
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                />
              </FieldContent>
              <FieldError errors={[errors.time]} />
            </Field>

            <Field>
              <FieldLabel>{tForm("message")}</FieldLabel>
              <FieldContent>
                <Textarea
                  {...register("message")}
                  rows={4}
                  className="bg-white border-slate-200 rounded-md px-3 py-2 placeholder:text-slate-400 font-medium resize-none transition-[color,box-shadow,background-color] outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
                  placeholder={tForm("messagePlaceholder")}
                />
              </FieldContent>
            </Field>
          </div>
        </div>
      </div>

      <div className="pt-4 space-y-4 max-w-md mx-auto flex flex-col items-center justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-4 py-2 rounded-md font-bold uppercase tracking-widest text-sm w-full md:w-auto transition-all active:scale-95"
        >
          <div className="flex items-center gap-3">
            {isSubmitting ? tForm("sending") : tForm("submit")}
          </div>
        </Button>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium text-center">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>{tForm("responseTime")}</span>
        </div>
      </div>
    </form>
  );
}
