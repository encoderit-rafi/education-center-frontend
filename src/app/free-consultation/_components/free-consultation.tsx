import Link from "next/link";
import { Calendar, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FreeConsultation() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto px-6 py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Start Today
            </p>
            <h2 className="text-4xl font-headline font-black text-white lg:text-5xl uppercase tracking-tight leading-[1.1]">
              Ready to start <br className="hidden lg:block" />
              your journey?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-lg">
              Our academic counselors are available to guide you through the selection and booking process.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-2xl shadow-black/10 transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              <Calendar className="h-5 w-5" />
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Features list */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10 lg:justify-start">
          {[
            "Expert academic guidance",
            "Personalized course selection",
            "No commitment required",
            "Quick response time",
          ].map((feature, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium text-white/70"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <Check className="h-3 w-3 text-white" />
              </span>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
