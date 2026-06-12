"use client";

import Link from "next/link";
import {
  ClipboardCheck,
  ExternalLink,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "@/axios";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

interface ExamType {
  id: string;
  name: string;
}

interface Exam {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  examType: ExamType[];
}

interface ApiResponse {
  success: boolean;
  data: {
    data: Exam[];
  };
}

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
    desc: "When choosing your test centre, search for TEPTH in Dubai Silicon Oasis. If you need help, call us on +97165531250.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Confirm & Prepare",
    desc: "Once booked, you will receive a confirmation. Review your exam requirements and contact TEPTH if you need any special arrangements.",
    icon: ShieldCheck,
  },
];


export default function BookExamPage() {
  const { data: examsResponse, isLoading } = useQuery<ApiResponse>({
    queryKey: ["exams", { limit: 100, sort_order: "asc", sort_by: "orderIndex" }],
    queryFn: async () => {
      const response = await api.get("/exams", {
        params: { limit: 100, sort_order: "asc", sort_by: "orderIndex" },
      });
      return response.data;
    },
  });

  const exams =
    examsResponse?.data?.data
      ?.filter((exam) =>
        exam.examType?.some((et) => et.name === "group")
      )
      ?.sort((a: any, b: any) => {
        const aVal = a.orderIndex !== undefined && a.orderIndex !== null ? Number(a.orderIndex) : Infinity;
        const bVal = b.orderIndex !== undefined && b.orderIndex !== null ? Number(b.orderIndex) : Infinity;
        return aVal - bVal;
      }) ?? [];

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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 rounded-2xl bg-slate-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {exams.map((exam, index) => (
                <Link key={exam.id} href={`/book-exams/${exam.slug}`}>
                  <BaseCard className="p-6">
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
          )}
        </div>
      </section>
    </div>
  );
}
