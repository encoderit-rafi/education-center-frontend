import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { exams, exams_types } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { Badge } from "@/components/ui/badge";
import GradientBox from "@/components/blocks/gradient-box";
import { buttonVariants } from "@/components/ui/button";

const IconTile = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "reading":
      return (
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "listening":
      return (
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      );
    case "writing":
      return (
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      );
    case "speaking":
      return (
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      );
    default:
      return null;
  }
};

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

  // Helper to find exam types in the hierarchy
  // const findExamTypes = (data: any[], targetId: string): any => {
  //   for (const item of data) {
  //     if (item.exam && item.exam.id === targetId) return item;
  //     if (item.id === targetId) return item;
  //     if (item.types && item.types.length > 0) {
  //       const found = findExamTypes(item.types, targetId);
  //       if (found) return found;
  //     }
  //   }
  //   return null;
  // };

  // const examTypesData = findExamTypes(exams_types, id);
  // const hasTypes =
  //   examTypesData && examTypesData.types && examTypesData.types.length > 0;

  // if (hasTypes) {
  //   return (
  //     <div>
  //       <section className="base-py bg-[#F9FAFB] base-px">
  //         <div className="section-container">
  //           <div className="mb-12 text-center">
  //             <h2 className="section-title">
  //               Choose Your <span>{exam.name}</span> Test
  //             </h2>
  //             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
  //               Each {exam.name} variant is designed for a specific purpose.
  //               Select the one that matches your visa, academic, or professional
  //               goal.
  //             </p>
  //           </div>

  //           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  //             {examTypesData.types.map((type: any, index: number) => (
  //               <Link
  //                 key={type.id}
  //                 // className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6  transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
  //                 href={`/exams/${type.id}`}
  //               >
  //                 <BaseCard className="p-6 h-full">
  //                   <div className="flex items-center gap-3">
  //                     <BaseCardIcon className="rounded-full size-9 text-lg font-bold">
  //                       {/* {exam.name.charAt(0)} */}
  //                       {index + 1}
  //                     </BaseCardIcon>
  //                     <div className="h-px flex-1 bg-red-50"></div>
  //                   </div>
  //                   <BaseCardTitle>{type.name}</BaseCardTitle>
  //                   <BaseCardDescription>{type.content}</BaseCardDescription>

  //                   <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
  //                     View Details
  //                     <ArrowRight size={14} />
  //                   </div>
  //                 </BaseCard>
  //               </Link>
  //             ))}
  //           </div>
  //         </div>
  //       </section>
  //       <GradientBox className="base-py base-px">
  //         <div className="section-container p-6 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
  //           <div className="max-w-xl">
  //             <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
  //               Not sure which {exam.name} test you need?
  //             </h2>
  //             <p className="mt-4 text-lg leading-relaxed text-red-100">
  //               Our team will help you choose the right {exam.name} variant for
  //               your visa, study, or migration goal — free of charge.
  //             </p>
  //           </div>
  //           <div className="grid grid-cols-2 gap-3">
  //             <Link
  //               // className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:bg-red-50"
  //               className={buttonVariants({
  //                 variant: "light",
  //                 className: "group px-5",
  //               })}
  //               href="/free-consultation"
  //             >
  //               Free Consultation
  //               <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
  //             </Link>
  //             <Link
  //               // className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
  //               className={buttonVariants({
  //                 variant: "secondary",
  //                 className: "group px-5",
  //               })}
  //               href="/book-exams"
  //             >
  //               Book an Exam
  //             </Link>
  //           </div>
  //         </div>
  //       </GradientBox>
  //     </div>
  //   );
  // }

  // Layout for single exams (e.g. TOEFL iBT)
  // return (
  //   <div>
  //     <section className="relative overflow-hidden bg-white">
  //       <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-7xl">
  //         <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
  //           <div className="max-w-2xl">
  //             <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
  //               {exam.name}
  //             </h1>
  //             {exam.subtitle && (
  //               <p className="mt-3 text-lg font-medium text-gray-500">
  //                 {exam.subtitle}
  //               </p>
  //             )}
  //             <p className="mt-5 text-base leading-relaxed text-gray-600">
  //               {exam.content}
  //             </p>

  //             <div className="mt-8 flex flex-wrap gap-3">
  //               <Link
  //                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-800"
  //                 href={`/book-exams/${exam.id}`}
  //               >
  //                 <Calendar />
  //                 Book Exam
  //               </Link>
  //               <Link
  //                 className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-8 py-3.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary"
  //                 href="/free-consultation"
  //               >
  //                 Free Consultation
  //               </Link>
  //             </div>
  //           </div>

  //           <div className="relative">
  //             <div className="relative flex h-40 w-48 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
  //               <Image
  //                 src={exam.image}
  //                 alt={exam.name}
  //                 width={140}
  //                 height={70}
  //                 className="h-14 w-auto object-contain"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Stats Section */}
  //     <section className="relative bg-[#F9FAFB] pb-6 pt-2">
  //       <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
  //         <div className="relative -mt-10 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl md:p-6 lg:p-8">
  //           <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 md:gap-0 md:divide-x md:divide-gray-100">
  //             {exam.stats?.map((stat, i) => (
  //               <div
  //                 key={i}
  //                 className="flex flex-col items-center gap-2 px-4 py-4 text-center md:px-6"
  //               >
  //                 <p className="text-2xl font-bold leading-none text-gray-900 lg:text-3xl">
  //                   {stat.value}
  //                 </p>
  //                 <p className="text-[12px] font-medium uppercase tracking-wider text-gray-500">
  //                   {stat.label}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Content Section */}
  //     <section className="bg-[#F9FAFB] py-20">
  //       <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
  //         <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
  //           <div className="lg:col-span-2">
  //             <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-red-50 rounded-full mb-4">
  //               About the Exam
  //             </span>
  //             <h2 className="mb-5 text-2xl font-bold text-gray-900 lg:text-3xl">
  //               {exam.name} Overview
  //             </h2>
  //             <p className="leading-relaxed text-gray-600">{exam.overview}</p>

  //             {exam.sections && exam.sections.length > 0 && (
  //               <div className="mt-12">
  //                 <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-red-50 rounded-full mb-4">
  //                   Test Format
  //                 </span>
  //                 <h3 className="mb-6 text-xl font-bold text-gray-900 lg:text-2xl">
  //                   What to Expect on Test Day
  //                 </h3>
  //                 <div className="space-y-4">
  //                   {exam.sections.map((section, i) => (
  //                     <div
  //                       key={i}
  //                       className="flex gap-4 p-5 rounded-xl border border-gray-50 bg-white shadow-sm transition-all hover:shadow-md"
  //                     >
  //                       <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-primary">
  //                         <IconTile icon={section.icon} />
  //                       </span>
  //                       <div className="min-w-0 flex-1">
  //                         <div className="flex flex-wrap items-center gap-3">
  //                           <h4 className="font-semibold text-gray-900">
  //                             {section.name}
  //                           </h4>
  //                           <span className="rounded-full border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
  //                             {section.duration}
  //                           </span>
  //                         </div>
  //                         <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
  //                           {section.details}
  //                         </p>
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             )}
  //           </div>

  //           {/* Sidebar */}
  //           <div className="space-y-6">
  //             <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  //               <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
  //                 Who Should Take This?
  //               </h3>
  //               <ul className="space-y-3">
  //                 {exam.whoShouldTake?.map((item, i) => (
  //                   <li
  //                     key={i}
  //                     className="flex items-start gap-3 text-sm text-gray-700"
  //                   >
  //                     <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
  //                       <svg
  //                         className="h-3 w-3"
  //                         fill="none"
  //                         viewBox="0 0 24 24"
  //                         stroke="currentColor"
  //                         strokeWidth="2.5"
  //                         aria-hidden="true"
  //                       >
  //                         <path
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="M5 13l4 4L19 7"
  //                         ></path>
  //                       </svg>
  //                     </span>
  //                     {item}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>

  //             <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  //               <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
  //                 Scores & Results
  //               </h3>
  //               <div className="space-y-3 text-sm">
  //                 {exam.stats?.map((stat, i) => (
  //                   <div
  //                     key={i}
  //                     className="flex items-start justify-between gap-4 border-b border-dashed border-gray-100 pb-2.5 last:border-0 last:pb-0"
  //                   >
  //                     <span className="text-gray-500">{stat.label}</span>
  //                     <span className="text-right font-semibold text-gray-900">
  //                       {stat.value}
  //                     </span>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>

  //             <div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm">
  //               <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
  //                 Accepted For
  //               </h3>
  //               <ul className="space-y-2.5">
  //                 {exam.acceptedFor?.map((item, i) => (
  //                   <li
  //                     key={i}
  //                     className="flex items-center gap-2.5 text-sm text-red-900"
  //                   >
  //                     <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
  //                     {item}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>

  //             <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-center shadow-lg">
  //               <div
  //                 className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10"
  //                 aria-hidden="true"
  //               ></div>
  //               <p className="relative mb-1 text-xs font-semibold uppercase tracking-widest text-red-200">
  //                 Ready to Register?
  //               </p>
  //               <p className="relative mb-4 text-lg font-bold text-white">
  //                 Book {exam.name} at TEPTH
  //               </p>
  //               <Link
  //                 className="relative block rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-red-50"
  //                 href="/book-exams"
  //               >
  //                 Book Now
  //               </Link>
  //               <Link
  //                 className="relative mt-3 block text-xs font-medium text-red-200 transition-colors hover:text-white"
  //                 href="/test-dates"
  //               >
  //                 View upcoming test dates →
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* FAQs Section */}
  //     {exam.faqs && exam.faqs.length > 0 && (
  //       <section className="bg-white py-20">
  //         <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
  //           <div className="mb-10 text-center">
  //             <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-red-50 rounded-full mb-5">
  //               Frequently Asked
  //             </span>
  //             <h2 className="text-3xl font-bold text-gray-900">
  //               Common Questions About {exam.name}
  //             </h2>
  //           </div>
  //           <div className="space-y-4">
  //             {exam.faqs.map((faq, i) => (
  //               <div
  //                 key={i}
  //                 className="p-6 rounded-xl border border-gray-50 bg-white shadow-sm transition-all hover:shadow-md"
  //               >
  //                 <h3 className="mb-2 font-semibold text-gray-900">
  //                   {faq.question}
  //                 </h3>
  //                 <p className="text-sm leading-relaxed text-gray-600">
  //                   {faq.answer}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>
  //     )}

  //     {/* Final CTA */}
  //     <section className="relative overflow-hidden bg-[#F9FAFB] py-20">
  //       <div className="container relative mx-auto px-4 lg:px-8 max-w-7xl">
  //         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-800 to-red-900 px-8 py-14 shadow-xl md:px-14 md:py-16">
  //           <div
  //             className="pointer-events-none absolute inset-0"
  //             aria-hidden="true"
  //           >
  //             <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5"></div>
  //             <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5"></div>
  //           </div>
  //           <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
  //             <div className="max-w-xl">
  //               <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
  //                 Register for {exam.name} at TEPTH
  //               </h2>
  //               <p className="mt-4 text-lg leading-relaxed text-red-100">
  //                 Book online in minutes. Secure payment and instant
  //                 confirmation.
  //               </p>
  //             </div>
  //             <div className="flex flex-col gap-3 sm:flex-row">
  //               <Link
  //                 className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:bg-red-50"
  //                 href="/book-exams"
  //               >
  //                 Book an Exam
  //                 <svg
  //                   className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   strokeWidth="2"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M17 8l4 4m0 0l-4 4m4-4H3"
  //                   ></path>
  //                 </svg>
  //               </Link>
  //               <Link
  //                 className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
  //                 href="/free-consultation"
  //               >
  //                 Free Consultation
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
}
