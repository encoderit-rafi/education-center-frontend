"use client";
import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  User,
  Mail,
  Info,
  Trophy,
  XIcon,
  MapPin,
  MessageSquare,
  Clock,
  ChevronDown,
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
import api from "@/axios";
import { toast } from "sonner";


import { useTranslations } from "next-intl";

type TestValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  preferredContactMethod: string;
  preferredTime: string;
  answers: Record<string, string>;
  writtenExpression?: string;
};

export default function TestYourEnglishForm() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const attemptIdRef = useRef<string | null>(null);

  const t = useTranslations("TestYourEnglish");

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
    if (!isValid) return;

    // On step 1 → 2, call attempt-start to get the attempt_id and question UUIDs
    if (step === 1) {
      try {
        const formData = form.getValues();
        const nameParts = formData.fullName.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

        const res = await api.post("/english-test/attempt-start", {
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phoneNumber,
          country: formData.country,
          city: formData.city,
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
  };

  const handlePrev = () => setStep((prev) => prev - 1);

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
    } catch (error: any) {
      toast.error(t("toast.submitErrorTitle"), {
        description: error.response?.data?.message || t("toast.submitErrorDesc"),
      });
    }
  };

  return (
    <div className="space-y-12">
      {/* Result Dialog */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-[450px] p-0 overflow-hidden border-none rounded-md"
        >
          <div className="bg-primary p-8 text-white text-center space-y-4 relative">
            <DialogClose className="absolute top-4 right-4 p-2 rounded-md hover:bg-white/10 text-white transition-colors cursor-pointer">
              <XIcon size={20} />
            </DialogClose>
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Trophy size={40} className="text-white" />
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight text-white">
              {t("success.title")}
            </DialogTitle>
            <p className="text-white/80 font-medium">
              {t("success.subtitle")}
            </p>
          </div>

          <div className="p-8 space-y-8 bg-white">
            <div className="bg-slate-50 rounded-md p-4 border border-slate-100 flex items-start gap-3">
              <Info className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {t("success.description")}
              </p>
            </div>

            <Button
              className="w-full h-12 font-bold rounded-md"
              onClick={() => {
                setStep(1);
                setIsSuccess(false);
                form.reset();
              }}
            >
              {t("success.retake")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <form onSubmit={handleSubmit(onSubmit)} className="animate-fade-up">
        {step === 1 && (
          <div className="bg-white border border-slate-200 rounded-md p-8 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-secondary">
                {t("step1")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel required>{t("fullName")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("fullName")}
                      className="pl-10 h-10"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("email")}
                      type="email"
                      className="pl-10 h-10"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("city")}
                      className="pl-10 h-10"
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

            </div>

            <Button
              type="button"
              onClick={handleNext}
              size="lg"
              className="w-full md:w-auto px-5"
            >
              {t("start")}
            </Button>
            <p>{t("introText")}</p>
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
                            value={field.value}
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
                      {errors.answers?.[q.id] && (
                        <FieldError>{errors.answers[q.id]?.message}</FieldError>
                      )}
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
