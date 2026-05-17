"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { PteAcademicSchema, type TPteAcademicSchema } from "./_type";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

export const PTE_COURSES = {
  group: {
    id: "group",
    name: "Group Classroom",
    label: "Group (In-person classroom-based course)",
    price: 1850,
    currency: "AED",
  },
  semi_private: {
    id: "semi_private",
    name: "Semi-Private Classroom",
    label: "Semi-Private (In-person classroom-based)",
    price: 2850,
    currency: "AED",
  },
  private: {
    id: "private",
    name: "Private one-to-one",
    label: "Private one-to-one (In-person classroom)",
    price: 4850,
    currency: "AED",
  },
  online: {
    id: "online",
    name: "Private Online",
    label: "Private one-to-one (Online course)",
    price: 3850,
    currency: "AED",
  },
};

export const PTE_WORKSHOPS = {
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

export default function FormPTEAcademicRegistration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteAcademicSchema>({
    resolver: zodResolver(PteAcademicSchema),
    defaultValues: {
      givenNames: "",
      noGivenNames: false,
      middleName: "",
      surnames: "",
      noSurname: false,
      emailUsername: "",
      confirmEmail: "",
      dateOfBirth: undefined,
      gender: "",
      placeOfBirth: "",
      countryOfBirth: "",
      countryOfCitizenship: "",
      countryOfResidence: "",
      postalAddress1: "",
      postalAddress2: "",
      poBox: "",
      postcode: "",
      city: "",
      mobileNumber: "",
      homeLanguage: "",
      planningCountry: "",
      currentSituation: "",
      reasonForTaking: "",
      studyLevel: "",
      occupationSector: "",
      referralSource: "",
      takenBefore: "" as any,
      takenWithinTwoYears: "" as any,
      hasExistingAccount: "" as any,
      marketingPreference: "",
      idType: "",
      idCountryOfIssue: "",
      idNumber: "",
      idExpiryDate: undefined,
      selectedCourse: "",
      selectedWorkshop: "",
      passportCopy: undefined,
      infoCorrect: false,
      examDate: undefined,
      examTime: "",
    },
  });

  const formData = form.watch();

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateTotal = () => {
    const baseFee = 1350;
    const serviceFee = 100;
    
    const selectedCourseData = formData.selectedCourse ? (PTE_COURSES as any)[formData.selectedCourse] : null;
    const coursePrice = selectedCourseData?.price || 0;

    const selectedWorkshopData = formData.selectedWorkshop ? (PTE_WORKSHOPS as any)[formData.selectedWorkshop] : null;
    const workshopPrice = selectedWorkshopData?.price || 0;
    
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

  const handleFormSubmit: SubmitHandler<TPteAcademicSchema> = (data) => {
    if (currentStep < 3) {
      console.log("Step completion data:", data);
      goToStep(3);
    } else {
      if (!data.infoCorrect) {
        form.setError("infoCorrect", {
          type: "manual",
          message: "Please confirm that the information is correct"
        });
        return;
      }
      console.log("Final submission data:", data);
      alert("PTE Registration Successful!");
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
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          PTE Academic <span className="text-primary">Registration</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Secure your Pearson Test of English booking today.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          {currentStep === 0 && <TermsStep onNext={() => goToStep(1)} />}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              timeSlot={formData.examTime}
              onChange={(date) => form.setValue("examDate", date)}
              onTimeSlotChange={(slot) => form.setValue("examTime", slot)}
              onNext={() => goToStep(2)}
              onBack={() => goToStep(0)}
              error={form.formState.errors.examDate}
              timeSlotError={form.formState.errors.examTime}
            />
          )}

          {currentStep === 2 && (
            <RegistrationFormStep
              form={form}
              onSubmit={() => goToStep(3)}
              onInvalid={onInvalid}
              onBack={() => goToStep(1)}
              languages={languages}
              coursesData={PTE_COURSES}
              workshopsData={PTE_WORKSHOPS}
            />
          )}

          {currentStep === 3 && (
            <ReviewStep
              data={formData}
              form={form}
              onEdit={() => goToStep(2)}
              onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
              onInvalid={onInvalid}
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={formData.selectedCourse ? (PTE_COURSES as any)[formData.selectedCourse] : null}
              selectedWorkshopData={formData.selectedWorkshop ? (PTE_WORKSHOPS as any)[formData.selectedWorkshop] : null}
            />
          )}
        </Form>
      </div>
    </div>
  );
}
