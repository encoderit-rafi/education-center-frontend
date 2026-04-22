import React from "react";
import Image from "next/image";
import SpecialAccommodationForm from "@/components/blocks/special-accommodation-form";
import { BadgeCheck, Timer, ArrowRight, Eye, DoorOpen, Users } from "lucide-react";

export default function SpecialAccommodation() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                Accessibility First
              </span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-secondary tracking-tight leading-[1.1] mb-8">
                Empowering <span className="text-primary italic">Every</span> Learner.
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                TEPTH is committed to ensuring that all candidates have equal opportunity to demonstrate their abilities. We provide a range of reasonable adjustments tailored to specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Start Application
                </button>
                <button className="px-8 py-4 text-primary font-bold border-b-2 border-transparent hover:border-primary transition-all">
                  Download Guidelines
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
                <Image
                  alt="A focused student using specialized academic tools"
                  className="w-full h-full object-cover"
                  src="/images/about-us/experience-student.png"
                  width={600}
                  height={750}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-[240px] z-20">
                <div className="flex items-center gap-3 mb-2">
                  <BadgeCheck className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm text-secondary">Certified Support</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our accommodations are aligned with international accessibility standards and exam board regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50 -z-0 rounded-l-[100px]"></div>
      </section>

      {/* Types of Accommodations - Bento Grid */}
      <section className="py-24 bg-red-50/30">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-extrabold text-secondary mb-4">Available Accommodations</h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              We offer various modifications based on documented medical conditions, disabilities, or specific learning requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white shadow-sm p-10 rounded-xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500 border border-slate-100 hover:border-primary">
              <div>
                <Timer className="w-10 h-10 mb-6 text-primary group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-secondary">
                  Additional Time
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 transition-colors leading-relaxed">
                  Standard 25% to 50% extra time for candidates with cognitive processing speeds, physical disabilities, or visual impairments that require more time to navigate materials.
                </p>
              </div>
              <div className="mt-8">
                <a className="text-primary font-bold group-hover:text-white flex items-center gap-2" href="#">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-red-50 p-10 rounded-xl flex flex-col group hover:shadow-xl transition-all border border-red-100">
              <Eye className="w-10 h-10 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Visual Aids</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Large print papers, Braille versions, and screen magnifier software for candidates with varying degrees of visual impairment.
              </p>
              <div className="mt-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Customizable</span>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm flex flex-col group border border-slate-100 border-b-4 border-b-transparent hover:border-b-primary transition-all">
              <DoorOpen className="w-10 h-10 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Private Room</h3>
              <p className="text-slate-500 leading-relaxed">
                Distraction-free environments for candidates requiring specialized medical equipment or frequent breaks.
              </p>
            </div>
            <div className="md:col-span-2 bg-secondary text-white p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Assistive Personnel</h3>
                  <p className="text-white/80 leading-relaxed max-w-lg">
                    Qualified scribes, readers, and sign-language interpreters can be provided to assist candidates in conveying their knowledge accurately.
                  </p>
                </div>
                <div className="flex gap-4 mt-8 flex-wrap">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md border border-white/20">
                    Amanuensis
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md border border-white/20">
                    Oral Transcribers
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md border border-white/20">
                    Invigilators
                  </div>
                </div>
              </div>
              <Users className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply & Documentation */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-headline font-extrabold mb-12 flex items-center gap-4 text-secondary">
                How to Apply
                <div className="h-1 w-20 bg-primary/20"></div>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-secondary">Initial Request</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Submit your request during the initial exam registration phase. We recommend applying at least 6 weeks before your test date.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-secondary">Documentation Upload</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Provide valid medical evidence from a registered practitioner outlining the nature of the requirement and recommended adjustments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-secondary">Review & Approval</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Our specialist board reviews the request against exam body criteria and issues a Formal Approval Notice via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-12 shadow-sm">
              <h2 className="text-3xl font-headline font-extrabold mb-8 text-secondary">Accommodation Inquiry</h2>
              <SpecialAccommodationForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-headline font-bold mb-6 italic tracking-tight">Still have questions about accessibility?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Our dedicated Student Support Team is available for 1-on-1 consultations to discuss your specific needs in total confidence.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-neutral-100 transition-colors shadow-lg active:scale-95">
              Book Free Consultation
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors active:scale-95">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
