import Image from "next/image";

export default function VisionAndMission() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-[#A11D1D] tracking-tight">
              Vision & Mission
            </h1>
            <div className="h-2 w-24 bg-[#A11D1D] rounded-full" />
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#A11D1D]/10 rounded-full hidden md:block" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                The Exam Preparation and Testing House envisions to be a top-notch exam counselling and service provider across the globe. The enterprise was founded with the dream to offer students latest techniques and tools for exam preparation so that they can excel in their respective fields and contribute positively to the well-being of a society. Our team believes in providing commendable services to you.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              The inspirational philosophy behind TEPTH is to offer full-fledged testing and exam preparation services to students in United Arab Emirates and the Arab World. We are a team of enthusiasts who strive hard to facilitate students in every possible way for exam testing. The core values of our company are:
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <ul className="space-y-8">
                {[
                  "To simplify the complexities in a test’s procedure that hinder the examinee’s comprehension skills. We employ unique resources and technology to make students understand tough tasks easily.",
                  "TEPTH is an enterprise that aims to shape a better future. Quality education for youth means a more enlightened and better society.",
                  "By aiding students in picking a suitable Exam Preparation Course, TEPTH ought to be the torch bearer of knowledge and skills."
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#A11D1D] mt-3 shrink-0" />
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
