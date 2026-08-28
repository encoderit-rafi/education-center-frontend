import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte/pte-home-a2-registration/form-pte-home-a2-registration";
import FormPTEHomeB1Registration from "@/components/blocks/forms/pte/pte-home-b1-registration/form-pte-home-b1-registration";
import FormPTEAcademicUkviRegistration from "@/components/blocks/forms/pte/pte-academic-ukvi-registration/form-pte-academic-ukvi-registration";
import FormSELTA1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a1/form-selt-a1-registration";
import FormSELTA2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a2/form-selt-a2-registration";
import FormSELTB1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b1/form-selt-b1-registration";
import FormSELTB1RWRegistration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b1-r-w/form-selt-b1-r-w-registration";
import FormSELTB2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b2/form-selt-b2-registration";
import FormSELTC1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-c1/form-selt-c1-registration";
import FormSELTC2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-c2/form-selt-c2-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl/toefl-ibt-exam-registration/form-toefl-ibt-registration";
import { EXAM_DETAILE_DATA } from "@/data";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import BookExamItems from "../_components/book-exam-items";
import BookExamOverviewWrapper from "../_components/book-exam-overview-wrapper";

import api from "@/axios";
import CelpipInfo from "@/components/blocks/celpip-info";
import CaelInfo from "@/components/blocks/cael-info";

const SLUG_TO_STATIC_ID: Record<string, string> = {
  "ukvi-speaking-and-listening-level-a1": "selt-a1",
  "ukvi-speaking-and-listening-at-level-a1": "selt-a1",
  "ukvi-speaking-and-listening-level-a2": "selt-a2",
  "ukvi-speaking-and-listening-at-level-a2": "selt-a2",
  "ukvi-speaking-and-listening-level-b1": "selt-b1",
  "ukvi-speaking-and-listening-at-level-b1": "selt-b1",
  "ukvi-speaking-listening-reading-and-writing-b1": "selt-b1-r-w",
  "ukvi-speaking-listening-reading-and-writing-at-level-b1": "selt-b1-r-w",
  "ukvi-speaking-listening-reading-and-writing-b2": "selt-b2",
  "ukvi-speaking-listening-reading-and-writing-at-level-b2": "selt-b2",
  "ukvi-speaking-and-listening-at-level-b2": "selt-b2",
  "ukvi-speaking-listening-reading-and-writing-c1": "selt-c1",
  "ukvi-speaking-listening-reading-and-writing-at-level-c1": "selt-c1",
  "ukvi-speaking-and-listening-at-level-c1": "selt-c1",
  "ukvi-speaking-listening-reading-and-writing-c2": "selt-c2",
  "ukvi-speaking-listening-reading-and-writing-at-level-c2": "selt-c2",
  "ukvi-speaking-and-listening-at-level-c2": "selt-c2",
  "skills-for-english-selt": "selt",
  "ielts-for-ukvi-life-skills-a2-uk-only": "ielts-for-ukvi-life-skills-a2",
};

/** Build a lightweight exam-info object for the overview wrapper by merging
 *  the API response with the static EXAM_DETAILE_DATA fallback and localized strings. */
function buildExamInfo(exam: any, t: any, locale: string) {
  const targetId = SLUG_TO_STATIC_ID[exam.slug] || exam.slug || exam.id;
  const staticMeta = EXAM_DETAILE_DATA.find(
    (item: any) =>
      item.id === targetId ||
      item.id === exam.id ||
      item.id === exam.slug ||
      item.slug === exam.slug ||
      item.name?.toLowerCase() === exam.name?.toLowerCase(),
  ) as any;

  const examId = staticMeta?.id || exam.slug || exam.id;
  const translationKey = examId === "skills-for-english-selt" ? "selt" : examId;
  let localizedMeta: any = {};
  if (translationKey) {
    try {
      // Guard with has() to avoid MISSING_MESSAGE throw when key isn't in the namespace
      if (t.has(translationKey)) {
        localizedMeta = t.raw(translationKey) || {};
      }
    } catch (e) {
      // Graceful fallback
    }
  }

  const isAr = locale === "ar";

  const stats =
    (isAr && localizedMeta.stats?.length ? localizedMeta.stats : null) ||
    (exam.stats?.length ? exam.stats : null) ||
    staticMeta?.stats ||
    [];

  let sections = (
    (isAr && localizedMeta.sections?.length ? localizedMeta.sections : null) ||
    (exam.sections?.length ? exam.sections : null) ||
    staticMeta?.sections ||
    []
  ).map((section: any, idx: number) => {
    const staticSection = staticMeta?.sections?.[idx] || {};
    return {
      ...staticSection,
      ...section,
    };
  });

  if (exam.slug === "pte-academic" || exam.slug === "pte-core") {
    sections = [];
  }

  const whoShouldTake =
    (isAr && localizedMeta.whoShouldTake?.length ? localizedMeta.whoShouldTake : null) ||
    (exam.whoShouldTake?.length ? exam.whoShouldTake : null) ||
    staticMeta?.whoShouldTake ||
    [];

  const acceptedFor =
    (isAr && localizedMeta.acceptedFor?.length ? localizedMeta.acceptedFor : null) ||
    (exam.acceptedFor?.length ? exam.acceptedFor : null) ||
    staticMeta?.acceptedFor ||
    [];

  const faqs =
    (isAr && localizedMeta.faqs?.length ? localizedMeta.faqs : null) ||
    (exam.faqs?.length ? exam.faqs : null) ||
    staticMeta?.faqs ||
    [];

  const description =
    (isAr && localizedMeta.description) ||
    exam?.translations?.[locale]?.description ||
    exam.description ||
    staticMeta?.description ||
    "";

  const subtitle =
    (isAr && localizedMeta.subtitle) ||
    exam?.translations?.[locale]?.subtitle ||
    exam.subtitle ||
    staticMeta?.subtitle ||
    "";

  const overview =
    (isAr && localizedMeta.overview) ||
    exam?.translations?.[locale]?.overview ||
    (exam?.overview && exam.overview.length > 150 ? exam.overview : null) ||
    staticMeta?.overview ||
    exam?.overview ||
    description;

  const name =
    (isAr && localizedMeta.name) ||
    exam?.translations?.[locale]?.name ||
    exam?.translations?.[locale]?.title ||
    exam.name ||
    staticMeta?.name ||
    "";

  return {
    name,
    englishName: exam.name || staticMeta?.name || "",
    slug: exam.slug || staticMeta?.slug || "",
    description,
    overview,
    subtitle,
    stats,
    sections,
    whoShouldTake,
    acceptedFor,
    faqs,
  };
}

