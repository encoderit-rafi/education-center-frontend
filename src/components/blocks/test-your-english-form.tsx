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


const TIMES = [
  { label: "Morning (9:00 AM – 11:30 AM)", value: "Morning" },
  { label: "Afternoon (12:00 PM – 5:30 PM)", value: "Afternoon" },
  { label: "Evening (6:00 PM – 8:30 PM)", value: "Evening" },
];

const CONTACT_METHODS = [
  { label: "Phone Call", value: "Phone Call" },
  { label: "Email", value: "Email" },
  { label: "WhatsApp / Telegram", value: "WhatsApp / Telegram" },
];

const testSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full Name is required")
    .min(2, "Full name must be at least 2 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email Address is required")
    .email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .min(5, "Please enter a valid phone number"),
  country: z
    .string()
    .trim()
    .min(1, "Country is required"),
  city: z
    .string()
    .trim()
    .min(1, "Emirate / City is required"),
  preferredContactMethod: z
    .string()
    .trim()
    .min(1, "Preferred Contact Method is required"),
  preferredTime: z
    .string()
    .trim()
    .min(1, "Preferred Time is required"),
  answers: z.record(z.string(), z.string().min(1, "Please select an answer")),
  writtenExpression: z.string().optional(),
});

type TestValues = z.infer<typeof testSchema>;

export default function TestYourEnglishForm() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const attemptIdRef = useRef<string | null>(null);
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
          toast.error("Could not start the test", {
            description: "Server did not return a valid attempt ID. Please try again.",
          });
          return;
        }

        // questions now come from the useEffect GET /english-test/questions call
      } catch (error: any) {
        toast.error("Could not start the test", {
          description: error.response?.data?.message || "Please try again later.",
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
      toast.error("Submission failed", {
        description: error.response?.data?.message || "An unexpected error occurred. Please try again.",
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
              Assessment Complete!
            </DialogTitle>
            <p className="text-white/80 font-medium">
              Your results are being processed
            </p>
          </div>

          <div className="p-8 space-y-8 bg-white">
            <div className="bg-slate-50 rounded-md p-4 border border-slate-100 flex items-start gap-3">
              <Info className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Our academic board has received your responses. Your
                personalized proficiency profile and course roadmap will be sent
                to your email within 4 hours.
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
              Retake Assessment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Progress Indicator */}
      {/* <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-12 rounded-full transition-all duration-500",
                step >= i ? "bg-primary" : "bg-slate-100",
              )}
            />
          ))}
        </div>
     
      </div> */}

      <form onSubmit={handleSubmit(onSubmit)} className="animate-fade-up">
        {step === 1 && (
          <div className="bg-white border border-slate-200 rounded-md p-8 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-secondary">
                Personal Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel required>Full Name</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("fullName")}
                      className="pl-10 h-10"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <FieldError>{errors.fullName.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel required>Email Address</FieldLabel>
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
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

             

             

              <Field data-invalid={!!errors.country}>
                <FieldLabel required>Country</FieldLabel>
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
                <FieldLabel required>Emirate / City</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("city")}
                      className="pl-10 h-10"
                      placeholder="Dubai"
                    />
                  </div>
                  {errors.city && (
                    <FieldError>{errors.city.message}</FieldError>
                  )}
                </FieldContent>
              </Field>
               <Field data-invalid={!!errors.phoneNumber}>
                <FieldLabel required>Phone Number</FieldLabel>
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
                <FieldLabel required>Preferred Contact Method</FieldLabel>
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
                                  : "Select contact method"}
                              </span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)] w-auto bg-white">
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
                <FieldLabel required>Preferred Time to Contact You</FieldLabel>
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
                                  : "Select time"}
                              </span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)] w-auto bg-white">
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
              Start
            </Button>
            <p>Please allocate a few minutes to complete our online English Level Test. We take your English Language
              assessment seriously.</p>
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
                Loading questions...
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
                      Choose the correct option
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
                  ? "Processing..."
                  : "Submit Assessment"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
