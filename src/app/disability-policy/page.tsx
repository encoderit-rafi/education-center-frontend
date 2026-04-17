import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
    Accessibility,
    BrainCircuit,
    Speech,
    Users,
    Wrench,
    ShieldAlert,
    GraduationCap
} from "lucide-react";

const SUPPORT_SERVICES = [
    { icon: <Users className="w-5 h-5" />, text: "Guidance officers" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Support teachers (literacy and numeracy)" },
    { icon: <Speech className="w-5 h-5" />, text: "Speech-language pathologists" },
    { icon: <BrainCircuit className="w-5 h-5" />, text: "Behavior support trainers" },
    { icon: <Accessibility className="w-5 h-5" />, text: "Teacher aides" },
    { icon: <Wrench className="w-5 h-5" />, text: "Assistive technology" },
];

export default function DisabilityPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Campus"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6 text-left">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]",
                            "font-heading"
                        )}>
                            Disability <br />
                            <span className="italic text-[#A11D1D]">Policy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                            Creating an accommodating environment that enables everyone to participate fully in mainstream scholastic life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Statement Section */}
            <section className="py-24 border-b border-gray-100">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-6">Our Commitment</h2>
                        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-8">
                            "TEPTH aims to create an environment that enables disabled faculty staff and students to realize their individual potential."
                        </p>
                        <div className="w-20 h-1 bg-[#A11D1D] mx-auto" />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Scope & Services */}
                        <div className="lg:col-span-7 space-y-16">
                            <div className="prose prose-slate prose-lg max-w-none">
                                <h3 className="text-3xl font-black text-gray-900 font-heading tracking-tight mb-6">Scope & Coverage</h3>
                                <p>
                                    This disability policy states TEPTH’s commitments and responsibilities under UAE legislation and its goal to ensure an inclusively supportive environment for people with a disability that are participating in work and study at The Exam Preparation and Testing House.
                                </p>
                                <p>
                                    This policy applies to all teaching staff and students of TEPTH. Some faculty staff of TEPTH has specific responsibilities in reference to the implementation of this disability policy.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-12 rounded-sm border border-gray-100">
                                <h3 className="text-2xl font-black text-gray-900 font-heading mb-8">Support Services & Resources</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {SUPPORT_SERVICES.map((service, index) => (
                                        <div key={index} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#A11D1D] group-hover:text-white transition-all shadow-sm">
                                                {service.icon}
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{service.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-8 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 italic leading-relaxed">
                                        Other interventions include alternative format materials, differentiated teaching practices, special provisions for assessment, and customized study programs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Criteria & Security */}
                        <aside className="lg:col-span-5 space-y-8">
                            <div className="bg-[#111827] text-white p-12 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A11D1D] opacity-10 blur-3xl -mr-16 -mt-16" />
                                <h3 className="text-2xl font-black mb-8 font-heading tracking-tight">Disability Criteria for Enrollment</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    We do not need a formal diagnosis. Evidence-based information is sufficient for us to respond to learning requirements.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Total or partial loss of body parts",
                                        "Malfunction or disfigurement",
                                        "Disturbed behavior affecting judgment",
                                        "Physical weakness prone to illness",
                                        "Disorder affecting learning capacity"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                            <span className="text-[#A11D1D] font-black mt-0.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border border-red-100 bg-red-50/30 p-8 rounded-sm">
                                <div className="flex items-center gap-3 mb-4 text-[#A11D1D]">
                                    <ShieldAlert className="w-6 h-6" />
                                    <h4 className="font-black uppercase tracking-widest text-xs">Anti-Discrimination</h4>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                    TEPTH will take severe action against any incident of direct/indirect harassment or bullying based on disability. Strictly prohibited behavior will not be tolerated.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Action Plan Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading tracking-tighter mb-4">Strategic Action Plan</h2>
                        <p className="text-gray-500 max-w-2xl">The most integral aspect of our policy for continual performance improvement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Ensure academic integrity meets international standards.",
                            "Modify activities for satisfactory access.",
                            "Support career and academic goal pursuit.",
                            "Maintain reliability of merit principles.",
                            "Negotiate reasonable adjustment working plans.",
                            "Ensure opportunities for consultation.",
                            "Respond immediately to harassment allegations."
                        ].map((plan, index) => (
                            <div key={index} className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-100 hover:border-[#A11D1D] transition-all group">
                                <span className="text-4xl font-black text-gray-100 group-hover:text-[#A11D1D]/10 transition-colors block mb-4">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-sm font-bold text-gray-900 leading-relaxed uppercase tracking-tight">
                                    {plan}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container px-6 mx-auto text-center">
                    <p className="text-gray-400 mb-6">Need a consultation or more information?</p>
                    <a
                        href="mailto:info@tepth.net"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#111827] text-white font-black text-xs uppercase tracking-[0.2em] rounded-none hover:bg-[#A11D1D] transition-all"
                    >
                        Contact Administration
                    </a>
                </div>
            </section>
        </div>
    );
}
