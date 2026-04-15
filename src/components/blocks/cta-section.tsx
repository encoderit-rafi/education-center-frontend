export default function CTASection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto crimson-gradient rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10 space-y-8">
          <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
            Ready to begin your journey?
          </h3>
          <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
            Join over 50,000 students who have achieved their dreams with our
            guidance.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-primary font-headline font-bold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              Get Started Now <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-transparent text-white font-headline font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors shadow-sm cursor-pointer border-solid">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
