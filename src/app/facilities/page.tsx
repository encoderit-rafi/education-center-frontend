import Image from "next/image";
import { cn } from "@/lib/utils";
import { Monitor, Sofa, BellOff, Zap, ShieldCheck, Microscope } from "lucide-react";

const FACILITIES = [
    {
        title: "Quiet Classrooms",
        description: "Purpose-built, sound-insulated learning spaces designed to eliminate distractions and foster deep focus.",
        icon: <BellOff className="w-6 h-6" />,
    },
    {
        title: "Modern Equipment",
        description: "High-specification hardware and industry-standard software to facilitate seamless test performance and practice.",
        icon: <Monitor className="w-6 h-6" />,
    },
    {
        title: "Comfortable Environment",
        description: "Ergonomically furnished spaces that prioritize learner comfort, reducing physical strain during long study sessions.",
        icon: <Sofa className="w-6 h-6" />,
    },
    {
        title: "High-Speed Infrastructure",
        description: "Enterprise-grade connectivity ensuring that online registrations and digital practice tests run without interruption.",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Stress-Free Atmosphere",
        description: "A welcoming, professional environment designed to keep anxiety low during critical test preparation periods.",
        icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
        title: "Testing Lab",
        description: "Dedicated testing stations configured to replicate official exam conditions for maximum preparation efficacy.",
        icon: <Microscope className="w-6 h-6" />,
    },
];

export default function FacilitiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[65vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Facilities"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.95]",
                            "font-heading"
                        )}>
                            World-Class <br />
                            <span className="italic text-[#A11D1D]">Facilities.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                            A purpose-built ecosystem designed to empower learners with the environment and technology they need to excel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Belief Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-24 h-1 bg-[#A11D1D] shrink-0 hidden md:block" />
                        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                            TEPTH believes in offering quality education. We provide a comfortable environment and modern equipment so students can perform in a <span className="text-[#A11D1D]">stress-free environment.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FACILITIES.map((facility, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white p-10 rounded-sm border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-[#A11D1D] transition-all" />
                                
                                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                                    <div className="text-gray-400 group-hover:text-[#A11D1D] transition-colors">
                                        {facility.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">
                                    {facility.title}
                                </h3>
                                
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Callout */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="Infrastructure Close-up"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#A11D1D]/90 mix-blend-multiply" />
                </div>
                
                <div className="container relative z-10 px-6 mx-auto text-center">
                    <h2 className={cn(
                        "text-4xl md:text-6xl font-black text-white tracking-tighter mb-8",
                        "font-heading"
                    )}>
                        Designed for <br /> Focus & Performance.
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-20 h-2 bg-white" />
                    </div>
                </div>
            </section>

            {/* Experience Detail */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-black text-gray-900 font-heading tracking-tighter mb-8">
                                Furnished to <br /> <span className="text-[#A11D1D]">Facilitate Learning.</span>
                            </h3>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Our classrooms are not just rooms; they are quiet hubs of intellectual activity. Every chair, table, and lighting fixture has been selected to minimize fatigue and maximize cognitive output.
                                </p>
                                <p>
                                    For students preparing for high-stakes exams, we provide the exact technology stack they will encounter on test day, ensuring that physical equipment never becomes a barrier to performance.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video lg:aspect-square bg-gray-100 overflow-hidden rounded-sm">
                            <Image
                                src="/images/about-us/infrastructure-center.png"
                                alt="Modern Testing Equipment"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
