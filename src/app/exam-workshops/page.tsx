import React from "react";
import Link from "next/link";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { MapPin, Clock, Users } from "lucide-react";
import FreeConsultation from "../free-consultation/_components/free-consultation";

export const workshopCards = [
  {
    id: "ielts-workshop",
    title: "IELTS Workshops",
    description:
      "Prepare smart with focused IELTS workshops designed for fast improvement and exam readiness.",
    important:
      "Flexible 2h–8h workshops targeting weak modules with real exam strategies.",
    type: "IELTS",
    points: [
      "One-on-one & fully customizable sessions",
      "Focus on Reading, Writing, Listening, Speaking",
      "Practical strategies + real exam techniques",
      "Perfect for last-minute preparation",
    ],
    workshops: [
      {
        duration: "2 Hours",
        title: "Targeted Workshop",
        detail: "Focus on one module with strategy + common mistakes",
      },
      {
        duration: "4 Hours",
        title: "Focus Workshop",
        detail: "Deep dive into two modules with guided practice",
      },
      {
        duration: "6 Hours",
        title: "Intensive Workshop",
        detail: "Cover three modules with feedback & exam-style tasks",
      },
      {
        duration: "8 Hours",
        title: "Complete Workshop",
        detail: "Full exam overview + all modules + crash preparation",
      },
    ],
    meta: {
      mode: "Face-to-face, One-on-One",
      location: "Dubai Silicon Oasis",
      schedule: "Flexible",
    },
  },

  {
    id: "toefl-workshop",
    title: "TOEFL iBT Workshops",
    description:
      "Master the fast-paced and adaptive TOEFL with structured, high-impact workshops.",
    important:
      "Train for speed, accuracy, and new TOEFL task formats in a short time.",
    type: "TOEFL",
    points: [
      "Understand adaptive test structure",
      "Improve fast reading & note-taking",
      "Practice speaking under time pressure",
      "Ideal for quick exam preparation",
    ],
    workshops: [
      {
        duration: "2 Hours",
        title: "Targeted Workshop",
        detail: "Single module focus with scoring & strategy",
      },
      {
        duration: "4 Hours",
        title: "Focus Workshop",
        detail: "Two modules with structured guidance",
      },
      {
        duration: "6 Hours",
        title: "Intensive Workshop",
        detail: "Three modules + practice + feedback",
      },
      {
        duration: "8 Hours",
        title: "Complete Workshop",
        detail: "Full TOEFL overview + all sections",
      },
    ],
    meta: {
      mode: "Face-to-face, One-on-One",
      location: "Dubai Silicon Oasis",
      schedule: "Flexible",
    },
  },

  {
    id: "celpip-workshop",
    title: "CELPIP Workshops",
    description:
      "Build confidence and improve performance with focused CELPIP preparation sessions.",
    important:
      "Short, practical workshops designed for quick skill improvement.",
    type: "CELPIP",
    points: [
      "Target specific weak modules quickly",
      "Learn scoring system & task structure",
      "Practice with real exam-style questions",
      "Boost confidence before exam day",
    ],
    workshops: [
      {
        duration: "2 Hours",
        title: "Targeted Workshop",
        detail: "Single module strategy + common mistakes",
      },
      {
        duration: "4 Hours",
        title: "Focus Workshop",
        detail: "Two modules with guided exercises",
      },
      {
        duration: "6 Hours",
        title: "Intensive Workshop",
        detail: "Three modules with feedback & tips",
      },
      {
        duration: "8 Hours",
        title: "Complete Workshop",
        detail: "Full exam breakdown + strategies",
      },
    ],
    meta: {
      mode: "Face-to-face, One-on-One",
      location: "Dubai Silicon Oasis",
      schedule: "Flexible",
    },
  },
];

export default function ExamWorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <div className="base-py max-w-4xl mx-auto px-4">
        <h1 className="text-center section-title mb-6">
          Choose Your <span>Workshop</span>
        </h1>
        <p className="text-center text-secondary mb-12 text-lg">
          Each workshop is designed around the specific format and scoring
          criteria of its exam. Delivered by certified instructors with deep
          exam experience, our workshops target your specific weaknesses for rapid improvement.
        </p>
      </div>

      {/* ── Workshops Grid ── */}
      <div className="max-w-7xl mx-auto pb-24 px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshopCards.map((card, index) => (
            <Link key={card.id} href={`/exam-workshops/${card.id}`}>
              <BaseCard className="p-8 flex flex-col h-full group">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-8">
                  <BaseCardIcon className="font-black text-sm">0{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
                    {card.type} Workshop
                  </div>
                  <BaseCardTitle className="text-2xl">{card.title}</BaseCardTitle>
                  <BaseCardDescription className="text-slate-600 line-clamp-none">
                    {card.description}
                  </BaseCardDescription>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <Users className="size-3.5 text-primary" />
                    {card.meta.mode}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <MapPin className="size-3.5 text-primary" />
                    {card.meta.location}
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-4 mb-10">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm font-medium text-slate-700 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Highlight Info */}
                <BaseCardImportantInfo className="mt-auto pt-6 border-t border-slate-100">
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
