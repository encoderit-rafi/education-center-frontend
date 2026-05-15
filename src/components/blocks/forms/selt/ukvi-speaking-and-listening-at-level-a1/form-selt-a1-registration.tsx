"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { EXAM_IDS_DATA } from "@/data";
import { SeltA1Schema, type TSeltA1Schema } from "./_type/selt";

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

export default function FormSELTA1Registration({ initialId }: { initialId?: string }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const examName = Object.values(EXAM_IDS_DATA).find(e => e.id === initialId)?.name || "SELT A1";

  const form = useForm<TSeltA1Schema>({
    resolver: zodResolver(SeltA1Schema) as any,
    defaultValues: {
      testModule: initialId || "selt-a1",
      givenNames: "",
      middleName: "",
      surnames: "",
      noSurname: false,
      postcode: "",
      poBox: "",
      dateOfBirth: undefined,
      sex: "male",
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: "United Arab Emirates",
      postalAddress1: "",
      postalAddress2: "",
      city: "",
      idType: "passport",
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      idDocument: undefined,
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
      paymentMethod: "",
      examTimeSlot: "",
    },
  });

  const formData = form.watch();

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateTotal = () => {
    // Pricing mapping based on the provided fee structure
    const levelFees: Record<string, number> = {
      "selt-a1": 650,
      "selt-a2": 650,
      "selt-b1": 650,
      "selt-b1-r-w": 870,
      "selt-b2": 870,
      "selt-c1": 870,
      "selt-c2": 870,
    };

    const baseFee = levelFees[initialId || "selt-a1"] || 650;
    const serviceFee = 150;
    const coursePrice = formData.selectedCourse
      ? (COURSES_DATA as any)[formData.selectedCourse].price *
      (1 -
        (COURSES_DATA as any)[formData.selectedCourse].special_discount / 100)
      : 0;
    const workshopPrice = formData.selectedWorkshop
      ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop].price
      : 0;

    const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;

    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal,
      vat: 0,
      total: subtotal
    };
  };

  const pricing = calculateTotal();
  const total = pricing.total;

  const handleFormSubmit: SubmitHandler<TSeltA1Schema> = (data) => {
    if (currentStep < 3) {
      console.log("Step completion data:", data);
      goToStep(3);
    } else {
      console.log("Final submission data:", data);
      // Final API call logic here
      alert("Registration Successful!");
    }
  };

  const onInvalid = (errors: any) => {
    console.error("Validation Errors:", errors);
    const firstError = Object.keys(errors)[0];
    const element = document.getElementsByName(firstError)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">
          {examName.split(" (")[0]} <span className="text-[#A11D1D]">Registration</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          {currentStep === 0 && <TermsStep onNext={() => goToStep(1)} />}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              timeSlot={formData.examTimeSlot}
              onChange={(date) => form.setValue("examDate", date)}
              onTimeSlotChange={(slot) => form.setValue("examTimeSlot", slot as any)}
              onNext={() => goToStep(2)}
              onBack={() => goToStep(0)}
              error={form.formState.errors.examDate}
              timeSlotError={form.formState.errors.examTimeSlot}
            />
          )}

          {currentStep === 2 && (
            <RegistrationFormStep
              form={form as any}
              onSubmit={handleFormSubmit}
              onInvalid={onInvalid}
              onBack={() => goToStep(1)}
              languages={languages}
              coursesData={COURSES_DATA}
              workshopsData={WORKSHOPS_DATA}
            />
          )}

          {currentStep === 3 && (
            <ReviewStep
              data={formData}
              form={form as any}
              onEdit={() => goToStep(2)}
              onSubmit={(e) => form.handleSubmit(handleFormSubmit, onInvalid)(e)}
              onInvalid={onInvalid}
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={
                formData.selectedCourse
                  ? (COURSES_DATA as any)[formData.selectedCourse]
                  : undefined
              }
              selectedWorkshopData={
                formData.selectedWorkshop
                  ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop]
                  : undefined
              }
            />
          )}
        </Form>
      </div>
    </div>
  );
}
