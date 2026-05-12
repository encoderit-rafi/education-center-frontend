"use client";

import {
    UserRound,
    Eye,
    MonitorUp,
    Mic2,
    Flag,
    Building2,
    MapPin,
    BadgeCheck,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const AI_TECH = [
    {
        title: "Facial Recognition & Identification",
        desc: "Confirms the student's identity at the start and throughout the exam to prevent impersonation.",
        icon: <UserRound className="w-5 h-5" />,
    },
    {
        title: "Behavioral Analysis",
        desc: "Detects unusual movements, such as looking away from the screen, leaving the seat, or other people entering the room.",
        icon: <Eye className="w-5 h-5" />,
    },
    {
        title: "Screen & Browser Monitoring",
        desc: "Tracks tab-switching, prevents opening unauthorized websites, and can lock down the browser.",
        icon: <MonitorUp className="w-5 h-5" />,
    },
    {
        title: "Audio Analysis",
        desc: "Scans the environment for background noise, voices, or potential cheating sounds.",
        icon: <Mic2 className="w-5 h-5" />,
    },
    {
        title: "Real-time Flagging",
        desc: "Automatically records and highlights suspicious activities for review, allowing for immediate intervention or post-exam analysis.",
        icon: <Flag className="w-5 h-5" />,
    }
];

const FACILITIES = [
    { title: "140 Workstations", desc: "Dual-monitor setups with ergonomic seating." },
    { title: "Climate Controlled", desc: "Precision temperature for comfort and stability." },
    { title: "Acoustic Excellence", desc: "Sound-dampening design to eliminate distractions." },
    { title: "Full Accessibility", desc: "POD compliant including assistive technology." }
];

export default function InstitutionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fafafa]">
            {/* 1. Minimal Header */}
            <header className="bg-white border-b border-gray-100 py-16">
                <div className="container px-6 mx-auto lg:px-24">
                    <div className="max-w-4xl">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-3 block">Institution Partner Solutions</span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase leading-none mb-6">
                            ADVANCED <span className="text-[#A11D1D]">PROCTORING</span>
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                            Secure your academic integrity with TEPTH&apos;s state-of-the-art surveillance and proctoring ecosystem. Designed for the most rigorous certification examinations.
                        </p>
                    </div>
                </div>
            </header>

            <main className="container px-6 mx-auto lg:px-24 py-16 space-y-16">

                {/* 2. AI Technology Grid */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">AI Proctoring</h2>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Key Features and Functions</p>
                        </div>
                        <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
                    </div>

                    <div className="max-w-4xl mb-12">
                        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                            AI proctoring uses artificial intelligence—machine learning, facial recognition, and behavioral analytics—to monitor online exams via webcam, microphone, and screen activity. It flags suspicious behaviors like moving off-screen, multiple faces, or tab-switching in real-time, providing a cost-effective, scalable alternative to human invigilators. One of the key benefits is scalability: AI can easily oversee hundreds or thousands of exams simultaneously, making it an efficient solution for large institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {AI_TECH.map((tech, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-[#A11D1D]/20 hover:shadow-md transition-all group">
                                <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#A11D1D] group-hover:text-white transition-all">
                                    {tech.icon}
                                </div>
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-2">{tech.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">{tech.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            To enquire about our services, please contact us by phone at <span className="text-[#A11D1D] font-bold">+971 4 333 3616</span> or by email at <span className="text-[#A11D1D] font-bold underline">info@tepth.net</span> for more information. Our team is available to discuss your needs, provide details, pricing and assist with any questions.
                        </p>
                    </div>
                </section>

                {/* 3. Facilities & Partnership Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT: Facility Standards (7 cols) */}
                    <div className="lg:col-span-7 bg-[#111827] p-10 rounded-xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A11D1D]/10 blur-[100px] rounded-full"></div>
                        <h2 className="text-xl font-black uppercase tracking-tight mb-10 flex items-center gap-3 relative z-10 text-white">
                            <div className="w-2 h-8 bg-[#A11D1D]"></div>
                            Facility Standards
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            {FACILITIES.map((fac, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#A11D1D] group-hover:bg-[#A11D1D] group-hover:text-white transition-all shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-white uppercase tracking-wide mb-1">{fac.title}</h3>
                                        <p className="text-xs text-white/50 leading-relaxed font-medium">{fac.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Partnership CTA (5 cols) */}
                    <div className="lg:col-span-5 bg-[#A11D1D] p-10 rounded-xl text-white shadow-xl flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-xl font-black uppercase tracking-tight mb-6">Partner With TEPTH</h2>
                            <p className="text-sm font-medium text-white/80 leading-relaxed mb-8">
                                Join a network of leading global institutions who trust our academic atelier for their most critical examination needs.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {["Secure API Integrations", "Custom Reporting Panels", "Regional Market Access"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="w-4 h-4 text-white" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link
                            href="/contact-us"
                            className="w-full bg-white text-[#A11D1D] py-4 rounded-lg font-black text-sm uppercase tracking-widest text-center hover:bg-gray-100 transition-all active:scale-95"
                        >
                            Request Partnership
                        </Link>
                    </div>
                </div>

                {/* 4. Accreditation Bar */}
                <section className="bg-white border border-gray-100 rounded-xl p-10 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-xs">
                            <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Certified Excellence</h2>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed">Fully licensed and regularly audited by regional educational authorities.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
                            {[
                                { icon: <Building2 className="w-5 h-5" />, title: "KHDA License", sub: "Authorized Provider" },
                                { icon: <MapPin className="w-5 h-5" />, title: "DSOA Authority", sub: "Dubai Silicon Oasis" },
                                { icon: <BadgeCheck className="w-5 h-5" />, title: "ISO Certified", sub: "Information Security" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:bg-red-50 group-hover:text-[#A11D1D] transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-black text-gray-900 uppercase tracking-tight">{item.title}</div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
