import Link from "next/link";
import { Calendar, Check } from "lucide-react";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";

export default function FreeConsultation() {
  return (
    <GradientBox>
      <div className="relative mx-auto px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center  lg:text-left">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Start Today
            </p>
            <h2 className="text-4xl font-headline font-black text-white lg:text-5xl uppercase tracking-tight leading-[1.1]">
              Ready to start <br className="hidden lg:block" />
              your journey?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-lg">
              Our academic counselors are available to guide you through the
              selection and booking process.
            </p>
            <Link
              href="/free-consultation"
              className={buttonVariants({
                size: "lg",
                variant: "light",
                className: "mt-6",
              })}
            >
              <Calendar className="h-5 w-5" />
              Get Free Consultation
            </Link>
          </div>

          <div className="flex flex-col!  justify-around gap-4 sm:flex-row w-full sm:w-auto">
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

        {/* Features list */}
        {/* <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10 lg:justify-start">
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
        </div> */}
      </div>
    </GradientBox>
  );
}
