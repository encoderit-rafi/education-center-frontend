"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function Accreditation() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="ACCREDITATION"
            title={
              <>
                Licensed & <span className="text-primary">Regulated Excellence</span>
              </>
            }
            description="The Exam Preparation & Testing House L.L.C is officially licensed and regulated by leading educational authorities, ensuring institutional integrity."
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-9.jpg"
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
      <section className="py-16 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          {/* Left Narrative */}
          <div className="flex-1 space-y-12">
            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* SEDD */}
              <div className="flex flex-col md:flex-row items-center gap-10 group">
                <div className="flex-1 space-y-6 order-2 md:order-1">
                  <p className="text-base leading-relaxed font-medium">
                    The Exam Preparation & Testing House L.L.C is licensed by Sharjah Economic Development Department (SEDD). Sharjah is firmly established as a premier educational hub in the UAE, known for top-tier institutions and high-quality educational centres. Driven by government support, the emirate offers extensive academic facilities and significant investment in the education sector.
                  </p>
                </div>
                <div className="w-full md:flex-1 order-1 md:order-2">
                  <div className="relative w-full aspect-[2/1] overflow-hidden transition-all">
                    <Image
                      src="/images/about-us/goverment.png"
                      alt="SEDD Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* SPEA */}
              <div className="flex flex-col md:flex-row items-center gap-10 group">
                <div className="w-full md:flex-1 order-1">
                  <div className="relative w-full aspect-[2/1] overflow-hidden transition-all">
                    <Image
                      src="/images/about-us/private.png"
                      alt="SPEA Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6 order-2">
                  <p className="text-base leading-relaxed font-medium">
                    The Exam Preparation & Testing House L.L.C is regulated by Sharjah Private Education Authority (SPEA). SPEA is the official body responsible for overseeing and regulating private education in the Emirate of Sharjah. SPEA was established by Emiri Decree No. 45 of 2018 issued by H.H. Sheikh Dr. Sultan Bin Mohammed Al Qasimi, Ruler of Sharjah with core responsibilities including Licensing private schools and educational centre and monitoring quality through inspection and performance ratings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
