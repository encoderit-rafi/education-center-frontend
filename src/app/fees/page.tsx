"use client";
import Link from "next/link";
import Image from "next/image";
import FreeConsultation from "../free-consultation/_components/free-consultation";

export default function FeesPage() {
  return (
    <main className="font-sans selection:bg-red-100 selection:text-red-900">
      {/* ── Hero Section ── */}
      <header className="relative min-h-[550px] flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/about-us/vision-hero.png"
            alt="TEPTH Academic Investment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white text-6xl md:text-7xl font-headline font-black tracking-tight mb-8 leading-[1.05]">
              Academic Investment & <br />
              <span className="text-[#991B1B] italic">Exam Fees</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">
              Transparent pricing for world-class certifications. TEPTH provides
              a streamlined pathway to your global academic and professional
              ambitions.
            </p>
          </div>
        </div>
      </header>

      {/* ── Course Selection Grid ── */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
              Select Your Course
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto text-lg leading-relaxed">
              Explore detailed pricing and plans for each of our examination
              preparation programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Workshops",
                fullName: "Intensive Exam Workshops",
                href: "/fees/exam-workshop",
              },
              {
                name: "IELTS",
                fullName: "IELTS Preparation",
                href: "/fees/ielts",
              },
              { name: "PTE", fullName: "PTE Preparation", href: "/fees/pte" },
              {
                name: "CELPIP",
                fullName: "CELPIP Preparation",
                href: "/fees/celpip",
              },
              {
                name: "CAEL",
                fullName: "CAEL Preparation",
                href: "/fees/cael",
              },
              {
                name: "TOEFL",
                fullName: "TOEFL Preparation",
                href: "/fees/toefl",
              },
              { name: "OET", fullName: "OET Preparation", href: "/fees/oet" },
            ].map((course) => (
              <Link
                key={course.name}
                href={course.href}
                className="group relative p-8 bg-[#F9FAFB] rounded-[2rem] border border-[#E5E7EB]/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#991B1B]/10 hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-headline font-black text-[#111827] group-hover:text-[#991B1B] transition-colors">
                    {course.name}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#991B1B] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <p className="text-[#4B5563] font-medium">{course.fullName}</p>
                <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                  <span className="text-xs font-black uppercase tracking-widest text-[#991B1B]">
                    View Detailed Plans
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional Certifications ── */}
      <section className="py-32 bg-[#F3F4F6] px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-2 text-center">
              <span className="text-[#991B1B] text-[10px] font-black uppercase tracking-[0.3em]">
                Credentials
              </span>
              <h2 className="text-[#111827] text-3xl md:text-4xl font-headline font-black tracking-tight">
                Professional Certifications
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  name: "TESOL Professional Course",
                  type: "Teacher training & certification",
                  price: "4,500",
                },
                {
                  name: "HR Professional Certification",
                  type: "Associate level certification",
                  price: "2,800",
                },
                {
                  name: "Digital Marketing Associate",
                  type: "Practical workshop & exam",
                  price: "1,950",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href="/book-exams"
                  className="bg-white p-8 rounded-3xl flex justify-between items-center transition-all duration-300 border border-[#E5E7EB]/50 border-l-[12px] border-l-[#991B1B] shadow-2xl shadow-[#991B1B]/10 hover:translate-x-1"
                >
                  <div className="space-y-1">
                    <h4 className="font-headline font-black text-[#111827] text-xl leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#4B5563] font-medium tracking-wide">
                      {item.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-headline font-black text-[#991B1B]">
                      AED {item.price}
                    </span>
                    <span className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest">
                      Tuition & Exam
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FreeConsultation />
    </main>
  );
}
