import { exams, exams_types } from "@/lib/data";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardTitle,
} from "./cards/base-card";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { EXAM_CARDS_DATA } from "@/data";

export default function CourseList() {
  return (
    <section className="base-px base-py">
      <div className="section-container">
        <div className="space-y-4 mb-12">
          <span className="section-label">Curriculum</span>
          <h3 className="section-title">
            Explore <span>Exams</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXAM_CARDS_DATA.map((exam) => (
            <Link key={exam.id} href={`/exams/${exam.id}`}>
              <BaseCard className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <BaseCardTitle className="uppercase tracking-tight text-lg leading-snug">
                    {exam.name}
                  </BaseCardTitle>
                  <BaseCardArrow />
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                  <BaseCardDescription className="mb-4">
                    {exam.description}
                  </BaseCardDescription>
                </div>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
