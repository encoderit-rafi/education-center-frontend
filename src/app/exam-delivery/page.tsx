import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/blocks/form-contact";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Exam Delivery | TEPTH",
  description:
    "TEPTH administers computer-based and paper-based international English proficiency exams across the UAE with certified delivery technology and rigorous scheduling protocols.",
};

export default function ExamDeliveryPage() {
  return (
    <main className="pb-12">
      {/* Hero Section */}
      <section className="relative px-8 py-32 min-h-[600px] flex items-center bg-white overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-left w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-8 font-headline">
            Certified Excellence <br />
            In <span className="text-red-800 italic">Exam Delivery.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
            TEPTH administers internationally recognised English proficiency exams through a network of high-spec computer-based centres and secure paper-based facilities across the UAE.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative px-8 py-24 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <Tabs defaultValue="provider" className="w-full flex-col">
            {/* Header + Tab Switcher */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 pb-10 border-b border-slate-100">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter font-headline leading-tight">
                Delivery Solutions
              </h2>

              <TabsList variant="default" className="w-full lg:w-auto bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/50 shadow-sm flex items-center">
                <TabsTrigger value="provider" className="flex-1 lg:flex-none px-4 md:px-10 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl data-active:bg-white data-active:shadow-lg data-active:text-red-800 transition-all duration-300">
                  Exam Provider
                </TabsTrigger>
                <TabsTrigger value="vendor" className="flex-1 lg:flex-none px-4 md:px-10 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl data-active:bg-white data-active:shadow-lg data-active:text-red-800 transition-all duration-300">
                  Vendor
                </TabsTrigger>
                <TabsTrigger value="test-takers" className="flex-1 lg:flex-none px-4 md:px-10 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl data-active:bg-white data-active:shadow-lg data-active:text-red-800 transition-all duration-300">
                  Test-takers
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ── EXAM PROVIDER TAB ── */}
            <TabsContent value="provider" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* CBT Infrastructure Hero Card */}
                <div className="md:col-span-8 group relative bg-white rounded-3xl border border-slate-200/60 p-12 overflow-hidden transition-all duration-700 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)]">
                  <div className="relative z-20 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-red-800 text-2xl">computer</span>
                      </div>
                      <h3 className="text-3xl font-extrabold mb-5 text-slate-900 font-headline tracking-tight">
                        CBT Centre Infrastructure
                      </h3>
                      <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                        Dual redundant 1 Gbps fibre feeds and high-capacity workstations ensure a seamless digital testing experience with zero latency and full hardware certification.
                      </p>
                    </div>
                    <div className="mt-14 flex gap-3 flex-wrap">
                      <span className="px-5 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">1Gbps Redundancy</span>
                      <span className="px-5 py-2 rounded-full bg-red-800 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">Hardware Verified</span>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700">
                    <Image
                      src="/images/about-us/infrastructure-center.png"
                      alt="Infrastructure"
                      fill
                      className="object-contain object-right-bottom"
                    />
                  </div>
                </div>

                {/* Security Card */}
                <div className="md:col-span-4 bg-slate-950 p-12 rounded-3xl text-white relative overflow-hidden group shadow-2xl">
                  <span className="material-symbols-outlined text-4xl mb-8 text-red-500">security</span>
                  <h3 className="text-2xl font-bold mb-5 font-headline tracking-tight">Zero-Failure Security</h3>
                  <p className="text-slate-400 leading-relaxed text-base">
                    Certified lockdown browsers paired with automatic 30-second response syncing for absolute data integrity during international high-stakes delivery.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-[0.05]">
                    <span className="material-symbols-outlined text-[140px]">admin_panel_settings</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ── VENDOR TAB ── */}
            <TabsContent value="vendor" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Monitoring & Compliance */}
                <div className="md:col-span-8 bg-slate-900 p-12 rounded-3xl text-white flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden group">
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-5 text-red-400 font-headline tracking-tight">Real-Time Site Monitoring</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      Every venue is centrally managed via a dashboard that tracks active sessions, environmental conditions, and technical health for seamless vendor data flow.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 relative z-10 shrink-0">
                    {["Compliance", "API Audit", "Live Feed", "Data Sync"].map((item) => (
                      <div key={item} className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs><pattern id="vendor-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
                      <rect width="100%" height="100%" fill="url(#vendor-grid)" />
                    </svg>
                  </div>
                </div>

                {/* Acoustic Standards Card */}
                <div className="md:col-span-4 bg-slate-50 p-12 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <span className="material-symbols-outlined text-red-800 text-4xl mb-8 block group-hover:rotate-12 transition-transform">volume_up</span>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900 font-headline tracking-tight">Acoustic Precision</h3>
                  <p className="text-slate-500 leading-relaxed">
                    PA-grade audio delivery systems meeting strict vendor specifications for all listening-based international examinations.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* ── TEST-TAKERS TAB ── */}
            <TabsContent value="test-takers" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Journey card */}
                <div className="md:col-span-8 bg-white border border-slate-100 rounded-3xl p-12 shadow-sm relative overflow-hidden group">
                  <h3 className="text-3xl font-extrabold mb-12 text-slate-900 font-headline tracking-tight">The Test Day Experience</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
                    {[
                      { step: "01", title: "Arrival & Check-in", desc: "Digital verification of your registration and biometric document check." },
                      { step: "02", title: "The Briefing", desc: "Detailed orientation on exam protocols and technical workstation usage." },
                      { step: "03", title: "Active Delivery", desc: "Sit your exam in a climate-controlled, professionally invigilated silence." },
                      { step: "04", title: "Instant Sync", desc: "Your results are encrypted and transmitted directly to the test body." },
                    ].map((item) => (
                      <div key={item.step} className="relative group/item">
                        <span className="text-5xl font-black text-slate-100 group-hover:text-red-50 transition-colors absolute -top-8 -left-2 z-0">{item.step}</span>
                        <div className="relative z-10">
                          <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover/item:text-red-800 transition-colors tracking-tight">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                    <span className="material-symbols-outlined text-[240px]">event_available</span>
                  </div>
                </div>

                {/* Benefits / Support card */}
                <div className="md:col-span-4 space-y-8">
                  <div className="bg-red-800 p-10 rounded-3xl text-white shadow-xl hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden group">
                    <span className="material-symbols-outlined text-4xl mb-6 text-red-200">support_agent</span>
                    <h4 className="text-2xl font-bold font-headline mb-4 tracking-tight">On-Call Support</h4>
                    <p className="text-red-100/70 text-sm leading-relaxed mb-6">A dedicated tech support engineer is assigned to every session for instant resolution.</p>
                    <div className="h-1 w-12 bg-red-400 group-hover:w-full transition-all duration-700" />
                  </div>

                  <div className="bg-slate-900 p-10 rounded-3xl text-slate-400 group relative">
                    <h4 className="text-white font-bold text-xl mb-4 font-headline tracking-tight">365-Day Cycle</h4>
                    <p className="text-sm leading-relaxed text-slate-400">Continuous testing cycles ensuring you find a date that fits your personal schedule.</p>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Year-round availability</span>
                      <span className="material-symbols-outlined text-red-800 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Standardized Contact Section */}
      <section className="px-8 py-24 bg-red-100/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-10 leading-tight tracking-tight font-headline">
              Join Our Global <br />
              Academic Network
            </h2>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              TEPTH Academic Atelier partners with forward-thinking institutions to redefine the value of certification. Let's discuss your organization's specific needs.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-xl">contact_mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Direct Inquiries</h4>
                  <p className="text-slate-500 font-semibold">partnerships@tepth.academy</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-xl">phone_callback</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Institutional Support</h4>
                  <p className="text-slate-500 font-semibold">+971 4 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-red-900/5 border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
