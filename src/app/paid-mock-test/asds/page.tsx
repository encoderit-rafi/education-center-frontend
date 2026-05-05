import React from "react";
import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function PaidMockTestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const test = paid_mock_tests.find((t) => t.id === id);

  if (!test) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-24 base-px relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 transition-colors hover:bg-primary/20">
              {test.exam_name} Mock Test
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              {test.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {test.description}
            </p>
            
            <Link
              href={`/paid-mock-test/${test.id}/registration`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "group font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1 rounded-full px-8"
              )}
            >
              Book Mock Test Now
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="w-full md:w-72 shrink-0 bg-white rounded-2xl border border-slate-200 p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center">
             <div className="text-slate-500 font-medium mb-2 uppercase tracking-wider text-sm">Test Fee</div>
             <div className="text-4xl font-black text-slate-900 mb-2">
               {test.price.currency} {test.price.fee}
             </div>
             <div className="text-sm text-slate-500">Includes AI scoring & feedback</div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 base-px">
        <div className="max-w-3xl mx-auto space-y-12">
          {test.sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary font-bold text-lg shrink-0">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h2>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {section.content}
              </p>
              
              {section.points && section.points.length > 0 && (
                <ul className="space-y-3 mb-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                  {section.points.map((point, ptIndex) => (
                    <li key={ptIndex} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.note && (
                <div className="flex items-start gap-3 p-5 rounded-xl bg-primary/5 border border-primary/20 text-primary">
                  <Info className="size-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">
                    {section.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20 base-px text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-6">Ready to test your readiness?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Experience the real exam environment and get accurate score predictions before the actual test day.
          </p>
          <Link
            href={`/paid-mock-test/${test.id}/registration`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary hover:bg-primary/90 text-white group font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 rounded-full px-10 py-6 text-lg"
            )}
          >
            Book Your {test.exam_name} Mock Test
            <ArrowRight className="ml-2 size-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
