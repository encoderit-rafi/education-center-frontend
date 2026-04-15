import { cn } from "@/lib/utils";

export function VisionMissionHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-6">
        <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
          Foundational Ethics
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter leading-none">
          Our Vision & <br />
          <span className="text-primary italic">Statement of Mission</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Defining the standard of academic excellence and professional integrity in global certifications.
        </p>
      </div>
      <div className="absolute left-1/2 top-0 h-full w-full opacity-5 blur-3xl bg-primary/20 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
