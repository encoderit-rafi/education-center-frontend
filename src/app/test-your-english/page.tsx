"use client";

import Image from "next/image";
import TestYourEnglishForm from "@/components/blocks/test-your-english-form";
import { cn } from "@/lib/utils";

export default function TestYourEnglishPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      {/* ── Hero Spotlight ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
              Proficiency Benchmark
            </span>
            <h1 className="text-5xl lg:text-7xl font-headline font-black text-secondary tracking-tighter leading-none mb-6">
              Test Your <br />
              <span className="text-primary italic">English Skills</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-xl font-light leading-relaxed mb-10">
              Evaluate your proficiency in minutes and get personalized course recommendations. Our assessment is designed by academic experts to map your current level to global standards.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#assessment-journey"
                className="px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
              >
                Start Assessment
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-black text-secondary/30">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">
                  15k+ Candidates Evaluated
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 bg-surface-container-low border border-outline/5">
              <Image
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Academic assessment environment"
                src="/images/hero-student.png"
                width={600}
                height={750}
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ── Assessment Journey ── */}
      <section id="assessment-journey" className="px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">Your Assessment Journey</h2>
            <div className="w-24 h-1 crimson-gradient mx-auto rounded-full" />
          </div>
          <TestYourEnglishForm />
        </div>
      </section>
    </main>
  );
}
