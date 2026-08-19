import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardImportantInfo,
  BaseCardList,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import FreeConsultation from "../free-consultation/_components/free-consultation";
import Link from "next/link";
import api from "@/axios";
import { getTranslations } from "next-intl/server";

export default async function PaidMockTestPage() {
  const t = await getTranslations("PaidMockTestsPage");
  let mockTests = [];
  try {
    const res = await api.get("/mock-tests");
    if (res.data?.success) {
      mockTests = res.data.data.data;

    }
  } catch (error) {
    console.error("Failed to fetch paid mock tests:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="base-px base-py max-w-3xl mx-auto base-space-y">
        <h1 className="section-title text-center">
          {t("title")}<span className="highlight">{t("titleAccent")}</span>{t("titleSuffix")}
        </h1>
        <p className="section-subtitle max-w-3xl mx-auto text-center">
          {t("subtitle")}
        </p>
      </div>
      <div className="base-px base-py max-w-5xl mx-auto">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((card: any, index: number) => (
            <Link key={card.id} href={`/paid-mock-tests/${card.slug}`}>
              <BaseCard>
                <div className="flex items-center justify-between">
                  <BaseCardIcon>{index + 1}</BaseCardIcon>
                  <BaseCardArrow />
                </div>
                <div className="space-y-3">
                  <BaseCardTitle>{card.name}</BaseCardTitle>
                  <BaseCardDescription className="line-clamp-3">
                    {card.description}
                  </BaseCardDescription>
                  <BaseCardList
                    items={
                      card.details?.content
                        ?.map((c: any) => c.title)
                        .slice(0, 4) || []
                    }
                  />
                </div>
                <BaseCardImportantInfo className="mt-auto">
                  {card.details?.description}
                </BaseCardImportantInfo>
              </BaseCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
