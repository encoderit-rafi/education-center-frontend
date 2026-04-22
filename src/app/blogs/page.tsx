"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BLOGS } from "@/lib/blogs-data";
import { ArrowRight } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-us/infrastructure-center.png"
            alt="TEPTH Academic Environment"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
          <div className="max-w-4xl space-y-8">
            <h1
              className={cn(
                "text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9]",
                "font-heading",
              )}
            >
              Cultures of <br />
              <span className="italic text-[#A11D1D]">Knowledge.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed font-medium">
              Exploring the frontiers of language assessment and academic excellence through expert-led research, tips, and global educational storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* ── Blog Grid Section ── */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Our Insights
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-secondary tracking-tight">
            Latest Journals & Educational Strategies
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-outline/10"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-lg">
                  {blog.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                   <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-extrabold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8 font-medium line-clamp-3">
                  {blog.desc}
                </p>

                <div className="mt-auto pt-8 border-t border-outline/10">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="flex items-center gap-2 text-primary font-extrabold text-[12px] tracking-widest hover:gap-3 transition-all uppercase"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner Section ── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-primary-container rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border border-primary/10 shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

          <div className="relative z-10 flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary mb-6 tracking-tight leading-tight">
              Deepen your <br className="hidden lg:block" /> understanding.
            </h2>
            <p className="text-on-surface-variant/80 text-lg mb-10 leading-relaxed max-w-xl font-medium">
              Explore our comprehensive range of courses and assessment preparations, tailored to bridge the gap between your ambition and academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="px-8 py-4 bg-primary text-white font-headline font-extrabold rounded-2xl hover:bg-secondary transition-all shadow-lg text-sm uppercase tracking-widest"
              >
                Explore Courses
              </Link>
              <Link
                href="/free-consultation"
                className="px-8 py-4 bg-white text-secondary border border-outline/20 font-headline font-extrabold rounded-2xl hover:bg-surface-container transition-all text-sm uppercase tracking-widest"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img
              className="w-80 h-[450px] object-cover rounded-[2rem] shadow-2xl relative transition-transform duration-700 group-hover:scale-105"
              src="/images/about-us/vision-hero.png"
              alt="TEPTH Academic Advisor"
            />
          </div>
        </div>
      </section>
    </main>
  );
}