import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BookExamItems({ data }: { data: any }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50">
        <div className="max-w-4xl space-y-6  base-py px-3 md:px-12">
          <h1 className="text-4xl md:text-7xl font-black text-secondary leading-[1.1] tracking-tight">
            {data.name} <span className="italic text-primary">Exams</span>
          </h1>
          <p className="text-secondary">{data.description}</p>
        </div>
      </div>

      <div className="section-container base-px base-py">
        <div className="mb-14 text-center space-y-4">
          <h2 className="section-title">
            Choose Your <span>{data.name}</span> Exam
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Each {data.name} variant is designed for a specific purpose. Select
            the one that matches your visa, academic, or professional goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items?.map((item: any, index: number) => (
            <Link
              key={item.id}
              href={item?.link || `/book-exams/${item.id}`}
              className="group"
            >
              <BaseCard className="p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
                <div className="flex items-center justify-between mb-8">
                  <BaseCardIcon>{index + 1}</BaseCardIcon>
                  <BaseCardArrow className="group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex-1 space-y-3">
                  <BaseCardTitle>{item.name}</BaseCardTitle>
                  {/* <BaseCardDescription>
                    Professional certification and international recognition for
                    your future career and migration goals.
                  </BaseCardDescription> */}
                </div>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
