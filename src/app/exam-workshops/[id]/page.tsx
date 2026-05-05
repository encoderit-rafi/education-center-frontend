import React from "react";
import Link from "next/link";
import exam_workshops from "@/lib/demo-data/exam-workshops";
import { ArrowRight } from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";

export default async function ExamWorkshopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const selectedExam = exam_workshops.find((e) => e.id === id);
  return (
    <div className="min-h-screen bg-slate-50 base-px base-py">
      {/* ── Packages Section ── */}
      <h1 className="section-title text-center">{selectedExam?.title}</h1>
      <p className="section-subtitle text-center max-w-3xl mx-auto">
        {selectedExam?.description}
      </p>
      <section className="px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {selectedExam?.workshops.map((pkg) => (
              <Link
                href={`/worshop-registration?exam=${id}&workshop=${pkg.title}`}
                key={pkg.title}
              >
                <BaseCard className="p-5">
                  <BaseCardTitle>{pkg.title}</BaseCardTitle>
                  {/* <BaseCardDescription>{pkg.description}</BaseCardDescription> */}
                  <div className="text-4xl font-headline font-black text-primary mb-10">
                    <span className="text-xl mr-1">AED</span>
                    {pkg.price}
                  </div>
                </BaseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <p className="max-w-3xl mx-auto">{selectedExam?.details}</p>
    </div>
  );
}
