"use client";
import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";
import FormPTEAcademicRegistration from "@/components/blocks/forms/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/blocks/forms/pte-core-registration/form-pte-core-registration";
import FormPTEHomeA1Registration from "@/components/blocks/forms/pte-home-a1-registration/form-pte-home-a1-registration";
import FormPTEHomeA2Registration from "@/components/blocks/forms/pte-home-a2-registration/form-pte-home-a2-registration";
import FormPTEHomeB1Registration from "@/components/blocks/forms/pte-home-b1-registration/pte-home-b1-registration";
import FormPTEHomeUkviRegistration from "@/components/blocks/forms/pte-home-ukvi-registration/pte-home-ukvi-registration";
import FormSELTRegistration from "@/components/blocks/forms/selt-registration/form-selt-registration";
import FormTOEFLIBTRegistration from "@/components/blocks/forms/toefl-ibt-exam-registration/form-toefl-ibt-registration";

export default function FormsPage() {
  return (
    <div>
      <FormIELTSAcademicRegistration />
      {/* <FormIELTSGeneralRegistration />
      <FormPTEAcademicRegistration />
      <FormPTECoreRegistration />
      <FormPTEHomeA1Registration />
      <FormPTEHomeA2Registration />
      <FormPTEHomeB1Registration />
      <FormPTEHomeUkviRegistration />
      <FormSELTRegistration />
      <FormTOEFLIBTRegistration /> */}
    </div>
  );
}
