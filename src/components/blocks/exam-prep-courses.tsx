import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const COURSES = [
  {
    title: "Group Course",
    students: "Up to 8 students",
    description:
      "Learn alongside other candidates in a structured classroom environment. Ideal for those who prefer a collaborative study experience.",
    discount:
      "Save 10% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-3.jpg",
    href: "/courses/group",
  },
  {
    title: "Semi-Private",
    students: "2 students",
    description:
      "Focused sessions with one study partner and a dedicated teacher. Perfect for couples, siblings, or friends preparing together.",
    discount:
      "Save 15% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-6.png",
    href: "/courses/semi-private",
  },
  {
    title: "1-to-1 In-Class",
    students: "You only",
    description:
      "Fully personalised classroom sessions with a teacher dedicated entirely to your needs, pace, and target score.",
    discount:
      "Save 20% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-7.png",
    href: "/courses/1-to-1-in-class",
  },
  {
    title: "1-to-1 Online",
    students: "You only",
    description:
      "The same personalised 1-to-1 experience, delivered remotely. Study from anywhere with a live teacher via video call.",
    discount:
      "Save 20% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-8.png",
    href: "/courses/1-to-1-online",
  },
];

const EXAMS = [
  "IELTS",
  "TOEFL iBT",
  "PTE",
  "CELPIP",
  "CAEL",
  "Skills for English (SELT)",
  "OET",
];

export default function ExamPrepCourses() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] lg:text-xs mb-4">
            Exam Preparation
          </p>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-slate-900 tracking-tight uppercase">
            Courses Tailored to{" "}
            <span className="text-primary italic">Your Goals</span>
          </h3>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Available for:
          </span>
          {EXAMS.map((exam) => (
            <span
              key={exam}
              className="inline-flex items-center rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider"
            >
              {exam}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, i) => (
            <Link
              key={i}
              href={course.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <span className="shrink-0 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">
                    {course.students}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500 mb-6 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-auto rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-[11px] font-medium leading-relaxed text-primary">
                  {course.discount}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-slate-700">
              <span className="font-bold text-slate-900 uppercase tracking-tight mr-2">
                Direct booking discount:
              </span>
              Book any course directly on our website and receive{" "}
              <span className="font-black text-primary italic">
                5% off automatically
              </span>{" "}
              <span className="text-slate-500">— no code needed.</span>
            </p>
          </div>
          <Link
            href="/courses"
            className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 uppercase "
          >
            View All Courses
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
