import { cn } from "@/lib/utils";

export function VisionMissionContent() {
  return (
    <section className="px-8 py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Mission Card */}
        <div className="p-16 rounded-[3rem] bg-surface-container-low border border-outline/5 relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6 block">Our Mission</span>
          <h2 className="text-4xl font-headline font-black text-secondary tracking-tight mb-8">Empowering Futures Through <span className="text-primary italic">Precision</span></h2>
          <p className="text-lg text-on-surface-variant/70 font-light leading-relaxed">
            To provide high-integrity evaluation and preparation services that bridge the gap between regional talent and global opportunity. We commit to the highest standards of proctoring and academic ethical conduct.
          </p>
        </div>

        {/* Vision Card */}
        <div className="p-16 rounded-[3rem] bg-secondary text-white relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 shadow-2xl shadow-secondary/20">
          <div className="absolute left-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -ml-16 -mt-16 opacity-50" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6 block">Our Vision</span>
          <h2 className="text-4xl font-headline font-black text-white tracking-tight mb-8 leading-none">To be the <span className="text-primary">Ecosystem</span> for Life-Long Learning</h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            Becoming the primary regional hub for all international certification requirements, recognized for innovation in digital testing and excellence in academic preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
