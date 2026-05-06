import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  Zap,
  Target,
  Users,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { buttonVariants } from "@/components/ui/button";
import ExamPreparationForm from "../_components/exam-preparation-form";
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";

const pteCourse = {
  id: "pte-academic",
  title: "PTE Academic",
  exam: {
    name: "PTE Academic",
    fullName: "Pearson Test of English",
    description:
      "The PTE Academic is a fully computer-based English proficiency exam developed by Pearson. It is widely accepted by thousands of universities and governments around the world, including Australia, Canada, and New Zealand. Results are typically available within 48 hours. The test uses advanced AI scoring technology to evaluate speaking, writing, listening, and reading skills objectively.",
    usage: [
      "Fast results turnaround (48 hours)",
      "Immigration to Australia, Canada & NZ",
      "Global university admission",
      "Advanced AI scoring technology",
    ],
    types: [
      {
        name: "PTE Academic",
        purpose: "Academic and immigration purposes",
      },
    ],
  },
  courses: [
    {
      id: "vip",
      title: "Private One-to-One Course (VIP)",
      type: "One-to-One",
      price: 4850,
      currency: "AED",
      description:
        "The PTE Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
      bestFor: [
        "Need to achieve a high score 79+",
        "Limited preparation timeframe",
        "Prefer individual attention & feedback",
        "Improve specific exam sections quickly",
      ],
      details: {
        duration: "24 Hours",
        completionTime: "6 Weeks",
        schedule: "Flexible",
      },
    },
    {
      id: "semi-private",
      title: "Semi-Private Course (Two Students)",
      type: "Two Students",
      price: 2850,
      currency: "AED",
      description:
        "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
      bestFor: [
        "Interactive learning preference",
        "Collaborative problem solving",
        "Small, supportive environment",
        "Friends or family preparing together",
      ],
      details: {
        duration: "24 Hours",
        completionTime: "6 Weeks",
        schedule: "Flexible",
        classSize: "2 Students Only",
      },
    },
    {
      id: "group",
      title: "Group Course (Small Groups)",
      type: "Group",
      price: 1850,
      currency: "AED",
      description:
        "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
      bestFor: [
        "Dynamic classroom preference",
        "Motivation through peer engagement",
        "Structured collaborative learning",
        "Structured program coverage",
      ],
      details: {
        duration: "24 Hours",
        completionTime: "6 Weeks",
        schedule: "Flexible",
        classSize: "Small Groups",
      },
    },
    {
      id: "online",
      title: "Online Preparation Course",
      type: "Online",
      price: 4850,
      currency: "AED",
      description:
        "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
      bestFor: [
        "Studying from home preference",
        "Demanding work schedules",
        "Live instructor interaction",
        "Flexible scheduling options",
      ],
      details: {
        duration: "20 Hours",
        format: "Live Online Classes",
        schedule: "Flexible",
      },
    },
  ],
};

export default function ExamPreparationPTEAcademic() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl flex flex-col items-center">
          <div className="grid lg:grid-cols-[1fr_450px] gap-16 items-center">
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Award className="size-3.5" />
                Official Preparation Center
              </div>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-6xl mb-6">
                {pteCourse.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                {pteCourse.exam.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Target className="size-4 text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {pteCourse.exam.usage.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-bold text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Zap className="size-4 text-primary" />
                    Focus Area
                  </h3>
                  <ul className="space-y-3">
                    {pteCourse.exam.types.map((type, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-bold text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {type.purpose}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#packages"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "px-8 py-6 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300",
                  )}
                >
                  View Course Packages
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <div className="flex items-center gap-4 px-4 text-sm font-bold text-slate-500">
                  <MapPin className="size-4 text-primary" />
                  Dubai Silicon Oasis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages Section ── */}
      <section id="packages" className="base-py bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
              PTE Academic <span className="text-primary">Preparation Path</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Master the computer-based PTE exam with our specialized training programs. Choose the format that suits your goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {pteCourse.courses.map((course, index) => (
              <BaseCard
                key={course.id}
                className="p-8 flex flex-col h-full border-slate-200 group relative overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <BaseCardIcon className="bg-primary/5 text-primary">
                      {course.type === "One-to-One" ? (
                        <UserCheck />
                      ) : course.type === "Online" ? (
                        <Zap />
                      ) : (
                        <Users />
                      )}
                    </BaseCardIcon>
                    <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">
                      0{index + 1}
                    </span>
                  </div>
                  <BaseCardTitle className="text-xl mb-4 leading-tight">
                    {course.title}
                  </BaseCardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {course.currency}
                    </span>
                    <span className="text-3xl font-black text-slate-900">
                      {course.price}
                    </span>
                  </div>
                </div>

                <BaseCardDescription className="text-sm mb-8 line-clamp-none text-slate-600 font-medium">
                  {course.description}
                </BaseCardDescription>

                <div className="space-y-6 mt-auto">
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                      Best For
                    </p>
                    <ul className="space-y-2">
                      {course.bestFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[11px] font-bold text-slate-700 leading-snug"
                        >
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Duration
                      </p>
                      <p className="text-xs font-bold text-slate-900">
                        {course.details.duration}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Schedule
                      </p>
                      <p className="text-xs font-bold text-slate-900">
                        {course.details.schedule}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`#booking-section?plan=${course.id}`}
                    className={cn(
                      buttonVariants({
                        variant: index === 0 ? "default" : "outline",
                      }),
                      "w-full font-bold h-12 shadow-sm",
                    )}
                  >
                    Select Plan
                  </Link>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Section ── */}
      <section id="booking-section" className="base-py bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 lg:text-5xl mb-6">
              Enroll in <span className="text-primary">PTE Academic Preparation</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Secure your spot in our premium preparation program. Select your preferred start date and finalize your enrollment below.
            </p>
          </div>
          <ExamPreparationForm initialExam="PTE" />
        </div>
      </section>

      {/* ── Consultation Footer ── */}
      <div className="mt-10">
        <FreeConsultation />
      </div>
    </div>
  );
}
