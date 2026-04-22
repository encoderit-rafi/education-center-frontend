"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Users, UserRound, User, CheckCircle2, type LucideIcon } from "lucide-react";

const COURSE_DATA: {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: LucideIcon;
  details: string[];
  theme: "light" | "dark";
}[] = [
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
    theme: "light"
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
    theme: "dark"
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
      "Number of Hours: 16 (6 hrs/week)",
      "Days Per Week: 3 days/week (flexible)",
    ],
    theme: "light"
  }
];

export function CoursePricingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
      {COURSE_DATA.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            "p-10 rounded-[2rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl relative overflow-hidden h-full",
            plan.theme === "dark"
              ? "bg-[#111827] border border-[#111827] shadow-2xl p-12"
              : "bg-white border border-[#E5E7EB]/50 hover:shadow-[#991B1B]/5"
          )}
        >
          <div>
            <div className="flex justify-between items-start mb-8">
              <span className="bg-[#991B1B] text-white font-black text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                {plan.category}
              </span>
              <div className={cn(
                "p-4 rounded-2xl",
                plan.theme === "dark" ? "bg-[#991B1B]" : "bg-[#991B1B]/5"
              )}>
                <plan.icon
                  className={cn(
                    "w-8 h-8",
                    plan.theme === "dark" ? "text-white" : "text-[#991B1B]"
                  )}
                />
              </div>
            </div>

            <h3 className={cn(
              "text-2xl font-headline font-black mb-3 leading-tight",
              plan.theme === "dark" ? "text-white text-3xl leading-[1.1] mb-4" : "text-[#111827]"
            )}>
              {plan.name}
            </h3>

            <p className={cn(
              "text-sm mb-8 leading-relaxed",
              plan.theme === "dark" ? "text-slate-400 mb-10 max-w-[240px]" : "text-[#4B5563]"
            )}>
              {plan.description}
            </p>

            <ul className={cn(
              "space-y-4",
              plan.theme === "dark" ? "mb-12" : "mb-10"
            )}>
              {plan.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-[#991B1B] w-5 h-5" />
                  <span className={plan.theme === "dark" ? "text-slate-300" : "text-[#4B5563]"}>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className={cn(
              "flex items-baseline gap-2",
              plan.theme === "dark" ? "mb-10" : "mb-8"
            )}>
              <span className={cn(
                "text-4xl font-headline font-black",
                plan.theme === "dark" ? "text-white text-5xl tracking-tighter" : "text-[#111827]"
              )}>
                AED {plan.price}
              </span>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                plan.theme === "dark" ? "text-slate-400" : "text-[#4B5563]"
              )}>
                Excl. VAT
              </span>
            </div>

            <Link
              href="/enroll-course"
              className={cn(
                "block w-full text-center py-4 rounded-2xl font-headline font-bold text-sm transition-all duration-300",
                plan.theme === "dark"
                  ? "bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] text-white py-5 tracking-wide  hover:scale-[1.02]"
                  : "bg-[#F3F4F6] text-[#111827] group-hover:bg-[#991B1B] group-hover:text-white"
              )}
            >
              Register Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
