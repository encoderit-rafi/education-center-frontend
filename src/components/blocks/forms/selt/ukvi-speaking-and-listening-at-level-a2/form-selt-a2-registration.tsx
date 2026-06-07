"use client";
import { format } from "date-fns";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { EXAM_IDS_DATA } from "@/data";
import { SeltA1Schema, type TSeltA1Schema } from "./_type/selt";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";

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

import { ielts_general_courses as COURSES_DATA } from "@/lib/data";

export default function FormSELTA2Registration() {
  const [currentStep, setCurrentStep] = useState(0); 
  const initialId = "selt-a2";
  const examName = Object.values(EXAM_IDS_DATA).find(e => e.id === initialId)?.name || "SELT A2";

  const form = useForm<TSeltA1Schema>({
    resolver: zodResolver(SeltA1Schema) as any,
    defaultValues: {
      testModule: initialId,
      givenNames: "",
      middleName: "",
      surnames: "",
      noSurname: false,
      postcode: "",
      poBox: "",
      dateOfBirth: undefined,
      sex: "",
      cityOfBirth: "",
      countryOfBirth: "",
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
      takenBefore: "",
      lessThanTwoYears: "",
      existingAccount: "",
      firstLanguage: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      marketingPreference: "",
      reasonForTest: "",
      reasonForTestOther: "",
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
    const levelFees: Record<string, number> = {
      "selt-a1": 650,
      "selt-a2": 650,
      "selt-b1": 650,
      "selt-b1-r-w": 870,
      "selt-b2": 870,
      "selt-c1": 870,
      "selt-c2": 870,
    };

    const baseFee = levelFees[initialId] || 650;
    const serviceFee = 150;
    const selectedCourseData = formData.selectedCourse
      ? COURSES_DATA.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? selectedCourseData.discounted_price ?? selectedCourseData.price
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
        provider: formData.paymentMethod,
        amount: total,
        currency: "AED",
      });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const handleFormSubmit: SubmitHandler<TSeltA1Schema> = (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      bookingMutation.mutate({
        exam_id: initialId || "",
        test_module: data.testModule,
        given_names: data.givenNames,
        middle_name: data.middleName,
        surnames: data.surnames,
        date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
        sex: data.sex,
        city_of_birth: data.cityOfBirth,
        country_of_birth: data.countryOfBirth,
        reason_for_test: data.reasonForTest,
        reason_for_test_other: data.reasonForTestOther,
        email: data.email,
        mobile_number: data.mobileNumber,
        residence_country: data.residenceCountry,
        postal_address_1: data.postalAddress1,
        postal_address_2: data.postalAddress2,
        city: data.city,
        postcode: data.postcode,
        po_box: data.poBox,
        id_type: data.idType,
        id_number: data.idNumber,
        issuing_authority: data.issuingAuthority,
        nationality: data.nationality,
        taken_before: data.takenBefore,
        less_than_two_years: data.lessThanTwoYears,
        existing_account: data.existingAccount,
        first_language: data.firstLanguage,
        years_studying_english: data.yearsStudyingEnglish,
        education_level: data.educationLevel,
        occupation_level: data.occupationLevel,
        occupation_sector: data.occupationSector,
        reason_for_taking_test: data.reasonForTakingTest,
        destination_country: data.destinationCountry,
        marketing_preference: data.marketingPreference,
        selected_course: data.selectedCourse,
        selected_workshop: data.selectedWorkshop,
        payment_methods: data.paymentMethod,
        exam_time_slot: data.examTimeSlot,
        total_amount: total,
      });
    }
  };

  const onInvalid = (errors: any) => {
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
            <GlobalReviewStep
              onEdit={() => goToStep(2)}
              onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
              paymentMethodValue={formData.paymentMethod}
              onPaymentMethodChange={(val) => form.setValue("paymentMethod", val as any)}
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName={examName}
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={formData.selectedCourse ? COURSES_DATA.find((c: any) => c.id === formData.selectedCourse) : undefined}
              selectedWorkshopData={formData.selectedWorkshop ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop] : undefined}
              reviewStepNumber={4}
              paymentStepNumber={5}
            >
              <ReviewSummaryGrid
                personalDetails={[
                  { label: "Given Names", value: formData.givenNames },
                  { label: "Middle Name", value: formData.middleName || "N/A" },
                  { label: "Surnames", value: formData.surnames || "N/A" },
                  { label: "Date of Birth", value: formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A" },
                  { label: "Sex", value: formData.sex || "N/A" },
                  { label: "City of Birth", value: formData.cityOfBirth || "N/A" },
                  { label: "Country of Birth", value: formData.countryOfBirth || "N/A" },
                  { label: "Mobile Number", value: formData.mobileNumber || "N/A" },
                  { label: "Nationality", value: formData.nationality || "N/A" },
                  { label: "Reason for Test", value: formData.reasonForTest === "ukvi" ? "UKVI – For UK Visa and Immigration applications" : formData.reasonForTest === "other" ? `Other: ${formData.reasonForTestOther || "N/A"}` : "N/A" },
                ]}
                identityContact={[
                  { label: "ID Type", value: formData.idType?.replace(/_/g, " ") },
                  { label: "ID Number", value: formData.idNumber || "N/A" },
                  { label: "Email", value: formData.email },
                  { label: "ID Expiry Date", value: formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A" },
                  { label: "Identity Document", value: formData.idDocument ? (formData.idDocument as File).name : "No file attached" },
                  { label: "Issuing Authority", value: formData.issuingAuthority || "N/A" },
                ]}
                testInformation={[
                  { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                  { label: "Time Slot", value: formData.examTimeSlot },
                  { label: "Address", value: `${formData.postalAddress1}, ${formData.city}` },
                  { label: "First Language", value: formData.firstLanguage || "N/A" },
                  { label: "Education Level", value: formData.educationLevel || "N/A" },
                ]}
              />
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
