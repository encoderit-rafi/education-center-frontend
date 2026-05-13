import FreeConsultationForm from "@/app/free-consultation/_components/free-consultation-form";
import { CheckCircle2, ArrowRightCircle, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

export default function FreeConsultationPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── Section 1: Hero ── */}
      <section className="relative py-16 md:py-24 px-8 max-w-screen-2xl mx-auto overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          {/* Left Content */}
          <SectionHeader
            badge="FREE CONSULTATION"
            title={
              <>
                Get the Right Guidance <span className="text-primary">Before You Decide</span>
              </>
            }
            description={
              <>
                Whether you are planning to book your exam or prepare for the test, the right advice at the beginning
                can save you time, money, and effort. <br /><br />
                At TEPTH, we offer free consultations to help you make the right decision with confidence — no pressure,
                no obligation.
              </>
            }
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/free-consultation-1.png"
                alt="Expert Consultation Session"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Exam Preparation Courses ── */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Visual */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/consultation-instructor.png"
                alt="Exam Preparation Consultation with Instructor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            <SectionHeader
              badge="FOR EXAM PREPARATION COURSES"
              title={
                <>
                  15-Minute Free Consultation <span className="text-primary">with Our Instructor</span>
                </>
              }
              description="If you are unsure about your current level or which course to choose, speak directly with one of our experienced instructors."
            />

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">You can choose:</p>
                <div className="grid gap-3">
                  {[
                    { text: "In-person Consultation at our centre.", icon: MapPin },
                    { text: "Online Consultation via GoTo Application", icon: Globe },
                    { text: "Phone Consultation via phone call", icon: Phone }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium transition-all hover:bg-white hover:shadow-md group/item">
                      <item.icon className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">During your session, we will:</p>
                <ul className="space-y-4">
                  {[
                    "Assess your current English level",
                    "Understand your target exam, review your score report if you have already taken a test and discuss your score goal.",
                    "Recommend the right course (IELTS, PTE, TOEFL iBT, CELPIP, CAEL, Skills for English – SELT & OET)",
                    "Suggest a realistic study plan based on your timeline"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary/40 shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      <span className="text-slate-600 font-medium leading-relaxed group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl italic text-primary font-medium">
                This is a quick but focused session designed to give you clarity before you start.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Exam Bookings & Test Information ── */}
      <section className="relative py-32 px-8 max-w-screen-2xl mx-auto border-t border-slate-50 bg-slate-50/30 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-20 items-start relative z-10">
          {/* Left Content */}
          <div className="space-y-12">
            <SectionHeader
              badge="FOR EXAM BOOKINGS & TEST INFORMATION"
              title={
                <>
                  Free Consultation with Our <span className="text-primary"> Test Centre Team</span>
                </>
              }
              description="If you are planning to book one of the English Proficiency tests administered at our centre, our staff members are available to guide you."
            />

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">You can consult:</p>
                <div className="grid gap-3">
                  {[
                    { text: "In-person Consultation at our centre.", icon: MapPin },
                    { text: "Phone Consultation via phone call for quick support", icon: Phone }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 text-slate-700 font-medium shadow-sm transition-all hover:shadow-md group/item">
                      <item.icon className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">We will help you with:</p>
                <ul className="space-y-4">
                  {[
                    "Understanding test requirements and eligibility",
                    "Available test dates and booking process",
                    "ID requirements and test day instructions",
                    "Any exam registration-related questions"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <ArrowRightCircle className="w-5 h-5 text-primary/40 shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      <span className="text-slate-600 font-medium leading-relaxed group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/free-consultation-2.png"
                alt="Test Centre Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Form ── */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="BOOK A SESSION"
            title={
              <>
                Confirm your <span className="text-primary">Free Consultation</span>
              </>
            }
            description="Please fill out the form below to book your session with our experts."
            align="center"
            className="mb-12"
          />
          <div className="p-8 md:p-12">
            <FreeConsultationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
