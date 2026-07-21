"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardImportantInfo,
  BaseCardTitle,
} from "./cards/base-card";
import { buttonVariants } from "../ui/button";

const COURSE_IMAGES = [
  "/images/hero/image-3.jpg",
  "/images/hero/image-6.png",
  "/images/hero/image-7.png",
];

const COURSE_HREFS = [
  "/exam-preparation-courses/group",
  "/exam-preparation-courses/semi-private",
  "/exam-preparation-courses/1-to-1-in-class",
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
  const t = useTranslations("ExamPrepCourses");

  const courses = t.raw("courses") as {
    title: string;
    students: string;
    description: string;
    discount: string;
  }[];

  return (
    <section className="bg-white base-px base-py">
      <div className="section-container">
        <div className="mb-8">
          <p className="section-label">{t("sectionLabel")}</p>
          <h3 className="section-title">
            {t("sectionTitle")} <span>{t("sectionTitleAccent")}</span>
          </h3>
        </div>
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {t("availableFor")}
          </span>
          {EXAMS.map((exam) => (
            <Badge key={exam} variant="destructive">
              {exam}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Link
              key={i}
              href={"/exam-preparation-courses"}
            >
              <BaseCard className="h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={COURSE_IMAGES[i]}
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
                {t("discountLabel")}
              </span>
              {t("discountText")}{" "}
              <span className="font-black text-primary italic">
                {t("discountHighlight")}
              </span>{" "}
              <span className="text-slate-500">{t("discountNote")}</span>
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
            {t("viewAllCourses")}
            <ArrowRight className="size-5 ms-2 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
