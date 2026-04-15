import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exam Proctoring Services | TEPTH",
  description:
    "TEPTH delivers secure, accredited exam proctoring services across the UAE — in-centre and remote — for IELTS, PTE, TOEFL, OET, CELPIP, and more.",
};

const services = [
  {
    icon: "location_on",
    title: "In-Centre Proctoring",
    desc: "Fully supervised, CCTV-monitored testing rooms at our Abu Dhabi, Dubai, and Sharjah venues. Certified examiners adhere to each testing body's strict protocols.",
    features: ["Biometric candidate verification", "Secure locker storage", "Paper & computer-based formats", "Special accommodation rooms"],
  },
  {
    icon: "computer",
    title: "Remote Online Proctoring",
    desc: "Take accredited exams from your home or office under live AI-assisted and human oversight. Identical in scoring and validity to in-centre sittings.",
    features: ["Live proctor via encrypted video link", "AI anomaly detection", "System compatibility check 48 hrs prior", "Results within 48 hours"],
  },
  {
    icon: "corporate_fare",
    title: "Corporate & Institutional Testing",
    desc: "We administer bulk sittings for organisations, universities, and government bodies. Flexible scheduling, volume pricing, and bespoke reporting available.",
    features: ["Dedicated account manager", "Bulk booking discounts", "Custom score reports to HR / admissions", "On-site proctoring at your premises"],
  },
  {
    icon: "accessible",
    title: "Special Accommodation",
    desc: "Candidates with documented medical or learning needs receive tailored proctoring — extended time, assistive technology, and private testing rooms.",
    features: ["Extended time allocation", "Screen reader & zoom support", "Private single-candidate rooms", "Rest breaks by agreement"],
  },
];

const process = [
  { step: "01", icon: "app_registration", title: "Register & Verify", desc: "Create your TEPTH account and submit your government-issued ID. Verification is completed within one business day." },
  { step: "02", icon: "calendar_month", title: "Choose Date & Format", desc: "Select an in-centre slot at one of our three UAE venues, or opt for a remote sitting on any day that suits you." },
  { step: "03", icon: "payment", title: "Pay Securely", desc: "Complete payment through our encrypted portal. Instant booking confirmation with full receipt is emailed immediately." },
  { step: "04", icon: "verified_user", title: "Check In & Test", desc: "Arrive at your venue (or log into your secured session) on test day. Our proctors guide you through every step." },
  { step: "05", icon: "quick_reference_all", title: "Receive Your Results", desc: "Scores are delivered directly to your TEPTH portal and optionally forwarded to your nominated institutions." },
];

const stats = [
  { icon: "shield", value: "100%", label: "Accredited Sittings" },
  { icon: "groups", value: "50K+", label: "Candidates Proctored" },
  { icon: "verified", value: "6", label: "Test Bodies Supported" },
  { icon: "timer", value: "48 hrs", label: "Avg. Results Turnaround" },
];

const testBodies = [
  { name: "IELTS", org: "British Council / IDP", icon: "language" },
  { name: "PTE Academic", org: "Pearson", icon: "computer" },
  { name: "TOEFL iBT", org: "ETS", icon: "school" },
  { name: "OET", org: "Cambridge Boxhill", icon: "medical_services" },
  { name: "CELPIP", org: "Paragon Testing", icon: "flag" },
  { name: "CAEL", org: "Carleton University", icon: "account_balance" },
];

const faqs = [
  {
    q: "What ID do I need to bring to my in-centre exam?",
    a: "You must present one original, government-issued photo ID (passport, national ID card, or Emirates ID) that exactly matches the name used at registration. Expired documents are not accepted.",
  },
  {
    q: "What are the technical requirements for remote proctoring?",
    a: "A Windows or Mac computer, a webcam, a microphone, and a stable internet connection of at least 1 Mbps upload and download speed. Tablets and Chromebooks are not supported. A system check link is emailed 48 hours before your test.",
  },
  {
    q: "Can I reschedule or cancel my booking?",
    a: "Rescheduling is permitted up to 72 hours before the test start time, subject to availability. Cancellations made within 72 hours of the test are non-refundable. Please refer to the full Cancellation Policy on our website.",
  },
  {
    q: "How do I apply for special accommodation?",
    a: "Submit a completed Special Accommodation Request Form along with supporting medical or educational documentation at least 10 business days before your intended test date. Our team will review and confirm eligibility within 5 business days.",
  },
  {
    q: "How are my scores delivered?",
    a: "Scores appear in your TEPTH portal as soon as they are released by the testing body. You can then forward them electronically to any institution or immigration authority at no additional cost.",
  },
];

