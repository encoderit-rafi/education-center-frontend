import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, SendHorizontal, ShieldCheck, ChevronLeft, ArrowRight, GraduationCap, ClipboardCheck, PenTool, Check } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";

const QUESTIONS = [
  {
    id: "q1",
    text: "Grammar Assessment",
    subtext: 'Choose the correct form to complete: "If she _______ harder, she would have passed the exam."',
    options: ["studies", "studied", "had studied", "has studied"],
  },
  {
    id: "q2",
    text: "Vocabulary Mastery",
    subtext: "Which word is a synonym for 'Meticulous'?",
    options: ["Careless", "Thorough", "Quick", "Boring"],
  },
];

const testSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(5, "Please enter a valid phone number"),
  answers: z.record(z.string(), z.string().min(1, "Please select an answer")),
  writtenExpression: z.string().min(10, "Response must be at least 10 characters"),
});

type TestValues = z.infer<typeof testSchema>;

export default function TestYourEnglishForm() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<TestValues>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      answers: {},
      writtenExpression: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const currentAnswers = watch("answers");

  const handleNext = async () => {
    let fieldsToValidate: (keyof TestValues)[] = [];
    if (step === 1) {
      fieldsToValidate = ["fullName", "email", "phoneNumber"];
    } else if (step === 2) {
      const allAnswered = QUESTIONS.every((q) => currentAnswers[q.id]);
      if (!allAnswered) {
        await trigger("answers");
        return;
      }
      fieldsToValidate = ["answers"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const onSubmit = (data: TestValues) => {
    console.log("Assessment Data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-10 md:p-16 text-center space-y-6 md:space-y-8 animate-fade-up">
        <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-emerald-500 mx-auto" />
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-emerald-900 leading-none">
            Assessment Complete
          </h3>
          <p className="text-emerald-700 font-medium text-lg max-w-lg mx-auto">
            Our academic board has received your responses. Your personalized
            proficiency profile and course roadmap will be sent to your email
            within 4 hours.
          </p>
        </div>
        <Button
          onClick={() => {
            setStep(1);
            setIsSuccess(false);
            form.reset();
          }}
          variant="outline"
          className="border-emerald-200 text-emerald-800 hover:bg-emerald-100/50 h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-xs"
        >
          Retake Assessment
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-12 rounded-full transition-all duration-500",
                step >= i ? "bg-primary" : "bg-slate-100",
              )}
            />
          ))}
        </div>
        {/* <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          Step {step} of 3
        </span> */}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate-fade-up"
      >
        {step === 1 && (
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">1</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Basic Profile</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel className="text-sm font-medium">
                  Full Name <span className="text-primary font-bold">*</span>
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("fullName")}
                    className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
                    placeholder="John Doe"
                  />
                </FieldContent>
                {errors.fullName && <FieldError>{errors.fullName.message}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel className="text-sm font-medium">
                  Email Address <span className="text-primary font-bold">*</span>
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...register("email")}
                    type="email"
                    className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
                    placeholder="john@example.com"
                  />
                </FieldContent>
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.phoneNumber} className="md:col-span-2">
                <FieldLabel className="text-sm font-medium">
                  Phone Number <span className="text-primary font-bold">*</span>
                </FieldLabel>
                <FieldContent>
                  <div className="relative h-14 rounded-xl bg-slate-50/50 border border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-primary/5 transition-all overflow-hidden">
                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="AE"
                          className="h-full w-full border-none focus-within:ring-0 font-medium"
                        />
                      )}
                    />
                  </div>
                </FieldContent>
                {errors.phoneNumber && <FieldError>{errors.phoneNumber.message}</FieldError>}
              </Field>
            </div>

            <Button
              type="button"
              onClick={handleNext}
              className="h-16 px-12 rounded-xl font-black uppercase tracking-widest text-sm w-full md:w-auto transition-all active:scale-95 shadow-xl shadow-primary/10"
            >
              <div className="flex items-center gap-3">
                Begin Proficiency Check
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-16">
            {QUESTIONS.map((q, qIndex) => (
              <div key={q.id} className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">{qIndex + 2}</span>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">{q.text}</h4>
                </div>

                <Field data-invalid={!!errors.answers?.[q.id]}>
                  <div className="mb-6">
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {q.subtext}
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
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {q.options.map((opt) => (
                            <div key={opt} className="relative">
                              <RadioGroupItem value={opt} id={`${q.id}-${opt}`} className="sr-only" />
                              <label
                                htmlFor={`${q.id}-${opt}`}
                                className={cn(
                                  "p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer flex items-center justify-between",
                                  field.value === opt
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-slate-200 bg-slate-50/30 hover:border-primary/30 hover:bg-slate-50/50",
                                )}
                              >
                                <span
                                  className={cn(
                                    "text-base font-bold transition-colors",
                                    field.value === opt
                                      ? "text-slate-900"
                                      : "group-hover:text-slate-600",
                                  )}
                                >
                                  {opt}
                                </span>
                                {field.value === opt && (
                                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                                    <Check className="w-3.5 h-3.5" />
                                  </div>
                                )}
                              </label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    />
                    {errors.answers?.[q.id] && <FieldError>{errors.answers[q.id]?.message}</FieldError>}
                  </FieldContent>
                </Field>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="outline"
                type="button"
                onClick={handlePrev}
                className="h-16 px-8 rounded-xl border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="h-16 flex-grow rounded-xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  Proceed to Writing Section
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black">{QUESTIONS.length + 2}</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">Written Expression</h4>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 font-medium leading-relaxed">
                Describe your primary goal for improving your English in 2-3
                sentences. This helps us gauge your sentence structure and
                coherence.
              </p>

              <Field data-invalid={!!errors.writtenExpression}>
                <FieldLabel className="text-sm font-medium">
                  Your Response <span className="text-primary font-bold">*</span>
                </FieldLabel>
                <FieldContent>
                  <Textarea
                    {...register("writtenExpression")}
                    className="bg-slate-50/50 border-slate-200 rounded-xl p-6 placeholder:text-slate-400 font-medium resize-none shadow-sm"
                    rows={6}
                    placeholder="Type your response here..."
                  />
                </FieldContent>
                {errors.writtenExpression && <FieldError>{errors.writtenExpression.message}</FieldError>}
              </Field>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="outline"
                onClick={handlePrev}
                className="h-16 px-8 rounded-xl border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-16 flex-grow rounded-xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  {isSubmitting ? "Processing..." : "Submit Assessment"}
                  {!isSubmitting && <SendHorizontal className="w-5 h-5" />}
                </div>
              </Button>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium pt-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>AI-Augmented Academic Evaluation Secure.</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
