import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/blocks/form-contact";

export const metadata: Metadata = {
  title: "Exam Proctoring Services | TEPTH",
  description:
    "TEPTH delivers secure, accredited exam proctoring services across the UAE — in-centre and remote — for IELTS, PTE, TOEFL, OET, CELPIP, and more.",
};

const stats = [
  { icon: "shield", value: "100%", label: "Accredited" },
  { icon: "groups", value: "50K+", label: "Candidates" },
  { icon: "verified", value: "6", label: "Test Bodies" },
  { icon: "timer", value: "48h", label: "Turnaround" },
];

const testBodies = [
  { name: "IELTS", org: "British Council / IDP", icon: "language" },
  { name: "PTE Academic", org: "Pearson", icon: "computer" },
  { name: "TOEFL iBT", org: "ETS", icon: "school" },
  { name: "OET", org: "Cambridge Boxhill", icon: "medical_services" },
  { name: "CELPIP", org: "Paragon Testing", icon: "flag" },
  { name: "CAEL", org: "Carleton University", icon: "account_balance" },
];

const processSteps = [
  { step: "01", icon: "app_registration", title: "Register", desc: "Verify ID and create account." },
  { step: "02", icon: "calendar_month", title: "Schedule", desc: "Choose date and venue/remote." },
  { step: "03", icon: "payment", title: "Secure Pay", desc: "Encrypted instant confirmation." },
  { step: "04", icon: "verified_user", title: "Test Day", desc: "Guided check-in and session." },
  { step: "05", icon: "quick_reference_all", title: "Results", desc: "Direct delivery to portal." },
];

const faqs = [
  {
    q: "What ID do I need for in-centre exams?",
    a: "You must present an original, government-issued photo ID (Passport or Emirates ID) that exactly matches your registration name.",
  },
  {
    q: "Remote proctoring requirements?",
    a: "A Windows/Mac computer, webcam, microphone, and stable internet. System checks are performed 48 hours prior.",
  },
  {
    q: "Special accommodation process?",
    a: "Submit a request with medical documentation at least 10 business days before your intended test date.",
  },
];

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
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-a-test"
              className="bg-red-800 text-white px-10 py-4 font-bold text-sm shadow-xl shadow-red-900/10 hover:bg-red-900 transition-all uppercase tracking-wider"
            >
              Book Your Test
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
              Proctoring Solutions & Infrastructure
            </h2>
            <div className="flex gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-right">
                  <p className="text-2xl font-black text-red-800">{s.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Institutional Card - In-Centre */}
            <div className="md:col-span-8 bg-slate-50 p-12 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col justify-between group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-red-800 text-4xl mb-8">location_on</span>
                <h3 className="text-3xl font-bold mb-6 text-slate-900 font-headline">
                  In-Centre Proctoring Excellence
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  Fully supervised, CCTV-monitored testing rooms at our elite UAE venues. Our certified examiners adhere to the most rigorous protocols in the industry.
                </p>
              </div>
              <div className="mt-12 flex gap-4 flex-wrap relative z-10">
                <div className="flex items-center gap-2 bg-red-50 text-red-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">fingerprint</span>
                  Biometric Verification
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">videocam</span>
                  360° CCTV Monitoring
                </div>
              </div>
              <Image
                className="absolute -right-20 -bottom-20 w-80 h-80 object-cover opacity-10 grayscale pointer-events-none group-hover:scale-110 transition-transform duration-700"
                src="/images/about-us/infrastructure-center.png"
                alt="Infrastructure"
                width={320}
                height={320}
              />
            </div>

            {/* Remote Proctoring - Highlight Card */}
            <div className="md:col-span-4 bg-red-900 p-12 rounded-xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-8 text-red-200">computer</span>
                <h3 className="text-2xl font-bold mb-6 font-headline">Remote Online Proctoring</h3>
                <p className="text-red-100/80 leading-relaxed text-base">
                  Accredited exams from your space under live AI-assisted human oversight. Identical validty, maximum convenience.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-[120px]">verified_user</span>
              </div>
            </div>

            {/* Corporate & Institutional Support */}
            <div className="md:col-span-4 bg-slate-50 p-12 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-red-800 text-3xl mb-8">corporate_fare</span>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 font-headline">Corporate Partnerships</h3>
              <p className="text-slate-600 leading-relaxed">
                Bulk test administration for organisations with volume scheduling and bespoke score reporting to your HR or admissions panels.
              </p>
            </div>

            {/* Accessibility Card */}
            <div className="md:col-span-8 bg-slate-900 p-12 rounded-xl text-white flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6 text-red-400 font-headline">Inclusive Assessment</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tailored proctoring for candidates with documented needs — providing extended time, assistive tech, and private testing environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg flex items-center gap-4 min-w-[170px]">
                  <span className="material-symbols-outlined text-red-400">accessible</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Universal Design</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg flex items-center gap-4 min-w-[170px]">
                  <span className="material-symbols-outlined text-red-400">patient_list</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Medical Accom.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Bodies Section */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-800 font-bold uppercase tracking-[0.2em] text-[10px]">Authorised Partner</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 font-headline">Tests We Proctor</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {testBodies.map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-red-800 text-2xl mb-4">{t.icon}</span>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-1">{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 font-headline">Our Proctored Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-px bg-slate-100 z-0" />
            {processSteps.map((p) => (
              <div key={p.step} className="text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-slate-100 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-red-800 text-3xl">{p.icon}</span>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center text-xs font-bold">{p.step}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500 max-w-[150px] mx-auto">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 bg-white border-t border-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 font-headline">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100 p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                  {faq.q}
                  <span className="material-symbols-outlined text-red-800 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section className="px-8 py-24 bg-red-100/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-10 leading-tight tracking-tight font-headline">
              Secure Your Institutional <br />
              Exam Foundation
            </h2>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              TEPTH partners with universities and professional bodies to redefine exam integrity. Let's discuss your organization's proctoring needs.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-xl">contact_mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Partner Inquiries</h4>
                  <p className="text-slate-500 font-semibold">proctoring@tepth.academy</p>
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

