import { COURSES } from "@/lib/courses-data";
import CourseCard from "./course-card";

export default function CourseList() {
  // Filter for the primary "Master" preparation courses for the home page
  const mainExams = COURSES.filter(c => c.id.endsWith("-prep"));

  return (
    <section className="py-24 px-8 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-[#A11D1D] tracking-widest uppercase mb-4">
            Curriculum
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-slate-900 tracking-tight">
            Explore our exam experts
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainExams.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
