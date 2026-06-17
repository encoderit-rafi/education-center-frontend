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

const FALLBACK_DETAILS: Record<string, any> = {
  ielts: {
    sub_title: "IELTS",
    description:
      "The International English Language Testing System is heavily influenced by time pressure, question familiarity, and writing expectations. Mock tests help in ways that normal practice cannot.",
    notes:
      "By the time they enter the real test room, it feels like just another practice session. — The TEPTH Mock Test Experience",
    content: [
      {
        title: "Understanding the Exam Rhythm",
        icon: "Activity",
        description_list: [
          "In IELTS, the order of tasks matters. Listening flows into reading, and both require intense concentration. When students do full mock tests, they learn how to maintain focus for nearly three hours, which many first-time candidates underestimate.",
        ],
      },
      {
        title: "Training Your Brain for Time Allocation",
        icon: "Clock",
        description_list: [
          "IELTS Reading is where many students lose marks. Through mock tests, students learn:",
          "This time awareness usually improves scores by 1-1.5 bands for many candidates.",
          "When to skip a difficult question",
          "How to scan instead of read every line",
          "How much time to spend on each passage",
        ],
      },
      {
        title: "Mastering Writing Task Expectations",
        icon: "PenTool",
        description_list: [
          "Many candidates think their English is good but still score Band 6 or 6.5 in Writing. Mock tests reveal:",
          "Real timed practice exposes weaknesses that normal writing practice hides.",
          "whether Task 2 arguments are strong enough",
          "if Task 1 reports are structured properly",
          "whether the writing fits 20 minutes and 40 minutes limits",
        ],
      },
      {
        title: "Reducing Test-Day Anxiety",
        icon: "ShieldCheck",
        description_list: [
          "Students who sit their first full IELTS test on exam day often panic because the environment feels unfamiliar. Mock tests simulate:",
          "By the time they enter the real test room, it feels like just another practice session.",
          "the pressure",
          "the strict timing",
          "the mental fatigue",
        ],
      },
      {
        title: "Identifying Score Patterns",
        icon: "TrendingUp",
        description_list: [
          "Through multiple mock tests, teachers can identify patterns such as:",
          "This helps create targeted improvement plans.",
          "strong listening but weak reading",
          "good vocabulary but poor essay structure",
          "careless mistakes due to rushing",
        ],
      },
    ],
  },
  toefl: {
    sub_title: "TOEFL iBT",
    description:
      "After teaching TOEFL preparation for many years, I always tell my students something very simple: the TOEFL exam is not only about English ability anymore — it is about how quickly and efficiently you can respond in a digital, adaptive test environment. With the updated TOEFL format being shorter, faster, and more adaptive, mock tests have become even more critical for test-takers.",
    notes:
      "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency. — Master the Shorter, Faster TOEFL iBT",
    content: [
      {
        title: "Preparing for the Adaptive Nature of the Test",
        icon: "Shuffle",
        description_list: [
          "One of the most significant changes in the updated TOEFL is the adaptive system in sections such as Reading and Listening. This means the difficulty of later questions can change depending on how well a student performs earlier. Mock tests help students understand how this adaptive structure feels in practice. When students experience this format several times, they learn two important habits:",
          "Without exposure to this format, many candidates become distracted when the difficulty shifts, which can affect performance in the remaining questions.",
          "maintaining accuracy from the beginning of the section",
          "staying calm even when questions suddenly become more challenging.",
        ],
      },
      {
        title: "Training for the Faster Test Pace",
        icon: "Gauge",
        description_list: [
          "The updated TOEFL has reduced the overall test time to around 90 minutes, which means the pace is noticeably faster. Students now have less time to process information and respond. Mock tests help students develop:",
          "When students practice under real time limits, they learn to prioritize essential information instead of overthinking every detail, which is crucial in the new format.",
          "faster reading comprehension",
          "quick note-taking during listening tasks",
          "immediate response planning for speaking questions.",
        ],
      },
      {
        title: "Practicing New Task Types",
        icon: "BookOpen",
        description_list: [
          "The latest TOEFL includes new task styles that focus more on practical communication. For example, some speaking and writing tasks resemble real academic interactions, such as responding to short prompts, summarizing information quickly, or composing brief written responses. Mock tests allow students to:",
          "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency.",
          "become familiar with the structure of these newer tasks",
          "understand the level of detail expected in short responses",
          "avoid spending too much time planning answers.",
        ],
      },
      {
        title: "Strengthening Rapid Speaking Responses",
        icon: "Mic",
        description_list: [
          "In the updated format, speaking tasks require students to organize and deliver ideas quickly. There is very little preparation time before recording begins. Through mock tests, students gradually develop the ability to:",
          "This kind of fluency rarely develops through classroom practice alone. Timed mock testing is what builds real speaking confidence.",
          "structure responses within seconds",
          "speak clearly without long pauses",
          "maintain logical organization even under pressure.",
        ],
      },
      {
        title: "Building Stamina for an Intensive Digital Test",
        icon: "Timer",
        description_list: [
          "Although the test is shorter, the updated TOEFL demands continuous concentration. Students must switch quickly between reading, listening, speaking, and writing without losing focus. Mock tests simulate this exact experience. After several full-length practices, students learn how to:",
          "This mental endurance often separates students scoring mid-range marks from those achieving top scores.",
          "manage mental fatigue",
          "maintain focus during rapid transitions between tasks",
          "remain consistent across all sections.",
        ],
      },
      {
        title: "Providing Realistic Score Feedback",
        icon: "TrendingUp",
        description_list: [
          "Well-designed mock tests help both teachers and students evaluate readiness. They reveal patterns such as:",
          "Once these patterns are visible, preparation becomes far more focused and productive.",
          "strong listening but weak speaking organization",
          "slow reading speed under timed conditions",
          "unclear structure in short written responses.",
        ],
      },
    ],
  },
  pte: {
    sub_title: "PTE",
    description:
      "The Pearson Test of English Academic is very different from traditional exams. It is fully computer-scored, and understanding the scoring logic is critical. Mock tests are therefore essential.",
    notes:
      "PTE mock tests are the only way to understand how the AI scoring system evaluates your performance in real-time. — The TEPTH Digital Experience",
    content: [
      {
        title: "Learning the Computer Interface",
        icon: "Monitor",
        description_list: [
          "Many students lose marks simply because they are unfamiliar with:",
          "Mock tests allow students to practice with the interface until it becomes automatic.",
          "microphone timing",
          "recording countdowns",
          "typing speed requirements",
          "highlighting tools",
        ],
      },
      {
        title: "Understanding the Integrated Scoring System",
        icon: "Brain",
        description_list: [
          "PTE tasks often contribute to multiple skills simultaneously. For example:",
          "Mock tests show students which tasks give the highest score impact, allowing smarter preparation.",
          "Repeat Sentence affects Listening and Speaking",
          "Reading & Writing Fill in the Blanks affects Reading and Writing",
        ],
      },
      {
        title: "Improving Response Speed",
        icon: "Zap",
        description_list: [
          "PTE is extremely fast-paced. In speaking tasks, you often have only 3–5 seconds to begin speaking. Mock testing trains students to:",
          "Without mock practice, many candidates freeze during these short preparation windows.",
          "start speaking immediately",
          "avoid long pauses",
          "maintain natural fluency",
        ],
      },
      {
        title: "Building Stamina for the Digital Format",
        icon: "Activity",
        description_list: [
          "The PTE exam can feel mentally exhausting because everything happens on a computer and requires constant attention. Mock tests prepare students for:",
          "",
          "long screen time",
          "rapid task switching",
          "Maintaining concentration without breaks.",
        ],
      },
      {
        title: "Predicting Real Scores",
        icon: "TrendingUp",
        description_list: [
          "High-quality PTE mock tests often provide AI-based score estimates that closely resemble real exam scoring. This allows students to:",
          "",
          "measure readiness",
          "identify weak task types",
          "Adjust strategy before the real test.",
        ],
      },
    ],
  },
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

  // Populate details from fallbacks if not present in the backend
  if (data && !data.details) {
    let cleanSlug = data.slug.replace(/-\d+$/, "").toLowerCase();
    if (cleanSlug === "toefl-ibt") {
      cleanSlug = "toefl";
    }
    data.details = FALLBACK_DETAILS[cleanSlug] || FALLBACK_DETAILS[data.slug.toLowerCase()] || null;
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
              <p className="text-base text-slate-600 leading-relaxed mb-4 text-justify">
                {data.description}
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
              Benefits of Mock Tests for{" "}
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

      {/* Testimonial/Quote Section */}
      {quote && (
        <section className="bg-slate-50 py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h3 className="text-secondary text-2xl font-bold italic mb-6 leading-snug">
              &quot;{quote}&quot;
            </h3>

            <AcceptPayButton
              data={data}
              className={cn(
                buttonVariants(),
                "px-4 sm:px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300 ",
              )}
            >
              I Accept, Pay
            </AcceptPayButton>

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
