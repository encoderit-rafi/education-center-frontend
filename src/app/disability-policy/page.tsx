import {
    Accessibility,
    BrainCircuit,
    Speech,
    Users,
    Wrench,
    ShieldAlert,
    GraduationCap
} from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [
    <Users className="w-5 h-5" key="users" />,
    <GraduationCap className="w-5 h-5" key="grad" />,
    <Speech className="w-5 h-5" key="speech" />,
    <BrainCircuit className="w-5 h-5" key="brain" />,
    <Accessibility className="w-5 h-5" key="access" />,
    <Wrench className="w-5 h-5" key="wrench" />
];

export default function DisabilityPolicyPage() {
    const t = useTranslations("DisabilityPolicyPage");
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Intro Statement Section */}
            <section className="py-24 border-b border-gray-100">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
                            {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
                        </h1>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-8">{t("commitment")}</h2>
                        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-8">
                            {t("quote")}
                        </p>
                        <div className="w-20 h-1 bg-[#A11D1D] mx-auto" />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Scope & Services */}
                        <div className="lg:col-span-7 space-y-16">
                            <div className="prose prose-slate prose-lg max-w-none">
                                <h3 className="text-3xl font-black text-gray-900 font-heading tracking-tight mb-6">{t("scopeTitle")}</h3>
                                <p>
                                    {t("scopeP1")}
                                </p>
                                <p>
                                    {t("scopeP2")}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-12 rounded-sm border border-gray-100">
                                <h3 className="text-2xl font-black text-gray-900 font-heading mb-8">{t("supportServicesTitle")}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {t.raw("services").map((text: string, index: number) => (
                                        <div key={index} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#A11D1D] group-hover:text-white transition-all shadow-sm">
                                                {ICONS[index]}
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-8 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 italic leading-relaxed">
                                        {t("supportFooter")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Criteria & Security */}
                        <aside className="lg:col-span-5 space-y-8">
                            <div className="bg-[#111827] text-white p-12 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A11D1D] opacity-10 blur-3xl -mr-16 -mt-16" />
                                <h3 className="text-2xl font-black mb-8 font-heading tracking-tight">{t("criteriaTitle")}</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    {t("criteriaDesc")}
                                </p>
                                <ul className="space-y-4">
                                    {t.raw("criteria").map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                            <span className="text-[#A11D1D] font-black mt-0.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border border-red-100 bg-red-50/30 p-8 rounded-sm">
                                <div className="flex items-center gap-3 mb-4 text-[#A11D1D]">
                                    <ShieldAlert className="w-6 h-6" />
                                    <h4 className="font-black uppercase tracking-widest text-xs">{t("antiDiscriminationTitle")}</h4>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                    {t("antiDiscriminationDesc")}
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Action Plan Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading tracking-tighter mb-4">{t("actionPlanTitle")}</h2>
                        <p className="text-gray-500 max-w-2xl">{t("actionPlanDesc")}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.raw("actionPlans").map((plan: string, index: number) => (
                            <div key={index} className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-100 hover:border-[#A11D1D] transition-all group">
                                <span className="text-4xl font-black text-gray-100 group-hover:text-[#A11D1D]/10 transition-colors block mb-4">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-sm font-bold text-gray-900 leading-relaxed uppercase tracking-tight">
                                    {plan}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container px-6 mx-auto text-center">
                    <p className="text-gray-400 mb-6">{t("contactPrompt")}</p>
                    <a
                        href="mailto:info@tepth.org"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#111827] text-white font-black text-xs uppercase tracking-[0.2em] rounded-none hover:bg-[#A11D1D] transition-all"
                    >
                        {t("contactBtn")}
                    </a>
                </div>
            </section>
        </div>
    );
}
