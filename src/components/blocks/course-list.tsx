"use client"
import Link from "next/link";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardArrow,
} from "@/components/blocks/cards/base-card";
import { useQuery } from "@tanstack/react-query";
import api from "@/axios";
import { useTranslations, useLocale } from "next-intl";
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

const examPriority = (slug: string) => {
  const s = slug.toLowerCase();
  if (s.startsWith("ielts")) return 1;
  if (s.startsWith("pte")) return 2;
  if (s.startsWith("toefl")) return 3;
  if (s.startsWith("cael")) return 4;
  if (s.startsWith("celpip")) return 5;
  if (s.startsWith("selt") || s.includes("english") || s.includes("skill")) return 6;
  return 10;
};

const formatExamName = (name: string) => {
  if (name === "CELPIP") return "CELPIP General";
  return name;
};

const EXAM_ARABIC_NAMES: Record<string, string> = {
  ielts: "آيلتس",
  pte: "بي تي إي",
  toefl: "توفل آي بي تي",
  "toefl-ibt": "توفل آي بي تي",
  cael: "كايل",
  "celpip-general": "سيلبيب العام",
  celpip: "سيلبيب العام",
  "skill-for-english-selt": "سكيلز فور إنجلش (سيلت)",
  "skills-for-english-selt": "سكيلز فور إنجلش (سيلت)",
  oet: "أو إي تي",
  gre: "جي آر إي",
};

export default function CourseList() {
  const t = useTranslations("HomePage.CourseList");
  const locale = useLocale();
  const isRtl = locale === "ar";
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
    const rawName = exam.translations?.[locale]?.name || exam.name;
    if (isRtl) {
      const slugKey = exam.slug?.toLowerCase();
      if (slugKey && EXAM_ARABIC_NAMES[slugKey]) {
        return EXAM_ARABIC_NAMES[slugKey];
      }
      const upper = exam.name?.toUpperCase() || "";
      if (upper === "IELTS") return "آيلتس";
      if (upper === "PTE") return "بي تي إي";
      if (upper.includes("TOEFL")) return "توفل آي بي تي";
      if (upper === "CAEL") return "كايل";
      if (upper.includes("CELPIP")) return "سيلبيب العام";
      if (upper.includes("SKILL")) return "سكيلز فور إنجلش (سيلت)";
    }
    return formatExamName(rawName);
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

  const allCards = [
    ...coreExams,
    {
      id: "other-exams",
      name: t("otherExamsTitle"),
      slug: "other-exams",
    }
  ];

  return (
    <section className="base-px base-py">
      <div className="section-container">
        <div className="space-y-4 mb-12">
          <h3 className="section-title">
            {t("title")} <span>{t("titleAccent")}</span>
          </h3>
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
            {allCards.map((exam, index) => {
              return (
                <Link key={exam.id} href={`/exams/${exam.slug}`}>
                  <BaseCard className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <BaseCardIcon>{index + 1}</BaseCardIcon>
                      <BaseCardArrow />
                    </div>
                    <div className="flex-1 flex flex-col space-y-2 mt-3">
                      <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                        {exam.name}
                      </BaseCardTitle>
                    </div>
                  </BaseCard>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
