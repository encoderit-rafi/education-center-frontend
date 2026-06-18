import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Content Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24 max-w-6xl">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 uppercase leading-none">
              {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900">
            <section id="intro" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">{t("sections.intro.title")}</h2>
              <p>{t("sections.intro.p1")}</p>
            </section>

            <section id="purpose" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">{t("sections.purpose.title")}</h2>
              <p>{t("sections.purpose.p1")}</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {(t.raw("sections.purpose.items") as string[]).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>

            <section id="collection" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">
                {t("sections.collection.title")}
              </h2>
              <p>{t("sections.collection.p1")}</p>
            </section>

            <section id="pii" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">{t("sections.pii.title")}</h2>
              <p>{t("sections.pii.p1")}</p>
              <ul className="list-disc pl-6 space-y-4 mb-6">
                <li>
                  <strong>{t("sections.pii.accuracyTitle")}</strong>{" "}
                  {t("sections.pii.accuracyText")}
                </li>
                <li className="list-none -ml-6">
                  <strong className="block mb-2">{t("sections.pii.useTitle")}</strong>
                  <ul className="list-[circle] pl-6 space-y-2">
                    {(t.raw("sections.pii.useItems") as string[]).map(
                      (item, index) => (
                        <li key={index}>
                          {t.rich(`sections.pii.useItems.${index}`, {
                            strong: (chunks) => <strong>{chunks}</strong>,
                          })}
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </section>

            <section id="non-pii" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">
                {t("sections.nonPii.title")}
              </h2>
              <p>{t("sections.nonPii.p1")}</p>
              <ul className="list-disc pl-6 space-y-4 mb-6">
                <li>
                  <strong>{t("sections.nonPii.cookiesTitle")}</strong>{" "}
                  {t("sections.nonPii.cookiesText")}
                </li>
              </ul>
            </section>

            <section id="security" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">
                {t("sections.security.title")}
              </h2>
              <p>{t("sections.security.p1")}</p>
              <ul className="list-disc pl-6 space-y-4 mb-6">
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

            <section id="updates" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">
                {t("sections.updates.title")}
              </h2>
              <p>
                {t.rich("sections.updates.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </section>

            <section id="compliance" className="scroll-mt-24 mb-16">
              <h2 className="text-4xl mb-8">
                {t("sections.compliance.title")}
              </h2>
              <p>
                {t.rich("sections.compliance.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </section>

            <div className="mt-32 pt-16 border-t border-gray-100 italic text-gray-400 text-sm">
              {t("lastUpdated")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
