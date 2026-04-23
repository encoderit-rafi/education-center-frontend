"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Users,
  UserRound,
  User,
  CheckCircle2,
  Globe,
  type LucideIcon
} from "lucide-react";
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import { PricingCard } from "./pricing-card";

interface PricingPlan {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: LucideIcon;
  details: string[];
}

const DEFAULT_PLANS: PricingPlan[] = [
  {
    id: "virtual",
    name: "Virtual Classroom",
    category: "Online Training",
    description: "Interactive online sessions from the comfort of your home.",
    price: "1,250",
    icon: Globe,
    details: [
      "Delivery Type: Online/Live",
      "Term/Duration: 4 Weeks",
      "Number of Hours: 16 (4 hrs/week)",
      "Days Per Week: 2 Days/Week",
    ],
  },
  {
    id: "group",
    name: "Group Course",
    category: "Standard Training",
    description: "Standardized classroom training for collective excellence.",
    price: "1,850",
    icon: Users,
    details: [
      "Delivery Type: Classroom",
      "Term/Duration: 6 Weeks",
      "Number of Hours: 24 (4 hrs/week)",
      "Days Per Week: 2 Days/Week",
    ],
  },
  {
    id: "semi-private",
    name: "Semi-Private Course",
    category: "Small Group",
    description: "Personalized attention in small focused groups.",
    price: "2,850",
    icon: UserRound,
    details: [
      "Delivery Type: Classroom",
      "Term/Duration: 3 Weeks",
      "Number of Hours: 20 (6 hrs/week)",
      "Days Per Week: 3 Days/Week",
    ],
  },
  {
    id: "private",
    name: "Private Course",
    category: "1-on-1 Focus",
    description: "Exclusive 1-on-1 tutoring tailored to your pace.",
    price: "4,850",
    icon: User,
    details: [
      "Delivery Type: Classroom",
      "Term/Duration: 3 Weeks",
      "Number of Hours: 16 (4 hrs/week)",
      "Days Per Week: 3 days/week (flexible)",
    ],
  }
];

interface PricingTemplateProps {
  courseName: string;
  courseAbbr: string;
}

export function PricingTemplate({ courseName, courseAbbr }: PricingTemplateProps) {
  return (
    <main className="font-sans selection:bg-red-100 selection:text-red-900">
      {/* ── Hero Section ── */}
      <header className="relative min-h-[500px] flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/about-us/vision-hero.png"
            alt={`${courseAbbr} preparation`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-[#991B1B] text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              Investment & Fees
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-headline font-black tracking-tight mb-8 leading-[1.1]">
              {courseName} <br />
              <span className="text-[#991B1B] italic">Preparation</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light max-w-xl">
              Achieve your target score with our expertly designed {courseAbbr} training programs.
              Transparent pricing for world-class certification preparation.
            </p>
          </div>
        </div>
      </header>

      {/* ── Pricing Grid ── */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto text-lg leading-relaxed">
              Select the training format that best suits your learning style and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {DEFAULT_PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.name}
                category={plan.category}
                description={plan.description}
                price={plan.price}
                icon={plan.icon}
                details={plan.details}
                buttonText="Register Now"
                buttonHref="/enroll-course"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 bg-[#F9FAFB] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111827] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#991B1B]/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-headline font-black tracking-tight mb-4">
                Still have questions about <span className="text-[#991B1B]">{courseAbbr}</span>?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Our academic advisors are ready to help you choose the right plan for your goals.
              </p>
              <Link
                href="/free-consultation"
                className="inline-block bg-[#991B1B] text-white px-10 py-5 rounded-full font-headline font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 hover:bg-[#7F1D1D]"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:py-32 md:px-8 bg-white">
        <FreeConsultation />
      </section>
    </main>
  );
}
