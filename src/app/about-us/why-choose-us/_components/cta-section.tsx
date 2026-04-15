import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-6 mx-auto sm:px-12 lg:px-24 mb-32">
      <div className="relative overflow-hidden bg-[#A11D1D] rounded-3xl p-16 md:p-24 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-white/5"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight tracking-tight">
            Ready to secure <br className="hidden md:block" />
            your future?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
            Join thousands of successful candidates who chose TEPTH as their partner in academic and professional advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="bg-[#101827] hover:bg-[#A11D1D] text-white px-10 py-7 rounded-lg font-bold text-xl h-auto">
              Book Your Exam Today
            </Button>
            <Button variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-10 py-7 rounded-lg font-bold text-xl h-auto backdrop-blur-md">
              View All Prep Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
