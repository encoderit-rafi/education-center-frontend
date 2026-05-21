"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  ShieldCheck,
  Cpu,
  Building2,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  Calendar,
  Layers,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VendorPartnershipsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased selection:bg-maroon-100 selection:text-maroon-900">
      
      {/* Sleek & Compact Hero Section */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden bg-white border-b border-slate-100">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full fill-slate-900" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M50,0 L100,0 L100,100 L0,100 Z" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-maroon-50 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold bg-maroon-50 text-maroon-800 border border-maroon-100 mb-4 w-fit">
                <Handshake className="w-3.5 h-3.5" />
                <span>MUTUAL COLLABORATION</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-slate-900 leading-tight mb-5 tracking-tight">
                Vendor <span className="text-primary italic">Partnerships</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans mb-6 max-w-2xl font-light">
                At TEPTH, we are actively seeking to expand our network of delivery partners and warmly encourage vendors with active exam provider agreements to utilize our advanced testing facilities. We believe in building sustainable, win-win collaborations that drive mutual value.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="/contact-us">
                  <Button className="bg-primary text-white hover:bg-primary-variant px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 group shadow-md shadow-primary/10 cursor-pointer h-10">
                    Partner With Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/our-venues">
                  <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer h-10">
                    Tour Our Venues
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Showing FULL uncropped image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[580px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-1.5">
                <Image
                  className="w-full h-auto rounded-xl object-contain block"
                  alt="Professional vendor partnership exam delivery center at TEPTH"
                  src="/images/exam-vendors.jpg"
                  width={600}
                  height={450}
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Symbiotic Architecture Section - Compact Bento Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-2 inline-block">
            THE COLLABORATION ARCHITECTURE
          </span>
          <h2 className="text-2xl md:text-3xl font-headline font-black text-slate-900 tracking-tight animate-fade-in">
            A Sustainable & Mutually Scalable Model
          </h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-3"></div>
        </div>

        {/* Large Centered Block displaying the full second paragraph exactly */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xs border border-slate-100 hover:border-maroon-100/50 transition-all duration-300 mb-8 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-700 shrink-0 hidden sm:flex">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-700 leading-relaxed font-sans text-sm md:text-base font-light">
                By channeling your exam volumes through our state-of-the-art center, you gain an instantly accessible, highly secure, and turnkey testing environment that satisfies the stringent standards of your exam providers—without the burden of facility overhead. In turn, our center optimizes its seating capacity and technical resources. This symbiotic relationship ensures that your candidates experience a seamless, professional testing environment, while both of our organizations benefit from predictable operational scalability and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Breakdown Bento Grid to give depth to the design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* 1. Turnkey Security & Standards */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100 hover:shadow-sm hover:border-maroon-100 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-700 mb-4 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Turnkey & Secure
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-xs">
                An instantly accessible, highly secure environment that fully satisfies the stringent compliance policies of international exam boards.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-50 text-[10px] font-semibold text-slate-400 uppercase">
              <span>Acreddited Compliance</span>
            </div>
          </div>

          {/* 2. Seat Capacity Optimization */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100 hover:shadow-sm hover:border-maroon-100 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-700 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Resource Optimization
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-xs">
                Maximizing seating capacity and technical infrastructure parameters to streamline operational performance and exam logistics.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-50 text-[10px] font-semibold text-slate-400 uppercase">
              <span>Technical Infrastructure</span>
            </div>
          </div>

          {/* 3. Symbiotic Scalability */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100 hover:shadow-sm hover:border-maroon-100 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-700 mb-4 group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Shared Success
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-xs">
                A mutually beneficial alignment enabling predictable growth scales and a premium professional testing setting for all examinees.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-50 text-[10px] font-semibold text-slate-400 uppercase">
              <span>Predictable Scalability</span>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Compact Contact CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-maroon-800 via-maroon-900 to-maroon-950 text-white shadow-xl p-6 md:p-10">
          {/* Geometric pattern accents */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 Z" />
            </svg>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Contact Copy */}
            <div className="lg:col-span-7">
              <span className="text-maroon-200 text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">
                PARTNERSHIP INQUIRIES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black mb-4 leading-tight">
                Establish Your Strategic <br />
                <span className="text-maroon-200 italic">Delivery Partnership</span>
              </h2>
              
              <p className="text-xs sm:text-sm text-maroon-100 leading-relaxed font-light mb-6 max-w-2xl">
                To partner with us, contact us at +97165531250 or by email at info@tepth.org
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="tel:+97165531250">
                  <Button className="w-full sm:w-auto bg-white text-maroon-900 hover:bg-slate-50 hover:text-maroon-950 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/10 h-10">
                    <Phone className="w-4.5 h-4.5 text-primary" />
                    <span>Call +971 6 553 1250</span>
                  </Button>
                </Link>
                <Link href="mailto:info@tepth.org">
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 hover:border-white/40 hover:bg-white/10 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer h-10 hover:text-white">
                    <Mail className="w-4.5 h-4.5" />
                    <span>info@tepth.org</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Interaction Panel */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
              <h3 className="font-bold text-base text-white mb-2.5">Proctoring & Center Setup</h3>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Connect with our partnership coordinators to verify seat availability, review center security parameters, or transfer candidate slots.
              </p>
              <div className="space-y-3">
                <Link href="/contact-us" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-maroon-700 flex items-center justify-center text-white">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs">Schedule a Briefing</span>
                  </div>
                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/our-venues" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-maroon-700 flex items-center justify-center text-white">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs">View Security Protocols</span>
                  </div>
                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
