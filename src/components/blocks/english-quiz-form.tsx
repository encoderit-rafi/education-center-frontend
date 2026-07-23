"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import api from "@/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { User, Mail, MapPin } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import Stepper from "@/components/stepper";

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "_____ name is Robert.",
    options: [
      { id: "a", text: "Me", points: 0 },
      { id: "b", text: "I", points: 0 },
      { id: "c", text: "My", points: 1 },
    ],
  },
  {
    id: 2,
    question: "They _____ from Spain.",
    options: [
      { id: "a", text: "is", points: 0 },
      { id: "b", text: "are", points: 1 },
      { id: "c", text: "do", points: 0 },
    ],
  },
  {
    id: 3,
    question: "_____ are you from?",
    options: [
      { id: "a", text: "What", points: 0 },
      { id: "b", text: "Who", points: 0 },
      { id: "c", text: "Where", points: 1 },
    ],
  },
  {
    id: 4,
    question: "What do you do? I’m _____ student.",
    options: [
      { id: "a", text: "the", points: 0 },
      { id: "b", text: "a", points: 1 },
      { id: "c", text: "–-", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Peter _____ at seven o’clock.",
    options: [
      { id: "a", text: "goes up", points: 0 },
      { id: "b", text: "gets", points: 0 },
      { id: "c", text: "gets up", points: 1 },
    ],
  },
  {
    id: 6,
    question: "_____ you like this DVD?",
    options: [
      { id: "a", text: "Are", points: 0 },
      { id: "b", text: "Have", points: 0 },
      { id: "c", text: "Do", points: 1 },
    ],
  },
  {
    id: 7,
    question: "We _____ live in a flat.",
    options: [
      { id: "a", text: "don’t", points: 1 },
      { id: "b", text: "hasn’t", points: 0 },
      { id: "c", text: "doesn’t", points: 0 },
    ],
  },
  {
    id: 8,
    question: "_____ he play tennis?",
    options: [
      { id: "a", text: "Where", points: 0 },
      { id: "b", text: "Does", points: 1 },
      { id: "c", text: "Do", points: 0 },
    ],
  },
  {
    id: 9,
    question: "We don’t have _____ butter.",
    options: [
      { id: "a", text: "a", points: 0 },
      { id: "b", text: "any", points: 1 },
      { id: "c", text: "got", points: 0 },
    ],
  },
  {
    id: 10,
    question: "_____ some money here.",
    options: [
      { id: "a", text: "There’re", points: 0 },
      { id: "b", text: "There", points: 0 },
      { id: "c", text: "There’s", points: 1 },
    ],
  },
  {
    id: 11,
    question: "Those shoes are very _____ .",
    options: [
      { id: "a", text: "expensive", points: 1 },
      { id: "b", text: "a lot", points: 0 },
      { id: "c", text: "cost", points: 0 },
    ],
  },
  {
    id: 12,
    question: "They _____ at home yesterday.",
    options: [
      { id: "a", text: "was", points: 0 },
      { id: "b", text: "are", points: 0 },
      { id: "c", text: "were", points: 1 },
    ],
  },
  {
    id: 13,
    question: "I _____ there for a long time.",
    options: [
      { id: "a", text: "lived", points: 1 },
      { id: "b", text: "living", points: 0 },
      { id: "c", text: "live", points: 0 },
    ],
  },
  {
    id: 14,
    question: "He didn’t _____ glasses.",
    options: [
      { id: "a", text: "put", points: 0 },
      { id: "b", text: "wear", points: 1 },
      { id: "c", text: "take", points: 0 },
    ],
  },
  {
    id: 15,
    question: "The restaurant was _____ busy.",
    options: [
      { id: "a", text: "very", points: 1 },
      { id: "b", text: "a lot", points: 0 },
      { id: "c", text: "many", points: 0 },
    ],
  },
  {
    id: 16,
    question: "He _____ to Brazil on business.",
    options: [
      { id: "a", text: "go", points: 0 },
      { id: "b", text: "goed", points: 0 },
      { id: "c", text: "went", points: 1 },
    ],
  },
  {
    id: 17,
    question: "Yesterday was the _____ of April.",
    options: [
      { id: "a", text: "third", points: 1 },
      { id: "b", text: "three", points: 0 },
      { id: "c", text: "day three", points: 0 },
    ],
  },
  {
    id: 18,
    question: "I _____ play football at the weekend.",
    options: [
      { id: "a", text: "usually", points: 1 },
      { id: "b", text: "use", points: 0 },
      { id: "c", text: "usual", points: 0 },
    ],
  },
  {
    id: 19,
    question: "I _____ in an armchair at the moment.",
    options: [
      { id: "a", text: "sitting", points: 0 },
      { id: "b", text: "‘m sitting", points: 1 },
      { id: "c", text: "sit", points: 0 },
    ],
  },
  {
    id: 20,
    question: "My brother is older _____ me.",
    options: [
      { id: "a", text: "then", points: 1 },
      { id: "b", text: "that", points: 0 },
      { id: "c", text: "than", points: 0 },
    ],
  },
  {
    id: 21,
    question: "The _____ have seen it before.",
    options: [
      { id: "a", text: "childs", points: 0 },
      { id: "b", text: "child", points: 0 },
      { id: "c", text: "children", points: 1 },
    ],
  },
  {
    id: 22,
    question: "I can’t _____ another language.",
    options: [
      { id: "a", text: "speaking", points: 0 },
      { id: "b", text: "speak", points: 1 },
      { id: "c", text: "to speak", points: 0 },
    ],
  },
  {
    id: 23,
    question: "_____ old is their car?",
    options: [
      { id: "a", text: "What", points: 0 },
      { id: "b", text: "When", points: 0 },
      { id: "c", text: "How", points: 1 },
    ],
  },
  {
    id: 24,
    question: "Stephen _____ to visit his parents.",
    options: [
      { id: "a", text: "will", points: 0 },
      { id: "b", text: "going", points: 0 },
      { id: "c", text: "is going", points: 1 },
    ],
  },
  {
    id: 25,
    question: "I don’t _____ getting up early.",
    options: [
      { id: "a", text: "like", points: 0 },
      { id: "b", text: "want", points: 0 },
      { id: "c", text: "enjoy", points: 1 },
    ],
  },
  {
    id: 26,
    question: "They _____ ever check their emails.",
    options: [
      { id: "a", text: "hard", points: 0 },
      { id: "b", text: "harder", points: 0 },
      { id: "c", text: "hardly", points: 1 },
    ],
  },
  {
    id: 27,
    question: "He _____ know how to spell it.",
    options: [
      { id: "a", text: "doesn’t", points: 1 },
      { id: "b", text: "hasn’t", points: 0 },
      { id: "c", text: "don’t", points: 0 },
    ],
  },
  {
    id: 28,
    question: "We _____ them at eight o’clock.",
    options: [
      { id: "a", text: "going to meet", points: 0 },
      { id: "b", text: "‘re meet", points: 0 },
      { id: "c", text: "‘re meeting", points: 1 },
    ],
  },
  {
    id: 29,
    question: "They are going _____ in America next month.",
    options: [
      { id: "a", text: "to be", points: 1 },
      { id: "b", text: "will be", points: 0 },
      { id: "c", text: "be", points: 0 },
      { id: "d", text: "being", points: 0 },
    ],
  },
  {
    id: 30,
    question: "This is the cinema _____ we saw the film.",
    options: [
      { id: "a", text: "when", points: 0 },
      { id: "b", text: "which", points: 0 },
      { id: "c", text: "that", points: 0 },
      { id: "d", text: "where", points: 1 },
    ],
  },
  {
    id: 31,
    question: "Have you ever _____ in a jazz band?",
    options: [
      { id: "a", text: "seen", points: 0 },
      { id: "b", text: "played", points: 1 },
      { id: "c", text: "listened", points: 0 },
      { id: "d", text: "wanted", points: 0 },
    ],
  },
  {
    id: 32,
    question: "I’m _____ when I’m with you.",
    options: [
      { id: "a", text: "happyer", points: 0 },
      { id: "b", text: "happier than", points: 0 },
      { id: "c", text: "happier", points: 1 },
      { id: "d", text: "the happy", points: 0 },
    ],
  },
  {
    id: 33,
    question: "This is _____ than I thought.",
    options: [
      { id: "a", text: "bad", points: 0 },
      { id: "b", text: "badder", points: 0 },
      { id: "c", text: "worse", points: 1 },
      { id: "d", text: "worst", points: 0 },
    ],
  },
  {
    id: 34,
    question: "Can you tell me the way _____ ?",
    options: [
      { id: "a", text: "to the bank", points: 1 },
      { id: "b", text: "is the bank", points: 0 },
      { id: "c", text: "where is bank", points: 0 },
      { id: "d", text: "of the bank", points: 0 },
    ],
  },
  {
    id: 35,
    question: "Do you know what _____ ?",
    options: [
      { id: "a", text: "time is it", points: 0 },
      { id: "b", text: "time is", points: 0 },
      { id: "c", text: "time is now", points: 0 },
      { id: "d", text: "time it is", points: 1 },
    ],
  },
  {
    id: 36,
    question: "Were you _____ to open the door?",
    options: [
      { id: "a", text: "could", points: 0 },
      { id: "b", text: "can", points: 0 },
      { id: "c", text: "able", points: 1 },
      { id: "d", text: "possible", points: 0 },
    ],
  },
  {
    id: 37,
    question: "Everybody _____ wear a seat belt in the car.",
    options: [
      { id: "a", text: "must", points: 1 },
      { id: "b", text: "mustn’t", points: 0 },
      { id: "c", text: "don’t have to", points: 0 },
      { id: "d", text: "doesn’t have to", points: 0 },
    ],
  },
  {
    id: 38,
    question: "Tom has lived in this town _____ three years.",
    options: [
      { id: "a", text: "since", points: 0 },
      { id: "b", text: "from", points: 0 },
      { id: "c", text: "after", points: 0 },
      { id: "d", text: "for", points: 1 },
    ],
  },
  {
    id: 39,
    question: "We _____ work in that factory.",
    options: [
      { id: "a", text: "use to", points: 0 },
      { id: "b", text: "was", points: 0 },
      { id: "c", text: "used to", points: 1 },
      { id: "d", text: "then", points: 0 },
    ],
  },
  {
    id: 40,
    question: "I think it _____ be sunny tomorrow.",
    options: [
      { id: "a", text: "will probably", points: 1 },
      { id: "b", text: "probably", points: 0 },
      { id: "c", text: "can", points: 0 },
      { id: "d", text: "will to", points: 0 },
    ],
  },
  {
    id: 41,
    question: "He _____ like his brother.",
    options: [
      { id: "a", text: "look", points: 0 },
      { id: "b", text: "isn’t", points: 1 },
      { id: "c", text: "isn’t look", points: 0 },
      { id: "d", text: "can look", points: 0 },
    ],
  },
  {
    id: 42,
    question: "_____ does your boyfriend look like?",
    options: [
      { id: "a", text: "How", points: 0 },
      { id: "b", text: "What", points: 1 },
      { id: "c", text: "Why", points: 0 },
      { id: "d", text: "Which", points: 0 },
    ],
  },
  {
    id: 43,
    question: "I’ve got _____ many problems.",
    options: [
      { id: "a", text: "too", points: 1 },
      { id: "b", text: "a", points: 0 },
      { id: "c", text: "enough", points: 0 },
      { id: "d", text: "really", points: 0 },
    ],
  },
  {
    id: 44,
    question: "If we get up in time, _____ catch the train.",
    options: [
      { id: "a", text: "we catch", points: 0 },
      { id: "b", text: "we caught", points: 0 },
      { id: "c", text: "we had caught", points: 0 },
      { id: "d", text: "we’ll catch", points: 1 },
    ],
  },
  {
    id: 45,
    question: "They _____ to go to France for a year.",
    options: [
      { id: "a", text: "decide", points: 0 },
      { id: "b", text: "deciding", points: 0 },
      { id: "c", text: "decided", points: 1 },
      { id: "d", text: "to decide", points: 0 },
    ],
  },
  {
    id: 46,
    question: "I’m working _____ to pass my exam.",
    options: [
      { id: "a", text: "hardly", points: 0 },
      { id: "b", text: "much", points: 0 },
      { id: "c", text: "hard", points: 1 },
      { id: "d", text: "good", points: 0 },
    ],
  },
  {
    id: 47,
    question: "I’m writing _____ ask you to explain.",
    options: [
      { id: "a", text: "for", points: 0 },
      { id: "b", text: "in order to", points: 1 },
      { id: "c", text: "because", points: 0 },
      { id: "d", text: "because of", points: 0 },
    ],
  },
  {
    id: 48,
    question: "He said that most problems _____ by teenagers.",
    options: [
      { id: "a", text: "cause", points: 0 },
      { id: "b", text: "caused", points: 0 },
      { id: "c", text: "were caused", points: 1 },
      { id: "d", text: "were causing", points: 0 },
    ],
  },
  {
    id: 49,
    question: "They _____ an old photograph of the place.",
    options: [
      { id: "a", text: "came up", points: 0 },
      { id: "b", text: "came across", points: 1 },
      { id: "c", text: "came into", points: 0 },
      { id: "d", text: "came after", points: 0 },
    ],
  },
  {
    id: 50,
    question: "I _____ I had been able to meet her.",
    options: [
      { id: "a", text: "hope", points: 0 },
      { id: "b", text: "want", points: 0 },
      { id: "c", text: "think", points: 0 },
      { id: "d", text: "wish", points: 1 },
    ],
  },
  {
    id: 51,
    question: "We’ll have taken our exams _____ this time next month.",
    options: [
      { id: "a", text: "by", points: 1 },
      { id: "b", text: "on", points: 0 },
      { id: "c", text: "during", points: 0 },
      { id: "d", text: "for", points: 0 },
    ],
  },
  {
    id: 52,
    question: "I will do badly in my work, _____ try harder.",
    options: [
      { id: "a", text: "if I’m not", points: 0 },
      { id: "b", text: "if I wasn’t", points: 0 },
      { id: "c", text: "if I haven’t", points: 0 },
      { id: "d", text: "if I don’t", points: 1 },
    ],
  },
  {
    id: 53,
    question: "I _____ wasted my time when I was at university.",
    options: [
      { id: "a", text: "regret", points: 0 },
      { id: "b", text: "shouldn’t", points: 0 },
      { id: "c", text: "ought not to", points: 0 },
      { id: "d", text: "shouldn’t have", points: 1 },
    ],
  },
  {
    id: 54,
    question: "This is going to be my chance to _____ any difficulties.",
    options: [
      { id: "a", text: "repair", points: 0 },
      { id: "b", text: "sort out", points: 1 },
      { id: "c", text: "solve", points: 0 },
      { id: "d", text: "resolve", points: 0 },
    ],
  },
  {
    id: 55,
    question: "It was difficult at first, but I soon got _____ it.",
    options: [
      { id: "a", text: "got used to", points: 1 },
      { id: "b", text: "get used to", points: 0 },
      { id: "c", text: "changed to", points: 0 },
      { id: "d", text: "used to", points: 0 },
    ],
  },
  {
    id: 56,
    question: "How did you manage to cook _____ a good meal?",
    options: [
      { id: "a", text: "so", points: 0 },
      { id: "b", text: "that", points: 0 },
      { id: "c", text: "absolutely", points: 0 },
      { id: "d", text: "such", points: 1 },
    ],
  },
  {
    id: 57,
    question: "The solution had been found, _____ we hadn’t realised it.",
    options: [
      { id: "a", text: "however", points: 0 },
      { id: "b", text: "therefore", points: 0 },
      { id: "c", text: "although", points: 1 },
      { id: "d", text: "even", points: 0 },
    ],
  },
  {
    id: 58,
    question: "She _____ what I had been doing for all that time.",
    options: [
      { id: "a", text: "asked to me", points: 0 },
      { id: "b", text: "asked for me", points: 0 },
      { id: "c", text: "asked with me", points: 0 },
      { id: "d", text: "asked me", points: 1 },
    ],
  },
  {
    id: 59,
    question: "They _____ heard us coming, we were making a lot of noise.",
    options: [
      { id: "a", text: "must have", points: 1 },
      { id: "b", text: "must", points: 0 },
      { id: "c", text: "might", points: 0 },
      { id: "d", text: "could", points: 0 },
    ],
  },
  {
    id: 60,
    question: "He _____ to help me with the decorating.",
    options: [
      { id: "a", text: "suggested", points: 0 },
      { id: "b", text: "offered", points: 1 },
      { id: "c", text: "invited", points: 0 },
      { id: "d", text: "told", points: 0 },
    ],
  },
];

type QuizFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  followUp: string;
  answers: Record<string, string>;
};

