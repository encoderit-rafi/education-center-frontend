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


            {/* Forms Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4 uppercase leading-none">
                            Download <span className="text-[#A11D1D]">Official Forms</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                            Access and download the necessary documentation for your exam registrations, cancellations, and administrative requests.
                        </p>
                    </div>
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
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#A11D1D] text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all hover:bg-[#111827] hover:shadow-lg"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
