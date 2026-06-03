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
import { RefinedPteHomeUkviSchema, type TPteHomeUkviFormSchema } from "./_type";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";

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
      marketingConsent: "",
      idType: "passport",
      idCountryOfIssue: "",
      idNumber: "",
      idExpiryDate: undefined,
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

  const handleFormSubmit: SubmitHandler<TPteHomeUkviFormSchema> = (data) => {
    if (currentStep < 3) {
      nextStep();
    } else {
      bookingMutation.mutate({
        exam_id: "pte-home-ukvi",
        given_names: data.givenNames,
        middle_names: data.middleNames,
        surnames: data.surnames,
        date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
        gender: data.gender,
        email: data.emailUsername,
        place_of_birth: data.placeOfBirth,
        country_of_birth: data.countryOfBirth,
        country_of_citizenship: data.countryOfCitizenship,
        country_of_residence: data.countryOfResidence,
        address: data.address,
        city: data.city,
        mobile_number: data.mobileNumber,
        home_language: data.homeLanguage,
        planning_country: data.planningCountry,
        current_situation: data.currentSituation,
        reason_for_taking: data.reasonForTaking,
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
      idNumber: "ID Number",
      idExpiryDate: "ID Expiry Date",
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
            <GlobalReviewStep
              onEdit={() => goToStep(2)}
              onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
              paymentMethodValue={(formData as any)?.paymentMethod}
              onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="PTE Academic UKVI Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={formData.selectedCourse ? PTE_UKVI_COURSES.find(c => c.id === formData.selectedCourse) : undefined}
              selectedWorkshopData={formData.selectedWorkshop ? PTE_UKVI_WORKSHOPS.find(w => w.id === formData.selectedWorkshop) : undefined}
              reviewStepNumber={3}
              paymentStepNumber={4}
            >
              <ReviewSummaryGrid
                personalDetails={[
                  { label: "Given Names", value: formData.noGivenNames ? "N/A" : formData.givenNames },
                  ...((formData as any).middleNames ? [{ label: "Middle Names", value: (formData as any).middleNames }] : []),
                  { label: "Surnames", value: formData.noSurname ? "N/A" : formData.surnames },
                  { label: "Date of Birth", value: formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A" },
                  { label: "Sex", value: formData.gender || "N/A" },
                  { label: "Mobile Number", value: formData.mobileNumber || "N/A" },
                  { label: "Nationality", value: formData.countryOfCitizenship || "N/A" },
                ]}
                identityContact={[
                  { label: "ID Type", value: formData.idType?.replace("_", " ") },
                  { label: "ID Number", value: formData.idNumber || "N/A" },
                  { label: "Email", value: (formData as any).emailUsername },
                  { label: "ID Expiry Date", value: formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A" },
                  { label: "Identity Document", value: (formData as any).idDocument ? ((formData as any).idDocument as File).name : "No file attached" },
                ]}
                testInformation={[
                  { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                  { label: "Time Slot", value: (formData as any).examTime || "N/A" },
                  { label: "Full Address", value: (formData as any).address },
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
