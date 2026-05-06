"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    BadgeCheck,
    CalendarCheck,
    ArrowRight,
    CreditCard,
    MapPin,
    Monitor,
    Armchair,
    Headphones,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function TestTakersPage() {
    return (
        <div className="min-h-screen font-headline antialiased tracking-tight">

            {/* Quick Links Bento Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 bg-white p-10 rounded-xl group hover:bg-primary transition-all duration-500 border border-slate-100">
                            <CalendarCheck className="w-12 h-12 text-primary group-hover:text-white transition-colors mb-6" />
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                                Seamless Booking
                            </h3>
                            <p className="text-slate-600 group-hover:text-white/80 mb-6">
                                Choose from over 50 global locations with real-time slot
                                availability and instant confirmation.
                            </p>
                            <Link
                                href="#"
                                className="text-primary font-bold group-hover:text-white flex items-center gap-2"
                            >
                                Find a slot <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-white p-10 rounded-xl hover:shadow-xl transition-all border border-slate-100">
                            <CreditCard className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                Transparent Fees
                            </h3>
                            <p className="text-sm text-slate-600">
                                No hidden costs. All-inclusive pricing for tests and initial
                                results.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-xl hover:shadow-xl transition-all border border-slate-100">
                            <MapPin className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                Premium Venues
                            </h3>
                            <p className="text-sm text-slate-600">
                                Strategically located centers with excellent transport links.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions - The Academic Atelier */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-extrabold tracking-tighter mb-6 text-slate-900">
                                Designed for Your <span className="text-primary">Peak Performance.</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                We understand that the environment defines the outcome. Our
                                ateliers are crafted to minimize fatigue and maximize focus.
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Tech */}
                        <div className="space-y-6">
                            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-slate-100">
                                <Image
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    alt="High-end dual monitor computer station"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjU0uewK9d4LuZ-yB5-9s57CjqzZQQYa8FTARf58qKEEnWhjbmYhxYe-CjHf_Ti4Pg-DAj8kNNNJKNZtYoQDIPtxnnvc4YT4FghFjW8fVsrEeFwsms5hUQS4i6Eyyp1eHvE-vZQUFXjK4F-jBb-Mt9e_y0YqrD1SKMl6mybrkspExsPMqEXZlPbQvVXFLVIhx10G4QORLeMBRiRR0RmTqrEJKaruGvFQvfga_QcLtgEKrX_s4dAO6hXRODPdMcmSYeEKAzZENjp2r6"
                                    fill
                                />
                            </div>
                            <h4 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                                <div className="bg-primary/5 p-2 rounded-lg">
                                    <Monitor className="w-6 h-6 text-primary" />
                                </div>
                                Advanced Technology
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                Dual-monitor workstations allow you to view questions and
                                resources side-by-side without toggling tabs, reducing cognitive
                                load.
                            </p>
                        </div>
                        {/* Comfort */}
                        <div className="space-y-6 lg:mt-12">
                            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-slate-100">
                                <Image
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    alt="Premium ergonomic office chair"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC07XD0-QVTeM_jzCxLfsNGGwBX8O8YNQG1X3N9GOQxPwVhEcZtnQHLIZ0LJ8NbWbsHN0OZdfPyBAOHYL-nmMwhFDPtjbrZMjtPaQcQfbwwdG7gDl_7iATonjvZO-iJ3p3CgT_VqOmOKNiVkV2BnXXFGOWukGzabSS69FRsE124lcQbWXkOtjEsunU9dqfGdoAsiC1pCTayB5ASgz9NXLaaoLUan4jH6_cgauz-I7vI5A8oMCx44fg07juArZfVr6bMBABW-YFwtL05"
                                    fill
                                />
                            </div>
                            <h4 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                                <div className="bg-primary/5 p-2 rounded-lg">
                                    <Armchair className="w-6 h-6 text-primary" />
                                </div>
                                Ergonomic Excellence
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                Our centers feature Herman Miller-inspired seating and
                                height-adjustable desks to ensure physical comfort throughout
                                long examinations.
                            </p>
                        </div>
                        {/* Support */}
                        <div className="space-y-6 lg:mt-24">
                            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-slate-100">
                                <Image
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    alt="Professional concierge staff"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAILzkmjpZRe3_76R6MAjFF4NWBm_NKLl8dK2jaV0rre0oqMgNIlzibSQu-ZFyC7FF-ipFcoFJSbh6GCuTeXLknXB6SDQBOH8iMbsvBa5wES4SrvmDcT5KnnFxgPXbJJUtkjoat6PhY-aLHDCeTLavkjUHYIo3Uzls8a0fdUwl7TbbeHmwzO9XFTY-EoKgkn7oNPjXdSJWzBTPoclUC4XtXXUDX9zIU0drz6b_2sUOR_d5WaLfmQbrWh3UQY8ZXo3aqEA7N9aAv6csQ"
                                    fill
                                />
                            </div>
                            <h4 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                                <div className="bg-primary/5 p-2 rounded-lg">
                                    <Headphones className="w-6 h-6 text-primary" />
                                </div>
                                Instant Concierge
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                On-site technical and administrative staff are dedicated to your
                                needs, providing instant support with a single click from your
                                station.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-100">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 text-slate-900">
                            Testing Day Logistics
                        </h2>
                        <p className="text-slate-600">
                            Everything you need to know before you arrive.
                        </p>
                    </div>

                    <Accordion className="w-full space-y-4 border-none shadow-none">
                        <AccordionItem
                            value="item-1"
                            className="bg-white px-8 rounded-xl border border-slate-100 shadow-sm"
                        >
                            <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                What ID is required?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                You must bring a valid, original government-issued ID (Passport
                                or National Identity Card). Digital copies or photocopies are
                                strictly not accepted.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="bg-white px-8 rounded-xl border border-slate-100 shadow-sm"
                        >
                            <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                When should I arrive?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                We recommend arriving at least 45 minutes before your scheduled
                                start time. This allows for mandatory security checks and
                                orientation.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="bg-white px-8 rounded-xl border border-slate-100 shadow-sm"
                        >
                            <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline">
                                Are lockers provided?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                Yes, individual secure lockers are provided for personal
                                belongings. No electronics or study materials are permitted
                                inside the testing hall.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
}

