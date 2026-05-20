import { notFound } from "next/navigation";
import ExamItems from "../_components/exam-items";
import ExamDetails from "../_components/exam-details";
import api from "@/axios";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  console.log("👉 ~ ExamDetailPage ~ id/slug:", slug);

  let exam: any = null;
  let childExams: any[] = [];

  try {
    // 1. Try to fetch exam by slug/id directly
    const response = await api.get(`/exams/${slug}`);
    if (response.data?.success && response.data?.data) {
      exam = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching exam by slug:", error);
  }

  // 2. Fetch all exams to find children and resolve by ID if needed (e.g. if the route is a UUID)
  try {
    const listResponse = await api.get("/exams?limit=100");
    const allExams = listResponse.data?.data?.data || [];

    if (!exam) {
      exam = allExams.find(
        (e: any) => e.id === slug || e.slug === slug
      );
    }

    if (exam) {
      // Find all child exams belonging to this exam
      childExams = allExams.filter((e: any) => e.parentId === exam.id);
    }
  } catch (error) {
    console.error("Error fetching all exams list:", error);
  }

  if (!exam) {
    notFound();
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

