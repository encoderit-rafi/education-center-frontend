"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/lib/courses-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function CourseDetails() {
  const params = useParams();
  const id = params?.id as string;
  const course = COURSES.find((c) => c.id === id);

  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    notFound();
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "methodology", label: "Methodology" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* ── Detail Hero ── */}
      <section className="relative w-full h-[75vh] min-h-150 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-us/vision-hero.png"
            alt="Modern academic library architecture"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
          <div className="max-w-4xl space-y-8">
            <h1
              className={cn(
                "text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9]",
                "font-heading",
              )}
            >
              Architecture of <br />
              <span className="italic text-[#A11D1D]">Assessment.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
              TEPTH stands at the intersection of academic tradition and digital
              innovation, crafting pathways for global English proficiency since
              our inception.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── Content Column ── */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-xl text-secondary/80 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-10">
                  {course.description}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-normal">
                  {course.extendedDescription}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-normal">
                  {course.extendedDescription}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-normal">
                  {course.extendedDescription}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-normal">
                  {course.extendedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline/5 hover:border-primary/20 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">target</span>
                  </div>
                  <h4 className="text-xl font-headline font-extrabold text-secondary mb-4 tracking-tight">
                    Learning Objectives
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                      <span className="text-primary font-bold">01.</span> Master
                      formal academic tone and register.
                    </li>
                    <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                      <span className="text-primary font-bold">02.</span> Apply
                      analytical frameworks to complex texts.
                    </li>
                    <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                      <span className="text-primary font-bold">03.</span>{" "}
                      Construct logically tight argumentative structures.
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline/5 hover:border-primary/20 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <h4 className="text-xl font-headline font-extrabold text-secondary mb-4 tracking-tight">
                    Certification
                  </h4>
                  <p className="text-on-surface-variant/80 text-sm font-medium leading-relaxed">
                    Upon successful completion, students receive a TEPTH Gold
                    Standard Certification, recognized by 40+ leading regional
                    institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar Column ── */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              {/* Enrollment Card */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-secondary/5 border border-outline/10 p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-primary/10 text-8xl select-none translate-x-8 -translate-y-8">
                    payments
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col mb-8">
                    <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] mb-2">
                      Investment
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-primary font-headline">
                        {course.investment}
                      </span>
                      <span className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">
                        USD
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">
                          schedule
                        </span>
                        Duration
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">
                          analytics
                        </span>
                        Level
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">
                          laptop_mac
                        </span>
                        Format
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">
                        {course.format}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/enroll-course"
                    className={buttonVariants({
                      variant: "default",
                      size: "lg",
                      className:
                        "font-headline font-extrabold! h-12 text-sm rounded-xl w-full",
                    })}
                  >
                    Enroll in this Course
                  </Link>
                  <p className="text-center text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mt-6">
                    Next Intakes: Monday & Wednesday Morning
                  </p>
                </div>
              </div>

              {/* Instructor Card */}
              {/* <div className="bg-surface-container-low rounded-[2.5rem] p-10 border border-outline/5">
                <h4 className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] mb-8">
                  Lead Instructor
                </h4>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-headline font-extrabold text-secondary leading-tight">
                      {course.instructor.name}
                    </h5>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-1">
                      {course.instructor.role}
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-normal">
                  {course.instructor.bio}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
