import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function WhyChooseUsHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/vision-hero.png"
          alt="Modern academic environment"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
        <div className="max-w-4xl space-y-6">
          <Badge 
            variant="default" 
            className="bg-[#A11D1D] hover:bg-[#8A1818] text-white border-none py-1.5 px-4 text-[10px] font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 w-fit"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Premium Quality
          </Badge>

          <h1 className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1]",
            "font-heading"
          )}>
            The Standard of <br />
            <span className="italic text-[#A11D1D]">Global Education.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10">
            TEPTH bridges the gap between academic potential and professional reality through world-class testing infrastructure and expert-led pedagogical support.
          </p>
        </div>
      </div>
    </section>
  );
}
