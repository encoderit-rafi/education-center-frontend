"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/lib/courses-data";
import CourseCard from "@/components/blocks/course-card";
import FreeConsultation from "@/app/free-consultation/_components/free-consultation";
import MockTestBookingForm from "@/app/paid-mock-test/_components/mock-test-booking-form";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="size-5 shrink-0 text-[#A11D1D]"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export default function CourseDetails() {
  const params = useParams();
  const id = params?.id as string;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  // If the course has the "sections" structure (like our new TOEFL layout)
  if (course.sections) {
    return (
      <main className="min-h-screen bg-white">
        {/* Header/Hero for detailed landing page */}
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-12 tracking-tight">
            {course.title}
          </h1>

          <div className="space-y-12">
            {course.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.title && (
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                    {section.title}
                  </h2>
                )}

                {section.content && (
                  <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                    {/* Simple formatting for bold text if needed, handling \n */}
                    {section.content}
                  </div>
                )}

                {section.list && section.type !== "links" && (
                  <ul className="space-y-4 pt-2">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="flex gap-4">
                        <CheckIcon />
                        <span className="text-slate-600 text-lg leading-snug font-medium">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === "links" && section.list && (
                  <ul className="space-y-3 pt-4">
                    {section.list.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href || "#"}
                          className="flex items-center gap-3 text-slate-600 hover:text-[#A11D1D] transition-colors group"
                        >
                          <CheckIcon />
                          <span className="text-lg font-bold border-b border-transparent group-hover:border-[#A11D1D]">
                            {link.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === "cards" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    {section.cardIds
                      ? COURSES.filter(c => section.cardIds?.includes(c.id)).map(c => (
                        <CourseCard key={c.id} course={c} />
                      ))
                      : COURSES.filter(c => c.category === course.category && c.id !== course.id).map(c => (
                        <CourseCard key={c.id} course={c} />
                      ))
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <FreeConsultation />
      </main>
    );
  }

  // Layout for variant courses (Classroom/Online) - Refined Mock Test Hero
  return (
    <main className="min-h-screen bg-white">
      {/* ── Mock Test Booking Hero ── */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="bg-slate-50/50 rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-sm">
          <MockTestBookingForm
            initialCourse={course.category.toLowerCase()}
            mode="course"
            initialType={course.format.toLowerCase().includes("online") ? "virtual" : "group"}
          />
        </div>
      </section>

      {/* ── Additional Details Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100">
        <div className="lg:w-7/12">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-[#A11D1D] font-bold leading-relaxed border-l-4 border-[#A11D1D] pl-6 mb-10">
              "{course.description}"
            </p>
            <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap font-medium">
              {course.extendedDescription}
            </div>
          </div>

          {/* Standard Curriculum/Features if any */}
          {course.curriculum && course.curriculum.length > 0 && (
            <div className="mt-16 space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight text-center lg:text-left">
                Course Curriculum
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {course.curriculum.map((module, mIdx) => (
                  <div key={mIdx} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{module.title}</h3>
                    <p className="text-slate-600 leading-snug">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FreeConsultation />
    </main>
  );
}
