"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./_type";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

export const WORKSHOPS_DATA = {
  workshop_2_hours: {
    id: "workshop_2_hours",
    name: "Workshop 2 Hours",
    duration: "2 hours",
    price: 600,
    currency: "AED",
  },
  workshop_4_hours: {
    id: "workshop_4_hours",
    name: "Workshop 4 Hours",
    duration: "4 hours",
    price: 1000,
    currency: "AED",
  },
  workshop_6_hours: {
    id: "workshop_6_hours",
    name: "Workshop 6 Hours",
    duration: "6 hours",
    price: 1350,
    currency: "AED",
  },
  workshop_8_hours: {
    id: "workshop_8_hours",
    name: "Workshop 8 Hours",
    duration: "8 hours",
    price: 1600,
    currency: "AED",
  },
};

export const COURSES_DATA = {
  group_classroom: {
    id: "group_classroom",
    name: "Group Classroom",
    class_mode_id: "group",
    class_type_id: "classroom",
    price: 1850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
  semi_private_classroom: {
    id: "semi_private_classroom",
    name: "Semi-Private Classroom",
    class_mode_id: "semi_private",
    class_type_id: "classroom",
    price: 2850,
    currency: "AED",
    general_discount: 5,
    special_discount: 15,
  },
  vip_classroom: {
    id: "vip_classroom",
    name: "VIP Classroom",
    class_mode_id: "vip",
    class_type_id: "classroom",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
  vip_online: {
    id: "vip_online",
    name: "Private Online",
    class_mode_id: "vip",
    class_type_id: "online",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
};

export default function FormIeltsAcademicRegistration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review
  const [savedData, setSavedData] = useState<TIeltsAcademicSchema | null>(null);

  const form = useForm<TIeltsAcademicSchema>({
    resolver: zodResolver(IeltsAcademicSchema),
    defaultValues: {
      givenNames: "",
      middleName: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: "male",
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      residenceCountry: "United Arab Emirates",
      city: "",
      idType: "passport",
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      takenBefore: "No",
      lessThanTwoYears: "No",
      existingAccount: "No",
      specialRequirements: "No",
      specialRequirementsMention: "",
      firstLanguage: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      marketingPreference: "none",
      selectedCourse: "",
      selectedWorkshop: "",
    },
  });

  const formData = form.watch();

  const handleFormSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
    console.log("Form Step Completed:", data);
    setSavedData(data);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finalSubmit = () => {
    console.log("Final Submission and Payment:", savedData);
    // Add final API call logic here
  };

  const selectedCourseData = formData.selectedCourse
    ? (COURSES_DATA as any)[formData.selectedCourse]
    : null;
  const selectedWorkshopData = formData.selectedWorkshop
    ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop]
    : null;

  const baseFee = 1120;
  const courseFee = selectedCourseData
    ? selectedCourseData.price * (1 - selectedCourseData.special_discount / 100)
    : 0;
  const workshopFee = selectedWorkshopData ? selectedWorkshopData.price : 0;
  const total = baseFee + courseFee + workshopFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          IELTS Academic <span className="text-primary">Registration</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Complete your registration in a few easy steps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          {currentStep === 0 && (
            <TermsStep onNext={() => setCurrentStep(1)} />
          )}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              onChange={(date) => form.setValue("examDate", date)}
              onNext={() => setCurrentStep(2)}
              onBack={() => setCurrentStep(0)}
              error={form.formState.errors.examDate}
            />
          )}

          {currentStep === 2 && (
            <RegistrationFormStep
              form={form}
              onSubmit={handleFormSubmit}
              onBack={() => setCurrentStep(1)}
              languages={languages}
              coursesData={COURSES_DATA}
              workshopsData={WORKSHOPS_DATA}
            />
          )}

          {currentStep === 3 && savedData && (
            <ReviewStep
              data={savedData}
              onEdit={() => setCurrentStep(2)}
              onSubmit={finalSubmit}
              baseFee={baseFee}
              total={total}
              selectedCourseData={selectedCourseData}
              selectedWorkshopData={selectedWorkshopData}
            />
          )}
        </Form>
      </div>
    </div>
  );
}
