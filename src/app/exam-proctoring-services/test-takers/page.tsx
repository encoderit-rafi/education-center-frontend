"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, CheckCircle2, Monitor, Phone, Mail } from "lucide-react";

export default function TestTakers() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-primary/10 selection:text-primary font-body">
      <main className="relative">
        {/* Hero Section: Editorial & Asymmetric */}
        <section className="relative overflow-hidden py-24 px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 z-10">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
              Academic Integrity & Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-[1.05] mb-8 font-headline animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Secure & Professional <br />
              <span className="text-primary italic">Proctoring</span> for Candidates
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Experience world-class examination standards with TEPTH. We provide a distraction-free, highly monitored environment designed to help you succeed in your home institution's assessments.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Link
                href="/contact-us"
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
              >
                Book Your Exam
              </Link>
              <button className="text-primary font-bold px-8 py-4 flex items-center gap-2 group transition-all hover:translate-x-1">
                View Requirements
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="md:w-2/5 relative animate-in fade-in zoom-in duration-1000">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-surface-container-high rounded-full -z-10 opacity-50"></div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500 border border-outline/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9EWwnSnlZ7Z8DgnU12-rdKrKAFroH3-m5mPgTSDNuGpXqF9nw8FHMvDdgHNadyPIhbJSlvw0PtE9wU4u94o8dDNepMZyNeJqzyGHxV7L8IsHhAeZk4z_Q8X0HYttfVkikj_5WNhGYCBT6oRU7ksUAMKMahvj6h56YN4Vo52X1jP_fFLUxSfTHE9MGMuUTyWkazu1BoMNsNpLgnokCt0490vsVyX8KXHAjt4Uiu-3QwKok1JSgNj7rQBJotCcjakf0sl0cQ8effKNE"
                alt="Modern high-tech examination room"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </section>

        {/* On-site vs Online Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-on-background mb-4 font-headline">Flexible Proctoring Solutions</h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* On-site */}
              <div className="bg-surface p-12 rounded-xl flex flex-col gap-8 hover:shadow-xl transition-all duration-300 border border-outline/5">
               <div className="w-16 h-16 bg-surface-container-high rounded-lg flex items-center justify-center text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-headline text-on-surface">On-site Proctoring</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our physical testing centers offer a secure, quiet, and professional environment. Equipped with high-speed internet, premium workstations, and continuous surveillance, we ensure every test is conducted under optimal academic conditions.
                  </p>
                </div>
                 <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                    Distraction-free workstations
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                    Biometric identity verification
                  </li>
                </ul>
              </div>
              {/* Live Online */}
               <div className="bg-primary text-white p-12 rounded-xl flex flex-col gap-8 shadow-xl shadow-primary/20">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <Monitor className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-headline">Live Online Proctoring</h3>
                  <p className="text-white/80 leading-relaxed opacity-90">
                    Global flexibility meets local security. Our AI-enhanced live remote proctoring allows candidates to take their exams from anywhere in the world while maintaining the highest levels of integrity via real-time audiovisual monitoring.
                  </p>
                </div>
                 <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-white/60 w-4 h-4" />
                    Multi-cam desktop monitoring
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-white/60 w-4 h-4" />
                    Intelligent fraud detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proctoring Fees Table: Modular Grid */}
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-on-surface">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 font-headline">Proctoring Fees</h2>
              <p className="text-on-surface-variant font-medium">Transparent pricing tailored to your examination duration. All fees include basic administrative support and venue usage.</p>
            </div>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Valid for 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Short Duration", time: "Up to 60 Mins", price: "250" },
              { label: "Standard Duration", time: "61 - 120 Mins", price: "350" },
              { label: "Professional", time: "121 - 180 Mins", price: "425", special: true },
              { label: "Extended Duration", time: "181 - 240 Mins", price: "500" }
            ].map((fee, i) => (
              <div
                key={i}
                className={cn(
                  "p-8 rounded-xl flex flex-col justify-between transition-all duration-300 group cursor-default",
                  fee.special ? "bg-surface-container border-2 border-primary border-dashed" : "bg-surface-container-low hover:bg-primary hover:text-white border border-outline/5 hover:border-transparent group-hover:shadow-lg"
                )}
              >
                <span className={cn("text-sm font-bold opacity-60", fee.special && "text-primary")}>{fee.label}</span>
                <div className={cn("my-8")}>
                  <h4 className="text-lg font-bold font-headline">{fee.time}</h4>
                  <p className="text-5xl font-black mt-2 font-headline">
                    <span className="text-sm font-bold align-top mr-1">AED</span>
                    {fee.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rules & Requirements */}
        <section className="bg-surface py-24 px-8 border-y border-outline/5">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl font-extrabold tracking-tight mb-6 font-headline text-on-surface">Candidate <br />Code of Conduct</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed font-medium">To maintain absolute integrity, all candidates must adhere strictly to the following academic proctoring protocols.</p>
                <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-primary shadow-sm">
                  <p className="text-lg font-bold italic text-on-surface leading-tight">"Integrity is the essence of everything successful."</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { num: "01", title: "Early Arrival", desc: "Candidates are required to report to the testing venue at least 30 minutes prior to the scheduled start time for setup and verification." },
                { num: "02", title: "Valid Identification", desc: "A valid government-issued photo ID (Passport or Emirates ID) is mandatory. Digital copies or expired IDs will not be accepted." },
                { num: "03", title: "Institutional Rules", desc: "Candidates must abide by all specific rules and regulations established by their home institution in addition to TEPTH center policies." },
                { num: "04", title: "Prohibited Items", desc: "Mobile phones, smartwatches, and all electronic devices are strictly prohibited inside the testing hall and must be stored in designated lockers." }
              ].map((rule, i) => (
                <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">{rule.num}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-3 font-headline text-on-surface">{rule.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-medium">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section: High Impact */}
        <section className="py-24 px-8">
          <div className="max-w-screen-xl mx-auto bg-on-secondary-fixed rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-primary opacity-10 mix-blend-overlay"></div>
            <div className="relative p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-white mb-8 font-headline leading-tight">How to Book Your Session</h2>
                <p className="text-secondary-fixed opacity-80 text-xl mb-12 leading-relaxed">Ready to secure your slot? Our admissions team is standing by to assist with your registration and scheduling.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-white group p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary-fixed" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary-fixed font-bold mb-1">Call Us</p>
                      <span className="text-xl font-bold">+971 4 123 4567</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-white group p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary-fixed" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary-fixed font-bold mb-1">Email Us</p>
                      <span className="text-xl font-bold">admissions@tepth.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center w-full">
                <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
                  <h3 className="text-2xl font-bold text-on-surface mb-8 font-headline">Secure Your Slot</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-primary uppercase tracking-widest">Full Name</label>
                      <input
                        className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-primary uppercase tracking-widest">Institution</label>
                      <input
                        className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                        placeholder="University / School Name"
                        type="text"
                      />
                    </div>
                    <button className="w-full bg-primary text-white py-5 rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-variant transition-all active:scale-95 text-lg">
                      Submit Request
                    </button>
                    <p className="text-[10px] text-center text-on-surface-variant font-medium uppercase tracking-tighter">
                      Our team will respond within 24 hours
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
