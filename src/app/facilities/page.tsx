import { useTranslations } from "next-intl";

export default function FacilitiesPage() {
  const t = useTranslations("FacilitiesPage");

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
              <p>
                {t.rich("sections.intro.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </section>

            <section id="details" className="scroll-mt-24 mb-16">
              <ul className="list-disc pl-6 space-y-4 mb-6">
                {(
                  t.raw("sections.details.items") as {
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
          </div>
        </div>
      </section>
    </div>
  );
}
