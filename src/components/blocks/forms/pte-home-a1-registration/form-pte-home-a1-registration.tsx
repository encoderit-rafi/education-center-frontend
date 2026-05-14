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
import { RefinedPteHomeA1Schema, type TPteHomeA1FormSchema } from "./_type";

const PTE_A1_COURSES = [
  { id: "group", label: "Group (In-person classroom-based course)", price: 1850 },
  { id: "semi-private", label: "Semi-Private (In-person classroom-based)", price: 2850 },
  { id: "private", label: "Private one-to-one (In-person classroom)", price: 4850 },
  { id: "online", label: "Private one-to-one (Online course)", price: 3850 },
];

const PTE_A1_WORKSHOPS = [
  { id: "workshop_2", name: "Workshop 2 Hours", price: 600 },
  { id: "workshop_4", name: "Workshop 4 Hours", price: 1000 },
  { id: "workshop_6", name: "Workshop 6 Hours", price: 1350 },
  { id: "workshop_8", name: "Workshop 8 Hours", price: 1600 },
];

const EXAM_FEE = 1450;
const SERVICE_FEE = 100;

export default function FormPTEHomeA1Registration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteHomeA1FormSchema>({
    resolver: zodResolver(RefinedPteHomeA1Schema),
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
      readyToBook: "yes",
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
      marketingConsent: "none",
      idType: "",
      idCountryOfIssue: "",
      documentNumber: "",
      documentNumberConfirmed: true,
      idPolicyRead: true,
      selectedCourse: "",
      selectedWorkshop: "",
      idDocument: undefined,
      userPhoto: undefined,
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
    const selectedCourseData = PTE_A1_COURSES.find(c => c.id === formData.selectedCourse);
    if (selectedCourseData) {
      subtotal += selectedCourseData.price;
    }
    
    const selectedWorkshopData = PTE_A1_WORKSHOPS.find(w => w.id === formData.selectedWorkshop);
    if (selectedWorkshopData) {
      subtotal += selectedWorkshopData.price;
    }
    
    const vat = subtotal * 0.05;
    return {
      baseFee: EXAM_FEE,
      serviceFee: SERVICE_FEE,
      vat: vat,
      total: subtotal + vat,
      selectedCourseData,
      selectedWorkshopData: PTE_A1_WORKSHOPS.find(w => w.id === formData.selectedWorkshop)
    };
  };

  const pricing = calculateTotal();

  const handleFormSubmit: SubmitHandler<TPteHomeA1FormSchema> = (data) => {
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
      toast.success("PTE Home A1 Registration Submitted Successfully!");
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
          PTE Home <span className="text-primary">A1</span> Registration
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Authorized Pearson PTE Home A1 test registration portal.
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
              coursesData={PTE_A1_COURSES}
              workshopsData={PTE_A1_WORKSHOPS}
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
              selectedCourseData={pricing.selectedCourseData}
              selectedWorkshopData={pricing.selectedWorkshopData}
            />
          )}
        </Form>
      </div>
    </div>
  );
}
