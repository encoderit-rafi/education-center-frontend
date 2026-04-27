import Link from "next/link";
import { cn } from "@/lib/utils";
import { Course } from "@/lib/courses-data";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card
      key={course.id}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-slate-100 h-full p-0"
    >
      <div className="h-64 relative overflow-hidden">
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
        <Badge className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded shadow-sm border-none h-auto">
          {course.category}
        </Badge>
      </div>

      <div className="flex-1 flex flex-col">
        <CardHeader className="px-6 pb-4">
          <CardTitle className="text-xl font-bold text-slate-800 leading-tight tracking-tight">
            {course.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-2">
          <div className="flex items-baseline gap-2 mb-4">
            {course.previousInvestment && (
              <span className="text-slate-400 text-sm line-through">
                {course.previousInvestment}
              </span>
            )}
            <span className={cn(
              "text-lg font-bold",
              course.previousInvestment ? "text-slate-900" : "text-slate-800"
            )}>
              {course.investment}
            </span>
          </div>
        </CardContent>

        <CardFooter className="mt-auto p-6 pt-0">
          <Link
            href={`/fees/${course.category.toLowerCase()}`}
            className="inline-block px-8 py-3 bg-[#A11D1D] text-white font-bold text-sm rounded shadow-md hover:bg-red-900 transition-all uppercase tracking-wider"
          >
            BOOK
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
