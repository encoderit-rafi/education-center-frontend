import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  Clock,
  PenTool,
  ShieldCheck,
  TrendingUp,
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
import api from "@/axios";
import Image from "next/image";

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
  try {
    const res = await api.get("/mock-tests");
    console.log("👉 ~ generateStaticParams ~ res:", res);
    if (res.data?.success) {
      return res.data.data.data.map((item: any) => ({
        id: item.slug,
      }));
    }
  } catch (error) {
    console.error("Error fetching mock tests for static params:", error);
  }
  return [];
}

export default async function PaidMockTestDynamicPage({ params }: PageProps) {
  const { id } = await params;

  let data = null;
  try {
    const response = await api.get(`/mock-tests/${id}`);
    console.log("👉 ~ PaidMockTestDynamicPage ~ response:", response);
    if (response.data?.success) {
      data = response.data.data;
    }
  } catch (error) {
    console.error("Failed to fetch mock test:", error);
  }

  if (!data) {
    notFound();
  }

  const notesParts = data.details?.notes
    ? data.details.notes.split(" — ")
    : ["", ""];
  const quote = notesParts[0];
  const tagline = notesParts[1] || "";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container relative mx-auto px-4 py-12 lg:px-8 lg:py-20 max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
                {data.name} <span className="text-primary">Paid Mock Test</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {data.description}
              </p>
              <Link
                href={`/paid-mock-tests/registration?id=${data.slug}`}
                className={cn(buttonVariants())}
              >
                Purchase
              </Link>
            </div>
            <Image
              src={`/images/mock-test-${data.slug}.jpg`}
              alt={data.name}
              className="w-full h-full object-cover aspect-video"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 lg:text-3xl mb-3">
              Benefits of Mock Tests for{" "}
              <span className="text-primary">
                {data.details?.sub_title || data.name}
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              {data.details?.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.details?.content?.map((benefit: any, index: number) => (
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

                <BaseCardDescription className="mb-4 line-clamp-none text-slate-600 leading-relaxed text-sm flex flex-col gap-2">
                  {benefit.description_list &&
                    benefit.description_list.length > 0 && (
                      <p>{benefit.description_list[0]}</p>
                    )}
                  {benefit.description_list &&
                    benefit.description_list.length > 1 && (
                      <p>{benefit.description_list[1]}</p>
                    )}
                </BaseCardDescription>

                {benefit.description_list &&
                  benefit.description_list.length > 2 && (
                    <ul className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                      {benefit.description_list
                        .slice(2)
                        .map((point: string, i: number) => (
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
      {quote && (
        <section className="bg-slate-50 py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h3 className="text-secondary text-2xl font-bold italic mb-6 leading-snug">
              &quot;{quote}&quot;
            </h3>

            <Link
              href={`/paid-mock-tests/registration?id=${data.slug}`}
              className={cn(
                buttonVariants(),
                "px-4 sm:px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300 ",
              )}
            >
              Purchase
            </Link>
            {tagline && (
              <p className="text-slate-500 font-medium text-xs mt-3">
                {tagline}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
