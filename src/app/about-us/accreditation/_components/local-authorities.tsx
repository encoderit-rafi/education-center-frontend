import { cn } from "@/lib/utils";

export function LocalAuthorities() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Dubai Silicon Oasis Authority (DSOA) */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-[#111827] font-heading tracking-tight">
                DUBAI SILICON OASIS AUTHORITY (DSOA)
              </h2>
              {/* Logo Placeholder - Modern Abstract Version */}
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00A3E0]" />
                  <div className="w-8 h-8 rounded-full bg-[#00578A]" />
                  <div className="w-8 h-8 rounded-full bg-[#001D32]" />
                </div>
                <div className="h-px w-24 bg-gray-200" />
                <div className="text-xl font-bold tracking-tighter text-gray-400">DSOA</div>
              </div>
              <div className="text-right text-sm font-bold text-[#111827] italic">
                سلطة واحة دبي للسيليكون <br />
                Dubai Silicon Oasis Authority
              </div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                TEPTH is licensed by Dubai Silicon Oasis Authority (DSOA), the regulatory body for Dubai Silicon Oasis (DSO), a 100% government owned Free Zone Technology Park that was established with the mission to promote modern technology based industries; thus supporting the region&apos;s demand for business expansion.
              </p>
              <p>
                A full package of incentives and benefits are provided to companies operating within the free zone. Dubai Silicon Oasis is designed as a hi-tech ecosystem which offers businesses a plethora of advantages including a state-of-the-art infrastructure, in-house business services and strong business support such as technology investment incentives for large enterprises, entrepreneurial support, an incubation center and venture capital funding.
              </p>
              <p className="font-bold text-[#A11D1D]">
                We are proud at TEPTH to be accredited with this high tech ecosystem.
              </p>
            </div>
          </div>

          {/* Knowledge & Human Development Authority (KHDA) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#A11D1D] font-heading leading-tight tracking-tight">
                KNOWLEDGE & HUMAN <br />
                DEVELOPMENT AUTHORITY (KHDA)
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                TEPTH is accredited by the KHDA. The Knowledge and Human Development Authority was established in 2006 with the aim to develop the education and human resource sector in Dubai.
              </p>
              <p>
                The KHDA has set high standards of quality of education and it ensures that they are met in the Dubai region. The KHDA supports schools, universities, students, parents, investors and educators to give birth to a high quality education sector that is highly focused on wellbeing and happiness.
              </p>
              <p>
                We feel honored to be accredited by KHDA and this only makes us even more credible and trustworthy.
              </p>
            </div>
            
            {/* Accreditation Badge for KHDA */}
            <div className="pt-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#A11D1D]/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#A11D1D]/10 flex items-center justify-center">
                  <div className="text-[#A11D1D] font-black text-xl italic font-heading">KHDA</div>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Official Accreditation</div>
                <div className="text-lg font-bold text-[#111827]">Academic Quality Excellence</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
