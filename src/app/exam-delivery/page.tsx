import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exam Delivery | TEPTH",
  description:
    "TEPTH administers computer-based and paper-based international English proficiency exams across the UAE with certified delivery technology and rigorous scheduling protocols.",
};

const deliveryModes = [
  {
    icon: "computer",
    title: "Computer-Based Delivery",
    subtitle: "CBT",
    desc: "Industry-standard workstations with dedicated peripherals deliver a seamless digital testing experience. Each station is individually configured and validated before every session.",
    highlights: ["Noise-cancelling headsets for listening sections", "Full HD displays with anti-glare screens", "Lockdown browser preventing external access", "Auto-save every 30 seconds — zero data loss"],
    tags: ["PTE Academic", "TOEFL iBT", "CELPIP", "CAEL CE"],
  },
  {
    icon: "edit_note",
    title: "Paper-Based Delivery",
    subtitle: "PBT",
    desc: "Secure printed question booklets, answer sheets, and listening audio delivered in acoustically controlled rooms following official testing body packaging and handling protocols.",
    highlights: ["Tamper-evident sealed packs opened on-site", "Calibrated broadcast audio for Listening", "Answer sheets scanned and couriered same day", "Strict candidate seating plans enforced"],
    tags: ["IELTS Academic", "IELTS General Training", "OET"],
  },
  {
    icon: "wifi_calling_3",
    title: "Remote Online Delivery",
    subtitle: "ROD",
    desc: "Candidates connect via encrypted browser session to a live proctor. The entire exam is streamed, recorded, and AI-monitored in real time — with no compromise on score validity.",
    highlights: ["End-to-end TLS-encrypted video session", "AI anomaly detection with human review", "Eligible scores accepted by 10,000+ institutions", "Compatible with Windows and macOS"],
    tags: ["IELTS Online", "TOEFL iBT Home Edition", "PTE at Home"],
  },
];

const infrastructure = [
  { icon: "router", title: "Dedicated Fibre Lines", desc: "Dual redundant 1 Gbps fibre feeds at every centre — independent of public Wi-Fi — guarantee uninterrupted connectivity during CBT sittings." },
  { icon: "security", title: "Lockdown Software", desc: "Certified lockdown browsers are deployed on each workstation before every session, preventing access to external resources." },
  { icon: "backup", title: "Automatic Backup", desc: "Candidate responses sync to a secure off-site server every 30 seconds. Power outages cannot affect answer data." },
  { icon: "volume_up", title: "Broadcast Audio Systems", desc: "PA-grade amplifiers and ceiling speakers deliver consistent, calibrated audio for all paper-based Listening sections." },
  { icon: "admin_panel_settings", title: "Real-Time Monitoring", desc: "Venue managers track active sessions live via a centralled dashboard, enabling instant escalation of any technical issue." },
  { icon: "support_agent", title: "On-Call Technical Support", desc: "A dedicated tech support line is staffed throughout every test session. Average issue-resolution time under 4 minutes." },
];

const schedule = [
  { day: "Sunday – Thursday", sessions: ["Morning: 08:00 – 12:30", "Afternoon: 13:30 – 18:00", "Evening: 18:30 – 21:00 (select venues)"] },
  { day: "Saturday", sessions: ["Morning: 09:00 – 13:00", "Afternoon: 14:00 – 18:00"] },
  { day: "Friday", sessions: ["Closed (Islamic weekend)"] },
];

const deliverySteps = [
  { step: "01", icon: "inventory_2", title: "Secure Material Receipt", desc: "Exam materials arrive in tamper-evident packaging, logged against an official chain-of-custody document on delivery day." },
  { step: "02", icon: "settings_suggest", title: "Pre-Session Configuration", desc: "Workstations are provisioned, lockdown browsers installed, and audio / network checks completed 90 minutes before candidates arrive." },
  { step: "03", icon: "badge", title: "Candidate Check-In", desc: "Biometric or photo-ID verification, digital registration confirmation, and a pre-test briefing are completed in the reception area." },
  { step: "04", icon: "play_circle", title: "Exam Administration", desc: "Proctors follow the testing body's exact administration script. Any deviation is logged and escalated immediately." },
  { step: "05", icon: "cloud_upload", title: "Secure Score Submission", desc: "Completed responses are encrypted and transmitted directly to the testing body's servers upon session end — no local storage of answers." },
];

const certifications = [
  { name: "IELTS", body: "British Council / IDP Australia", logo: "language" },
  { name: "PTE Academic", body: "Pearson", logo: "computer" },
  { name: "TOEFL iBT", body: "ETS", logo: "school" },
  { name: "OET", body: "Cambridge Boxhill", logo: "medical_services" },
  { name: "CELPIP", body: "Paragon Testing", logo: "flag" },
  { name: "CAEL", body: "Carleton University", logo: "account_balance" },
];

