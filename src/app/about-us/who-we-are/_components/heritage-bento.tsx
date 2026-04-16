import Image from "next/image";
import { ShieldAlert } from "lucide-react";

export function HeritageBento() {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#1F1F1F] font-heading tracking-tight mb-4">
            Our Heritage
          </h2>
          <div className="w-16 h-1.5 bg-[#A11D1D]" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Block */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="mb-8 p-6 bg-red-50/50 rounded-xl border-l-4 border-[#A11D1D]">
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  "Education is not preparation for life; education is life itself." 
                  <span className="block mt-2 font-bold text-[#A11D1D] not-italic">— John Dewey</span>
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#A11D1D] font-heading mb-6 tracking-tight">
                A Visionary Foundation
              </h3>
              <p className="text-xl leading-relaxed text-gray-600 mb-12">
                As a visionary organization that values students as the guardians of a successful society, TEPTH caters to contemporary educational requirements across the Arab World. We believe in offering professional career services that turn dreams into reality, bridging the gap between national talent and global opportunity through unrivaled high-quality services.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Years of Trust</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">200k+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Tests Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Global Partners</div>
              </div>
            </div>
          </div>

          {/* Side Content Block */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/about-us/mission-student.png"
                alt="Expert academic proctoring"
                fill
                className="object-cover"
              />
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold text-white uppercase tracking-wider">
                Certified Proctors
              </div>
            </div>
            
            <div className="bg-[#A11D1D] p-10 rounded-2xl text-white shadow-xl flex flex-col flex-1 justify-center relative overflow-hidden group">
              <ShieldAlert className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold font-heading mb-4">Integrity in Action</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                Our commitment to academic integrity is unwavering. We utilize state-of-the-art proctoring technology combined with human expertise to ensure every result is earned fairly.
              </p>
              {/* Background Accent */}
              <ShieldAlert className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 -rotate-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
