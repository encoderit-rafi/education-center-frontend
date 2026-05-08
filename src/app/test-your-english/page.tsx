"use client";

import TestYourEnglishForm from "@/components/blocks/test-your-english-form";


export default function TestYourEnglishPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* ── Assessment Journey ── */}
      <section id="assessment-journey" className="px-8 pt-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-headline font-black text-secondary tracking-tight">
              Test your english level
            </h2>
            <div className="w-24 h-1 crimson-gradient mx-auto rounded-full" />
          </div>
          <TestYourEnglishForm />
        </div>
      </section>
    </div>
  );
}
