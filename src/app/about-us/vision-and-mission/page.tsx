"use client";

import Image from "next/image";
import { BaseCard, BaseCardDescription, BaseCardIcon, BaseCardTitle } from "@/components/blocks/cards/base-card";
import { SectionHeader } from "@/components/ui/section-header";

export default function VisionAndMission() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="OUR VISION & MISSION"
            title={
              <>
                Shaping the Future of<span className="text-primary"> Education</span>
              </>
            }
            description="TEPTH is an organization with high goals and high regards for the students. It is here to help students achieve their academic pursuits and support their professional growth."
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-1.jpg"
                alt="Strategic Vision"
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
                src="/images/about-us/about-us-3.jpg"
                alt="Education Impact"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-8">
            {/* Section Badge */}
            <SectionHeader
              badge="OUR PHILOSOPHY"
              title={
                <>
                  Dream, Prepare, and <span className="text-primary">Excel.</span>
                </>
              }
              className="space-y-4"
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="section-description text-primary">
                The Exam Preparation and Testing House envisions to be a top-notch exam counselling and service provider across the globe. The enterprise was founded with the dream to offer students latest techniques and tools for exam preparation so that they can excel in their respective fields and contribute positively to the well-being of a society. Our team believes in providing commendable services to you.
              </p>
              <p className="section-description">
                The inspirational philosophy behind TEPTH is to offer full-fledged testing and exam preparation services to students in United Arab Emirates and the Arab World. We are a team of enthusiasts who strive hard to facilitate students in every possible way for exam testing.
              </p>

            </div>

            {/* Core Values List */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">Core Values</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: "Simplify Complexity",
                    text: "To simplify the complexities in a test’s procedure that hinder the examinee’s comprehension skills. We employ unique resources and technology to make students understand tough tasks easily."
                  },
                  {
                    title: "Shape the Future",
                    text: "TEPTH is an enterprise that aims to shape a better future. Quality education for youth means a more enlightened and better society."
                  },
                  {
                    title: "Torch Bearer",
                    text: "By aiding students in picking a suitable Exam Preparation Course, TEPTH ought to be the torch bearer of knowledge and skills."
                  }
                ].map((value, idx) => (
                  <BaseCard key={idx} className="flex flex-row items-start gap-6 p-6">
                    <BaseCardIcon className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-100 transition-colors">
                      0{idx + 1}
                    </BaseCardIcon>
                    <div className="space-y-2">
                      <BaseCardTitle className="font-black text-slate-900 uppercase text-sm tracking-widest group-hover:text-slate-900">{value.title}</BaseCardTitle>
                      <BaseCardDescription className="text-slate-500 text-sm leading-relaxed">{value.text}</BaseCardDescription>
                    </div>
                  </BaseCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