export default function ExamProctoringServicesPage() {
  return (
    <main className="pt-24 bg-background">
      {/* ── Hero Banner ── */}
      <section className="relative crimson-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-16 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-white/40 text-sm">chevron_right</span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Exam Proctoring Services</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                Accredited &amp; Secure
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight">
                Exam Proctoring <br />
                <span className="italic">Services</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Secure, accredited test administration — in-centre or remote — conducted by certified proctors who uphold the highest standards of exam integrity.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-a-test"
                  className="bg-white text-primary font-headline font-bold px-8 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
                >
                  Book a Test <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-transparent text-white font-headline font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors border-solid"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-2xl mb-1 block" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  <p className="text-2xl font-headline font-extrabold leading-none">{s.value}</p>
                  <p className="text-white/70 text-[10px] font-semibold tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proctoring Services ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">What We Offer</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight mb-4">
              Proctoring for Every Candidate &amp; Context
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Whether you're an individual sitting your first IELTS or an organisation running large-scale assessments, TEPTH has a certified proctoring solution designed for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl p-8 border border-outline/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors duration-300"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline font-extrabold text-secondary text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 border-t border-outline/10 pt-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supported Test Bodies ── */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Official Authorisation</h2>
            <h3 className="text-3xl font-headline font-extrabold text-secondary">Tests We Proctor</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {testBodies.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-5 border border-outline/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary group-hover:text-white text-xl transition-colors duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {t.icon}
                  </span>
                </div>
                <p className="font-headline font-extrabold text-secondary text-sm group-hover:text-primary transition-colors">{t.name}</p>
                <p className="text-on-surface-variant text-[10px] mt-1 leading-tight">{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">End-to-End Process</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">How Proctoring Works at TEPTH</h3>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-outline/30 to-transparent mx-20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {process.map((p) => (
                <div key={p.step} className="group flex flex-col items-center text-center space-y-4">
                  {/* Step bubble */}
                  <div className="relative w-20 h-20 bg-white rounded-2xl shadow-md border border-outline/10 flex items-center justify-center group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <span
                      className="material-symbols-outlined text-primary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                    <span className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[9px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow">
                      {p.step}
                    </span>
                  </div>
                  <h4 className="font-headline font-extrabold text-secondary text-base group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed max-w-[180px] mx-auto">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrity Commitment ── */}
      <section className="py-24 px-8 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="flex-1 space-y-8">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-white leading-tight">
              Exam Integrity You Can <span className="text-primary italic">Trust</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              TEPTH is an authorised test centre for all major international English proficiency examinations. Every sitting meets the exact standards mandated by the respective testing body — from candidate identity verification to secure score transmission.
            </p>
            <ul className="space-y-4">
              {[
                "All proctors hold official certification from the testing body",
                "CCTV-monitored rooms with secure, tamper-evident equipment",
                "Zero-tolerance for misconduct — results invalidated if breached",
                "Fully GDPR-compliant data handling and score storage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Right image */}
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uhLyklKIzZM0ZSqv8iCO4JbHXKFbha76pI9f3dsTBzTS1wNlG0_nn4yMWFmQ8ROHKPmuJNkC5FPRMR_9o8K4Jj3e8jRUnOf8ehrZmwV6EcbujMH_-n4dGA6qyQEU7l4yL0m8J4gGnNjch0GyMDSdFTUn0CkqUP9XbVCoyzb2CRJ_SsYexYXxwpunQoUDRvEnVUcudGFD1kM38vFvpaSRlWlv_8t2iA4sOq0dtHfxVe7BzAD5t0O1Z-Pdoby40vJ7BT7Y8yjYbOgSg"
                alt="TEPTH secure testing environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/30" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-2xl border border-outline/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-secondary text-sm">Fully Accredited</p>
                  <p className="text-on-surface-variant text-xs">By 6 international testing bodies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Got Questions?</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-outline/10 shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none">
                    <span className="font-headline font-bold text-secondary text-base group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-7 pb-6 border-t border-outline/10 pt-4">
                    <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-on-surface-variant text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest uppercase hover:gap-3 transition-all"
            >
              Contact Our Proctoring Team
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto crimson-gradient rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <span className="material-symbols-outlined text-5xl mx-auto block" style={{ fontVariationSettings: "'FILL' 1" }}>
              event_available
            </span>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
              Ready to schedule your exam?
            </h3>
            <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
              Book your in-centre or remote proctored sitting today. Seats are limited — secure yours now.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-a-test"
                className="bg-white text-primary font-headline font-bold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
              >
                Book a Test <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/free-consultation"
                className="bg-transparent text-white font-headline font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors border-solid"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
