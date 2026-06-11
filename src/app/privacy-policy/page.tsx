import Link from "next/link";
import { useTranslations } from "next-intl";

const SECTIONS = [
  { id: "intro", key: "intro" },
  { id: "statement", key: "statement" },
  { id: "purpose", key: "purpose" },
  { id: "collection", key: "collection" },
  { id: "pii", key: "pii" },
  { id: "non-pii", key: "nonPii" },
  { id: "security", key: "security" },
  { id: "changes", key: "changes" },
];

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Content Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4 uppercase leading-none">
              {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              {t("description")}
            </p>
          </div>
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
                        {t(`sections.${section.key}.title`)}
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
                  <p>
                    {t.rich("sections.intro.p2", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                </section>

                <section id="statement" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">
                    {t("sections.statement.title")}
                  </h2>
                  <div className="bg-gray-50 p-8 border-l-4 border-[#A11D1D] mb-8 italic">
                    &quot;{t("sections.statement.quote")}&quot;
                  </div>
                  <p>{t("sections.statement.p1")}</p>
                </section>

                <section id="purpose" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">{t("sections.purpose.title")}</h2>
                  <p>{t("sections.purpose.p1")}</p>
                  <ul>
                    {(t.raw("sections.purpose.items") as string[]).map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </section>

                <section id="collection" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 text-[#A11D1D]">
                    {t("sections.collection.title")}
                  </h2>
                  <p>{t("sections.collection.p1")}</p>
                </section>

                <section id="pii" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8">{t("sections.pii.title")}</h2>
                  <p>{t("sections.pii.p1")}</p>
                  <div className="bg-[#111827] text-white p-8 rounded-sm mb-8">
                    <h4 className="text-white text-lg font-black mb-4">
                      {t("sections.pii.useTitle")}
                    </h4>
                    <ul className="text-gray-400 space-y-2 mb-0">
                      {(t.raw("sections.pii.items") as string[]).map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <p>{t("sections.pii.p2")}</p>
                </section>

                <section id="non-pii" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.nonPii.title")}
                  </h2>
                  <p>{t("sections.nonPii.p1")}</p>
                  <h4 className="text-2xl font-black mt-8 mb-4">
                    {t("sections.nonPii.cookiesTitle")}
                  </h4>
                  <p>{t("sections.nonPii.p2")}</p>
                </section>

                <section id="security" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 text-[#A11D1D] font-heading">
                    {t("sections.security.title")}
                  </h2>
                  <p>{t("sections.security.p1")}</p>
                  <ul>
                    {(
                      t.raw("sections.security.items") as {
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
                </section>

                <section id="changes" className="scroll-mt-24 mb-16">
                  <h2 className="text-4xl mb-8 font-heading">
                    {t("sections.changes.title")}
                  </h2>
                  <p>{t("sections.changes.p1")}</p>
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
