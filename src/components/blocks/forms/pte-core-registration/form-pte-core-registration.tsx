"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { languages } from "@/lib/languages-data";

// Steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

// Schema
import { PteCoreSchema, type TPteCoreSchema } from "./_type";

// Data
const PTE_CORE_COURSES = {
  group: { id: "group", name: "Group (In-person classroom)", price: 1850 },
  semi_private: { id: "semi_private", name: "Semi-Private (In-person)", price: 2850 },
  private: { id: "private", name: "Private one-to-one (In-person)", price: 4850 },
  online: { id: "online", name: "Private one-to-one (Online)", price: 3850 },
};

const PTE_CORE_WORKSHOPS = {
  "2h": { id: "2h", name: "2 Hours Workshop", price: 600 },
  "4h": { id: "4h", name: "4 Hours Workshop", price: 1000 },
  "6h": { id: "6h", name: "6 Hours Workshop", price: 1350 },
  "8h": { id: "8h", name: "8 Hours Workshop", price: 1600 },
};

const EXAM_FEE = 1450;
const SERVICE_FEE = 100;

export default function FormPTECoreRegistration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteCoreSchema>({
    resolver: zodResolver(PteCoreSchema),
    defaultValues: {
      givenNames: "",
      noGivenNames: false,
      middleName: "",
      surnames: "",
      noSurname: false,
      emailUsername: "",
      confirmEmail: "",
      dateOfBirth: undefined,
      gender: "" as any,
      placeOfBirth: "",
      countryOfBirth: "",
      countryOfCitizenship: "",
      countryOfResidence: "United Arab Emirates",
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
      marketingPreference: "none",
      idType: undefined,
      idCountryOfIssue: "",
      documentNumber: "",
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
    let subtotal = EXAM_FEE + SERVICE_FEE;
    if (formData.selectedCourse) {
      subtotal += (PTE_CORE_COURSES as any)[formData.selectedCourse]?.price || 0;
    }
    if (formData.selectedWorkshop) {
      subtotal += (PTE_CORE_WORKSHOPS as any)[formData.selectedWorkshop]?.price || 0;
    }
    
    const vat = subtotal * 0.05;
    return {
      baseFee: EXAM_FEE,
      serviceFee: SERVICE_FEE,
      vat: vat,
      total: subtotal + vat
    };
  };

  const pricing = calculateTotal();

  const handleFormSubmit: SubmitHandler<TPteCoreSchema> = (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      if (!data.infoCorrect) {
        form.setError("infoCorrect", {
          type: "manual",
          message: "Please confirm that the information is correct"
        });
        return;
      }
      toast.success("PTE Core Registration Submitted Successfully!");
      console.log("Final submission data:", data);
    }
  };

  const onInvalid = (errors: any) => {
    console.error("Validation Errors:", errors);
    toast.error("Please fill all required fields correctly.");
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
          PTE Core <span className="text-primary">Registration</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Authorized Canadian Immigration (IRCC) test registration portal.
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
              coursesData={PTE_CORE_COURSES}
              workshopsData={PTE_CORE_WORKSHOPS}
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
              vat={pricing.vat}
              total={pricing.total}
              selectedCourseData={formData.selectedCourse ? (PTE_CORE_COURSES as any)[formData.selectedCourse] : null}
              selectedWorkshopData={formData.selectedWorkshop ? (PTE_CORE_WORKSHOPS as any)[formData.selectedWorkshop] : null}
            />
          )}
        </Form>
      </div>
    </div>
  );
}
