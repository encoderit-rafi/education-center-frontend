import Link from "next/link";

const SECTIONS = [
    { id: "intro", title: "Introduction" },
    { id: "changes", title: "Changes to Terms" },
    { id: "operation", title: "Website Operation" },
    { id: "payment", title: "Payment Terms" },
    { id: "registration", title: "Registration & Rescheduling" },
    { id: "material", title: "Preparation Material" },
    { id: "withdrawal", title: "Withdrawal & Refund" },
    { id: "process", title: "Refund Process" },
    { id: "privacy", title: "Privacy Conditions" },
    { id: "copyright", title: "Copyright & Trademarks" },
    { id: "jurisdiction", title: "Jurisdiction" },
];

export default function TermsAndConditionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <section className="pt-24 pb-12 bg-white">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
                        TERMS & <span className="text-[#A11D1D]">CONDITIONS</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                        Please read our terms carefully to understand your rights and responsibilities when using TEPTH services.
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="py-20">
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
                                    <h4 className="text-sm font-black text-gray-900 mb-2">Need help?</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                        If you have any questions regarding these terms, contact us.
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
                                    <p>Welcome to TEPTH Website.</p>
                                    <p>
                                        This website is owned and operated by <strong>The Exam Preparation & Testing House FZCO</strong>, a company licensed by Dubai Silicon Oasis Authority whose registered office is at Suite 703, Apricot Tower, Dubai Silicon Oasis, Dubai, United Arab Emirates.
                                    </p>
                                    <p>
                                        Our Terms and Conditions apply to your access to and use of our Website "https://www.tepth.net/". Please read these Terms and Conditions carefully.
                                    </p>
                                    <p>
                                        By continuing to access and use our website, you are deemed to have understood and agreed to all the terms & conditions contained here in. If you do not agree to these Terms & Conditions, you may not use this website.
                                    </p>
                                    <p>
                                        For the purposes of these Terms and Conditions, "this Website" includes means all the webpages related to the tepth.net website excluding any links to third party sites.
                                    </p>
                                </section>

                                <section id="changes" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Changes to Terms and Conditions</h2>
                                    <p>
                                        TEPTH reserves every right to change the terms and conditions or modify this agreement anytime as necessary without any prior notice. Such amended or modified Terms and Conditions shall be effective upon publication on this Website. Therefore, it is recommended to keep checking if there is any addition or change made to TEPTH’s terms and conditions agreement. Users are bound to follow this agreement.
                                    </p>
                                </section>

                                <section id="operation" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Changes to Operation of Website</h2>
                                    <ul>
                                        <li>TEPTH may change the format and content of this website at any time without a prior notice.</li>
                                        <li>TEPTH may suspend the operation of this website for update, support or maintenance work, in order to update the content, function or for any other reason.</li>
                                        <li>TEPTH reserves the right to terminate access to this website at any time and without any prior notice.</li>
                                    </ul>
                                    <p>The use of Tepth.net is subject to the below mentioned Terms of Use:</p>
                                </section>

                                <section id="payment" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 text-[#A11D1D]">Payment Terms</h2>
                                    <ul>
                                        <li>TEPTH accepts the payments in U.A.E currency through Visa, MasterCard and PayPal accounts.</li>
                                        <li>If you make a payment for services on our website, the details you are asked to submit will be provided directly to our payment provider via secured connection.</li>
                                        <li>The payments are taken securely on the payment page of our card processor. No card details are stored by the website.</li>
                                        <li>When registering with us, you are liable to provide accurate personal information to avoid future problems.</li>
                                        <li>The customer using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website.</li>
                                        <li>The country of merchant domicile is UAE.</li>
                                        <li>https://www.tepth.net/ will NOT deal or provide any services or products to any of OFAC sanctions countries in accordance with the law of UAE.</li>
                                        <li>Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of UAE.</li>
                                    </ul>
                                </section>

                                <section id="registration" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8">Registration & Rescheduling</h2>
                                    <ul>
                                        <li>Students who miss a scheduled group lesson or session have no privilege to reschedule the missed lesson and it will be considered as availed.</li>
                                        <li>Rescheduling group lessons may only be possible with the consensus of all students of the same class and with a notice period of 48-hours.</li>
                                        <li>TEPTH reserves the right to cancel or reschedule any session or course due to unforeseen circumstances or exam delivery.</li>
                                        <li>Students must attend at least 75% of the course in order to receive a certificate of attendance.</li>
                                        <li>For one-to-one tutoring, students should notify the center at least 48 hours prior to cancellation or rescheduling. Otherwise it will be considered availed. No show up sessions/classes will be treated as taken and no sessions will be made up.</li>
                                    </ul>
                                </section>

                                <section id="material" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Preparation Material & Books</h2>
                                    <p>Practice materials are included in private and semi-private classroom-based courses but not group or online courses.</p>
                                    <ul>
                                        <li>Practice tests are non-refundable once purchased.</li>
                                        <li>Software language courses and practice tests cannot be exchanged or returned once a purchase order has been placed.</li>
                                        <li>Registration fee of AED 100 is included in the course fee.</li>
                                    </ul>
                                </section>

                                <section id="withdrawal" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 text-[#A11D1D] font-heading">Withdrawal, Cancellation & Refund</h2>
                                    <div className="bg-gray-50 p-8 border-l-4 border-[#A11D1D] mb-8">
                                        <ul className="mb-0">
                                            <li><strong>10+ days notice:</strong> Full refund of course fees.</li>
                                            <li><strong>5-10 days notice:</strong> 50% refund of course fees.</li>
                                            <li><strong>Less than 5 days notice:</strong> No refund issued.</li>
                                        </ul>
                                    </div>
                                    <p>If for any reason TEPTH cancels a course, all course fees, including registration fee will be refunded in full.</p>
                                    <p>Refunds are made in U.A.E Dirham currency and, therefore, the final amount that you may receive will depend on the foreign exchange rates at the time the refund is processed.</p>
                                </section>

                                <section id="process" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Refund Process</h2>
                                    <ol>
                                        <li>You must apply by completing a signed, type-written TEPTH official Withdrawal/Refund Request Form.</li>
                                        <li>The form is available for download on our website or at the center.</li>
                                        <li>Submit via email to <strong>info@tepth.net</strong>.</li>
                                        <li>Refunds are processed within six (6) weeks of receipt.</li>
                                    </ol>
                                </section>

                                <section id="privacy" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Privacy Conditions</h2>
                                    <p>All credit/debit cards details and personally identifiable information will <strong>NOT</strong> be stored, sold, shared, rented or leased to any third parties.</p>
                                </section>

                                <section id="copyright" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Copyright & Trade-marks</h2>
                                    <p>The copyright for all the content and images on this website is held by TEPTH. You may not use these trade-marks in any form for any purpose without written consent of the trade-mark owner.</p>
                                </section>

                                <section id="jurisdiction" className="scroll-mt-24 mb-16">
                                    <h2 className="text-4xl mb-8 font-heading">Jurisdiction</h2>
                                    <p>These Terms and Conditions are governed by and to be interpreted according to the laws of the Emirate of Dubai, United Arab Emirates. Dubai courts will have exclusive jurisdiction over any dispute.</p>
                                </section>

                                <div className="mt-32 pt-16 border-t border-gray-100 italic text-gray-400 text-sm">
                                    Last Updated: April 2026. TEPTH Reserves the right to update these terms at any time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
