"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Section Badge */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                ABOUT TEPTH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              UAE's Trusted Exam <br />
              <span className="text-primary">Testing & Preparation</span> House
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              For over a decade, TEPTH has been the go-to destination for
              international language exam registration, expert preparation courses,
              and secure proctoring services across the UAE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/book-exams">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2">
                  Book an Exam <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2" variant="destructive">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/who-we-are-hero-2.png"
                alt="TEPTH Lecture Hall"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Narrative */}
          <div className="space-y-12">
            {/* Section Badge */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                WHO WE ARE
              </span>
            </div>

            {/* Sub Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                Education is not preparation for <br />
                life; education is <span className="text-primary">life itself.</span>
              </h2>
              <p className="italic text-sm font-bold">— John Dewey</p>
            </div>

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="text-primary">
                TEPTH derives its objective from John Dewey's quote. Being an experienced enterprise in the areas of education and exam preparation courses, TEPTH strives to offer students high quality services. We have been in the education industry for years now, catering to the contemporary competent educational requirements across the Arab World. TEPTH is a visionary organization that values students as the guardians of a successful society. We believe in offering you professional career services so that you can turn your dreams into reality.
              </p>
              <p className="text-slate-600">
                Preparing for an international exam could get tricky at times. TEPTH has trained professionals who are well-equipped with the latest knowledge and techniques for the preparation of IELTS, TOEFL, PTE, CELPIP, CAEL, and Skills for English (SELT) courses. With their expertise and dedication, you are likely to pass these tests with flying colours — at the best price.
              </p>
              <p className="text-slate-600">
                TEPTH envisions to be a leader in exam preparation and testing, as we look forward to set a benchmark by our unrivaled services. We have set long term goals that will benefit both the education system and the society. With innovative IT support and learning procedures, TEPTH has made it quite expedient for the students to pass online exams. Our latest learning techniques allow you to score more with less effort. Whether you are preparing for IELTS, CELPIP G, CAEL, PTE, TOEFL iBT and OET, TEPTH is your one pit stop for all your exam preparation needs.
              </p>
            </div>
          </div>

          {/* Right Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/who-we-are-collaboration.png"
                alt="Students Collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
