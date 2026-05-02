import { exams, exams_types } from "@/lib/data";
import CourseCard from "./course-card";

export default function CourseList() {
  return (
    <section className="py-24 px-8 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] lg:text-xs mb-4">
            Curriculum
          </p>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-slate-900 tracking-tight uppercase">
            Explore <span className="text-primary italic">Exams</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam) => {
            // Find types for this exam
            const examTypeData = exams_types.find((t) => t.exam.id === exam.id);
            const types = examTypeData?.types || [];

            return (
              <CourseCard 
                key={exam.id} 
                exam={exam} 
                types={types} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
