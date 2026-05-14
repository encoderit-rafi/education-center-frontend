"use client";

import React from "react";
import Link from "next/link";
import {
  BadgePercent,
  GraduationCap,
  Clock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import FreeConsultation from "../free-consultation/_components/free-consultation";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardDescription,
  BaseCardArrow,
  BaseCardList,
} from "@/components/blocks/cards/base-card";
import { FEES_DATA, NAV_FEES } from "@/data";

interface ExamFee {
  name: string;
  price: number;
  currency?: string;
  usage?: string | string[];
}

interface ExtraFee {
  price: number;
  currency: string;
  note?: string;
}

interface ExamInfo {
  note?: string;
  acceptedIds?: string[];
  fees?: ExamFee[];
  extraFees?: {
    serviceFee: ExtraFee;
    lateFee: ExtraFee;
    shipping: { type: string; price: number; currency?: string }[];
  };
}

interface Workshop {
  duration: string;
  price: number;
}

interface Course {
  type: string;
  price: number;
  discount: number;
}

interface EXAM_FEES {
  id: string;
  name: string;
  exam?: ExamInfo;
  workshops: Workshop[];
  courses: Course[];
}

export const EXAM_FEES: EXAM_FEES[] = [
  {
    id: "ielts",
    name: "IELTS",
    exam: {
      note: "Exams and fees (including 100 AED service fee)",
      acceptedIds: ["Passport", "Emirates ID (must match registration ID)"],
      fees: [
        {
          name: "IELTS on Computer (Academic & General)",
          price: 1500,
          currency: "AED",
        },
      ],
    },
    workshops: [
      { duration: "2h", price: 600 },
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
      { type: "Private (Online)", price: 3850, discount: 20 },
    ],
  },
  {
    id: "toefl",
    name: "TOEFL",
    exam: {
      fees: [
        {
          name: "TOEFL iBT (Test Center)",
          price: 340,
          currency: "USD",
        },
      ],
      extraFees: {
        serviceFee: { price: 100, currency: "AED" },
        lateFee: { price: 49, currency: "USD", note: "within 7 days" },
        shipping: [
          { type: "Standard", price: 0 },
          { type: "Express", price: 35, currency: "USD" },
        ],
      },
      acceptedIds: ["Passport", "Emirates ID"],
    },
    workshops: [
      { duration: "2h", price: 600 },
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
      { type: "Private (Online)", price: 3850, discount: 20 },
    ],
  },
  {
    id: "pte",
    name: "PTE",
    exam: {
      note: "Including 100 AED service fee",
      acceptedIds: ["Passport"],
      fees: [
        {
          name: "PTE Academic (PTE-A)",
          price: 1550,
          usage: ["Australia", "New Zealand", "United States"],
        },
        {
          name: "PTE Core (PTE-E)",
          price: 1550,
          usage: ["Canada"],
        },
        {
          name: "PTE UKVI",
          price: 1550,
          usage: ["UK Study Visa"],
        },
        {
          name: "PTE UKVI Home A1",
          price: 1330,
          usage: ["UK family visa"],
        },
        {
          name: "PTE UKVI Home B1",
          price: 1330,
          usage: ["UK citizenship / ILR"],
        },
      ],
    },
    workshops: [
      { duration: "2h", price: 600 },
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
      { type: "Private (Online)", price: 3850, discount: 20 },
    ],
  },
  {
    id: "psi",
    name: "PSI (UKVI)",
    exam: {
      acceptedIds: ["Passport", "Emirates ID (must match registration ID)"],
      fees: [
        {
          name: "UKVI Speaking & Listening A1",
          price: 175,
          currency: "USD",
          usage: "UK family visa",
        },
        {
          name: "UKVI Speaking & Listening B1",
          price: 175,
          currency: "USD",
          usage: "Citizenship / ILR",
        },
        {
          name: "UKVI Full Test B1",
          price: 235,
          currency: "USD",
          usage: "Student / Skilled Worker",
        },
        {
          name: "UKVI Full Test B2",
          price: 235,
          currency: "USD",
          usage: "Skilled Worker / Innovator",
        },
        {
          name: "UKVI Full Test C1",
          price: 235,
          currency: "USD",
          usage: "Undergraduate Study / Immigration",
        },
        {
          name: "UKVI Full Test C2",
          price: 235,
          currency: "USD",
          usage: "Postgraduate / PhD / Immigration",
        },
      ],
    },
    workshops: [
      { duration: "2h", price: 600 },
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
      { type: "Private (Online)", price: 3850, discount: 20 },
    ],
  },
  {
    id: "celpip-cael",
    name: "CELPIP / CAEL",
    exam: {
      acceptedIds: [
        "Passport",
        "Emirates ID",
        "Travel Document (must match registration ID)",
      ],
    },
    workshops: [
      { duration: "2h", price: 600 },
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
      { type: "Private (Online)", price: 3850, discount: 20 },
    ],
  },
  {
    id: "oet",
    name: "OET",
    workshops: [
      { duration: "4h", price: 1000 },
      { duration: "6h", price: 1350 },
      { duration: "8h", price: 1600 },
    ],
    courses: [
      { type: "Group (Classroom)", price: 1850, discount: 10 },
      { type: "Semi-Private (Classroom)", price: 2850, discount: 15 },
      { type: "VIP (Classroom)", price: 4850, discount: 20 },
    ],
  },
];

