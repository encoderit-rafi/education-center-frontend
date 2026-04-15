
import Image from "next/image";
import TestYourEnglishForm from "@/components/blocks/test-your-english-form";

export default function TestYourEnglishPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-widest mb-6">
              Proficiency Check
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold font-headline text-slate-900 leading-[1.1] tracking-tighter mb-6">
              Test Your <span className="text-primary italic">English</span> Skills
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
              Evaluate your proficiency in minutes and get personalized course recommendations. Our assessment is designed by academic experts to map your current level to global standards.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:bg-red-800 transition-all active:scale-[0.98]"
                href="#assessment-form"
              >
                Start Test
              </a>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-sm">
                  A
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-red-100 text-red-700 font-bold text-sm">
                  B
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-amber-100 text-amber-700 font-bold text-sm">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold border-2 border-white text-slate-700">
                  15k+
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium hidden sm:block">Joined the assessment</p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                className="w-full h-full object-cover"
                alt="Library setting with pen and paper"
                src="/images/about-us/mission-student.png"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className="py-24 bg-red-50/50" id="assessment-form">
        <div className="max-w-4xl mx-auto px-8">
          {/* Progress Header */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-headline">
                  Assessment Journey
                </h2>
                <p className="text-slate-500 mt-1">Complete all sections for an accurate evaluation.</p>
              </div>
              <div className="text-right">
                <span className="text-primary font-black text-2xl">Step 3</span>
                <span className="text-slate-400 font-medium"> of 3</span>
              </div>
            </div>
            {/* Academic Progress Bar */}
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-1000 w-full"></div>
            </div>
          </div>

          {/* Form Container */}
          <TestYourEnglishForm />
        </div>
      </section>
    </main>
  );
}
