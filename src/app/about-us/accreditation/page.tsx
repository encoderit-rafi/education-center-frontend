"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Accreditation() {
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
                ACCREDITATION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              Licensed & <br />
              <span className="text-primary">Regulated Excellence</span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
              The Exam Preparation & Testing House L.L.C is officially licensed and regulated by leading educational authorities, ensuring institutional integrity.
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
                alt="Accreditation Hero"
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
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                GOVERNING BODIES
              </span>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-10">
              {/* SEDD */}
              <div className="group space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase">Government of Sharjah</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">Economic Development Department (SEDD)</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Licensed by Sharjah Economic Development Department (SEDD). Sharjah is firmly established as a premier educational hub in the UAE, known for top-tier institutions and high-quality educational centres.
                </p>
                <div className="relative w-64 h-24 bg-slate-50 rounded-xl p-4 border border-slate-100 transition-all group-hover:border-primary/20">
                  <Image
                    src="/images/about-us/government-of-sharjah.png"
                    alt="SEDD Logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* SPEA */}
              <div className="group space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase">Sharjah Private Education</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">Official Regulatory Body (SPEA)</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Regulated by Sharjah Private Education Authority (SPEA), the official body responsible for overseeing private education, established by Emiri Decree No. 45 of 2018.
                </p>
                <div className="relative w-64 h-24 bg-slate-50 rounded-xl p-4 border border-slate-100 transition-all group-hover:border-primary/20">
                  <Image
                    src="/images/about-us/sharjah-private.png"
                    alt="SPEA Logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Reusing collaboration image */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/who-we-are-collaboration.png"
                alt="Institutional Quality"
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
