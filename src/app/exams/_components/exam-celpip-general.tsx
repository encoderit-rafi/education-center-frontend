import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { Clock, CheckCircle2, AlertCircle, Info } from "lucide-react";
import React from "react";

const ComponentTable = ({
  title,
  time,
  items,
}: {
  title: string;
  time: string;
  items: { questions: string; section: string }[];
}) => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-6">
      <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100">
        <Clock className="size-4 text-primary" />
        Time allotted: {time}
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50">
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
              Number of Questions
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
              Component Sections
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {items.map((item, idx) => (
            <tr
              key={idx}
              className="group hover:bg-gray-50/30 transition-colors"
            >
              <td className="px-6 py-4 text-gray-900 font-medium w-1/3">
                {item.questions}
              </td>
              <td className="px-6 py-4 text-gray-600 group-hover:text-gray-900 transition-colors">
                {item.section}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function ExamCelpipGeneral() {
  const listeningItems = [
    { questions: "8", section: "Part 1: Listening to Problem Solving" },
    {
      questions: "5",
      section: "Part 2: Listening to a Daily Life Conversation",
    },
    { questions: "6", section: "Part 3: Listening for Information" },
    { questions: "5", section: "Part 4: Listening to a News Item" },
    { questions: "8", section: "Part 5: Listening to a Discussion" },
    { questions: "6", section: "Part 6: Listening to Viewpoints" },
  ];

  const readingItems = [
    { questions: "11", section: "Part 1: Reading Correspondence" },
    { questions: "8", section: "Part 2: Reading to Apply a Diagram" },
    { questions: "9", section: "Part 3: Reading for Information" },
    { questions: "10", section: "Part 4: Reading for Viewpoints" },
  ];

  const writingItems = [
    { questions: "1", section: "Task 1: Writing an Email" },
    { questions: "1", section: "Task 2: Responding to Survey Questions" },
  ];

  const speakingItems = [
    { questions: "1", section: "Task 1: Giving Advice" },
    {
      questions: "1",
      section: "Task 2: Talking about a Personal Experience",
    },
    { questions: "1", section: "Task 3: Describing a Scene" },
    { questions: "1", section: "Task 4: Making Predictions" },
    { questions: "1", section: "Task 5: Comparing and Persuading" },
    { questions: "1", section: "Task 6: Dealing with a Difficult Situation" },
    { questions: "1", section: "Task 7: Expressing Opinions" },
    { questions: "1", section: "Task 8: Describing an Unusual Situation" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <BaseHeroSection image={"/images/exams/celpip/celpip-hero.jpg"}>
        <div className="section-container space-y-6 base-px base-py text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
            General English Proficiency
          </div>
          <h1 className="base-hero-section-heading">
            The <span className="italic text-primary-foreground/80">CELPIP</span>{" "}
            General
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-3xl">
            The Canadian English Language Proficiency Index Program (CELPIP) is
            a general English language proficiency test evaluating test taker’s
            English listening, reading, writing, and speaking skills.
          </p>
        </div>
      </BaseHeroSection>

      <div className="section-container base-px base-py">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                About <span className="text-primary italic">CELPIP General</span>
              </h2>
              <div className="prose prose-gray prose-lg max-w-none">
                <p>
                  The CELPIP – General evaluates test taker’s English listening,
                  reading, writing, and speaking skills and is officially
                  designated for permanent residence applications by
                  Immigration, Refugees and Citizenship Canada (IRCC), visa
                  purposes by the Australian Department of Home Affairs (DHA),
                  and is also accepted for professional designations and by
                  Universities, Colleges and Vocational Programs.
                </p>
                <p>
                  It is a computer-delivered test and it takes under 2 hours and
                  50 minutes to complete and can be done in one sitting with no
                  separate speaking session. The Results are available online
                  within 3-4 business days after the test date. The PDF score
                  report is official and accepted by institutions.
                </p>
              </div>
            </section>

            <section className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Test Format Breakdown
                </h2>
                <p className="text-gray-500">
                  The CELPIP - General Test has four main components, all
                  completed in a single computer-based session.
                </p>
              </div>

              <div className="space-y-16">
                <ComponentTable
                  title="Listening"
                  time="47–55 minutes"
                  items={listeningItems}
                />
                <ComponentTable
                  title="Reading"
                  time="55–60 minutes"
                  items={readingItems}
                />
                <ComponentTable
                  title="Writing"
                  time="53–60 minutes"
                  items={writingItems}
                />
                <ComponentTable
                  title="Speaking"
                  time="15–20 minutes"
                  items={speakingItems}
                />
              </div>
            </section>

            <section className="bg-amber-50 rounded-3xl p-8 border border-amber-100 space-y-4">
              <div className="flex items-center gap-3 text-amber-600 font-bold">
                <AlertCircle size={20} />
                <span>Important Notes</span>
              </div>
              <ul className="space-y-3 text-amber-900 font-medium">
                <li className="flex gap-3">
                  <div className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  Test takers will be required to read answer choices in the
                  Listening Test and questions in the Speaking Test.
                </li>
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <BaseCard className="p-8 space-y-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">
                Test Highlights
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Total Duration</h4>
                    <p className="text-sm text-gray-500">
                      Under 2 hours 50 mins
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Quick Results</h4>
                    <p className="text-sm text-gray-500">3-4 business days</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <Info className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Computer Delivered
                    </h4>
                    <p className="text-sm text-gray-500">
                      Single sitting completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Unscored Items
                </h4>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-600 leading-relaxed italic">
                  The CELPIP test may contain unscored reading or listening
                  items used for test development. These can be found anywhere
                  within the Listening and Reading Tests and will have the same
                  format as the scored items.
                </div>
              </div>

              <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Book Your Test
              </button>
            </BaseCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
