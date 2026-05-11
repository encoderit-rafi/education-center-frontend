"use client";

import Link from "next/link";
import {
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  AlertTriangle,
  Check,
  CalendarDays,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { EXAM_CARDS_DATA } from "@/data";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

const EXAMS = [
  {
    id: "ielts-academic",
    title: "IELTS Academic & General Training",
    desc: "The world's most popular English language test for study, work, and migration. Accepted by over 11,000 organisations globally.",
  },
  {
    id: "toefl-ibt",
    title: "TOEFL iBT",
    desc: "The leading English test for university admissions in the US, Canada, and worldwide. Taken by over 35 million people.",
  },
  {
    id: "pte-academic",
    title: "PTE Academic",
    desc: "A computer-based English test for study and migration, accepted by thousands of universities and governments worldwide.",
  },
  {
    id: "pte-academic-ukvi",
    title: "PTE Academic UKVI",
    desc: "A UK Home Office-approved Secure English Language Test (SELT) for UK visa and immigration applications.",
  },
  {
    id: "celpip-general",
    title: "CELPIP",
    desc: "Canada's official English language test for permanent residency, citizenship, and professional designations.",
  },
  {
    id: "cael",
    title: "CAEL",
    desc: "The Canadian Academic English Language assessment for university and college admissions across Canada.",
  },
  {
    id: "skills-for-english",
    title: "Skills for English (SELT)",
    desc: "A UK Home Office-approved Secure English Language Test for visa applications including settlement and citizenship.",
  },
];

const BOOK_STEPS = [
  {
    step: "01",
    title: "Choose Your Exam",
    desc: "Select the exam that matches your goal — study, migration, UK visa, or professional certification. Browse the exam cards below.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Register with the Provider",
    desc: "Click the registration link for your chosen exam to create an account and select a test date and centre.",
    icon: ExternalLink,
  },
  {
    step: "03",
    title: "Select TEPTH as Your Centre",
    desc: "When choosing your test centre, search for TEPTH in Dubai Silicon Oasis. If you need help, call us on +971 4 333 3616.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Confirm & Prepare",
    desc: "Once booked, you will receive a confirmation. Review your exam requirements and contact TEPTH if you need any special arrangements.",
    icon: ShieldCheck,
  },
];

const GUIDANCE_CATEGORIES = [
  "Study abroad — IELTS Academic, TOEFL iBT, PTE Academic, CAEL",
  "UK visa & settlement — IELTS UKVI, PTE Academic UKVI, Skills for English",
  "Canada PR & citizenship — CELPIP General, IELTS General Training",
  "UK family visa — PTE Home A1, A2, B1",
  "Professional registration — IELTS Academic, OET, PTE Academic",
];

export default function BookExamPage() {
  return (
    <div className="base-py space-y-12">
      {/* ── How to Book Section ── */}
      <section className="base-px section-container">
        <div className="mb-14 text-center space-y-6">
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">
            How to <span className="text-red-500">Book</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOOK_STEPS.map((item, index) => (
            <div key={index} className="relative card-hover p-7">
              {index < 3 && (
                <span
                  className="pointer-events-none absolute -right-3 top-12 hidden h-px w-6 bg-gradient-to-r from-maroon-200 to-transparent lg:block"
                  aria-hidden="true"
                ></span>
              )}
              <div className="mb-5 flex items-center justify-between">
                <span className="icon-tile icon-tile-sq">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-4xl font-black leading-none text-maroon-100">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Available Exams Section ── */}
      <section>
        <div className="section-container base-py base-px">
          <div className="mb-14 text-center space-y-6">
            <span className="section-label">Available Exams</span>
            <h2 className="section-title">
              Choose Your <span className="text-red-500">Exam</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXAM_CARDS_DATA.map((exam, index) => (
              <Link href={`/book-exams/${exam.id}`}>
                <BaseCard key={exam.id} className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <BaseCardIcon>{index + 1}</BaseCardIcon>
                    <BaseCardArrow />
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                      {exam.name}
                    </BaseCardTitle>
                    <BaseCardDescription className="mb-4">
                      {exam.description}
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ExamCard({
  id,
  title,
  desc,
}: {
  id: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-32 group relative flex flex-col overflow-hidden rounded-xl border border-[#EEE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-[0_18px_38px_-10px_rgba(139,0,0,0.14)]"
    >
      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-1 text-base font-bold text-gray-900">{title}</h3>
        <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {desc}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/book-exams/${id}`}
            className={buttonVariants({
              className: "rounded-md h-10!",
            })}
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Book Now
          </Link>
          <Link
            className={buttonVariants({
              variant: "outline",
              className: "rounded-md h-10!",
            })}
            href={`/exam-preparation-courses/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
