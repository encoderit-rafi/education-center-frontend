"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BaseCard, BaseCardDescription, BaseCardIcon, BaseCardTitle } from "@/components/blocks/cards/base-card";

export default function VisionAndMission() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Section Badge */}
            <span className="section-label">
              OUR VISION & MISSION
            </span>


            {/* Main Heading */}
            <h2 className="section-title">
              Shaping the <br />
              <span className="text-primary">Future of Education</span>
            </h2>

            {/* Description */}
            <p className="section-description">
              TEPTH envisions becoming a top-notch global leader in exam counseling and service provision, empowering students with the tools to excel and contribute to society.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/business-meeting-office.jpg"
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
          {/* Left Narrative */}
          <div className="space-y-12">
            {/* Section Badge */}
            <span className="section-label">
              OUR PHILOSOPHY
            </span>
            {/* Sub Heading */}
            <div className="space-y-4">
              <h2 className="section-title">
                Dream, Prepare, <br />
                and <span className="text-primary">Excel.</span>
              </h2>
            </div>

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="section-description text-primary">
                The Exam Preparation and Testing House envisions to be a top-notch exam counselling and service provider across the globe. The enterprise was founded with the dream to offer students latest techniques and tools for exam preparation so that they can excel in their respective fields and contribute positively to the well-being of a society.
              </p>
              <p className="section-description">
                The inspirational philosophy behind TEPTH is to offer full-fledged testing and exam preparation services to students in United Arab Emirates and the Arab World. We are a team of enthusiasts who strive hard to facilitate students in every possible way for exam testing.
              </p>
            </div>

            {/* Core Values List */}
            <div className="space-y-6">
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

          {/* Right Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/dream.png"
                alt="Education Impact"
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
