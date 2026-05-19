import React from "react";
import Image from "next/image";
import SpecialAccommodationForm from "@/components/blocks/special-accommodation-form";
import { Timer, ArrowRight, Eye, DoorOpen, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import ContactForm from "../contact-us/_components/form-contact";

export default function SpecialAccommodation() {
  return (
    <main className="bg-white min-h-screen">
      {/* <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <SectionHeader
            badge="ACCESSIBILITY FIRST"
            title={
              <>
                Empowering Every <span className="text-primary">Learner</span>
              </>
            }
            description="TEPTH is committed to ensuring that all candidates have equal opportunity to demonstrate their abilities. We provide a range of reasonable adjustments tailored to specific needs."
            className="space-y-4"
          />

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-5.jpg"
                alt="A focused student using specialized academic tools"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Types of Accommodations - Bento Grid */}
      <section className="py-12 md:py-16 bg-red-50/30">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <SectionHeader
            title={
              <>
                Available <span className="text-primary">Accommodations</span>
              </>
            }
            description="We offer various modifications based on documented medical conditions, disabilities, or specific learning requirements."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white shadow-sm p-6 md:p-8 rounded-xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500 border border-slate-100 hover:border-primary">
              <div>
                <Timer className="w-8 h-8 mb-4 text-primary group-hover:text-white transition-colors" />
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-white transition-colors text-secondary">
                  Additional Time
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 transition-colors text-sm leading-relaxed">
                  Standard 25% to 50% extra time for candidates with cognitive
                  processing speeds, physical disabilities, or visual
                  impairments that require more time to navigate materials.
                </p>
              </div>
              <div className="mt-6">
                <a
                  className="text-primary font-bold group-hover:text-white flex items-center gap-2 text-sm"
                  href="#"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-red-50 p-6 md:p-8 rounded-xl flex flex-col group hover:shadow-xl transition-all border border-red-100">
              <Eye className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary">
                Visual Aids
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Large print papers, Braille versions, and screen magnifier
                software for candidates with varying degrees of visual
                impairment.
              </p>
              <div className="mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Customizable
                </span>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm flex flex-col group border border-slate-100 border-b-4 border-b-transparent hover:border-b-primary transition-all">
              <DoorOpen className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary">
                Private Room
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Distraction-free environments for candidates requiring
                specialized medical equipment or frequent breaks.
              </p>
            </div>
            <div className="md:col-span-2 bg-secondary text-white p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Assistive Personnel
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                    Qualified scribes, readers, and sign-language interpreters
                    can be provided to assist candidates in conveying their
                    knowledge accurately.
                  </p>
                </div>
                <div className="flex gap-3 mt-6 flex-wrap">
                  <div className="bg-white/10 px-3.5 py-1.5 rounded-lg text-xs backdrop-blur-md border border-white/20">
                    Amanuensis
                  </div>
                  <div className="bg-white/10 px-3.5 py-1.5 rounded-lg text-xs backdrop-blur-md border border-white/20">
                    Oral Transcribers
                  </div>
                  <div className="bg-white/10 px-3.5 py-1.5 rounded-lg text-xs backdrop-blur-md border border-white/20">
                    Invigilators
                  </div>
                </div>
              </div>
              <Users className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply & Documentation */}
      <section className="py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-4 text-secondary">
                How to Apply
                <div className="h-1 w-16 bg-primary/20"></div>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-secondary">
                      Initial Request
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Submit your request during the initial exam registration
                      phase. We recommend applying at least 6 weeks before your
                      test date.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-secondary">
                      Documentation Upload
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Provide valid medical evidence from a registered
                      practitioner outlining the nature of the requirement and
                      recommended adjustments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-secondary">
                      Review & Approval
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Our specialist board reviews the request against exam body
                      criteria and issues a Formal Approval Notice via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-100 shadow-sm rounded-xl p-4 md:p-6 bg-white">
              <h2 className="text-xl font-headline font-bold mb-4 text-secondary">
                Accommodation Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
