"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Clock, MapPin, Mail, Phone, LucideIcon } from "lucide-react";
import WaveDivider from "./wave-divider";

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
      <Icon className="w-5 h-5 text-primary shrink-0 transition-transform group-hover/item:scale-110" />
      <span className="text-sm font-medium leading-snug flex-1">{value}</span>
    </div>
  );
}

export default function Footer() {
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
  ];

  return (
    <footer className="relative w-full text-white overflow-hidden bg-secondary">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Column 1: Info Card */}
          <div className="p-8 md:p-10 rounded-lg relative z-10 bg-white hover:bg-white">
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
                copyText="The Exam Preparation & Testing House L.L.C, Suite 701, 7th Floor, Tabarak Tower, Corniche Road, Al Mamzar, Sharjah, United Arab Emirates."
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

          {/* Column 2: Useful Links */}
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
                      <span className="material-symbols-outlined text-xs">
                        arrow_forward_ios
                      </span>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: News & Updates */}
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
                      <span className="material-symbols-outlined text-xs">
                        arrow_forward_ios
                      </span>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <WaveDivider className="text-primary" />
      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 py-8 text-center lg:px-8">
          <p className="text-xs text-gray-500 font-medium">
            Copyright © 2026 by The Exam Preparation & Testing House FZCO.
          </p>
          <p className="mt-1 text-xs text-gray-600">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
