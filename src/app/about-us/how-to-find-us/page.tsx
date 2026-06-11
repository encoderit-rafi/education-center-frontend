"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Car,
  ExternalLink,
  Printer,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/price-display";
import { PdfPrintLayout } from "@/components/blocks/how-to-find-us/pdf-print-layout";
import { useTranslations } from "next-intl";

export default function HowToFindUs() {
  const t = useTranslations("AboutUsPage.HowToFindUs");
  return (
    <main className="bg-white min-h-screen">
      <PdfPrintLayout />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto print-hide">
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
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/Exterior_Building.jpg"
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
      <section className="px-8 max-w-screen-2xl mx-auto border-t border-slate-50 print-hide">
        <div className="grid lg:grid-cols-2 gap-20 items-center print-grid">
          <div className="space-y-8">
            <SectionHeader
              badge={t("MapSection.badge")}
              title={
                <>
                  {t("MapSection.title")}<span className="text-primary">{t("MapSection.titleAccent")}</span>
                </>
              }
              className="space-y-4"
            />
            <div className="space-y-4 text-base leading-relaxed font-medium">
              <p>
                {t("MapSection.p1")}
              </p>
              <p>
                {t("MapSection.p2")}
              </p>
              <p className="text-slate-900 font-bold">
                {t("MapSection.p3Start")}
                <span className="text-primary">
                  {t("MapSection.p3Highlight")}
                </span>
                {t("MapSection.p3End")}
              </p>
            </div>

            <Button
              onClick={() => window.print()}
              variant="outline"
              className="flex items-center gap-2 font-bold text-primary border-primary/20 hover:bg-primary/5 transition-all print-hide"
            >
              <Printer className="w-4 h-4" />
              {t("MapSection.printButton")}
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden print-map-container">
            <Image
              src="/images/about-us/TEPTH-Sharjah-Location-Map.jpg"
              alt="TEPTH Location Map"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Visit Our Centre Section */}
      <section
        className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50 print-hide"
        id="map"
      >
        <SectionHeader
          title={t("VisitOurCentre.title")}
          description={t("VisitOurCentre.description")}
          align="center"
          className="mb-16"
        />

        <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <div className="absolute top-6 right-6 z-20">
            <Link
              href="https://www.google.com/maps/dir//The+Exam+Preparation+and+Testing+House(TEPTH),+Tabarak+Tower+Suite+701+,+7th+Floor+-+Corniche+Rd+-+Al+Mamzar+-+Sharjah+-+United+Arab+Emirates/@25.313693,55.361475,15z"
              target="_blank"
              className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-black text-slate-900 shadow-xl hover:bg-white transition-all group/btn"
            >
              {t("VisitOurCentre.openInMaps")}
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="relative aspect-[21/9] min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2843818318043!2d55.3589000751671!3d25.31369297763539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bdc6cfb106d%3A0x26ff2a834eecd8fe!2sThe%20Exam%20Preparation%20and%20Testing%20House(TEPTH)!5e0!3m2!1sen!2sae!4v1715083800000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-32 bg-white px-8 relative overflow-hidden print-hide">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <SectionHeader
            badge={t("Transportation.badge")}
            title={
              <>
                {t("Transportation.title")}<span className="text-primary">{t("Transportation.titleAccent")}</span>
              </>
            }
            description={t("Transportation.description")}
            className="max-w-3xl mb-32"
          />

          <div className="space-y-40">
            {/* 01. By Taxicab */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center transport-grid">
              <div className="space-y-8 order-2 lg:order-1 transport-text">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">
                    01
                  </span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">
                    {t("Transportation.taxicabTitle")}
                  </h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed font-medium">
                  <p>
                    {t("Transportation.taxicabDescriptionPart1")}
                    <br /> {t("Transportation.taxicabDescriptionPart2")}{" "}
                    <span className="text-primary font-semibold">
                      {t("Transportation.taxicabNumber")}
                    </span>{" "}
                    {t("Transportation.taxicabDescriptionPart3")}
                    <Link
                      href="#map"
                      className="text-primary font-black hover:underline"
                    >
                      {t("Transportation.taxicabLink")}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2 transport-img">
                <Image
                  src="/images/about-us/taxi-sharjah.png"
                  alt="Sharjah Taxi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 02. Public Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center transport-grid">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transport-img">
                <Image
                  src="/images/about-us/sss.png"
                  alt="Sharjah Public Bus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8 transport-text">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">
                    02
                  </span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">
                    {t("Transportation.publicBusTitle")}
                  </h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed">
                  <p>
                    {t("Transportation.publicBusDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* 03. Dubai Metro & Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center transport-grid">
              <div className="space-y-8 order-2 lg:order-1 transport-text">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">
                    03
                  </span>
                  <h5 className="text-3xl font-black text-primary uppercase tracking-tight">
                    {t("Transportation.metroTitle")}
                  </h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed font-medium">
                  <p>
                    {t("Transportation.metroDescription")}
                  </p>

                  <div className="space-y-4">
                    <p className="font-bold">{t("Transportation.metroStep1Title")}</p>
                    <p>
                      {t("Transportation.metroStep1Text")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">{t("Transportation.metroStep2Title")}</p>
                    <p>
                      {t("Transportation.metroStep2Text1")}
                    </p>
                    <p>
                      {t("Transportation.metroStep2Text2")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">{t("Transportation.metroStep3Title")}</p>
                    <p>
                      {t("Transportation.metroStep3Text")}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-bold mb-2">{t("Transportation.alternativeRoutesTitle")}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        {t("Transportation.alternativeRoute1")}
                      </li>
                      <li>
                        {t("Transportation.alternativeRoute2")}
                      </li>
                    </ul>
                  </div>

                  <p className="text-[#d12c2c] font-bold">
                    {t("Transportation.note")}
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2 transport-img">
                <Image
                  src="/images/about-us/mmm.png"
                  alt="Dubai Metro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-16 px-8 max-w-screen-2xl mx-auto print-hide">
        <div className="grid lg:grid-cols-2 gap-20 items-start print-grid">
          <div className="space-y-12">
            <SectionHeader
              badge={t("DrivingDirections.badge")}
              title={t("DrivingDirections.title")}
              className="mb-12"
              titleClassName="text-3xl md:text-4xl"
            />
            <div className="space-y-10">
              {t.raw("DrivingDirections.routes").map((route: any, idx: number) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-slate-200 text-5xl font-black group-hover:text-primary/20 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="space-y-2">
                    <h6 className="text-primary font-black uppercase text-base">
                      {route.from}
                    </h6>
                    <p className="text-base leading-relaxed font-medium">
                      {route.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-white space-y-10 shadow-2xl relative overflow-hidden group print-hide">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  {t("DrivingDirections.parkingTitle1")} <br />
                  {t("DrivingDirections.parkingTitle2")}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="text-white font-black uppercase text-sm tracking-[0.2em]">
                      {t("DrivingDirections.onSiteParking")}
                    </p>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed font-medium pl-5">
                    {t("DrivingDirections.onSiteParkingText1")}
                    <span className="text-white font-black">{t("DrivingDirections.onSiteParkingText2")}</span>
                  </p>
                </div>

                <div className="h-px bg-white/20 w-full"></div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="text-white font-black uppercase text-sm tracking-[0.2em]">
                      {t("DrivingDirections.publicParking")}
                    </p>
                  </div>
                  <div className="space-y-5 pl-5">
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                      {t("DrivingDirections.publicParkingText1")}
                      <span className="text-white font-black flex items-center gap-1 inline-flex">
                        <PriceDisplay amount={2} /> {t("DrivingDirections.publicParkingText2")}
                      </span>
                    </p>
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <p className="text-white font-medium leading-relaxed italic">
                        &quot;{t("DrivingDirections.quote")}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-white/20">
                <p className="text-base text-white mb-6">
                  {t("DrivingDirections.assistance")}
                </p>
                <Link
                  href="tel:+97165531250"
                  className="group/phone flex items-center gap-4"
                >
                  <span className="text-2xl md:text-3xl font-black text-white hover:text-white/80 transition-all">
                    +971 6 553 1250
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
