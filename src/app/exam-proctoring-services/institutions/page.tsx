import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserRound, Eye, MonitorUp, Mic2, Flag, Building2, MapPin, BadgeCheck } from "lucide-react";

export default function InstitutionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-primary/10 selection:text-primary font-body">
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[800px] flex items-center overflow-hidden py-24">
                    <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                Institution Partner Solutions
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-on-background leading-[1.1] mb-8 font-headline animate-in fade-in slide-in-from-bottom-6 duration-1000">
                                Advanced Proctoring <br />
                                <span className="text-primary italic">Solutions</span> for Institutions
                            </h1>
                            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                Secure your academic integrity with TEPTH's state-of-the-art surveillance and proctoring ecosystem. Designed for the most rigorous certification and entrance examinations.
                            </p>
                            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                <Link
                                    href="/contact-us"
                                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center shadow-lg shadow-primary/20"
                                >
                                    Partner with TEPTH
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="/our-venues"
                                    className="bg-surface-container text-primary px-8 py-4 rounded-lg font-bold text-lg border-2 border-transparent hover:border-primary transition-all"
                                >
                                    View Facility Specs
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative h-full min-h-[500px] animate-in fade-in zoom-in duration-1000">
                            <div className="absolute inset-0 bg-primary-container rounded-3xl -rotate-3 translate-x-4 translate-y-4 opacity-10"></div>
                            <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAly2NQEKEMjNp19oYRn6Pplii-bo-UVKTOUQr2nV9fkl2V8RxGWvTBxMxytVvWKtU6vw1JkgEqrcQfytgEB-hL6IW8DGRLy2EK8eYr3oFv4NDlCHG7JmvE5uEWizF1mULLy5xfiakIinOBZHSjxUUJ5-jOZUA6G5fMiJcKEPpeWLslQbCHynD3g0FFVp3L2APel0eofOe9OjAHM4W345bfjnNJD6duwv63XAd4oHrALUPOyoR0rvAl6ewgqYZuxMBTKrhSMMNyGngi"
                                    alt="Modern examination hall"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 z-30 p-8 backdrop-blur-xl bg-white/40 rounded-2xl shadow-xl max-w-[280px] border border-white/20">
                                <div className="flex items-center gap-4 mb-2">
                                    <ShieldCheck className="text-primary w-8 h-8" />
                                    <div className="font-bold text-2xl text-primary">99.9%</div>
                                </div>
                                <div className="text-sm font-semibold text-on-background">System Uptime & Proctoring Accuracy</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Proctoring Tech Bento Grid */}
                <section className="py-24 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-on-background mb-4 font-headline">Proprietary AI Proctoring Technology</h2>
                            <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">Multimodal intelligence layers designed to detect and deter academic misconduct in real-time.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Large Feature */}
                            <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group border border-outline/5">
                                <div className="max-w-md">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <UserRound className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-headline">Facial Recognition & Verification</h3>
                                    <p className="text-on-surface-variant leading-relaxed">Continuous biometric monitoring throughout the session to ensure the candidate's identity remains consistent, using high-resolution neural network validation.</p>
                                </div>
                                <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar py-2">
                                    <span className="bg-surface px-4 py-2 rounded-lg text-sm font-bold border border-outline-variant text-primary whitespace-nowrap">Liveness Detection</span>
                                    <span className="bg-surface px-4 py-2 rounded-lg text-sm font-bold border border-outline-variant text-primary whitespace-nowrap">Multi-face Alert</span>
                                    <span className="bg-surface px-4 py-2 rounded-lg text-sm font-bold border border-outline-variant text-primary whitespace-nowrap">ID Authentication</span>
                                </div>
                            </div>
                            {/* Small Features */}
                            <div className="bg-surface-container-high rounded-2xl p-8 flex flex-col group hover:bg-primary transition-all duration-500 cursor-default">
                                <Eye className="w-8 h-8 mb-4 text-primary group-hover:text-white transition-colors" />
                                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors font-headline">Behavioral Analysis</h3>
                                <p className="text-sm text-on-surface-variant group-hover:text-white/80 transition-colors">AI identifies suspicious eye movements, head turns, or unexpected presence of secondary individuals.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 flex flex-col group hover:shadow-lg transition-all border border-outline/5 hover:border-primary/20">
                                <MonitorUp className="w-8 h-8 mb-4 text-primary" />
                                <h3 className="text-xl font-bold mb-2 font-headline">Screen Monitoring</h3>
                                <p className="text-sm text-on-surface-variant">Lockdown browser tech prevents navigation away from the exam environment while recording all on-screen activity.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 flex flex-col group hover:shadow-lg transition-all border border-outline/5 hover:border-primary/20">
                                <Mic2 className="w-8 h-8 mb-4 text-primary" />
                                <h3 className="text-xl font-bold mb-2 font-headline">Audio Analysis</h3>
                                <p className="text-sm text-on-surface-variant">Intelligent noise filtration detects whispering, unauthorized speech, or hidden audio devices during assessments.</p>
                            </div>
                            <div className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xl shadow-primary/20 group">
                                <Flag className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2 font-headline">Real-time Flagging</h3>
                                <p className="text-sm text-white/80 leading-relaxed">Immediate notifications to human proctors for intervention within 5 seconds of an anomaly detection.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facility Standards */}
                <section className="py-24 overflow-hidden bg-background">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl font-black mb-12 leading-tight font-headline text-on-surface">
                                    World-Class <br />
                                    <span className="text-primary underline decoration-4 underline-offset-8">Facility Standards</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { num: "01", title: "140 High-Performance Workstations", desc: "Equipped with dual-monitor setups and ergonomic seating for peak performance." },
                                        { num: "02", title: "Climate Controlled Environments", desc: "Precision temperature and humidity regulation to ensure candidate comfort and hardware stability." },
                                        { num: "03", title: "Acoustic Excellence", desc: "Sound-dampening architectural design to eliminate external noise distractions." },
                                        { num: "04", title: "Universal Accessibility", desc: "Full POD compliant facilities including ramps, adjustable desks, and assistive technology." }
                                    ].map((std, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                {std.num}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1 font-headline text-on-surface">{std.title}</h4>
                                                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">{std.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVewTGBvzDp4cTDAriE0NQG0jDHV57Be-ylXzOXY_8evaGNlcu2MeRfBxEPWB0sJDdekuQgB16087xa7cNh0rDo5CbEgUqcbMLTveuU0n0bcEPsifnr8WAYDgjDGMf6_BjxLhXbypKO4nt3Chp-_Z3YfEHnicHX7cmhgIheJROIt06aTFBugZ2__n3iHFzj_4sYTF3XoLigOMQTXAxDzDMzflx8HjYrbll6WFS573krE_3EZjMBMXJxIju9yibF3BIIlDQjmhlzgiR"
                                            alt="Modern classroom interior"
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-lg h-64 mt-8">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoe-lA_pVALE6b0Kn5WIRkMT1GmvrvmY-dAe5RW7eY-TRZAyeaYuoJzOTkUQpE_hoOq9peokdQwn55smbS4doal4gEdIBsQcC0olE9XZcp5tWjwWHCSvwfrEphs3xuFZoBwMBkyGEG65SArrrki7fOGpTLisd8Px4R8NGZ9qg1x9vNCe2bpHAYxEySygvW2e_CH55U6eIB1cebATdrPP4dezb3CiiKk0W2PM514oudTEDfZE-iCMzZAat0HxeKubMjwey0qS43iOEN"
                                            alt="Professional office space"
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Licensing & Accreditation */}
                <section className="py-24 bg-secondary text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                    <div className="max-w-7xl mx-auto px-8 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                            <div className="md:w-1/3">
                                <h2 className="text-4xl font-black mb-6 font-headline leading-tight">Certified Excellence</h2>
                                <p className="text-white/60 text-lg leading-relaxed">Our operations are fully licensed and regularly audited by the region's leading educational and regulatory authorities.</p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                {[
                                    { icon: "account_balance", title: "KHDA License", desc: "Authorized Educational Provider" },
                                    { icon: "location_city", title: "DSOA Authority", desc: "Dubai Silicon Oasis Operations" },
                                    { icon: "verified", title: "ISO Certified", desc: "Information Security Management" }
                                ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-primary transition-all duration-300">
                                    {item.icon === "account_balance" ? <Building2 className="w-12 h-12 mb-6 text-primary group-hover:text-white transition-colors" /> :
                                     item.icon === "location_city" ? <MapPin className="w-12 h-12 mb-6 text-primary group-hover:text-white transition-colors" /> :
                                     <BadgeCheck className="w-12 h-12 mb-6 text-primary group-hover:text-white transition-colors" />}
                                        <div className="font-bold text-xl mb-2 font-headline">{item.title}</div>
                                        <div className="text-sm text-white/50 group-hover:text-white/80 transition-colors font-medium">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-5xl mx-auto px-8">
                        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
                            {/* Decor */}
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-black/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-5xl font-black mb-8 font-headline leading-tight">Partner with TEPTH for <br />Secure Assessments</h2>
                                <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">Join a network of leading institutions who trust our academic atelier for their most critical examination needs.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link
                                        href="/contact-us"
                                        className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-xl hover:bg-surface-container-low transition-all active:scale-95 shadow-xl shadow-black/10"
                                    >
                                        Contact Us Now
                                    </Link>
                                    <button className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95">
                                        Request Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
