import { EXAM_DETAILE_DATA } from "@/data";
import { notFound } from "next/navigation";
import ExamItems from "../_components/exam-items";
import ExamDetails from "../_components/exam-details";
import api from "@/axios";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("👉 ~ ExamDetailPage ~ id:", id);

  let exam: any = null;

  try {
    const res = await api.get(`/exams/${id}`);
    if (res.data?.success) {
      exam = res.data.data;
    }
  } catch (error) {
    console.error("Failed to fetch exam from api:", error);
  }

  // Fallback to static data if not found in database or api failed
  if (!exam) {
    exam = EXAM_DETAILE_DATA.find(
      (item) => item.id.toLowerCase() === id.toLowerCase()
    );
  }

  if (!exam) {
    notFound();
  }

  // Merge static rich content fields if available
  const staticDetail = EXAM_DETAILE_DATA.find(
    (item) =>
      item.id.toLowerCase() === id.toLowerCase() ||
      item.id.toLowerCase() === exam.slug?.toLowerCase() ||
      item.id.toLowerCase() === exam.id?.toLowerCase()
  );

  if (staticDetail) {
    const sd = staticDetail as any;
    exam = {
      ...sd,
      ...exam,
      stats: exam.stats || sd.stats || [],
      sections: exam.sections || sd.sections || [],
      whoShouldTake: exam.whoShouldTake || sd.whoShouldTake || [],
      acceptedFor: exam.acceptedFor || sd.acceptedFor || [],
      faqs: exam.faqs || sd.faqs || [],
      items: exam.items || sd.items || [],
    };
  }

  // Determine view based on examType
  const isApiExam = Array.isArray(exam.examType);
  let hasExamType = false;
  let hasGroupType = false;

  if (isApiExam) {
    hasExamType = exam.examType.some((et: any) => et.name === "exam");
    hasGroupType = exam.examType.some((et: any) => et.name === "group");
  } else {
    hasExamType = exam.type === "details";
    hasGroupType = exam.type === "items";
  }

  if (hasExamType) {
    return <ExamDetails data={exam} />;
  } else if (hasGroupType) {
    // If it's a group, populate sub-exams dynamically from API
    let dynamicItems: any[] = [];
    try {
      const listRes = await api.get("/exams?limit=100");
      if (listRes.data?.success) {
        const allExams = listRes.data.data.data || [];
        dynamicItems = allExams
          .filter((e: any) => e.parentId === exam.id)
          .map((e: any) => ({
            id: e.slug,
            name: e.name,
          }));
      }
    } catch (err) {
      console.error("Error fetching sub-exams for group dynamic items:", err);
    }

    exam.items = dynamicItems.length > 0 ? dynamicItems : (exam.items || []);
    return <ExamItems data={exam} />;
  } else {
    notFound();
  }
}
