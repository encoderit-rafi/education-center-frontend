"use client";

import { useRef, useState } from "react";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Oxford Graduate Candidate",
      quote: `"TEPTH transformed my approach to the TOEFL. Their editorial insights into the reading section were a game changer for my score."`,
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Marcus Chen",
      role: "LSE Scholarship Winner",
      quote: `"Finally a service that treats you like a person, not a number. The personalized feedback sessions gave me the confidence I needed to succeed."`,
      color: "bg-red-100 text-red-700"
    },
    {
      name: "Sarah Jenkins",
      role: "International MBA Applicant",
      quote: `"Professional, punctual, and premium. TEPTH is the gold standard for testing services. Highly recommended."`,
      color: "bg-amber-100 text-amber-700"
    }
  ];

  const scrollCarousel = (direction: number) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
      const newSlide = Math.max(0, Math.min(testimonials.length - 1, activeSlide + direction));
      setActiveSlide(newSlide);
    }
  };

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollTo({ left: scrollAmount * index, behavior: "smooth" });
      setActiveSlide(index);
    }
  };

  return (
    <section className="py-32 px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-3xl font-headline font-bold text-secondary">
          Trusted by Tomorrow's Leaders
        </h3>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full md:min-w-[calc(33.333%-1.33rem)] snap-center">
              <div className="h-full bg-surface p-10 rounded-3xl shadow-sm relative group hover:-translate-y-2 transition-transform">
                <span className="material-symbols-outlined text-6xl text-gray-100 absolute -top-4 left-6 opacity-50">
                  format_quote
                </span>
                <p className="text-on-surface text-lg italic leading-relaxed mb-8 relative z-10 w-full md:w-auto h-[120px] overflow-hidden overflow-ellipsis md:h-auto">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-secondary">{t.name}</div>
                    <div className="text-xs text-on-surface-variant">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-20 cursor-pointer"
          onClick={() => scrollCarousel(-1)}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-20 cursor-pointer"
          onClick={() => scrollCarousel(1)}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12 md:hidden">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                activeSlide === idx ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => goToSlide(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
