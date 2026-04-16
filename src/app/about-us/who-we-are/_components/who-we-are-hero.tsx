import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function WhoWeAreHero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/vision-hero.png"
          alt="Modern academic library architecture"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
        <div className="max-w-4xl space-y-8">
          <h1 className={cn(
            "text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9]",
            "font-heading"
          )}>
            Architecture of <br />
            <span className="italic text-[#A11D1D]">Assessment.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
            TEPTH stands at the intersection of academic tradition and digital innovation, crafting pathways for global English proficiency since our inception.
          </p>
        </div>
      </div>

    </section>
  );
}
