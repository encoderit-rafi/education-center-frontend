import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

const ieltsGeneralData = {
  id: EXAM_IDS_DATA.ielts_general.id,
  name: "IELTS General Training",
  image: "/images/exams/ielts/ielts-1.jpg",
  content:
    "The IELTS General Training test is designed to measure your English language proficiency in a practical, everyday context. The test reflects both workplace and social situations.",
  overview:
    "The IELTS General Training test is designed to measure your English language proficiency in a practical, everyday context. The test reflects both workplace and social situations. Take IELTS General Training if you want to work or undertake work-related training in an English-speaking country or emigrate to an English-speaking country.",
  testFormatIntro:
    "You’ll take the first three parts of the test on the same day, in the following order: Listening, Reading and Writing (there are no breaks between these tests). Your Speaking test will be held either on the same day or seven days before or after that, depending on local arrangements.",
  resultTimeline: "1-5 Days",
  stats: [
    { label: "Total Duration", value: "2h 45m" },
    { label: "Questions", value: "80+" },
    { label: "Format", value: "General Training" },
    { label: "Validity", value: "2 Years" },
  ],
  whoShouldTake: [
    "Individuals planning to work or undertake work-related training in an English-speaking country",
    "Those who wish to emigrate to an English-speaking country",
    "People looking to demonstrate proficiency in a practical, everyday context",
  ],
  acceptedFor: [
    "Work Permits",
    "Immigration",
    "Secondary Education",
    "Work-related Training",
  ],
  sections: [
    {
      icon: "listening",
      name: "Listening Component",
      duration: "30 minutes (+10m transfer time)",
      details:
        "The Listening Component is designed to assess a wide range of listening skills, including how well you understand main ideas and follow arguments.",
      skills: [
        "understand main ideas and specific factual information",
        "recognise the opinions, attitudes and purpose of a speaker",
        "follow the development of an argument",
      ],
      format:
        "You will listen to four recordings of native English speakers and then write your answers to a series of questions.\nRecording 1: a conversation between two people set in an everyday social context.\nRecording 2: a monologue set in an everyday social context, e.g. a speech about local facilities.\nRecording 3: a conversation between up to four people set in an educational or training context, e.g. a university tutor and a student discussing an assignment.\nRecording 4: a monologue on an academic subject, e.g. a university lecture.",
      questions: "40 questions",
      taskTypes:
        "multiple choice, matching, plan/map/diagram labelling, form/note/table/flow-chart/summary completion, sentence completion",
      marks:
        "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
    },
    {
      icon: "reading",
      name: "Reading Component",
      duration: "60 minutes (including transfer time)",
      details:
        "The IELTS Reading test takes approximately 60 minutes, including the time it takes to transfer your answers from your question booklet to your answer sheet.",
      format:
        "Extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines. These are materials you are likely to encounter on a daily basis in an English-speaking environment.",
      questions: "40 questions",
      taskTypes:
        "Fill gaps in a passage of written text or in a table, match headings to written text to diagrams or charts, complete sentences, give short answers to open questions, answer multiple choice questions",
      marks:
        "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
    },
    {
      icon: "writing",
      name: "Writing Component",
      duration: "60 minutes (20m Task 1, 40m Task 2)",
      details:
        "The topics used in the IELTS General Training Writing test are of general interest. Task 2 is worth twice as much as Task 1.",
      format:
        "Task 1: You will be presented with a situation and asked to write a letter requesting information or explaining the situation. You can write the letter in a personal, semi-formal or formal style (write at least 150 words).\nTask 2: You will be asked to write an essay in response to a point of view, argument or problem. You can use a fairly personal style (write at least 250 words).\n\nSpend 20 minutes on Task 1, and 40 minutes on Task 2. You will need to manage your own time, so make sure you move on to Task 2 after 20 minutes.",
      questions: "2 questions",
      taskTypes: "Two tasks: Task 1 and Task 2",
      marks:
        "Your Writing test will be marked by a certificated IELTS examiner. Task 2 is worth twice as much as Task 1 in the IELTS General Training Writing test. Scores are reported in whole and half bands.",
    },
    {
      icon: "speaking",
      name: "Speaking Component",
      duration: "Video Call Available",
      details:
        "Many IELTS test centres will start delivering the IELTS Speaking test via video calls. This means more flexibility and more availability of IELTS Speaking tests.",
      format:
        "You will take the video call Speaking test at an official IELTS test centre with the same high standard of identity verification. The test will be exactly the same as the in-person Speaking test in terms of content, scoring, timing, level of difficulty, question format and security arrangements. Delivered by an IELTS Speaking Examiner, the video call Speaking test will maintain the face-to-face feature of the in-person Speaking test.",
    },
  ],
};

export default function ExamIELTSGeneral() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BaseHeroSection image={ieltsGeneralData.image}>
        <div className="section-container space-y-6 base-px base-py">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Exam Details
          </div>
          <h1 className="base-hero-section-heading text-white">
            {ieltsGeneralData.name}{" "}
            <span className="italic text-primary-foreground/80">Test</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            {ieltsGeneralData.content}
          </p>
          <Link
            href={`/book-exams/${ieltsGeneralData.id}`}
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
          {ieltsGeneralData.stats?.map((stat, i) => (
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
          {ieltsGeneralData.resultTimeline && (
            <BaseCard className="flex flex-col items-center bg-white justify-center p-6 text-center shadow-xl border-primary/20 ">
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {ieltsGeneralData.resultTimeline}
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
              {ieltsGeneralData.overview.split("\n\n").map((para, i) => (
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
            {ieltsGeneralData.testFormatIntro && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {ieltsGeneralData.testFormatIntro}
              </p>
            )}

            <div className="space-y-8">
              {ieltsGeneralData.sections.map((section, i) => (
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

                        {section.skills && (
                          <div className="space-y-3">
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                              Skills Assessed
                            </p>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {section.skills.map((skill, si) => (
                                <div
                                  key={si}
                                  className="flex items-center gap-2 text-gray-700"
                                >
                                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                                  <span className="text-sm">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

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
          {ieltsGeneralData.whoShouldTake && (
            <BaseCard className="p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Who Should Take This?
              </h3>
              <ul className="space-y-4">
                {ieltsGeneralData.whoShouldTake.map((item, i) => (
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

          {ieltsGeneralData.acceptedFor && (
            <BaseCard className="p-8 border-primary/10 bg-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Accepted For
              </h3>
              <ul className="space-y-4">
                {ieltsGeneralData.acceptedFor.map((item, i) => (
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
                  Book your {ieltsGeneralData.name} test date today at TEPTH.
                </p>
              </div>
              <Link
                href={`/book-exams/${ieltsGeneralData.id}`}
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "w-full font-bold shadow-lg",
                )}
              >
                Book Now
              </Link>
              <p className="text-[11px] text-red-200">
                Official IELTS Test Centre partners ensuring high standards of
                delivery.
              </p>
            </div>
          </GradientBox>
        </aside>
      </div>
    </div>
  );
}
