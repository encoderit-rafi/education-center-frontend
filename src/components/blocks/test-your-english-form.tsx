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
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  SendHorizontal,
  ShieldCheck,
  ChevronLeft,
  ArrowRight,
  User,
  Mail,
  Phone,
  Info,
  Trophy,
  Check,
  XIcon,
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import Stepper from "@/components/stepper";

const QUESTIONS = [
  {
    id: "q1",
    text: "I ___ Jhon.",
    subtext: "Choose the correct option",
    options: ["is", "am", "are", "be"],
  },
  {
    id: "q2",
    text: "She ___ a nurse.",
    subtext: "Choose the correct option",
    options: ["is", "are", "am", "be"],
  },
  {
    id: "q3",
    text: "Choose the correct option: “What’s this?” — “It’s ___ apple.”",
    subtext: "Choose the correct option",
    options: ["a", "an", "the", "some"],
  },
  {
    id: "q4",
    text: "They ___ from Australia.",
    subtext: "Choose the correct option",
    options: ["is", "be", "are", "am"],
  },
  {
    id: "q5",
    text: "“Where are you from?” — “___ from Egypt.”",
    subtext: "Choose the correct option",
    options: ["I’m", "I", "Me", "Mine"],
  },
  {
    id: "q6",
    text: "My brother ___ in London.",
    subtext: "Choose the correct option",
    options: ["live", "living", "lives", "lived"],
  },
  {
    id: "q7",
    text: "I want ___ tea, please.",
    subtext: "Choose the correct option",
    options: ["any", "some", "a", "an"],
  },
  {
    id: "q8",
    text: "What time is it? It’s ___ 3 o’clock.",
    subtext: "Choose the correct option",
    options: ["on", "at", "in", "to"],
  },
  {
    id: "q9",
    text: "I usually ___ to work by bus.",
    subtext: "Choose the correct option",
    options: ["go", "goes", "going", "went"],
  },
  {
    id: "q10",
    text: "She can’t come now because she ___ dinner.",
    subtext: "Choose the correct option",
    options: ["cooks", "is cooking", "cooked", "has cooked"],
  },
  {
    id: "q11",
    text: "We didn’t go out ___ the weather was bad.",
    subtext: "Choose the correct option",
    options: ["but", "because", "so", "and"],
  },
  {
    id: "q12",
    text: "I’ve got a headache. I need ___ medicine.",
    subtext: "Choose the correct option",
    options: ["a", "an", "some", "few"],
  },
  {
    id: "q13",
    text: "The meeting starts ___ 9:30.",
    subtext: "Choose the correct option",
    options: ["in", "on", "at", "for"],
  },
  {
    id: "q14",
    text: "Which sentence is correct?",
    subtext: "Choose the correct option",
    options: [
      "He don’t like coffee.",
      "He doesn’t likes coffee.",
      "He doesn’t like coffee.",
      "He not like coffee.",
    ],
  },
  {
    id: "q15",
    text: "“How often do you exercise?” — “___.”",
    subtext: "Choose the correct option",
    options: ["Yesterday", "At the gym", "Twice a week", "With my friend"],
  },
  {
    id: "q16",
    text: "The film was very ___; I almost fell asleep.",
    subtext: "Choose the correct option",
    options: ["bored", "boring", "bore", "bores"],
  },
  {
    id: "q17",
    text: "If it rains tomorrow, we ___ at home.",
    subtext: "Choose the correct option",
    options: ["stay", "will stay", "stayed", "staying"],
  },
  {
    id: "q18",
    text: "I’ve lived in this city ___ 2018.",
    subtext: "Choose the correct option",
    options: ["for", "since", "from", "during"],
  },
  {
    id: "q19",
    text: "She asked me ___ I could help her.",
    subtext: "Choose the correct option",
    options: ["what", "if", "that", "why"],
  },
  {
    id: "q20",
    text: "I’m not used to ___ in such cold weather.",
    subtext: "Choose the correct option",
    options: ["drive", "drove", "driving", "drives"],
  },
  {
    id: "q21",
    text: "“Could you send me the report?” — “___.”",
    subtext: "Choose the correct option",
    options: [
      "Yes, I sent",
      "Yes, I will send it soon",
      "Yes, I am sending yesterday",
      "Yes, I send",
    ],
  },
  {
    id: "q22",
    text: "The book was ___ interesting that I finished it in one day.",
    subtext: "Choose the correct option",
    options: ["so", "much", "too", "very"],
  },
  {
    id: "q23",
    text: "When I arrived, they ___ dinner.",
    subtext: "Choose the correct option",
    options: ["have", "were having", "had", "are having"],
  },
  {
    id: "q24",
    text: "I don’t mind ___ late today.",
    subtext: "Choose the correct option",
    options: ["work", "working", "to work", "worked"],
  },
  {
    id: "q25",
    text: "What does the sentence mean? “Prices have gone up significantly.”",
    subtext: "Choose the correct option",
    options: [
      "prices are cheaper now",
      "prices are the same",
      "prices are higher now",
      "prices will go down",
    ],
  },
  {
    id: "q26",
    text: "If I ___ more time, I would learn another language.",
    subtext: "Choose the correct option",
    options: ["have", "had", "will have", "would have"],
  },
  {
    id: "q27",
    text: "The manager wants the report ___ by Friday.",
    subtext: "Choose the correct option",
    options: ["finish", "finishing", "to finish", "finished"],
  },
  {
    id: "q28",
    text: "The company is looking for someone who ___ work independently.",
    subtext: "Choose the correct option",
    options: ["can", "must", "should", "might"],
  },
  {
    id: "q29",
    text: "Choose the sentence that is closest in meaning: “Despite the traffic, we arrived on time.”",
    subtext: "Choose the correct option",
    options: [
      "We arrived late because of the traffic.",
      "We didn’t arrive because of the traffic.",
      "The traffic was bad, but we still arrived on time.",
      "The traffic helped us arrive early.",
    ],
  },
  {
    id: "q30",
    text: "I’d rather you ___ the documents before the meeting.",
    subtext: "Choose the correct option",
    options: ["check", "checked", "checking", "to check"],
  },
  {
    id: "q31",
    text: "The results were not as good as we expected, ___ we decided to review our strategy.",
    subtext: "Choose the correct option",
    options: ["although", "so", "because", "unless"],
  },
  {
    id: "q32",
    text: "The new policy aims to reduce waste by encouraging people to use fewer disposable products. What is the main purpose of the policy?",
    subtext: "Choose the correct option",
    options: [
      "To increase waste",
      "To encourage more disposable products",
      "To reduce waste",
      "To ban all products",
    ],
  },
  {
    id: "q33",
    text: "She speaks French fluently, ___ she has never lived in France.",
    subtext: "Choose the correct option",
    options: ["because", "although", "so", "unless"],
  },
  {
    id: "q34",
    text: "The project, ___ was delayed for months, has finally been completed.",
    subtext: "Choose the correct option",
    options: ["which", "who", "where", "what"],
  },
  {
    id: "q35",
    text: "The proposal was rejected, not because it lacked potential, but because it ___ too many risks.",
    subtext: "Choose the correct option",
    options: ["Involved", "was involving", "had involved", "involves"],
  },
  {
    id: "q36",
    text: "The CEO insisted that the report ___ submitted before noon.",
    subtext: "Choose the correct option",
    options: ["is", "be", "was", "being"],
  },
  {
    id: "q37",
    text: "The documentary provides a compelling insight ___ how technology is shaping modern education.",
    subtext: "Choose the correct option",
    options: ["for", "into", "about", "with"],
  },
  {
    id: "q38",
    text: "Had I known about the deadline, I ___ more carefully.",
    subtext: "Choose the correct option",
    options: ["will plan", "would have planned", "planned", "would plan"],
  },
  {
    id: "q39",
    text: "The writer’s tone in the article can best be described as ___.",
    subtext: "Choose the correct option",
    options: [
      "emotional and angry",
      "neutral and analytical",
      "humorous and informal",
      "confused and uncertain",
    ],
  },
  {
    id: "q40",
    text: "The company’s rapid expansion is largely attributable to its ability to ___ new markets quickly.",
    subtext: "Choose the correct option",
    options: ["penetrate", "penetrate into", "penetrating", "be penetrating"],
  },
  {
    id: "q41",
    text: "The findings were inconclusive; ___, further research is required.",
    subtext: "Choose the correct option",
    options: ["nevertheless", "otherwise", "although", "moreover"],
  },
  {
    id: "q42",
    text: "The speaker’s argument was coherent, well-structured, and supported by evidence. Which statement is true?",
    subtext: "Choose the correct option",
    options: [
      "The argument was unclear",
      "The argument was logical and organized",
      "The argument lacked examples",
      "The argument was emotional",
    ],
  },
  {
    id: "q43",
    text: "The committee agreed to postpone the decision until more data ___ available.",
    subtext: "Choose the correct option",
    options: ["will be", "is", "was", "would be"],
  },
  {
    id: "q44",
    text: "The researcher challenged the assumption, arguing that the data had been interpreted too narrowly. What does this imply?",
    subtext: "Choose the correct option",
    options: [
      "The data was clear and complete",
      "The interpretation may have been limited",
      "The researcher agreed with the conclusion",
      "The data was irrelevant",
    ],
  },
  {
    id: "q45",
    text: "The success of the initiative hinges on stakeholders’ willingness to collaborate. The word “hinges” is closest in meaning to:",
    subtext: "Choose the correct option",
    options: ["Depends", "Ignores", "Reduces", "Delays"],
  },
  {
    id: "q46",
    text: "The author juxtaposes two contrasting perspectives to highlight the complexity of the issue. What does “juxtaposes” mean?",
    subtext: "Choose the correct option",
    options: [
      "Separates completely",
      "Places side by side",
      "Removes from context",
      "Simplifies",
    ],
  },
  {
    id: "q47",
    text: "Which sentence is the most stylistically formal?",
    subtext: "Choose the correct option",
    options: [
      "The results were kind of surprising.",
      "The results were surprising, you know.",
      "The results were somewhat unexpected.",
      "The results were super surprising.",
    ],
  },
  {
    id: "q48",
    text: "The argument fails to account for several socioeconomic variables, thereby weakening its overall validity. What is the function of “thereby”?",
    subtext: "Choose the correct option",
    options: [
      "It introduces a contrast",
      "It shows a result",
      "It gives an example",
      "It repeats an idea",
    ],
  },
  {
    id: "q49",
    text: "Select the sentence that demonstrates precise, academic style.",
    subtext: "Choose the correct option",
    options: [
      "People don’t really get how big the problem is.",
      "The issue is, like, really serious for many people.",
      "The issue is, like, really serious for many people.",
      "The problem is super huge and stuff.",
    ],
  },
  {
    id: "q50",
    text: "The reviewer’s critique was both incisive and balanced. “Incisive” most nearly means:",
    subtext: "Choose the correct option",
    options: [
      "Unclear",
      "sharply analytical",
      "overly emotional",
      "repetitive",
    ],
  },
];

const testSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(5, "Please enter a valid phone number"),
  answers: z.record(z.string(), z.string().min(1, "Please select an answer")),
  writtenExpression: z
    .string()
    .min(10, "Response must be at least 10 characters"),
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
                      className="pl-10"
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
                      className="pl-10"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field
                data-invalid={!!errors.phoneNumber}
                className="md:col-span-2"
              >
                <FieldLabel required>Phone Number</FieldLabel>
                <FieldContent>
                  <div className="relative rounded-md border border-input focus-within:ring-1 focus-within:ring-ring overflow-hidden">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none">
                      <Phone size={16} />
                    </div>
                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="AE"
                          className="pl-10 h-10 border-none focus-within:ring-0"
                        />
                      )}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <FieldError>{errors.phoneNumber.message}</FieldError>
                  )}
                </FieldContent>
              </Field>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="button"
                onClick={handleNext}
                size="lg"
                className="w-full md:w-auto"
              >
                Begin Proficiency Check
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {QUESTIONS.map((q, idx) => (
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
                    <FieldLabel className="text-lg  text-wrapfont-bold text-secondary leading-tight normal-case">
                      {q.text}
                    </FieldLabel>
                  </Stepper>

                  <div className="mb-2">
                    <p className="text-slate-500 font-medium leading-relaxed">
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
                          className="grid gap-3"
                        >
                          {q.options.map((opt) => (
                            <div key={opt} className="relative">
                              <Label
                                htmlFor={`${q.id}-${opt}`}
                                className="flex items-center px-5 py-4 border-2 border-slate-100 rounded-md cursor-pointer hover:bg-slate-50 has-data-checked:border-primary has-data-checked:bg-primary/5 transition-all"
                              >
                                <RadioGroupItem
                                  value={opt}
                                  id={`${q.id}-${opt}`}
                                  className="mr-3"
                                />
                                <span className="text-slate-700 font-medium">
                                  {opt}
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
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="outline"
                type="button"
                onClick={handlePrev}
                size="lg"
                className="px-8"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                size="lg"
                className="flex-grow"
              >
                Proceed to Writing Section
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white border border-slate-200 rounded-md p-8 space-y-8">
            <Stepper step={QUESTIONS.length + 1}>
              <FieldLabel className="text-xl font-bold text-secondary tracking-tight normal-case">
                Written Expression
              </FieldLabel>
            </Stepper>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-md p-4 border border-slate-100 flex items-start gap-3">
                <Info className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Describe your primary goal for improving your English in 2-3
                  sentences. This helps us gauge your sentence structure and
                  coherence.
                </p>
              </div>

              <Field data-invalid={!!errors.writtenExpression}>
                <FieldLabel required>Your Response</FieldLabel>
                <FieldContent>
                  <Textarea
                    {...register("writtenExpression")}
                    className="bg-slate-50/50 border-slate-200 rounded-md p-6 placeholder:text-slate-400 font-medium resize-none"
                    rows={6}
                    placeholder="Type your response here..."
                  />
                  {errors.writtenExpression && (
                    <FieldError>{errors.writtenExpression.message}</FieldError>
                  )}
                </FieldContent>
              </Field>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="outline"
                type="button"
                onClick={handlePrev}
                size="lg"
                className="px-8"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="flex-grow font-bold"
              >
                {isSubmitting ? "Processing..." : "Submit Assessment"}
                {!isSubmitting && <SendHorizontal className="ml-2 w-5 h-5" />}
              </Button>
            </div>

            <p className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4">
              <ShieldCheck size={14} className="text-primary" />
              <span>Academic Evaluation Secure</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
