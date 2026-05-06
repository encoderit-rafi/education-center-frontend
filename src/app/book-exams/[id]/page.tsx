import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormIELTSUKVIRegistration from "@/components/blocks/forms/ielts/ielts-ukvi-registration/form-ielts-ukvi-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte-home-a2-registration/form-pte-home-a2-registration";
import FormPTEHomeB1Registration from "@/components/blocks/forms/pte-home-b1-registration/form-pte-home-b1-registration";
import FormPTEHomeUkviRegistration from "@/components/blocks/forms/pte-home-ukvi-registration/form-pte-home-ukvi-registration";
import FormSELTRegistration from "@/components/blocks/forms/selt-registration/form-selt-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl-ibt-exam-registration/form-toefl-ibt-registration";

export default async function BookExamsId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // return <div>{id}</div>;
  switch (id) {
    case "ielts_academic":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">IELTS Academic Registration</h2>
        <FormIELTSAcademicRegistration /></div>
    case "ielts_general":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">IELTS General Registration</h2>
        <FormIELTSGeneralRegistration /></div>
    case "ielts_ukvi":
    case "ielts_ukvi_academic":
    case "ielts_ukvi_general":
    case "ielts_life_skills_a1":
    case "ielts_life_skills_a2":
    case "ielts_life_skills_b1":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">IELTS UKVI Registration</h2>
        <FormIELTSUKVIRegistration /></div>;
    case "pte_academic":
    case "pte_academic_ukvi":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE Academic Registration</h2>
        <FormPTEAcademicRegistration /></div>;
    case "pte_core":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE Core Registration</h2>
        <FormPTECoreRegistration /></div>;
    case "pte_home_a1":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE Home A1 Registration</h2>
        <FormPTEHomeA1Registration /></div>;
    case "pte_home_a2":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE Home A2 Registration</h2>
        <FormPTEHomeA2Registration /></div>;
    case "pte_home_b1":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE Home B1 Registration</h2>
        <FormPTEHomeB1Registration /></div>;
    case "pte_ukvi":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">PTE UKVI Registration</h2>
        <FormPTEHomeUkviRegistration /></div>;
    case "toefl_ibt":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">TOEFL iBT Registration</h2>
        <FormTOEFLIBTRegistration /></div>;
    case "selt":
    case "selt_a1":
    case "selt_a2":
    case "selt_b1":
    case "selt_b1_r_w":
    case "selt_b2":
    case "selt_c1":
    case "selt_c2":
      return <div>
        <h2 className="text-2xl font-bold my-8 text-center">SELT Registration</h2>
        <FormSELTRegistration /></div>;

    default:
      return <div className="min-h-screen">Not Found</div>;
  }
}
