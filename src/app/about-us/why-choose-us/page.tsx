"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Section Badge */}
            <span className="section-label">
              WHY CHOOSE US
            </span>


            {/* Main Heading */}
            <h1 className="section-title">
              Invest Less & <br />
              Gain More <span className="text-primary">From TEPTH.</span>
            </h1>

            {/* Description */}
            <p className="section-description">
              Preparing for college or university is an emotional rollercoaster; TEPTH provides the expert guidance and strategies to make you feel confident and well-prepared.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/why-choose-us.jpg"
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
            <span className="section-label">
              OUR PROMISE
            </span>


            {/* Sub Heading */}
            <div className="space-y-4">
              <h2 className="section-title">
                Your Success <br />
                Is <span className="text-primary">Ours.</span>
              </h2>
            </div>

            {/* Detailed Text */}
            <div className="space-y-8 text-base leading-relaxed font-medium">
              <p className="section-description text-primary">
                The Exam Preparation & Testing House L.L.C understands just how perplexing the endeavor can be to gain admission in your top-choice college. For this reason, we have crafted ingenious study plans to enhance your skills and score exceptionally well.
              </p>
              <p className="section-description">
                We bring into play the right tools and strategies for focused learning and outstanding results. With us, you will be able to improve your weak areas through expert professionals’ feedback, helping you steer your energies in the right direction.
              </p>
            </div>

            {/* Feature Block */}
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10 md:p-14 shadow-sm group hover:bg-primary transition-colors duration-500">
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-black group-hover:text-white">
                <span className="text-primary group-hover:text-white transition-colors">TEPTH</span> works on an adaptive approach, offering flexible and convenient prep options analyzed through performance custom-learning plans to ensure good results.
              </p>
            </div>
          </div>

          {/* Right Visual Collaboration */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/who-we-are-collaboration.png"
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
