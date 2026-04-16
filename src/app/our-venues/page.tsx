"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const venues = [
  {
    id: "abu-dhabi-main",
    name: "Abu Dhabi – Main Campus",
    address: "Level 3, Tower B, Al Bateen Executive Airport Area, Abu Dhabi, UAE",
    phone: "+971 2 123 4567",
    email: "abudhabi@tepth.ae",
    hours: "Sun – Thu: 8:00 AM – 8:00 PM",
    badge: "Flagship",
    badgeIcon: "star",
    capacity: "240",
    rooms: "12 Testing Rooms",
    image: "/images/about-us/infrastructure-center.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7948621826657!2d54.35476927492266!3d24.45023677872042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665e9a7d6bcf%3A0x4b9d0d6e7a4a0c3d!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1681000000000!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7948621826657!2d54.35476927492266!3d24.45023677872042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665e9a7d6bcf%3A0x4b9d0d6e7a4a0c3d!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1681000000000!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "TOEFL", "OET", "CELPIP", "CAEL"],
    features: ["Soundproofed testing pods", "High-speed fibre internet", "Biometric check-in", "Disability-friendly access"],
  },
  {
    id: "dubai-bur",
    name: "Dubai – Bur Dubai Centre",
    address: "Suite 801, Oud Metha Tower, Bur Dubai, Dubai, UAE",
    phone: "+971 4 987 6543",
    email: "dubai@tepth.ae",
    hours: "Sun – Thu: 8:00 AM – 9:00 PM",
    badge: "Extended Hours",
    badgeIcon: "schedule",
    capacity: "180",
    rooms: "9 Testing Rooms",
    image: "/images/about-us/vision-map.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0484126440234!2d55.30747397493774!3d25.26102707756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b23a44c0a1%3A0x0!2sBur%20Dubai!5e0!3m2!1sen!2sae!4v1681000000001!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0484126440234!2d55.30747397493774!3d25.26102707756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b23a44c0a1%3A0x0!2sBur%20Dubai!5e0!3m2!1sen!2sae!4v1681000000001!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "TOEFL", "OET"],
    features: ["Evening testing slots", "Metro-accessible location", "Free parking", "Prayer room on-site"],
  },
  {
    id: "sharjah",
    name: "Sharjah – University City Hub",
    address: "Block 7, University City Road, Sharjah, UAE",
    phone: "+971 6 555 0101",
    email: "sharjah@tepth.ae",
    hours: "Sun – Thu: 9:00 AM – 7:00 PM",
    badge: "Student Friendly",
    badgeIcon: "school",
    capacity: "120",
    rooms: "6 Testing Rooms",
    image: "/images/about-us/experience-student.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3214821660636!2d55.51234567493774!3d25.33456789756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c0d6e9e9a41%3A0x0!2sSharjah!5e0!3m2!1sen!2sae!4v1681000000002!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3214821660636!2d55.51234567493774!3d25.33456789756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c0d6e9e9a41%3A0x0!2sSharjah!5e0!3m2!1sen!2sae!4v1681000000002!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "CELPIP"],
    features: ["Student lounge", "On-campus shuttle access", "Printing & study resources", "Affordable prep packages"],
  },
];

const stats = [
  { icon: "location_on", value: "3", label: "UAE Locations" },
  { icon: "people", value: "540+", label: "Daily Test Capacity" },
  { icon: "verified", value: "6", label: "Accredited Tests" },
  { icon: "emoji_events", value: "50K+", label: "Students Tested" },
];

const facilities = [
  { icon: "wifi", title: "High-Speed Internet", desc: "Dedicated fibre lines ensure zero latency for computer-based tests." },
  { icon: "headphones", title: "Soundproof Booths", desc: "Acoustically engineered pods eliminate distractions during listening tests." },
  { icon: "accessibility", title: "Accessible Design", desc: "Wheelchair ramps, hearing loops, and extended-time rooms at every venue." },
  { icon: "local_parking", title: "Ample Parking", desc: "Free or validated parking at all three locations for test-day convenience." },
  { icon: "lock", title: "Secure Environment", desc: "Biometric check-in, CCTV monitoring, and strict ID verification protocols." },
  { icon: "air", title: "Climate Controlled", desc: "Individually regulated temperature in every room so you can focus fully." },
];

type TabType = "overview" | "tour" | "map";

