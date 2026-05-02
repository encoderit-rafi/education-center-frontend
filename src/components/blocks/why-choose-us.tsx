import {
  GraduationCap,
  MapPin,
  ShieldCheck,
  Trophy,
  Calendar,
  Headphones,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const WhyChooseUs = () => {
  const stats = [
    {
      icon: GraduationCap,
      label: "Noise-free Environment",
    },
    {
      icon: MapPin,
      label: "Top-notch Facility",
    },
    {
      icon: ShieldCheck,
      label: "Quality Service",
    },
    {
      icon: Trophy,
      label: "Licensed & Accredited",
    },
  ];

  const features = [
    {
      title: "Accredited Testing Centre",
      description:
        "Authorised by leading exam bodies — British Council, ETS, Pearson, and more.",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Test Dates",
      description:
        "Frequent exam slots available. Book online and choose your preferred date and time.",
      icon: Calendar,
    },
    {
      title: "Expert Preparation Courses",
      description:
        "Group, semi-private, and 1-to-1 courses tailored to your target score and timeline.",
      icon: GraduationCap,
    },
    {
      title: "Paid Mock Tests",
      description:
        "Sit a realistic mock exam in our centre or receive it online. Scored and timed.",
      icon: FileText,
    },
    {
      title: "Dedicated Support",
      description:
        "Our team answers your questions via WhatsApp, Telegram, or our contact form.",
      icon: Headphones,
    },
    {
      title: "Instant Tax Invoices",
      description:
        "VAT-compliant tax invoice automatically emailed to you after every payment.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] lg:text-xs mb-4">
            Why Choose Us
          </p>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-slate-900 tracking-tight uppercase">
            Everything You Need, in{" "}
            <span className="text-primary italic">One Place</span>
          </h3>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-100 pt-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold leading-tight text-slate-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
              ></span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-sm font-bold text-slate-900 lg:text-base">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500 lg:text-[13px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
