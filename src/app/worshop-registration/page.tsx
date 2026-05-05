"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WorkshopRegistrationForm from "./_components/workshop-registration-form";
import exam_workshops from "@/lib/demo-data/exam-workshops";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const examID = searchParams.get("exam");
  const workshopTitle = searchParams.get("workshop");
  const exam = exam_workshops.find((exam) => exam.id === examID);
  const workshop = exam?.workshops.find(
    (workshop) => workshop.title === workshopTitle,
  );

  return (
    <div className="min-h-screen bg-background pb-32">
      <section className="px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <WorkshopRegistrationForm examID={examID || ""} workshop={workshop} />
        </div>
      </section>
    </div>
  );
}

export default function WorkshopRegistrationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <RegistrationContent />
    </Suspense>
  );
}
