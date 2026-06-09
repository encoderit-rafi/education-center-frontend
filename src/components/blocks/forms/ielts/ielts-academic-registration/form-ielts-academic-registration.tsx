"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./_type";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { format } from "date-fns";
import { User, ShieldCheck, Globe } from "lucide-react";
import { toast } from "sonner";
import {
  GlobalReviewStep,
  ReviewSummaryGrid,
} from "@/components/blocks/forms/global-review-step";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";

// Static courses and workshops data removed to be loaded dynamically from the API

interface FormProps {
  examId?: string;
}

export default function FormIeltsAcademicRegistration({ examId: initialExamId }: FormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const { data: examDetailResponse } = useQuery({
    queryKey: ["exam-detail", "ielts-academic"],
    queryFn: async () => {
      const response = await api.get("/exams/ielts-academic");
      return response.data;
    },
    enabled: !initialExamId,
  });

  const examId = initialExamId || examDetailResponse?.data?.id;

  const { data: courseDetailResponse } = useQuery({
    queryKey: ["course-detail", "ielts"],
    queryFn: async () => {
      const response = await api.get("/courses/ielts");
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

  const form = useForm<TIeltsAcademicSchema>({
    resolver: zodResolver(IeltsAcademicSchema),
    defaultValues: {
      testModule: "Academic",
      givenNames: "",
      middleName: "",
      birthCity: "",
      birthCountry: "",
      surnames: "",
      noSurname: false,
      postcode: "",
      poBox: "",
      dateOfBirth: undefined,
      sex: "",
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: "United Arab Emirates",
      postalAddress1: "",
      postalAddress2: "",
      city: "",
      idType: "",
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      idDocument: undefined,
      takenBefore: "",
      lessThanTwoYears: "",
      existingAccount: "",
      firstLanguage: "",
      firstLanguageOther: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationLevelOther: "",
      occupationSector: "",
      occupationSectorOther: "",
      reasonForTakingTest: "",
      reasonForTakingTestOther: "",
      destinationCountry: "",
      marketingPreference: "",
      selectedCourse: "",
      selectedWorkshop: "",
      paymentMethod: "",
      examTimeSlot: "",
      speakingSlot: "",
      examDate: undefined,
    },
  });

  const formData = form.watch();

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateTotal = () => {
    const baseFee = 1400;
    const serviceFee = 150;
    const selectedCourseData = formData.selectedCourse
      ? coursesData.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? selectedCourseData.discounted_price ?? selectedCourseData.price
      : 0;
    const workshopPrice = formData.selectedWorkshop
      ? (workshopsData as any)[formData.selectedWorkshop]?.price || 0
      : 0;

    const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;

    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal,
      vat: 0,
      total: subtotal,
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
        toast.success("Redirecting to checkout...", { id: "ielts-submit" });
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found in response");
        toast.error("Checkout URL not found in server response.", { id: "ielts-submit" });
      }
    },
    onError: (error: any) => {
      console.error("Payment initiation failed:", error);
      toast.error(error?.response?.data?.message || "Payment initiation failed.", { id: "ielts-submit" });
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) =>
      api.post("/exam-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      toast.loading("Initiating payment...", { id: "ielts-submit" });
      paymentMutation.mutate({
        booking_type: "exam_booking",
        booking_id: bookingId,
        provider: formData.paymentMethod,
        amount: total,
        currency: "AED",
      });
    },
    onError: (error: any) => {
      console.error("Booking failed:", error);
      toast.error(error?.response?.data?.message || "Exam booking failed.", { id: "ielts-submit" });
    },
  });

  const handleFormSubmit: SubmitHandler<TIeltsAcademicSchema> = async (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      try {
        toast.loading("Uploading ID document...", { id: "ielts-submit" });

        let idDocumentUrl = "";
        if (data.idDocument instanceof File) {
          const uploadFormData = new FormData();
          uploadFormData.append("file", data.idDocument);

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
          toast.error("Exam details are still loading. Please try again in a moment.", { id: "ielts-submit" });
          return;
        }

        toast.loading("Submitting booking request...", { id: "ielts-submit" });

        bookingMutation.mutate({
          exam_id: examId,
          test_module: data.testModule,
          given_names: data.givenNames,
          first_name: data.givenNames,
          middle_name: data.middleName,
          birth_city: data.birthCity,
          birth_country: data.birthCountry,
          surnames: data.surnames,
          last_name: data.surnames || "",
          date_of_birth: data.dateOfBirth
            ? new Date(data.dateOfBirth as any).toISOString()
            : "",
          sex: data.sex,
          email: data.email,
          mobile_number: data.mobileNumber,
          phone: data.mobileNumber,
          residence_country: data.residenceCountry,
          postal_address_1: data.postalAddress1,
          postal_address_2: data.postalAddress2,
          city: data.city,
          postcode: data.postcode,
          po_box: data.poBox,
          id_type: data.idType === "emirates_id" ? "emirates" : data.idType,
          id_number: data.idNumber,
          id_expiry_date: data.idExpiryDate
            ? new Date(data.idExpiryDate as any).toISOString()
            : "",
          id_document: idDocumentUrl,
          issuing_authority: data.issuingAuthority,
          nationality: data.nationality,
          taken_before: data.takenBefore,
          less_than_two_years: data.lessThanTwoYears,
          existing_account: data.existingAccount,
          first_language: data.firstLanguage === "Other"
            ? data.firstLanguageOther || "Other"
            : data.firstLanguage,
          years_studying_english: data.yearsStudyingEnglish,
          education_level: data.educationLevel,
          occupation_level: data.occupationLevel === "Other"
            ? data.occupationLevelOther || "Other"
            : data.occupationLevel,
          occupation_sector: data.occupationSector === "Other"
            ? data.occupationSectorOther || "Other"
            : data.occupationSector,
          reason_for_taking_test: data.reasonForTakingTest === "other"
            ? data.reasonForTakingTestOther || "other"
            : data.reasonForTakingTest,
          destination_country: data.destinationCountry,
          marketing_preference: data.marketingPreference,
          selected_course: data.selectedCourse,
          selected_workshop: data.selectedWorkshop,
          payment_methods: data.paymentMethod,
          exam_time_slot: data.examTimeSlot,
          speaking_slot: data.speakingSlot,
          exam_fee: pricing.baseFee,
          total_amount: total,
          exam_date: data.examDate
            ? new Date(data.examDate as any).toISOString()
            : "",
        });
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(error?.message || "Something went wrong during submission.", { id: "ielts-submit" });
      }
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
          IELTS Academic <span className="text-primary">Registration</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          {currentStep === 0 && <TermsStep onNext={() => goToStep(1)} />}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              timeSlot={formData.examTimeSlot}
              speakingSlot={formData.speakingSlot}
              onChange={(date) => form.setValue("examDate", date)}
              onTimeSlotChange={(slot) => {
                form.setValue("examTimeSlot", slot as any);
                form.setValue("speakingSlot", "");
              }}
              onSpeakingSlotChange={(slot) =>
                form.setValue("speakingSlot", slot)
              }
              onNext={() => goToStep(2)}
              onBack={() => goToStep(0)}
              error={form.formState.errors.examDate}
              timeSlotError={form.formState.errors.examTimeSlot}
              speakingSlotError={form.formState.errors.speakingSlot}
            />
          )}
          {currentStep === 2 && (
            <RegistrationFormStep
              form={form}
              onSubmit={handleFormSubmit}
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
              onPaymentMethodChange={(val) =>
                (form.setValue as any)("paymentMethod", val)
              }
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="IELTS Academic Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={
                formData.selectedCourse
                  ? coursesData.find((c: any) => c.id === formData.selectedCourse)
                  : undefined
              }
              selectedWorkshopData={
                formData.selectedWorkshop
                  ? (workshopsData as any)[formData.selectedWorkshop]
                  : undefined
              }
              reviewStepNumber={4}
              paymentStepNumber={5}
            >
              <ReviewSummaryGrid
                personalDetails={[
                  { label: "Given Names", value: formData.givenNames },
                  { label: "Middle Name", value: formData.middleName || "N/A" },
                  { label: "Surnames", value: formData.surnames || "N/A" },
                  {
                    label: "Date of Birth",
                    value: formData.dateOfBirth
                      ? format(new Date(formData.dateOfBirth as any), "PPP")
                      : "N/A",
                  },
                  { label: "Gender", value: formData.sex || "N/A" },
                  { label: "City of Birth", value: formData.birthCity || "N/A" },
                  { label: "Country of Birth", value: formData.birthCountry || "N/A" },
                  {
                    label: "Mobile Number",
                    value: formData.mobileNumber || "N/A",
                  },
                  {
                    label: "Nationality",
                    value: formData.nationality || "N/A",
                  },
                ]}
                identityContact={[
                  {
                    label: "ID Type",
                    value: formData.idType?.replace("_", " "),
                  },
                  { label: "ID Number", value: formData.idNumber || "N/A" },
                  { label: "Email", value: formData.email },
                  {
                    label: "ID Expiry Date",
                    value: formData.idExpiryDate
                      ? format(new Date(formData.idExpiryDate as any), "PPP")
                      : "N/A",
                  },
                  {
                    label: "Identity Document",
                    value: formData.idDocument
                      ? (formData.idDocument as File).name
                      : "No file attached",
                  },
                  {
                    label: "Issuing Authority",
                    value: formData.issuingAuthority || "N/A",
                  },
                ]}
                testInformation={[
                  {
                    label: "Exam Date",
                    value: formData.examDate
                      ? format(new Date(formData.examDate as any), "PPP")
                      : "N/A",
                    highlight: true,
                  },
                  {
                    label: "Time Slot",
                    value:
                      formData.examTimeSlot === "9:00 AM"
                        ? "Morning Session (09:00 AM)"
                        : formData.examTimeSlot === "1:00 PM"
                          ? "Afternoon Session (01:00 PM)"
                          : "Morning Session",
                  },
                  {
                    label: "Speaking Slot",
                    value: formData.speakingSlot || "Not selected",
                  },
                  { label: "Address Line 1", value: formData.postalAddress1 },
                  ...(formData.postalAddress2
                    ? [
                        {
                          label: "Address Line 2",
                          value: formData.postalAddress2,
                        },
                      ]
                    : []),
                  { label: "Emirate / City", value: formData.city },
                  {
                    label: "Country of Residence",
                    value: formData.residenceCountry,
                  },
                  { label: "P.O. Box", value: formData.poBox || "N/A" },
                  { label: "Postal Code", value: formData.postcode || "N/A" },
                  {
                    label: "First Language",
                    value: formData.firstLanguage === "Other"
                      ? formData.firstLanguageOther || "Other (not specified)"
                      : formData.firstLanguage || "N/A",
                  },
                  {
                    label: "Occupation Level",
                    value: formData.occupationLevel === "Other"
                      ? formData.occupationLevelOther || "Other (not specified)"
                      : formData.occupationLevel || "N/A",
                  },
                  {
                    label: "Occupation Sector",
                    value: formData.occupationSector === "Other"
                      ? formData.occupationSectorOther || "Other (not specified)"
                      : formData.occupationSector || "N/A",
                  },
                  {
                    label: "Reason for Test",
                    value: formData.reasonForTakingTest === "other"
                      ? formData.reasonForTakingTestOther || "Other (not specified)"
                      : formData.reasonForTakingTest || "N/A",
                  },
                  {
                    label: "Education Level",
                    value: formData.educationLevel || "N/A",
                  },
                ]}
              />
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
