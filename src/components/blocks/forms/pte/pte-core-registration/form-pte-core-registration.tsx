"use client";
import { format } from "date-fns";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";

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
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";

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
    let subtotal = EXAM_FEE + SERVICE_FEE;
    if (formData.selectedCourse) {
      subtotal += (PTE_CORE_COURSES as any)[formData.selectedCourse]?.price || 0;
    }
    if (formData.selectedWorkshop) {
      subtotal += (PTE_CORE_WORKSHOPS as any)[formData.selectedWorkshop]?.price || 0;
    }
    
    const total = subtotal;
    return {
      baseFee: EXAM_FEE,
      serviceFee: SERVICE_FEE,
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
      bookingMutation.mutate({
        exam_id: "pte-core",
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
            <GlobalReviewStep
              onEdit={() => goToStep(2)}
              onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
              paymentMethodValue={(formData as any)?.paymentMethod}
              onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="PTE Core Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={formData.selectedCourse ? (PTE_CORE_COURSES as any)[formData.selectedCourse] : undefined}
              selectedWorkshopData={formData.selectedWorkshop ? (PTE_CORE_WORKSHOPS as any)[formData.selectedWorkshop] : undefined}
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
                  { label: "Reason for Test", value: formData.reasonForTaking },
                ]}
              />
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
