import FreeConsultationForm from "@/app/free-consultation/_components/free-consultation-form";
import BaseHeroSection from "@/components/base-hero-section";

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen ">
      {/* ── Form Section ── */}
      <BaseHeroSection image="/images/free-consultation.jpg">
        <div className="flex flex-col gap-y-6 flex-1 px-12">
          <h1 className="text-4xl md:text-7xl font-headline font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Confirm Your <br />
            <span className="text-primary italic relative">
              Free
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-50" />
            </span>{" "}
            Session
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Book a free consultation with our experts to discuss your needs and
            concerns.
          </p>
        </div>
      </BaseHeroSection>
      <section className="max-w-3xl mx-auto base-px base-py">
        <FreeConsultationForm />
      </section>
    </div>
  );
}
