"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Landmark, Building2, BookOpen, Headphones, Laptop, Star, ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";

const ICONS = [Landmark, Building2, BookOpen, Headphones, Laptop, Star];

export default function ExperienceSection() {
  const t = useTranslations("HomePage.ExperienceSection");
  const items = t.raw("items") as { title: string }[];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1E293B] mb-12 md:mb-16">
          {t("title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-slate-800 font-semibold text-sm md:text-base leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/book-exams"
            className={buttonVariants({
              size: "lg",
              className: "group px-8 py-3",
            })}
          >
            {t("bookExam")}
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
