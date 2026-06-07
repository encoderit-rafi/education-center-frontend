"use client";
import { format } from "date-fns";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";

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
import { PteHomeB1Schema, type TPteHomeB1Schema } from "./_type";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";

import { ielts_general_courses as COURSES_DATA } from "@/lib/data";

export const WORKSHOPS_DATA = {
  workshop_2: { id: "workshop_2", name: "Workshop 2 Hours", price: 600 },
  workshop_4: { id: "workshop_4", name: "Workshop 4 Hours", price: 1000 },
  workshop_6: { id: "workshop_6", name: "Workshop 6 Hours", price: 1350 },
  workshop_8: { id: "workshop_8", name: "Workshop 8 Hours", price: 1600 },
};

const EXAM_FEE = 1400;
const SERVICE_FEE = 150;

export default function FormPTEHomeB1Registration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TPteHomeB1Schema>({
    resolver: zodResolver(PteHomeB1Schema),
    defaultValues: {
      givenNames: "",
      noGivenNames: false,
      middleName: "",
      noMiddleName: false,
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
      postalAddress1: "",
      postalAddress2: "",
      poBox: "",
      postcode: "",
      city: "",
      mobileNumber: "",
      homeLanguage: "",
      homeLanguageOther: "",
      planningCountry: "",
      currentSituation: "",
      currentSituationOther: "",
      reasonForTaking: "",
      reasonForTakingOther: "",
      studyLevel: "",
      studyLevelOther: "",
      occupationSector: "",
      occupationSectorOther: "",
      referralSource: "",
      referralSourceOther: "",
      fieldOfStudy: "",
      fieldOfStudyOther: "",
      takenBefore: "" as any,
      takenWithinTwoYears: "" as any,
      hasExistingAccount: "" as any,
      marketingPreference: "",
      idType: "passport",
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
    const baseFee = EXAM_FEE;
    const serviceFee = SERVICE_FEE;
    const selectedCourseData = formData.selectedCourse
      ? COURSES_DATA.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? selectedCourseData.discounted_price ?? selectedCourseData.price
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
  const total = pricing.total;

  const paymentMutation = useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      api.post("/payments/initiate", body),
    onSuccess: (response) => {
      const checkoutUrl = response.data?.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found in response");
      }
    },
    onError: (error) => {
      console.error("Payment initiation failed:", error);
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) =>
      api.post("/exam-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      paymentMutation.mutate({
        booking_type: "exam_booking",
        booking_id: bookingId,
        provider: (formData as any).paymentMethod,
        amount: total,
        currency: "AED",
      });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const handleFormSubmit: SubmitHandler<TPteHomeB1Schema> = (data) => {
    if (currentStep < 3) {
      nextStep();
    } else {
      bookingMutation.mutate({
        exam_id: "pte-home-b1",
        given_names: data.givenNames,
        middle_name: data.middleName,
        surnames: data.surnames,
        date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
        gender: data.gender,
        email: data.emailUsername,
        place_of_birth: data.placeOfBirth,
        country_of_birth: data.countryOfBirth,
        country_of_citizenship: data.countryOfCitizenship,
        country_of_residence: data.countryOfResidence,
        postal_address_1: data.postalAddress1,
        postal_address_2: data.postalAddress2,
        po_box: data.poBox,
        postcode: data.postcode,
        city: data.city,
        mobile_number: data.mobileNumber,
        home_language: data.homeLanguage,
        planning_country: data.planningCountry,
        current_situation: data.currentSituation,
        reason_for_taking: data.reasonForTaking,
        study_level: data.studyLevel,
        occupation_sector: data.occupationSector,
        id_type: data.idType,
        id_number: data.idNumber,
        id_country_of_issue: data.idCountryOfIssue,
        selected_course: data.selectedCourse,
        selected_workshop: data.selectedWorkshop,
        payment_methods: (data as any).paymentMethod,
        exam_time: data.examTime,
        total_amount: total,
      });
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
          PTE Home <span className="text-primary">B1</span> Registration
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Authorized Pearson PTE Home B1 test registration portal.
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
            <GlobalReviewStep
              onEdit={() => goToStep(2)}
              onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
              paymentMethodValue={(formData as any)?.paymentMethod}
              onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="PTE Home B1 Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={
                formData.selectedCourse
                  ? COURSES_DATA.find((c: any) => c.id === formData.selectedCourse)
                  : undefined
              }
              selectedWorkshopData={formData.selectedWorkshop ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop] : undefined}
              reviewStepNumber={3}
              paymentStepNumber={4}
            >
              <ReviewSummaryGrid
                personalDetails={[
                  { label: "Given Names", value: formData.noGivenNames ? "N/A" : formData.givenNames },
                  { label: "Middle Name", value: formData.middleName || "N/A" },
                  { label: "Surnames", value: formData.noSurname ? "N/A" : formData.surnames },
                  { label: "Date of Birth", value: formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A" },
                  { label: "Sex", value: formData.gender || "N/A" },
                  { label: "Mobile Number", value: formData.mobileNumber || "N/A" },
                  { label: "Nationality", value: formData.countryOfCitizenship || "N/A" },
                ]}
                identityContact={[
                  { label: "ID Type", value: formData.idType?.replace("_", " ") },
                  { label: "ID Number", value: formData.idNumber || "N/A" },
                  { label: "Email", value: formData.emailUsername },
                  { label: "ID Expiry Date", value: formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A" },
                  { label: "Identity Document", value: formData.passportCopy ? (formData.passportCopy as File).name : "No file attached" },
                ]}
                testInformation={[
                  { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                  { label: "Time Slot", value: formData.examTime || "N/A" },
                  { label: "Address Line 1", value: formData.postalAddress1 },
                  ...(formData.postalAddress2 ? [{ label: "Address Line 2", value: formData.postalAddress2 }] : []),
                  { label: "Emirate / City", value: formData.city },
                  { label: "Country of Residence", value: formData.countryOfResidence },
                  { label: "First Language", value: formData.homeLanguage || "N/A" },
                  { label: "Reason for Test", value: formData.reasonForTaking },
                  { label: "Current Situation", value: formData.currentSituation },
                ]}
              />
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
