"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/lib/courses-data";
import { cn } from "@/lib/utils";

export default function CourseDetails() {
  const params = useParams();
  const id = params?.id as string;
  const course = COURSES.find((c) => c.id === id);

  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    notFound();
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "methodology", label: "Methodology" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* ── Detail Hero ── */}
      <section className="relative h-[250px] md:h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={course.image}
            alt=""
            className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pb-12">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6">
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary">{course.category}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4">
                {course.category} Certification
              </span>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-secondary leading-[1.1] tracking-tighter">
                {course.title}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${course.id}${i}`} alt="Student" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-widest leading-none">
                <span className="text-secondary font-black">400+</span> <br />
                Enrolled Students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* ── Content Column ── */}
          <div className="lg:w-2/3">
            {/* Tabs Header */}
            <div className="flex border-b border-outline/10 mb-10 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-8 py-5 text-sm font-headline font-extrabold uppercase tracking-widest transition-all relative whitespace-nowrap",
                    activeTab === tab.id 
                      ? "text-primary" 
                      : "text-on-surface-variant/40 hover:text-secondary"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="animate-in fade-in duration-500">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div className="prose prose-slate max-w-none">
                    <p className="text-xl text-secondary/80 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-10">
                      {course.description}
                    </p>
                    <p className="text-on-surface-variant text-lg leading-relaxed font-normal">
                      {course.extendedDescription}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline/5 hover:border-primary/20 transition-colors group">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">target</span>
                      </div>
                      <h4 className="text-xl font-headline font-extrabold text-secondary mb-4 tracking-tight">Learning Objectives</h4>
                      <ul className="space-y-3">
                        <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                          <span className="text-primary font-bold">01.</span> Master formal academic tone and register.
                        </li>
                        <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                          <span className="text-primary font-bold">02.</span> Apply analytical frameworks to complex texts.
                        </li>
                        <li className="flex gap-3 items-start text-on-surface-variant/80 text-sm font-medium">
                          <span className="text-primary font-bold">03.</span> Construct logically tight argumentative structures.
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline/5 hover:border-primary/20 transition-colors group">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">verified</span>
                      </div>
                      <h4 className="text-xl font-headline font-extrabold text-secondary mb-4 tracking-tight">Certification</h4>
                      <p className="text-on-surface-variant/80 text-sm font-medium leading-relaxed">
                        Upon successful completion, students receive a TEPTH Gold Standard Certification, recognized by 40+ leading regional institutions.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-6">
                  {course.curriculum.map((module, idx) => (
                    <div key={idx} className="group bg-surface-container-low border border-outline/5 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Module {idx + 1}</span>
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-sm">lock_open</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-headline font-extrabold text-secondary mb-4 group-hover:text-primary transition-colors">{module.title}</h4>
                      <p className="text-on-surface-variant/80 text-base leading-relaxed font-medium">{module.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "methodology" && (
                <div className="bg-secondary rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mb-32" />
                  <h4 className="text-3xl font-headline font-extrabold mb-8 tracking-tight">The TEPTH Atelier Method</h4>
                  <div className="space-y-10 relative z-10">
                    <div className="flex gap-8">
                      <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                        <span className="text-xl font-black">01</span>
                      </div>
                      <div>
                        <h5 className="text-xl font-bold mb-2">Immersive Syntax Branding</h5>
                        <p className="text-white/70 text-sm leading-relaxed font-medium max-w-lg">
                          We don't just teach English; we teach you how to project your unique professional voice through advanced linguistic structures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                        <span className="text-xl font-black">02</span>
                      </div>
                      <div>
                        <h5 className="text-xl font-bold mb-2">Feedback Loops with Examiners</h5>
                        <p className="text-white/70 text-sm leading-relaxed font-medium max-w-lg">
                          Every piece of output is critiqued by actual or former examiners to reveal the hidden 'blind spots' in your performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar Column ── */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              
              {/* Enrollment Card */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-secondary/5 border border-outline/10 p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-primary/10 text-8xl select-none translate-x-8 -translate-y-8">payments</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col mb-8">
                    <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] mb-2">Investment</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black text-primary font-headline">{course.investment}</span>
                       <span className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">USD</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">schedule</span>
                        Duration
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                        Level
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-outline/5 hover:bg-surface-container-low transition-colors px-2 rounded-xl">
                      <div className="flex items-center gap-3 text-secondary font-extrabold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-primary">laptop_mac</span>
                        Format
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">{course.format}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-5 bg-secondary text-white font-headline font-extrabold text-sm rounded-2xl hover:bg-primary transition-all shadow-xl shadow-secondary/20 uppercase tracking-[0.2em]">
                    Enroll in this Course
                  </button>
                  <p className="text-center text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mt-6">
                    Next Intakes: Monday & Wednesday Morning
                  </p>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-surface-container-low rounded-[2.5rem] p-10 border border-outline/5">
                <h4 className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] mb-8">Lead Instructor</h4>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0">
                    <img src={course.instructor.image} alt={course.instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-lg font-headline font-extrabold text-secondary leading-tight">{course.instructor.name}</h5>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-1">{course.instructor.role}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-normal">
                  {course.instructor.bio}
                </p>
                <Link href="#" className="inline-block mt-6 text-[10px] font-black text-secondary uppercase tracking-[0.2em] border-b border-secondary hover:text-primary hover:border-primary transition-all">
                  View Full Profile
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── Recommended Section ── */}
      <section className="bg-surface-container-low/50 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-8">
           <div className="flex items-end justify-between mb-16">
             <div>
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">You might also like</h2>
                <h3 className="text-4xl font-headline font-extrabold text-secondary tracking-tight">Recommended Streams</h3>
             </div>
             <Link href="/courses" className="hidden md:block px-8 py-3 border-2 border-outline/20 text-secondary font-headline font-extrabold rounded-2xl hover:bg-white transition-all text-sm uppercase tracking-widest">
               See All
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {COURSES.filter(c => c.id !== id).slice(0, 3).map((c) => (
                <Link key={c.id} href={`/courses/${c.id}`} className="group bg-white rounded-[2rem] p-4 border border-outline/5 hover:shadow-2xl transition-all">
                  <div className="h-48 rounded-[1.5rem] overflow-hidden mb-6">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="px-4 pb-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{c.category}</span>
                    <h4 className="text-lg font-headline font-extrabold text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-1">{c.title}</h4>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
