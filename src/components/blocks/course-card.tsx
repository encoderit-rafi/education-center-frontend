import Link from "next/link";
import { cn } from "@/lib/utils";
import { Course } from "@/lib/courses-data";
import Image from "next/image";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div
      key={course.id}
      className="group bg-white rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl border border-slate-100 h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />

        {/* Category Badge - Optional, keeping for brand consistency */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
          {course.category}
        </span>
      </div>

      <div className="p-6 pt-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight tracking-tight">
          {course.title}
        </h3>

        <div className="flex items-baseline gap-2 mb-8">
          {course.previousInvestment && (
            <span className="text-slate-400 text-sm line-through">
              {course.previousInvestment}
            </span>
          )}
          <span className={cn(
            "text-lg font-bold text-slate-700",
            course.previousInvestment ? "text-slate-900" : "text-slate-800"
          )}>
            {course.investment}
          </span>
        </div>

        <div className="mt-auto">
          <Link
            href={`/courses/${course.id}`}
            className="inline-block px-8 py-3 bg-[#A11D1D] text-white font-bold text-sm rounded shadow-md hover:bg-red-900 transition-all uppercase tracking-wider"
          >
            BOOK
          </Link>
        </div>
      </div>
    </div>
  );
}
