"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { COURSES } from "@/lib/courses-data";

export default function Courses() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      {/* ── Hero Section ── */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <img
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh_K4LTn32Y9p-TKMoauU8QQAN6AKDJH2OG1fxURk6rhXt3mnZrzUvlJjpHPikuJzgIE0ansb7auUxsahSbj8AftSTLQg-0CCenwTy1Fy5kQM25Q-Ouclzrdgd6xu5LcgZF4h5cB3Kz07lgF0h3JTgt5gKZFrIBQuf3fgKj8aBpgm8dR80z27xLGhro2mK1C6P6kJruiOiH9c8hl-Y8Dlkc_oVpR4VCUz60BGd6OtUnlD9cmZEUIXx7g6ZpmHUFfCKf3ZLSQaPOg"
          alt="TEPTH Academic Environment"
        />
        <div className="relative z-20 px-8 max-w-7xl mx-auto w-full">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-[0.2em] mb-6 border border-white/20">
            Elite Education
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8 font-headline">
            Master Your Future <br />
            <span className="text-white/80">with TEPTH Courses</span>
          </h1>
          <p className="text-white/90 text-xl max-w-xl font-medium leading-relaxed opacity-90">
            Experience a curriculum designed for excellence. Our programs are 
            meticulously structured to ensure global academic and professional success.
          </p>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Curriculum</h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary tracking-tight">
            Academic & Professional Pathways
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-outline/5"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={course.image}
                  alt={course.title}
                />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-lg">
                  {course.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-headline font-extrabold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8 font-medium">
                  {course.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-outline/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold mb-1">Duration</span>
                    <span className="text-sm font-extrabold text-secondary">{course.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold mb-1">Investment</span>
                    <span className="text-xl font-black text-primary font-headline">{course.investment}</span>
                  </div>
                </div>
                
                <Link
                  href={`/courses/${course.id}`}
                  className="mt-8 w-full py-4 text-center text-secondary font-headline font-extrabold text-sm border-2 border-outline/20 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 uppercase tracking-widest"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 bg-secondary text-white font-headline font-extrabold rounded-2xl transition-all hover:bg-primary hover:shadow-2xl active:scale-95 uppercase tracking-widest text-sm">
            Explore All Programs
          </button>
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
                href="/contact-us"
                className="px-8 py-4 bg-primary text-white font-headline font-extrabold rounded-2xl hover:bg-secondary transition-all shadow-lg text-sm uppercase tracking-widest"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/book-a-test"
                className="px-8 py-4 border-2 border-outline/20 text-secondary font-headline font-extrabold rounded-2xl hover:bg-white transition-all text-sm uppercase tracking-widest"
              >
                Compare Programs
              </Link>
            </div>
          </div>
          
          <div className="relative z-10 hidden lg:block group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img
              className="w-80 h-[450px] object-cover rounded-[2rem] shadow-2xl relative transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w"
              alt="TEPTH Academic Advisor"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
