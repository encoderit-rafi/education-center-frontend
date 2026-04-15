import MockTestBookingForm from "@/components/blocks/mock-test-booking-form";

export default function PaidMockTestPage() {
  return (
    <main className="flex-grow max-w-screen-xl mx-auto w-full px-6 py-12 pt-32 pb-24">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary tracking-tight mb-4">
          Book Your Paid Mock Test
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
          Secure your future with professional mock exams designed to simulate real test conditions and provide comprehensive performance analysis.
        </p>
      </header>
      
      <MockTestBookingForm />
    </main>
  );
}
