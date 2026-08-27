import { notFound } from "next/navigation";
import ExamItems from "../_components/exam-items";
import ExamDetails from "../_components/exam-details";
import api from "@/axios";
import { getLocale, getTranslations } from "next-intl/server";
import { EXAM_DETAILE_DATA } from "@/data";

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
};

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawSlug } = await params;
  let slug = rawSlug;

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
  let isRateLimited = false;

  try {
    // 1. Try to fetch exam by slug/id directly
    const response = await api.get(`/exams/${slug}`);
    if (response.data?.success && response.data?.data) {
      exam = response.data.data;
    }
  } catch (error: any) {
    if (error?.response?.status === 429) {
      isRateLimited = true;
    }
    // Only log unexpected errors; 404 is expected when the slug is a UUID
    if (error?.response?.status !== 404) {
      console.error("Error fetching exam by slug:", error);
    }
  }

  // 2. Fetch all exams to find children and resolve by ID if needed (e.g. if the route is a UUID)
  try {
    const listResponse = await api.get("/exams", {
      params: { limit: 100, sort_order: "asc", sort_by: "orderIndex" },
    });
    const allExams = listResponse.data?.data?.data || [];

    if (!exam) {
      exam = allExams.find(
        (e: any) => e.id === slug || e.slug === slug
      );
    }

    if (exam) {
      // Find all child exams belonging to this exam and sort them by orderIndex ascending
      childExams = allExams
        .filter((e: any) => e.parentId === exam.id)
        .sort((a: any, b: any) => {
          const aVal = a.orderIndex !== undefined && a.orderIndex !== null ? Number(a.orderIndex) : Infinity;
          const bVal = b.orderIndex !== undefined && b.orderIndex !== null ? Number(b.orderIndex) : Infinity;
          return aVal - bVal;
        });
    }
  } catch (error: any) {
    if (error?.response?.status === 429) {
      isRateLimited = true;
    }
    console.error("Error fetching all exams list:", error);
  }

  // Fallback to static exam details if API request fails (e.g., during rate limiting/429)
  if (!exam) {
    const targetId = SLUG_TO_STATIC_ID[slug] || slug;
    const staticExam = EXAM_DETAILE_DATA.find(
      (e: any) => e.id === targetId || e.id === slug || e.slug === slug
    );
    if (staticExam) {
      exam = staticExam;
    }
  }

  if (!exam) {
    if (isRateLimited) {
      throw new Error(
        "The server is currently busy (Too Many Requests). Please click the Try Again button below to refresh."
      );
    }
    notFound();
  }

  // Apply locale-aware description & name: use translations[locale] when available
  const originalName = exam?.name;
  const translatedName = exam?.translations?.[locale]?.name;
  const translatedDescription = exam?.translations?.[locale]?.description;
  if (translatedName || translatedDescription) {
    exam = {
      ...exam,
      originalName,
      ...(translatedName ? { name: translatedName } : {}),
      ...(translatedDescription ? { description: translatedDescription } : {}),
    };
  } else {
    exam = {
      ...exam,
      originalName,
    };
  }

  // Apply locale-aware names and descriptions to child exams
  childExams = childExams.map((child: any) => {
    const cName = child?.translations?.[locale]?.name || child?.name;
    const cDesc = child?.translations?.[locale]?.description || child?.description;
    return {
      ...child,
      name: cName,
      description: cDesc,
    };
  });

  // Resolve translation metadata key and name override
  const targetIdForLookup = SLUG_TO_STATIC_ID[exam?.slug || slug] || exam?.slug || slug;
  const staticMetaForLookup = EXAM_DETAILE_DATA.find(
    (e: any) => e.id === targetIdForLookup || e.id === exam?.slug || e.slug === exam?.slug
  );
  const examIdForLookup = staticMetaForLookup?.id || exam?.slug || exam?.id || slug;
  const translationKey = examIdForLookup === "skill-for-english-selt" ? "selt" : examIdForLookup;
  let localizedMeta: any = {};
  if (translationKey) {
    try {
      localizedMeta = t.raw(translationKey) || {};
    } catch (e) {}
  }
  const resolvedName =
    (locale === "ar" && localizedMeta.name) ||
    exam?.translations?.[locale]?.name ||
    exam?.translations?.[locale]?.title ||
    exam?.name ||
    staticMetaForLookup?.name ||
    "";

  // 3. Determine if it is a parent group (has child items or is labeled group/item) or a detail page
  const hasGroupType = exam.examType?.some(
    (et: any) => et.name === "group" || et.name === "item"
  );
  const isGroup = hasGroupType && childExams.length > 0;

  if (isGroup) {
    const examWithItems = {
      ...exam,
      type: "items",
      items: childExams,
      resolvedName,
    };
    return <ExamItems data={examWithItems} />;
  } else {
    const examWithDetails = {
      ...exam,
      type: "details",
      resolvedName,
    };
    return <ExamDetails data={examWithDetails} />;
  }
}

