"use client";
import { useState, useRef, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Check,
  MapPin,
  MessageSquare,
  Clock,
  ChevronDown,
  Star,
  Calendar as CalendarIcon,
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import Stepper from "@/components/stepper";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import api from "@/axios";
import { toast } from "sonner";


import { useTranslations, useLocale } from "next-intl";

type TestValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  preferredContactMethod: string;
  preferredTime: string;
  preferredDate: Date;
  answers: Record<string, string>;
  writtenExpression?: string;
};

export default function TestYourEnglishForm({ onSuccess }: { onSuccess?: (val: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const attemptIdRef = useRef<string | null>(null);

  const t = useTranslations("TestYourEnglish");
  const locale = useLocale();

  const TIMES = [
    { label: t("times.morning"), value: "Morning" },
    { label: t("times.afternoon"), value: "Afternoon" },
    { label: t("times.evening"), value: "Evening" },
  ];

  const CONTACT_METHODS = [
    { label: t("contactMethods.phone"), value: "Phone Call" },
    { label: t("contactMethods.email"), value: "Email" },
    { label: t("contactMethods.whatsapp"), value: "WhatsApp / Telegram" },
  ];

  const testSchema = z.object({
    fullName: z
      .string()
      .trim()
      .min(1, t("validation.fullNameRequired"))
      .min(2, t("validation.fullNameMin")),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    phoneNumber: z
      .string()
      .trim()
      .min(1, t("validation.phoneRequired"))
      .min(5, t("validation.phoneMin")),
    country: z
      .string()
      .trim()
      .min(1, t("validation.countryRequired")),
    city: z
      .string()
      .trim()
      .min(1, t("validation.cityRequired")),
    preferredContactMethod: z
      .string()
      .trim()
      .min(1, t("validation.contactMethodRequired")),
    preferredTime: z
      .string()
      .trim()
      .min(1, t("validation.contactTimeRequired")),
    preferredDate: z.date({
      message: t("validation.datePreferenceRequired"),
    }),
    answers: z.record(z.string(), z.string().min(1, t("validation.answersRequired"))),
    writtenExpression: z.string().optional(),
  });

  interface ApiQuestionOption {
    key: string;
    label: string;
    marks: number;
  }

  interface ApiQuestion {
    id: string;
    questionText: string;
    options?: ApiQuestionOption[];
  }

  // API questions carry real UUIDs — fetched from GET /english-test/questions
  const [apiQuestions, setApiQuestions] = useState<ApiQuestion[]>([]);

  // Fetch real question UUIDs on mount
  useEffect(() => {
    api.get("/english-test/questions")
      .then((res) => {
        const data = res.data?.data ?? res.data;
        const questions = Array.isArray(data) ? data : data?.questions ?? [];
        if (questions.length > 0) {
          setApiQuestions(questions);
          console.log("Loaded", questions.length, "questions from API");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch English test questions:", err);
      });
  }, []);

  const form = useForm<TestValues>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      preferredContactMethod: "",
      preferredTime: "",
      preferredDate: undefined as unknown as Date,
      answers: {},
      writtenExpression: "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    formState: { errors },
  } = form;

  const currentAnswers = watch("answers");

  const handleNext = async () => {
    let fieldsToValidate: (keyof TestValues)[] = [];
    if (step === 1) {
      fieldsToValidate = [
        "fullName",
        "email",
        "phoneNumber",
        "country",
        "city",
        "preferredContactMethod",
        "preferredTime",
        "preferredDate",
      ];
    } else if (step === 2) {
      const allAnswered = apiQuestions.every((q) => currentAnswers[q.id]);
      if (!allAnswered) {
        await trigger("answers");
        return;
      }
      fieldsToValidate = ["answers"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) {
      toast.error(t("validation.requiredFieldsError"));
      return;
    }

    // On step 1 → 2, call attempt-start to get the attempt_id and question UUIDs
    if (step === 1) {
      try {
        const formData = form.getValues();
        const fullName = formData.fullName.trim();

        let preferredTime = formData.preferredTime;
        if (formData.preferredTime === "Morning") {
          preferredTime = "Morning (9:00 AM – 11:30 AM)";
        } else if (formData.preferredTime === "Afternoon") {
          preferredTime = "Afternoon (12:00 PM – 5:30 PM)";
        } else if (formData.preferredTime === "Evening") {
          preferredTime = "Evening (6:00 PM – 8:30 PM)";
        }

        const formattedDate = formData.preferredDate
          ? format(formData.preferredDate, "yyyy-MM-dd")
          : undefined;

        const res = await api.post("/english-test/attempt-start", {
          first_name: fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          country: formData.country,
          city: formData.city,
          preferred_contact_method: formData.preferredContactMethod,
          preferred_time_to_contact_you: preferredTime,
          date_preference: formattedDate,
        });

        // Remove debug alerts once structure is confirmed
        console.log("attempt-start full response:", JSON.stringify(res.data, null, 2));

        // Try multiple possible paths for attempt_id
        const rawData = res.data;
        const attemptIdValue =
          rawData?.attempt_id ??
          rawData?.data?.attempt_id ??
          rawData?.data?.id ??
          rawData?.id ??
          null;

        if (attemptIdValue) {
          setAttemptId(String(attemptIdValue));
          attemptIdRef.current = String(attemptIdValue);
        } else {
          console.warn("attempt_id not found in response:", rawData);
          toast.error(t("toast.startErrorTitle"), {
            description: t("toast.startErrorDesc"),
          });
          return;
        }

        // questions now come from the useEffect GET /english-test/questions call
      } catch (error: any) {
        toast.error(t("toast.startErrorTitle"), {
          description: error.response?.data?.message || t("toast.unexpectedError"),
        });
        return;
      }
    }

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: TestValues) => {
    try {
      // Build answers array from apiQuestions (real UUIDs from API)
      const answers = apiQuestions.map((q) => ({
        question_id: q.id,
        answer: data.answers[q.id] ?? "",
      }));

      console.log("Submitting:", { attempt_id: attemptIdRef.current, answers });

      await api.post("/english-test/attempt-submit", {
        attempt_id: attemptIdRef.current,
        answers,
      });

      setIsSuccess(true);
      onSuccess?.(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      toast.error(t("toast.submitErrorTitle"), {
        description: error.response?.data?.message || t("toast.submitErrorDesc"),
      });
    }
  };

  const onInvalid = (errors: any) => {
    if (errors.answers) {
      toast.error(t("validation.answersRequiredAll"));
    }
  };

  if (isSuccess) {
    const isRtl = locale === "ar";
    return (
      <div
        className="max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden animate-fade-up"
      >
        {/* Visual Header Banner */}
        <div className="bg-primary p-12 text-white text-center space-y-6 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative mx-auto w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner">
            <Check size={48} className="text-white animate-bounce" strokeWidth={3} />
            <Star size={16} className="absolute top-2 right-2 text-amber-300 animate-pulse" />
          </div>
          <div className="space-y-2 relative">
            <h1 className="text-4xl font-black tracking-tight text-white">
              {t("success.title")}
            </h1>
            <p className="text-white/80 font-medium">
              {t("success.subtitle")}
            </p>
          </div>
        </div>

        {/* Main Results Container */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-start">
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("success.description")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="animate-fade-up">
        {step === 1 && (
          <div className="bg-white border border-slate-200 rounded-md p-4 sm:p-8 space-y-6 sm:space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={20} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-secondary">
                {t("step1")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel required>{t("fullName")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User
                      className="absolute inset-s-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("fullName")}
                      className="ps-10 h-10"
                      placeholder={t("fullNamePlaceholder")}
                    />
                  </div>
                  {errors.fullName && (
                    <FieldError>{errors.fullName.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel required>{t("email")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <Mail
                      className="absolute inset-s-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("email")}
                      type="email"
                      className="ps-10 h-10"
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.country}>
                <FieldLabel required>{t("country")}</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <CountryDropdown
                        value={field.value}
                        onChange={(country) => field.onChange(country.name)}
                        className="h-10"
                      />
                    )}
                  />
                  {errors.country && (
                    <FieldError>{errors.country.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.city}>
                <FieldLabel required>{t("city")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <MapPin
                      className="absolute inset-s-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("city")}
                      className="ps-10 h-10"
                      placeholder={t("cityPlaceholder")}
                    />
                  </div>
                  {errors.city && (
                    <FieldError>{errors.city.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.phoneNumber}>
                <FieldLabel required>{t("phone")}</FieldLabel>
                <FieldContent>
                  <div className="rounded-md border border-input focus-within:ring-1 focus-within:ring-ring overflow-hidden">
                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="AE"
                          placeholder={t("phonePlaceholder")}
                          className="h-10 border-none focus-within:ring-0"
                        />
                      )}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <FieldError>{errors.phoneNumber.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.preferredContactMethod}>
                <FieldLabel required>{t("contactMethod")}</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="preferredContactMethod"
                    render={({ field }) => (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "flex h-10 w-full items-center justify-between overflow-hidden whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-base transition-[color,box-shadow,background-color] outline-none focus:border-primary focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
                              !field.value && "text-slate-400"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <MessageSquare className="text-slate-400 shrink-0" size={16} />
                              <span className="truncate">
                                {field.value
                                  ? CONTACT_METHODS.find((c) => c.value === field.value)?.label
                                  : t("selectContactMethod")}
                              </span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width) w-auto bg-white">
                          <DropdownMenuRadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            {CONTACT_METHODS.map((c) => (
                              <DropdownMenuRadioItem key={c.value} value={c.value}>
                                {c.label}
                              </DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  />
                  {errors.preferredContactMethod && (
                    <FieldError>{errors.preferredContactMethod.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.preferredTime}>
                <FieldLabel required>{t("contactTime")}</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="preferredTime"
                    render={({ field }) => (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "flex h-10 w-full items-center justify-between overflow-hidden whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-base transition-[color,box-shadow,background-color] outline-none focus:border-primary focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
                              !field.value && "text-slate-400"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <Clock className="text-slate-400 shrink-0" size={16} />
                              <span className="truncate">
                                {field.value
                                  ? TIMES.find((t) => t.value === field.value)?.label
                                  : t("selectTime")}
                              </span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
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
                  {errors.preferredTime && (
                    <FieldError>{errors.preferredTime.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.preferredDate}>
                <FieldLabel required>{t("datePreference")}</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="preferredDate"
                    render={({ field }) => (
                      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="ghost"
                              className={cn(
                                "flex h-10 w-full items-center justify-between overflow-hidden whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-base transition-[color,box-shadow,background-color] outline-none focus:border-primary focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
                                !field.value && "text-slate-400"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="text-slate-400 shrink-0" size={16} />
                                <span className="truncate">
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : t("selectDate")}
                                </span>
                              </div>
                              <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                            </Button>
                          }
                        />
                        <PopoverContent className="w-auto p-0" align="start" initialFocus={false}>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setIsCalendarOpen(false);
                            }}
                            disabled={(date) =>
                              date <= new Date() || date < new Date("1900-01-01") || date.getDay() === 5
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  />
                  {errors.preferredDate && (
                    <FieldError>{errors.preferredDate.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

            </div>

            <Button
              type="button"
              onClick={handleNext}
              size="lg"
              className="w-full md:w-auto px-5"
            >
              {t("start")}
            </Button>
            <div className="space-y-2 text-slate-600">
              <p>{t("introText")}</p>
              <p>{t("consentText")}</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div
            className="space-y-6 select-none"
            onContextMenu={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
          >
            {apiQuestions.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-md p-8 text-center text-slate-500 font-medium">
                {t("loading")}
              </div>
            ) : (
              apiQuestions.map((q, idx) => (
                <Field
                  key={q.id}
                  data-invalid={!!errors.answers?.[q.id]}
                  className={cn(
                    "bg-white border border-slate-200 rounded-md p-8 transition-colors",
                    errors.answers?.[q.id] &&
                    "border-destructive/50 ring-1 ring-destructive/10 bg-destructive/5",
                  )}
                >
                  <div className="space-y-6">
                    <Stepper step={idx + 1}>
                      <FieldLabel className="text-lg text-wrap font-bold text-secondary leading-tight normal-case">
                        {q.questionText}
                      </FieldLabel>
                    </Stepper>

                    <div className="mb-2">
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {t("guidance")}
                      </p>
                    </div>

                    <FieldContent>
                      <Controller
                        control={control}
                        name={`answers.${q.id}`}
                        render={({ field }) => (
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={field.onChange}
                            className="grid gap-3"
                          >
                            {(q.options ?? []).map((opt) => (
                              <div key={`${q.id}-${opt.key}`} className="relative">
                                <Label
                                  htmlFor={`${q.id}-${opt.key}`}
                                  className="flex items-center px-5 py-4 border-2 border-slate-100 rounded-md cursor-pointer hover:bg-slate-50 has-data-checked:border-primary has-data-checked:bg-primary/5 transition-all"
                                >
                                  <RadioGroupItem
                                    value={opt.key}
                                    id={`${q.id}-${opt.key}`}
                                    className="mr-3"
                                  />
                                  <span className="text-slate-700 font-medium text-wrap">
                                    {opt.label}
                                  </span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )}
                      />
                    </FieldContent>
                  </div>
                </Field>
              ))
            )}

            <div className="flex justify-end pt-6">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                size="lg"
                className="px-10 font-bold"
              >
                {form.formState.isSubmitting
                  ? t("submitting")
                  : t("submit")}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
