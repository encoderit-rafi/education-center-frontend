import Image from "next/image";
import FreeConsultationForm from "@/components/blocks/free-consultation-form";

export default function FreeConsultationPage() {
  return (
    <main className="relative pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-12 lg:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-7">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
            Academic Atelier Guidance
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-secondary mb-8 leading-[1.1]">
            Expert Guidance for Your <span className="text-primary">Academic Journey</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10">
            Navigate the complexities of global assessments with personalized insights from TEPTH's master consultants. Your success starts with a conversation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/10 cursor-pointer">
              Schedule Call <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="text-primary font-bold px-8 py-4 flex items-center gap-2 group cursor-pointer hover:bg-red-50 rounded-lg transition-colors">
              Watch How We Help <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10 border border-slate-100">
            <Image
              alt="Consultant in meeting"
              className="w-full h-full object-cover"
              src="/images/about-us/infrastructure-center.png"
              width={600}
              height={750}
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white/70 backdrop-blur-xl p-8 rounded-xl z-20 shadow-xl max-w-xs border border-white">
            <p className="text-primary font-black text-3xl mb-1">15k+</p>
            <p className="text-sm font-semibold text-slate-600">
              Successful Student Consultations Conducted Worldwide
            </p>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="bg-slate-50 py-32 px-8 border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-extrabold text-secondary mb-4">Select Your Focus</h2>
              <p className="text-slate-500 text-lg">
                Choose the consultation path that aligns with your current academic goals and book your preferred slot.
              </p>
            </div>
            <div className="h-px bg-slate-200 flex-grow mx-8 hidden lg:block mb-4"></div>
          </div>

          <FreeConsultationForm />
        </div>
      </section>

      {/* CTA Section: Free 15-Minute Consultation */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto bg-secondary text-white rounded-xl p-12 md:p-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 crimson-gradient opacity-20 pointer-events-none"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 leading-tight">
              Start with a Free 15-Minute Discovery Session
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              No obligations. Just expert advice to help you understand your options and the best path forward for your academic or professional certification.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-xl">
                  E
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center bg-red-100 text-red-700 font-bold text-xl">
                  M
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center bg-amber-100 text-amber-700 font-bold text-xl">
                  S
                </div>
              </div>
              <p className="text-sm font-semibold tracking-wide">Available consultants online now</p>
            </div>
          </div>
          <div className="w-full md:w-auto relative z-10 flex flex-col items-center">
            <button className="inline-flex items-center justify-center bg-white text-secondary px-10 py-5 rounded-lg font-black text-xl hover:bg-gray-100 transition-all w-full shadow-xl active:scale-95 cursor-pointer">
              Schedule Free Now
              <span className="material-symbols-outlined ml-3 text-primary">arrow_forward</span>
            </button>
            <p className="text-center mt-4 text-sm text-slate-400">Slots refresh daily at 9:00 AM GST</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-8 top-0 relative">
        <div className="absolute h-1/2 bg-slate-50 w-full inset-0 -z-10"></div>
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-extrabold mb-4 text-secondary">Academic Resources</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Download our curated guides and preparation checklists to start your journey today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="group relative bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-start justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-sm">picture_as_pdf</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                  PDF 2.4 MB
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">2024 Exam Roadmap</h4>
              <p className="text-sm text-slate-500 mb-8 min-h-[2.5rem]">
                A comprehensive timeline for all major global academic assessments.
              </p>
              <button className="flex items-center text-primary font-bold text-sm group-hover:underline cursor-pointer">
                Download Now <span className="material-symbols-outlined ml-1 text-sm">download</span>
              </button>
            </div>

            {/* Resource 2 */}
            <div className="group relative bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-start justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-sm">fact_check</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                  PDF 1.1 MB
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">Prep Checklist</h4>
              <p className="text-sm text-slate-500 mb-8 min-h-[2.5rem]">
                Essential steps to take 30 days before your scheduled exam date.
              </p>
              <button className="flex items-center text-primary font-bold text-sm group-hover:underline cursor-pointer">
                Download Now <span className="material-symbols-outlined ml-1 text-sm">download</span>
              </button>
            </div>

            {/* Resource 3 */}
            <div className="group relative bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-start justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-sm">library_books</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                  PDF 5.8 MB
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">Course Brochure</h4>
              <p className="text-sm text-slate-500 mb-8 min-h-[2.5rem]">
                Detailed syllabus and pricing for all TEPTH preparation courses.
              </p>
              <button className="flex items-center text-primary font-bold text-sm group-hover:underline cursor-pointer">
                Download Now <span className="material-symbols-outlined ml-1 text-sm">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
