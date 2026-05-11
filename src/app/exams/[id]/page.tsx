import { EXAM_DETAILE_DATA } from "@/data";
import { notFound } from "next/navigation";
import ExamItems from "../_components/exam-items";
import ExamDetails from "../_components/exam-details";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("👉 ~ ExamDetailPage ~ id:", id);

  const exam = EXAM_DETAILE_DATA.find((item) => item.id === id);

  if (!exam) {
    notFound();
  }

  switch (exam?.type) {
    case "items":
      return <ExamItems data={exam} />;
    case "details":
      return <ExamDetails data={exam} />;
  }
}
