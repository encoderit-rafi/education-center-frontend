import MockTestBookingForm from "@/app/paid-mock-test/_components/mock-test-booking-form";

export default function PaidMockTestPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* ── Hero Section ── */}
      <section className="relative px-8 py-20 lg:py-24 overflow-hidden border-b border-outline/5 bg-secondary/[0.02]">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Academic Simulation
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter leading-none">
            Paid Mock <br />
            <span className="text-primary italic">Examinations</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Secure your future with professional mock exams designed to simulate
            real test conditions and provide comprehensive performance analysis.
          </p>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-full opacity-5 blur-3xl bg-secondary/20 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      <section className="px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <MockTestBookingForm />
        </div>
      </section>
    </div>
  );
}
