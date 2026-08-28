import BaseHeroSection from "@/components/base-hero-section";
import {
  BaseCard,
  BaseCardArrow,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "@/components/blocks/cards/base-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ExamItems({ data }: { data: any }) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const cleanDisplayExamName = (name: string) => {
    if (!name) return "";
    const trimmed = name.trim();
    if (trimmed.toLowerCase() === "celpip general" || trimmed.toLowerCase() === "celpip-general") {
      return "CELPIP-G";
    }
    return trimmed;
  };

  const title = cleanDisplayExamName(
    data.resolvedName ||
    data.translations?.[locale]?.title ||
    data.translations?.[locale]?.name ||
    data.title ||
    data.name
  );
  const description =
    data.translations?.[locale]?.description || data.description;

  const rawEng = data.originalName || "";
  const displayEng = cleanDisplayExamName(rawEng);
  const displayTitle = isRtl
    ? `${title} ${displayEng && !title.toLowerCase().replace(/[^a-z0-9]/g, "").includes(displayEng.toLowerCase().replace(/[^a-z0-9]/g, "")) ? `(${displayEng})` : ""}`
    : title;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50">
        <div className="max-w-4xl space-y-6 base-py px-3 md:px-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary leading-[1.1] tracking-tight">
            {isRtl ? (
              displayTitle
            ) : (
              <>
                {title} <span className="italic text-primary">Exams</span>
              </>
            )}
          </h1>
          {description && <p className="text-secondary">{description}</p>}
        </div>
      </div>

      <div className="section-container base-px base-py">
        <div className="mb-14 text-center space-y-4">
          <h2 className="section-title">
            {isRtl ? (
              <>
                اختبار <span>{displayTitle.replace(/^اختبار\s+/, "")}</span> الخاص بك
              </>
            ) : (
              <>
                Choose Your <span>{title}</span> Test
              </>
            )}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {isRtl ? (
              `تم تصميم كل نوع من ${displayTitle} لغرض محدد. اختر النوع الذي يتوافق مع تأشيرتك أو هدفك الأكاديمي أو المهني.`
            ) : (
              `Each ${title} variant is designed for a specific purpose. Select the one that matches your visa, academic, or professional goal.`
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items?.map((item: any, index: number) => {
            const itemName = item.name;
            const isUkvi = (item?.name?.toLowerCase().includes("ukvi") || item?.name?.toLowerCase().includes("life skills") || item?.slug?.toLowerCase().includes("ukvi") || item?.slug?.toLowerCase().includes("life-skills"));
            const href = isUkvi ? `/exams/${item.id}` : (item?.examFormRedirectUrl || `/exams/${item.id}`);
            const isExternal = !isUkvi && !!item?.examFormRedirectUrl;
            return (
              <Link
                key={item.id}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group"
              >
                <BaseCard className="p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
                  <div className="flex items-center justify-between mb-8">
                    <BaseCardIcon>{index + 1}</BaseCardIcon>
                    <BaseCardArrow className="group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <BaseCardTitle>{itemName}</BaseCardTitle>
                  </div>
                </BaseCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
