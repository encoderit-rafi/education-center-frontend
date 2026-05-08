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
  GraduationCap,
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
    case "academic":
      return <GraduationCap size={24} />;
    default:
      return <Info size={24} />;
  }
};

const caelData = {
  id: EXAM_IDS_DATA.cael.id,
  name: "CAEL",
  image: "/images/exams/cael/cael-hero.jpg",
  content:
    "The CAEL Test measures the English language proficiency of students planning to study at Canadian universities and colleges.",
  overview:
    "The CAEL Test (Canadian Academic English Language Test) is a computer-delivered test that evaluates your ability to use English in academic contexts. It is accepted by over 180 Canadian academic institutions and professional organizations.\n\nThe test is designed to reflect the language tasks you will perform in a university or college setting, such as reading articles, listening to lectures, and responding to academic prompts. The results provide an accurate representation of your English language skills in an educational environment.",
  testFormatIntro:
    "The CAEL Test is divided into five main components, all completed in a single computer-based session. The integrated nature of the test ensures that you are evaluated on your ability to combine skills just as you would in a real academic setting.",
  resultTimeline: "8 Business Days",
  stats: [
    { label: "Total Duration", value: "3.5 Hours" },
    { label: "Format", value: "Computer" },
    { label: "Sitting", value: "Single" },
    { label: "Acceptance", value: "180+ Inst." },
  ],
  whoShouldTake: [
    "Students applying for undergraduate or postgraduate programs in Canada",
    "Professionals seeking registration with Canadian regulatory bodies",
    "Individuals requiring proof of academic English proficiency for institutional admission",
  ],
  acceptedFor: [
    "University Admissions (Canada)",
    "College Admissions (Canada)",
    "Professional Registration",
    "Study Permit Applications",
  ],
  sections: [
    {
      icon: "speaking",
      name: "Speaking",
      duration: "7–10 minutes",
      details: "Reply to on-screen prompts verbally.",
      format: "Test takers respond to three speaking tasks that reflect common university-level communication scenarios.",
    },
    {
      icon: "reading",
      name: "Integrated Reading",
      duration: "35–50 minutes",
      details: "Read passages and reply to questions.",
      format: "Read one long academic text and answer questions, evaluating comprehension and information retrieval skills.",
    },
    {
      icon: "listening",
      name: "Integrated Listening",
      duration: "25–35 minutes",
      details: "Listen to passages and reply to questions.",
      format: "Listen to one long academic lecture and answer questions based on the content and key details.",
    },
    {
      icon: "academic",
      name: "Academic Unit A",
      duration: "60–70 minutes",
      details: "Answer comprehension questions and write a reply.",
      format: "Combines reading and listening materials on a specific academic topic, followed by a writing task that integrates information from both sources.",
    },
    {
      icon: "academic",
      name: "Academic Unit B",
      duration: "40–45 minutes",
      details: "Answer comprehension questions and write a reply.",
      format: "Similar to Unit A, this section focuses on a different academic theme, requiring students to synthesize information through reading, listening, and writing.",
    },
  ],
};

export default function ExamCAEL() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={caelData.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Exam Details
          </div>
          <h1 className="base-hero-section-heading text-white">
            {caelData.name}{" "}
            <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {caelData.content}
          </p>
          <Link
            href={`/book-exams/${caelData.id}`}
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
          {caelData.stats?.map((stat, i) => (
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
          {caelData.resultTimeline && (
            <BaseCard className="flex flex-col items-center bg-white justify-center p-6 text-center shadow-xl border-primary/20 ">
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {caelData.resultTimeline}
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
              {caelData.overview.split("\n\n").map((para, i) => (
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
            {caelData.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {caelData.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {caelData.sections.map((section, i) => (
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
                                Component Details
                              </p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {section.format}
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
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {caelData.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Who Should Take This?
              </h3>
              <ul className="space-y-4">
                {caelData.whoShouldTake.map((item, i) => (
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

          {caelData.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Accepted For
              </h3>
              <ul className="space-y-4">
                {caelData.acceptedFor.map((item, i) => (
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
                  Book your {caelData.name} test date today at TEPTH.
                </p>
              </div>
              <Link
                href={`/book-exams/${caelData.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg",
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official CAEL Test Centre partners ensuring high standards of
                delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
