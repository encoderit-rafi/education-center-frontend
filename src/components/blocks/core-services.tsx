export default function CoreServices() {
  return (
    <section className="bg-surface-container-low py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Our Core Services
          </h2>
          <h3 className="text-4xl font-headline font-bold text-secondary">
            Personalized Academic Solutions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface rounded-3xl p-10 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-secondary">
                school
              </span>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  edit_note
                </span>
              </div>
              <h4 className="text-3xl font-headline font-extrabold text-secondary">
                Test Administration
              </h4>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Secure, streamlined, and globally recognized testing
                environments for IELTS, TOEFL, and Cambridge English
                assessments.
              </p>
            </div>
          </div>

          <div className="bg-secondary text-white rounded-3xl p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-red-800 flex items-center justify-center text-white">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold">
                Expert Coaching
              </h4>
              <p className="text-gray-400 opacity-90 leading-relaxed">
                One-on-one sessions with certified examiners to refine your
                strategy and performance.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-3xl p-10 shadow-sm border border-outline/10 group hover:border-red-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gray-50 mb-6 flex items-center justify-center text-secondary group-hover:bg-red-800 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">
                library_books
              </span>
            </div>
            <h4 className="text-xl font-headline font-bold text-secondary mb-3">
              Study Resources
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Access our curated library of past papers, practice tests, and
              exclusive editorial guides.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-10 shadow-sm border border-outline/10 group hover:border-red-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gray-50 mb-6 flex items-center justify-center text-secondary group-hover:bg-red-800 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">
                insights
              </span>
            </div>
            <h4 className="text-xl font-headline font-bold text-secondary mb-3">
              Score Analysis
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Detailed performance reports to identify your strengths and areas
              needing tactical improvement.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-10 shadow-sm border border-outline/10 group hover:border-red-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gray-50 mb-6 flex items-center justify-center text-secondary group-hover:bg-red-800 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">public</span>
            </div>
            <h4 className="text-xl font-headline font-bold text-secondary mb-3">
              Global Placement
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Guidance on university requirements and direct integration with
              international application systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
