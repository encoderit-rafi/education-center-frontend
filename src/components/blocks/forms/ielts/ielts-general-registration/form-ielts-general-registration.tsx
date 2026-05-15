"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { IeltsGeneralSchema, type TIeltsGeneralSchema } from "./_type";
import { toast } from "sonner";
import { languages } from "@/lib/languages-data";
import { courses as coursesData, workshops as workshopsData } from "@/lib/data";

// Import steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

const EXAM_FEE = 1400;
const SERVICE_FEE = 150;

export default function FormIELTSGeneralRegistration() {
  const [step, setStep] = useState(0);

  const form = useForm<TIeltsGeneralSchema>({
    resolver: zodResolver(IeltsGeneralSchema),
    defaultValues: {
      testModule: "General Training",
      bookingFor: "",
      givenNames: "",
      middleName: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: undefined,
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: undefined,
      postalAddress1: "",
      postalAddress2: "",
      postalAddress3: "",
      poBox: "",
      city: "",
      postcode: "",
      marketingPreference: undefined,
      idType: undefined,
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      idDocument: undefined,
      takenBefore: undefined,
      lessThanTwoYears: undefined,
      existingAccount: undefined,
      specialRequirements: undefined,
      specialRequirementsMention: "",
      firstLanguage: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      selectedCourse: "",
      selectedWorkshop: "",
      confirmationRecipient: "",
      vatNumber: "",
      paymentMethod: "online",
      termsAgreed: false,
      examDate: undefined,
      examTimeSlot: "",
    },
  });

  const { watch, trigger, setValue, handleSubmit } = form;
  const formData = watch();

  // Pricing Logic
  const selectedCourse = coursesData.find((c) => c.id === formData.selectedCourse);
  const selectedWorkshop = workshopsData.find((w) => w.id === formData.selectedWorkshop);

  const coursePrice = selectedCourse ? selectedCourse.price * (1 - (selectedCourse.special_discount || 0) / 100) : 0;
  const workshopPrice = selectedWorkshop?.price || 0;

  const subtotal = EXAM_FEE + SERVICE_FEE + coursePrice + workshopPrice;
  const total = subtotal;

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];

    if (step === 1) {
      fieldsToValidate = ["examDate", "examTimeSlot"];
    } else if (step === 2) {
      // Validate the whole form before moving to review
      const isValid = await trigger();
      if (isValid) setStep(3);
      return;
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await trigger(fieldsToValidate as any);
      if (isValid) setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(Math.max(0, step - 1));

  const onSubmit = async (data: TIeltsGeneralSchema) => {
    console.log("Form Data:", data);
    // Handle submission (e.g., API call)
    // If successful, maybe show a success message or redirect
    alert("Registration Successful!");
  };

  const onInvalid = (errors: any) => {
    console.error("Form Errors:", errors);
    const errorFields = Object.keys(errors).join(", ");
    toast.error(`Validation failed for: ${errorFields}`);
  };

  return (
    <Form {...form}>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {step === 0 && <TermsStep onNext={nextStep} />}

        {step === 1 && (
          <DateStep
            value={formData.examDate}
            timeSlot={formData.examTimeSlot as any}
            onChange={(date) => setValue("examDate", date)}
            onTimeSlotChange={(slot) => setValue("examTimeSlot", slot)}
            onNext={nextStep}
            onBack={prevStep}
            error={form.formState.errors.examDate}
            timeSlotError={form.formState.errors.examTimeSlot}
          />
        )}

        {step === 2 && (
          <RegistrationFormStep
            form={form}
            onSubmit={nextStep}
            onInvalid={onInvalid}
            onBack={prevStep}
            languages={languages}
            coursesData={coursesData}
            workshopsData={workshopsData}
          />
        )}

        {step === 3 && (
          <ReviewStep
            data={formData}
            form={form}
            onEdit={() => setStep(2)}
            onSubmit={handleSubmit(onSubmit)}
            onInvalid={onInvalid}
            baseFee={EXAM_FEE}
            serviceFee={SERVICE_FEE}
            vat={0}
            total={total}
            tax={0}
            selectedCourseData={selectedCourse}
            selectedWorkshopData={selectedWorkshop}
          />
        )}
      </div>
    </Form>
  );
}
