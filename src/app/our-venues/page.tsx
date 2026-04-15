"use client";

import { useState } from "react";
import Link from "next/link";

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
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0uhLyklKIzZM0ZSqv8iCO4JbHXKFbha76pI9f3dsTBzTS1wNlG0_nn4yMWFmQ8ROHKPmuJNkC5FPRMR_9o8K4Jj3e8jRUnOf8ehrZmwV6EcbujMH_-n4dGA6qyQEU7l4yL0m8J4gGnNjch0GyMDSdFTUn0CkqUP9XbVCoyzb2CRJ_SsYexYXxwpunQoUDRvEnVUcudGFD1kM38vFvpaSRlWlv_8t2iA4sOq0dtHfxVe7BzAD5t0O1Z-Pdoby40vJ7BT7Y8yjYbOgSg",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWXHdGau6iQlOeNEwykCuBlbJdgCSo6dr42jSl07i2PrRSUOPBTZBmGz4Qphc85krPG2OLI7CPeVnFcpbX4JCP1A26rekjgiF7KlL0J4soKE5174DgdSg48QZf8OWCQbzJjfvB6WmXaEZ1lN5BbotXPGn9m8Xi7CCeQAWt0-DlBcYYMjtBXRG4tYjAnqBGm3sqEA_1VSxmQr-VZLFvGcgyFmxgsxErMLbCRFfwA1oiO770wbKw4s7-LKL5cSmc4bns5PyDrtAmLcFC",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHpmVML5-gGfYKi5pLJ0PYp8J_yW4p1mOliSIEUUohUiYnxbnjIkYnuv3HTEkUrW-evfbexnzvYobLE-RrsIVVI2uAr1oFuKEHdps-p-AUcsFnVgiUmFjOKpiKBZjiOmMz3gG0eZeCXccsOuoauX3RffwdYJhkbG8fbG6rAEWnqHxt8PU8AqAjRoM56aOF_S33zNEySCj9jMwg7N7HPwFDcnUVmUGHDGSJPTHeWasXfoX_qifVGQVlhFOPqNrPU-T6YXo9PDB3FC6_",
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
      {/* ── Hero Banner ── */}
      <section className="relative crimson-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-white/40 text-sm">chevron_right</span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Our Venues</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                3 UAE Locations
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight">
                Our <span className="italic">Venues</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                State-of-the-art testing and preparation centres across the UAE — designed so you can focus entirely on performing your best.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-2xl mb-1 block" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  <p className="text-2xl font-headline font-extrabold leading-none">{s.value}</p>
                  <p className="text-white/70 text-[10px] font-semibold tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue Selector + Detail ── */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Venue Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {venues.map((v) => (
              <button
                key={v.id}
                id={`venue-tab-${v.id}`}
                onClick={() => { setActiveVenueId(v.id); setActiveTab("overview"); }}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-2xl border font-headline font-bold text-sm transition-all cursor-pointer ${
                  activeVenueId === v.id
                    ? "crimson-gradient text-white border-transparent shadow-xl"
                    : "bg-white text-secondary border-outline/20 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <span
                  className="material-symbols-outlined text-lg shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <span className="text-left leading-tight">{v.name}</span>
              </button>
            ))}
          </div>

          {/* Venue Detail Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-outline/10 overflow-hidden">
            {/* Featured image */}
            <div className="relative w-full aspect-[21/7] overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 bg-white text-primary text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{venue.badgeIcon}</span>
                  {venue.badge}
                </span>
              </div>

              {/* Capacity + Rooms */}
              <div className="absolute bottom-5 left-5 flex gap-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-center">
                  <p className="text-xl font-headline font-extrabold">{venue.capacity}</p>
                  <p className="text-[9px] font-semibold tracking-widest uppercase text-white/70">Capacity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-center">
                  <p className="text-xl font-headline font-extrabold">{venue.rooms.split(" ")[0]}</p>
                  <p className="text-[9px] font-semibold tracking-widest uppercase text-white/70">Rooms</p>
                </div>
              </div>
            </div>

            {/* Inner tab bar */}
            <div className="border-b border-outline/10 px-8">
              <div className="flex gap-0">
                {(["overview", "tour", "map"] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    id={`detail-tab-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-6 py-4 text-xs font-extrabold tracking-widest uppercase border-b-2 transition-all cursor-pointer ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-on-surface-variant hover:text-secondary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {tab === "overview" ? "info" : tab === "tour" ? "360" : "map"}
                    </span>
                    {tab === "tour" ? "Virtual Tour" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Contact info */}
                  <div className="space-y-5">
                    <h2 className="text-xs font-extrabold text-primary tracking-widest uppercase">Contact & Hours</h2>
                    {[
                      { icon: "location_on", text: venue.address },
                      { icon: "phone", text: venue.phone },
                      { icon: "mail", text: venue.email },
                      { icon: "schedule", text: venue.hours },
                    ].map(({ icon, text }) => (
                      <div key={icon} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 crimson-gradient text-white font-headline font-bold px-5 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-shadow mt-2"
                    >
                      Get Directions
                      <span className="material-symbols-outlined text-sm">near_me</span>
                    </Link>
                  </div>

                  {/* Tests available */}
                  <div className="space-y-5">
                    <h2 className="text-xs font-extrabold text-primary tracking-widest uppercase">Tests Available</h2>
                    <div className="flex flex-wrap gap-2">
                      {venue.tests.map((t) => (
                        <span key={t} className="inline-flex items-center px-3 py-1.5 bg-red-50 text-primary text-[10px] font-extrabold tracking-widest uppercase rounded-full border border-red-100">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      All tests administered by certified examiners in full compliance with official testing body protocols.
                    </p>
                  </div>

                  {/* Venue features */}
                  <div className="space-y-5">
                    <h2 className="text-xs font-extrabold text-primary tracking-widest uppercase">Venue Features</h2>
                    <ul className="space-y-3">
                      {venue.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "tour" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>360</span>
                    <div>
                      <p className="text-sm font-bold text-secondary">360° Virtual Tour</p>
                      <p className="text-xs text-on-surface-variant">Explore {venue.name} from your browser. Use your mouse or touch to look around.</p>
                    </div>
                  </div>
                  {/* Virtual tour video player (using a real embed-friendly placeholder) */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-outline/10 bg-secondary">
                    {/* We embed the map as the tour stand-in since we don't have a 360 tour URL */}
                    <iframe
                      title={`Virtual tour of ${venue.name}`}
                      src={venue.tourEmbed}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Play overlay (visual only — clicking will interact with iframe) */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 flex items-center gap-2">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>360</span>
                        <span className="text-white text-xs font-bold tracking-widest uppercase">Interactive View</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant text-center">
                    Want a personal walkthrough? <Link href="/contact-us" className="text-primary font-bold hover:underline">Contact us</Link> to schedule an in-person visit.
                  </p>
                </div>
              )}

              {activeTab === "map" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                      <div>
                        <p className="text-sm font-bold text-secondary">{venue.name}</p>
                        <p className="text-xs text-on-surface-variant">{venue.address}</p>
                      </div>
                    </div>
                    <a
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(venue.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest uppercase hover:gap-3 transition-all"
                    >
                      Open in Google Maps
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                  <div className="w-full aspect-video rounded-2xl overflow-hidden border border-outline/10 shadow-sm">
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

      {/* ── World-Class Facilities ── */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Why Our Venues</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight mb-4">
              Purpose-Built for Peak Performance
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Every detail of our testing environments is engineered to help you concentrate, stay comfortable, and perform at your highest level on test day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-6 border border-outline/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {f.icon}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">{f.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book a Test CTA ── */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto crimson-gradient rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <span
              className="material-symbols-outlined text-5xl mx-auto block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              event_available
            </span>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
              Ready to book your test?
            </h3>
            <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
              Secure your seat at your nearest TEPTH venue. Available dates fill fast — don't miss yours.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-a-test"
                className="bg-white text-primary font-headline font-bold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
              >
                Book a Test <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/free-consultation"
                className="bg-transparent text-white font-headline font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors shadow-sm border-solid"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
