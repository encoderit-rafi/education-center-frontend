import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardImportantInfo,
  BaseCardTitle,
} from "./cards/base-card";
import { buttonVariants } from "../ui/button";

const COURSES = [
  {
    title: "Group Course",
    students: "Up to 8 students",
    description:
      "Learn alongside other candidates in a structured classroom environment. Ideal for those who prefer a collaborative study experience.",
    discount:
      "Save 10% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-3.jpg",
    href: "/exam-preparation-courses/group",
  },
  {
    title: "Semi-Private",
    students: "2 students",
    description:
      "Focused sessions with one study partner and a dedicated teacher. Perfect for couples, siblings, or friends preparing together.",
    discount:
      "Save 15% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-6.png",
    href: "/exam-preparation-courses/semi-private",
  },
  {
    title: "1-to-1 In-Class",
    students: "You only",
    description:
      "Fully personalised classroom sessions with a teacher dedicated entirely to your needs, pace, and target score.",
    discount:
      "Save 20% off when you book your exam and register for the course with TEPTH and pay online on our website.",
    image: "/images/hero/image-7.png",
    href: "/exam-preparation-courses/1-to-1-in-class",
  },
  // {
  //   title: "1-to-1 Online",
  //   students: "You only",
  //   description:
  //     "The same personalised 1-to-1 experience, delivered remotely. Study from anywhere with a live teacher via video call.",
  //   discount:
  //     "Save 20% off when you book your exam and register for the course with TEPTH and pay online on our website.",
  //   image: "/images/hero/image-8.png",
  //   href: "/exam-preparation-courses/1-to-1-online",
  // },
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
    <section className="bg-white base-px base-py">
      <div className="section-container">
        <div className="mb-8">
          <p className="section-label">Exam Preparation</p>
          <h3 className="section-title">
            Courses Tailored to <span>Your Goals</span>
          </h3>
        </div>
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Available for:
          </span>
          {EXAMS.map((exam) => (
            <Badge key={exam} variant="destructive">
              {exam}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {COURSES.map((course, i) => (
            <Link
              key={i}
              href={"/exam-preparation-courses"}
              // className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl"
            >
              <BaseCard className="h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col space-y-3 p-4">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <BaseCardTitle>{course.title}</BaseCardTitle>
                    <Badge variant="destructive">{course.students}</Badge>
                  </div>
                  <BaseCardDescription>
                    {course.description}
                  </BaseCardDescription>
                  <BaseCardImportantInfo className="mt-auto">
                    {course.discount}
                  </BaseCardImportantInfo>
                </div>
              </BaseCard>
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
            href="/exam-preparation-courses"
            className={buttonVariants({
              variant: "default",
              className:
                "group shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 uppercase px-5",
            })}
          >
            View All Courses
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
