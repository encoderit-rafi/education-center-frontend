import { Quote } from "lucide-react";

export function MissionQuote() {
  return (
    <section className="py-32 bg-[#A11D1D] text-white relative overflow-hidden">
      {/* Decorative Icon Background */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Quote className="w-80 h-80 -rotate-12 translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Quote className="w-16 h-16 text-[#A11D1D] mb-10 fill-[#A11D1D]/20" />

          <blockquote className="text-3xl md:text-5xl font-light italic leading-tight mb-12 tracking-tight">
            "Our mission is not merely to test knowledge, but to validate the aspirations of those who seek to excel in the global academic theater."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#A11D1D]" />
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">
              Board of Academic Excellence, TEPTH
            </div>
            <div className="w-8 h-px bg-[#A11D1D]" />
          </div>
        </div>
      </div>

    </section>
  );
}
