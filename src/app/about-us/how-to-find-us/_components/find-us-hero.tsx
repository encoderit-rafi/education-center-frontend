import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function FindUsHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24 text-center md:text-left">
        <div className="max-w-4xl space-y-6">
          <Badge 
            variant="default" 
            className="bg-[#A11D1D] hover:bg-[#8A1818] text-white border-none py-1.5 px-4 text-[11px] font-bold tracking-widest uppercase rounded-sm"
          >
            Location & Access
          </Badge>
          
          <h1 className={cn(
            "text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]",
            "font-heading"
          )}>
            How to <br />
            <span className="italic text-[#A11D1D]">Find Us.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
            Finding your way to the standard of academic excellence in Dubai Silicon Oasis has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}
