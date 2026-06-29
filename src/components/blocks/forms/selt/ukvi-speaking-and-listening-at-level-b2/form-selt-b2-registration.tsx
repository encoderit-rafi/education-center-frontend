"use client";
import { format } from "date-fns";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";
import { getEducationLevelLabel } from "@/lib/utils";
import { PriceDisplay } from "@/components/ui/price-display";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { EXAM_IDS_DATA } from "@/data";
import { SeltA1Schema, type TSeltA1Schema } from "./_type/selt";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";

// Steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";





interface FormProps {
  examId?: string;
}

export default function FormSELTB2Registration({ examId: initialExamId }: FormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0); 
  const initialId = "selt-b2";

  const { data: examsResponse } = useQuery({
    queryKey: ["exams-list"],
    queryFn: async () => {
      const response = await api.get("/exams", { params: { limit: 100 } });
      return response.data;
    },
  });

  const examsList = examsResponse?.data?.data || [];
  const activeExam = initialExamId
    ? examsList.find((e: any) => e.id === initialExamId)
    : examsList.find((e: any) => e.slug === "ukvi-speaking-listening-reading-and-writing-at-level-b2");

  const examId = initialExamId || activeExam?.id;

  const { data: courseDetailResponse } = useQuery({
    queryKey: ["course-detail", "skill-for-english-selt"],
    queryFn: async () => {
      const response = await api.get("/courses/skill-for-english-selt");
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
  
  const examName = activeExam?.name || Object.values(EXAM_IDS_DATA).find(e => e.id === initialId)?.name || "SELT B2";

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
    const baseFee = activeExam?.examFee && parseFloat(activeExam.examFee) > 0 ? parseFloat(activeExam.examFee) : 880;
    const serviceFee = activeExam?.additionalFee && parseFloat(activeExam.additionalFee) > 0 ? parseFloat(activeExam.additionalFee) : 150;
    const selectedCourseData = formData.selectedCourse
      ? coursesData.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? selectedCourseData.discounted_price ?? selectedCourseData.price
      : 0;
    const workshopPrice = formData.selectedWorkshop
      ? (workshopsData as any)[formData.selectedWorkshop].price
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
        toast.success("Redirecting to checkout...", { id: "selt-submit" });
        if (window.top && window.top !== window) {
          window.top.location.href = checkoutUrl;
        } else {
          window.location.href = checkoutUrl;
        }
      } else {
        console.error("Checkout URL not found in response");
        toast.error("Checkout URL not found in server response.", { id: "selt-submit" });
      }
    },
    onError: (error: any) => {
      console.error("Payment initiation failed:", error);
      toast.error(error?.response?.data?.message || "Payment initiation failed.", { id: "selt-submit" });
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) =>
      api.post("/exam-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      toast.loading("Initiating payment...", { id: "selt-submit" });
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
      toast.error(error?.response?.data?.message || "Exam booking failed.", { id: "selt-submit" });
    },
  });

  const handleFormSubmit: SubmitHandler<TSeltA1Schema> = async (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      try {
        toast.loading("Uploading ID document...", { id: "selt-submit" });

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
          toast.error("Exam details are still loading. Please try again in a moment.", { id: "selt-submit" });
          return;
        }

        toast.loading("Submitting booking request...", { id: "selt-submit" });

        bookingMutation.mutate({
          exam_id: examId,
          test_module: data.testModule,
          given_names: data.givenNames,
          first_name: data.givenNames,
          middle_name: data.middleName,
          surnames: data.surnames,
          last_name: data.surnames || "",
          date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
          sex: data.sex,
          city_of_birth: data.cityOfBirth,
          country_of_birth: data.countryOfBirth,
          reason_for_test: data.reasonForTest,
          reason_for_test_other: data.reasonForTestOther,
          email: data.email,
          mobile_number: data.mobileNumber,
          phone: data.mobileNumber,
          residence_country: data.residenceCountry,
          postal_address_1: data.postalAddress1,
          postal_address_2: data.postalAddress2,
          city: data.city,
          postcode: data.postcode,
          po_box: data.poBox,
          id_type: data.idType === "passport" ? "passport" : "others",
          id_number: data.idNumber,
          id_expiry_date: data.idExpiryDate ? new Date(data.idExpiryDate as any).toISOString() : "",
          id_document: idDocumentUrl,
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
          exam_fee: pricing.baseFee,
          total_amount: total,
          exam_date: data.examDate ? new Date(data.examDate as any).toISOString() : "",
        });
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(error?.message || "Something went wrong during submission.", { id: "selt-submit" });
      }
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
          {currentStep === 0 && (
            <TermsStep
              onNext={() => goToStep(1)}
              examFee={pricing.baseFee}
              additionalFee={pricing.serviceFee}
            />
          )}

          {currentStep === 1 && (
            <DateStep
              value={formData.examDate}
              timeSlot={formData.examTimeSlot}
              onChange={(date) => {
                form.setValue("examDate", date);
                form.setValue("examTimeSlot", "");
              }}
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
              coursesData={coursesData}
              workshopsData={workshopsData}
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
              selectedCourseData={formData.selectedCourse ? coursesData.find((c: any) => c.id === formData.selectedCourse) : undefined}
              selectedWorkshopData={formData.selectedWorkshop ? (workshopsData as any)[formData.selectedWorkshop] : undefined}
              reviewStepNumber={4}
              paymentStepNumber={5}
              customOrderSummary={
                <>
                  {activeExam?.usdExamFee && parseFloat(activeExam.usdExamFee) > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">USD Exam Fee</span>
                      <span className="font-bold text-slate-900">
                        ${parseFloat(activeExam.usdExamFee).toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">{examName}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-400 font-normal">Approximately</span>
                      <PriceDisplay
                        amount={pricing.baseFee}
                        className="font-bold text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Registration Service Fee
                    </span>
                    <PriceDisplay
                      amount={pricing.serviceFee}
                      className="font-bold text-slate-900"
                    />
                  </div>

                  {formData.selectedCourse && (
                    (() => {
                      const selectedCourse = coursesData.find((c: any) => c.id === formData.selectedCourse);
                      return selectedCourse ? (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 font-medium">
                            Course: {selectedCourse.name}
                          </span>
                          <PriceDisplay
                            amount={selectedCourse.discounted_price ?? selectedCourse.price}
                            className="font-bold text-slate-900"
                          />
                        </div>
                      ) : null;
                    })()
                  )}

                  {formData.selectedWorkshop && (
                    (() => {
                      const selectedWorkshop = (workshopsData as any)[formData.selectedWorkshop];
                      return selectedWorkshop ? (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 font-medium">
                            Workshop: {selectedWorkshop.name}
                          </span>
                          <PriceDisplay
                            amount={selectedWorkshop.price}
                            className="font-bold text-slate-900"
                          />
                        </div>
                      ) : null;
                    })()
                  )}

                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                        Total Amount
                      </span>
                      <PriceDisplay
                        amount={total}
                        className="text-3xl font-black text-primary"
                      />
                    </div>
                  </div>
                </>
              }
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
                  { label: "Education Level", value: getEducationLevelLabel(formData.educationLevel) },
                ]}
              />
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
