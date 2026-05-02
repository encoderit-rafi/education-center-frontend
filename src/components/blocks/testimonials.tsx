"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const testimonials = [
  {
    name: "Elena Rodriguez",
    date: "a month ago",
    quote: "TEPTH transformed my approach to the TOEFL. Their editorial insights into the reading section were a game changer for my score.",
    color: "bg-blue-600",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    date: "2 months ago",
    quote: "Finally a service that treats you like a person, not a number. The personalized feedback sessions gave me the confidence I needed to succeed.",
    color: "bg-red-600",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    date: "3 months ago",
    quote: "Professional, punctual, and premium. TEPTH is the gold standard for testing services. Highly recommended for any international applicant.",
    color: "bg-amber-600",
    rating: 5,
  },
  {
    name: "Abdullah Al Noman",
    date: "a month ago",
    quote: "I lots of thanks bhai. Specially i got to know about my friend 'a' and 'and'. This is absolutely a life hack! I really appreciate your efforts.",
    color: "bg-purple-600",
    rating: 5,
  },
  {
    name: "Prear Hasnan",
    date: "5 months ago",
    quote: "In my belief, One day I will be able to Fly For my dream insha'Allah. In my hardest and depressed time you were the excellent motivation.",
    color: "bg-orange-600",
    rating: 5,
  },
  {
    name: "Arefin Ahmed",
    date: "2 months ago",
    quote: "This place is more beautiful from my side, i trully appreciated with the place. Whenever you go to any tourists spot, you will know every specific.",
    color: "bg-teal-500",
    rating: 5,
  },
  {
    name: "All About Saudi Arab",
    date: "2 months ago",
    quote: "Rashed bin Ibrahim is a highly inspiring, knowledgeable, and dedicated IELTS online instructor whose teaching style is clear, structured.",
    color: "bg-orange-500",
    rating: 5,
  },
  {
    name: "Shomik Explores",
    date: "10 months ago",
    quote: "If you're planning to take the IELTS exam and looking for a supportive environment where everything is explained in your native language.",
    color: "bg-indigo-500",
    rating: 5,
  },
];

function TestimonialCard({ t, isMarquee = false }: { t: (typeof testimonials)[0], isMarquee?: boolean }) {
  return (
    <div className={cn(
      "bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col gap-6 transition-all duration-300",
      isMarquee ? "w-[350px] sm:w-[450px] shrink-0" : "w-full mx-auto max-w-[500px]"
    )}>
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-amber-400 text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <GoogleLogo />
      </div>

      <p className="text-gray-800 text-lg font-bold leading-relaxed line-clamp-4">
        "{t.quote}"
      </p>

      <div className="flex items-center gap-4 mt-2">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${t.color}`}
        >
          {t.name.charAt(0)}
        </div>
        <div className="text-left">
          <div className="font-bold text-gray-900 text-lg">{t.name}</div>
          <div className="text-sm text-gray-400 font-medium">{t.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play for mobile carousel
  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <section className="py-32 bg-[#F8F9FA] overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
          Trusted by Tomorrow's Leaders
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          See what our global community has to say about their journey with
          TEPTH.
        </p>
      </div>

      {/* Desktop Version: Two-Row Marquee */}
      <div className="hidden lg:flex flex-col gap-12">
        <div className="flex overflow-hidden group py-4">
          <div className="flex gap-8 animate-marquee pause-group-hover">
            {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
              <TestimonialCard key={i} t={t} isMarquee />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden group py-4">
          <div className="flex gap-8 animate-marquee-reverse pause-group-hover">
            {[...secondRow, ...secondRow, ...secondRow].map((t, i) => (
              <TestimonialCard key={i} t={t} isMarquee />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version: Carousel */}
      <div className="lg:hidden px-6 relative max-w-2xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="basis-full py-4">
                <TestimonialCard t={t} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-white border-none shadow-xl hover:bg-gray-50 transition-all text-gray-400" />

            <div className="flex items-center gap-3">
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    current === i
                      ? "w-10 bg-[#AD1010]"
                      : "w-2.5 bg-gray-200"
                  )}
                />
              ))}
            </div>

            <CarouselNext className="static translate-y-0 h-14 w-14 bg-white border-none shadow-xl hover:bg-gray-50 transition-all text-gray-400" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
