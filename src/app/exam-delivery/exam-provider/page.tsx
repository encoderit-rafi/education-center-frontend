"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Monitor,
  Building2,
  VolumeX,
  Cpu,
  Accessibility,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  FileCheck,
  Lock,
  ChevronRight
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ExamProviderPage() {
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
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GOLD STANDARD EXAM DELIVERY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-slate-900 leading-tight mb-5 tracking-tight">
                Exam <span className="text-primary italic">Providers</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans mb-6 max-w-2xl font-light">
                To international awarding bodies, physical in-centre exam delivery remains the gold standard for high-stakes testing. Streamline your testing with our end-to-end exam delivery services. Whether you need to run massive, single-day test events or consistent sessions throughout the year, we &lsquo;ve got you covered. With secure in-person testing sites and robust remote proctoring, we ensure a seamless and high-quality experience for all test-takers.
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
                  alt="Elite professional exam delivery and test-taking facility at TEPTH"
                  src="/images/exam-providers.jpg"
                  width={600}
                  height={450}
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Pillars Section - Simple List in One Column */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-2 inline-block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-2xl md:text-3xl font-headline font-black text-slate-900 tracking-tight">
            Designed for Perfect Integrity and Performance
          </h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-3"></div>
        </div>

        <div className="space-y-6">
          {/* 1. Test Security */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Lock className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Test Security
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                We maintain strict physical and operational security protocols, managed by trained personnel, to protect the integrity of your exams at every stage—before, during, and after test day. To ensure exam security and integrity, our computer labs are fully equipped with a comprehensive CCTV system. Every workstation is monitored by a dedicated security camera, and recorded footage can be made available to exam providers upon request.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Physical & Operational Protocols
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-maroon-50/50 border border-maroon-100/50 text-maroon-800 rounded-full text-[11px] font-semibold tracking-wide">
                  100% Dedicated Workstation CCTVs
                </span>
              </div>
            </div>
          </div>

          {/* 2. Required Business Licences & Permits */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <FileCheck className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Required Business Licences & Permits
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                It is very important to partner with a test center that holds the relevant business activity with the local authority to become a test center. The Exam Preparation & Testing House L.L.C is licensed by Sharjah Economic Development Department (SEDD) and regulated by Sharjah Private Education Authority (SPEA).
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Licensed by SEDD
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Regulated by SPEA
                </span>
              </div>
            </div>
          </div>

          {/* 3. Noise-Free Environment */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <VolumeX className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Noise-Free Environment
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                To minimize distractions and lower noise levels, we have implemented several workplace enhancements. Workstations feature fabric acoustic panels and are spaced generously apart, while testing rooms are carpeted to ensure a quiet environment. Additionally, we utilize white noise machines in the computer labs, alongside quiet keyboards and high-quality headsets throughout our spaces.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Fabric Acoustic Panels
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-maroon-50/50 border border-maroon-100/50 text-maroon-800 rounded-full text-[11px] font-semibold tracking-wide">
                  White Noise Systems Equipped
                </span>
              </div>
            </div>
          </div>

          {/* 4. Technical Infrastructure */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Technical Infrastructure
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                Our technical specifications meet your technical requirements. We provide dedicated, robust desktop PCs and 24-inch monitors.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  High-Performance Specifications
                </span>
              </div>
            </div>
          </div>

          {/* 5. Top-notch Exam Venues */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Top-notch Exam Venues
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                Our modern, easily accessible testing centers are fully equipped with high-performance hardware and advanced technology to ensure an optimal testing environment.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Easily Accessible & Premium Venues
                </span>
              </div>
            </div>
          </div>

          {/* 6. Flexible Exam Delivery */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Monitor className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Flexible Exam Delivery
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                Flexible scheduling options that accommodate massive single-day events, designated testing windows, Morning, Afternoon & Evening slots, or continuous testing year-round.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Continuous & Event-Based Options
                </span>
              </div>
            </div>
          </div>

          {/* 7. Special Accommodation */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-maroon-100/50 hover:bg-slate-50/20 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Accessibility className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                Special Accommodation
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm font-light">
                We provide tailored support for candidates who need testing accommodations, offering personalized services such as extended time, frequent breaks, private rooms, and specialized assistive software and equipment.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100/70">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[11px] font-medium tracking-wide">
                  Adaptive Assistance Softwares
                </span>
              </div>
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
                GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black mb-4 leading-tight">
                Secure Your Exam Partner <br />
                <span className="text-maroon-200 italic">With TEPTH Standards</span>
              </h2>
              <p className="text-xs sm:text-sm text-maroon-100 leading-relaxed font-light mb-6 max-w-2xl">
                Get in touch with us today to discuss your needs or tour our venues online. You may also schedule a visit to our venues. Give us a call at +97165531250 or drop us an email at info@tepth.org
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact-us"
                className={buttonVariants({
                  size: "lg",
                  className: "cursor-pointer",
                })}
                >
                 
                    Partner With Us

                </Link>
                <Link href="/our-venues/360-degree-virtual-tour"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "cursor-pointer",
                })}
                >
               
                    Tour Our Venues

                </Link>
              </div>
            </div>

            {/* Quick Interaction Panel */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
              <h3 className="font-bold text-base text-white mb-2.5">Venue & Delivery Requests</h3>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Connect with our operational managers to arrange physical tours, verify hardware setups, or schedule upcoming examination blocks.
              </p>
              <div className="space-y-3">
                <Link href="/contact-us" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-maroon-700 flex items-center justify-center text-white">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs">Schedule a Visit</span>
                  </div>
                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/our-venues" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-maroon-700 flex items-center justify-center text-white">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs">Tour Our Venues</span>
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


