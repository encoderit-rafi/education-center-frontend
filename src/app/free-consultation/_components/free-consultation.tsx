import Image from "next/image";
import Link from "next/link";

export default function FreeConsultation() {
  return (
    <div className="max-w-7xl mx-auto rounded-2xl md:rounded-[3rem] overflow-hidden relative min-h-[380px] md:min-h-[450px] flex items-center bg-[#991B1B]">
      <div className="absolute inset-0">
        <Image
          src="/images/about-us/vision-map.png"
          alt="academic background pattern"
          fill
          className="object-cover opacity-10 mix-blend-overlay rotate-12 scale-125"
        />
      </div>
      <div className="relative z-10 w-full p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
        <div className="w-full max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-headline font-black tracking-tight leading-none">
            Ready to start <br />
            your journey?
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-light py-2 md:py-4">
            Our academic counselors are available to guide you through the
            selection and booking process.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/free-consultation"
              className="bg-white text-[#991B1B] px-12 py-6 rounded-2xl font-headline font-black text-sm tracking-widest uppercase shadow-2xl hover:scale-105 transition-all text-center"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
