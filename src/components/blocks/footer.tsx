import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const usefulLinks = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQs", href: "/faqs" },
    { label: "Download Forms", href: "/download-forms" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disability Policy", href: "/disability-policy" },
    { label: "Facilities", href: "/facilities" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Career", href: "/career" },
  ];

  const newsUpdates = [
    { label: "Events", href: "/events" },
    { label: "Blogs", href: "/blogs" },
    { label: "Public Holidays", href: "/public-holidays" },
    { label: "Agent Login", href: "/agent-login" },
    { label: "Agent Registration", href: "/agent-registration" },
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
    <footer className="relative w-full bg-[#111827] text-white overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Column 1: Info Card */}
          <div className="relative group">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl relative z-10">
              <Link href="/" className="inline-block mb-10 transition-transform hover:scale-105 duration-300">
                <Image
                  alt="TEPTH Logo"
                  height={100}
                  width={180}
                  src="/images/tepth-logo.png"
                  className="h-auto w-40"
                />
              </Link>

              <div className="space-y-6">
                <a href="mailto:info@tepth.net" className="flex items-center gap-4 group/link">
                  <span className="material-symbols-outlined text-red-700 font-bold">mail</span>
                  <span className="text-sm font-bold text-red-800 transition-colors group-hover/link:text-red-600">info@tepth.net</span>
                </a>

                <a href="tel:+97143333616" className="flex items-center gap-4 group/link">
                  <span className="material-symbols-outlined text-red-700 font-bold rotate-90">call</span>
                  <span className="text-sm font-bold text-red-800 transition-colors group-hover/link:text-red-600">+97143333616</span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-700 font-bold mt-0.5">location_on</span>
                  <p className="text-xs font-bold text-red-800 leading-relaxed uppercase tracking-tight">
                    Suite 703, Apricot Tower, Dubai<br />
                    Silicon Oasis, P.O.Box 300109,<br />
                    Dubai, United Arab Emirates.
                  </p>
                </div>
              </div>
            </div>
            {/* Subtle shadow glow */}
            <div className="absolute inset-0 bg-red-900/10 blur-3xl rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">Useful Link</h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <ul className="grid grid-cols-1 gap-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all hover:translate-x-1 group"
                  >
                    <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: News & Updates */}
          <div className="lg:pl-10">
            <h3 className="text-xl font-black uppercase tracking-wider mb-2">News & Updates</h3>
            <div className="w-14 h-1 bg-red-700 mb-8" />

            <ul className="space-y-3">
              {newsUpdates.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all hover:translate-x-1 group"
                  >
                    <span className="text-gray-500 scale-75 group-hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Red Section with Wave */}
      <div className="relative mt-12">

        <div className="bg-[#AD1010] py-12 px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <p className="text-white text-sm md:text-base font-medium">
                Copyright © 2024 by The Exam Preparation & Testing House FZCO.
              </p>
              <p className="text-white/70 text-[10px] md:text-xs">
                All trademarks and logos appearing on the site are the property of their respective owners.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  className="transition-all hover:scale-110 hover:shadow-xl group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    {social.icon === 'facebook' && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#8E1010]">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#8E1010] fill-none stroke-[2]">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#8E1010]">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#8E1010]">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social.icon === 'pinterest' && (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#8E1010]">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.164 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 11.995 0z" />
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[10px] font-bold text-[#8E1010] -mb-0.5">You</span>
                        <div className="bg-[#8E1010] px-1 rounded-[3px]">
                          <span className="text-[10px] font-bold text-white">Tube</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
