"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/lib/courses-data";
import CourseCard from "@/components/blocks/course-card";
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import Image from "next/image";
import { Calendar, LayoutList } from "lucide-react";

export default function CourseDetails() {
  const params = useParams();
  const id = params?.id as string;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const stats = [
    { label: "Duration", value: course.duration },
    { label: "Level", value: course.level },
    { label: "Format", value: course.format },
    { label: "Investment", value: course.investment.replace("Starting from ", "").replace(".00", "") }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                {course.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-gray-500">
                {course.category} Program
              </p>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-800"
                  href={`/enroll-course?course=${course.id}`}
                >
                  <Calendar className="h-4 w-4" />
                  Register Now
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-8 py-3.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary"
                  href="/free-consultation"
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative flex h-40 w-48 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
                {course.image && (
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={140}
                    height={70}
                    className="h-14 w-auto object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-[#F9FAFB] pb-6 pt-2">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="relative -mt-10 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl md:p-6 lg:p-8">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 md:gap-0 md:divide-x md:divide-gray-100">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 px-4 py-4 text-center md:px-6"
                >
                  <p className="text-2xl font-bold leading-none text-gray-900 lg:text-3xl whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {stat.value}
                  </p>
                  <p className="text-[12px] font-medium uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-red-50 rounded-full mb-4">
                About the Course
              </span>
              <h2 className="mb-5 text-2xl font-bold text-gray-900 lg:text-3xl">
                {course.title} Overview
              </h2>
              <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                {course.extendedDescription}
              </div>

              {/* Rendering Sections if available */}
              {course.sections && course.sections.length > 0 && (
                <div className="mt-12 space-y-10">
                  {course.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      {section.title && (
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight">
                          {section.title}
                        </h3>
                      )}
                      {section.content && (
                        <p className="text-slate-600 text-base leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </p>
                      )}
                      {section.type === "cards" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          {section.cardIds
                            ? COURSES.filter((c) =>
                                section.cardIds?.includes(c.id),
                              ).map((c) => <CourseCard key={c.id} course={c} />)
                            : COURSES.filter(
                                (c) =>
                                  c.category === course.category &&
                                  c.id !== course.id,
                              ).map((c) => <CourseCard key={c.id} course={c} />)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Curriculum if available */}
              {course.curriculum && course.curriculum.length > 0 && (
                <div className="mt-12">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-red-50 rounded-full mb-4">
                    Curriculum
                  </span>
                  <h3 className="mb-6 text-xl font-bold text-gray-900 lg:text-2xl">
                    What You Will Learn
                  </h3>
                  <div className="space-y-4">
                    {course.curriculum.map((module, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-5 rounded-xl border border-gray-50 bg-white shadow-sm transition-all hover:shadow-md"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-primary">
                          <LayoutList className="h-6 w-6" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {module.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            {module.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {course.eligibility && course.eligibility.length > 0 && (
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    Who Should Take This?
                  </h3>
                  <ul className="space-y-3">
                    {course.eligibility.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                  Course Info
                </h3>
                <div className="space-y-3 text-sm">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 border-b border-dashed border-gray-100 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-500">{stat.label}</span>
                      <span className="text-right font-semibold text-gray-900 truncate pl-2 max-w-[120px]" title={stat.value}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {course.instructor && course.instructor.name && (
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Instructor
                  </h3>
                  <div className="flex items-center gap-3">
                    {course.instructor.image && (
                       <Image
                         src={course.instructor.image}
                         alt={course.instructor.name}
                         width={40}
                         height={40}
                         className="rounded-full h-10 w-10 object-cover"
                       />
                    )}
                    <div>
                      <p className="font-bold text-sm text-gray-900">{course.instructor.name}</p>
                      <p className="text-xs text-red-700">{course.instructor.role}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-center shadow-lg">
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10"
                  aria-hidden="true"
                ></div>
                <p className="relative mb-1 text-xs font-semibold uppercase tracking-widest text-red-200">
                  Ready to start?
                </p>
                <p className="relative mb-4 text-lg font-bold text-white">
                  Join {course.title}
                </p>
                <Link
                  className="relative block rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-red-50"
                  href={`/enroll-course?course=${course.id}`}
                >
                  Register Now
                </Link>
                <Link
                  className="relative mt-3 block text-xs font-medium text-red-200 transition-colors hover:text-white"
                  href="/contact-us"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#F9FAFB] py-20">
        <div className="container relative mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-800 to-red-900 px-8 py-14 shadow-xl md:px-14 md:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5"></div>
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5"></div>
            </div>
            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  Register for {course.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-red-100">
                  Start your journey today. Secure your spot in our upcoming sessions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:bg-red-50"
                  href={`/enroll-course?course=${course.id}`}
                >
                  Register Now
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
          </div>
        </div>
      </section>
    </main>
  );
}
