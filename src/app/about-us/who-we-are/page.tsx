"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

export default function WhoWeAre() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="ABOUT TEPTH"
            title={
              <>
                UAE&apos;s Trusted Exam Testing
                <span className="text-primary"> & Preparation House</span>
              </>
            }
            description="For over a decade, TEPTH has been the go-to destination for international language exam registration, expert preparation courses, and secure proctoring services across the UAE."
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/who-we-are.jpg"
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
          {/* Left Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/who-we-are-2.jpg"
                alt="Students Collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-12">
            <SectionHeader
              badge="WHO WE ARE"
              title={
                <>
                  Education is not preparation
                  <span className="text-primary"> for life; education is life itself.</span>
                </>
              }
              description={<p className="italic text-sm font-bold">— John Dewey</p>}
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="text-primary">
                TEPTH derives its objective from John Dewey’s quote, “Education is not preparation for life; education is life itself.” Being an experienced enterprise in the areas of education and exam preparation courses, TEPTH strives to offer students high quality services. We have been in the education industry for years now, catering to the contemporary competent educational requirements across the Arab World. TEPTH is a visionary organization that values students as the guardians of a successful society. We believe in offering you professional career services so that you can turn your dreams into reality.
              </p>
              <p>
                Preparing for an international exam could get tricky at times, TEPTH has trained professionals who are well-equipped with the latest knowledge and techniques for the preparation of GMAT, GRE, SAT and TOEFL courses. With their expertise and dedication, you are likely to pass these tests with flying colors. TEPTH offers you proficient services at the best price.
              </p>
              <p>
                TEPTH envisions to be a leader in exam preparation and testing, as we look forward to set a benchmark by our unrivaled services. We have set long term goals that will benefit both the education system and the society. With innovative IT support and learning procedures, TEPTH has made it quite expedient for the students to pass online exams. Our latest learning techniques allow you to score more with less effort. Whether you are preparing for IELTS, CELPIP G, CAEL, PTE, TOEFL iBT and OET, TEPTH is your one pit stop for all your exam preparation needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
