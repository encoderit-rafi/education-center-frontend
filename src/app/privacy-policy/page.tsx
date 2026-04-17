import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
const SECTIONS = [
    { id: "intro", title: "Introduction" },
    { id: "statement", title: "Our Statement" },
    { id: "purpose", title: "Policy Purpose" },
    { id: "collection", title: "Data Collection" },
    { id: "pii", title: "PII (Identifiable Data)" },
    { id: "non-pii", title: "Non-PII (Cookies)" },
    { id: "security", title: "Security & Retention" },
    { id: "changes", title: "Changes to Policy" },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="TEPTH Privacy Center"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]",
                            "font-heading"
                        )}>
                            Privacy <br />
                            <span className="italic text-[#A11D1D]">Policy.</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                            Our commitment to demonstrating concern for maintaining your secrecy and data integrity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Sticky Sidebar */}
                        <aside className="lg:w-1/4">
                            <div className="sticky top-24 space-y-8">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-6 border-b border-gray-100 pb-2">Navigation</h3>
                                    <nav className="flex flex-col space-y-0.5 max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide py-2">
                                        {SECTIONS.map((section) => (
                                            <Link
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="group flex items-center py-2 text-[13px] font-bold text-gray-400 hover:text-gray-900 transition-all border-l-2 border-transparent hover:border-[#A11D1D] pl-4"
                                            >
                                                {section.title}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-8 bg-gray-50 rounded-sm">
                                    <h4 className="text-sm font-black text-gray-900 mb-2">Privacy Question?</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                        Contact our data protection team directly for any inquiries.
                                    </p>
                                    <a href="mailto:info@tepth.net" className="text-xs font-bold text-[#A11D1D] hover:underline">
                                        info@tepth.net
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Content Body */}
                        <div className="lg:w-3/4 max-w-none">
                            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900">
                                
                                <section id="intro" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Introduction</h2>
                                    <p>
                                        A privacy policy is a document that tells our website’s users what will be done with their personal information, how this information will be collected, and how this gathered data will be used.
                                    </p>
                                    <p>
                                        While storing, managing, and using all information available on the site’s database, <strong>all legal requirements are fulfilled</strong> to protect client confidentiality. All possible security measures are embedded when site owners deal with visitors’ personal information.
                                    </p>
                                </section>

                                <section id="statement" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Statement</h2>
                                    <div className="bg-gray-50 p-8 border-l-4 border-[#A11D1D] mb-8 italic">
                                        "TEPTH has created this privacy policy with the aim of demonstrating our concern and commitment towards maintaining customer secrecy."
                                    </div>
                                    <p>
                                        Our privacy policy holds great importance for us. It communicates our information collection process and dissemination practices for gathered information from our visitors and customers.
                                    </p>
                                </section>

                                <section id="purpose" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Purpose</h2>
                                    <p>
                                        This policy explains how we tackle and share (if needed) the information you share with us. Website users are informed that their information will be used for two primary reasons:
                                    </p>
                                    <ul>
                                        <li>Disclosing personal information to third parties (legal affiliates, business partners, etc.)</li>
                                        <li>Making use of gathered information for particular purposes (newsletters, promotional emails, etc.)</li>
                                    </ul>
                                </section>

                                <section id="collection" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 text-[#A11D1D]">Collected Information</h2>
                                    <p>
                                        TEPTH requires users who register for our services to furnish contact information including name, address, phone number, e-mail contact, billing information, and credit card numbers.
                                    </p>
                                </section>

                                <section id="pii" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Personally Identifiable Information (PII)</h2>
                                    <p>
                                        PII collected by TEPTH will solely belong to the customers and will be used exclusively according to the legitimate international privacy standards for both offline and online data.
                                    </p>
                                    <div className="bg-[#111827] text-white p-8 rounded-sm mb-8">
                                        <h4 className="text-white text-lg font-black mb-4">How we use PII:</h4>
                                        <ul className="text-gray-400 space-y-2 mb-0">
                                            <li>To set up and improve our services for individuals and organizations.</li>
                                            <li>To contact customers regarding their specific interests in TEPTH.</li>
                                            <li>To facilitate promotional campaigns via authorized partners.</li>
                                            <li>To send email newsletters (only if an email address is provided).</li>
                                        </ul>
                                    </div>
                                    <p>
                                        We will not distribute your personal information haphazardly. If we share your information with third parties, we will ask for your approval first.
                                    </p>
                                </section>

                                <section id="non-pii" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Information that is not PII</h2>
                                    <p>
                                        We may also collect non-PII such as Internet addresses, navigational data, and cookies. This information is logged to help govern our site and diagnose technical problems.
                                    </p>
                                    <h4 className="text-2xl font-black mt-8 mb-4">Cookies utilization:</h4>
                                    <p>
                                        Today, cookies utilization is the industry standard. standing alone, these cannot identify you personally. We recommend letting your web browser accept cookies to access a fully functional website.
                                    </p>
                                </section>

                                <section id="security" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 text-[#A11D1D] font-heading">Security and Retention</h2>
                                    <p>
                                        TEPTH ensures that user-provided personal information is safeguarded against potentially illegal access, disclosure, or misuse.
                                    </p>
                                    <ul>
                                        <li><strong>Secured Servers:</strong> Personal information is stored in a secured server environment using firewalls.</li>
                                        <li><strong>Authorized Access:</strong> Only employees with signed confidentiality agreements have authorized access.</li>
                                        <li><strong>Data Destruction:</strong> TEPTH destroys information that is no longer required for its intended reason.</li>
                                    </ul>
                                </section>

                                <section id="changes" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Changes to the Policy</h2>
                                    <p>
                                        TEPTH authorities can make changes to this privacy policy anytime. We may send you an email advising of modifications, or we may post them on the website.
                                    </p>
                                </section>

                                <div className="mt-32 pt-16 border-t border-gray-100 italic text-gray-400 text-sm">
                                    Last Updated: April 2026. TEPTH makes efforts to ensure this policy is aligned with national and international laws.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
