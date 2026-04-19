"use client";
import Link from "next/link";
import Image from "next/image";
import { CoursePricingGrid } from "./_components/course-pricing-grid";
import { WorkshopPricingGrid } from "./_components/workshop-pricing-grid";
import { Button } from "@base-ui/react";
import FreeConsultation from "../free-consultation/_components/free-consultation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeesPage() {
  return (
    <main className="font-sans selection:bg-red-100 selection:text-red-900">
      {/* ── Hero Section: Editorial Focus ── */}
      <header className="relative min-h-[550px] flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/about-us/vision-hero.png"
            alt="serene high-end university library interior"
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

      {/* ── Tabs for Courses ── */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="ielts" className="w-full flex flex-col">
            {/* <div className="flex justify-center mb-16"> */}
            <TabsList className="bg-[#F3F4F6] p-1 rounded-2xl border border-[#E5E7EB]">
              {["ielts", "oet", "pte", "general"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-[#991B1B] data-[state=active]:shadow-lg text-[#4B5563]"
                >
                  {tab === "general" ? "General English" : tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* </div> */}

            {["ielts", "oet", "pte", "general"].map((tab) => (
              <TabsContent
                key={tab}
                value={tab}
                className="space-y-0 animate-in fade-in zoom-in-95 duration-500"
              >
                {/* ── Examination Preparation Courses ── */}
                <section
                  className="py-20 bg-white"
                  id={`course-pricing-${tab}`}
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center space-y-4">
                      <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
                        {tab.toUpperCase()} Preparation Courses
                      </h2>
                      <p className="text-[#4B5563] max-w-xl mx-auto text-lg leading-relaxed">
                        Tailored classroom and online training programs designed
                        to ensure your peak performance in {tab.toUpperCase()}{" "}
                        examinations.
                      </p>
                    </div>
                    <CoursePricingGrid />
                  </div>
                </section>

                {/* ── Exam Workshops ── */}
                <section
                  className="py-24 bg-[#F9FAFB] px-8 rounded-[3rem]"
                  id={`workshops-${tab}`}
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center space-y-4">
                      <h2 className="text-[#111827] text-4xl md:text-5xl font-headline font-black tracking-tight">
                        Intensive {tab.toUpperCase()} Workshops
                      </h2>
                      <p className="text-[#4B5563] max-w-xl mx-auto text-lg leading-relaxed">
                        Targeted, high-impact sessions focused on examination
                        techniques and full simulation for {tab.toUpperCase()}.
                      </p>
                    </div>
                    <WorkshopPricingGrid />
                  </div>
                </section>
              </TabsContent>
            ))}
          </Tabs>
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
                  href="/book-a-test"
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
      <section className="py-16 px-4 md:py-32 md:px-8">
        <FreeConsultation />
      </section>
    </main>
  );
}
