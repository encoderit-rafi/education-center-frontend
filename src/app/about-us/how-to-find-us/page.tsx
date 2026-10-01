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
import { AED } from "@/components/ui/aed";
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
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/exterior-building.jpg"
                alt="Our Center"
                fill
                className="object-full"
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
          <div className="relative aspect-4/3 rounded-xl overflow-hidden print-map-container">
            <Image
              src="/images/about-us/TEPTH-Dubai-Location-Map.jpg"
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
              href="https://www.google.com/maps/place/The+Exam+Preparation+and+Testing+House+(TEPTH)/@25.1118091,55.3843817,128m/am=t/data=!3m2!1e3!5s0x3e5f693406eebb91:0xf35b02a92701da1!4m26!1m19!4m18!1m6!1m2!1s0x3e5f5f5fede7964b:0x2a830aa19c1f6d89!2sSharjah+-+United+Arab+Emirates!2m2!1d55.427211!2d25.3561698!1m6!1m2!1s0x3e5f6466278a738d:0x744c65e65f9f1f7b!2sThe+Exam+Preparation+and+Testing+House+(TEPTH),+Apricot+Tower+Suite+703,+7th+floor%26+-+Suite+308,+3rd+floor+-+19a+street+-+Dubai+Silicon+Oasis+-+Dubai+-+United+Arab+Emirates!2m2!1d55.3843719!2d25.1117742!6m3!1i0!2i1!3i0!3m5!1s0x3e5f6466278a738d:0x744c65e65f9f1f7b!8m2!3d25.1117742!4d55.3843719!16s%2Fg%2F11b6gqr41b?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-black text-slate-900 shadow-xl hover:bg-white transition-all group/btn"
            >
              {t("VisitOurCentre.openInMaps")}
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="relative aspect-21/9 min-h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.383180424599!2d55.381796975160434!3d25.11177417776401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6466278a738d%3A0x744c65e65f9f1f7b!2sThe%20Exam%20Preparation%20and%20Testing%20House%20(TEPTH)!5e0!3m2!1sen!2sae!4v1715083800000!5m2!1sen!2sae"
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
                    <span className="text-primary font-semibold" dir="ltr">
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
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2 transport-img">
                <Image
                  src="/images/about-us/dubai-taxi.jpg"
                  alt="Dubai Taxi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 02. Public Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center transport-grid">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl transport-img">
                <Image
                  src="/images/about-us/dubai-public-bus.jpg"
                  alt="Dubai Public Bus"
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
                </div>
              </div>
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2 transport-img">
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

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  {t("DrivingDirections.parkingTitle1")}{" "}
                  {t("DrivingDirections.parkingTitle2")}
                </h3>
              </div>

              <div className="space-y-5 text-sm md:text-base leading-relaxed text-white/90">
                <p className="leading-relaxed">
                  – {t("DrivingDirections.allDayParkingText")}
                </p>

                <div className="space-y-2">
                  <p className="leading-relaxed">
                    – <strong className="text-white">{t("DrivingDirections.visitorParkingTitle")}:</strong> {t("DrivingDirections.visitorParkingText")}
                  </p>
                  <ul className="list-disc list-inside ps-4 space-y-1.5 text-sm text-white/90">
                    <li>
                      <strong className="text-white">{t("DrivingDirections.complimentaryLabel")}:</strong> {t("DrivingDirections.complimentaryValue")}
                    </li>
                    <li>
                      <strong className="text-white">{t("DrivingDirections.chargeableLabel")}:</strong>{" "}
                      {t.rich("DrivingDirections.chargeableValue", {
                        aed: () => <AED className="h-[0.85em] w-auto fill-current inline-block relative top-[-0.05em] mx-0.5" />,
                      })}
                    </li>
                  </ul>
                </div>

                <p className="text-sm leading-relaxed text-white/90">
                  {t("DrivingDirections.permitsInfo")}
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm text-sm leading-relaxed text-white/95">
                  <p>
                    {t.rich("DrivingDirections.streetParking", {
                      aed: () => <AED className="h-[0.85em] w-auto fill-current inline-block relative top-[-0.05em] mx-0.5" />,
                    })}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">
                  {t("DrivingDirections.assistance")}
                </p>
                <Link
                  href="tel:+97143333616"
                  className="group/phone flex items-center gap-4"
                >
                  <span dir="ltr" className="text-2xl md:text-3xl font-black text-white hover:text-white/80 transition-all">
                    +971 4 333 3616
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
