"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ArrowRight, Info } from "lucide-react";
import ContactForm from "@/app/contact-us/_components/form-contact";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
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
                SUPPORT CENTER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              Get in <br />
              <span className="text-primary">Touch With Us</span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
              Whether you're preparing for an entrance exam or need deep
              editorial review, we're here to guide you. Our expert team is ready to assist you at every step of your journey.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/book-exams">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2">
                  Book an Exam <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/faqs">
                <Button className="h-14 w-52 text-sm rounded-lg flex items-center justify-center gap-2" variant="destructive">
                  View FAQs
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
                alt="TEPTH Support Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Contact Details */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                CONTACT INFORMATION
              </span>
            </div>

            <div className="space-y-10">
              {/* Working Hours */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Working Hours</h4>
                  <div className="space-y-1">
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">Saturday to Thursday</p>
                    <p className="text-xl font-black text-primary">9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Our Office</h4>
                  <div className="space-y-2">
                    <p className="text-base font-black text-slate-900 border-b border-primary/20 inline-block pb-1">
                      The Exam Preparation & Testing House L.L.C
                    </p>
                    <div className="text-slate-600 text-sm font-medium leading-relaxed">
                      <p>Suite 701, 7th Floor, Tabarak Tower,</p>
                      <p>Corniche Road, Al Mamzar, Sharjah, UAE.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-10 border-t border-slate-100 space-y-6">
                <Link href="tel:+97165531250" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black text-slate-900">+971 6 553 1250</span>
                </Link>
                <Link href="mailto:info@tepth.org" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black text-slate-900">info@tepth.org</span>
                </Link>
              </div>

              {/* Helpful Note */}
              <div className="flex gap-4 p-8 mr-4 bg-primary/5 rounded-3xl border-l-4 border-primary mt-8">
                <Info className="w-6 h-6 text-primary shrink-0" />
                <p className="text-slate-700 font-bold text-sm leading-snug">
                  Need directions? Check our <Link href="/about-us/how-to-find-us" className="text-primary underline">Location Guide</Link> for transportation options and parking information.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-50"></div>
            <div className="relative bg-white rounded-xl p-8 md:p-12">
              <div className="mb-10 space-y-2">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Send a Message</h3>
                <p className="text-slate-500 text-sm font-medium">We'll respond to your inquiry within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

