import { Button } from "@/components/ui/button";

export function AccreditationCTA() {
  return (
    <section className="py-24 px-6 mx-auto sm:px-12 lg:px-24 mb-32">
      <div className="max-w-6xl mx-auto bg-[#A11D1D] rounded-3xl p-16 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 space-y-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
            Ready to test with a <br />
            <span className="underline decoration-white/30 underline-offset-8">trusted partner?</span>
          </h3>
          <p className="text-xl max-w-2xl mx-auto font-medium text-white/90 leading-relaxed">
            Experience the difference that global accreditation and professional management make in your academic journey.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Button className="bg-[#111827] hover:bg-[#111827]/90 text-white font-bold px-10 py-7 rounded-xl shadow-xl hover:scale-105 transition-all text-xl h-auto">
              Find a Test Venue
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold px-10 py-7 rounded-xl transition-all text-xl h-auto">
              Verify Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
