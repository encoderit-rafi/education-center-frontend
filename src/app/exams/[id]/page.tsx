import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  exams,
  exams_types,
  exams_courses,
  exams_workshops,
  paid_mock_tests,
} from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight, Clock, GraduationCap, BookOpen } from "lucide-react";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const exam = exams.find((e) => e.id === id);
  if (!exam) {
    notFound();
  }

  const examTypesData = exams_types.find((et) => et.exam.id === id);
  const examCoursesData = exams_courses.filter((ec) => ec.exam.id === id);
  const examWorkshopsData = exams_workshops.find((ew) => ew.exam.id === id);
  const examMockTests = paid_mock_tests.filter((mt) => mt.exam.id === id);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <Image
          src={exam.image}
          alt={exam.name}
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-white border-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Exam Details
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {exam.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
              {exam.content}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-red-800 text-white px-10 h-14 font-bold rounded-xl text-lg transition-all shadow-lg shadow-primary/20">
                Book Exam Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-md px-10 h-14 font-bold rounded-xl text-lg transition-all">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Exam Types Section */}
            {examTypesData && examTypesData.types.length > 0 && (
              <section id="exam-types" className="scroll-mt-24">
                <div className="flex flex-col mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">Options</span>
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Available Exam Types</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {examTypesData.types.map((type) => (
                    <Card key={type.id} className="group overflow-hidden border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-[2rem] bg-white">
                      <div className="h-56 relative overflow-hidden">
                        <Image
                          src={type.image}
                          alt={type.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <h3 className="text-2xl font-bold text-white tracking-tight">{type.name}</h3>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <p className="text-slate-600 mb-8 leading-relaxed">
                          {type.content}
                        </p>
                        {type.types && type.types.length > 0 && (
                          <div className="space-y-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Available Variations</p>
                            <div className="flex flex-wrap gap-2">
                              {type.types.map((sub) => (
                                <Badge key={sub.id} variant="secondary" className="bg-white text-slate-700 border-slate-200 px-3 py-1 text-xs">
                                  {sub.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <Button variant="ghost" className="w-full justify-between text-primary font-bold hover:text-red-800 hover:bg-primary/5 p-0 h-auto group text-md">
                          Discover Full Details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Courses Section */}
            {examCoursesData.length > 0 && (
              <section id="courses" className="scroll-mt-24">
                <div className="flex flex-col mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">Training</span>
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Master the Exam</h2>
                </div>
                <div className="space-y-10">
                  {examCoursesData.map((ec, idx) => (
                    <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group">
                      <div className="p-10 md:p-14">
                        <div className="flex flex-wrap items-start justify-between gap-8 mb-10">
                          <div className="flex items-start gap-6">
                            <div className="h-16 w-16 bg-primary/10 rounded-[1.25rem] flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                              <GraduationCap className="w-9 h-9 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <Badge className="mb-2 bg-slate-100 text-slate-600 border-none font-bold">
                                {ec.class_type_id.charAt(0).toUpperCase() + ec.class_type_id.slice(1)} Preparation
                              </Badge>
                              <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-none">Comprehensive Coaching</h3>
                            </div>
                          </div>
                          <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Starting from</p>
                            <p className="text-3xl font-black text-primary">AED {Math.min(...ec.courses.map(c => c.price))}</p>
                          </div>
                        </div>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-3xl">
                          {ec.content}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                          {ec.courses.map((course) => (
                            <div key={course.id} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
                              <div>
                                <h4 className="font-bold text-slate-800 text-lg mb-3">{course.name}</h4>
                                <div className="flex items-center gap-3 mb-6">
                                  <span className="text-2xl font-black text-slate-900">{course.currency} {course.price}</span>
                                  {course.general_discount > 0 && (
                                    <Badge variant="destructive" className="bg-red-500 text-[10px] font-bold px-2 py-0.5">-{course.general_discount}% OFF</Badge>
                                  )}
                                </div>
                              </div>
                              <Button className="w-full bg-white text-slate-900 border-2 border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold h-12 rounded-xl">
                                Select Plan
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 py-8 border-t border-slate-50">
                          {[
                            "Certified Native Trainers",
                            "Premium Study Materials",
                            "Unlimited Practice Tests",
                            "Performance Analytics"
                          ].map((feature, fidx) => (
                            <div key={fidx} className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Workshops Section */}
            {examWorkshopsData && (
              <section id="workshops" className="scroll-mt-24">
                <div className="flex flex-col mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">Intensive</span>
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Rapid Skill Boost</h2>
                </div>
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
                    <div className="md:col-span-5 relative overflow-hidden">
                      <Image
                        src={examWorkshopsData.image}
                        alt="Workshop"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </div>
                    <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                      <Badge className="bg-primary text-white border-none mb-6 w-fit px-4 py-1.5 font-bold uppercase tracking-widest text-[10px]">
                        Fast-Track Workshop
                      </Badge>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Master Everything in a Day</h3>
                      <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light">
                        {examWorkshopsData.content}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        {examWorkshopsData.workshops.map((ws) => (
                          <div key={ws.id} className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{ws.duration}</span>
                            <span className="text-white font-bold text-lg mb-2">{ws.name}</span>
                            <span className="text-primary text-xl font-black">{ws.currency} {ws.price}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full sm:w-fit bg-primary hover:bg-red-800 text-white px-12 h-14 font-bold rounded-xl text-lg shadow-xl shadow-primary/20 transition-all">
                        Register for Workshop
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Mock Tests Section */}
            {examMockTests.length > 0 && (
              <section id="mock-tests" className="scroll-mt-24">
                <div className="flex flex-col mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">Practice</span>
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Mock Evaluation</h2>
                </div>
                <div className="grid grid-cols-1 gap-10">
                  {examMockTests.map((mt, idx) => (
                    <Card key={idx} className="border-none bg-gradient-to-br from-slate-50 to-white shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center rounded-[3rem] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                      <div className="w-40 h-40 relative shrink-0 z-10">
                        <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                        <Image src={mt.image} alt="Mock Test" fill className="object-contain p-6 relative z-20" />
                      </div>
                      <div className="flex-1 text-center md:text-left z-10">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1 font-bold uppercase tracking-widest text-[10px]">Official Test Format</Badge>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Get Your Projected Score</h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                          {mt.content}
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-10">
                          <div className="flex items-center gap-3 text-slate-700 font-bold">
                            <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                              <Clock className="w-5 h-5 text-primary" />
                            </div>
                            Timed Simulation
                          </div>
                          <div className="flex items-center gap-3 text-slate-700 font-bold">
                             <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            Detailed Feedback
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-center w-full md:w-[280px] z-10">
                        <p className="text-slate-500 text-[10px] font-black mb-2 uppercase tracking-[0.2em]">Booking Fee</p>
                        <p className="text-4xl font-black text-white mb-8">{mt.price.currency} {mt.price.fee}</p>
                        <Button className="w-full bg-primary hover:bg-red-800 text-white h-14 font-bold rounded-2xl text-lg shadow-lg shadow-primary/20">Book Session</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">
              {/* Quick Actions Card */}
              <Card className="rounded-[2.5rem] border-slate-100 shadow-2xl overflow-hidden bg-white">
                <div className="bg-slate-900 p-8 text-white text-center relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-50" />
                  <h3 className="text-2xl font-bold relative z-10 tracking-tight">Ready to Conquer?</h3>
                  <p className="text-slate-400 text-sm mt-2 relative z-10">Expert guidance starts here</p>
                </div>
                <CardContent className="p-8 space-y-6">
                  <Button className="w-full bg-primary hover:bg-red-800 text-white h-16 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                    Schedule Your Test
                  </Button>
                  <Button variant="outline" className="w-full border-slate-200 h-16 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all text-slate-700">
                    Consult an Expert
                  </Button>
                  <Separator className="my-8" />
                  <div className="space-y-6">
                    <h4 className="font-bold text-slate-900 text-lg tracking-tight">Why Choose TEPTH?</h4>
                    <ul className="space-y-4">
                      {[
                        "Official Silver Partner of British Council",
                        "Flexible Scheduling (Morning/Evening)",
                        "Personalized Study Plans",
                        "AI-Powered Performance Tracking",
                        "High Success Rate (98%)"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-md text-slate-600 font-medium">
                          <div className="h-6 w-6 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Link href="/contact" className="block">
                <div className="bg-gradient-to-br from-primary to-red-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                  <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">Need Support?</h3>
                  <p className="text-white/80 text-lg mb-10 leading-relaxed relative z-10 font-light">Our dedicated counselors are ready to help you navigate your journey.</p>
                  <div className="flex items-center gap-3 text-white font-bold text-lg group-hover:gap-5 transition-all relative z-10">
                    Contact Support <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
