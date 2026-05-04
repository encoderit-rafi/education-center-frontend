"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "/images/hero/image-1.jpg",
  "/images/hero/image-2.jpg",
  "/images/hero/image-3.jpg",
  "/images/hero/image-4.jpg",
  "/images/hero/image-5.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[95vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-all duration-[2000ms] ease-in-out",
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100",
            )}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="size-4 text-primary" />
            Excellence in Education
          </div>

          <h1 className="text-5xl md:text-8xl font-headline font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Prep Smarter <br />
            <span className="text-primary italic relative">
              Score
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-50" />
            </span>{" "}
            Higher
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Empowering students with skilled instructors and premium resources
            to achieve their language goals and global recognition.
          </p>

          <div className="max-w-md grid grid-cols-2 gap-3 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link
              href="/book-exams"
              className={buttonVariants({
                size: "lg",
                className: "group py-4",
                // className:
                //   "h-16 px-10 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 text-white transition-all hover:scale-105 active:scale-95 ease-in-out",
              })}
            >
              Book Exam
              <ArrowRight className="max-md:hidden ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/exam-preparation-courses"
              className={buttonVariants({
                variant: "light",
                size: "lg",
                className: "py-4",
                // className:
                //   "h-16 px-10 rounded-2xl font-bold text-lg bg-white text-primary hover:text-primary border-white hover:bg-white transition-all hover:scale-105 active:scale-95 ease-in-out",
              })}
            >
              Our Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              index === currentImageIndex
                ? "w-10 bg-primary"
                : "w-4 bg-white/30 hover:bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
