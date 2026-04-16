import { ArrowBigRight, ArrowRight, Sparkle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="base-px base-py overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-800 rounded-full text-xs font-semibold tracking-wider uppercase border border-red-100">
            <Sparkles />
            Excellence in Education
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-secondary leading-[1.1] tracking-tight">
            Prep Smarter <br />
            <div>
              <span className="text-primary italic">Score</span> Higher
            </div>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Skilled and exprienced TEPTH Instructors to help you enhance your
            language skills.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/enroll-course"
              className={buttonVariants({
                size: "lg",
                className: "flex-1 rounded-md font-bold! h-12",
              })}
            >
              Enroll Now
              <ArrowRight />
            </Link>
            <Link
              href="/paid-mock-test"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "flex-1 rounded-md font-bold! h-12 text-primary",
              })}
            >
              Mock Test
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl  transform transition-all hover:rotate-0 duration-500 border-8 border-white">
            <Image
              alt="Student in library"
              className="w-full aspect-square object-cover"
              src="/images/hero-student.png"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="absolute bottom-10 -right-4 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block border border-outline/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-secondary">
                  Certified Center
                </div>
                <div className="text-xs text-on-surface-variant">
                  Global Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
