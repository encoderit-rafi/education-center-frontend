import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/app/contact-us/_components/form-contact";
import { MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("ContactUsPage");
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge={t("HeroSection.badge")}
            title={
              <>
                {t("HeroSection.title")}<span className="text-primary">{t("HeroSection.titleAccent")}</span>
              </>
            }
            description={t("HeroSection.description")}
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/contact-us.jpg"
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
      <section className="p-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Contact Details */}
          <div className="relative h-full flex flex-col justify-start gap-8">
            {/* Header */}

            <div className="relative z-10 space-y-4 animate-fade-up">
              <Link href="tel:+97143333616" className="block">
                <div className="group flex flex-row items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Phone className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold text-slate-800 group-hover:text-primary transition-colors tracking-tight">
                      {t("ContactDetails.phone")}
                    </h3>
                    <p className="text-xs font-normal text-slate-500">
                      {t("ContactDetails.phoneAvailability")}
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:info@tepth.org" className="block">
                <div className="group flex flex-row items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Mail className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold text-slate-800 group-hover:text-primary transition-colors tracking-tight">
                      {t("ContactDetails.email")}
                    </h3>
                    <p className="text-xs font-normal text-slate-500">
                      {t("ContactDetails.emailAvailability")}
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/about-us/how-to-find-us" className="block">
                <div className="group flex flex-row items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-primary group-hover:text-white mt-0.5">
                    <MapPin className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-slate-800 leading-relaxed group-hover:text-primary transition-colors tracking-tight">
                      {t("ContactDetails.addressPart1")} <br />
                      {t("ContactDetails.addressPart2")} <br />
                      {t("ContactDetails.addressPart3")}
                    </h3>
                  </div>
                </div>
              </Link>

              <Link
                href="https://wa.me/97165531250"
                target="_blank"
                className="block"
              >
                <div className="group flex flex-row items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <MessageCircle className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold text-slate-800 group-hover:text-primary transition-colors tracking-tight">
                      {t("ContactDetails.chat")}
                    </h3>
                    <p className="text-xs font-normal text-slate-500">
                      {t("ContactDetails.chatAvailability")}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Office Hours Card */}
              <div className="bg-slate-50/50 border border-slate-200/60 h-fit rounded-xl flex flex-row gap-4 p-5 transition-all duration-300">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-500 mt-0.5">
                  <Clock className="size-4" />
                </span>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 pt-0.5">
                    {t("OfficeHours.title")}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                      <span className="text-sm font-medium text-slate-600">
                        {t("OfficeHours.saturdayToThursday")}
                      </span>
                      <span className="text-sm text-slate-800 font-semibold">
                        {t("OfficeHours.hours")}
                      </span>
                    </div>
                    <div className="w-full h-px bg-slate-200/40" />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                      <span className="text-sm font-medium text-slate-600">
                        {t("OfficeHours.friday")}
                      </span>
                      <span className="text-rose-600 font-bold uppercase text-xs tracking-wider">
                        {t("OfficeHours.closed")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative h-full">
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-3xl opacity-30 pointer-events-none"></div>
            <div className="relative bg-white rounded-[2.5rem] h-full flex flex-col">
              <SectionHeader
                title={
                  <>
                    {t("FormSection.title")}<span className="text-primary">{t("FormSection.titleAccent")}</span>
                  </>
                }
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
