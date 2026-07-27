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
import { useTranslations, useLocale } from "next-intl";
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
  translations?: Record<string, { name?: string; description?: string }> | null;
}

interface ApiResponse {
  success: boolean;
  data: {
    data: Exam[];
  };
}

const STEP_ICONS = [ClipboardCheck, ExternalLink, MapPin, ShieldCheck];

const examPriority = (slug: string) => {
  const s = slug.toLowerCase();
  if (s.startsWith("ielts")) return 1;
  if (s.startsWith("pte")) return 2;
  if (s.startsWith("toefl")) return 3;
  if (s.startsWith("cael")) return 4;
  if (s.startsWith("celpip")) return 5;
  return 10;
};

const formatExamName = (name: string) => {
  if (name === "CELPIP") return "CELPIP General";
  return name;
};

export default function BookExamPage() {
  const t = useTranslations("BookExamsPage");
  const locale = useLocale();
  const { data: examsResponse, isLoading } = useQuery<ApiResponse>({
    queryKey: ["exams", { limit: 100, sort_order: "asc", sort_by: "orderIndex" }],
    queryFn: async () => {
      const response = await api.get("/exams", {
        params: { limit: 100, sort_order: "asc", sort_by: "orderIndex" },
      });
      return response.data;
    },
  });

  const getExamName = (exam: Exam) => {
    const transName = exam.translations?.[locale]?.name;
    return transName || formatExamName(exam.name);
  };

  const coreExams =
    examsResponse?.data?.data
      ?.filter((exam) =>
        exam.examType?.some((et) => et.name === "exam")
      )
      ?.map((exam) => ({
        id: exam.id,
        name: getExamName(exam),
        slug: exam.slug,
        description: exam.translations?.[locale]?.description || exam.description || "",
      }))
      ?.sort((a, b) => examPriority(a.slug) - examPriority(b.slug)) ?? [];

  const exams = [
    ...coreExams,
    {
      id: "other-exams",
      name: t("otherExamsTitle"),
      slug: "other-exams",
      description: "",
    },
  ];

  return (
    <div className="base-py space-y-12">
      {/* ── How to Book Section ── */}
      <section className="base-px section-container">
        <div className="mb-14 text-center space-y-6">
          <span className="section-label">{t("HeroSection.label")}</span>
          <h2 className="section-title">
            {t("HeroSection.title")}<span className="text-red-500">{t("HeroSection.titleAccent")}</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.raw("Steps").map((item: any, index: number) => {
            const Icon = STEP_ICONS[index];
            return (
              <div key={index} className="relative card-hover p-7">
                {index < 3 && (
                  <span
                    className="pointer-events-none absolute -right-3 top-12 hidden h-px w-6 bg-linear-to-r from-maroon-200 to-transparent lg:block"
                    aria-hidden="true"
                  >
                  </span>
                )}
                <div className="mb-5 flex items-center justify-between">
                  <span className="icon-tile icon-tile-sq">
                    <Icon className="h-5 w-5" />
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
            );
          })}
        </div>
      </section>

      {/* ── Available Exams Section ── */}
      <section>
        <div className="section-container base-py base-px">
          <div className="mb-14 text-center space-y-6">
            <span className="section-label">{t("HeroSection.availableExamsLabel")}</span>
            <h2 className="section-title">
              {t("HeroSection.availableExamsTitle")}<span className="text-red-500">{t("HeroSection.availableExamsTitleAccent")}</span>
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
              {exams.map((exam, index) => {
                const href =
                  exam.slug === "other-exams"
                    ? "/exams/other-exams"
                    : `/book-exams/${exam.slug}`;
                return (
                  <Link key={exam.id} href={href}>
                    <BaseCard className="p-6">
                      <div className="flex items-center justify-between gap-2">
                        <BaseCardIcon>{index + 1}</BaseCardIcon>
                        <BaseCardArrow />
                      </div>
                      <div className="flex-1 flex flex-col space-y-2 mt-3">
                        <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                          {exam.name}
                        </BaseCardTitle>
                        {exam.description && (
                          <BaseCardDescription className="mb-4">
                            {exam.description}
                          </BaseCardDescription>
                        )}
                      </div>
                    </BaseCard>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
