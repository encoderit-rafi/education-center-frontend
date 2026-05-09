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
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-5xl xl:text-6xl mb-6">
                {data.hero.title}{" "}
                <span className="text-primary">{data.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {data.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#booking-section"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "px-8 py-6 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300",
                  )}
                >
                  Book Your Test
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/free-consultation"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "px-8 py-6 text-base font-bold hover:bg-slate-50 transition-all duration-300",
                  )}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="base-py bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 lg:text-4xl mb-4">
              {data.benefits.title}{" "}
              <span className="text-primary">
                {data.benefits.titleHighlight}
              </span>
            </h2>
            <p className="text-slate-600 text-lg">
              {data.benefits.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.benefits.items.map((benefit, index) => (
              <BaseCard
                key={index}
                className="p-8 flex flex-col h-full border-slate-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <BaseCardIcon>
                    {iconMap[benefit.icon] || <Activity />}
                  </BaseCardIcon>
                  <span className="text-4xl font-black text-slate-50 opacity-10 select-none group-hover:opacity-20 transition-opacity">
                    0{index + 1}
                  </span>
                </div>

                <BaseCardTitle className="mb-4 text-lg">
                  {benefit.title}
                </BaseCardTitle>

                <BaseCardDescription className="mb-6 line-clamp-none text-slate-600 leading-relaxed">
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
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h3 className="text-white text-3xl font-bold italic mb-8 leading-snug">
            "{data.testimonial.quote}"
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">
            {data.testimonial.tagline}
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="base-py bg-white">
        <div className="section-container base-px">
          <h2 className="section-title text-center mb-10">
            {data.booking.title}{" "}
            <span className="text-primary">{data.booking.titleHighlight}</span>
          </h2>
          <MockTestBookingForm
            initialMockTestId={data.booking.initialMockTestId}
          />
        </div>
      </section>
    </div>
  );
}
