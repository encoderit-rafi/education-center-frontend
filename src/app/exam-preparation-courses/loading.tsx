export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-slate-50 base-py base-px">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="section-title">
            Exam Preparation{" "}
            <span className="text-primary italic">Courses</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Master international proficiency standards with our elite
            preparation programs. We combine official pedagogy with intensive
            practice to guarantee your success.
          </p>
        </div>
      </section>

      {/* ── Course Grid Loading ── */}
      <section id="courses-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="border border-slate-100 rounded-2xl p-6 bg-slate-50/50 animate-pulse h-75"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
