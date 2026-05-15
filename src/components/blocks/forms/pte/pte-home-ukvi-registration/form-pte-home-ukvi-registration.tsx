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
import { RefinedPteHomeUkviSchema, type TPteHomeUkviFormSchema } from "./_type";

const PTE_UKVI_COURSES = [
  { id: "group", name: "Group (In-person classroom)", price: 1850 },
  { id: "semi-private", name: "Semi-Private (In-person)", price: 2850 },
  { id: "private", name: "Private one-to-one (In-person)", price: 4850 },
  { id: "online", name: "Private one-to-one (Online)", price: 3850 },
];

const PTE_UKVI_WORKSHOPS = [
  { id: "workshop_2", name: "Workshop 2 Hours", price: 600 },
  { id: "workshop_4", name: "Workshop 4 Hours", price: 1000 },
  { id: "workshop_6", name: "Workshop 6 Hours", price: 1350 },
  { id: "workshop_8", name: "Workshop 8 Hours", price: 1600 },
];

const EXAM_FEE = 1450;
const SERVICE_FEE = 100;

export default function FormPTEHomeUKVIRegistration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteHomeUkviFormSchema>({
    resolver: zodResolver(RefinedPteHomeUkviSchema),
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
      occupationSector: "",
      referralSource: "",
      takenBefore: "",
      takenWithinTwoYears: "",
      hasExistingAccount: "",
      marketingConsent: "none",
      idType: "",
      idCountryOfIssue: "",
      documentNumber: "",
      documentNumberConfirmed: true,
      idPolicyRead: true,
      dataSharingAgreed: true,
      bookingTermsAgreed: true,
      selectedCourse: "",
      selectedWorkshop: "",
      idDocument: undefined,
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
    const selectedCourseData = PTE_UKVI_COURSES.find(c => c.id === formData.selectedCourse);
    if (selectedCourseData) {
      subtotal += selectedCourseData.price;
    }
    
    const selectedWorkshopData = PTE_UKVI_WORKSHOPS.find(w => w.id === formData.selectedWorkshop);
    if (selectedWorkshopData) {
      subtotal += selectedWorkshopData.price;
    }
    
    const total = subtotal;
    return {
      baseFee: EXAM_FEE,
      serviceFee: SERVICE_FEE,
      vat: 0,
      total,
      selectedCourseData,
      selectedWorkshopData: PTE_UKVI_WORKSHOPS.find(w => w.id === formData.selectedWorkshop)
    };
  };

  const pricing = calculateTotal();

  const handleFormSubmit: SubmitHandler<TPteHomeUkviFormSchema> = (data) => {
    if (currentStep < 3) {
      nextStep();
    } else {
      toast.success("PTE Home UKVI Registration Submitted Successfully!");
      console.log("Final submission data:", data);
    }
  };

  const onInvalid = (errors: any) => {
    console.error("Validation Errors:", errors);
    
    // Create user-friendly field labels
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
      documentNumber: "ID Number",
      documentNumberConfirmed: "ID Confirmation",
      idPolicyRead: "ID Policy Confirmation",
      idDocument: "ID Document Upload",
      infoCorrect: "Final Confirmation Checkbox",
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

      // Scroll to the first error
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
          PTE Home <span className="text-primary">UKVI</span> Registration
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Authorized UK Visa & Immigration (UKVI) test registration portal.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          {currentStep === 0 && <TermsStep onNext={nextStep} />}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              timeSlot={formData.examTime}
              onChange={(date) => form.setValue("examDate", date)}
              onTimeSlotChange={(slot) => form.setValue("examTime", slot)}
              onNext={nextStep}
              onBack={() => goToStep(0)}
              error={form.formState.errors.examDate}
              timeSlotError={form.formState.errors.examTime}
            />
          )}

          {currentStep === 2 && (
            <RegistrationFormStep
              form={form}
              onSubmit={nextStep}
              onInvalid={onInvalid}
              onBack={() => goToStep(1)}
              languages={languages}
              coursesData={PTE_UKVI_COURSES}
              workshopsData={PTE_UKVI_WORKSHOPS}
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
              selectedCourseData={pricing.selectedCourseData}
              selectedWorkshopData={pricing.selectedWorkshopData}
            />
          )}
        </Form>
      </div>
    </div>
  );
}
