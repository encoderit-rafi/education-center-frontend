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
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";





const EXAM_FEE = 1450;
const SERVICE_FEE = 100;

interface FormProps {
  examId?: string;
}

export default function FormPTECoreRegistration({ examId: initialExamId }: FormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const { data: examDetailResponse } = useQuery({
    queryKey: ["exam-detail", "pte-core"],
    queryFn: async () => {
      const response = await api.get("/exams/pte-core");
      return response.data;
    },
    enabled: !initialExamId,
  });

  const examId = initialExamId || examDetailResponse?.data?.id;

  const { data: courseDetailResponse } = useQuery({
    queryKey: ["course-detail", "pte"],
    queryFn: async () => {
      const response = await api.get("/courses/pte");
      return response.data;
    },
  });

  const courseDetail = courseDetailResponse?.data;
  const dbPackages = courseDetail?.packages || [];
  const dbWorkshops = courseDetail?.workshops || [];

  const coursesData = dbPackages.map((pkg: any) => {
    const basePrice = parseFloat(pkg.price) || 0;
    const discount = parseFloat(pkg.discountValue) || 0;
    const discountedPrice =
      pkg.discountType === "PERCENTAGE"
        ? Math.round(basePrice * (1 - discount / 100))
        : basePrice - discount;

    return {
      id: pkg.id,
      name: pkg.name,
      price: basePrice,
      discounted_price: discountedPrice,
      currency: "AED",
    };
  });

  const workshopsData = (dbWorkshops || []).reduce((acc: any, w: any) => {
    const basePrice = parseFloat(w.price) || 0;
    const discount = parseFloat(w.discountValue) || 0;
    const discountedPrice =
      w.discountType === "PERCENTAGE"
        ? Math.round(basePrice * (1 - discount / 100))
        : basePrice - discount;

    acc[w.id] = {
      id: w.id,
      name: w.name,
      duration: w.duration,
      price: discountedPrice,
      currency: "AED",
    };
    return acc;
  }, {});
  

  const form = useForm<TPteCoreSchema>({
    resolver: zodResolver(PteCoreSchema),
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
      ? coursesData.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? selectedCourseData.discounted_price ?? selectedCourseData.price
      : 0;

    const selectedWorkshopData = formData.selectedWorkshop ? (workshopsData as any)[formData.selectedWorkshop] : null;
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

  const paymentMutation = useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      api.post("/payments/initiate", body),
    onSuccess: (response) => {
      const checkoutUrl = response.data?.data?.checkoutUrl;
      if (checkoutUrl) {
        toast.success("Redirecting to checkout...", { id: "pte-submit" });
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found in response");
        toast.error("Checkout URL not found in server response.", { id: "pte-submit" });
      }
    },
    onError: (error: any) => {
      console.error("Payment initiation failed:", error);
      toast.error(error?.response?.data?.message || "Payment initiation failed.", { id: "pte-submit" });
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) =>
      api.post("/exam-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      toast.loading("Initiating payment...", { id: "pte-submit" });
      paymentMutation.mutate({
        booking_type: "exam_booking",
        booking_id: bookingId,
        provider: (formData as any).paymentMethod,
        amount: total,
        currency: "AED",
      });
    },
    onError: (error: any) => {
      console.error("Booking failed:", error);
      toast.error(error?.response?.data?.message || "Exam booking failed.", { id: "pte-submit" });
    },
  });

  const handleFormSubmit: SubmitHandler<TPteCoreSchema> = async (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      try {
        toast.loading("Uploading ID document...", { id: "pte-submit" });

        let idDocumentUrl = "";
        if (data.passportCopy instanceof File) {
          const uploadFormData = new FormData();
          uploadFormData.append("file", data.passportCopy);

          const uploadRes = await api.post("/files/upload", uploadFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          const relativeUrl = uploadRes.data?.url;
          if (!relativeUrl) {
            throw new Error("Failed to upload identity document.");
          }

          const apiBase = api.defaults.baseURL || "https://vote.encoder-test-vpn.space/api/v1";
          const apiHost = apiBase.replace("/api/v1", "");
          idDocumentUrl = relativeUrl.startsWith("http")
            ? relativeUrl
            : `${apiHost}${relativeUrl}`;
        }

        if (!examId) {
          toast.error("Exam details are still loading. Please try again in a moment.", { id: "pte-submit" });
          return;
        }

        toast.loading("Submitting booking request...", { id: "pte-submit" });

        bookingMutation.mutate({
          exam_id: examId,
          given_names: data.givenNames,
          first_name: data.noGivenNames ? "N/A" : data.givenNames,
          middle_name: data.middleName,
          surnames: data.surnames,
          last_name: data.noSurname ? "N/A" : data.surnames || "",
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
          phone: data.mobileNumber,
          home_language: data.homeLanguage,
          planning_country: data.planningCountry,
          current_situation: data.currentSituation,
          reason_for_taking: data.reasonForTaking,
          study_level: data.studyLevel,
          occupation_sector: data.occupationSector,
          id_type: (data.idType as string) === "emirates_id" ? "emirates" : data.idType,
          id_number: data.idNumber,
          id_country_of_issue: data.idCountryOfIssue,
          selected_course: data.selectedCourse,
          selected_workshop: data.selectedWorkshop,
          payment_methods: (formData as any).paymentMethod,
          exam_time: data.examTime,
          exam_fee: pricing.baseFee,
          total_amount: total,
          exam_date: data.examDate ? new Date(data.examDate as any).toISOString() : "",
          id_expiry_date: data.idExpiryDate ? new Date(data.idExpiryDate as any).toISOString() : "",
          id_document: idDocumentUrl,
          nationality: data.countryOfCitizenship,
        });
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(error?.message || "Something went wrong during submission.", { id: "pte-submit" });
      }
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
              coursesData={coursesData}
              workshopsData={workshopsData}
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
              selectedCourseData={
                formData.selectedCourse
                  ? coursesData.find((c: any) => c.id === formData.selectedCourse)
                  : undefined
              }
              selectedWorkshopData={formData.selectedWorkshop ? (workshopsData as any)[formData.selectedWorkshop] : undefined}
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
