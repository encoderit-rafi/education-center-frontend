import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Clock,
    MapPin,
    CheckCircle,
    Video,
    Users,
    Phone,
    Mail
} from "lucide-react";

const AGENDA_ITEMS = [
    "CELPIP Basics",
    "Why Choose CELPIP?",
    "Test Format, Scoring, and Strategies (With sample responses)",
    "Test Preparation Materials",
    "Key Test Strategies",
    "Tips for dealing with test questions",
    "Question and Answer session (FAQs)"
];

export default function EventsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[55vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Events"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]",
                            "font-heading"
                        )}>
                            Events & <br />
                            <span className="italic text-[#A11D1D]">Training.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            Empowering your academic journey through expert-led information sessions and immersive technical workshops.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Event Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="relative aspect-auto min-h-[700px] lg:aspect-[21/9] overflow-hidden bg-white shadow-3xl border border-gray-100 rounded-sm">
                        {/* 1. Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/hero-student.png"
                                alt="CELPIP Training"
                                fill
                                className="object-cover object-[20%_center] opacity-40 lg:opacity-60"
                            />
                        </div>

                        {/* 2. Large Diagonal Red Shapes (The "Glue") */}
                        {/* Top Left Shape */}
                        <div
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-black via-[#450a0a] to-transparent z-10 opacity-90"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 0 50%)' }}
                        />
                        <div
                            className="absolute top-0 left-0 w-2/3 h-1/2 bg-[#A11D1D] z-20 opacity-80"
                            style={{ clipPath: 'polygon(0 0, 60% 0, 0 100%)' }}
                        />

                        {/* Bottom Right Shape */}
                        <div
                            className="absolute bottom-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-tl from-[#7f1d1d] via-[#A11D1D] to-[#A11D1D] z-10"
                            style={{ clipPath: 'polygon(100% 20%, 100% 100%, 0 100%, 40% 100%)' }}
                        />
                        <div
                            className="absolute bottom-0 right-0 w-full lg:w-1/2 h-3/4 bg-[#A11D1D] z-20"
                            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                        />

                        {/* 3. Main Content Grid (Overlays) */}
                        <div className="relative z-30 h-full w-full grid grid-cols-1 lg:grid-cols-12 items-center p-8 lg:p-16">

                            {/* LEFT: Branding & Agenda */}
                            <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                                {/* Branding Hook */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-yellow-500">
                                                <path d="M12 2L10 9L3 11L10 13L12 20L14 13L21 11L14 9L12 2Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-black text-gray-800 tracking-widest uppercase font-heading">CELPIP</h4>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="text-4xl lg:text-7xl font-black text-blue-900 leading-[0.9] tracking-tighter">
                                            FREE INFO <br /> SESSION
                                        </h2>
                                        <p className="text-lg lg:text-xl font-bold text-gray-700 pt-2">
                                            Feb 13, 2026 | 6:00 PM - 8:00 PM
                                        </p>
                                    </div>
                                </div>

                                {/* Integrated Agenda */}
                                <div className="max-w-xl bg-white/40 backdrop-blur-md p-8 border border-white/20 rounded-sm">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A11D1D] mb-6">Workshop Highlights</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {AGENDA_ITEMS.slice(0, 6).map((item, index) => (
                                            <div key={index} className="flex items-start gap-3 group">
                                                <CheckCircle className="w-4 h-4 text-[#A11D1D] shrink-0 mt-0.5" />
                                                <span className="text-[11px] font-bold text-gray-800 leading-tight uppercase tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Registration Form */}
                            <div className="lg:col-span-12 xl:col-span-5 flex justify-end">
                                <div className="w-full max-w-md bg-[#111827] text-white p-10 lg:p-14 shadow-2xl relative overflow-hidden border border-white/5">
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black mb-1 font-heading tracking-tight underline decoration-[#A11D1D] decoration-4 underline-offset-8">Register Now</h3>
                                        <p className="text-gray-400 text-[10px] mb-10 uppercase tracking-[0.2em] font-bold">Secure your session entry</p>

                                        <form className="space-y-5">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">Full Name:*</Label>
                                                <Input className="bg-white/5 border-white/10 rounded-none h-12 text-[13px] focus:border-[#A11D1D] focus:ring-[#A11D1D]" placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">Mobile No:*</Label>
                                                <Input className="bg-white/5 border-white/10 rounded-none h-12 text-[13px] focus:border-[#A11D1D] focus:ring-[#A11D1D]" placeholder="+971 -- --- ----" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">Email Address:*</Label>
                                                <Input className="bg-white/5 border-white/10 rounded-none h-12 text-[13px] focus:border-[#A11D1D] focus:ring-[#A11D1D]" placeholder="email@example.com" />
                                            </div>

                                            <Button className="w-full h-16 bg-[#A11D1D] hover:bg-white hover:text-black transition-all rounded-none font-black text-xs uppercase tracking-[0.3em] mt-4">
                                                Join Session
                                            </Button>
                                        </form>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#A11D1D]/20 blur-[80px] -mr-16 -mt-16" />
                                </div>
                            </div>
                        </div>

                        {/* 4. Bottom Branding Footer (within poster) */}
                        <div className="absolute bottom-0 left-0 w-full z-40 flex items-end justify-between px-8 lg:px-16 pb-8 pointer-events-none">
                            {/* TEPTH Logo area */}
                            <div
                                className="bg-white px-8 py-4 flex items-center shadow-lg pointer-events-auto"
                                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
                            >
                                <div className="relative w-32 h-14">
                                    <Image
                                        src="/images/tepth-logo.png"
                                        alt="TEPTH Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Contact Support info area */}
                            <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-10 text-white pointer-events-auto pb-4">
                                <div className="flex items-center gap-3 group">
                                    <Phone className="w-4 h-4 text-white" />
                                    <span className="text-sm font-black tracking-tight drop-shadow-md">04 333 3616</span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <Mail className="w-4 h-4 text-white" />
                                    <span className="text-sm font-black tracking-tight drop-shadow-md uppercase">info@tepth.net</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Events Placeholder */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl font-black font-heading tracking-tighter mb-4 text-gray-200">Other Upcoming Events</h2>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
                        Stay tuned for more information sessions coming soon including TOEFL iBT workshops and PTE-A training weeks.
                    </p>
                </div>
            </section>
        </div>
    );
}
