import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function VisionMissionHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/vision-hero.png"
          alt="Modern academic building interior"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
        <div className="max-w-4xl space-y-6">
          <Badge 
            variant="default" 
            className="bg-[#A11D1D] hover:bg-[#8A1818] text-white border-none py-1 px-4 text-xs font-bold tracking-wider uppercase rounded-sm"
          >
            Our Purpose
          </Badge>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]",
            "font-heading"
          )}>
            Defining the Future <br className="hidden md:block" />
            of Academic Excellence.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            TEPTH stands at the intersection of tradition and innovation, providing the benchmarks for language proficiency worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
