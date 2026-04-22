import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ShieldCheck, Users, CheckCircle2 } from "lucide-react";

export function AccreditationHero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/infrastructure-center.png"
          alt="Modern academic integrity environment"
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Global Excellence
          </Badge>
          
          <h1 className={cn(
            "text-6xl md:text-8xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1]",
            "font-heading"
          )}>
            The Standard of <br />
            <span className="italic text-[#A11D1D]">Academic Integrity.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10">
            TEPTH stands at the forefront of international education assessment. Our accreditations from global leaders ensure that every exam we facilitate meets the highest benchmarks of security, fairness, and reliability.
          </p>
          
          <div className="flex gap-12 pt-8 border-t border-white/20 max-w-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-[#A11D1D]" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-[#A11D1D] font-heading leading-none">15+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Global Partners</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#A11D1D]" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-[#A11D1D] font-heading leading-none">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Compliance Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
