"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisionAndMission() {
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
                OUR VISION & MISSION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              Shaping the <br />
              <span className="text-primary">Future of Education</span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              TEPTH envisions becoming a top-notch global leader in exam counseling and service provision, empowering students with the tools to excel and contribute to society.
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
                src="/images/vision-mission-hero.png"
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
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                OUR PHILOSOPHY
              </span>
            </div>

            {/* Sub Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                Dream, Prepare, <br />
                and <span className="text-primary">Excel.</span>
              </h2>
            </div>

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed">
              <p className="text-primary">
                The Exam Preparation and Testing House envisions to be a top-notch exam counselling and service provider across the globe. The enterprise was founded with the dream to offer students latest techniques and tools for exam preparation so that they can excel in their respective fields and contribute positively to the well-being of a society.
              </p>
              <p className="text-slate-600">
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
                  <div key={idx} className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">{value.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/vision-mission-impact.png"
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
