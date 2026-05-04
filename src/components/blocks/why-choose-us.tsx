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
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "./cards/base-card";

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
    <section className="base-px base-py bg-white">
      <div className="section-container">
        <div className="mb-16">
          <span className="section-label">Why Choose Us</span>
          <h3 className="section-title">
            Everything You Need, in <span>One Place</span>
          </h3>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-100 pt-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
            <BaseCard key={i} className="p-6 space-y-3">
              <BaseCardIcon>
                <feature.icon />
              </BaseCardIcon>
              <BaseCardTitle>{feature.title}</BaseCardTitle>
              <BaseCardDescription>{feature.description}</BaseCardDescription>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
