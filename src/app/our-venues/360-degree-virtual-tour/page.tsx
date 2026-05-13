"use client";

import { useState } from "react";
import {
  Star,
  Clock,
  GraduationCap,
  Users,
  BadgeCheck,
  Trophy,
  MapPin,
  Wifi,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CampusGallery } from "@/components/blocks/campus-gallery";

const venues: {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  badge: string;
  badgeIcon: LucideIcon;
  capacity: string;
  rooms: string;
  image: string;
  tourEmbed: string;
  mapEmbed: string;
  tests: string[];
  features: string[];
}[] = [
  {
    id: "abu-dhabi-main",
    name: "Abu Dhabi – Main Campus",
    address:
      "Level 3, Tower B, Al Bateen Executive Airport Area, Abu Dhabi, UAE",
    phone: "+971 2 123 4567",
    email: "abudhabi@tepth.ae",
    hours: "Sun – Thu: 8:00 AM – 8:00 PM",
    badge: "Flagship",
    badgeIcon: Star,
    capacity: "240",
    rooms: "12 Testing Rooms",
    image: "/images/about-us/infrastructure-center.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7948621826657!2d54.35476927492266!3d24.45023677872042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665e9a7d6bcf%3A0x4b9d0d6e7a4a0c3d!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1681000000000!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7948621826657!2d54.35476927492266!3d24.45023677872042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665e9a7d6bcf%3A0x4b9d0d6e7a4a0c3d!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1681000000000!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "TOEFL", "OET", "CELPIP", "CAEL"],
    features: [
      "Soundproofed testing pods",
      "High-speed fibre internet",
      "Biometric check-in",
      "Disability-friendly access",
    ],
  },
  {
    id: "dubai-bur",
    name: "Dubai – Bur Dubai Centre",
    address: "Suite 801, Oud Metha Tower, Bur Dubai, Dubai, UAE",
    phone: "+971 4 987 6543",
    email: "dubai@tepth.ae",
    hours: "Sun – Thu: 8:00 AM – 9:00 PM",
    badge: "Extended Hours",
    badgeIcon: Clock,
    capacity: "180",
    rooms: "9 Testing Rooms",
    image: "/images/about-us/vision-map.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0484126440234!2d55.30747397493774!3d25.26102707756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b23a44c0a1%3A0x0!2sBur%20Dubai!5e0!3m2!1sen!2sae!4v1681000000001!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0484126440234!2d55.30747397493774!3d25.26102707756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b23a44c0a1%3A0x0!2sBur%20Dubai!5e0!3m2!1sen!2sae!4v1681000000001!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "TOEFL", "OET"],
    features: [
      "Evening testing slots",
      "Metro-accessible location",
      "Free parking",
      "Prayer room on-site",
    ],
  },
  {
    id: "sharjah",
    name: "Sharjah – University City Hub",
    address: "Block 7, University City Road, Sharjah, UAE",
    phone: "+971 6 555 0101",
    email: "sharjah@tepth.ae",
    hours: "Sun – Thu: 9:00 AM – 7:00 PM",
    badge: "Student Friendly",
    badgeIcon: GraduationCap,
    capacity: "120",
    rooms: "6 Testing Rooms",
    image: "/images/about-us/experience-student.png",
    tourEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3214821660636!2d55.51234567493774!3d25.33456789756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c0d6e9e9a41%3A0x0!2sSharjah!5e0!3m2!1sen!2sae!4v1681000000002!5m2!1sen!2sae",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3214821660636!2d55.51234567493774!3d25.33456789756397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c0d6e9e9a41%3A0x0!2sSharjah!5e0!3m2!1sen!2sae!4v1681000000002!5m2!1sen!2sae",
    tests: ["IELTS", "PTE", "CELPIP"],
    features: [
      "Student lounge",
      "On-campus shuttle access",
      "Printing & study resources",
      "Affordable prep packages",
    ],
  },
];

const stats = [
  // { icon: MapPin, value: "3", label: "UAE Locations" },
  { icon: Users, value: "540+", label: "Daily Test Capacity" },
  { icon: BadgeCheck, value: "6", label: "Accredited Tests" },
  { icon: Trophy, value: "50K+", label: "Students Tested" },
];

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Dedicated fibre lines ensure zero latency for computer-based tests.",
  },
  {
    icon: "headphones",
    title: "Soundproof Booths",
    desc: "Acoustically engineered pods eliminate distractions during listening tests.",
  },
  {
    icon: "accessibility",
    title: "Accessible Design",
    desc: "Wheelchair ramps, hearing loops, and extended-time rooms at every venue.",
  },
  {
    icon: "local_parking",
    title: "Ample Parking",
    desc: "Free or validated parking at all three locations for test-day convenience.",
  },
  {
    icon: "lock",
    title: "Secure Environment",
    desc: "Biometric check-in, CCTV monitoring, and strict ID verification protocols.",
  },
  {
    icon: "air",
    title: "Climate Controlled",
    desc: "Individually regulated temperature in every room so you can focus fully.",
  },
];

type TabType = "overview" | "tour" | "map";

export default function OurVenues() {
  const [activeVenueId, setActiveVenueId] = useState(venues[0].id);
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const venue = venues.find((v) => v.id === activeVenueId)!;

  return (
    <main className=" bg-background">
      {/* <div className="w-full h-screen">
        <iframe
          src="https://my.matterport.com/show/?m=MkSss1iWkLp"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div> */}
      {/* ── Hero Section ── */}
      {/* <section className="max-w-7xl mx-auto px-8 pt-12 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-end">
          <div className="flex-1">
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

        <div className="grid grid-cols-3 gap-6 mt-20 border-t border-outline/10 pt-12 ">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={cn(
                "space-y-2 w-fit justify-self-center first:justify-self-start last:justify-self-end",
              )}
            >
              <s.icon className="text-primary w-8 h-8" />
              <div>
                <p className="text-3xl font-headline font-extrabold text-secondary leading-none">
                  {s.value}
                </p>
                <p className="text-on-surface-variant/70 text-[10px] font-bold tracking-widest uppercase mt-1">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── Virtual Tour Section ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
                360° TEPTH Virtual Tour
              </h2>
              <p className="text-on-surface-variant text-lg">
                Explore our world-class facilities from the comfort of your
                home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12">
            <iframe
              src="https://my.matterport.com/show/?m=J3Go7kFamvE"
              className="w-full aspect-video rounded-3xl border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CampusGallery />

      {/* ── Venue Selection + Detail ── */}

      {/* ── Facilities Grid (Editorial Feel) ── */}
      <section className="max-w-7xl mx-auto px-8 mb-24 pt-24 border-t border-outline/10">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            The TEPTH Advantage
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">
            Infrastructure Engineered for Success
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "Downtown Campus",
              desc: "Centrally located for easy access with public transport links and premium parking.",
            },
            {
              icon: Wifi,
              title: "Fiber Connectivity",
              desc: "Redundant high-speed fiber lines ensuring zero interruption during digital exams.",
            },
            {
              icon: ShieldCheck,
              title: "Secure & Proctored",
              desc: "Full biometric security and international standard proctoring protocols.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-10 bg-surface-container-high rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1 border border-[#E5E7EB]/40 hover:border-[#991B1B]/30"
            >
              <f.icon className="text-primary w-10 h-10 mb-6 block" />
              <h4 className="text-2xl font-headline font-extrabold text-secondary mb-3">
                {f.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
