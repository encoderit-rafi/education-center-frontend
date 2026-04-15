import { School, ShieldCheck, Monitor, BarChart3, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InfrastructureBento() {
  return (
    <section className="py-32 bg-[#FFF8F7]">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#1F1F1F] font-heading mb-4 leading-tight">
            Unrivaled Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our commitment to excellence is reflected in every touchpoint of your academic journey, from expert instruction to world-class facilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[600px]">
          
          {/* Expert Instructors */}
          <div className="md:col-span-2 lg:col-span-3 bg-white p-10 rounded-2xl flex flex-col justify-between group border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 bg-[#FFF8F8] rounded-xl flex items-center justify-center mb-8">
                <School className="w-8 h-8 text-[#A11D1D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F1F1F] font-heading mb-4">Expert Instructors</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our faculty comprises PhD-level academics and industry veterans who specialize in standardized testing methodologies and cognitive performance.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 text-[#A11D1D] font-bold group-hover:gap-6 transition-all cursor-pointer">
              <span>Meet the Faculty</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Official Partnerships */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#A11D1D] p-10 rounded-2xl relative overflow-hidden text-white shadow-xl flex flex-col justify-center">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Official Partnerships</h3>
              <p className="text-white/90 leading-relaxed text-lg mb-4">
                As an authorized test center for IELTS, TOEFL, and GRE, we provide official environments that reduce exam-day anxiety and ensure full regulatory compliance.
              </p>
            </div>
            {/* Background Accent Icon */}
            <ShieldCheck className="absolute -right-16 -bottom-16 w-64 h-64 text-white/5 rotate-12" />
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#F9F3F2] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-[#A11D1D]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] font-heading mb-3">Modern Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acoustically treated testing rooms, high-fidelity audio equipment, and ergonomic workstations designed for peak focus.
              </p>
            </div>
          </div>

          {/* Proven Outcomes */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl border-t-4 border-[#A11D1D] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#FFF8F8] rounded-lg flex items-center justify-center mb-6 text-[#A11D1D]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] font-heading mb-3">Proven Outcomes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don't just teach for the test; we empower students with life-long academic skills, resulting in consistent top-tier scores.
              </p>
            </div>
          </div>

          {/* Global Reach */}
          <div className="md:col-span-4 lg:col-span-2 bg-[#E7EAED] p-8 rounded-2xl flex items-center gap-6 group hover:bg-[#DEDFE2] transition-colors">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-200">
              <Globe className="w-10 h-10 text-[#A11D1D]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1F1F1F] font-heading leading-tight mb-1">Global Reach</h3>
              <p className="text-sm text-gray-600 leading-tight">
                12 locations across the region, serving over 50,000 candidates annually.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
