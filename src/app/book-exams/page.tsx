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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Exam Cards */}
            {EXAMS.map((exam) => (
              <ExamCard key={exam.id} {...exam} />
            ))}

            {/* Special Note Card: IELTS UKVI */}
            <div
              id="ielts-ukvi-academic"
              className="scroll-mt-32 group relative flex flex-col overflow-hidden rounded-xl border border-[#EEE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-[0_18px_38px_-10px_rgba(139,0,0,0.14)]"
            >
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-1 text-base font-bold text-gray-900">
                  IELTS UKVI
                </h3>
                <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  An IELTS test approved for UK visa and immigration
                  applications, accepted by UK Visas and Immigration (UKVI).
                </p>

                <div className="mb-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-xs leading-relaxed text-amber-900">
                    IELTS UKVI and Life Skills exams are not administered at the
                    TEPTH centre — please register directly through the British
                    Council.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/book-exams/:ID`}
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
                    href={`/courses/:ID`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Special Note Card: PTE Home */}
            <div
              id="pte-home-a1"
              className="scroll-mt-32 group relative flex flex-col overflow-hidden rounded-xl border border-[#EEE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-[0_18px_38px_-10px_rgba(139,0,0,0.14)]"
            >
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-1 text-base font-bold text-gray-900">
                  PTE Home (A1, A2, B1)
                </h3>

                <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  UK Home Office-approved tests for family and settlement visa
                  applications at A1, A2, and B1 levels.
                </p>

                <div className="mb-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-xs leading-relaxed text-amber-900">
                    PTE Home tests are administered at TEPTH. Please contact us
                    to confirm availability and book your session.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/book-exams/:ID`}
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
                    href={`/courses/:ID`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
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
            href={`/courses/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
