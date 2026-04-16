import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/blocks/form-contact";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Exam Proctoring Services | TEPTH",
  description:
    "TEPTH delivers secure, accredited exam proctoring services across the UAE — in-centre and remote — for IELTS, PTE, TOEFL, OET, CELPIP, and more.",
};

export default function ExamProctoringServicesPage() {
  return (
    <main className="pb-12">
      {/* Hero Section */}
      <section className="relative px-8 py-32 min-h-[600px] flex items-center bg-white">
        <div className="relative z-10 max-w-6xl mx-auto text-left w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-8 font-headline">
            Certified Excellence in <br />
            <span className="text-red-800 italic">Exam Proctoring.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
            Secure, accredited test administration — in-centre or remote — conducted by certified proctors who uphold the highest global standards of exam integrity.
          </p>
        </div>
      </section>

      {/* Proctoring Solutions Section */}
      <section className="relative px-8 py-28 bg-white overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-red-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[8%] w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <Tabs defaultValue="institutions" className="w-full flex-col">
            {/* Header + Tab Switcher */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 pb-10 border-b border-slate-100">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-800 text-[10px] font-black uppercase tracking-[0.2em] mb-5">
                  Assessment Intelligence
                </span>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter font-headline leading-tight">
                  Proctoring Solutions
                </h2>
              </div>

              <TabsList variant="default" className="bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/50 shadow-sm">
                <TabsTrigger value="institutions" className="px-10 py-3 text-xs font-bold uppercase tracking-widest rounded-xl data-active:bg-white data-active:shadow-lg data-active:text-red-800 transition-all duration-300">
                  Institutions
                </TabsTrigger>
                <TabsTrigger value="test-taker" className="px-10 py-3 text-xs font-bold uppercase tracking-widest rounded-xl data-active:bg-white data-active:shadow-lg data-active:text-red-800 transition-all duration-300">
                  Test-taker
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ── INSTITUTIONS TAB ── */}
            <TabsContent value="institutions" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Enterprise Infrastructure — Hero Card */}
                <div className="md:col-span-8 group relative bg-white rounded-3xl border border-slate-200/60 p-12 overflow-hidden transition-all duration-700 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] hover:border-red-200/40">
                  <div className="relative z-20 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-red-800 text-2xl">account_balance</span>
                      </div>
                      <h3 className="text-3xl font-extrabold mb-5 text-slate-900 font-headline tracking-tight">
                        Enterprise Proctoring Infrastructure
                      </h3>
                      <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                        We specialize in managing secure sittings across multiple geographic locations, utilizing biometric verification and iron-clad surveillance standards.
                      </p>
                    </div>
                    <div className="mt-14 flex gap-3 flex-wrap">
                      <span className="px-5 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">Secure Venue</span>
                      <span className="px-5 py-2 rounded-full bg-red-800 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">Biometric Auth</span>
                      <span className="px-5 py-2 rounded-full bg-white text-slate-700 text-[10px] font-bold uppercase tracking-widest border border-slate-200 shadow-sm">ISO Certified</span>
                    </div>
                  </div>
                  {/* Background Image */}
                  <div className="absolute right-0 bottom-0 w-2/3 h-full pointer-events-none opacity-[0.03] grayscale group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-1000">
                    <Image
                      src="/images/about-us/infrastructure-center.png"
                      alt="Infrastructure"
                      fill
                      className="object-contain object-right-bottom"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-50/30 group-hover:to-red-50/50 transition-colors pointer-events-none" />
                </div>

                {/* Integrity Assurance — Deep Dark Card */}
                <div className="md:col-span-4 bg-slate-950 p-12 rounded-3xl text-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="material-symbols-outlined text-4xl mb-8 text-red-500 group-hover:rotate-12 transition-transform duration-500">analytics</span>
                      <h3 className="text-2xl font-bold mb-5 font-headline tracking-tight">Integrity Assurance</h3>
                      <p className="text-slate-400 leading-relaxed text-base">
                        Proprietary anomaly detection algorithms monitored by human invigilators for 100% score validity.
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                      <span className="w-8 h-px bg-red-600" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">Live AI Overwatch</span>
                    </div>
                  </div>
                  {/* Ambient glow */}
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-red-800/20 rounded-full blur-[80px] group-hover:bg-red-600/30 transition-colors duration-700" />
                </div>

                {/* Analytical Insights — Glass Card */}
                <div className="md:col-span-4 bg-white/50 backdrop-blur-xl p-12 rounded-3xl border border-slate-200/80 hover:bg-white/70 transition-all duration-500 shadow-md hover:shadow-xl relative group">
                  <span className="material-symbols-outlined text-red-800 text-3xl mb-8 block group-hover:scale-x-[-1] transition-transform duration-700">history_edu</span>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900 font-headline tracking-tight">Analytical Insights</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Translating massive testing datasets into actionable intelligence for admissions and compliance boards.
                  </p>
                  <div className="absolute bottom-6 right-10 opacity-[0.04] group-hover:opacity-[0.12] transition-opacity duration-500">
                    <span className="material-symbols-outlined text-[90px]">monitoring</span>
                  </div>
                </div>

                {/* Seamless Integration — Tech Card */}
                <div className="md:col-span-8 bg-slate-900 p-12 rounded-3xl text-white flex flex-col lg:flex-row gap-14 items-center relative overflow-hidden group">
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-5 text-red-400 font-headline tracking-tight">Seamless Integration</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      Our proctoring engine connects natively with Canvas, Moodle, and Blackboard via LTI 1.3 Advantage standards.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {[
                      { icon: "api", label: "LTI Core" },
                      { icon: "security_update_good", label: "Auth v2" },
                      { icon: "cloud_sync", label: "Realtime" },
                      { icon: "vpn_key", label: "SSO Ready" },
                    ].map((tech) => (
                      <div key={tech.label} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center gap-2.5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default group/tech">
                        <span className="material-symbols-outlined text-red-400 group-hover/tech:scale-110 transition-transform">{tech.icon}</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover/tech:text-red-300 transition-colors">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs><pattern id="techgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
                      <rect width="100%" height="100%" fill="url(#techgrid)" />
                    </svg>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ── TEST-TAKER TAB ── */}
            <TabsContent value="test-taker" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

                {/* Journey Timeline */}
                <div className="md:col-span-7 lg:col-span-8 relative pl-4">
                  {/* Vertical Line */}
                  <div className="absolute left-[2.25rem] top-4 bottom-4 w-px bg-gradient-to-b from-red-600 via-slate-200 to-transparent" />

                  <div className="space-y-14">
                    {[
                      { step: "01", title: "Identity Verification", desc: "Create your digital profile and upload a verified government-issued ID document.", icon: "id_card" },
                      { step: "02", title: "Session Scheduling", desc: "Browse our premium UAE venues or select an available remote proctoring window.", icon: "calendar_month" },
                      { step: "03", title: "Secure Booking", desc: "Finalize your sitting through our encrypted, PCI-compliant payment portal.", icon: "lock" },
                      { step: "04", title: "Test Day", desc: "Arrive at centre or log in remotely for a professionally proctored session.", icon: "verified_user" },
                    ].map((point) => (
                      <div key={point.step} className="flex gap-8 group">
                        <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-red-800 group-hover:border-red-800 transition-all duration-500 group-hover:shadow-[0_16px_40px_rgba(153,27,27,0.2)]">
                          <span className="material-symbols-outlined text-slate-400 text-2xl group-hover:text-white transition-colors duration-300">{point.icon}</span>
                          <span className="absolute -top-2.5 -right-2.5 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-black shadow-md group-hover:bg-red-600 transition-colors duration-300">{point.step}</span>
                        </div>
                        <div className="pt-2">
                          <h4 className="text-xl font-extrabold text-slate-900 font-headline mb-2 tracking-tight group-hover:text-red-800 transition-colors duration-300">{point.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-[15px]">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefit Cards */}
                <div className="md:col-span-5 lg:col-span-4 grid grid-cols-1 gap-8">
                  {/* Accredited Excellence */}
                  <div className="bg-red-800 p-10 rounded-3xl text-white relative overflow-hidden group shadow-xl">
                    <span className="material-symbols-outlined text-3xl mb-6 text-red-200 group-hover:rotate-[360deg] transition-transform duration-1000">workspace_premium</span>
                    <h4 className="text-2xl font-bold font-headline mb-3 tracking-tight">Accredited Excellence</h4>
                    <p className="text-red-100/70 text-sm leading-relaxed mb-6">Authorised proctoring for IELTS, PTE Academic, OET, and CELPIP.</p>
                    <div className="flex items-center gap-3 border-t border-white/15 pt-5">
                      <span className="w-6 h-px bg-red-300" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200/80">View Requirements</span>
                    </div>
                    <div className="absolute -bottom-8 -right-8 opacity-[0.08]">
                      <span className="material-symbols-outlined text-[150px]">star</span>
                    </div>
                  </div>

                  {/* Human Support */}
                  <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-slate-200/60 flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors duration-300">
                      <span className="material-symbols-outlined text-slate-500 group-hover:text-red-800 transition-colors duration-300">support_agent</span>
                    </div>
                    <h4 className="text-xl font-bold font-headline mb-3 text-slate-900 tracking-tight">Human-Centric Support</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">12/6 active candidate guidance for technical and booking assistance.</p>
                  </div>

                  {/* Secure Environment */}
                  <div className="bg-slate-950 p-10 rounded-3xl text-white relative overflow-hidden group">
                    <span className="material-symbols-outlined text-3xl mb-6 text-red-400 relative z-10">shield</span>
                    <h4 className="text-xl font-bold font-headline mb-3 tracking-tight relative z-10">Secure Environment</h4>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">Multi-layered identity checks and 360° surveillance for absolute exam integrity.</p>
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-red-800/15 rounded-full blur-[60px] group-hover:bg-red-600/25 transition-colors duration-700" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partner with Us */}
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



