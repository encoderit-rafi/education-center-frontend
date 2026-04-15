import Image from "next/image";
import { Flag, Eye, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export function VisionMissionContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Our Mission Block */}
          <div className="lg:col-span-8 bg-[#FFF8F8] rounded-2xl p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Flag className="w-6 h-6 text-[#8A1818]" fill="currentColor" />
                <h2 className="text-2xl font-bold text-[#1F1F1F] font-heading">Our Mission</h2>
              </div>
              <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed mb-12">
                To empower <span className="text-[#8A1818] font-semibold">students and professionals</span> by providing unparalleled access to globally recognized language proficiency assessments and developmental resources.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-12 mt-auto">
              <div>
                <div className="text-2xl font-bold text-[#8A1818]">98%</div>
                <div className="text-xs font-bold text-[#8E8E8E] tracking-widest uppercase">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#8A1818]">50k+</div>
                <div className="text-xs font-bold text-[#8E8E8E] tracking-widest uppercase">Alumni Base</div>
              </div>
            </div>
          </div>

          {/* Student Image */}
          <div className="lg:col-span-4 relative h-[300px] lg:h-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/about-us/mission-student.png"
              alt="Focused student"
              fill
              className="object-cover"
            />
          </div>

          {/* World Map Image */}
          <div className="lg:col-span-4 relative h-[300px] lg:h-auto rounded-2xl overflow-hidden order-4 lg:order-3">
            <Image
              src="/images/about-us/vision-map.png"
              alt="Global connectivity map"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Vision Block */}
          <div className="lg:col-span-8 bg-[#131722] rounded-2xl p-8 md:p-12 text-white order-3 lg:order-4">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold font-heading">Our Vision</h2>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
              To become the <span className="text-white font-semibold">global leader in assessment services</span>, pioneering digital-first solutions that transcend borders and set the gold standard for educational certification.
            </p>
            
            <ul className="space-y-4">
              {[
                "Innovation in delivery",
                "Integrity in results",
                "Excellence in access"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A1818]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
