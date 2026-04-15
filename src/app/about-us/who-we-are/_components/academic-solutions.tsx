import Image from "next/image";
import { BarChart3, Accessibility, Lightbulb } from "lucide-react";

export function AcademicSolutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Subtle background block */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFF8F8] rounded-2xl -z-10" />
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-us/infrastructure-center.png"
                  alt="Students in a modern learning environment"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Accent element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-1 bg-[#A11D1D]" />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1F1F1F] font-heading tracking-tight mb-10 leading-tight">
              Specialized <br />
              Academic Solutions
            </h2>
            
            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#A11D1D]/5 rounded-xl flex items-center justify-center text-[#A11D1D]">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1F1F1F] font-heading mb-2">Psychometric Precision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced data analytics to measure proficiency with surgical accuracy and cultural sensitivity across all test types.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#A11D1D]/5 rounded-xl flex items-center justify-center text-[#A11D1D]">
                  <Accessibility className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1F1F1F] font-heading mb-2">Universal Accessibility</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Inclusive testing environments designed for diverse learner needs and physical accommodations, ensuring equal opportunity.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#A11D1D]/5 rounded-xl flex items-center justify-center text-[#A11D1D]">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1F1F1F] font-heading mb-2">Pedagogical Innovation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Mock tests and prep materials developed by PhD linguists with decades of experience in high-stakes testing.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
