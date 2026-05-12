import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/app/contact-us/_components/form-contact";
import { MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";



export default function ContactUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="CONTACT US"
            title={
              <>
                Get in Touch<span className="text-primary"> With Us</span>
              </>
            }
            description="Whether you're preparing for an entrance exam or need deep editorial review, we're here to guide you. Our expert team is ready to assist you at every step of your journey."
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/contact-us-01.png"
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
      <section className="px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Contact Details */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 md:p-16 h-full flex flex-col justify-start gap-12">
            {/* Header */}

            <div className="relative z-10 space-y-4 animate-fade-up">
              <Link href="tel:+97143333616" className="block">
                <div className="group flex flex-row items-start gap-4 p-5 rounded-lg border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Phone className="size-4" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors tracking-tight">
                      +971 4 333 3616
                    </h3>
                    <p className="text-sm font-normal text-secondary/90">
                      Available Sunday – Thursday, 9am – 6pm
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:info@tepth.net" className="block">
                <div className="group flex flex-row items-start gap-4 p-5 rounded-lg border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Mail className="size-4" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors tracking-tight">
                      info@tepth.net
                    </h3>
                    <p className="text-sm font-normal text-secondary/90">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/about-us/how-to-find-us" className="block">
                <div className="group flex flex-row items-start gap-4 p-5 rounded-lg border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <MapPin className="size-4" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors tracking-tight">
                      Dubai Silicon Oasis, Dubai, UAE
                    </h3>
                    <p className="text-sm font-normal text-secondary/90">
                      Close to Academic City — wheelchair accessible
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="https://wa.me/97165531250" target="_blank" className="block">
                <div className="group flex flex-row items-start gap-4 p-5 rounded-lg border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <MessageCircle className="size-4" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors tracking-tight">
                      Chat with us
                    </h3>
                    <p className="text-sm font-normal text-secondary/90">
                      Quick answers via WhatsApp
                    </p>
                  </div>
                </div>
              </Link>

              {/* Office Hours Card */}
              <div className="bg-rose-50/30 border border-rose-100/50 h-fit rounded-xl flex flex-row gap-4 p-5 transition-all duration-300">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-4" />
                </span>

                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#7d1c1c] pt-0.5">Office Hours</h3>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                      <span className="text-sm sm:text-base font-medium">Sunday – Thursday</span>
                      <span className="text-sm sm:text-base text-slate-900 font-black">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="w-full h-px bg-rose-200/40" />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                      <span className="text-sm sm:text-base font-medium">Friday</span>
                      <span className="text-[#d12c2c] font-black uppercase text-sm sm:text-base">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative h-full">
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-3xl opacity-30 pointer-events-none"></div>
            <div className="relative bg-white rounded-[2.5rem] p-6 md:p-16 h-full flex flex-col">
              <SectionHeader
                title={
                  <>
                    Send a Direct<span className="text-primary"> Message</span>
                  </>
                }
                description="Have a specific question? Fill out the form below and our team will get back to you within 24 business hours."
                className="mb-12"
                badgeClassName="tracking-[0.1em]"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

