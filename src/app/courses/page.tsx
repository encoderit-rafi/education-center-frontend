"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { COURSES } from "@/lib/courses-data";
import Image from "next/image";

export default function Courses() {
  return (
    <main className="min-h-screen ">
      {/* ── Hero Section ── */}
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

      {/* ── Course Grid ── */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Our Curriculum
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary tracking-tight">
            Academic & Professional Pathways
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-outline/5"
            >
              <div className="relative overflow-hidden">
                <img
                  className="aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                  src={course.image}
                  alt={course.title}
                />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-lg">
                  {course.category}
                </span>
              </div>

              <div className="p-2 flex-1 flex flex-col">
                <h3 className="text-2xl font-headline font-extrabold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8 font-medium">
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.id}`}
                  className="mt-2 w-full py-4 text-center text-secondary font-headline font-extrabold text-sm border-2 border-outline/20 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 uppercase tracking-widest"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Expert Guidance Banner ── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-primary-container rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border border-primary/10 shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

          <div className="relative z-10 flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary mb-6 tracking-tight leading-tight">
              Need expert <br className="hidden lg:block" /> guidance?
            </h2>
            <p className="text-on-surface-variant/80 text-lg mb-10 leading-relaxed max-w-xl font-medium">
              Our academic advisors are ready to help you choose the right path
              for your specific goals. Step into our atelier for a personalized
              consultation session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/free-consultation"
                className="px-8 py-4 bg-primary text-white font-headline font-extrabold rounded-2xl hover:bg-secondary transition-all shadow-lg text-sm uppercase tracking-widest"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img
              className="w-80 h-[450px] object-cover rounded-[2rem] shadow-2xl relative transition-transform duration-700 group-hover:scale-105"
              src="/images/about-us/experience-student.png"
              alt="TEPTH Academic Advisor"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
