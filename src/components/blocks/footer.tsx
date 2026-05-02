"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

function ContactItem({
  icon,
  value,
  copyText,
}: {
  icon: React.ReactNode;
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
      className="flex items-start gap-4 text-gray-600 transition-colors cursor-pointer group/item"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 group-hover/item:bg-red-100 transition-colors">
        {copied ? (
          <span className="material-symbols-outlined text-sm font-bold">check</span>
        ) : (
          icon
        )}
      </span>
      <div className="pt-1.5 text-sm font-medium leading-relaxed flex-1">
        {value}
      </div>
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
    { label: "Book an Exam Venue", href: "/book-an-exam-venue" },
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
    <footer className="relative w-full text-white overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Column 1: Info Card */}
          <Card className="w-full rounded-2xl bg-white p-2 border-none shadow-2xl relative group overflow-visible">
            <CardContent className="p-8 relative z-10">
              <Link
                href="/"
                className="inline-block mb-8 transition-transform hover:scale-105 duration-300"
              >
                <Image
                  alt="TEPTH Logo"
                  height={80}
                  width={200}
                  src="/images/tepth-logo.png"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="space-y-5">
                <ContactItem
                  icon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  }
                  copyText="Tabarak Tower, Suite 701, 7th Floor, Corniche Rd - AL Mamzar - Sharjah"
                  value={<span className="leading-relaxed">Tabarak Tower, Suite 701, 7th Floor, Corniche Rd - AL Mamzar - Sharjah</span>}
                />
                <ContactItem
                  icon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  }
                  copyText="info@tepth.net"
                  value={<span>info@tepth.net</span>}
                />
                <ContactItem
                  icon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  }
                  copyText="+97143333616"
                  value={<span>+97143333616</span>}
                />


              </div>
            </CardContent>
            {/* Subtle shadow glow */}
            <div className="absolute inset-0 bg-red-900/10 blur-3xl rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>

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
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all hover:translate-x-1 group"
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
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all hover:translate-x-1 group"
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

      {/* Bottom Section */}
      <div className="relative">
        <div className="bg-[#000000] py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Top row: Socials */}
            <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-10 gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <span className="text-xs sm:text-sm text-white/80 uppercase tracking-[0.2em] font-bold">
                  Follow Us
                </span>
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.icon}
                      href={social.href}
                      className="transition-all hover:scale-110 hover:shadow-xl active:scale-95 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
                        {social.icon === "facebook" && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8E1010]">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        )}
                        {social.icon === "instagram" && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#8E1010] fill-none stroke-[2]">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        )}
                        {social.icon === "twitter" && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8E1010]">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        )}
                        {social.icon === "linkedin" && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8E1010]">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                        {social.icon === "pinterest" && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8E1010]">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.164 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 11.995 0z" />
                          </svg>
                        )}
                        {social.icon === "youtube" && (
                          <div className="flex flex-col items-center leading-none">
                            <span className="text-[8px] sm:text-[10px] font-bold text-[#8E1010] -mb-0.5">
                              You
                            </span>
                            <div className="bg-[#8E1010] px-1 rounded-[3px]">
                              <span className="text-[8px] sm:text-[10px] font-bold text-white">
                                Tube
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/10" />

            {/* Bottom row: Copyright */}
            <div className="py-8 md:py-10 text-center px-4">
              <p className="text-white/60 text-sm sm:text-sm font-medium tracking-wide leading-relaxed">
                © 2024-2026 by The Exam Preparation & Testing House FZCO. <br className="sm:hidden" /> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
