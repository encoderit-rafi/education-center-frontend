import Image from "next/image";
import { Brain, Zap, Users } from "lucide-react";

export function ExperienceNarrative() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Collage */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src="/images/about-us/infrastructure-center.png"
                    alt="Modern testing center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src="/images/about-us/vision-hero.png"
                    alt="Academic environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src="/images/about-us/experience-student.png"
                    alt="Student in study pod"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#A11D1D]/5 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#A11D1D] mb-2 font-heading tracking-tight">TEPTH</div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Standard of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#A11D1D]/5 rounded-full blur-3xl opacity-50" />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F] font-heading mb-10 leading-[1.2]">
              Beyond the Score: <br />
              <span className="text-[#A11D1D]">The TEPTH Experience</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FFF8F8] flex items-center justify-center shadow-sm border border-gray-50">
                  <Brain className="w-7 h-7 text-[#A11D1D]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1F1F1F] font-heading mb-2">Mental Conditioning</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We incorporate mindfulness and stress-management techniques into our prep courses to ensure peak performance under pressure.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FFF8F8] flex items-center justify-center shadow-sm border border-gray-50">
                  <Zap className="w-7 h-7 text-[#A11D1D]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1F1F1F] font-heading mb-2">AI-Driven Insights</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our proprietary Mock Test platform uses machine learning to identify your specific linguistic gaps and provides a tailored study roadmap.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FFF8F8] flex items-center justify-center shadow-sm border border-gray-50">
                  <Users className="w-7 h-7 text-[#A11D1D]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1F1F1F] font-heading mb-2">Lifetime Alumni Network</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Success at TEPTH is just the beginning. Graduates gain access to career counseling and global university placement assistance.
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
