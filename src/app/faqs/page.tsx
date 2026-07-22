"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const t = useTranslations("FAQsPage");
  const faqs = t.raw("faqs") as { question: string; answer: string }[];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <section className="pt-20 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block mb-4">
            FAQ
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" className="border-none bg-transparent rounded-none shadow-none gap-4 flex flex-col">
            {faqs.map((faq, index) => {
              const value = `faq-${index}`;
              const numStr = index + 1;
              return (
                <AccordionItem
                  key={index}
                  value={value}
                  className="bg-white border border-slate-150 rounded-2xl shadow-xs overflow-hidden data-open:bg-white! not-last:border-b-0!"
                >
                  <AccordionTrigger className="w-full text-left py-5 px-6 md:px-8 hover:no-underline transition-all duration-200 items-center!">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary font-bold shrink-0">
                        {numStr}
                      </div>
                      <span className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8 pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                    <div className="pl-14 text-slate-600 font-medium">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
