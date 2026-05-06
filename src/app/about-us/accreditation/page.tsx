import Image from "next/image";

export default function Accreditation() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-[#A11D1D] tracking-tight mb-2">
                Accreditation
              </h1>
              <div className="h-2 w-24 bg-[#A11D1D] rounded-full" />
            </div>

            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              <strong className="font-black text-[#A11D1D]">The Exam Preparation & Testing House L.L.C</strong> is officially licensed and regulated by the leading educational authorities in Sharjah, ensuring the highest standards of academic excellence and institutional integrity.
            </p>
          </div>

          <div className="space-y-20">
            {/* SEDD Section */}
            <div className="group space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8 pb-8 border-b border-slate-100">
                <div className="relative w-full md:w-80 h-48 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src="/images/about-us/government-of-sharjah.png"
                    alt="Government of Sharjah - SEDD Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900 leading-tight">
                    Government of Sharjah
                  </h3>
                  <p className="text-[#A11D1D] font-black text-lg uppercase tracking-[0.2em]">
                    Economic Development Department (SEDD)
                  </p>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed md:text-xl">
                <strong className="font-black text-slate-900">The Exam Preparation & Testing House L.L.C</strong> is licensed by Sharjah Economic Development Department (SEDD). Sharjah is firmly established as a premier educational hub in the UAE, known for top-tier institutions and high-quality educational centres. Driven by government support, the emirate offers extensive academic facilities and significant investment in the education sector.
              </p>
            </div>

            {/* SPEA Section */}
            <div className="group space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8 pb-8 border-b border-slate-100">
                <div className="relative w-full md:w-80 h-48 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src="/images/about-us/sharjah-private.png"
                    alt="SPEA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900 leading-tight">
                    Sharjah Private Education Authority
                  </h3>
                  <p className="text-[#A11D1D] font-black text-lg uppercase tracking-[0.2em]">
                    Official Regulatory Body (SPEA)
                  </p>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed md:text-xl">
                <strong className="font-black text-slate-900">The Exam Preparation & Testing House L.L.C</strong> is regulated by Sharjah Private Education Authority (SPEA). SPEA is the official body responsible for overseeing and regulating private education in the Emirate of Sharjah. SPEA was established by Emiri Decree No. 45 of 2018 issued by H.H. Sheikh Dr. Sultan Bin Mohammed Al Qasimi, Ruler of Sharjah with core responsibilities including Licensing private schools and educational centre and monitoring quality through inspection and performance ratings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
