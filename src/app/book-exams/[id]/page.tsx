import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormIELTSUKVIRegistration from "@/components/blocks/forms/ielts/ielts-ukvi-registration/form-ielts-ukvi-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte/pte-home-a2-registration/form-pte-home-a2-registration";
import FormPTEHomeB1Registration from "@/components/blocks/forms/pte/pte-home-b1-registration/form-pte-home-b1-registration";
import FormPTEHomeUkviRegistration from "@/components/blocks/forms/pte/pte-home-ukvi-registration/form-pte-home-ukvi-registration";
import FormSELTA1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a1/form-selt-a1-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl-ibt-exam-registration/form-toefl-ibt-registration";
import { EXAM_DETAILE_DATA, EXAM_IDS_DATA } from "@/data";
import { notFound } from "next/navigation";
import BookExamItems from "../_components/book-exam-items";

export default async function BookExamsId({
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
  if (exam?.type == "items") {
    return <BookExamItems data={exam} />;
  }
  switch (id) {
    case EXAM_IDS_DATA.ielts_academic.id:
      return <FormIELTSAcademicRegistration />;
    case EXAM_IDS_DATA.ielts_general.id:
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            IELTS General Registration
          </h2>
          <FormIELTSGeneralRegistration />
        </div>
      );
    case EXAM_IDS_DATA.toefl.id:
      return (
        <div>
          <FormTOEFLIBTRegistration />
        </div>
      );
    case EXAM_IDS_DATA.celpip_general.id:
      return (
        <div>
          <h2 className="text-2xl font-bold my-8 text-center">
            CELPIP General Registration
          </h2>
        </div>
      );
    case EXAM_IDS_DATA.celpip_general_ls.id:
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
    case EXAM_IDS_DATA.selt_a1.id:
      return (
        <div>
          <FormSELTA1Registration />
        </div>
      );
    case EXAM_IDS_DATA.selt.id:
    case EXAM_IDS_DATA.selt_a2.id:
    case EXAM_IDS_DATA.selt_b1.id:
    case EXAM_IDS_DATA.selt_b1_r_w.id:
    case EXAM_IDS_DATA.selt_b2.id:
    case EXAM_IDS_DATA.selt_c1.id:
    case EXAM_IDS_DATA.selt_c2.id:
      return (
        <div>
          <FormSELTA1Registration initialId={id} />
        </div>
      );
    case EXAM_IDS_DATA.pte_academic.id:
      return <FormPTEAcademicRegistration />;
    case EXAM_IDS_DATA.pte_core.id:
      return <FormPTECoreRegistration />;

    case EXAM_IDS_DATA.pte_home_a1.id:
      return <FormPTEHomeA1Registration />;
    case EXAM_IDS_DATA.pte_home_a2.id:
      return <FormPTEHomeA2Registration />;
    case EXAM_IDS_DATA.pte_home_b1.id:
      return <FormPTEHomeB1Registration />;
    case EXAM_IDS_DATA.pte_ukvi.id:
    case EXAM_IDS_DATA.pte_academic_ukvi.id:
      return <FormPTEHomeUkviRegistration />;

    default:
      return notFound();
  }
}