export default function FeesPage() {
  return (
    // <main className="min-h-screen bg-slate-50 selection:bg-primary/10 selection:text-primary">
    //   {/* ── Sequential Exam Sections ── */}
    //   <section className="py-24">
    //     <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-32">
    //       {EXAM_FEES.map((exam, index) => (
    //         <div key={exam.id} id={exam.id} className="scroll-mt-40 space-y-16">
    //           {/* Exam Header */}
    //           <div className="space-y-6">
    //             <div className="flex items-center gap-4">
    //               <div className="h-px w-12 bg-primary/30" />
    //               <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
    //                 {String(index + 1).padStart(2, "0")} &mdash; {exam.name}
    //               </span>
    //             </div>
    //             <h2 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none">
    //               {exam.name}{" "}
    //               <span className="text-slate-300 font-light italic">
    //                 Catalog
    //               </span>
    //             </h2>
    //             {exam.exam?.note && (
    //               <p className="text-lg text-slate-500 font-medium max-w-2xl italic border-l-4 border-primary/20 pl-6">
    //                 {exam.exam.note}
    //               </p>
    //             )}
    //           </div>

    //           {/* Sub-grid for Official Exam Fees */}
    //           {exam.exam?.fees && (
    //             <div className="space-y-8">
    //               <div className="flex items-center gap-3 text-slate-900">
    //                 <ShieldCheck className="size-6 text-primary" />
    //                 <h3 className="text-xl font-black uppercase tracking-widest">
    //                   Official Assessments
    //                 </h3>
    //               </div>
    //               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //                 {exam.exam.fees.map((fee, i) => (
    //                   <BaseCard key={i} className="p-8 space-y-6">
    //                     <div className="space-y-2">
    //                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
    //                         Test Category
    //                       </p>
    //                       <BaseCardTitle className="text-xl leading-tight h-14 line-clamp-2 text-wrap">
    //                         {fee.name}
    //                       </BaseCardTitle>
    //                     </div>
    //                     <div className="flex items-baseline gap-2">
    //                       <span className="text-4xl font-black text-slate-900 tracking-tighter">
    //                         {fee.price}
    //                       </span>
    //                       <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
    //                         {fee.currency || "AED"}
    //                       </span>
    //                     </div>
    //                     {fee.usage && (
    //                       <div className="flex flex-wrap gap-2">
    //                         {(Array.isArray(fee.usage)
    //                           ? fee.usage
    //                           : [fee.usage]
    //                         ).map((u, k) => (
    //                           <span
    //                             key={k}
    //                             className="text-[9px] px-3 py-1.5 bg-slate-50 text-slate-500 rounded-full border border-slate-100 font-black uppercase tracking-wider"
    //                           >
    //                             {u}
    //                           </span>
    //                         ))}
    //                       </div>
    //                     )}
    //                   </BaseCard>
    //                 ))}

    //                 {/* ID Requirements in a BaseCard */}
    //                 {exam.exam.acceptedIds && (
    //                   <BaseCard className="p-8 bg-slate-900 border-slate-800 text-white hover:border-primary">
    //                     <div className="space-y-6">
    //                       <div className="space-y-1">
    //                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
    //                           Verification
    //                         </span>
    //                         <BaseCardTitle className="text-white group-hover:text-primary">
    //                           Required IDs
    //                         </BaseCardTitle>
    //                       </div>
    //                       <ul className="space-y-4">
    //                         {exam.exam.acceptedIds.map((id, i) => (
    //                           <li
    //                             key={i}
    //                             className="flex items-start gap-3 text-xs font-bold text-slate-300"
    //                           >
    //                             <CheckCircle2 className="size-4 text-primary shrink-0" />
    //                             {id}
    //                           </li>
    //                         ))}
    //                       </ul>
    //                     </div>
    //                   </BaseCard>
    //                 )}

    //                 {/* Extra Fees in a BaseCard */}
    //                 {exam.exam.extraFees && (
    //                   <BaseCard className="p-8 bg-primary border-primary text-white hover:border-white/20">
    //                     <div className="space-y-6">
    //                       <div className="space-y-1">
    //                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
    //                           Additional
    //                         </span>
    //                         <BaseCardTitle className="text-white group-hover:text-white">
    //                           Admin Charges
    //                         </BaseCardTitle>
    //                       </div>
    //                       <div className="space-y-4">
    //                         <div className="flex justify-between items-center py-2 border-b border-white/10">
    //                           <span className="text-xs font-bold text-white/80">
    //                             Service Fee
    //                           </span>
    //                           <span className="text-sm font-black">
    //                             {exam.exam.extraFees.serviceFee.price}{" "}
    //                             {exam.exam.extraFees.serviceFee.currency}
    //                           </span>
    //                         </div>
    //                         <div className="flex justify-between items-start py-2 border-b border-white/10">
    //                           <div>
    //                             <span className="text-xs font-bold text-white/80">
    //                               Late Fee
    //                             </span>
    //                             <p className="text-[9px] text-white/60 italic">
    //                               {exam.exam.extraFees.lateFee.note}
    //                             </p>
    //                           </div>
    //                           <span className="text-sm font-black">
    //                             {exam.exam.extraFees.lateFee.price}{" "}
    //                             {exam.exam.extraFees.lateFee.currency}
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </BaseCard>
    //                 )}
    //               </div>
    //             </div>
    //           )}

    //           {/* Grid for Workshops & Courses */}
    //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
    //             {/* Workshops */}
    //             <div className="space-y-8">
    //               <div className="flex items-center gap-3 text-slate-900">
    //                 <Clock className="size-6 text-primary" />
    //                 <h3 className="text-xl font-black uppercase tracking-widest">
    //                   Intensive Workshops
    //                 </h3>
    //               </div>
    //               <div className="grid gap-6">
    //                 {exam.workshops.map((ws, i) => (
    //                   <BaseCard key={i} className="p-8">
    //                     <div className="flex items-center justify-between">
    //                       <div className="flex items-center gap-6">
    //                         <BaseCardIcon className="size-14 rounded-2xl">
    //                           {ws.duration}
    //                         </BaseCardIcon>
    //                         <div className="space-y-1">
    //                           <BaseCardTitle>Workshop Pass</BaseCardTitle>
    //                           <BaseCardDescription>
    //                             Single Intensive Session
    //                           </BaseCardDescription>
    //                         </div>
    //                       </div>
    //                       <div className="text-right">
    //                         <span className="text-2xl font-black text-slate-900">
    //                           {ws.price}
    //                         </span>
    //                         <span className="text-[10px] font-black text-slate-400 uppercase ml-2">
    //                           AED
    //                         </span>
    //                       </div>
    //                     </div>
    //                   </BaseCard>
    //                 ))}
    //               </div>
    //             </div>

    //             {/* Preparation Courses */}
    //             <div className="space-y-8">
    //               <div className="flex items-center gap-3 text-slate-900">
    //                 <GraduationCap className="size-6 text-primary" />
    //                 <h3 className="text-xl font-black uppercase tracking-widest">
    //                   Mastery Programs
    //                 </h3>
    //               </div>
    //               <div className="grid gap-6">
    //                 {exam.courses.map((course, i) => (
    //                   <BaseCard
    //                     key={i}
    //                     className="p-8 bg-white overflow-hidden"
    //                   >
    //                     <div className="flex flex-col space-y-6">
    //                       <div className="flex justify-between items-start">
    //                         <div className="space-y-1">
    //                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
    //                             Course Type
    //                           </span>
    //                           <BaseCardTitle className="text-2xl">
    //                             {course.type}
    //                           </BaseCardTitle>
    //                         </div>
    //                         <div className="px-3 py-1 bg-primary text-[9px] font-black text-white uppercase tracking-widest rounded-full">
    //                           Save {course.discount}%
    //                         </div>
    //                       </div>

    //                       <div className="flex items-center justify-between pt-6 border-t border-slate-100">
    //                         <div className="space-y-1">
    //                           <span className="text-[10px] font-black text-slate-400 line-through italic">
    //                             AED {course.price}
    //                           </span>
    //                           <div className="flex items-baseline gap-1.5 text-slate-900">
    //                             <span className="text-3xl font-black tracking-tighter">
    //                               {Math.floor(
    //                                 course.price * (1 - course.discount / 100),
    //                               )}
    //                             </span>
    //                             <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
    //                               AED
    //                             </span>
    //                           </div>
    //                         </div>
    //                         <Link
    //                           href={`/exam-preparation-courses/${exam.id === "celpip-cael" ? "celpip-general" : exam.id === "psi" ? "selt" : exam.id === "pte" ? "pte-academic" : exam.id === "oet" ? "" : exam.id}`}
    //                           className="size-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all group"
    //                         >
    //                           <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    //                         </Link>
    //                       </div>
    //                     </div>
    //                   </BaseCard>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* ── Payment Footer ── */}
    //   <section className="py-24 bg-slate-950 text-center space-y-12 relative overflow-hidden">
    //     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
    //     <div className="container relative z-10 mx-auto px-4 max-w-4xl space-y-8">
    //       <div className="space-y-6">
    //         <h4 className="text-4xl lg:text-6xl font-black text-white italic tracking-tight leading-none">
    //           Secure Your <span className="text-primary">Global</span> Future.
    //         </h4>
    //         <p className="text-slate-400 font-medium text-lg lg:text-xl leading-relaxed">
    //           All payments are secured using 256-bit encryption. TEPTH is an
    //           official partner for international examination bodies in the UAE.
    //         </p>
    //       </div>
    //       <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
    //         <div className="text-xs font-black uppercase tracking-[0.4em] text-white">
    //           Official Provider
    //         </div>
    //         <div className="text-xs font-black uppercase tracking-[0.4em] text-white">
    //           256-Bit SSL Secured
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* ── Consultation CTA ── */}

    //   <FreeConsultation />
    // </main>
    <div className="min-h-screen bg-white">
      <div className="base-px base-py max-w-3xl mx-auto base-space-y">
        <h1 className="section-title text-center">
          Exam <span className="highlight">Fees</span>
        </h1>
        <p className="section-subtitle max-w-3xl mx-auto text-center">
          Here is a comprehensive breakdown of all official exam fees and
          service charges. This guide ensures transparency in your planning.
        </p>
      </div>
      <div className="base-px base-py max-w-5xl mx-auto">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {FEES_DATA.map((card, index) => (
            <Link key={card.id} href={`/fees/${card.id}`}>
              <BaseCard>
                <div className="flex items-center justify-between">
                  <BaseCardIcon>{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>
                <div className="space-y-3">
                  <BaseCardTitle>{card.name}</BaseCardTitle>
                </div>
                <BaseCardList
                  items={[
                    `Exam Fee: ${card.exam_fee} AED`,
                    `Service Charge: ${card.service_fee} AED`,
                  ]}
                />
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
