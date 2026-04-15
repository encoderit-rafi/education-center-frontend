"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    id: "q1",
    text: "Grammar Assessment",
    subtext: 'Choose the correct form to complete: "If she _______ harder, she would have passed the exam."',
    options: ["studies", "studied", "had studied", "has studied"],
  },
  {
    id: "q2",
    text: "Vocabulary Mastery",
    subtext: "Which word is a synonym for 'Meticulous'?",
    options: ["Careless", "Thorough", "Quick", "Boring"],
  },
];

export default function TestYourEnglishForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSelect = (qId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[3rem] p-16 text-center space-y-8 animate-in zoom-in-95 duration-500 shadow-2xl shadow-emerald-500/5">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-5xl text-emerald-600 font-bold">verified</span>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-headline font-black text-emerald-900 tracking-tight leading-none">Assessment Complete</h3>
          <p className="text-emerald-700/70 text-lg leading-relaxed font-medium max-w-lg mx-auto">
            Our academic board has received your responses. Your personalized proficiency profile and course roadmap will be sent to your email within 4 hours.
          </p>
        </div>
        <button 
          onClick={() => { setStep(1); setIsSuccess(false); setAnswers({}); }}
          className="px-12 py-5 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 w-16 rounded-full transition-all duration-500",
                step >= i ? "bg-primary" : "bg-surface-container-high"
              )} 
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">Phase {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {step === 1 && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-black text-secondary tracking-tight">Basic Profile</h3>
              <p className="text-on-surface-variant/60 font-medium">Please provide your contact details for the official results report.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Full Name</label>
                <input required type="text" className="w-full px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="First & Last Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Email Address</label>
                <input required type="email" className="w-full px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="results@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Phone Number</label>
                <input required type="tel" className="w-full px-8 py-5 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary" placeholder="+971 -- --- ----" />
              </div>
            </div>
            <button 
              type="button"
              onClick={handleNext}
              className="px-12 py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/10"
            >
              Begin Proficiency Check
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-16">
            {QUESTIONS.map((q) => (
              <div key={q.id} className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-headline font-black text-secondary tracking-tight">{q.text}</h4>
                  <p className="text-on-surface-variant/60 font-medium leading-relaxed">{q.subtext}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {q.options.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => handleSelect(q.id, opt)}
                      className={cn(
                        "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group",
                        answers[q.id] === opt 
                          ? "border-primary bg-white shadow-xl shadow-primary/5" 
                          : "border-outline/5 bg-surface-container-low hover:border-primary/20 hover:bg-white"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-bold transition-colors",
                        answers[q.id] === opt ? "text-primary" : "text-secondary/60 group-hover:text-secondary"
                      )}>{opt}</span>
                      {answers[q.id] === opt && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white scale-110 shadow-lg">
                          <span className="material-symbols-outlined text-xs font-bold">check</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <button onClick={handlePrev} type="button" className="w-16 h-16 rounded-2xl border-2 border-outline/5 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button 
                onClick={handleNext}
                type="button"
                className="flex-grow py-5 bg-secondary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all shadow-xl"
              >
                Proceed to Writing Section
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-black text-secondary tracking-tight">Written Expression</h3>
              <p className="text-on-surface-variant/60 font-medium">Describe your primary goal for improving your English in 2-3 sentences. This helps us gauge your sentence structure and coherence.</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 ml-1">Your Response</label>
              <textarea 
                required
                className="w-full p-8 bg-surface-container-low rounded-[2rem] border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary resize-none" 
                rows={6}
                placeholder="Type your response here..."
              />
            </div>
            <div className="flex gap-4">
              <button onClick={handlePrev} type="button" className="w-16 h-16 rounded-2xl border-2 border-outline/5 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button 
                type="submit"
                className="flex-grow py-5 bg-primary text-white font-headline font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20"
              >
                Submit Assessment
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-secondary/30 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              AI-Augmented Academic Evaluation
            </div>
          </div>
        )}

      </form>
    </div>
  );
}
