"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowToFindUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Section Badge */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                LOCATION GUIDE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              How to <br />
              <span className="text-primary">Find Our Center</span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
              Reaching our center in Sharjah is straightforward. We've compiled this comprehensive guide to help you navigate your journey with ease.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/book-exams">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2">
                  Book an Exam <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2" variant="destructive">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/infrastructure-center.png"
                alt="Our Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                LOCATION MAP
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Interactive Navigation</h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-medium">
              <p>
                Route to our centre is too easy to follow and reach the destination. We have incorporated Google Location Map to make it more understandable for you.
              </p>
              <p>
                From the small box on lower-left corner of the map, you can select to view street map or the satellite imagery. You can also view larger map to be more certain about our location.
              </p>
              <p className="text-slate-900 font-bold">
                This visual representation will help you with the driving directions to arrive at <span className="text-primary">The Exam Preparation & Testing House L.L.C</span> in Sharjah.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/about-us/TEPTH-Sharjah-Location-Map.jpg"
              alt="TEPTH Location Map"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-32 bg-white px-8 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Movement & Access</span>
            </div>
            <h4 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-[0.9] mb-8">
              Ways to <span className="text-primary text-outline-primary">Reach Us</span>
            </h4>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              We have mapped out the most efficient routes to ensure your journey to our center is as smooth as possible.
            </p>
          </div>

          <div className="space-y-40">
            {/* 01. By Taxicab */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">01</span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">By Taxicab</h5>
                </div>
                <div className="space-y-6 text-slate-600 text-base leading-relaxed">
                  <p>From anywhere in Sharjah, you can hire a taxi and it will take you to your final destination.</p>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Instant Booking</p>
                      <p className="text-3xl font-black text-slate-900 mb-1">600-525-252</p>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Sharjah Taxi Corporation</p>
                    </div>
                  </div>
                  <p>Drivers will pick you up from your specified location and take you directly to our centre. For your convenience, you can access our location map below.</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all group">
                    View Location Map <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image src="/images/about-us/taxi.png" alt="Sharjah Taxi" fill className="object-cover" />
              </div>
            </div>

            {/* 02. Public Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="/images/about-us/public-bus.png" alt="Sharjah Public Bus" fill className="object-cover" />
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">02</span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">Public Bus</h5>
                </div>
                <div className="space-y-6 text-slate-600 text-base leading-relaxed">
                  <div className="space-y-4">
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-[0.2em] text-primary">Service Routes</p>
                    <div className="flex flex-wrap gap-3">
                      {["AL MAMZAR", "AL TAAWUN"].map((route) => (
                        <div key={route} className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-slate-900 text-xs shadow-sm">
                          {route}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p>Take a Sharjah public bus towards your preferred destination and disembark at the nearest bus stop to <strong className="text-slate-900">Tabarak Tower</strong>.</p>
                  <div className="flex gap-4 p-6 bg-primary/5 rounded-3xl border-l-4 border-primary">
                    <Info className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-slate-700 font-bold text-sm leading-snug">
                      The bus ride will get you within a short walking distance of the center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 03. Dubai Metro & Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">03</span>
                  <h5 className="text-3xl font-black text-primary uppercase tracking-tight">Metro & Bus</h5>
                </div>
                <div className="space-y-8 text-slate-600 text-base leading-relaxed">
                  <p>Although Sharjah does not have its own metro, you can combine the Dubai Metro with bus services to reach our Sharjah office efficiently.</p>

                  <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                    {[
                      { step: "Take the Dubai Metro", desc: "Board the Red Line and alight at Union Metro Station." },
                      { step: "Transfer to a Bus", desc: "Board the E303 bus at Union Square Bus Station to Al Jubail Station." },
                      { step: "Final Connection", desc: "From Al Jubail, hire a taxi to reach Tabarak Tower in Al Mamzar." }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-12 group">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center group-hover:border-primary transition-colors z-10">
                          <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-primary transition-colors"></div>
                        </div>
                        <h6 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">{item.step}</h6>
                        <p className="text-sm font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Alternative Routes */}
                  <div className="pt-6 grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-900 rounded-3xl text-white">
                      <p className="text-primary text-base font-black uppercase tracking-widest mb-2">E306 Service</p>
                      <p className="text-xs text-slate-200 font-medium">Al Ghubaiba to Al Jubail Station.</p>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-3xl text-white">
                      <p className="text-primary text-base font-black uppercase tracking-widest mb-2">E307 Service</p>
                      <p className="text-xs text-slate-200 font-medium">Deira City Centre to Al Jubail.</p>
                    </div>
                  </div>

                  <p className="text-primary font-black text-base uppercase  flex items-center gap-2">
                    <Info className="w-4 h-4" /> Note: Please allow extra travel time for traffic.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image src="/images/about-us/metro.png" alt="Dubai Metro" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary text-base font-black uppercase tracking-[0.3em]">
                DRIVING DIRECTIONS
              </span>
            </div>

            <div className="space-y-10">
              {[
                { from: "Dubai", text: "Take Al Ittihad Road (E11) towards Sharjah. Follow the signs towards Al Mamzar. Turn right onto Al Mamzar Road and continue until you reach Tabarak Tower on your right." },
                { from: "Ajman, Umm Al Quwain, or Ras Al Khaimah", text: "Drive towards Sharjah on Sheikh Mohammed Bin Zayed Road (E311). Take the exit for Al Mamzar, and follow the signs to reach Al Mamzar Road. Tabarak Tower will be on your right." },
                { from: "Abu Dhabi", text: "Head towards Dubai on Sheikh Zayed Road (E11). Continue towards Al Ittihad Road (E11) into Sharjah. Follow the signs to Al Mamzar, and turn right onto Al Mamzar Road. Tabarak Tower will be on your right." }
              ].map((route, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-slate-200 text-5xl font-black group-hover:text-primary/20 transition-colors">0{idx + 1}</span>
                  <div className="space-y-2">
                    <h6 className="font-black text-slate-900 uppercase text-sm tracking-widest">From {route.from}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{route.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white space-y-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <Info className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-black uppercase">Parking Information</h3>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-primary font-black uppercase text-base tracking-widest">On-Site Parking</p>
                  <p className="text-slate-400 text-sm leading-relaxed">There are visitor parking spaces available at the back of Tabarak Tower.</p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-8">
                  <p className="text-primary font-black uppercase text-base tracking-widest">Public Parking</p>
                  <div className="space-y-4">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Metered parking is also available near the tower at a rate of AED 2 per hour. Please check with SRTA in Sharjah for any recent updates on metered parking and payment options.
                    </p>
                    <p className="text-white/80 text-base italic font-medium leading-relaxed">
                      This guide is aimed at helping you reach <span className="text-white font-black">The Exam Preparation & Testing House L.L.C</span> in Sharjah with ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">For Further Assistance</p>
                <Link href="tel:+97165531250" className="text-2xl font-black text-primary hover:underline transition-all block">
                  +971 6 553 1250
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
