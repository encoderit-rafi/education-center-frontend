"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FreeConsultation() {
  return (
    <section className="bg-black py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          {/* Left Side: High-Impact Typography */}
          <div className="w-full md:w-1/2 space-y-12 md:space-y-16 text-left">
            <div className="space-y-2">
              <h2 className="text-white text-6xl sm:text-7xl md:text-[7rem] font-[900] leading-[0.85] tracking-tighter uppercase font-headline">
                THE BEST <br />
                <span className="text-[#C51B29]">STUDY ABROAD</span> <br />
                SERVICES
              </h2>
            </div>

            <div className="pt-4">
              <Link href="/free-consultation">
                <Button
                  className="bg-[#C51B29] hover:bg-[#A31621] text-white px-10 h-16 md:h-20 text-base md:text-lg font-black tracking-widest uppercase rounded-none flex items-center gap-4 group transition-all shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] active:shadow-none active:translate-x-1 active:translate-y-1 border border-white/10"
                >
                  BOOK FREE CONSULTATION
                  <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Plane Window View GIF */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full aspect-[4/3] max-w-[700px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[16px] md:border-[24px] border-[#1a1a1a] shadow-2xl scale-105 md:scale-110">
              <Image
                src="https://i.pinimg.com/originals/64/b1/05/64b105fcb696569c17d0fc5db2b86235.gif"
                alt="Plane window view - Study Abroad"
                fill
                className="object-cover"
                unoptimized
                priority
              />
              {/* Vignette effect for depth */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
