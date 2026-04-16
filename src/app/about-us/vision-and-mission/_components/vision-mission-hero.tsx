import Image from "next/image";
import { cn } from "@/lib/utils";

export function VisionMissionHero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/mission-student.png"
          alt="Students in a modern academic environment"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24 text-left">
        <div className="max-w-4xl space-y-8">
          <h1 className={cn(
            "text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9]",
            "font-heading"
          )}>
            Our Vision & <br />
            <span className="italic text-[#A11D1D]">Mission.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
            Defining the standard of academic excellence and professional integrity in global certifications, empowering institutions and candidates alike.
          </p>
        </div>
      </div>

    </section>
  );
}
