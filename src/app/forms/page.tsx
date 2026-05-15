"use client";
import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormIELTSUKVIRegistration from "@/components/blocks/forms/ielts/ielts-ukvi-registration/form-ielts-ukvi-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte/pte-home-a2-registration/form-pte-home-a2-registration";
// import FormPTEHomeB1Registration from "@/components/blocks/forms/pte-home-b1-registration/pte-home-b1-registration";
// import FormPTEHomeUkviRegistration from "@/components/blocks/forms/pte-home-ukvi-registration/pte-home-ukvi-registration";
import FormSELTA1Registration from "@/components/blocks/forms/selt/ukvi-speaking-and-listening-at-level-a1/form-selt-a1-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl-ibt-exam-registration/form-toefl-ibt-registration";

export default function FormsPage() {
  return (
    <div>
      <FormIELTSAcademicRegistration />
      <FormIELTSGeneralRegistration />
      <FormIELTSUKVIRegistration />
      {/* <FormPTEAcademicRegistration />
      <FormPTECoreRegistration />
      <FormPTEHomeA1Registration />
      <FormPTEHomeA2Registration />
      {/* <FormPTEHomeB1Registration />
      <FormPTEHomeUkviRegistration /> */}
      <FormSELTA1Registration />
      <FormTOEFLIBTRegistration />
    </div>
  );
}
