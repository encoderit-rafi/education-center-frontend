"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
  Clock,
  MapPin,
  Mail,
  Phone,
  LucideIcon,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import WaveDivider from "./wave-divider";
import { SECONDARY_NAV } from "@/data";
import { usePrimaryNav } from "@/hooks/use-primary-nav";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function ContactItem({
  icon: Icon,
  value,
  copyText,
}: {
  icon: LucideIcon;
  value: React.ReactNode;
  copyText: string;
}) {
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
      <Icon className="size-4 text-primary shrink-0 transition-transform group-hover/item:scale-110" />
      <span className="text-xs font-medium leading-snug flex-1">{value}</span>
    </div>
  );
}

export default function Footer() {
  const { primaryNav, isLoading } = usePrimaryNav();

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
    { label: "Blogs", href: "/blogs" },
    { label: "Public Holidays", href: "/public-holidays" },
  ];

  const socialLinks = [
    { icon: "facebook", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "pinterest", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "whatsapp", href: "#" },
    { icon: "telegram", href: "#" },
  ];

  return (
    <footer className="relative w-full text-white overflow-hidden bg-secondary ">
      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* Column 1: Info Card */}
          <div className="p-6 rounded-lg relative z-10 bg-white hover:bg-white h-fit">
            <Link
              href="/"
              className="inline-block mb-6 transition-transform hover:scale-105 duration-300"
            >
              <Image
                alt="TEPTH Logo"
                height={100}
                width={180}
                src="/images/tepth-logo.png"
                className="h-auto w-40"
              />
            </Link>
            <div className="space-y-5">
              <ContactItem
                icon={Clock}
                copyText="Saturday to Thursday (9:00 AM - 9:00 PM)"
                value={
                  <>
                    Working Hours:
                    <br />
                    Saturday to Thursday
                    <br />
                    (9:00 AM - 9:00 PM)
                  </>
                }
              />
              <ContactItem
                icon={MapPin}
                copyText={`The Exam Preparation & Testing House L.L.C \n Suite 701, 7th Floor, Tabarak Tower, Corniche Road, Al Mamzar, Sharjah, United Arab Emirates.`}
                value={
                  <>
                    Our Address:
                    <br />
                    The Exam Preparation & Testing House L.L.C
                    <br />
                    Suite 701, 7th Floor, Tabarak Tower, Corniche Road,
                    <br />
                    Al Mamzar, Sharjah, United Arab Emirates.
                  </>
                }
              />
              <ContactItem
                icon={Mail}
                copyText="info@tepth.org"
                value="Email. info@tepth.org"
              />

              <ContactItem
                icon={Phone}
                copyText="+97165531250"
                value="Tel. +97165531250"
              />
            </div>
            {/* <div className="bg-white p-4 rounded-2xl space-y-4 border border-slate-100">

                <div className="h-px bg-red-200/50" />


                <div className="h-px bg-red-200/50" />
              </div> */}
          </div>

          {/* Column 2: Our Services (Navbar Links) */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              Our Services
            </h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <div className="flex flex-col gap-y-4">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-5 w-3/4 bg-white/10 animate-pulse rounded-md"
                    />
                  ))}
                </div>
              ) : (
                [...primaryNav, ...SECONDARY_NAV]
                  .filter((nav) => nav.name.toLowerCase() !== "home")
                  .map((nav) => (
                    <div key={nav.name}>
                      {nav.type === "dropdown" ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-gray-100 hover:text-white transition-all hover:translate-x-1 group outline-none text-left w-full">
                            <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                              <ChevronRight className="w-6 h-6" />
                            </span>
                            <span className="flex-1">{nav.name}</span>
                            <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-red-500 transition-transform group-data-[state=open]:rotate-180" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            side="bottom"
                            align="start"
                            className="bg-secondary border-white/10! text-white min-w-55 p-2 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 z-[60]"
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
                                  {item.name}
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
                          {nav.name}
                        </Link>
                      )}
                    </div>
                  ))
              )}
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              Useful Link
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
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: News & Updates */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">
              News & Updates
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
                    {link.label}
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
              Copyright © 2026 by The Exam Preparation & Testing House LLC.
            </p>
            <p className="mt-1 text-xs text-gray-200">
              All trademarks and logos appearing on the site are the property of
              their respective owners.
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
                  {social.icon === "linkedin" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === "pinterest" && (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
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
                      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
