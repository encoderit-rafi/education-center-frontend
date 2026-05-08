import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { EXAM_IDS_DATA } from "@/data";
import { Info, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ExamIELTSUKVI() {
  const lifeSkillsTests = [
    {
      ...EXAM_IDS_DATA.ielts_ukvi_academic,
      description:
        "This test is for test takers wishing to study at undergraduate or postgraduate levels, and for those seeking professional registration in the UK.",
    },
    {
      ...EXAM_IDS_DATA.ielts_ukvi_general,
      description:
        "This test is for test takers wishing to migrate to the UK and for those wishing to train or study below degree level.",
    },
    {
      ...EXAM_IDS_DATA.ielts_life_skills_a1,
      description:
        "For those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for 'family of a settled person' visas.",
    },
    {
      ...EXAM_IDS_DATA.ielts_life_skills_a2,
      description:
        "For those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for extension to Family, Spouse or Partner visa.",
    },
    {
      ...EXAM_IDS_DATA.ielts_life_skills_b1,
      description:
        "For those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for indefinite leave to remain or citizenship.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <BaseHeroSection image={"/images/exams/ielts/ielts-1.jpg"}>
        <div className="section-container space-y-6 base-px base-py text-white">
          <h1 className="base-hero-section-heading text-white">
            IELTS UKVI{" "}
            <span className="italic text-primary-foreground/80">Exams</span>
          </h1>
          <p className="base-hero-section-description text-red-50 max-w-2xl">
            UK Visas and Immigration (UKVI) approved Secure English Language
            Tests administered at TEPTH in Dubai Silicon Oasis. Select the exam
            type that matches your visa application.
          </p>
        </div>
      </BaseHeroSection>

      <div className="section-container base-px base-py">
        {/* Life Skills Section */}
        <div className="space-y-12">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 lg:p-12 border border-gray-100">
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  <Info size={14} />
                  Awareness Info
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  IELTS UKVI: IELTS for UK Visas
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This is the test to take if you are applying for the
                    following types of UK visa:
                  </p>
                  <ul className="grid gap-3 mt-4">
                    {[
                      "Family visa",
                      "Extension to family, spouse or partner visa",
                      "Indefinite leave to remain or citizenship",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 font-medium"
                      >
                        <div className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-3 text-amber-600 font-bold">
                  <AlertCircle size={20} />
                  <span>Please Note</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  If you have taken an IELTS for UKVI Life Skills test within
                  the last 2 years and passed it, you should not take the exact
                  same test.
                </p>
                <div className="pt-4 border-t border-gray-50 italic text-sm text-gray-400">
                  ** The following IELTS Tests are not administered at our venue
                  and they are listed for awareness purposes.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lifeSkillsTests.map((type: any, index: number) => (
              <BaseCard className="p-8 " key={type.id}>
                <div className="flex items-center gap-4 mb-6">
                  <BaseCardIcon className="rounded-full text-xl font-bold">
                    {index + 1}
                  </BaseCardIcon>
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-primary/20 transition-colors"></div>
                </div>
                <BaseCardTitle className="text-xl mb-4 group-hover:text-primary transition-colors">
                  {type.name}
                </BaseCardTitle>
                <BaseCardDescription className="text-sm text-gray-500 mb-8 leading-relaxed">
                  {type.description}
                </BaseCardDescription>
              </BaseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
