import { notFound } from "next/navigation";
import { EXAM_IDS_DATA } from "@/data";
import ExamIELTS from "../_components/exam-ielts";
import ExamIELTSAcademic from "../_components/exam-ielts-academic";
import ExamIELTSGeneral from "../_components/exam-ielts-general";
import ExamIELTSUKVI from "../_components/exam-ielts -ukvi";
import ExamCelpipGeneral from "../_components/exam-celpip-general";
import ExamCELPIP from "../_components/exam-celpip";
import ExamCelpipGeneralLS from "../_components/exam-celpip-general-ls";
import ExamCAEL from "../_components/exam-cael";
import ExamTOEFL from "../_components/exam-toefl";
import ExamSELT from "../_components/exam-selt";
import ExamPTE from "../_components/exam-pte";
import ExamPTEAcademic from "../_components/exam-pte-academic";
import ExamPTECore from "../_components/exam-pte-core";
import ExamPTEUKVI from "../_components/exam-pte-ukvi";

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  switch (id) {
    case EXAM_IDS_DATA.ielts.id:
      return <ExamIELTS />;
    case EXAM_IDS_DATA.ielts_academic.id:
      return <ExamIELTSAcademic />;
    case EXAM_IDS_DATA.ielts_general.id:
      return <ExamIELTSGeneral />;
    case EXAM_IDS_DATA.ielts_ukvi.id:
      return <ExamIELTSUKVI />;
    case EXAM_IDS_DATA.toefl.id:
      return <ExamTOEFL />;
    case EXAM_IDS_DATA.pte.id:
      return <ExamPTE />;
    case EXAM_IDS_DATA.pte_academic.id:
      return <ExamPTEAcademic />;
    case EXAM_IDS_DATA.pte_core.id:
      return <ExamPTECore />;
    case EXAM_IDS_DATA.pte_ukvi.id:
      return <ExamPTEUKVI />;
    case EXAM_IDS_DATA.celpip.id:
      return <ExamCELPIP />;
    case EXAM_IDS_DATA.celpip_general.id:
      return <ExamCelpipGeneral />;
    case EXAM_IDS_DATA.celpip_general_ls.id:
      return <ExamCelpipGeneralLS />;
    case EXAM_IDS_DATA.cael.id:
      return <ExamCAEL />;
    case EXAM_IDS_DATA.selt.id:
      return <ExamSELT />;
    default:
      notFound();
  }
}
