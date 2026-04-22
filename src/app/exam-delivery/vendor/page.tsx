"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function VendorPartnershipsPage() {
  return (
    <div className="min-h-screen font-headline antialiased tracking-tight">
      {/* Hero Section: Editorial Asymmetry */}
      <section className="relative pt-24 pb-32 overflow-hidden px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              Global Logistics Network
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Transform Your Facility into a <span className="text-primary">Global Standard</span> Testing Center.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-10">
              Join the TEPTH network of high-security testing facilities. We provide the architecture, you provide the space. Together, we certify the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-variant transition-all flex items-center gap-2 group shadow-lg shadow-primary/10">
                Become a Partner
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="px-8 py-4 text-primary font-bold hover:underline">View Site Standards</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
              <img
                className="w-full h-full object-cover"
                alt="Modern high-end minimal office architectural space"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZevxYdInGS6otVk2wN89d4GFcXoEnqi_Wr_r-xY3vzxHkfV9pzYKs755txw2yIJKBzMNhVJI8homr-9epDeC8nBHlYlmtt8xEVYgKLhR79GTLcVte-eeinz2bXqYU7Ah42MFhtoWjtqe_o5ejqj4_r-g8pBSJSOtZwJPS0MVX34XPCHmQdJkTzZF0e6-rnJBkVB6wj8PpXv8gYQ-kqagxYaFAqw3Vj3I9mcRBWrIWwo3KHw3EAVhN7QvZlDXebC-cSfunuCTa7kO0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Overlapping Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-xl max-w-xs border border-white/40">
              <div className="text-primary font-black text-4xl mb-1 tracking-tight">120+</div>
              <div className="text-slate-900 font-bold text-lg mb-2">Facility Standards</div>
              <p className="text-sm text-slate-600 leading-snug">Meticulously engineered environments for high-stakes academic examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Core Value Pillars */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Vendor Architecture</h2>
            <p className="text-slate-600 max-w-2xl">A sophisticated collaboration framework designed for revenue stability and operational excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* High Security LAN */}
            <div className="md:col-span-2 bg-white p-10 rounded-xl flex flex-col justify-between group hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div>
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-lg mb-8">
                  <span className="material-symbols-outlined text-primary">security</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Secure LAN Architecture</h3>
                <p className="text-slate-600 leading-relaxed">Proprietary encrypted local area network configurations that isolate test environments from external threats while maintaining 99.9% uptime for exam delivery.</p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <img
                  className="w-24 h-16 object-cover rounded-lg"
                  alt="Modern data center server rack"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKx-UsK1-gPh9Aq6cBZVH8DPm828Jx7rMLhpNV5aYdeoRow5fEen1av06ur_5HQqNy7pROkcmmGdQf2N6oXWnLi1d5CPbbYGO3kC-lzoKenkUhMpzntEEggebOGIlot-__N1UxjO2G_-HjfoRaJru7nJBko048PG1T821PGusU4dQ3DvU5b059An_eLV-Su6Tk3qA1n-bW2oK7jbIy1K14G2A24daR2Te9Fji82YJJme7fUwvswXq9wsFRxn9uEip-TNx0iPUVsvE_"
                />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Standard Compliant</span>
              </div>
            </div>

            {/* Revenue Sharing */}
            <div className="bg-primary p-10 rounded-xl flex flex-col justify-between text-white shadow-xl shadow-primary/10">
              <div>
                <span className="material-symbols-outlined text-4xl mb-8">payments</span>
                <h3 className="text-2xl font-bold mb-4">Revenue Sharing</h3>
                <p className="text-primary-foreground/80 leading-relaxed">Tiered commission models that reward facility quality and high-throughput operational efficiency.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">Avg. ROI</div>
                <div className="text-3xl font-black">14.2% Monthly</div>
              </div>
            </div>

            {/* Automated Scheduling */}
            <div className="bg-white p-10 rounded-xl flex flex-col border border-slate-100 hover:shadow-xl transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-8">event_available</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Automated Scheduling</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Integration with global test-taker demand forecasts to maximize seat utilization.</p>
              <div className="mt-auto overflow-hidden rounded-lg">
                <img
                  className="w-full grayscale opacity-50"
                  alt="Minimalist desktop showing a calendar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa6TQeR2imA0vGQcU0SdocVIvQJwr0fivFCqcQVAGjy-yY7HMwtinNoJqQg7AUfwBSpeLZO3k7XXP0BujL2Zuno3FYw1ytgaP0KjFc2X6nCL8xTD4SODODxdiBRk6HMWerrxwGCotVQX52Ffay5cEFb3_l6kkauxq85iT2MOgybezG7rBtWdf7BTpJ9pRtNQXye0uLoVgjv1-nZfJVrnIX_dgbzm6VyN8ZkuqpGG2sFXqgVwcwQvLW8fuIlugUFeM0trxjBOnpvxNh"
                />
              </div>
            </div>

            {/* Staff Certification */}
            <div className="bg-white p-10 rounded-xl flex flex-col justify-between border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-8">workspace_premium</span>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Staff Certification</h3>
                <p className="text-slate-600 leading-relaxed">Mandatory TEPTH Proctor certification for all floor staff, ensuring global integrity standards are upheld locally.</p>
              </div>
            </div>

            {/* Facility Upgrade */}
            <div className="md:col-span-2 bg-slate-900 p-10 rounded-xl text-white flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">Facility Standards Upgrade</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Our architects work with you to retrofit existing office spaces into high-performance testing ateliers with specific acoustic and ergonomic requirements.</p>
                <button className="px-6 py-3 border border-slate-700 rounded-lg font-bold hover:bg-slate-800 transition-colors">Request Site Assessment</button>
              </div>
              <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Interior view of a modern clean workspace"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUU7fJYm1fI_859fqOymjIDX1Y45xzekBaVVMme1r0VCttp3_njt4OMXy3v7Z7IPy7xIN-HNJesFoYm8_QYHzwsWjvvXFHeruiWcFX9Tw7D0gsHC294Q1iK2nM6Kk7We_1G1VwV2PvscnhAlItzzrObm0o0kBDN6aX7voUy78rfJWQ8raAaenEi8iGEHzyDNng5QcclZ2is0Pt81-efpcssJdMR_Eo3WHBPjw-bw7eHKQIyPoz86SyKa5IZi0HIDhed3lLLr65rtU-"
                />
              </div>
            </div>

            <div className="bg-primary/5 p-10 rounded-xl flex flex-col justify-center items-center text-center border border-primary/10">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Regional Support</h3>
              <p className="text-slate-600 text-sm">Dedicated account managers for logistics partners in 42 countries.</p>
              <div className="mt-6 flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="Professional"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_07JKxzB8c-i6cu9xmeUWGjD-ZrjHSKro7XFNdFH8xE_7HefMxm6aHIXaBJc7tfmFE6KOTo43M7G3wVoO7kZlrLKj2iBAsGa1pv1opk5yKgjNj83Za9Na6CKJ_t7G9Uz9Ms_PpgCAJtmCLwKNLEnQYuevsK67-36VOPa2fgGomIwXusTjB9yiPZoxE0GZZONqccmgBVjqNcXIszEQ4zyoNhfoGFsqc5uRvz6qejpyiaCwExByTuPEI2_8VHpLOXcpecJB7A4q3YoG"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="Professional"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1r_MGk5stkJcwzb2a3QqFA4ApJMsVu47kEuGP3_VDD_qQC2C6l8_YQUSXXAkpHOBLUVjDF0-XYlemnaqfE2OIL-rm6XTvybUw_WzdoxKniMQbDpCDFq-URVwI7UiIYi4wz4ujnLWyYUHC4lKOj3tOOrQStm-h55FikOYBUlDPVwcKjEWVzeJvvTr31DwD0JeDarNIMXa_26cP_k_v2cZh1F_NWB2wk76nQkvCWXNen9ayR3mkwfyHctMj6dz5d_6wYtUJU76R5Rb-"
                />
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white">+18</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-8 leading-tight text-slate-900">
          Ready to Align with The <br />
          <span className="text-primary">Academic Atelier Standards?</span>
        </h2>
        <p className="text-xl text-slate-600 mb-12">Submit your facility blueprints today for a preliminary partnership evaluation.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-lg font-black text-xl hover:bg-primary-variant transition-all shadow-xl shadow-primary/20">
            Become a Partner
          </button>
          <button className="w-full md:w-auto bg-white border border-slate-200 px-10 py-5 rounded-lg font-bold text-xl hover:bg-slate-50 transition-all">
            Download Partner Kit
          </button>
        </div>
      </section>

    </div>
  );
}
