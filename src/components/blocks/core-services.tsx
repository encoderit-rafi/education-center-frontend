"use client";
import Link from "next/link";
import {
  ClipboardList,
  CheckCircle2,
  MessageSquare,
  Lock,
  Globe,
  Users,
  Building2,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  BaseCard,
  BaseCardDescription,
  BaseCardIcon,
  BaseCardTitle,
} from "./cards/base-card";
import { useTranslations } from "next-intl";

const SERVICE_HREFS = [
  "/paid-mock-tests/ielts",
  "/test-your-english",
  "/free-consultation",
  "/exam-preparation-courses",
  "/exam-preparation-courses",
  "/exam-proctoring-services/institutions",
  "/exam-delivery/exam-provider",
  "/special-accommodation",
  "/our-venues/book-an-exam-venue",
];

const SERVICE_ICONS = [
  ClipboardList,
  CheckCircle2,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Lock,
  Globe,
  Users,
  Building2,
];

export default function CoreServices() {
  const t = useTranslations("HomePage.CoreServices");
  const services = t.raw("services") as { title: string; description: string }[];

  return (
    <section className="base-py">
      <div className="base-px section-container space-y-10">
        <div>
          <span className="section-label">{t("label")}</span>
          <h3 className="section-title">
            {t("title")} <span>{t("titleAccent")}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <Link key={i} href={SERVICE_HREFS[i]}>
                <BaseCard className="p-6">
                  <div className="flex items-start gap-4">
                    <BaseCardIcon>
                      <Icon />
                    </BaseCardIcon>
                    <div>
                      <BaseCardTitle>{service.title}</BaseCardTitle>
                      <BaseCardDescription className="mt-2">
                        {service.description}
                      </BaseCardDescription>
                    </div>
                  </div>
                </BaseCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
