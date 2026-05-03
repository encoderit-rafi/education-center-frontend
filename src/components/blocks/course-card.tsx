import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Course } from "@/lib/courses-data";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8  transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 shadow-sm hover:shadow-xl">
      <div className="mb-6 flex items-start justify-between">
        <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight">
          {course.title}
        </h3>
        <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
      </div>

      <p className="mb-6 text-sm leading-relaxed text-slate-500 line-clamp-3">
        {course.description}
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider border-t border-slate-50 pt-4">
          <span>{course.duration}</span>
          <span>{course.format}</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={`/courses/${course.id}`}
            className={buttonVariants({
              variant: "default",
              className: "h-12 rounded-md font-semibold transition-all duration-300 bg-primary! hover:bg-primary/90!",
            })}
          >
            View Details
            <ArrowRight className="w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
