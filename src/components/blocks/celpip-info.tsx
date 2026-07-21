"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CelpipInfo() {
  const t = useTranslations("TestDatesPage");
  return (
    <div>
      <h2 className="text-4xl font-semibold text-primary mb-4">{t("celpipTitle")}</h2>
      <div className="bg-primary/5 border border-primary/10 rounded-md p-6 max-w-2xl">
        <div className="space-y-3">
          <p className="text-sm text-justify">
            {t("celpipDesc")}
          </p>
          <div className="bg-white/50 rounded-md p-3 border border-primary/10">
            <p className="text-base font-bold text-primary">
              {t("celpipNoticeTitle")}
            </p>
            <p className="text-sm mt-1">
              {t("celpipNoticeText")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <Link
              href="https://www.celpip.ca/centre/tepth/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold text-xs capitalize rounded-md hover:bg-secondary transition-colors"
            >
              {t("bookNow")}
            </Link>
            <div className="text-[12px]">
              {t("questionsContact")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
