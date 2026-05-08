import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Info,
  BookOpen,
  Headphones,
  PenTool,
  Mic2,
  Trophy,
  Globe,
  Zap,
} from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import BaseHeroSection from "@/components/base-hero-section";
import { EXAM_IDS_DATA } from "@/data";
import { cn } from "@/lib/utils";

const IconTile = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "reading":
      return <BookOpen size={24} />;
    case "listening":
      return <Headphones size={24} />;
    case "writing":
      return <PenTool size={24} />;
    case "speaking":
      return <Mic2 size={24} />;
    default:
      return <Info size={24} />;
  }
};

const toeflData = {
  id: EXAM_IDS_DATA.toefl.id,
  name: "TOEFL iBT",
  image: "/images/exams/toefl/toefl-hero.jpg",
  content:
    "The TOEFL iBT is an Internet-based English proficiency test that measures reading, listening, speaking, and writing skills in an academic context.",
  overview:
    "The TOEFL iBT is used primarily for academic admissions, immigration, and professional certification. It takes about 1.5 hours to complete in one sitting, though test takers should allow approximately two hours for the entire process including directions.\n\nAs the test adapts to each individual, the specific items and exact timing may vary slightly. It is widely recognized as one of the most respected English-language tests in the world, accepted by more than 11,500 universities and other institutions in over 160 countries.",
  testFormatIntro:
    "The TOEFL iBT Format consists of four sections. Please note that test time does not include directions. As the test adapts, test time and items may vary.",
  resultTimeline: "3 Days",
  stats: [
    { label: "Total Duration", value: "~2 Hours" },
    { label: "Format", value: "Internet-based" },
    { label: "Validity", value: "2 Years" },
    { label: "Acceptance", value: "Global" },
  ],
  whoShouldTake: [
    "Students planning to study at a higher education institution",
    "English-language learning program admissions and exit",
    "Scholarship and certification candidates",
    "English-language learners who want to track their progress",
    "Students and workers applying for visas",
  ],
  acceptedFor: [
    "Academic Admissions",
    "Immigration",
    "Professional Certification",
    "Student Visas",
  ],
  sections: [
    {
      icon: "reading",
      name: "Reading",
      duration: "Approx. 30 minutes",
      questions: "50 items",
      details: "Read academic and daily life texts to evaluate comprehension.",
      format:
        "• Complete the Words\n• Read in Daily Life\n• Read an Academic Passage",
    },
    {
      icon: "listening",
      name: "Listening",
      duration: "Approx. 29 minutes",
      questions: "47 items",
      details:
        "Evaluate your ability to understand conversations and lectures in English.",
      format:
        "• Listen and Choose a Response\n• Listen to a Conversation\n• Listen to an Announcement\n• Listen to an Academic Talk",
    },
    {
      icon: "writing",
      name: "Writing",
      duration: "Approx. 23 minutes",
      questions: "12 items",
      details: "Write responses to academic and practical prompts.",
      format:
        "• Build a Sentence\n• Write an Email\n• Write for an Academic Discussion",
    },
    {
      icon: "speaking",
      name: "Speaking",
      duration: "Approx. 8 minutes",
      questions: "11 items",
      details: "Respond to prompts verbally to demonstrate speaking proficiency.",
      format: "• Listen and Repeat\n• Take an Interview",
    },
  ],
};

export default function ExamTOEFL() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={toeflData.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Exam Details
          </div>
          <h1 className="base-hero-section-heading text-white">
            {toeflData.name}{" "}
            <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {toeflData.content}
          </p>
          <Link
            href={`/book-exams/${toeflData.id}`}
            className={buttonVariants({ size: "lg", className: "gap-2" })}
          >
            <Calendar className="size-4" />
            Book Your Exam
          </Link>
        </div>
      </BaseHeroSection>

      {/* Stats/Quick Info */}
      <div className="relative z-10 -mt-12 section-container base-px">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {toeflData.stats?.map((stat, i) => (
            <BaseCard
              key={i}
              className="flex flex-col items-center justify-center p-6 text-center shadow-xl"
            >
              <p className="text-2xl font-bold text-gray-900 lg:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">
                {stat.label}
              </p>
            </BaseCard>
          ))}
          {toeflData.resultTimeline && (
            <BaseCard className="flex flex-col items-center bg-white justify-center p-6 text-center shadow-xl border-primary/20 ">
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {toeflData.resultTimeline}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                Result Timeline
              </p>
            </BaseCard>
          )}
        </div>
      </div>

      <div className="section-container base-px base-py grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-16">
          {/* Overview Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
            </div>
            <div className="prose prose-red max-w-none text-gray-600 leading-relaxed space-y-4">
              {toeflData.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Test Format Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Test Format</h2>
            </div>
            {toeflData.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {toeflData.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {toeflData.sections.map((section, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <IconTile icon={section.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {section.name}
                        </h3>
                        <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 border border-gray-100">
                          <Clock className="size-4" />
                          {section.duration}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {section.details}
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-gray-50">
                          {section.format && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Task Types
                              </p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {section.format}
                              </p>
                            </div>
                          )}
                          {section.questions && (
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Questions
                              </p>
                              <p className="text-sm font-medium text-gray-900 whitespace-pre-line">
                                {section.questions}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results & Score Reports */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">
                Results & Score Reports
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <BaseCard className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-red-50 text-primary">
                    <Trophy size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">Score Delivery</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Scores are available in your ETS account 3 days after your
                      test date. You will receive an email when they are ready.
                    </p>
                  </div>
                </div>
              </BaseCard>

              <BaseCard className="p-6 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">PDF Score Report</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Downloadable PDF versions are available 24-48 hours after
                      you receive your electronic scores.
                    </p>
                  </div>
                </div>
              </BaseCard>

              <BaseCard className="p-6 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Globe size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">Hard Copy</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mailed 11–15 days after your test date if requested
                      pre-test. Delivery times vary by local postal services.
                    </p>
                  </div>
                </div>
              </BaseCard>

              <BaseCard className="p-6 border-l-4 border-l-green-500">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Zap size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">Express Shipping</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Available in 75 countries. Delivered only 2–5 business
                      days after scores are confirmed for a small fee.
                    </p>
                  </div>
                </div>
              </BaseCard>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600 italic">
              Note: Your designated score recipients will receive your scores
              depending on what method of score delivery they use.
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {toeflData.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Who Should Take This?
              </h3>
              <ul className="space-y-4">
                {toeflData.whoShouldTake.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          {toeflData.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Accepted For
              </h3>
              <ul className="space-y-4">
                {toeflData.acceptedFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          )}

          <GradientBox className="p-8 text-center rounded-3xl">
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FileText size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Start?
                </h3>
                <p className="text-sm text-red-100">
                  Book your {toeflData.name} test date today at TEPTH.
                </p>
              </div>
              <Link
                href={`/book-exams/${toeflData.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg",
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official TOEFL iBT Test Centre partners ensuring high standards
                of delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
