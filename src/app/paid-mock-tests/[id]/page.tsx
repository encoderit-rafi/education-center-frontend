import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
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
import { AcceptPayButton } from "./AcceptPayButton";
import { MockTestTypeSelector } from "./MockTestTypeSelector";

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


const EXAM_ARABIC_NAMES: Record<string, string> = {
  ielts: "آيلتس",
  pte: "بي تي إي",
  toefl: "توفل آي بي تي",
  "toefl-ibt": "توفل آي بي تي",
  cael: "كايل",
  "celpip-general": "سيلبيب عام",
  celpip: "سيلبيب عام",
  "skill-for-english-selt": "سكيلز فور إنجلش (سيلت)",
  "skills-for-english-selt": "سكيلز فور إنجلش (سيلت)",
  oet: "أو إي تي",
  gre: "جي آر إي",
};

const getExamArabicName = (slug: string, name: string) => {
  const clean = slug.replace(/-\d+$/, "").toLowerCase();
  if (EXAM_ARABIC_NAMES[clean]) return EXAM_ARABIC_NAMES[clean];
  const upper = name.toUpperCase();
  if (upper.includes("IELTS")) return "آيلتس";
  if (upper.includes("PTE")) return "بي تي إي";
  if (upper.includes("TOEFL")) return "توفل آي بي تي";
  if (upper.includes("CAEL")) return "كايل";
  if (upper.includes("CELPIP")) return "سيلبيب عام";
  if (upper.includes("SKILL")) return "سكيلز فور إنجلش (سيلت)";
  return name;
};

export default async function PaidMockTestDynamicPage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const t = await getTranslations("PaidMockTestsPage");

  let data = null;
  try {
    const response = await api.get(`/mock-tests/${id}`);

    if (response.data?.success) {
      data = response.data.data;
    }
  } catch (error) {
    console.error("Failed to fetch mock test:", error);
  }

  if (!data) {
    notFound();
  }
  let fallback: Record<string, any> = {};
  if (data) {
    let cleanSlug = data.slug.replace(/-\d+$/, "").toLowerCase();
    if (cleanSlug.includes("ielts")) {
      cleanSlug = "ielts";
    } else if (cleanSlug.includes("pte")) {
      cleanSlug = "pte";
    } else if (cleanSlug.includes("toefl") || cleanSlug.includes("toelf")) {
      cleanSlug = "toefl";
    }
    const originalDetails = data.details || {};
    const fallbackDetails = t.raw("fallbackDetails") as Record<string, any>;
    fallback =
      fallbackDetails[cleanSlug] ||
      fallbackDetails[data.slug.toLowerCase()] ||
      {};
    data.details = isRtl
      ? {
          ...originalDetails,
          ...fallback,
          description: fallback.description || originalDetails.description,
          sub_title: fallback.sub_title || originalDetails.sub_title,
          content: fallback.content || originalDetails.content,
        }
      : {
          ...fallback,
          ...originalDetails,
        };

  }

  const notesParts = data.details?.notes
    ? data.details.notes.split(" — ")
    : ["", ""];
  const quote = notesParts[0];
  const tagline = notesParts[1] || "";

  const pageDescription = isRtl
    ? (fallback.description || data.details?.description || data.description)
    : (data.description || data.details?.description);

  const arabicExamName = getExamArabicName(data.slug, data.name);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container relative mx-auto px-4 py-12 lg:px-8 lg:py-20 max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
                {isRtl ? (
                  <>
                    {t("paidMockTest")}{" "}
                    <span className="text-primary">{arabicExamName}</span>
                  </>
                ) : (
                  <>
                    {data.name}{" "}
                    <span className="text-primary">{t("paidMockTest")}</span>
                  </>
                )}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-4 text-justify">
                {pageDescription}
              </p>
              <MockTestTypeSelector data={data} />
            </div>
            <Image
              src={`/images/mock-test-${data.slug.replace(/-\d+$/, "")}.jpg`}
              alt={data.name}
              className="w-full h-full object-cover"
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
              {t("benefitsTitle")}{" "}
              <span className="text-primary">
                {data.details?.sub_title || data.name}
              </span>
            </h2>
            <p className="text-slate-600 text-base text-justify">
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

                <BaseCardDescription className="mb-4 line-clamp-none text-slate-600 leading-relaxed text-sm flex flex-col gap-2 text-justify">
                  {benefit.description_list &&
                    benefit.description_list.length > 0 && (
                      <p>{benefit.description_list[0]}</p>
                    )}
                </BaseCardDescription>

                {benefit.description_list &&
                  benefit.description_list.length > 2 && (
                    <ul className="space-y-3 pb-6 mb-4 border-b border-slate-100">
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

                {benefit.description_list &&
                  benefit.description_list.length > 1 &&
                  benefit.description_list[1] && (
                    <p className="mt-auto text-sm text-slate-600 leading-relaxed font-semibold">
                      {benefit.description_list[1]}
                    </p>
                  )}
              </BaseCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
