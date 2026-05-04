
export default function WhoWeAre() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-[#A11D1D] tracking-tight">
              Who We Are
            </h1>
            <div className="h-2 w-24 bg-[#A11D1D] rounded-full" />
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#A11D1D]/10 rounded-full hidden md:block" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                TEPTH derives its objective from John Dewey’s quote, “Education is not preparation for life; education is life itself.” Being an experienced enterprise in the areas of education and exam preparation courses, TEPTH strives to offer students high quality services. We have been in the education industry for years now, catering to the contemporary competent educational requirements across the Arab World. TEPTH is a visionary organization that values students as the guardians of a successful society. We believe in offering you professional career services so that you can turn your dreams into reality.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Preparing for an international exam could get tricky at times, TEPTH has trained professionals who are well-equipped with the latest knowledge and techniques for the preparation of GMAT, GRE, SAT and TOEFL courses. With their expertise and dedication, you are likely to pass these tests with flying colors. TEPTH offers you proficient services at the best price.
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic">
                TEPTH envisions to be a leader in exam preparation and testing, as we look forward to set a benchmark by our unrivaled services. We have set long term goals that will benefit both the education system and the society. With innovative IT support and learning procedures, TEPTH has made it quite expedient for the students to pass online exams. Our latest learning techniques allow you to score more with less effort. Whether you are preparing for IELTS, CELPIP G, CAEL, PTE, TOEFL iBT and OET, TEPTH is your one pit stop for all your exam preparation needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
