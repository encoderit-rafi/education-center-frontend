import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { EXAM_IDS_DATA } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import React from "react";
// import ImageIELTS from "../../../../public/images/exams/ielts/ielts-1.jpg"
export default function ExamCELPIP() {
  return (
    <div className="min-h-screen">
      <BaseHeroSection image={"/images/exams/ielts/ielts-1.jpg"}>
        <div className="section-container space-y-6 base-px base-py">
          <h1 className="base-hero-section-heading">
            CELPIP <span className="italic text-primary">Exams</span>
          </h1>
          <p className="base-hero-section-description">
            Fully computer-based Canadian English test — no separate speaking
            session. Accepted by IRCC for Canadian permanent residence and
            citizenship, and by Australian DHA.
          </p>
        </div>
      </BaseHeroSection>
      <div className="section-container base-px base-py">
        <h2 className="section-title text-center">
          Choose Your <span>CELPIP</span> Test
        </h2>
        <p className="mx-auto section-subtitle text-center">
          Each CELPIP variant is designed for a specific purpose. Select the one
          that matches your visa, academic, or professional goal.
        </p>
        <div className="grid gap-5 sm:grid-cols-2  mt-20">
          {[EXAM_IDS_DATA.celpip_general, EXAM_IDS_DATA.celpip_general_ls].map(
            (type: any, index: number) => (
              <Link
                key={type.id}
                // className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6  transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
                href={`/exams/${type.id}`}
              >
                <BaseCard className="p-6 h-full">
                  <div className="flex items-center gap-3">
                    <BaseCardIcon className="rounded-full size-9 text-lg font-bold">
                      {/* {exam.name.charAt(0)} */}
                      {index + 1}
                    </BaseCardIcon>
                    <div className="h-px flex-1 bg-red-50"></div>
                  </div>
                  <BaseCardTitle>{type.name}</BaseCardTitle>

                  <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View Details
                    <ArrowRight className="size-4" />
                  </div>
                </BaseCard>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
