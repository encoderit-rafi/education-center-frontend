"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Protocol {
  id: string;
  label: string;
  content: {
    arrival: string;
    biometric: string;
    equipment: string;
  };
}

const protocols: Protocol[] = [
  {
    id: "IELTS",
    label: "IELTS",
    content: {
      arrival: "Candidates must arrive at least 45 minutes prior to the scheduled start time for biometric registration.",
      biometric: "Fingerprint scanning and high-resolution digital photography are mandatory for all IELTS academic sessions.",
      equipment: "Headphones and system checks are performed 15 minutes before the exam begins. Late arrivals will not be admitted.",
    },
  },
  {
    id: "PTE",
    label: "PTE",
    content: {
      arrival: "Arrive at least 30 minutes before your appointment time to complete the check-in process.",
      biometric: "Palm vein scanning, digital photograph, and digital signature are required for security purposes.",
      equipment: "A tutorial on how to use the equipment will be provided before you start your PTE Academic test.",
    },
  },
  {
    id: "OET",
    label: "OET",
    content: {
      arrival: "Check-in starts 1 hour before the first test. Candidates must be present for the briefing session.",
      biometric: "Photo identification and wristband allocation are part of the standard OET venue entry protocol.",
      equipment: "OET Listening sub-test equipment is tested individually to ensure audio clarity for all candidates.",
    },
  },
];

