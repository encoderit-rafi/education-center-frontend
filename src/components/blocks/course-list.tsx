import { exams, exams_types } from "@/lib/data";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardTitle,
} from "./cards/base-card";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam) => {
            const examTypeData = exams_types.find((t) => t.exam.id === exam.id);
            const types = examTypeData?.types || [];

            return (
              <Link href={`/exams/${exam.id}`}>
                <BaseCard className="h-full">
                  <div className="flex items-start justify-between">
                    <BaseCardTitle>{exam.name}</BaseCardTitle>
                    <ArrowRight className="size-5 text-slate-300 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                  <BaseCardDescription>{exam.content}</BaseCardDescription>
                  {types && types.length > 0 && (
                    <div className="no-scrollbar flex flex-nowrap overflow-x-auto gap-2">
                      {types.map((type, idx) => (
                        <Badge variant={"destructive"} key={idx}>
                          {type.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </BaseCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
