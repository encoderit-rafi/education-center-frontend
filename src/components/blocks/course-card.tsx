import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExamCardProps {
  exam: {
    id: string;
    name: string;
    image: string;
    content: string;
  };
  types?: { name: string }[];
}

export default function CourseCard({ exam, types }: ExamCardProps) {
  return (
    <Link
      href={`/exams/${exam.id}`}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20"
    >
      <div className="mb-6 flex items-start justify-between">
        <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight">
          {exam.name}
        </h3>
        <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
      </div>

      <p className="mb-6 text-sm leading-relaxed text-slate-500 line-clamp-3">
        {exam.content}
      </p>

      {types && types.length > 0 && (
        <div className="no-scrollbar mt-auto flex flex-nowrap overflow-x-auto gap-2 border-t border-slate-50 pt-6">
          {types.map((type, idx) => (
            <span
              key={idx}
              className="rounded-md text-nowrap bg-slate-100/50 px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:bg-slate-100 transition-colors"
            >
              {type.name}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
