import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  Clock,
  PenTool,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Brain,
  Zap,
  Shuffle,
  Gauge,
  BookOpen,
  Mic,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { buttonVariants } from "@/components/ui/button";
import MockTestBookingForm from "../_components/mock-test-booking-form";
import { PAID_MOCK_TESTS_DATA } from "@/data";

// Icon mapping to handle dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity />,
  Clock: <Clock />,
  PenTool: <PenTool />,
  ShieldCheck: <ShieldCheck />,
  TrendingUp: <TrendingUp />,
  Monitor: <Monitor />,
  Brain: <Brain />,
  Zap: <Zap />,
  Shuffle: <Shuffle />,
  Gauge: <Gauge />,
  BookOpen: <BookOpen />,
  Mic: <Mic />,
  Timer: <Timer />,
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return Object.values(PAID_MOCK_TESTS_DATA).map((item) => ({
    id: item.id,
  }));
}

export default async function PaidMockTestDynamicPage({ params }: PageProps) {
  const { id } = await params;
  const data = Object.values(PAID_MOCK_TESTS_DATA).find(
    (item) => item.id === id,
  );

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative mx-auto px-4 py-12 lg:px-8 lg:py-20 max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
                {data.hero.title}{" "}
                <span className="text-primary">{data.hero.titleHighlight}</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {data.hero.description}
              </p>
              <Link
                href="#booking-section"
                className={cn(
                  buttonVariants(),
                  "px-4 sm:px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300",
                )}
              >
                Register Now
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 lg:text-3xl mb-3">
              {data.benefits.title}{" "}
              <span className="text-primary">
                {data.benefits.titleHighlight}
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              {data.benefits.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.benefits.items.map((benefit, index) => (
              <BaseCard
                key={index}
                className="p-6 flex flex-col h-full border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <BaseCardIcon>
                    {iconMap[benefit.icon] || <Activity />}
                  </BaseCardIcon>
                  <span className="text-3xl font-black text-slate-50 opacity-10 select-none group-hover:opacity-20 transition-opacity">
                    0{index + 1}
                  </span>
                </div>

                <BaseCardTitle className="mb-2 text-base">
                  {benefit.title}
                </BaseCardTitle>

                <BaseCardDescription className="mb-4 line-clamp-none text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </BaseCardDescription>

                {benefit.points && (
                  <ul className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    {benefit.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </BaseCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h3 className="text-secondary text-2xl font-bold italic mb-6 leading-snug">
            "{data.testimonial.quote}"
          </h3>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>

          <Link
            href="#booking-section"
            className={cn(
              buttonVariants(),
              "px-4 sm:px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300 ",
            )}
          >
            Register Now
            <ArrowRight className="ml-2 size-5" />
          </Link>
          <p className="text-slate-500 font-medium text-xs mt-3">
            {data.testimonial.tagline}
          </p>
        </div>
      </section>
    </div>
  );
}
