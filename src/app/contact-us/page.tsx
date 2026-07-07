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
                {t("HeroSection.title")}
                <span className="text-primary">
                  {t("HeroSection.titleAccent")}
                </span>
              </>
            }
            description={t("HeroSection.description")}
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
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

              <div className="block">
                <div className="flex flex-col gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <div className="flex flex-row items-center gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600">
                      <MessageCircle className="size-4" />
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-base font-semibold text-slate-800 tracking-tight">
                        {t("ContactDetails.chat")}
                      </h3>
                      <p className="text-xs font-normal text-slate-500">
                        {t("ContactDetails.chatAvailability")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/971555688035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-black text-white bg-[#25D366] hover:bg-[#20ba56] rounded-xl shadow-sm hover:shadow transition-all text-center"
                    >
                      <svg
                        className="size-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/+971555688035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-black text-white bg-[#0088cc] hover:bg-[#0077b5] rounded-xl shadow-sm hover:shadow transition-all text-center"
                    >
                      <svg
                        className="size-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                      </svg>
                      Telegram
                    </a>
                  </div>
                </div>
              </div>

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
                    {t("FormSection.title")}
                    <span className="text-primary">
                      {t("FormSection.titleAccent")}
                    </span>
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
