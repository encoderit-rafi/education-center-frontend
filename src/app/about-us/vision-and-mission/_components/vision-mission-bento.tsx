import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function VisionMissionBento() {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#1F1F1F] font-heading tracking-tight mb-4 text-left">
            Core Foundations
          </h2>
          <div className="w-16 h-1.5 bg-[#A11D1D]" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Block (Vision & Mission Summary) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#A11D1D] font-heading mb-6 tracking-tight">
                Global Academic Vision
              </h3>
              <p className="text-xl leading-relaxed text-gray-600 mb-12">
                TEPTH envisions being a top-notch exam counselling and service provider across the globe. Founded with a dream to offer students the latest techniques and tools for exam preparation, we strive to facilitate students in United Arab Emirates and the Arab World in every possible way to excel in their respective fields.
              </p>
            </div>
            
            {/* Stats / Pillars */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Integrity</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">Global</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Standard</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#1F1F1F] font-heading">Digital</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A11D1D] font-bold mt-1">Innovation</div>
              </div>
            </div>
          </div>

          {/* Side Content Block */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/about-us/vision-hero.png"
                alt="Architecture of Excellence"
                fill
                className="object-cover"
              />
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold text-white uppercase tracking-wider">
                Excellence Defined
              </div>
            </div>
            
            <div className="bg-[#A11D1D] p-10 rounded-2xl text-white shadow-xl flex flex-col flex-1 justify-center relative overflow-hidden group">
              <ShieldCheck className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold font-heading mb-4">Statement of Mission</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                To provide high-integrity evaluation and preparation services that bridge the gap between regional talent and global opportunity.
              </p>
              {/* Background Accent */}
              <ShieldCheck className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 -rotate-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
