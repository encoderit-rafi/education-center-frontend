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
        <div className="section-container base-px base-py">
          <span className="section-label">Available Courses</span>
          <h2 className="section-title">
            Choose Your <span>Preparation Format</span>
          </h2>
          <p className="leading-relaxed text-gray-600 mb-8 mt-4">
            We offer multiple course formats to suit your learning style,
            schedule, and goals. Choose from our specialized programs below.
          </p>
          <div className="flex flex-col gap-10">
            {exam.course_formats &&
              exam.course_formats.length > 0 &&
              exam.course_formats.map((format, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {format.title}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {format.courses &&
                      format.courses.map((course, j) => (
                        <Link
                          key={j}
                          href={`/course-registration?course=${exam.id}&format=${format.course_type_id}&type=${course.course_id}`}
                        >
                          <BaseCard className="group h-full p-4 lg:p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <BaseCardTitle className="mb-1">
                                  {course.title}
                                </BaseCardTitle>
                                <p className="text-sm font-medium text-primary">
                                  {course.subtitle}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 mt-1 group-hover:translate-x-1 group-hover:text-primary transition-transform shrink-0" />
                            </div>
                            <BaseCardDescription className="mt-2 flex-grow">
                              {course.overview}
                            </BaseCardDescription>
                          </BaseCard>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
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
