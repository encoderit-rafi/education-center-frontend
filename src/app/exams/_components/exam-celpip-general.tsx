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

const celpipGeneralData = {
  id: EXAM_IDS_DATA.celpip_general.id,
  name: "CELPIP General",
  image: "/images/exams/celpip/celpip-hero.jpg",
  content:
    "The Canadian English Language Proficiency Index Program (CELPIP) is a complete English proficiency test evaluating listening, reading, writing, and speaking skills.",
  overview:
    "The CELPIP – General evaluates test taker’s English listening, reading, writing, and speaking skills and is officially designated for permanent residence applications by Immigration, Refugees and Citizenship Canada (IRCC), visa purposes by the Australian Department of Home Affairs (DHA), and is also accepted for professional designations and by Universities, Colleges and Vocational Programs.\n\nIt is a computer-delivered test and it takes under 2 hours and 50 minutes to complete and can be done in one sitting with no separate speaking session. The Results are available online within 3-4 business days after the test date. The PDF score report is official and accepted by institutions.",
  testFormatIntro:
    "The CELPIP - General Test has four components: Listening, Reading, Writing, and Speaking. Test takers will be required to read answer choices in the Listening Test and questions in the Speaking Test.",
  resultTimeline: "3-4 Days",
  stats: [
    { label: "Total Duration", value: "2h 50m" },
    { label: "Format", value: "Computer" },
    { label: "Sitting", value: "Single" },
    { label: "Availability", value: "Online" },
  ],
  whoShouldTake: [
    "Permanent residence applicants (IRCC Canada)",
    "Visa applicants for Australia (DHA)",
    "Individuals seeking professional designations",
    "Students applying to Universities and Colleges",
  ],
  acceptedFor: [
    "Permanent Residency",
    "Professional Designation",
    "Australian Visa",
    "Academic Admissions",
  ],
  sections: [
    {
      icon: "listening",
      name: "Listening Component",
      duration: "47–55 minutes",
      details:
        "Listen to passages and answer questions. The Listening Test contains 6 parts designed to evaluate various real-life listening scenarios.",
      format:
        "Part 1: Listening to Problem Solving\nPart 2: Listening to a Daily Life Conversation\nPart 3: Listening for Information\nPart 4: Listening to a News Item\nPart 5: Listening to a Discussion\nPart 6: Listening to Viewpoints",
      questions: "38-40 questions",
      taskTypes: "Multiple Choice",
      marks:
        "The test may contain unscored reading or listening items used for test development. These can be found anywhere and will have the same format as scored items.",
    },
    {
      icon: "reading",
      name: "Reading Component",
      duration: "55–60 minutes",
      details:
        "Read passages and answer questions. Evaluate your ability to understand written correspondence, diagrams, and discursive texts.",
      format:
        "Part 1: Reading Correspondence\nPart 2: Reading to Apply a Diagram\nPart 3: Reading for Information\nPart 4: Reading for Viewpoints",
      questions: "38-40 questions",
      taskTypes: "Multiple Choice, Gap Fill",
    },
    {
      icon: "writing",
      name: "Writing Component",
      duration: "53–60 minutes",
      details:
        "Respond to questions with written answers. Focuses on practical communication such as email writing and responding to survey questions.",
      format:
        "Task 1: Writing an Email\nTask 2: Responding to Survey Questions",
      questions: "2 tasks",
    },
    {
      icon: "speaking",
      name: "Speaking Component",
      duration: "15–20 minutes",
      details:
        "Reply to on-screen prompts verbally. This component is completed in the same sitting as the other tests.",
      format:
        "Task 1: Giving Advice\nTask 2: Talking about a Personal Experience\nTask 3: Describing a Scene\nTask 4: Making Predictions\nTask 5: Comparing and Persuading\nTask 6: Dealing with a Difficult Situation\nTask 7: Expressing Opinions\nTask 8: Describing an Unusual Situation",
    },
  ],
};

export default function ExamCelpipGeneral() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={celpipGeneralData.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Exam Details
          </div>
          <h1 className="base-hero-section-heading text-white">
            {celpipGeneralData.name}{" "}
            <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {celpipGeneralData.content}
          </p>
          <Link
            href={`/book-exams/${celpipGeneralData.id}`}
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
          {celpipGeneralData.stats?.map((stat, i) => (
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
          {celpipGeneralData.resultTimeline && (
            <BaseCard className="flex flex-col items-center bg-white justify-center p-6 text-center shadow-xl border-primary/20 ">
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {celpipGeneralData.resultTimeline}
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
              {celpipGeneralData.overview.split("\n\n").map((para, i) => (
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
            {celpipGeneralData.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {celpipGeneralData.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {celpipGeneralData.sections.map((section, i) => (
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
                                Format
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
                          {section.taskTypes && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Task Types
                              </p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {Array.isArray(section.taskTypes)
                                  ? section.taskTypes.join(", ")
                                  : section.taskTypes}
                              </p>
                            </div>
                          )}
                          {section.marks && (
                            <div className="space-y-1 sm:col-span-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Marks & Scoring
                              </p>
                              <p className="text-sm font-medium text-gray-900 leading-relaxed whitespace-pre-line">
                                {section.marks}
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
          {celpipGeneralData.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Who Should Take This?
              </h3>
              <ul className="space-y-4">
                {celpipGeneralData.whoShouldTake.map((item, i) => (
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

          {celpipGeneralData.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Accepted For
              </h3>
              <ul className="space-y-4">
                {celpipGeneralData.acceptedFor.map((item, i) => (
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
                  Book your {celpipGeneralData.name} test date today at TEPTH.
                </p>
              </div>
              <Link
                href={`/book-exams/${celpipGeneralData.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg",
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official CELPIP Test Centre partners ensuring high standards of
                delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
