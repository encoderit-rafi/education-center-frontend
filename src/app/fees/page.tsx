import { getTranslations } from "next-intl/server";
import api from "@/axios";
import FeesTabs from "./FeesTabs";

export default async function FeesPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const t = await getTranslations("ExamFeesPage");
  const resolvedParams = await searchParams;
  const brand = resolvedParams?.brand || "all";

  let exams = [];

  try {
    const examsRes = await api.get("/exams", { params: { limit: 100 } });
    if (examsRes.data?.success) {
      exams = examsRes.data.data.data;
    }
  } catch (error) {
    console.error("Failed to fetch exams:", error);
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-secondary">
            {t("title")} {t("titleAccent")}
          </h1>
          <p className="text-slate-900 text-sm md:text-base font-bold leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ── Exam Fees Content ── */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <FeesTabs initialBrand={brand} exams={exams} />
        </div>
      </section>
    </main>
  );
}