export default function OurVenues() {
  const [activeVenueId, setActiveVenueId] = useState(venues[0].id);
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const venue = venues.find((v) => v.id === activeVenueId)!;

  return (
    <main className="pt-24 bg-background">
      {/* ── Hero Section ── */}
      <section className="max-w-7xl mx-auto px-8 pt-12 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-end">
          <div className="flex-1">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-on-surface-variant/70 hover:text-primary text-xs font-semibold tracking-widest uppercase transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">chevron_right</span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">Our Venues</span>
            </nav>

            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block font-headline">
              Our Campus Locations
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold text-secondary tracking-tighter leading-[0.9] mb-10 font-headline">
              The TEPTH <br />
              <span className="text-primary italic">Academic Atelier.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-medium">
              Step into an environment engineered for intellectual excellence.
              Our venues are designed to provide the focus and clarity required
              for high-stakes academic preparation.
            </p>
          </div>
          
          <div className="w-full lg:w-1/3 aspect-square bg-surface-container-high rounded-3xl overflow-hidden relative shadow-2xl group">
            <img
              src="/images/about-us/infrastructure-center.png"
              alt="TEPTH Modern Interior"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply" />
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-outline/10 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {s.icon}
              </span>
              <div>
                <p className="text-3xl font-headline font-extrabold text-secondary leading-none">{s.value}</p>
                <p className="text-on-surface-variant/70 text-[10px] font-bold tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Virtual Tour Section ── */}
      <section className="bg-surface-container-low py-24 mb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
                360° TEPTH Virtual Tour
              </h2>
              <p className="text-on-surface-variant text-lg">
                Explore our world-class facilities from the comfort of your home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                id: "suite-703",
                name: "Suite 703",
                subtitle: "The Executive Learning Center",
                image: "/images/about-us/vision-hero.png",
              },
              {
                id: "suite-308",
                name: "Suite 308",
                subtitle: "The Collaborative Studio",
                image: "/images/about-us/mission-student.png",
              },
            ].map((tour) => (
              <div
                key={tour.id}
                className="group relative bg-surface rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-md p-6 rounded-full text-primary flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-headline font-extrabold text-secondary">{tour.name}</h3>
                      <p className="text-on-surface-variant font-medium">{tour.subtitle}</p>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/btn">
                      Explore
                      <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Venue Selection + Detail ── */}
      <section className="py-24 px-8 border-t border-outline/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Select Location</h2>
            <div className="flex flex-wrap gap-4">
              {venues.map((v) => (
                <button
                  key={v.id}
                  onClick={() => { setActiveVenueId(v.id); setActiveTab("overview"); }}
                  className={cn(
                    "px-8 py-3 rounded-full font-headline font-bold text-sm transition-all shadow-sm border",
                    activeVenueId === v.id
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-secondary border-outline/20 hover:border-primary/40"
                  )}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {/* Venue Detail Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-outline/5 overflow-hidden">
            {/* Featured image */}
            <div className="relative w-full aspect-[21/9] lg:aspect-[21/6] overflow-hidden group">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-8 left-8">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-primary text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full shadow-xl border border-white/50">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{venue.badgeIcon}</span>
                  {venue.badge}
                </span>
              </div>

              {/* Capacity + Rooms */}
              <div className="absolute bottom-8 left-8 flex gap-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 text-white">
                  <p className="text-2xl font-headline font-extrabold leading-none">{venue.capacity}</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mt-1">Capacity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 text-white">
                  <p className="text-2xl font-headline font-extrabold leading-none">{venue.rooms.split(" ")[0]}</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mt-1">Testing Rooms</p>
                </div>
              </div>
            </div>

            {/* Inner tab bar */}
            <div className="border-b border-outline/5 px-10 bg-surface-bright">
              <div className="flex gap-8">
                {(["overview", "tour", "map"] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "flex items-center gap-2 px-2 py-6 text-[11px] font-extrabold tracking-widest uppercase border-b-2 transition-all relative",
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-on-surface-variant/60 hover:text-secondary"
                    )}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {tab === "overview" ? "info" : tab === "tour" ? "360" : "map"}
                    </span>
                    {tab === "tour" ? "Virtual Tour" : tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left-full duration-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-10 lg:p-14">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                  {/* Contact info */}
                  <div className="space-y-8">
                    <h2 className="text-[11px] font-extrabold text-primary tracking-[0.2em] uppercase">Contact & Directions</h2>
                    <div className="space-y-6">
                      {[
                        { icon: "location_on", text: venue.address },
                        { icon: "phone", text: venue.phone },
                        { icon: "mail", text: venue.email },
                        { icon: "schedule", text: venue.hours },
                      ].map(({ icon, text }) => (
                        <div key={icon} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                          </div>
                          <p className="text-on-surface-variant text-[15px] leading-relaxed font-medium pt-2">{text}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-3 bg-secondary text-white font-headline font-bold px-8 py-4 rounded-2xl text-sm shadow-xl hover:bg-primary transition-all mt-4 group"
                    >
                      Get Directions
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">near_me</span>
                    </Link>
                  </div>

                  {/* Tests available */}
                  <div className="space-y-8">
                    <h2 className="text-[11px] font-extrabold text-primary tracking-[0.2em] uppercase">Official Lab Status</h2>
                    <div className="flex flex-wrap gap-2.5">
                      {venue.tests.map((t) => (
                        <span key={t} className="inline-flex items-center px-4 py-2 bg-surface-container text-secondary text-[11px] font-bold tracking-wider uppercase rounded-xl border border-outline/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed font-medium italic opacity-80">
                      "All testing environments at {venue.name} are optimized for maximum concentration and security."
                    </p>
                    <div className="p-6 bg-surface-container-low rounded-2xl border border-outline/5">
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Authorized by international testing bodies for computer-based and paper-based examinations.
                      </p>
                    </div>
                  </div>

                  {/* Venue features */}
                  <div className="space-y-8">
                    <h2 className="text-[11px] font-extrabold text-primary tracking-[0.2em] uppercase">Premium Amenities</h2>
                    <ul className="space-y-4">
                      {venue.features.map((f) => (
                        <li key={f} className="flex items-start gap-4 text-[15px] text-on-surface-variant font-medium group">
                          <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "tour" && (
                <div className="space-y-8 animate-in fade-in duration-700">
                  <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-[2rem] border border-outline/5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>360</span>
                    </div>
                    <div>
                      <p className="text-lg font-headline font-extrabold text-secondary">Interactive Venue Explorer</p>
                      <p className="text-sm text-on-surface-variant">Experience {venue.name} in high-definition virtual reality.</p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-outline/5 shadow-inner bg-secondary">
                    <iframe
                      title={`Virtual tour of ${venue.name}`}
                      src={venue.tourEmbed}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}

              {activeTab === "map" && (
                <div className="space-y-8 animate-in fade-in duration-700">
                  <div className="flex items-center justify-between flex-wrap gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                      </div>
                      <div>
                        <p className="text-lg font-headline font-extrabold text-secondary">{venue.name}</p>
                        <p className="text-sm text-on-surface-variant">{venue.address}</p>
                      </div>
                    </div>
                    <a
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(venue.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-primary font-extrabold text-[12px] tracking-[0.2em] uppercase hover:gap-4 transition-all"
                    >
                      Open in Google Maps
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  </div>
                  <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden border border-outline/5 shadow-inner">
                    <iframe
                      title={`Map of ${venue.name}`}
                      src={venue.mapEmbed}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Facilities Grid (Editorial Feel) ── */}
      <section className="max-w-7xl mx-auto px-8 mb-24 pt-24 border-t border-outline/10">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The TEPTH Advantage</h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">
            Infrastructure Engineered for Success
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "location_on",
              title: "Downtown Campus",
              desc: "Centrally located for easy access with public transport links and premium parking.",
            },
            {
              icon: "wifi",
              title: "Fiber Connectivity",
              desc: "Redundant high-speed fiber lines ensuring zero interruption during digital exams.",
            },
            {
              icon: "verified_user",
              title: "Secure & Proctored",
              desc: "Full biometric security and international standard proctoring protocols.",
            },
          ].map((f) => (
            <div key={f.title} className="p-10 bg-surface-container-high rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                {f.icon}
              </span>
              <h4 className="text-2xl font-headline font-extrabold text-secondary mb-3">{f.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Book Exam Venue CTA ── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-primary rounded-[2rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48" />
          </div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tight mb-6">
              Ready to secure your future?
            </h2>
            <p className="text-white/80 text-xl font-medium mb-0 leading-relaxed">
              Our venues are officially certified for international exams.
              Experience the TEPTH standard in comfort and technology.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="/book-a-test"
              className="inline-block bg-white text-primary px-10 py-5 rounded-2xl font-headline font-extrabold text-lg shadow-xl hover:bg-surface-bright transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              Book an Exam Venue
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
