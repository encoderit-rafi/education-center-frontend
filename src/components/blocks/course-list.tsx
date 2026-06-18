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

export default function CourseList() {
  const t = useTranslations("HomePage.CourseList");
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
    <section className="base-px base-py">
      <div className="section-container">
        <div className="space-y-4 mb-12">
          <span className="section-label">{t("label")}</span>
          <h3 className="section-title">
            {t("title")} <span>{t("titleAccent")}</span>
          </h3>
        </div>

     
          {/* {EXAM_CARDS_DATA.map((exam) => (
            <Link key={exam.id} href={`/exams/${exam.id}`}>
              <BaseCard className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                    {exam.name}
                  </BaseCardTitle>
                  <BaseCardArrow />
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                  <BaseCardDescription className="mb-4">
                    {exam.description}
                  </BaseCardDescription>
                </div>
              </BaseCard>
            </Link>
          ))} */}
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
                const examName = exam.translations?.[locale]?.name || exam.name;
                const examDesc = exam.translations?.[locale]?.description || exam.description;
                return (
                  <Link key={exam.id} href={`/exams/${exam.slug}`}>
                    <BaseCard className="p-6">
                      <div className="flex items-center justify-between gap-2">
                        <BaseCardIcon>{index + 1}</BaseCardIcon>
                        <BaseCardArrow />
                      </div>
                      <div className="flex-1 flex flex-col space-y-2 mt-3">
                        <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                          {examName}
                        </BaseCardTitle>
                        <BaseCardDescription className="mb-4">
                          {examDesc}
                        </BaseCardDescription>
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
