"use client";

import TestYourEnglishForm from "@/components/blocks/test-your-english-form";


export default function TestYourEnglishPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tight mb-4">
            Test Your English <span className="text-primary italic">Level</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Assess your proficiency and get a personalized learning roadmap.
          </p>
        </div>
        <TestYourEnglishForm />
      </div>
    </main>
  );
}
