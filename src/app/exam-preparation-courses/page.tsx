"use client";

import Link from "next/link";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardIcon,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { useQuery } from "@tanstack/react-query";
import api from "@/axios";

export default function ExamPreparationCoursesPage() {
  const { data: coursesResponse, isLoading } = useQuery({
    queryKey: ["exam-preparation-courses"],
    queryFn: async () => {
      const response = await api.get("/courses");
      return response.data;
    },
  });

  const courses = coursesResponse?.data?.data || [];

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-slate-50 base-py base-px">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="section-title">
              Exam Preparation{" "}
              <span className="text-primary italic">Courses</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Master international proficiency standards with our elite
              preparation programs. We combine official pedagogy with intensive
              practice to guarantee your success.
            </p>
          </div>
        </section>

        {/* ── Course Grid Loading ── */}
        <section id="courses-grid" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="border border-slate-100 rounded-2xl p-6 bg-slate-50/50 animate-pulse h-[300px]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-8  ">
          <h1 className="section-title">
            Exam Preparation{" "}
            <span className="text-primary italic">Courses</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Master international proficiency standards with our elite
            preparation programs. We combine official pedagogy with intensive
            practice to guarantee your success.
          </p>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section id="courses-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((exam: any, index: number) => {
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
                        {exam.name}
                      </BaseCardTitle>
                    </div>

                    <BaseCardList
                      checked
                      items={[
                        `${exam.name} Classroom Course`,
                        `${exam.name} Online Course`,
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
