import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { useTranslations } from "next-intl";

export default function FAQPage() {
  const t = useTranslations("FAQsPage");
  const faqs = t.raw("faqs") as { question: string; answer: string }[];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-3">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-7">
            {t("description")}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          {faqs.map((faq, index) => (
            <BaseCard
              key={index}
              className="flex flex-row items-start gap-6 p-6"
            >
              <BaseCardIcon className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-100 transition-colors">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </BaseCardIcon>
              <div className="space-y-2">
                <BaseCardTitle>{faq.question}</BaseCardTitle>
                <BaseCardDescription>{faq.answer}</BaseCardDescription>
              </div>
            </BaseCard>
          ))}
        </div>
      </section>
    </div>
  );
}
