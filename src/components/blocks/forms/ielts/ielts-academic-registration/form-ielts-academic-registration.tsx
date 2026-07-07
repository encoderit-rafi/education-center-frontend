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
import * as z from "zod";
import { VAT_PERCENT, calculateVat } from "@/lib/vat";
import { toast } from "sonner";
import {
  GlobalReviewStep,
  ReviewSummaryGrid,
} from "@/components/blocks/forms/global-review-step";
import { getEducationLevelLabel } from "@/lib/utils";
import { compileBookingPayload } from "@/lib/booking";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";

// Static courses and workshops data removed to be loaded dynamically from the API

interface FormProps {
  examId?: string;
}

export default function FormIeltsAcademicRegistration({
  examId: initialExamId,
}: FormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

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
    : examsList.find((e: any) => e.slug === "ielts-academic");

  const examId = initialExamId || activeExam?.id;

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
    const baseFee =
      activeExam?.examFee && parseFloat(activeExam.examFee) > 0
        ? parseFloat(activeExam.examFee)
        : 1470;
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
    const workshopPrice = formData.selectedWorkshop
      ? (workshopsData as any)[formData.selectedWorkshop]?.price || 0
      : 0;

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
        toast.success("Redirecting to checkout...", { id: "ielts-submit" });
        if (window.top && window.top !== window) {
          window.top.location.href = checkoutUrl;
        } else {
          window.location.href = checkoutUrl;
        }
      } else {
        console.error("Checkout URL not found in response");
        toast.error("Checkout URL not found in server response.", {
          id: "ielts-submit",
        });
      }
    },
    onError: (error: any) => {
      console.error("Payment initiation failed:", error);
      toast.error(
        error?.response?.data?.message || "Payment initiation failed.",
        { id: "ielts-submit" },
      );
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
      toast.error(error?.response?.data?.message || "Exam booking failed.", {
        id: "ielts-submit",
      });
    },
  });

  const handleFormSubmit: SubmitHandler<TIeltsAcademicSchema> = async (
    data,
  ) => {
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
            { id: "ielts-submit" },
          );
          return;
        }

        toast.loading("Submitting booking request...", { id: "ielts-submit" });

        const sessionTimeFormatted = (() => {
          if (!data.examTimeSlot) return null;
          if (data.examTimeSlot === "9:00 AM") return "09:00";
          if (data.examTimeSlot === "1:00 PM") return "13:00";
          return data.examTimeSlot;
        })();

        // 1. Build form_data list
        const fieldLabels: Record<string, string> = {
          testModule: "Test Module",
          givenNames: "Given Names",
          middleName: "Middle Name",
          surnames: "Surnames",
          noSurname: "No Surname",
          birthCity: "City of Birth",
          birthCountry: "Country of Birth",
          postcode: "Post Code",
          poBox: "P.O. Box",
          dateOfBirth: "Date of Birth",
          sex: "Gender",
          email: "Email",
          mobileNumber: "Mobile Number",
          smsConsent: "SMS Consent",
          residenceCountry: "Country of Residence",
          postalAddress1: "Address Line 1",
          postalAddress2: "Address Line 2",
          postalAddress3: "Address Line 3",
          city: "Town / City",
          marketingPreference: "Marketing Preference",
          idType: "ID Type",
          idNumber: "ID Number",
          idExpiryDate: "ID Expiry Date",
          issuingAuthority: "Issuing Authority",
          nationality: "Country of Nationality",
          takenBefore: "Taken Before",
          lessThanTwoYears: "Less Than Two Years",
          existingAccount: "Existing Account",
          firstLanguage: "First Language",
          firstLanguageOther: "First Language (Other)",
          yearsStudyingEnglish: "Years Studying English",
          educationLevel: "Education Level",
          occupationLevel: "Occupation Level",
          occupationLevelOther: "Occupation Level (Other)",
          occupationSector: "Occupation Sector",
          occupationSectorOther: "Occupation Sector (Other)",
          reasonForTakingTest: "Reason for Taking Test",
          reasonForTakingTestOther: "Reason for Taking Test (Other)",
          destinationCountry: "Destination Country",
          selectedCourse: "Selected Course",
          selectedWorkshop: "Selected Workshop",
          vatNumber: "VAT Number",
          paymentMethod: "Payment Method",
          examDate: "Exam Date",
          examTimeSlot: "Exam Time Slot",
          speakingSlot: "Speaking Slot",
        };

        const selectedCourseObj = data.selectedCourse
          ? coursesData.find((c: any) => c.id === data.selectedCourse)
          : null;
        const selectedWorkshopObj = data.selectedWorkshop
          ? (workshopsData as any)[data.selectedWorkshop]
          : null;

        const baseExamInfo = [
          {
            name: "level_name",
            label: "Selected Level",
            value: activeExam?.name || "IELTS Academic",
          },
          ...(selectedCourseObj
            ? [
                {
                  name: "selected_course_name",
                  label: "Selected Course Name",
                  value: selectedCourseObj.name,
                },
              ]
            : []),
          ...(selectedWorkshopObj
            ? [
                {
                  name: "selected_workshop_name",
                  label: "Selected Workshop Name",
                  value: selectedWorkshopObj.name,
                },
              ]
            : []),
        ];

        const fieldValues = Object.entries(fieldLabels).map(([key, label]) => {
          const val = (data as any)[key];
          let valueStr = "";
          if (val instanceof Date) {
            valueStr = format(val, "yyyy-MM-dd");
          } else if (typeof val === "boolean") {
            valueStr = val ? "Yes" : "No";
          } else if (val !== null && val !== undefined && val !== "") {
            valueStr = String(val);
          }
          return {
            name: key,
            label,
            value: valueStr || "N/A",
          };
        });

        const pricingInfo = [
          {
            name: "exam_fee",
            label: "Exam Fee",
            value: `${pricing.baseFee} AED`,
          },
          ...(pricing.coursePrice
            ? [
                {
                  name: "course_fee",
                  label: "Course Fee",
                  value: `${pricing.coursePrice} AED`,
                },
              ]
            : []),
          ...(pricing.workshopPrice
            ? [
                {
                  name: "workshop_fee",
                  label: "Workshop Fee",
                  value: `${pricing.workshopPrice} AED`,
                },
              ]
            : []),
          ...(pricing.serviceFee
            ? [
                {
                  name: "service_fee",
                  label: "Service Fee",
                  value: `${pricing.serviceFee} AED`,
                },
              ]
            : []),
          ...(pricing.vat
            ? [
                {
                  name: "vat_amount",
                  label: "VAT Amount",
                  value: `${pricing.vat} AED`,
                },
              ]
            : []),
          {
            name: "total_amount",
            label: "Total Amount",
            value: `${total} AED`,
          },
        ];

        const examInfoList = [...baseExamInfo, ...fieldValues, ...pricingInfo];

        // 2. Documents array
        const documentsList = idDocumentUrl
          ? [
              {
                name: "id_document_url",
                label: "ID Document",
                value: idDocumentUrl,
              },
            ]
          : [];

        // 3. Compile final payload
        const finalPayload = {
          exam_id: examId,
          payment_methods: data.paymentMethod || "stripe",
          course_id: data.selectedCourse ? courseDetail?.id : null,
          package_id: data.selectedCourse || null,
          workshop_id: data.selectedWorkshop || null,
          first_name: data.givenNames,
          middle_name: data.middleName || null,
          last_name: data.surnames || null,
          date_of_birth: data.dateOfBirth
            ? format(new Date(data.dateOfBirth), "yyyy-MM-dd")
            : null,
          gender: data.sex
            ? data.sex.charAt(0).toUpperCase() + data.sex.slice(1)
            : null,
          nationality: data.nationality || null,
          email: data.email,
          phone: data.mobileNumber,
          address:
            data.postalAddress1 +
            (data.postalAddress2 ? `, ${data.postalAddress2}` : ""),
          country: data.residenceCountry || null,
          id_type: data.idType
            ? data.idType.toLowerCase().includes("passport")
              ? "passport"
              : data.idType.toLowerCase().includes("emirate")
                ? "emirates"
                : "visa"
            : null,
          id_number: data.idNumber || null,
          session_date: data.examDate
            ? format(new Date(data.examDate), "yyyy-MM-dd")
            : null,
          session_time: sessionTimeFormatted,
          exam_fee: pricing.baseFee,
          course_fee: pricing.coursePrice || 0,
          workshop_fee: pricing.workshopPrice || 0,
          additional_fee: pricing.serviceFee || 0,
          discount_amount: 0,
          vat_amount: pricing.vat || 0,
          total_amount: total,
          form_data: {
            exam_info: examInfoList,
            documents: documentsList,
          },
        };

        bookingMutation.mutate(finalPayload);
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(
          error?.message || "Something went wrong during submission.",
          { id: "ielts-submit" },
        );
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
                  {
                    label: "City of Birth",
                    value: formData.birthCity || "N/A",
                  },
                  {
                    label: "Country of Birth",
                    value: formData.birthCountry || "N/A",
                  },
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
                    value:
                      formData.firstLanguage === "Other"
                        ? formData.firstLanguageOther || "Other (not specified)"
                        : formData.firstLanguage || "N/A",
                  },
                  {
                    label: "Occupation Level",
                    value:
                      formData.occupationLevel === "Other"
                        ? formData.occupationLevelOther ||
                          "Other (not specified)"
                        : formData.occupationLevel || "N/A",
                  },
                  {
                    label: "Occupation Sector",
                    value:
                      formData.occupationSector === "Other"
                        ? formData.occupationSectorOther ||
                          "Other (not specified)"
                        : formData.occupationSector || "N/A",
                  },
                  {
                    label: "Reason for Test",
                    value:
                      formData.reasonForTakingTest === "other"
                        ? formData.reasonForTakingTestOther ||
                          "Other (not specified)"
                        : formData.reasonForTakingTest || "N/A",
                  },
                  {
                    label: "Education Level",
                    value: getEducationLevelLabel(formData.educationLevel),
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