export default function EnglishQuizForm() {
  const t = useTranslations("EnglishQuiz");
  const router = useRouter();
  const [step, setStep] = useState(1);

  const quizSchema = z.object({
    fullName: z
      .string()
      .trim()
      .min(1, t("form.fullNameRequired"))
      .min(2, t("form.fullNameTooShort")),
    email: z
      .string()
      .trim()
      .min(1, t("form.emailRequired"))
      .email(t("form.emailInvalid")),
    phoneNumber: z
      .string()
      .trim()
      .min(1, t("form.phoneNumberRequired")),
    city: z
      .string()
      .trim()
      .min(1, t("form.cityRequired")),
    country: z
      .string()
      .trim()
      .min(1, t("form.countryRequired")),
    followUp: z
      .string()
      .trim()
      .min(1, t("form.followUpRequired")),
    answers: z.record(
      z.string(),
      z.string().min(1, t("form.answerRequired")),
    ),
  });

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      country: "",
      followUp: "",
      answers: Object.fromEntries(
        QUIZ_QUESTIONS.map((q) => [q.id.toString(), ""]),
      ),
    },
  });

  const {
    register,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors },
  } = form;

  const currentAnswers = watch("answers");

  const handleNext = async () => {
    let fieldsToValidate: (keyof QuizFormValues)[] = [];
    if (step === 1) {
      fieldsToValidate = [
        "fullName",
        "email",
        "phoneNumber",
        "country",
        "city",
        "followUp",
      ];
    } else if (step === 2) {
      const allAnswered = QUIZ_QUESTIONS.every((q) => currentAnswers[q.id.toString()]);
      if (!allAnswered) {
        await trigger("answers");
        return;
      }
      fieldsToValidate = ["answers"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) {
      toast.error(t("form.requiredFieldsError"));
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: QuizFormValues) => {
    try {
      const questions = QUIZ_QUESTIONS.map((q) => {
        const selectedOptionId = data.answers[q.id.toString()];
        const option = q.options.find((o) => o.id === selectedOptionId);
        return {
          question: q.question,
          answer: option ? option.text : "",
        };
      });

      const payload = {
        full_name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        country: data.country,
        city: data.city,
        follow_up: data.followUp,
        questions,
      };

      await api.post("/english-quiz-submissions", payload);

      let correctAnswersCount = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        const selectedOptionId =
          data.answers[q.id.toString()] || (data.answers as any)[q.id];
        const option = q.options.find((o) => o.id === selectedOptionId);
        if (option && option.points > 0) {
          correctAnswersCount++;
        }
      });
      const calculatedScore = Math.round(
        (correctAnswersCount / QUIZ_QUESTIONS.length) * 100
      );
      router.push(`/english-quiz/result?score=${calculatedScore}&correct=${correctAnswersCount}`);
    } catch (error: any) {
      console.error("Error submitting English quiz:", error);
      toast.error(t("form.submitErrorTitle") || "Submission failed", {
        description: error.response?.data?.message || t("form.submitErrorDesc") || "An unexpected error occurred. Please try again.",
      });
    }
  };

  const onInvalid = (errors: any) => {
    if (errors.answers) {
      toast.error(t("form.answersRequiredAll"));
    }
  };

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="animate-fade-up">
        {step === 1 && (
          <div className="bg-white border border-slate-200 rounded-md p-8 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-secondary">
                {t("form.personalInfo")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel required>{t("form.fullName")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("fullName")}
                      className="pl-10 h-10"
                      placeholder={t("form.fullNamePlaceholder")}
                    />
                  </div>
                  {errors.fullName && (
                    <FieldError>{errors.fullName.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel required>{t("form.email")}</FieldLabel>
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
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.country}>
                <FieldLabel required>{t("form.country")}</FieldLabel>
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
                <FieldLabel required>{t("form.city")}</FieldLabel>
                <FieldContent>
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <Input
                      {...register("city")}
                      className="pl-10 h-10"
                      placeholder={t("form.cityPlaceholder")}
                    />
                  </div>
                  {errors.city && (
                    <FieldError>{errors.city.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.phoneNumber}>
                <FieldLabel required>{t("form.phoneNumber")}</FieldLabel>
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
                          placeholder={t("form.phoneNumberPlaceholder")}
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

              <Field data-invalid={!!errors.followUp}>
                <FieldLabel required className="normal-case block text-sm font-medium leading-snug text-slate-900">
                  {t("form.followUpQuestion")}
                </FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="followUp"
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="gap-3 pt-1"
                      >
                        <div className="flex items-start gap-2.5 cursor-pointer">
                          <RadioGroupItem
                            value="yes"
                            id="followUp-yes"
                            className="mt-0.5 shrink-0"
                          />
                          <Label
                            htmlFor="followUp-yes"
                            className="text-xs sm:text-sm text-slate-700 font-normal leading-snug cursor-pointer"
                          >
                            {t("form.followUpYes")}
                          </Label>
                        </div>
                        <div className="flex items-start gap-2.5 cursor-pointer">
                          <RadioGroupItem
                            value="no"
                            id="followUp-no"
                            className="mt-0.5 shrink-0"
                          />
                          <Label
                            htmlFor="followUp-no"
                            className="text-xs sm:text-sm text-slate-700 font-normal leading-snug cursor-pointer"
                          >
                            {t("form.followUpNo")}
                          </Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                  {errors.followUp && (
                    <FieldError>{errors.followUp.message}</FieldError>
                  )}
                </FieldContent>
              </Field>
            </div>

            <Button
              type="button"
              onClick={handleNext}
              size="lg"
              className="w-full md:w-auto px-5 font-bold"
            >
              {t("form.startQuiz")}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div
            className="space-y-6 select-none"
            onContextMenu={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
          >
            {QUIZ_QUESTIONS.map((q, idx) => (
              <Field
                key={q.id}
                data-invalid={!!errors.answers?.[q.id.toString()]}
                className={cn(
                  "bg-white border border-slate-200 rounded-md p-8 transition-colors",
                  errors.answers?.[q.id.toString()] &&
                  "border-destructive/50 ring-1 ring-destructive/10 bg-destructive/5"
                )}
              >
                <div className="space-y-6">
                  <Stepper step={idx + 1}>
                    <FieldLabel className="text-lg font-bold text-secondary leading-tight normal-case">
                      {q.question}
                    </FieldLabel>
                  </Stepper>

                  <div className="mb-2">
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {t("form.chooseOption")}
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
                          {q.options.map((option) => (
                            <div key={option.id} className="relative">
                              <Label
                                htmlFor={`q${q.id}-${option.id}`}
                                className="flex items-center px-5 py-4 border-2 border-slate-100 rounded-md cursor-pointer hover:bg-slate-50 has-data-checked:border-primary has-data-checked:bg-primary/5 transition-all"
                              >
                                <RadioGroupItem
                                  value={option.id}
                                  id={`q${q.id}-${option.id}`}
                                  className="mr-3"
                                />
                                <span className="text-slate-700 font-medium">
                                  {option.text}
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
            ))}

            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                size="lg"
                className="px-10 font-bold"
              >
                {t("form.back")}
              </Button>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                size="lg"
                className="px-10 font-bold"
              >
                {form.formState.isSubmitting ? t("form.processing") : t("form.submitQuiz")}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
