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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OTHER_EXAMS = [
  {
    id: "pearson-non-pte",
    initial: "P",
    provider: "Pearson VUE",
    name: "Pearson Non-PTE Exams",
    description:
      "A broad portfolio of professional and academic exams delivered through Pearson VUE — including GED, GMAT, IT certifications, Professional, Healthcare, and Finance exams.",
  },
  {
    id: "acca",
    initial: "A",
    provider: "ACCA",
    name: "ACCA",
    description:
      "Association of Chartered Certified Accountants — globally recognised professional accountancy qualification. Contact us to confirm current availability and scheduling.",
  },
  {
    id: "kryterion",
    initial: "K",
    provider: "Kryterion",
    name: "Kryterion Exams",
    description:
      "Various professional certification and credentialing exams delivered securely through Kryterion's testing network. Contact us for available titles and scheduling.",
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

        <Accordion
          type="single"
          className="w-full max-w-4xl mx-auto mt-20 space-y-8 rounded-none border-none"
        >
          {OTHER_EXAMS.map((exam, index) => (
            <AccordionItem
              key={exam.id}
              value={exam.id}
              className="bg-white! overflow-hidden rounded-none border-none"
            >
              <AccordionTrigger className="bg-white rounded-md hover:no-underline  items-center">
                <div className="flex items-center gap-3 text-left">
                  <BaseCardIcon className="rounded-full size-10 text-lg font-bold shrink-0">
                    {index + 1}
                  </BaseCardIcon>
                  <div className="space-y-1">
                    <h3 className="font-bold text-secondary text-lg tracking-tight">
                      {exam.name}
                    </h3>
                    <p className="text-xs text-primary font-semibold">
                      Authorized Provider: {exam.provider}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* <div className="pl-18">
                </div> */}
                <p className="pl-12 pt-5 text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  {exam.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
