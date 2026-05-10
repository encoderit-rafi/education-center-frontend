"use client";

import Link from "next/link";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardIcon,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

import { NAV_EXAM_PREPARATION_COURSES_DATA } from "@/data";

export default function ExamPreparationCoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-8  ">
          <h1 className="page-heading">
            Exam Preparation{" "}
            <span className="text-primary italic">Courses</span>
          </h1>
          <p className="page-description">
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
            {NAV_EXAM_PREPARATION_COURSES_DATA.map((exam, index) => {
              return (
                <Link
                  key={exam.id}
                  href={`/exam-preparation-courses/${exam.id}`}
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
