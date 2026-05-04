import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Course } from "@/lib/courses-data";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      id={course.id}
      className="scroll-mt-32 group relative flex flex-col overflow-hidden rounded-xl border border-[#EEE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-[0_18px_38px_-10px_rgba(139,0,0,0.14)]"
    >
      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-1 text-base font-bold text-gray-900 uppercase tracking-tight group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {course.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex flex-col gap-4">
          <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <span>{course.duration}</span>
            <span>{course.format}</span>
          </div>

          <Link
            href={`/enroll-course?course=${course.id}`}
            className={cn(
              buttonVariants({
                variant: "default",
                className: "h-11 rounded-md font-bold uppercase tracking-widest text-xs",
              }),
              "w-full bg-primary! hover:bg-primary/90!"
            )}
          >
            Register
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
