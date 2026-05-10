import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardIcon,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardArrow,
} from "@/components/blocks/cards/base-card";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OTHER_EXAMS = [
  {
    id: "pearson-non-pte",
    initial: "P",
    provider: "Pearson VUE",
    name: "Pearson Non-PTE Exams",
    description:
      "A broad portfolio of professional and academic exams delivered through Pearson VUE — including GED, GMAT, IT certifications, Professional, Healthcare, and Finance exams.",
    href: "/contact",
  },
  {
    id: "acca",
    initial: "A",
    provider: "ACCA",
    name: "ACCA",
    description:
      "Association of Chartered Certified Accountants — globally recognised professional accountancy qualification. Contact us to confirm current availability and scheduling.",
    href: "/contact",
  },
  {
    id: "kryterion",
    initial: "K",
    provider: "Kryterion",
    name: "Kryterion Exams",
    description:
      "Various professional certification and credentialing exams delivered securely through Kryterion's testing network. Contact us for available titles and scheduling.",
    href: "/contact",
  },
  {
    id: "skills-for-english",
    initial: "S",
    provider: "Pearson",
    name: "Skills for English (SELT)",
    description:
      "UK Home Office-approved Secure English Language Test for visa and immigration purposes. Available at levels A1 to C2, two-skill or four-skill.",
    href: "/exams/skills-for-english",
  },
];

export default function OtherExamsPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}

      {/* ── Exam Cards ── */}
      <div className="section-container base-px base-py">
        <h2 className="section-title text-center">
          Professional &amp; <span>Other</span> Exams
        </h2>
        <p className="mx-auto section-subtitle text-center">
          Beyond our core language tests, TEPTH delivers a range of professional
          certification and credentialing exams — including Pearson VUE, ACCA,
          and Kryterion. Contact us to confirm availability and current
          scheduling.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 mt-20 max-w-4xl mx-auto">
          {OTHER_EXAMS.map((exam, index) => (
            <BaseCard key={exam.id} className="p-6 h-full">
              <div className="flex items-center gap-3">
                <BaseCardIcon className="rounded-full size-9 text-lg font-bold">
                  {index + 1}
                </BaseCardIcon>
                <div className="h-px flex-1 bg-red-50" />
              </div>

              <div className="space-y-1">
                <BaseCardTitle>{exam.name}</BaseCardTitle>
              </div>

              <BaseCardDescription>{exam.description}</BaseCardDescription>
            </BaseCard>
          ))}
        </div>
      </div>
    </div>
  );
}
