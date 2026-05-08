import FreeConsultationForm from "@/app/free-consultation/_components/free-consultation-form";

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen ">
      {/* ── Form Section ── */}
      <section id="booking-form" className="px-4 md:px-8 pb-32 max-w-screen-2xl mx-auto">
        <div className="w-full">
          <div className="py-12 md:py-20">
            <div className="text-center mb-16 space-y-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                Reservation
              </span>
              <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">
                Confirm Your Session
              </h2>
            </div>
            <FreeConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
