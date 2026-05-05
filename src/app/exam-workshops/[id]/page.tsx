import React from "react";
import Link from "next/link";
import workshops from "@/lib/demo-data/workshops";
import { ArrowRight } from "lucide-react";

export default async function ExamWorkshopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* ── Packages Section ── */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {workshops.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white p-10 rounded-[2rem] border-2 border-outline/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 transition-all flex flex-col group text-center"
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-headline font-black text-secondary mb-2">
                    {pkg.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    {pkg.duration} of intensive training
                  </p>
                </div>

                <div className="text-4xl font-headline font-black text-primary mb-10">
                  <span className="text-xl mr-1">{pkg.currency}</span>{pkg.price}
                </div>

                <Link
                  href={`/worshop-registration?exam=${id}&duration=${pkg.id}`}
                  className="mt-auto flex w-full items-center justify-center gap-3 bg-secondary text-white px-8 py-5 rounded-2xl font-headline font-black text-xs uppercase tracking-widest transition-all hover:bg-primary hover:shadow-lg"
                >
                  Book This Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
