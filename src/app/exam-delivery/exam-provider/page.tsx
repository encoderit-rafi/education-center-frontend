"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShieldCheck, Monitor, BrainCircuit, Headphones, Globe2 } from "lucide-react";

export default function ExamProviderPage() {
  return (
    <div className="min-h-screen font-headline antialiased tracking-tight">
      {/* Infrastructure Bento Grid */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Elite Infrastructure.</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature */}
          <div className="md:col-span-2 bg-white p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <Monitor className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Scale Without Compromise</h3>
              <p className="text-lg text-slate-600 max-w-lg">
                Our primary testing atelier features 140 high-performance workstations, each equipped with noise-canceling peripherals and privacy-optimized spatial design.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
              <div>
                <div className="text-4xl font-black text-primary">140</div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest mt-1">Workstations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">100%</div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest mt-1">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">Gbps</div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest mt-1">Fiber Speed</div>
              </div>
            </div>
          </div>
          {/* Secondary Feature */}
          <div className="bg-primary p-12 rounded-2xl text-white flex flex-col justify-center shadow-xl shadow-primary/10">
            <BrainCircuit className="w-14 h-14 mb-8" />
            <h3 className="text-2xl font-bold mb-4">AI-Powered Proctoring</h3>
            <p className="opacity-80 leading-relaxed">
              Integrate cutting-edge biometrics and behavioral AI monitoring that meet the most rigorous international integrity standards for high-stakes examinations.
            </p>
          </div>
          {/* Three Small Service Highlight Cards */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-primary/5">
            <Headphones className="text-primary w-8 h-8 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-slate-900">24/7 Tech Support</h4>
            <p className="text-sm text-slate-600">Round-the-clock specialized engineering teams standing by for every session.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-primary/5">
            <ShieldCheck className="text-primary w-8 h-8 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-slate-900">Military-Grade Security</h4>
            <p className="text-sm text-slate-600">End-to-end encryption and physical security protocols that exceed global norms.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-primary/5">
            <Globe2 className="text-primary w-8 h-8 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-slate-900">Global Accreditation</h4>
            <p className="text-sm text-slate-600">Recognized by major international exam boards and academic accreditation bodies.</p>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      {/* <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.1"></path>
            <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ready to elevate your institutional <span className="text-primary">delivery standards?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Join 500+ global academic partners who trust TEPTH for their most critical examination cycles. Let's build a secure future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-lg font-black text-xl hover:bg-primary-variant transition-all">
                Become a Delivery Partner
              </button>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-4">
                  <Image
                    className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover"
                    alt="Corporate partner"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRMO1j96NKTuJHoyngBzOyqHfDc6ULKiaSbaN4pLgV1cpGts8P16jSQsAQKTHyzMKF-HD--7N53NQfVn9UvkalLDTZuJQjHQtsGUafpcRXdW5P2xy9y1NF6HjVs_HY6tzC3Y_ZnKH60nn31Ifkq6QDuz6hrC0DGH5xgS58ngJfvHMHuC_8lEUAwuuIdjylXpg44_U9RHtfTadZ7R9lN5C_QYJUP9j7p0TBDUh0up0GcadcPqTTWq9vN40JWoKprCAUMfTUzR6DcTm4"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover"
                    alt="University representative"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6cl9M0QyEa3MGlYe-Hk-L3xN4GVYkdihyws7xRCxV5ubVJg0vG84k6C9O5QHTqKMRwhGotvjvIY5FdUzNasdEzzQkTeQ7CEn51j5RQjgmuZQeygqqIfi2BjCpWczS9lJ_nr9-sJdcUBpdZuVrhuJoIamaPB2D7dHjQB2bya6VFkfXEa9CUJCkfkxaVfBClVS6EWxgmItsuvLyLV2LfbuxYPu4C1LYOQ27ysSlqb9li576UHHvdWUGoQEYDN2q5BjHqRtdias3Evh1"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover"
                    alt="Exam board official"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zZQsKq2If9NqcaTG_VmTGylKJfbr21rqeziF7Y8291Ydo7Tv68HKYg3B3czRDW_w8bn1QGsu9kSIjVjNw6kmHT04hRK6V_JyKg7je9eHwFC8k2s80mChTKQuKY23ugkLBQmVdMTYawfHiPMYop_zivjY8U26wcfXju2var8nn2lcIFJEt9_Qx3VXYu9MSxSz9tHJxO2tK07OGF_sC0NO938QbhQKA302D5UkBsgduwWixzb9hJsyqpwVZsIVN8yUoNsdHPP912Vq"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-sm font-medium text-slate-400 italic">Trusted by top-tier institutions worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