export default function ExamDeliveryPage() {
  return (
    <main className="pt-24 bg-background">
      {/* ── Hero ── */}
      <section className="relative crimson-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-16 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-white/40 text-sm">chevron_right</span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Exam Delivery</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                CBT · PBT · Remote
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight">
                Exam <span className="italic">Delivery</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                TEPTH administers internationally recognised English proficiency exams using certified delivery technology, rigorous protocols, and purpose-built infrastructure across the UAE.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-a-test"
                  className="bg-white text-primary font-headline font-bold px-8 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
                >
                  Book Your Exam <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  href="/our-venues"
                  className="bg-transparent text-white font-headline font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors border-solid"
                >
                  View Venues
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {[
                { icon: "event_available", value: "365", label: "Days Available" },
                { icon: "groups", value: "540+", label: "Daily Capacity" },
                { icon: "verified", value: "6", label: "Test Bodies" },
                { icon: "timer", value: "< 4 min", label: "Issue Resolution" },
              ].map((s) => (
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

      {/* ── Delivery Modes ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Test Formats</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight mb-4">
              Three Delivery Modes, One Standard of Excellence
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Whether you're sitting a computer-based, paper-based, or remote online exam, TEPTH delivers every format at the same certified standard required by the testing body.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryModes.map((m) => (
              <div
                key={m.title}
                className="group bg-white rounded-2xl border border-outline/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="crimson-gradient p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
                      </div>
                      <div>
                        <p className="text-white font-headline font-extrabold text-lg leading-tight">{m.title}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest bg-white/20 text-white px-2.5 py-1 rounded-full border border-white/30">{m.subtitle}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow gap-5">
                  <p className="text-on-surface-variant text-sm leading-relaxed">{m.desc}</p>

                  <ul className="space-y-2.5">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-outline/10">
                    <p className="text-[10px] font-extrabold text-primary tracking-widest uppercase mb-2">Available for</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <span key={t} className="text-[10px] font-bold text-primary bg-red-50 px-2 py-0.5 rounded border border-red-100 tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery Process ── */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">On Test Day</h2>
            <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">
              From Material Receipt to Score Submission
            </h3>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-outline/30 to-transparent mx-16 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {deliverySteps.map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="relative w-20 h-20 bg-white rounded-2xl shadow-md border border-outline/10 flex items-center justify-center group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                    <span className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[9px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow">
                      {s.step}
                    </span>
                  </div>
                  <h4 className="font-headline font-extrabold text-secondary text-base group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed max-w-[180px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Infrastructure ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase">The Technology Behind It</h2>
              <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight">
                Infrastructure Built for Zero Failure
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Every piece of our delivery infrastructure is engineered for reliability, security, and candidate comfort — so that on test day, you only focus on your exam.
              </p>
              <Link
                href="/our-venues"
                className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest uppercase hover:gap-3 transition-all"
              >
                Explore Our Venues
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infrastructure.map((i) => (
                <div
                  key={i.title}
                  className="group bg-white rounded-2xl p-6 border border-outline/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-primary group-hover:text-white text-xl transition-colors duration-300"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {i.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-secondary text-base mb-1.5 group-hover:text-primary transition-colors">{i.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{i.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accredited Test Bodies ── */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Official Authorisation</h2>
            <h3 className="text-3xl font-headline font-extrabold text-secondary">Accredited to Deliver</h3>
            <p className="text-on-surface-variant mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              TEPTH holds active delivery authorisation from all major English language testing bodies operating in the region.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="group bg-white rounded-2xl p-5 border border-outline/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary group-hover:text-white text-xl transition-colors duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {c.logo}
                  </span>
                </div>
                <p className="font-headline font-extrabold text-secondary text-sm group-hover:text-primary transition-colors">{c.name}</p>
                <p className="text-on-surface-variant text-[10px] mt-1 leading-tight">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: image */}
          <div className="flex-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uhLyklKIzZM0ZSqv8iCO4JbHXKFbha76pI9f3dsTBzTS1wNlG0_nn4yMWFmQ8ROHKPmuJNkC5FPRMR_9o8K4Jj3e8jRUnOf8ehrZmwV6EcbujMH_-n4dGA6qyQEU7l4yL0m8J4gGnNjch0GyMDSdFTUn0CkqUP9XbVCoyzb2CRJ_SsYexYXxwpunQoUDRvEnVUcudGFD1kM38vFvpaSRlWlv_8t2iA4sOq0dtHfxVe7BzAD5t0O1Z-Pdoby40vJ7BT7Y8yjYbOgSg"
                alt="TEPTH exam session in progress"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-2xl border border-outline/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-secondary text-sm">365 days</p>
                  <p className="text-on-surface-variant text-xs">Year-round availability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: schedule */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Test Schedule</h2>
              <h3 className="text-4xl font-headline font-extrabold text-secondary leading-tight mb-4">
                Flexible Sessions, Year-Round Availability
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base">
                We run multiple daily sessions across all three UAE venues so you can find a slot that fits your schedule — including evening tests at select locations.
              </p>
            </div>

            <div className="space-y-4">
              {schedule.map((row) => (
                <div key={row.day} className="bg-white rounded-2xl p-5 border border-outline/10 shadow-sm flex gap-5 items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-secondary text-sm mb-2">{row.day}</p>
                    <div className="flex flex-wrap gap-2">
                      {row.sessions.map((s) => (
                        <span key={s} className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${s === "Closed (Islamic weekend)" ? "text-on-surface-variant border-outline/20 bg-surface-container-low" : "text-primary border-red-100 bg-red-50"}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-on-surface-variant">
              Session timings may vary by venue and exam type. Confirm availability when booking.{" "}
              <Link href="/our-venues" className="text-primary font-bold hover:underline">View all venues →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto crimson-gradient rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <span className="material-symbols-outlined text-5xl mx-auto block" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
              Ready to sit your exam?
            </h3>
            <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
              Choose your format, select a date, and secure your seat at a TEPTH-accredited delivery centre across the UAE.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-a-test"
                className="bg-white text-primary font-headline font-bold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
              >
                Book a Test <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/exam-proctoring-services"
                className="bg-transparent text-white font-headline font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors border-solid"
              >
                Proctoring Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
