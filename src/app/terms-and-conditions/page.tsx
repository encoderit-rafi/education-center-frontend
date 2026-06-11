import { AED } from "@/components/ui/aed";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SECTIONS = [
  { id: "intro", key: "intro" },
  { id: "changes", key: "changes" },
  { id: "operation", key: "operation" },
  { id: "payment", key: "payment" },
  { id: "registration", key: "registration" },
  { id: "material", key: "material" },
  { id: "withdrawal", key: "withdrawal" },
  { id: "process", key: "process" },
  { id: "privacy", key: "privacy" },
  { id: "copyright", key: "copyright" },
  { id: "jurisdiction", key: "jurisdiction" },
];

export default function TermsAndConditionsPage() {
  const t = useTranslations("TermsAndConditionsPage");

  const sectionTitle = (key: string) => t(`sections.${key}.title`);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
            {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            {t("description")}
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
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-6 border-b border-gray-100 pb-2">
                    {t("navTitle")}
                  </h3>
                  <nav className="flex flex-col space-y-0.5 max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide py-2">
                    {SECTIONS.map((section) => (
                      <Link
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center py-2 text-[13px] font-bold text-gray-400 hover:text-gray-900 transition-all border-l-2 border-transparent hover:border-[#A11D1D] pl-4"
                      >
                        {sectionTitle(section.key)}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="p-8 bg-gray-50 rounded-sm">
                  <h4 className="text-sm font-black text-gray-900 mb-2">
                    {t("sidebarTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {t("sidebarDescription")}
                  </p>
                  <a
                    href="mailto:info@tepth.net"
                    className="text-xs font-bold text-[#A11D1D] hover:underline"
                  >
                    info@tepth.net
                  </a>
                </div>
              </div>
            </aside>

            {/* Content Body */}
            <div className="lg:w-3/4 max-w-none">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900">
                <section id="intro" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">{t("sections.intro.title")}</h2>
                  <p>{t("sections.intro.p1")}</p>
                  <p dangerouslySetInnerHTML={{ __html: t("sections.intro.p2") }} />
                  <p>{t("sections.intro.p3")}</p>
                  <p>{t("sections.intro.p4")}</p>
                  <p>{t("sections.intro.p5")}</p>
                </section>

                <section id="changes" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">{t("sections.changes.title")}</h2>
                  <p>{t("sections.changes.p1")}</p>
                </section>

                <section id="operation" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">{t("sections.operation.title")}</h2>
                  <ul>
                    {(t.raw("sections.operation.items") as string[]).map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                  <p>{t("sections.operation.p1")}</p>
                </section>

                <section id="payment" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 text-[#A11D1D]">
                    {t("sections.payment.title")}
                  </h2>
                  <ul>
                    {(t.raw("sections.payment.items") as string[]).map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </section>

                <section id="registration" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">
                    {t("sections.registration.title")}
                  </h2>
                  <ul>
                    {(t.raw("sections.registration.items") as string[]).map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </section>

                <section id="material" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.material.title")}
                  </h2>
                  <p>{t("sections.material.p1")}</p>
                  <ul>
                    {(t.raw("sections.material.items") as string[]).map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                    <li>
                      {t("sections.material.registrationFeePrefix")}
                      <AED className="h-3 inline-block" />
                      {t("sections.material.registrationFeeSuffix")}
                    </li>
                  </ul>
                </section>

                <section id="withdrawal" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 text-[#A11D1D] font-heading">
                    {t("sections.withdrawal.title")}
                  </h2>
                  <div className="bg-gray-50 p-8 border-l-4 border-[#A11D1D] mb-8">
                    <ul className="mb-0">
                      {(
                        t.raw("sections.withdrawal.noticeItems") as {
                          strong: string;
                          text: string;
                        }[]
                      ).map((item, index) => (
                        <li key={index}>
                          <strong>{item.strong}</strong>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>{t("sections.withdrawal.p1")}</p>
                  <p>{t("sections.withdrawal.p2")}</p>
                </section>

                <section id="process" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.process.title")}
                  </h2>
                  <ol>
                    {(t.raw("sections.process.items") as string[]).map(
                      (item, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      )
                    )}
                  </ol>
                </section>

                <section id="privacy" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.privacy.title")}
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: t("sections.privacy.p1") }} />
                </section>

                <section id="copyright" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.copyright.title")}
                  </h2>
                  <p>{t("sections.copyright.p1")}</p>
                </section>

                <section id="jurisdiction" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.jurisdiction.title")}
                  </h2>
                  <p>{t("sections.jurisdiction.p1")}</p>
                </section>

                <div className="mt-32 pt-16 border-t border-gray-100 italic text-gray-400 text-sm">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
