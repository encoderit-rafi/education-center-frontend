import Image from "next/image";
import ContactForm from "@/app/contact-us/_components/form-contact";
import { Building2, CheckCircle2, Globe2, LineChart, BarChart3, ScrollText, Zap, ShieldCheck, Mail, PhoneForwarded } from "lucide-react";

const assessmentServices = [
  {
    id: 1,
    title: "Exam Proctoring",
    description:
      "Hybrid proctoring combining advanced AI monitoring with elite human invigilators for maximum integrity.",
    image: "/images/about-us/infrastructure-center.png",
  },
  {
    id: 2,
    title: "Secure Delivery",
    description:
      "Proprietary lockdown browsers ensuring that your intellectual property remains protected at every terminal.",
    image: "/images/about-us/vision-hero.png",
  },
  {
    id: 3,
    title: "Special Accommodations",
    description:
      "Inclusive testing environments supporting WCAG standards and specialized hardware for diverse requirements.",
    image: "/images/about-us/experience-student.png",
  },
];

export default function AssessmentSolutionsPage() {
  return (
    <main className="pb-12">
      {/* Hero Section */}
      {/* <section className="relative px-8 py-32 min-h-[600px] flex items-center bg-white">
        <div className="relative z-10 max-w-6xl mx-auto text-left w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-8 font-headline">
            Global Standards in <br />
            <span className="text-red-800 italic">
              Assessment Intelligence.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
            Empowering higher education institutions with bespoke testing
            frameworks, rigorous proctoring standards, and deep analytical
            insights for the modern academic landscape.
          </p>
        </div>
      </section> */}

      {/* Assessment Solutions for Universities */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
              Assessment Solutions for Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Institutional Card */}
            <div className="md:col-span-8 bg-slate-50 p-12 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <Building2 className="text-red-800 w-10 h-10 mb-8" />
                <h3 className="text-3xl font-bold mb-6 text-slate-900 font-headline">
                  Large-Scale Testing Frameworks
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  We specialize in managing thousands of simultaneous
                  assessments across multiple geographic locations with zero
                  downtime and iron-clad security.
                </p>
              </div>
              <div className="mt-12 flex gap-4 flex-wrap relative z-10">
                <div className="flex items-center gap-2 bg-red-50 text-red-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  ISO 27001 Certified
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Globe2 className="w-4 h-4" />
                  Global Access
                </div>
              </div>
              <Image
                className="absolute -right-20 -bottom-20 w-80 h-80 object-cover opacity-10 grayscale pointer-events-none"
                src="/images/exams/ielts.png"
                alt="Decorative shield"
                width={320}
                height={320}
              />
            </div>

            {/* Analytical Insights */}
            <div className="md:col-span-4 bg-red-900 p-12 rounded-xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <LineChart className="w-10 h-10 mb-8 text-red-200" />
                <h3 className="text-2xl font-bold mb-6 font-headline">
                  Advanced Psychometrics
                </h3>
                <p className="text-red-100/80 leading-relaxed text-base">
                  Beyond scores. We provide item-analysis, reliability
                  coefficients, and longitudinal growth tracking for your entire
                  student body.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                <BarChart3 className="w-[120px] h-[120px]" />
              </div>
            </div>

            {/* Reporting */}
            <div className="md:col-span-4 bg-slate-50 p-12 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <ScrollText className="text-red-800 w-8 h-8 mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-slate-900 font-headline">
                Institutional Reporting
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Customizable executive dashboards that translate complex testing
                data into actionable institutional intelligence.
              </p>
            </div>

            {/* Strategic Integration */}
            <div className="md:col-span-8 bg-slate-900 p-12 rounded-xl text-white flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6 text-red-400 font-headline">
                  Strategic Integration
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Our systems integrate seamlessly with major LMS platforms
                  including Canvas, Moodle, and Blackboard via LTI standards.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg flex items-center gap-4 min-w-[160px] hover:bg-white/10 transition-colors">
                  <Zap className="text-red-400 w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    LTI Core
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg flex items-center gap-4 min-w-[160px] hover:bg-white/10 transition-colors">
                  <ShieldCheck className="text-red-400 w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    SSO Auth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promoted Academic Services */}
      <section className="px-8 py-24 bg-red-50/30">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-800 font-bold uppercase tracking-[0.2em] text-[10px]">
              Our Core Pillars
            </span>
            <h2 className="text-5xl font-extrabold text-slate-900 mt-6 tracking-tight font-headline">
              Promoted Academic Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {assessmentServices.map((service) => (
              <div key={service.id} className="text-center group">
                <div className="aspect-square bg-white rounded-3xl mb-10 p-2 shadow-sm border border-slate-100 group-hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 font-headline">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm max-w-xs mx-auto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us */}
      <section className="px-8 py-24 bg-red-100/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-10 leading-tight tracking-tight font-headline">
              Join Our Global <br />
              Academic Network
            </h2>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              TEPTH Academic Atelier partners with forward-thinking institutions
              to redefine the value of certification. Let's discuss your
              organization's specific needs.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">
                    Direct Inquiries
                  </h4>
                  <p className="text-slate-500 font-semibold">
                    partnerships@tepth.academy
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded bg-red-800 flex items-center justify-center shrink-0 shadow-md">
                  <PhoneForwarded className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">
                    Institutional Support
                  </h4>
                  <p className="text-slate-500 font-semibold">
                    +971 4 000 0000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-red-900/5 border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
