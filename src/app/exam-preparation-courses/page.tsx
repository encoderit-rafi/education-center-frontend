import Link from "next/link";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardIcon,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import api from "@/axios";
import { getLocale, getTranslations } from "next-intl/server";

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

export default async function ExamPreparationCoursesPage() {
  const locale = await getLocale();
  const t = await getTranslations("ExamPrepListPage");
  let courses = [];
  try {
    const response = await api.get("/courses");
    if (response.data?.success) {
      courses = response.data.data.data.sort(
        (a: any, b: any) => examPriority(a.slug || "") - examPriority(b.slug || "")
      );
    }
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="section-title">
            {t("title")}{" "}
            <span className="text-primary italic">{t("titleSpan")}</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section id="courses-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((exam: any, index: number) => {
              const courseName = exam.translations?.[locale]?.title || exam.name;
              return (
                <Link
                  key={exam.id}
                  href={`/exam-preparation-courses/${exam.slug}`}
                >
                  <BaseCard>
                    <div className="flex items-center justify-between mb-10">
                      <BaseCardIcon>{index + 1}</BaseCardIcon>
                      <BaseCardArrow className="group-hover:translate-x-2 transition-transform duration-500" />
                    </div>

                    <div className="space-y-5 mb-5">
                      <BaseCardTitle className="text-2xl font-black text-slate-900 leading-tight">
                        {courseName}
                      </BaseCardTitle>
                    </div>

                    <BaseCardList
                      checked
                      items={[
                        t("classroomCourse", { name: courseName }),
                        t("onlineCourse", { name: courseName }),
                      ]}
                    />
                  </BaseCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
