"use client";

import React from "react";
import EnglishQuizForm from "@/components/blocks/english-quiz-form";

export default function EnglishQuizPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tight mb-4">
            English <span className="text-primary italic">Quiz</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Test your English skills and get instant results.
          </p>
        </div>
        <EnglishQuizForm />
      </div>
    </main>
  );
}
