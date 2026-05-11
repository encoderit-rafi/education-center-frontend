"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { exams } from "@/lib/data";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardArrow,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { EXAM_CARDS_DATA } from "@/data";

export default function ExamsPage() {
  return (
    <main className="bg-white">
      {/* ── Exam Grid ── */}
      <section className="base-py base-px bg-[#F9FAFB]">
        <div className="section-container">
          <div className="mb-14 text-center space-y-4">
            <h2 className="section-title">
              Available <span>Exams</span>
            </h2>
            <p className="section-subtitle text-center mx-auto">
              Choose from our comprehensive range of international English
              proficiency tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_CARDS_DATA.map((exam, index) => (
              <BaseCard key={exam.id} className="p-7">
                <div className="flex items-center justify-between gap-2">
                  <BaseCardIcon>{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                  <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                    {exam.name}
                  </BaseCardTitle>
                  <BaseCardDescription className="mb-4">
                    {exam.description}
                  </BaseCardDescription>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
