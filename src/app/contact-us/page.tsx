"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/app/contact-us/_components/form-contact";
import { MessageCircle } from "lucide-react";
import { BaseCard, BaseCardDescription, BaseCardIcon, BaseCardTitle } from "@/components/blocks/cards/base-card";



export default function ContactUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-4 animate-fade-up">
            {/* Section Badge */}
            <span className="section-label">
              CONTACT US
            </span>

            {/* Main Heading */}
            <h1 className="section-title">
              Get in <br />
              <span>Touch With Us</span>
            </h1>

            {/* Description */}
            <p className="section-description">
              Whether you're preparing for an entrance exam or need deep
              editorial review, we're here to guide you. Our expert team is ready to assist you at every step of your journey.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/contact.png"
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
      <section className="px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Details */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 group h-full flex flex-col justify-start gap-12">
            {/* Header */}
            <div className="space-y-4 animate-fade-up">
              <span className="section-label">
                STAY CONNECTED
              </span>
              <h2 className="section-title">
                Reach out <br />
                <span className="text-primary">to the experts</span>
              </h2>
            </div>

            <div className="relative z-10 space-y-4 animate-fade-up">
              <Link href="tel:+97165531250" className="block group/card-link">
                <BaseCard className="flex flex-row items-start gap-4 p-5 ">
                  <BaseCardIcon >
                    <Phone className="w-6 h-6" />

                  </BaseCardIcon>
                  <div className="space-y-1">
                    <BaseCardTitle>
                      +971 4 333 3616
                    </BaseCardTitle>
                    <BaseCardDescription>
                      Available Sunday – Thursday, 9am – 6pm
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>

              <Link href="mailto:info@tepth.net" className="block group/card-link">
                <BaseCard className="flex flex-row items-start gap-4 p-5 ">
                  <BaseCardIcon >
                    <Mail className="w-6 h-6" />
                  </BaseCardIcon>
                  <div className="space-y-1">
                    <BaseCardTitle>
                      info@tepth.net
                    </BaseCardTitle>
                    <BaseCardDescription>
                      We typically respond within 24 hours
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>

              <Link href="/about-us/how-to-find-us" className="block group/card-link">
                <BaseCard className="flex flex-row items-start gap-4 p-5 ">
                  <BaseCardIcon >
                    <MapPin className="w-6 h-6" />
                  </BaseCardIcon>
                  <div className="space-y-1">
                    <BaseCardTitle>
                      Dubai Silicon Oasis, Dubai, UAE
                    </BaseCardTitle>
                    <BaseCardDescription>
                      Close to Academic City — wheelchair accessible
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>

              <Link href="https://wa.me/97165531250" target="_blank" className="block group/card-link">
                <BaseCard className="flex flex-row items-start gap-4 p-5 ">
                  <BaseCardIcon >
                    <MessageCircle className="w-6 h-6" />
                  </BaseCardIcon>
                  <div className="space-y-1">
                    <BaseCardTitle>
                      Chat with us
                    </BaseCardTitle>
                    <BaseCardDescription>
                      Quick answers via WhatsApp
                    </BaseCardDescription>
                  </div>
                </BaseCard>
              </Link>

              {/* Office Hours Card */}
              <BaseCard className="bg-rose-50/30 border border-rose-100/50 shadow-none  rounded-xl flex flex-row gap-4 p-5 hover:translate-y-0 hover:shadow-none hover:border-rose-100/50">
                <BaseCardIcon>
                  <Clock className="w-6 h-6" />
                </BaseCardIcon>

                <div className="flex-1 space-y-2">
                  <BaseCardTitle className="text-lg font-black uppercase tracking-tight text-[#7d1c1c] pt-2 group-hover:text-[#7d1c1c]">Office Hours</BaseCardTitle>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Sunday – Thursday</span>
                      <span className="text-base text-slate-900 font-black">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="w-full h-px bg-rose-200/40" />
                    <div className="flex justify-between items-center">
                      <span>Friday</span>
                      <span className="text-[#d12c2c] font-black uppercase text-base">Closed</span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative h-full">
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-3xl opacity-30 pointer-events-none"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 h-full flex flex-col">
              <div className="mb-12 space-y-4">
                <span className="section-label">
                  ENQUIRY FORM
                </span>
                <h3 className="section-title">
                  Send a <br />
                  <span className="text-primary">Direct Message</span>
                </h3>
                <p className="section-description">
                  Have a specific question? Fill out the form below and our team will get back to you within 24 business hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

