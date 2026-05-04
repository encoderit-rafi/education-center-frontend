import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Target,
  ArrowRight,
} from "lucide-react";
import exam_preparation_courses from "@/lib/demo-data/exam-preparation-courses";
import GradientBox from "@/components/blocks/gradient-box";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

// Helper to format text with basic markdown-like bolding
const formatText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default async function ExamPreparationCourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exam = exam_preparation_courses.find((e) => e.id === id);

  if (!exam) {
    notFound();
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto base-px base-py ">
          <h1 className="section-title">{exam.name}</h1>

          <div className="mt-5 text-base leading-relaxed text-gray-600 whitespace-pre-wrap">
            {formatText(exam.description)}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <span className="section-label">Available Courses</span>
              <h2 className="section-title">
                Choose Your <span>Preparation Format</span>
              </h2>
              <p className="leading-relaxed text-gray-600 mb-8 mt-4">
                We offer multiple course formats to suit your learning style,
                schedule, and goals. Choose from our specialized programs below.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {exam.course_formats &&
                  exam.course_formats.length > 0 &&
                  exam.course_formats.map((course, i) => (
                    <Link
                      key={i}
                      href={`/course-registration?course=${exam.id}&format=${course.course_type_id}`}
                    >
                      <BaseCard className="group  p-4 lg:p-6">
                        <div className="flex justify-between items-center">
                          <BaseCardTitle>{course.title}</BaseCardTitle>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-transform" />
                        </div>
                        <BaseCardDescription>
                          {course.description}
                        </BaseCardDescription>
                      </BaseCard>
                    </Link>
                  ))}
              </div>
              {/* {exam.course_formats && exam.course_formats.length > 0 && (
                <div className="space-y-6">
                  {exam.course_formats.map((course, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md lg:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {course.name}
                        </h3>
                        <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-0.5 text-xs font-bold text-primary">
                          {course.type}
                        </span>
                      </div>

                      <div className="text-sm leading-relaxed text-gray-600 whitespace-pre-wrap mb-6">
                        {formatText(course.description)}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-auto border-t border-gray-100 pt-6 md:grid-cols-4">
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                            <Clock className="size-4" /> Duration
                          </span>
                          <span className="font-semibold text-gray-900">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                            <Users className="size-4" /> Class Size
                          </span>
                          <span className="font-semibold text-gray-900">
                            {course.class_size}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                            <MapPin className="size-4" /> Location
                          </span>
                          <span className="font-semibold text-gray-900">
                            {course.location}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                            <Target className="size-4" /> Ideal For
                          </span>
                          <span
                            className="font-semibold text-gray-900 line-clamp-2"
                            title={course.perfect_for}
                          >
                            {course.perfect_for}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link
                          href={`/course-registration?course=${exam.id}&format=${course.id}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-gray-800 md:w-auto"
                        >
                          Enroll in {course.type} Course
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
            </div>

            {/* Sidebar */}
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <GradientBox className="px-8 py-14 shadow-xl md:px-14 md:py-16 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
        <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Register for {exam.name} at TEPTH
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-red-100">
              Start your journey today. Secure your spot in our upcoming
              sessions and achieve your target score.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:bg-red-50"
              href={`/course-registration?course=${exam.id}`}
            >
              Enroll Now
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              href="/free-consultation"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </GradientBox>
    </div>
  );
}
