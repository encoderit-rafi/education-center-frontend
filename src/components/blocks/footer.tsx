"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe,
  LucideIcon,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import WaveDivider from "./wave-divider";
import { INSTITUTIONS_INFO, SECONDARY_NAV } from "@/data";
import { usePrimaryNav } from "@/hooks/use-primary-nav";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslations, useLocale } from "next-intl";

function ContactItem({
  icon: Icon,
  value,
  copyText,
}: {
  icon: LucideIcon;
  value: React.ReactNode;
  copyText: string;
}) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      navigator.clipboard.writeText(copyText);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-start gap-3 text-primary hover:opacity-80 transition-all cursor-pointer group/item"
    >
      <Icon className="size-4 text-primary shrink-0 transition-transform group-hover/item:scale-110 mt-0.5" />
      <span className="text-xs font-medium leading-snug flex-1">
        {value}
      </span>
    </div>
  );
}

export default function Footer() {
  const { primaryNav, isLoading } = usePrimaryNav();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("Footer");
  const tMenu = useTranslations("NavBar.menu");

  const translateMenuName = (name: string) => {
    try {
      return tMenu.has(name) ? tMenu(name) : name;
    } catch {
      return name;
    }
  };

  const usefulLinks = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQs", href: "/faqs" },
    { label: "Download Forms", href: "/download-forms" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disability Policy", href: "/disability-policy" },
    { label: "Facilities", href: "/facilities" },
    { label: "Book an Exam Venue", href: "our-venues/book-an-exam-venue" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Career", href: "/career" },
  ];

  const newsUpdates = [
    { label: "Events", href: "/events" },
    { label: "Public Holidays", href: "/public-holidays" },
  ];

  const socialLinks = [
    { icon: "facebook", href: "https://www.facebook.com/share/1DVJYA8wvM" },
    { icon: "instagram", href: "https://www.instagram.com/tepth_sharjah/" },
    { icon: "twitter", href: "https://x.com/Tepthshj" },
    { icon: "tiktok", href: "https://www.tiktok.com/@tepthshj" },
    { icon: "upscrolled", href: "https://share.upscrolled.com/en/user/9486951e-5272-404b-82d8-f9d939192661/" },
    { icon: "youtube", href: "https://www.youtube.com/@Tepthuae" },
    { icon: "whatsapp", href: "https://wa.me/971555688035" },
    { icon: "telegram", href: "https://t.me/tepth" },
  ];

  return (
    <footer className="relative w-full text-white overflow-hidden bg-secondary">
      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* Column 1: Info Card */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className="p-6 rounded-lg relative z-10 bg-white hover:bg-white h-fit"
          >
            <div className="flex justify-start mb-6" dir="ltr">
              <Link
                href="/"
                className="inline-block transition-transform hover:scale-105 duration-300"
              >
                <Image
                  alt="TEPTH Logo"
                  height={100}
                  width={180}
                  src="/images/tepth-logo.png"
                  className="h-auto w-40"
                />
              </Link>
            </div>
            <div className="space-y-5">
              <ContactItem
                icon={Clock}
                copyText={`${t("workingHoursDays")} ${t("workingHoursTime")}`}
                value={
                  <>
                    {t("workingHoursLabel")}
                    <br />
                    {t("workingHoursDays")}
                    <br />
                    {t("workingHoursTime")}
                  </>
                }
              />
              <ContactItem
                icon={MapPin}
                copyText={t("addressText")}
                value={
                  <>
                    {t("addressLabel")}
                    <br />
                    {t("addressText").split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </>
                }
              />
              <ContactItem
                icon={Mail}
                copyText={INSTITUTIONS_INFO.email}
                value={`${t("emailLabel")} ${INSTITUTIONS_INFO.email}`}
              />

              <ContactItem
                icon={Phone}
                copyText={INSTITUTIONS_INFO.phone}
                value={`${t("telLabel")} ${INSTITUTIONS_INFO.phone}`}
              />

              <ContactItem
                icon={Globe}
                copyText="www.tepth.org"
                value={`${t("webLabel", { defaultValue: "الموقع الإلكتروني:" })} www.tepth.org`}
              />
            </div>
          </div>

          {/* Column 2: Our Services (Navbar Links) */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              {t("ourServices")}
            </h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <div className="flex flex-col gap-y-4">
              {[...primaryNav, ...SECONDARY_NAV]
                .filter((nav) => nav.name.toLowerCase() !== "home")
                .map((nav) => (
                  <div key={nav.name}>
                    {nav.type === "dropdown" && nav.items.length > 0 ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-gray-100 hover:text-white transition-all hover:translate-x-1 group outline-none text-left w-full">
                          <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                          </span>
                          <span className="flex-1">{translateMenuName(nav.name)}</span>
                          <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-red-500 transition-transform group-data-[state=open]:rotate-180" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          side="bottom"
                          align="start"
                          className="bg-secondary border-white/10! text-white min-w-55 p-2 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 z-60"
                        >
                          {nav.items.map((item) => (
                            <DropdownMenuItem
                              key={item.name}
                              asChild
                              className="focus:bg-red-500/10 focus:text-white rounded-lg cursor-pointer outline-none"
                            >
                              <Link
                                href={item.href}
                                className="flex items-center gap-2 w-full px-2 py-2 text-sm font-medium text-gray-200 hover:text-white group"
                              >
                                <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                                  <ChevronRight className="w-6 h-6" />
                                </span>
                                {translateMenuName(item.name)}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={nav.href || "#"}
                        className="flex items-center gap-2 text-sm font-medium text-gray-100 hover:text-white transition-all hover:translate-x-1 group"
                      >
                        <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                          <ChevronRight className="w-6 h-6" />
                        </span>
                        {translateMenuName(nav.name)}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              {t("usefulLinks")}
            </h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <ul className="grid grid-cols-1 gap-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-100 hover:text-white transition-all hover:translate-x-1 group"
                  >
                    <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </span>
                    {t("links." + link.label, { defaultValue: link.label })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: News & Updates */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              {t("newsUpdates")}
            </h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <ul className="space-y-3">
              {newsUpdates.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-100 hover:text-white transition-all hover:translate-x-1 group"
                  >
                    <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </span>
                    {t("links." + link.label, { defaultValue: link.label })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="relative z-10 bg-secondary">
        <WaveDivider className="text-primary" />
        <div className="bg-primary pb-12 -mt-1">
          <div className="container mx-auto px-4 py-8 text-center lg:px-8">
            <p className="text-xs text-gray-100 font-medium">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="mt-1 text-xs text-gray-200">
              {t("trademarks")}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  aria-label={
                    social.icon.charAt(0).toUpperCase() + social.icon.slice(1)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full  text-white/90 transition-all duration-300  hover:bg-white/90 hover:text-primary hover:scale-110 active:scale-95"
                >
                  {social.icon === "facebook" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.icon === "tiktok" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  )}
                  {social.icon === "upscrolled" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 1010 1132"
                    >
                      <path d="m 608.76804,279.78564 c 21.52742,0 42.51979,2.28179 62.79616,6.51488 V 0 H 0 V 335.78369 C 0,501.96813 120.85254,639.59886 279.39695,666.46093 V 279.78564 h 329.37109" />
                      <path d="m 671.5642,286.30052 v 49.48317 c 0,185.44582 -150.33784,335.77584 -335.78366,335.77584 -19.25351,0 -38.01132,-1.98279 -56.38359,-5.0986 v 464.57677 l 192.6295,-239.65772 h 136.74159 c 168.88327,0 305.79795,-136.90684 305.79795,-305.79639 0,-147.34795 -104.24588,-270.31233 -243.00179,-299.28307" />
                      <path d="m 671.5642,335.78368 v -49.48316 c -20.27637,-4.23309 -41.26874,-6.51488 -62.79616,-6.51488 H 279.39695 v 386.67529 c 18.37227,3.11581 37.13008,5.0986 56.38359,5.0986 185.44582,0 335.78366,-150.33002 335.78366,-335.77584" />
                    </svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                  {social.icon === "whatsapp" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  )}
                  {social.icon === "telegram" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.25-5.59 3.69-.53.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.6-1.5 4.35-1.76 4.84-1.77.11 0 .35.03.5.16.12.1.16.24.18.33.02.09.03.26.02.4z" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
