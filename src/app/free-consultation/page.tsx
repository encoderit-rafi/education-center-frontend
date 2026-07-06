import FreeConsultationForm from "@/app/free-consultation/_components/free-consultation-form";
import {
  CheckCircle2,
  ArrowRightCircle,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function FreeConsultationPage() {
  const t = useTranslations("FreeConsultationPage");

  const chooseOptionsIcons = [MapPin, Globe, Phone];
  const chooseOptions = (t.raw("chooseOptions") as string[]).map((text, idx) => ({
    text,
    icon: chooseOptionsIcons[idx]
  }));

  const sessionItems = t.raw("sessionItems") as string[];

  const consultOptionsIcons = [MapPin, Phone];
  const consultOptions = (t.raw("consultOptions") as string[]).map((text, idx) => ({
    text,
    icon: consultOptionsIcons[idx]
  }));

  const helpItems = t.raw("helpItems") as string[];

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
            badge={t("heroBadge")}
            title={
              <>
                {t("heroTitle")}{" "}
                <span className="text-primary">{t("heroTitleAccent")}</span>
              </>
            }
            description={
              <>
                {t("heroDescription1")} <br />
                <br />
                {t("heroDescription2")}
              </>
            }
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
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
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
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
              badge={t("examPrepBadge")}
              title={
                <>
                  {t("examPrepTitle")}{" "}
                  <span className="text-primary">{t("examPrepTitleAccent")}</span>
                </>
              }
              description={t("examPrepDescription")}
            />

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">
                  {t("chooseLabel")}
                </p>
                <div className="grid gap-3">
                  {chooseOptions.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium transition-all hover:bg-white hover:shadow-md group/item"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">
                  {t("sessionLabel")}
                </p>
                <ul className="space-y-4">
                  {sessionItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary/40 shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      <span className="text-slate-600 font-medium leading-relaxed group-hover:translate-x-1 transition-transform">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl italic text-primary font-medium">
                {t("examPrepNote")}
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
              badge={t("bookingBadge")}
              title={
                <>
                  {t("bookingTitle")}{" "}
                  <span className="text-primary"> {t("bookingTitleAccent")}</span>
                </>
              }
              description={t("bookingDescription")}
            />

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">
                  {t("consultLabel")}
                </p>
                <div className="grid gap-3">
                  {consultOptions.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 text-slate-700 font-medium shadow-sm transition-all hover:shadow-md group/item"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-secondary uppercase tracking-widest text-xs">
                  {t("helpLabel")}
                </p>
                <ul className="space-y-4">
                  {helpItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <ArrowRightCircle className="w-5 h-5 text-primary/40 shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      <span className="text-slate-600 font-medium leading-relaxed group-hover:translate-x-1 transition-transform">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
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
      <div className="relative h-full bg-white base-px base-py">
        <div className=" max-w-3xl mx-auto flex flex-col">
          <SectionHeader
            title={
              <>
                {t("formTitle")}{" "}
                <span className="text-primary">{t("formTitleAccent")}</span>
              </>
            }
            description={t("formDescription")}
            className="mb-12"
            badgeClassName="tracking-[0.1em]"
          />
          <FreeConsultationForm />
        </div>
      </div>
    </main>
  );
}
