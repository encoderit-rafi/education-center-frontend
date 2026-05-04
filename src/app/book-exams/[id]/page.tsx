import FormIELTSAcademicRegistration from "@/components/blocks/forms/ielts/ielts-academic-registration/form-ielts-academic-registration";
import FormIELTSGeneralRegistration from "@/components/blocks/forms/ielts/ielts-general-registration/form-ielts-general-registration";

export default async function BookExamsId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // return <div>{id}</div>;
  switch (id) {
    case "ielts_academic":
      return <FormIELTSAcademicRegistration />;
    case "ielts_general":
      return <FormIELTSGeneralRegistration />;

    default:
      return <div className="min-h-screen">Not Found</div>;
  }
}
