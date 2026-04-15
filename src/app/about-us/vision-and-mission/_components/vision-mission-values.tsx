import { cn } from "@/lib/utils";

const CORE_VALUES = [
  { title: "Integrity", desc: "Absolute transparency in evaluation and proctoring services.", icon: "verified" },
  { title: "Excellence", desc: "追求卓越 in academic preparation and student support.", icon: "grade" },
  { title: "Innovation", desc: "Leading the transition to digital-first assessment environments.", icon: "lightbulb" },
  { title: "Inclusion", desc: "Ensuring global certifications are accessible to all regional talent.", icon: "groups" }
];

export function VisionMissionValues() {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">Academic Pillars</span>
          <h2 className="text-4xl font-headline font-black text-secondary tracking-tight">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {CORE_VALUES.map((val) => (
            <div key={val.title} className="p-10 rounded-[2.5rem] bg-surface-container-low border border-outline/5 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group text-center">
              <div className="w-16 h-16 rounded-3xl bg-primary/5 text-primary mx-auto mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-3xl">{val.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-black text-secondary mb-4 group-hover:text-primary transition-colors">{val.title}</h3>
              <p className="text-sm text-on-surface-variant/60 leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