export default function TestDayGuidelinesClient() {
  const [activeTab, setActiveTab] = useState("IELTS");

  const activeProtocol = protocols.find((p) => p.id === activeTab) || protocols[0];

  return (
    <div className="bg-[#fff8f7] text-[#261817] font-sans min-h-screen">
      <main className="pt-24 font-['Manrope']">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="text-[#760009] font-bold tracking-widest text-xs uppercase mb-4 block">
                Official Candidate Information
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#261817] tracking-tighter mb-6 leading-tight">
                Test Day Guidelines
              </h1>
              <p className="text-lg text-[#575e70] max-w-lg mb-8 leading-relaxed">
                Prepare for success with our comprehensive guide. We ensure a standardized, fair, and supportive
                environment for all candidates across our global venues.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#760009] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg">
                  Download PDF Guide
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-3">
                <Image
                  alt="Testing Center"
                  className="w-full h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_o1Qs9CDFLnqzHLHZ56G8YXWdftSrOMfxDbsje0_B0oJTA7nGghGCuknKWwPc2tobrhpfE03sZ6jAifr93YOuYz8KswyVeNpj_ZH7_zshrqpcR3ZNj-gAwQxANtfibkUz0FQ-iuppi-oUvf1siJnlguZupraPTqbycmnqc_sZ5CYRZwZtSvyLQFswjQ1CclzlctQr_XhwGLxB_KX4xwcCI11NyhVK_dhztD_qZi6GmdDIpN9WrPbIKOeWC-A18I-JP6VXKrm93fR"
                  width={800}
                  height={500}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-[#e1bfbb]/10">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="material-symbols-outlined text-[#760009]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-bold text-[#261817]">Certified Venues</span>
                </div>
                <p className="text-sm text-[#575e70]">
                  All TEPTH centers follow global proctoring standards for IELTS, PTE, and OET.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* General Requirements Bento */}
        <section className="py-20 px-8 bg-[#fff0ef]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#261817] tracking-tight mb-4">General Requirements</h2>
              <p className="text-[#575e70]">Ensure you have these essentials ready before heading to the venue.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mandatory Card */}
              <div className="md:col-span-2 bg-[#ffffff] p-8 rounded-xl flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
                <div>
                  <div className="bg-[#991b1b]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <span
                      className="material-symbols-outlined text-[#760009]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      id_card
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mandatory Documents</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#760009] mt-1">check_circle</span>
                      <span>
                        <strong className="text-[#261817]">Original Passport or National ID:</strong> Must be the same
                        document used during registration. Copies are not accepted.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#760009] mt-1">check_circle</span>
                      <span>
                        <strong className="text-[#261817]">Test Confirmation Email:</strong> A printed or digital copy
                        of your booking confirmation.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-[#e1bfbb]/10">
                  <p className="text-sm italic text-[#575e70]">
                    Note: Expired identification documents will result in automatic disqualification from the test
                    session.
                  </p>
                </div>
              </div>
              {/* Prohibited Card */}
              <div className="bg-[#760009] p-8 rounded-xl text-white relative overflow-hidden">
                <div className="z-10 relative">
                  <h3 className="text-2xl font-bold mb-6">Prohibited Items</h3>
                  <p className="text-[#ffaaa1] mb-8">The following items are strictly forbidden inside the testing room:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                      <span className="material-symbols-outlined mb-2">smartphone</span>
                      <span className="text-xs font-semibold">Mobiles</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                      <span className="material-symbols-outlined mb-2">watch</span>
                      <span className="text-xs font-semibold">Watches</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                      <span className="material-symbols-outlined mb-2">keyboard</span>
                      <span className="text-xs font-semibold">Devices</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                      <span className="material-symbols-outlined mb-2">menu_book</span>
                      <span className="text-xs font-semibold">Notes</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <span
                    className="material-symbols-outlined text-9xl"
                    style={{ fontVariationSettings: "'wght' 700" }}
                  >
                    block
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Specific Tabs */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
              <h2 className="text-4xl font-extrabold text-[#261817] tracking-tight">Exam-Specific Protocols</h2>
              <div className="flex bg-[#ffe9e6] p-1 rounded-xl">
                {protocols.map((protocol) => (
                  <button
                    key={protocol.id}
                    onClick={() => setActiveTab(protocol.id)}
                    className={`px-6 py-2 rounded-lg font-bold transition-all ${
                      activeTab === protocol.id
                        ? "bg-[#760009] text-white"
                        : "text-[#59413e] hover:text-[#760009]"
                    }`}
                  >
                    {protocol.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Protocol 1 */}
              <div className="bg-[#fff0ef] p-8 rounded-xl border-l-4 border-[#760009]">
                <h4 className="text-[#760009] font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">schedule</span>
                  Arrival Window
                </h4>
                <div className="text-[#261817] leading-relaxed">
                  {activeProtocol.content.arrival.split(/(45 minutes|30 minutes|1 hour)/).map((part, i) => (
                    part.match(/(45 minutes|30 minutes|1 hour)/) ? (
                      <span key={i} className="font-bold underline decoration-[#760009]">{part}</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  ))}
                </div>
              </div>
              {/* Protocol 2 */}
              <div className="bg-[#fff0ef] p-8 rounded-xl border-l-4 border-[#760009]">
                <h4 className="text-[#760009] font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">fingerprint</span>
                  Identification Check
                </h4>
                <p className="text-[#261817] leading-relaxed">
                   {activeProtocol.content.biometric}
                </p>
              </div>
              {/* Protocol 3 */}
              <div className="bg-[#fff0ef] p-8 rounded-xl border-l-4 border-[#760009]">
                <h4 className="text-[#760009] font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">laptop_mac</span>
                  Equipment Setup
                </h4>
                <p className="text-[#261817] leading-relaxed">
                   {activeProtocol.content.equipment}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-8 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-[#261817] tracking-tight mb-4">Test Day Timeline</h2>
              <p className="text-[#575e70] max-w-2xl mx-auto">A visual step-by-step guide through your testing journey at TEPTH.</p>
            </div>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[#e1bfbb]/30 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#ffdad6] flex items-center justify-center mb-6 z-10 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[#760009]">directions_walk</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2">Arrival</h5>
                  <p className="text-sm text-[#575e70]">Check-in at the reception desk early.</p>
                </div>
                {/* Step 2 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#ffdad6] flex items-center justify-center mb-6 z-10 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[#760009]">person_check</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2">Check-in</h5>
                  <p className="text-sm text-[#575e70]">Document verification and biometric data collection.</p>
                </div>
                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#ffdad6] flex items-center justify-center mb-6 z-10 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[#760009]">security</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2">Security</h5>
                  <p className="text-sm text-[#575e70]">Storage of personal items and metal detection scan.</p>
                </div>
                {/* Step 4 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-[#760009] border-4 border-[#ffdad6] flex items-center justify-center mb-6 z-10 transition-transform group-hover:scale-110 shadow-lg">
                    <span className="material-symbols-outlined text-white">edit_square</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2 text-[#760009]">The Test</h5>
                  <p className="text-sm text-[#575e70]">Undertaking your exam in our secure, quiet lab.</p>
                </div>
                {/* Step 5 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#ffdad6] flex items-center justify-center mb-6 z-10 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[#760009]">logout</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2">Departure</h5>
                  <p className="text-sm text-[#575e70]">Collection of personal items and check-out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Rules & Safety */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-extrabold text-[#261817] tracking-tight mb-8">Venue Rules & Conduct</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#760009] text-3xl">quiet_time</span>
                  <div>
                    <h6 className="font-bold text-lg mb-1">Strict Silence Policy</h6>
                    <p className="text-[#575e70] leading-relaxed">
                      A total silence policy is enforced in all corridors and testing areas to ensure maximum
                      concentration for all candidates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#760009] text-3xl">health_and_safety</span>
                  <div>
                    <h6 className="font-bold text-lg mb-1">Health & Safety Protocols</h6>
                    <p className="text-[#575e70] leading-relaxed">
                      Venues are sanitized regularly. Hand sanitizers are available at every station. Mask requirements
                      follow local government mandates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#760009] text-3xl">policy</span>
                  <div>
                    <h6 className="font-bold text-lg mb-1">Proctoring Standards</h6>
                    <p className="text-[#575e70] leading-relaxed">
                      Certified invigilators monitor all sessions. Any attempt at cheating or disruption will result in
                      immediate dismissal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ffe9e6] rounded-3xl p-12 flex flex-col justify-center items-center text-center">
              <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[#760009] text-5xl">support_agent</span>
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Running Late?</h3>
              <p className="text-[#575e70] mb-8 text-lg">
                If you are experiencing travel delays or emergencies on your test day, contact our immediate response
                team.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Link
                  className="flex items-center justify-center gap-3 bg-white text-[#261817] py-4 rounded-xl font-bold border border-[#e1bfbb]/30 hover:border-[#760009] transition-all shadow-sm"
                  href="tel:+1234567890"
                >
                  <span className="material-symbols-outlined text-[#760009]">call</span>
                  Emergency Hotline
                </Link>
                <Link
                  className="flex items-center justify-center gap-3 bg-[#760009] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-md"
                  href="#"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Live Support Chat
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
