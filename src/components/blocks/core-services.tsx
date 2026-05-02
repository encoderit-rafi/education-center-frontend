import Link from "next/link";
import {
  ClipboardList,
  CheckCircle2,
  MessageSquare,
  Lock,
  Globe,
  Users,
  BarChart3,
  Building2,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Paid Mock Tests",
    description:
      "Sit a full scored mock exam in our centre or receive it online within 72 hours.",
    href: "/mock-tests",
    icon: ClipboardList,
  },
  {
    title: "Test Your English",
    description:
      "Take a free multiple-choice assessment and receive your level result by email instantly.",
    href: "/test-your-english",
    icon: CheckCircle2,
  },
  {
    title: "Free Consultation",
    description:
      "15 minutes with one of our teachers — ask about exams, courses, or preparation strategies.",
    href: "/free-consultation",
    icon: MessageSquare,
  },
  {
    title: "Exam Proctoring",
    description:
      "Professional proctoring services for institutions and remote test takers.",
    href: "/proctoring",
    icon: Lock,
  },
  {
    title: "Exam Delivery",
    description:
      "End-to-end exam delivery solutions for providers, vendors, and test-takers.",
    href: "/exam-delivery",
    icon: Globe,
  },
  {
    title: "Special Accommodation",
    description:
      "Tailored exam conditions for candidates with disabilities or special requirements.",
    href: "/special-accommodation",
    icon: Users,
  },
  {
    title: "Assessment Solutions",
    description:
      "Customised language assessment services for organisations and institutions.",
    href: "/assessment-solutions",
    icon: BarChart3,
  },
  {
    title: "Our Venues",
    description:
      "Noise-free, professional exam environment. Take a 360° virtual tour before you visit.",
    href: "/our-venues",
    icon: Building2,
  },
  {
    title: "Contact Us",
    description:
      "Reach our team via WhatsApp, Telegram, or our contact form. We reply within 24 hours.",
    href: "/contact",
    icon: MapPin,
  },
];

export default function CoreServices() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] lg:text-xs mb-4">
            Our Services
          </p>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-slate-900 tracking-tight uppercase">
            More Than Just an{" "}
            <span className="text-primary italic">Exam Centre</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
