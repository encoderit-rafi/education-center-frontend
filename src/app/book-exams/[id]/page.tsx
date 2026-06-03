import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte/pte-home-a2-registration/form-pte-home-a2-registration";
import FormPTEHomeB1Registration from "@/components/blocks/forms/pte/pte-home-b1-registration/form-pte-home-b1-registration";
import FormPTEHomeUkviRegistration from "@/components/blocks/forms/pte/pte-home-ukvi-registration/form-pte-home-ukvi-registration";
import FormSELTA1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a1/form-selt-a1-registration";
import FormSELTA2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a2/form-selt-a2-registration";
import FormSELTB1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b1/form-selt-b1-registration";
import FormSELTB1RWRegistration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b1-r-w/form-selt-b1-r-w-registration";
import FormSELTB2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-b2/form-selt-b2-registration";
import FormSELTC1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-c1/form-selt-c1-registration";
import FormSELTC2Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-c2/form-selt-c2-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl/toefl-ibt-exam-registration/form-toefl-ibt-registration";
import { EXAM_IDS_DATA } from "@/data";
import { notFound } from "next/navigation";
import BookExamItems from "../_components/book-exam-items";

import api from "@/axios";

export default async function BookExamsId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  console.log("👉 ~ BookExamsId ~ id/slug:", slug);

  let exam: any = null;
  let childExams: any[] = [];

  try {
    // 1. Try to fetch the exam by slug directly
    const response = await api.get(`/exams/${slug}`);
    if (response.data?.success && response.data?.data) {
      exam = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching exam in BookExamsId:", error);
  }

  // 2. Fetch all exams to resolve UUID or find children
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
  } catch (error) {
    console.error("Error fetching all exams list in BookExamsId:", error);
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
      return <FormIELTSAcademicRegistration />;
    case "ielts-general":
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            IELTS General Registration
          </h2>
          <FormIELTSGeneralRegistration />
        </div>
      );
    case "toefl-ibt":
      return (
        <div>
          <FormTOEFLIBTRegistration />
        </div>
      );
    case "celpip-general":
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            CELPIP General Registration
          </h2>
        </div>
      );
    case "celpip-general-ls":
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            CELPIP General LS Registration
          </h2>
        </div>
      );
    case EXAM_IDS_DATA.cael.id:
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            CAEL Registration
          </h2>
        </div>
      );
    case "selt-a1":
    case "ukvi-speaking-and-listening-at-level-a1":
      return <FormSELTA1Registration />;
    case "selt-a2":
    case "ukvi-speaking-and-listening-at-level-a2":
      return <FormSELTA2Registration />;
    case "selt-b1":
    case "ukvi-speaking-and-listening-at-level-b1":
      return <FormSELTB1Registration />;
    case "selt-b1-r-w":
    case "ukvi-speaking-and-listening-at-level-b1-r-w":
      return <FormSELTB1RWRegistration />;
    case "selt-b2":
    case "ukvi-speaking-listening-reading-and-writing-at-level-b2":
    case "ukvi-speaking-and-listening-at-level-b2":
      return <FormSELTB2Registration />;
    case "selt-c1":
    case "ukvi-speaking-listening-reading-and-writing-at-level-c1":
    case "ukvi-speaking-and-listening-at-level-c1":
      return <FormSELTC1Registration />;
    case "selt-c2":
    case "ukvi-speaking-listening-reading-and-writing-at-level-c2":
    case "ukvi-speaking-and-listening-at-level-c2":
      return <FormSELTC2Registration />;
 
    case "pte-academic":
      return <FormPTEAcademicRegistration />;
    case "pte-core":
      return <FormPTECoreRegistration />;

    case "pte-home-a1":
      return <FormPTEHomeA1Registration />;
    case "pte-home-a2":
      return <FormPTEHomeA2Registration />;
    case "pte-home-b1":
      return <FormPTEHomeB1Registration />;
    case "pte-ukvi":
    case "pte-academic-ukvi":
      return <FormPTEHomeUkviRegistration />;

    default:
      return notFound();
  }
}