export default async function BookExamsId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawSlug } = await params;
  let slug = rawSlug === "toefl" ? "toefl-ibt" : rawSlug;

  // Map old/alternative/legacy slugs to new slugs to prevent 404 for existing links
  const SLUG_MAP: Record<string, string> = {
    "ukvi-speaking-and-listening-at-level-a1": "ukvi-speaking-and-listening-level-a1",
    "ukvi-speaking-and-listening-at-level-a2": "ukvi-speaking-and-listening-level-a2",
    "ukvi-speaking-and-listening-at-level-b1": "ukvi-speaking-and-listening-level-b1",
    "ukvi-speaking-listening-reading-and-writing-at-level-b1": "ukvi-speaking-listening-reading-and-writing-b1",
    "ukvi-speaking-listening-reading-and-writing-at-level-b1-1": "ukvi-speaking-listening-reading-and-writing-b1",
    "ukvi-speaking-listening-reading-and-writing-at-level-b2": "ukvi-speaking-listening-reading-and-writing-b2",
    "ukvi-speaking-and-listening-at-level-b2": "ukvi-speaking-listening-reading-and-writing-b2",
    "ukvi-speaking-listening-reading-and-writing-at-level-c1": "ukvi-speaking-listening-reading-and-writing-c1",
    "ukvi-speaking-and-listening-at-level-c1": "ukvi-speaking-listening-reading-and-writing-c1",
    "ukvi-speaking-listening-reading-and-writing-at-level-c2": "ukvi-speaking-listening-reading-and-writing-c2",
    "ukvi-speaking-and-listening-at-level-c2": "ukvi-speaking-listening-reading-and-writing-c2",
    "selt-a1": "ukvi-speaking-and-listening-level-a1",
    "selt-a2": "ukvi-speaking-and-listening-level-a2",
    "selt-b1": "ukvi-speaking-and-listening-level-b1",
    "selt-b1-r-w": "ukvi-speaking-listening-reading-and-writing-b1",
    "selt-b2": "ukvi-speaking-listening-reading-and-writing-b2",
    "selt-c1": "ukvi-speaking-listening-reading-and-writing-c1",
    "selt-c2": "ukvi-speaking-listening-reading-and-writing-c2",
  };

  if (SLUG_MAP[slug]) {
    slug = SLUG_MAP[slug];
  }

  const locale = await getLocale();
  const t = await getTranslations("ExamDetailsPage");


  let exam: any = null;
  let childExams: any[] = [];

  try {
    // 1. Try to fetch the exam by slug directly
    const response = await api.get(`/exams/${slug}`);
    if (response.data?.success && response.data?.data) {
      exam = response.data.data;
    }
  } catch (error: any) {
    // Only log unexpected errors; 404 is expected when the slug is a UUID
    if (error?.response?.status !== 404) {
      console.error("Error fetching exam in BookExamsId:", error);
    }
  }

  // 2. Fetch all exams to resolve UUID or find children
  try {
    const listResponse = await api.get("/exams", {
      params: { limit: 100, sort_order: "asc", sort_by: "orderIndex" },
    });
    const allExams = listResponse.data?.data?.data || [];

    if (!exam) {
      exam = allExams.find((e: any) => e.id === slug || e.slug === slug);
    }

    if (exam) {
      // Find all child exams belonging to this exam and sort them by orderIndex ascending
      childExams = allExams
        .filter((e: any) => e.parentId === exam.id)
        .sort((a: any, b: any) => {
          const aVal =
            a.orderIndex !== undefined && a.orderIndex !== null
              ? Number(a.orderIndex)
              : Infinity;
          const bVal =
            b.orderIndex !== undefined && b.orderIndex !== null
              ? Number(b.orderIndex)
              : Infinity;
          return aVal - bVal;
        });
    }
  } catch (error) {
    console.error("Error fetching all exams list in BookExamsId:", error);
  }

  if (!exam) {
    notFound();
  }

  // Apply locale-aware description
  const translatedDescription = exam?.translations?.[locale]?.description;
  if (translatedDescription) {
    exam = { ...exam, description: translatedDescription };
  }

  // 3. Determine if it is a parent group (has child items or is labeled group/item) or a detail page
  const hasGroupType = exam.examType?.some(
    (et: any) => et.name === "group" || et.name === "item",
  );
  const isGroup = hasGroupType && childExams.length > 0;

  // Build the exam info object for the overview wrapper using translations and fallback
  const examInfoBase = buildExamInfo(exam, t, locale);
  const examInfo = { ...examInfoBase, resolvedName: examInfoBase.name };

  if (isGroup) {
    const examWithItems = {
      ...exam,
      type: "items",
      items: childExams,
      resolvedName: examInfo.name,
    };
    return <BookExamItems data={examWithItems} />;
  }

  // Otherwise, it is a specific exam. Render the appropriate form based on slug or database UUID
  switch (exam.slug || exam.id) {
    // case EXAM_IDS_DATA.ielts_ukvi_academic.id:
    //   return <FormIELTSUKVIAcademicRegistration />;
    // case EXAM_IDS_DATA.ielts_ukvi_general.id:
    //   return <FormIELTSUKVIGeneralRegistration />;
    // case EXAM_IDS_DATA.ielts_life_skills_a1.id:
    //   return <FormIELTSLifeSkillsA1Registration />;
    // case EXAM_IDS_DATA.ielts_life_skills_a2.id:
    //   return <FormIELTSLifeSkillsA2Registration />;
    // case EXAM_IDS_DATA.ielts_life_skills_b1.id:
    //   return <FormIELTSLifeSkillsB1Registration />;
    case "ielts-academic":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormIELTSAcademicRegistration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "ielts-general":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <div>
            <h2 className="text-2xl font-bold my-8 text-center">
              {locale === "ar" ? "التسجيل في اختبار آيلتس العام" : "IELTS General Registration"}
            </h2>
            <FormIELTSGeneralRegistration examId={exam.id} />
          </div>
        </BookExamOverviewWrapper>
      );
    case "toefl-ibt":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <div>
            <FormTOEFLIBTRegistration examId={exam.id} />
          </div>
        </BookExamOverviewWrapper>
      );
    case "celpip":
    case "celpip-general":
    case "celpip-general-ls":
      return (
        <div className="min-h-[60vh] p-2 flex items-center justify-center bg-white">
          <CelpipInfo />
        </div>
      );
    case "cael":
      return (
        <div className="min-h-[60vh] p-2 flex items-center justify-center bg-white">
          <CaelInfo />
        </div>
      );
    case "selt-a1":
    case "ukvi-speaking-and-listening-at-level-a1":
    case "ukvi-speaking-and-listening-level-a1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTA1Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-a2":
    case "ukvi-speaking-and-listening-at-level-a2":
    case "ukvi-speaking-and-listening-level-a2":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTA2Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-b1":
    case "ukvi-speaking-and-listening-at-level-b1":
    case "ukvi-speaking-and-listening-level-b1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTB1Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-b1-r-w":
    case "ukvi-speaking-and-listening-at-level-b1-r-w":
    case "ukvi-speaking-listening-reading-and-writing-at-level-b1":
    case "ukvi-speaking-listening-reading-and-writing-at-level-b1-1":
    case "ukvi-speaking-listening-reading-and-writing-b1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTB1RWRegistration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-b2":
    case "ukvi-speaking-listening-reading-and-writing-at-level-b2":
    case "ukvi-speaking-and-listening-at-level-b2":
    case "ukvi-speaking-listening-reading-and-writing-b2":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTB2Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-c1":
    case "ukvi-speaking-listening-reading-and-writing-at-level-c1":
    case "ukvi-speaking-and-listening-at-level-c1":
    case "ukvi-speaking-listening-reading-and-writing-c1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTC1Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "selt-c2":
    case "ukvi-speaking-listening-reading-and-writing-at-level-c2":
    case "ukvi-speaking-and-listening-at-level-c2":
    case "ukvi-speaking-listening-reading-and-writing-c2":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormSELTC2Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );

    case "pte-academic":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTEAcademicRegistration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "pte-core":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTECoreRegistration examId={exam.id} />
        </BookExamOverviewWrapper>
      );

    case "pte-home-a1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTEHomeA1Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "pte-home-a2":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTEHomeA2Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "pte-home-b1":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTEHomeB1Registration examId={exam.id} />
        </BookExamOverviewWrapper>
      );
    case "pte-ukvi":
    case "pte-academic-ukvi":
      return (
        <BookExamOverviewWrapper exam={examInfo}>
          <FormPTEAcademicUkviRegistration examId={exam.id} />
        </BookExamOverviewWrapper>
      );

    default:
      return notFound();
  }
}
