import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { FileText, XCircle, ClipboardList, Download } from "lucide-react";

const FORMS = [
    {
        title: "PTE-A",
        subtitle: "Registration Form",
        icon: FileText,
        href: "#",
        description: "Download the official Pearson Test of English Academic registration forms.",
    },
    {
        title: "TEPTH CANCELLATION",
        subtitle: "Request Form",
        icon: XCircle,
        href: "#",
        description: "Official form for course or exam cancellation and refund requests.",
    },
    {
        title: "TOEFL IBT REGISTRATION",
        subtitle: "Registration Form",
        icon: ClipboardList,
        href: "#",
        description: "Complete your TOEFL iBT registration with the official TEPTH documentation.",
    },
];

export default function DownloadFormsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[65vh] min-h-[500px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Resource Center"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/75" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.95]",
                            "font-heading"
                        )}>
                            Registration <br />
                            <span className="italic text-[#A11D1D]">Official Forms.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10">
                            Access and download the necessary documentation for your exam registrations, cancellations, and administrative requests.
                        </p>

                        <div className="flex gap-12 pt-8 border-t border-white/20 max-w-lg">
                            <div className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-black text-[#A11D1D] font-heading">PDF</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Format Ready</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-black text-[#A11D1D] font-heading">100%</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Official Docs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forms Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FORMS.map((form) => (
                            <Card
                                key={form.title}
                                className="group relative bg-white border-gray-100 rounded-sm shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#A11D1D]/20 overflow-hidden"
                            >
                                {/* Visual Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-[#A11D1D] transition-colors" />

                                <CardHeader className="pt-10 pb-2">
                                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                                        <form.icon className="w-7 h-7 text-gray-400 group-hover:text-[#A11D1D]" />
                                    </div>
                                    <h3 className="text-sm font-black text-[#A11D1D] uppercase tracking-widest mb-1">
                                        {form.subtitle}
                                    </h3>
                                    <h4 className="text-2xl font-black text-gray-900 leading-tight">
                                        {form.title}
                                    </h4>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {form.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-6 pb-10 mt-auto">
                                    <Link
                                        href={form.href}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all hover:bg-[#A11D1D] hover:shadow-lg"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Help Note */}
                    <div className="mt-20 text-center">
                        <p className="text-gray-400 text-sm italic">
                            Can&apos;t find the form you need? Please contact our administrative office at <a href="mailto:info@tepth.net" className="text-[#A11D1D] font-bold hover:underline">info@tepth.net</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
