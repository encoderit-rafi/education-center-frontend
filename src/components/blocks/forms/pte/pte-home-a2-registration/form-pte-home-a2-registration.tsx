"use client";

import React, { useState } from "react";
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
import { RefinedPteHomeA2Schema, type TPteHomeA2FormSchema } from "./_type";

export const COURSES_DATA = {
  group: {
    id: "group",
    label: "Group (In-person classroom-based course)",
    name: "Group Classroom",
    price: 1850,
    special_discount: 0,
  },
  "semi-private": {
    id: "semi-private",
    label: "Semi-Private (In-person classroom-based)",
    name: "Semi-Private Classroom",
    price: 2850,
    special_discount: 0,
  },
  private: {
    id: "private",
    label: "Private one-to-one (In-person classroom)",
    name: "Private One-to-One",
    price: 4850,
    special_discount: 0,
  },
  online: {
    id: "online",
    label: "Private one-to-one (Online course)",
    name: "Private Online",
    price: 3850,
    special_discount: 0,
  },
};

export const WORKSHOPS_DATA = {
  workshop_2: { id: "workshop_2", name: "Workshop 2 Hours", price: 600 },
  workshop_4: { id: "workshop_4", name: "Workshop 4 Hours", price: 1000 },
  workshop_6: { id: "workshop_6", name: "Workshop 6 Hours", price: 1350 },
  workshop_8: { id: "workshop_8", name: "Workshop 8 Hours", price: 1600 },
};

const EXAM_FEE = 1400;
const SERVICE_FEE = 150;

export default function FormPTEHomeA2Registration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteHomeA2FormSchema>({
    resolver: zodResolver(RefinedPteHomeA2Schema),
    defaultValues: {
      givenNames: "",
      middleNames: "",
      noGivenNames: false,
      surnames: "",
      noSurname: false,
      emailUsername: "",
      confirmEmail: "",
      dateOfBirth: undefined,
      gender: "",
      placeOfBirth: "",
      countryOfBirth: "",
      countryOfCitizenship: "",
      countryOfResidence: "United Arab Emirates",
      address: "",
      city: "",
      mobileNumber: "",
      homeLanguage: "",
      planningCountry: "",
      currentSituation: "",
      reasonForTaking: "",
      studyLevel: "",
      occupationSector: "",
      referralSource: "",
      takenBefore: "",
      takenWithinTwoYears: "",
      hasExistingAccount: "",
      dataSharingAgreed: true,
      bookingTermsAgreed: true,
      marketingConsent: "",
      idType: "",
      idCountryOfIssue: "",
      idNumber: "",
      idExpiryDate: undefined,
      documentNumberConfirmed: true,
      idPolicyRead: true,
      selectedCourse: "",
      selectedWorkshop: "",
      idDocument: undefined,
      userPhoto: undefined,
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
    const baseFee = EXAM_FEE;
    const serviceFee = SERVICE_FEE;
    const coursePrice = formData.selectedCourse
      ? (COURSES_DATA as any)[formData.selectedCourse].price *
        (1 - (COURSES_DATA as any)[formData.selectedCourse].special_discount / 100)
      : 0;
    const workshopPrice = formData.selectedWorkshop
      ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop].price
      : 0;
    
    const total = baseFee + serviceFee + coursePrice + workshopPrice;
    
    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal: total,
      vat: 0,
      total
    };
  };

  const pricing = calculateTotal();

  const handleFormSubmit: SubmitHandler<TPteHomeA2FormSchema> = (data) => {
    if (currentStep < 3) {
      nextStep();
    } else {
      toast.success("PTE Home A2 Registration Submitted Successfully!");
      console.log("Final submission data:", data);
    }
  };

  const onInvalid = (errors: any) => {
    console.error("Validation Errors:", errors);
    
    const fieldLabels: Record<string, string> = {
      givenNames: "First / Given Names",
      surnames: "Surnames",
      emailUsername: "Email",
      confirmEmail: "Confirm Email",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      placeOfBirth: "Place of Birth",
      countryOfBirth: "Country of Birth",
      countryOfCitizenship: "Country of Citizenship",
      countryOfResidence: "Country of Residence",
      address: "Address",
      city: "City",
      mobileNumber: "Mobile Number",
      homeLanguage: "Home Language",
      planningCountry: "Destination Country",
      currentSituation: "Current Situation",
      reasonForTaking: "Reason for Taking",
      occupationSector: "Occupation Sector",
      referralSource: "Referral Source",
      takenBefore: "Test History",
      takenWithinTwoYears: "Previous Test Timing",
      hasExistingAccount: "Existing Account Confirmation",
      dataSharingAgreed: "Data Sharing Agreement",
      bookingTermsAgreed: "Terms and Conditions",
      marketingConsent: "Marketing Preferences",
      idType: "ID Type",
      idCountryOfIssue: "ID Country of Issue",
      idNumber: "ID Number",
      idExpiryDate: "ID Expiry Date",
      documentNumber: "ID Number",
      documentNumberConfirmed: "ID Confirmation",
      idPolicyRead: "ID Policy Confirmation",
      idDocument: "ID Document Upload",
      examDate: "Exam Date",
      examTime: "Exam Time",
    };

    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const errorMessage = errors[firstErrorField]?.message || "This field is required";
      const label = fieldLabels[firstErrorField] || firstErrorField;
      
      toast.error(`Validation Error: ${label} - ${errorMessage}`, {
        description: `Please fix ${errorFields.length} field(s) before proceeding.`,
        duration: 5000,
      });

      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus({ preventScroll: true });
      }
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ["examDate", "examTime"];
    } else if (currentStep === 2) {
      const isValid = await form.trigger();
      if (isValid) goToStep(3);
      else onInvalid(form.formState.errors);
      return;
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await form.trigger(fieldsToValidate as any);
      if (isValid) goToStep(currentStep + 1);
      else onInvalid(form.formState.errors);
    } else {
      goToStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          PTE Home <span className="text-primary">A2</span> Registration
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Authorized Pearson PTE Home A2 test registration portal.
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
              coursesData={COURSES_DATA}
              workshopsData={WORKSHOPS_DATA}
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
              total={pricing.total}
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
