"use client";
import { format } from "date-fns";
import {
  GlobalReviewStep,
  ReviewSummaryGrid,
} from "@/components/blocks/forms/global-review-step";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { PteAcademicSchema, type TPteAcademicSchema } from "./_type";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";
import { useRegistrationTitle } from "@/lib/translations";
import { VAT_PERCENT, calculateVat } from "@/lib/vat";
import { compileBookingPayload } from "@/lib/booking";
import { calculateCourseDiscountedPrice } from "@/lib/course-discount";

interface FormProps {
  examId?: string;
}

export default function FormPTEAcademicRegistration({
  examId: initialExamId,
}: FormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review
  const titleObj = useRegistrationTitle("pte-academic");

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
    : examsList.find((e: any) => e.slug === "pte-academic");

  const examId = initialExamId || activeExam?.id;

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
    const pkgName = pkg.name || pkg.title || "";
    const discountedPrice = calculateCourseDiscountedPrice(
      basePrice,
      pkgName,
      discount,
      pkg.discountType
    );

    return {
      id: pkg.id,
      name: pkg.name,
      title: pkg.title,
      translations: pkg.translations,
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
      title: w.title,
      subTitle: w.subTitle,
      translations: w.translations,
      duration: w.duration,
      price: discountedPrice,
      currency: "AED",
    };
    return acc;
  }, {});

  const form = useForm<TPteAcademicSchema>({
    resolver: zodResolver(PteAcademicSchema),
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
      countryOfResidence: "",
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
      occupationSectorOther: "",
      referralSource: "",
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
    const baseFee =
      activeExam?.examFee && parseFloat(activeExam.examFee) > 0
        ? parseFloat(activeExam.examFee)
        : 1450;
    const serviceFee =
      activeExam?.additionalFee && parseFloat(activeExam.additionalFee) > 0
        ? parseFloat(activeExam.additionalFee)
        : 150;

    const selectedCourseData = formData.selectedCourse
      ? coursesData.find((c: any) => c.id === formData.selectedCourse)
      : null;
    const coursePrice = selectedCourseData
      ? (selectedCourseData.discounted_price ?? selectedCourseData.price)
      : 0;

    const selectedWorkshopData = formData.selectedWorkshop
      ? (workshopsData as any)[formData.selectedWorkshop]
      : null;
    const workshopPrice = selectedWorkshopData?.price || 0;

    const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;
    const vatAmount = calculateVat(subtotal);

    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal,
      vat: vatAmount,
      total: subtotal + vatAmount,
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
        if (window.top && window.top !== window) {
          window.top.location.href = checkoutUrl;
        } else {
          window.location.href = checkoutUrl;
        }
      } else {
        console.error("Checkout URL not found in response");
        toast.error("Checkout URL not found in server response.", {
          id: "pte-submit",
        });
      }
    },
    onError: (error: any) => {
      console.error("Payment initiation failed:", error);
      toast.error(
        error?.response?.data?.message || "Payment initiation failed.",
        { id: "pte-submit" },
      );
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
      toast.error(error?.response?.data?.message || "Exam booking failed.", {
        id: "pte-submit",
      });
    },
  });

  const handleFormSubmit: SubmitHandler<TPteAcademicSchema> = async (data) => {
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

          const apiBase =
            api.defaults.baseURL ||
            "https://vote.encoder-test-vpn.space/api/v1";
          const apiHost = apiBase.replace("/api/v1", "");
          idDocumentUrl = relativeUrl.startsWith("http")
            ? relativeUrl
            : `${apiHost}${relativeUrl}`;
        }

        if (!examId) {
          toast.error(
            "Exam details are still loading. Please try again in a moment.",
            { id: "pte-submit" },
          );
          return;
        }

        toast.loading("Submitting booking request...", { id: "pte-submit" });
        const compiledPayload = compileBookingPayload({
          examId,
          paymentMethod:
            ((formData as any).paymentMethod as string) || "stripe",
          firstName: data.givenNames || "",
          middleName: data.middleName || "",
          lastName: data.surnames || "",
          dateOfBirth: data.dateOfBirth,
          gender: data.gender
            ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1)
            : null,
          nationality: data.countryOfCitizenship || "",
          email: data.emailUsername || "",
          phone: data.mobileNumber || "",
          address:
            (data.postalAddress1 || "") +
            (data.postalAddress2 ? `, ${data.postalAddress2}` : ""),
          country: data.countryOfResidence || null,
          idType: data.idType,
          idNumber: data.idNumber,
          sessionDate: data.examDate,
          sessionTime: data.examTime || null,
          examFee: pricing.baseFee,
          courseFee: pricing.coursePrice,
          workshopFee: pricing.workshopPrice,
          additionalFee: pricing.serviceFee,
          discountAmount: 0,
          vatAmount: pricing.vat,
          totalAmount: total,
          allFormData: {
            ...data,
            level_name: activeExam?.name || "PTE Academic",
            selected_course_name: data.selectedCourse
              ? coursesData.find((c: any) => c.id === data.selectedCourse)?.name
              : undefined,
            selected_workshop_name: data.selectedWorkshop
              ? dbWorkshops.find((w: any) => w.id === data.selectedWorkshop)
                  ?.name
              : undefined,
            idDocumentUrl,
          },
          courseId: data.selectedCourse ? courseDetail?.id : null,
        });
        bookingMutation.mutate(compiledPayload);
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(
          error?.message || "Something went wrong during submission.",
          { id: "pte-submit" },
        );
      }
    }
  };

  const onInvalid = (errors: any) => {
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const firstField = errorFields[0];
      const errorMessage = (errors[firstField] as any)?.message || "Please fill in all required fields.";
      toast.error("Validation Error", {
        description: errorMessage,
      });
      const element = document.getElementsByName(firstField)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const getReasonLabel = (val: string) => {
    const mapping: Record<string, string> = {
      study: "Study",
      nursing: "Nursing registration or licensing",
      au_mates: "Australia - MATES visa (India only)",
      au_485: "Australia - Post Study Work (485) visa",
      au_temp_work: "Australia - Temporary Work visa",
      nz_temp_work: "New Zealand - Temporary Work visa",
      skilled_migration: "Skilled migration / Permanent Residency",
      family_visa: "Spouse / Family visa",
      working_holiday: "Working Holiday visa",
      other: formData.reasonForTakingOther || "Other",
    };
    return mapping[val] || val;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          {titleObj.main} <span className="text-primary">{titleObj.highlight}</span>
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
              onPaymentMethodChange={(val) =>
                (form.setValue as any)("paymentMethod", val)
              }
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="PTE Academic Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={
                formData.selectedCourse
                  ? coursesData.find(
                      (c: any) => c.id === formData.selectedCourse,
                    )
                  : undefined
              }
              selectedWorkshopData={
                formData.selectedWorkshop
                  ? (workshopsData as any)[formData.selectedWorkshop]
                  : undefined
              }
              reviewStepNumber={3}
              paymentStepNumber={4}
            >
              <ReviewSummaryGrid
                personalDetails={[
                  {
                    label: "Given Names",
                    value: formData.noGivenNames ? "N/A" : formData.givenNames,
                  },
                  {
                    label: "Middle Name",
                    value: formData.noMiddleName ? "N/A" : formData.middleName || "N/A",
                  },
                  {
                    label: "Surnames",
                    value: formData.noSurname ? "N/A" : formData.surnames,
                  },
                  {
                    label: "Date of Birth",
                    value: formData.dateOfBirth
                      ? format(new Date(formData.dateOfBirth as any), "PPP")
                      : "N/A",
                  },
                  { label: "Sex", value: formData.gender || "N/A" },
                  {
                    label: "Phone Number",
                    value: formData.mobileNumber || "N/A",
                  },
                  {
                    label: "Nationality",
                    value: formData.countryOfCitizenship || "N/A",
                  },
                ]}
                identityContact={[
                  {
                    label: "ID Type",
                    value: formData.idType?.replace("_", " "),
                  },
                  { label: "ID Number", value: formData.idNumber || "N/A" },
                  { label: "Email", value: formData.emailUsername },
                  {
                    label: "ID Expiry Date",
                    value: formData.idExpiryDate
                      ? format(new Date(formData.idExpiryDate as any), "PPP")
                      : "N/A",
                  },
                  {
                    label: "Identity Document",
                    value: formData.passportCopy
                      ? (formData.passportCopy as File).name
                      : "No file attached",
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
                  { label: "Time Slot", value: formData.examTime || "N/A" },
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
                    value: formData.countryOfResidence,
                  },
                  { label: "P.O. Box", value: formData.poBox || "N/A" },
                  { label: "Postal Code", value: formData.postcode || "N/A" },
                  {
                    label: "First Language",
                    value: formData.homeLanguage || "N/A",
                  },
                  {
                    label: "Destination Country",
                    value: formData.planningCountry || "N/A",
                  },
                  {
                    label: "Reason for Test",
                    value:
                      `${getReasonLabel(formData.reasonForTaking)} ${formData.studyLevel ? `(${formData.studyLevel})` : ""}`.trim(),
                  },
                  ...(formData.occupationSector
                    ? [
                        {
                          label: "Occupation Sector",
                          value:
                            formData.occupationSector === "Other"
                              ? formData.occupationSectorOther || "Other"
                              : formData.occupationSector,
                        },
                      ]
                    : []),
                  {
                    label: "Current Situation",
                    value: formData.currentSituation,
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
