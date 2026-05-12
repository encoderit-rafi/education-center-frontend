"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function WhyChooseUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="WHY CHOOSE US"
            title={
              <>
                Invest Less & Gain More <span className="text-primary">From TEPTH.</span>
              </>
            }
            description="Preparing for college or university is more like riding an emotional rollercoaster; therefore, TEPTH keeps on looking for apt ways to make students feel confident, psychologically in control and well-prepared for the challenges ahead."
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-8.jpg"
                alt="Student Confidence"
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
            <SectionHeader
              badge="OUR PROMISE"
              title={
                <>
                  Your Success is <span className="text-primary">Ours.</span>
                </>
              }
              className="space-y-4"
            />

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed font-medium">
              <p className="section-description text-primary">
                The Exam Preparation & Testing House L.L.C understands just how perplexing the endeavor can be to gain admission in your top-choice college. For this reason, we have crafted ingenious study plans to enhance your skills and score exceptionally well in any test you opt for. We believe that ‘Your Success Is Ours’ so we work earnestly towards the achievement of your educational goals.
              </p>
              <p className="section-description">
                We bring into play the right tools and strategies for focused learning and outstanding results for build your career. With us, you will be able to improve your weak areas. Our expert professionals’ feedback will help you to reinforce your strong points and it will prove useful in steering your abilities and energies in the right direction.
              </p>
            </div>

            {/* Feature Block */}
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10 md:p-14 shadow-sm group hover:bg-primary transition-colors duration-500">
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-black group-hover:text-white">
                <span className="text-primary group-hover:text-white transition-colors">TEPTH</span> works on adaptive approach and offers flexible and convenient prep options that will move with you and will fit in your hectic schedule. We analyze student’s performance and advise a custom-learning plan to ensure good results. Our proven test-taking strategies, e-learning solutions, and instructions from proficient coaches will sweep away any doubts of success. You will be confident on the test day for optimal performance.
              </p>
            </div>
          </div>

          {/* Right Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-6.jpg"
                alt="Proven Success"
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
