import FreeConsultationForm from "@/app/free-consultation/_components/free-consultation-form";
import { CheckCircle2, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function FreeConsultationPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── Section 1: Comprehensive Information ── */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Content Flow */}
          <div className="lg:col-span-5 space-y-16 animate-fade-up">
            {/* Header & Intro */}
            <div className="space-y-8">
              <span className="section-label">FREE CONSULTATION</span>
              <h1 className="section-title">
                Get the Right Guidance <br />
                <span className="text-primary">Before You Decide</span>
              </h1>
              <p className="section-description text-lg">
                Whether you are planning to book your exam or prepare for the test, the right advice at the beginning can save you time, money, and effort.
                At TEPTH, we offer free consultations to help you make the right decision with confidence — no pressure, no obligation.
              </p>
            </div>

            {/* Narrative Sub-heading */}
            <div className="space-y-4 pt-8 border-t border-slate-50">
              <h2 className="section-title text-3xl">
                Expert Advice is the <br />
                <span className="text-primary">foundation of success.</span>
              </h2>
              <p className="italic text-sm font-bold">— TEPTH Academic Team</p>
            </div>

            {/* Detailed Content */}
            <div className="space-y-16 text-base leading-relaxed">
              {/* Exam Preparation Courses */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-900">For Exam Preparation Courses</h3>
                  <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-2">15-Minute Free Consultation with Our Instructor</h4>
                    <p className="text-slate-600">
                      If you are unsure about your current level or which course to choose, speak directly with one of our experienced instructors. You can choose:
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "In-person Consultation at our centre.",
                      "Online Consultation via GoTo Application",
                      "Phone Consultation via phone call"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 space-y-4">
                    <p className="font-bold text-slate-900 uppercase text-xs">During your session, we will:</p>
                    <ul className="grid md:grid-cols-2 gap-6">
                      {[
                        "Assess your current English level",
                        "Understand your target exam, review your score report if you have already taken a test and discuss your score goal.",
                        "Recommend the right course (IELTS, PTE, TOEFL iBT, CELPIP, CAEL, Skills for English – SELT & OET)",
                        "Suggest a realistic study plan based on your timeline"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <ArrowRightCircle className="w-5 h-5 text-primary/40 shrink-0 mt-1" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Exam Bookings & Test Information */}
                <div className="space-y-8 pt-12">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-slate-900">For Exam Bookings & Test Information</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">Free Consultation with Our Test Centre Team</h4>
                      <p className="text-slate-600">
                        If you are planning to book one of the English Proficiency tests administered at our centre, our staff members are available to guide you. You can consult:
                      </p>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-4">
                      {[
                        "In-person Consultation at our centre.",
                        "Phone Consultation visa phone call"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 space-y-4">
                      <p className="font-bold text-slate-900 uppercase text-xs">We will help you with:</p>
                      <ul className="grid md:grid-cols-2 gap-6">
                        {[
                          "Understanding test requirements and eligibility",
                          "Available test dates and booking process",
                          "ID requirements and test day instructions",
                          "Any exam registration-related questions"
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-slate-600">
                            <ArrowRightCircle className="w-5 h-5 text-primary/40 shrink-0 mt-1" />
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sticky Visual */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 animate-fade-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/free-consutation-1.png"
                  alt="Expert Consultation Session"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Form ── */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <div className="mb-12 text-center space-y-4">
            <span className="section-label">BOOK A SESSION</span>
            <h3 className="section-title text-4xl md:text-5xl">Confirm your <br /><span className="text-primary">Free Consultation</span></h3>
            <p className="text-slate-500 max-w-lg mx-auto text-lg">
              Please fill out the form below to book your session with our experts.
            </p>
          </div>
          <FreeConsultationForm />
        </div>
      </section>
    </main>
  );
}
