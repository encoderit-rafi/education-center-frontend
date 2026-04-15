import Image from "next/image";
import { Award, Gavel, ShieldCheck, CheckCircle2, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CertificationBento() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Main Feature: ISO 27001 */}
          <div className="md:col-span-8 bg-[#A11D1D] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] shadow-2xl">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/20">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-8 leading-tight">
                ISO 27001 Certified
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
                Our data management systems and physical test centers are fully compliant with ISO/IEC 27001 standards for Information Security Management, ensuring candidate data remains confidential and secure.
              </p>
            </div>
            <div className="relative z-10 pt-10">
              <Button className="bg-white text-[#A11D1D] hover:bg-white/90 px-8 py-6 font-bold rounded-xl shadow-lg h-auto text-lg transition-transform hover:scale-105">
                Download Certificate
              </Button>
            </div>
            {/* Background Accent */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* Small Feature: Compliance */}
          <div className="md:col-span-4 bg-white p-10 rounded-3xl flex flex-col justify-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[#FFF8F8] rounded-2xl flex items-center justify-center mb-8">
              <Gavel className="w-8 h-8 text-[#A11D1D]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#1F1F1F] mb-6">
              Regulatory Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Full adherence to local ministry requirements and international proctoring standards. Periodic audits ensure 100% operational excellence.
            </p>
          </div>

          {/* Small Feature: Badges */}
          <div className="md:col-span-4 bg-[#A11D1D] text-white rounded-3xl p-10 flex flex-col justify-between shadow-xl">
            <h3 className="text-xl font-bold font-heading mb-10 tracking-tight">Accreditation Badges</h3>
            <div className="grid grid-cols-2 gap-4">
              {[ShieldCheck, Globe, Star, CheckCircle2].map((Icon, idx) => (
                <div key={idx} className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white/80" />
                </div>
              ))}
            </div>
          </div>

          {/* Medium Feature: Proctoring */}
          <div className="md:col-span-8 bg-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-12 items-center border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex-1 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1F1F1F]">
                Premium Proctoring Standards
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Every examination session is monitored by certified proctors trained in bias detection, academic integrity protocols, and technical troubleshooting.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified Invigilators",
                  "AI-Enhanced Monitoring",
                  "Secure Browser Environments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-bold text-[#1F1F1F]">
                    <CheckCircle2 className="w-5 h-5 text-[#A11D1D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full relative h-72 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-us/mission-student.png"
                alt="Professional examination room"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
