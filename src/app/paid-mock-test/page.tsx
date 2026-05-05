import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mic, Brain } from "lucide-react";
import FreeConsultation from "../free-consultation/_components/free-consultation";
import Link from "next/link";

const mockTestCards = [
  {
    id: "ielts",
    title: "IELTS",
    description:
      "Master time pressure, improve writing structure, and build real exam confidence through practice.",
    important:
      "Students typically improve 1–1.5 bands by mastering time allocation and exam strategy.",
    points: [
      "Learn when to skip & scan questions",
      "Fix weak writing structure (Task 1 & 2)",
      "Build 3-hour exam stamina",
      "Reduce real test anxiety",
    ],
  },
  {
    id: "pte-academic",
    title: "PTE Academic",
    description:
      "Train for a fully computer-scored exam by mastering speed, accuracy, and task strategy.",
    important:
      "Understand high-impact tasks and boost scores with smart preparation.",
    points: [
      "Practice real computer interface & timing",
      "Improve speaking response (3–5 sec)",
      "Master integrated scoring system",
      "Get AI-based score predictions",
    ],
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    description:
      "Prepare for the new adaptive, fast-paced TOEFL with real exam simulation.",
    important:
      "Develop faster responses and handle adaptive difficulty with confidence.",
    points: [
      "Adapt to changing question difficulty",
      "Improve fast reading & note-taking",
      "Practice new academic task formats",
      "Strengthen quick speaking responses",
    ],
  },
];

export default function PaidMockTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="base-py max-w-4xl mx-auto">
        <h1 className="text-center section-title mb-6">
          Our Paid Mock <span>Tests</span>
        </h1>
        <p className="text-center text-secondary mb-12">
          Elevate your performance through rigorous simulation. Our proprietary
          testing environment mirrors the actual exam constraints, providing the
          diagnostic precision required for elite academic success.
        </p>
      </div>
      <div className="max-w-6xl mx-auto pb-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTestCards.map((card, index) => (
            <Link key={card.id} href={`/paid-mock-test/${card.id}`}>
              <BaseCard className="p-6">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <BaseCardIcon className="font-bold">{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <BaseCardTitle>{card.title}</BaseCardTitle>
                  <BaseCardDescription>{card.description}</BaseCardDescription>
                </div>

                {/* Points */}
                <ul className="space-y-2 text-sm text-slate-600">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-primary"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <BaseCardImportantInfo className="mt-auto">
                  {card.important}
                </BaseCardImportantInfo>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
      <FreeConsultation />
    </div>
  );
}
