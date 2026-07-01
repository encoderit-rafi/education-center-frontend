import { notFound } from "next/navigation";
import ExamItems from "../_components/exam-items";
import ExamDetails from "../_components/exam-details";
import api from "@/axios";
import { getLocale } from "next-intl/server";
import { EXAM_DETAILE_DATA } from "@/data";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const locale = await getLocale();
  console.log("👉 ~ ExamDetailPage ~ id/slug:", slug);

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
    const staticExam = EXAM_DETAILE_DATA.find(
      (e: any) => e.id === slug || e.slug === slug
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

  // Apply locale-aware description: use translations[locale].description when available
  const translatedDescription = exam?.translations?.[locale]?.description;
  if (translatedDescription) {
    exam = { ...exam, description: translatedDescription };
  }

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
    };
    return <ExamItems data={examWithItems} />;
  } else {
    const examWithDetails = {
      ...exam,
      type: "details",
    };
    return <ExamDetails data={examWithDetails} />;
  }
}

