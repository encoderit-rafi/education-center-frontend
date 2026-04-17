"use client";

import React from "react";
import Link from "next/link";

interface Workshop {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: string;
  details: string[];
  theme: string;
}

const WORKSHOP_DATA: Workshop[] = [
  {
    id: "workshop-2h",
    name: "Exam Workshop (2H)",
    category: "Quick Review",
    description: "Ideal for a final high-impact strategy refresh before your test date.",
    price: "600",
    icon: "timer",
    details: [
      "Duration: 2 Hours",
      "Intensive Review",
      "Mock Test Included",
      "Strategy Session"
    ],
    theme: "light"
  },
  {
    id: "workshop-4h",
    name: "Exam Workshop (4H)",
    category: "Standard Workshop",
    description: "A comprehensive session covering all modules with proven techniques.",
    price: "1,000",
    icon: "schedule",
    details: [
      "Duration: 4 Hours",
      "Comprehensive Strategy",
      "Materials Provided",
      "All Modules Covered"
    ],
    theme: "dark"
  },
  {
    id: "workshop-6h",
    name: "Exam Workshop (6H)",
    category: "Extended Session",
    description: "In-depth analysis and practice for complex examination tasks.",
    price: "1,350",
    icon: "event_repeat",
    details: [
      "Duration: 6 Hours",
      "In-depth Analysis",
      "Personal Feedback",
      "Advanced Techniques"
    ],
    theme: "light"
  },
  {
    id: "workshop-8h",
    name: "Exam Workshop (8H)",
    category: "Masterclass",
    description: "The ultimate preparation experience with full exam simulation.",
    price: "1,600",
    icon: "auto_awesome",
    details: [
      "Duration: 8 Hours",
      "Full Exam Simulation",
      "Expert Consultation",
      "Premium Assessment"
    ],
    theme: "light"
  }
];

export function WorkshopPricingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {WORKSHOP_DATA.map((item) => (
        <Link
          key={item.id}
          href="/book-a-test"
          className="p-10 bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB]/40 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] group block"
        >
          <span className="material-symbols-outlined text-[#991B1B] mb-8 text-4xl block transition-transform group-hover:scale-110">
            {item.icon}
          </span>
          <h5 className="font-headline font-black text-[#111827] text-lg mb-3 tracking-tight">
            {item.name}
          </h5>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-10 h-10 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-headline font-black text-[#111827]">
              AED {item.price}
            </span>
            <span className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest">
              Incl. VAT
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
