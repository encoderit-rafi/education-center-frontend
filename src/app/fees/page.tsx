import Link from "next/link";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardIcon,
  BaseCardArrow,
  BaseCardList,
} from "@/components/blocks/cards/base-card";
import api from "@/axios";

export default async function FeesPage() {
  let courses = [];
  try {
    const response = await api.get("/courses");
    if (response.data?.success) {
      courses = response.data.data.data;
    }
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="section-title">
            Exam <span className="text-primary italic">Fees</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Here is a comprehensive breakdown of all official exam fees and
            service charges. This guide ensures transparency in your planning.
          </p>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section id="courses-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((exam: any, index: number) => {
              return (
                <Link key={exam.id} href={`/fees/${exam.slug}`}>
                  <BaseCard>
                    <div className="flex items-center justify-between mb-10">
                      <BaseCardIcon>{index + 1}</BaseCardIcon>
                      <BaseCardArrow className="group-hover:translate-x-2 transition-transform duration-500" />
                    </div>

                    <div className="space-y-5 mb-5">
                      <BaseCardTitle className="text-2xl font-black text-slate-900 leading-tight">
                        {exam.name}
                      </BaseCardTitle>
                    </div>
                  </BaseCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
