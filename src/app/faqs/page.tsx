import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "How do I register?",
        answer: "Since you are already on our website, the easiest and fastest way is to register online. You can also choose to register in person at the center.",
    },
    {
        question: "Do you offer individual (one to one) tutoring?",
        answer: "Yes, we do. Both, group and individual tutoring are available.",
    },
    {
        question: "Is the material fee included in the course fee? And is it refundable?",
        answer: "Yes, it is included and it is not refundable.",
    },
    {
        question: "Is the registration fee refundable?",
        answer: "No, it is not refundable.",
    },
    {
        question: "What happens if I cancel/withdraw?",
        answer: "Please refer to our refund policy for details.",
    },
    {
        question: "I am trying to register online but I don't know why it is not working. Do I need to adjust my internet explorer settings?",
        answer: "In order to register online, your internet explorer must be set to accept cookies and to have JavaScript turned on. These are very common settings and most candidates do not need to adjust their internet explorer settings to submit an online registration. You can be 100% sure that we have successfully received your registration request if you receive an automatic reply from us within few minutes. If you do not receive this email, that means we did not receive your registration request or your email address was typed incorrectly on the registration form.",
    },
    {
        question: "What methods of payment do you accept online?",
        answer: "Visa, MasterCard and PayPal.",
    },
    {
        question: "What qualifications do your teachers have?",
        answer: "Our teachers have either Bachelor, masters or other teaching certificates such as CELTA. Many of our teachers also have years of teaching experience overseas.",
    },
    {
        question: "Does your centre cater for special needs candidates?",
        answer: "Yes, all our premises are handicap accessible.",
    },
    {
        question: "Do you offer a noise-free learning environment?",
        answer: "Yes, we do. Our modern \"noise-free\" classrooms and testing labs are what distinguishes us from other centres in the market.",
    },
    {
        question: "Do you offer classes in the evening?",
        answer: "Yes, we do. Our working hours are from 9:00 am – 9:00 pm (Sat-Thu.)",
    },
    {
        question: "Do you have brochures/flyers you could send me?",
        answer: "Yes, we do. The information and courses details in the brochure or flyers are similar to the information and course details on our website. However, you are very welcome to have a brochure or a flyer emailed to you. Please contact us on: info@tepth.net.",
    },
    {
        question: "Is public transportation available in Dubai Silicon Oasis?",
        answer: "Yes, it is available. You can take bus number 320 from Al Rashidiya station and x25 from Burjuman to Dubai Silicon Oasis and the bus stop is 5 minutes walk from our center.",
    },
];

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[65vh] min-h-[500px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Information House"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.95]",
                            "font-heading"
                        )}>
                            Answers to your <br />
                            <span className="italic text-[#A11D1D]">Common Queries.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10">
                            Everything you need to know about our registration process, courses, and premium facilities in Dubai Silicon Oasis.
                        </p>

                        <div className="flex gap-12 pt-8 border-t border-white/20 max-w-lg">
                            <div className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-black text-[#A11D1D] font-heading">24/7</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Online Access</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-black text-[#A11D1D] font-heading">95%</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Instant Help</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16 text-left">
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-4">Frequently Asked Questions</h2>
                        <h3 className="text-3xl font-black text-gray-900">General Information</h3>
                        <div className="w-12 h-1 bg-[#A11D1D] mt-4" />
                    </div>

                    <Accordion multiple className="border-none shadow-none space-y-4">
                        {FAQS.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#A11D1D]/20 hover:shadow-lg aria-expanded:border-[#A11D1D]/30"
                            >
                                <AccordionTrigger className="px-8 py-7 text-lg md:text-xl font-black text-gray-900 hover:text-[#A11D1D] hover:no-underline text-left leading-tight group">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-8 pb-8 text-gray-600 text-sm md:text-lg leading-relaxed bg-gray-50/20">
                                    <div className="border-l-2 border-[#A11D1D]/10 pl-6">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Further Help CTA */}
                    <div className="mt-24 p-12 bg-[#111827] rounded-sm text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity" />
                        <h3 className="text-2xl font-black text-white mb-3">Still have questions?</h3>
                        <p className="text-gray-400 mb-10 max-w-md mx-auto">Our specialized support team is ready to assist you with any further inquiries.</p>
                        <a
                            href="mailto:info@tepth.net"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[#A11D1D] text-white font-black text-sm uppercase tracking-widest rounded-sm transition-all hover:bg-[#8A1818] hover:shadow-2xl hover:-translate-y-1"
                        >
                            Email Support House
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
