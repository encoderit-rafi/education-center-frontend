"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { IeltsGeneralSchema, type TIeltsGeneralSchema } from "./_type";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";
import { languages } from "@/lib/languages-data";
// Courses and workshops data loaded dynamically from /courses/ielts API
import { format } from "date-fns";
import { User, ShieldCheck, Globe } from "lucide-react";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";

// Import steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";



interface FormProps {
  examId?: string;
}

export default function FormIELTSGeneralRegistration({ examId: initialExamId }: FormProps = {}) {
  const [step, setStep] = useState(0);

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
    : examsList.find((e: any) => e.slug === "ielts-general");

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

  const workshopsData = dbWorkshops.map((w: any) => {
    const basePrice = parseFloat(w.price) || 0;
    const discount = parseFloat(w.discountValue) || 0;
    const discountedPrice =
      w.discountType === "PERCENTAGE"
        ? Math.round(basePrice * (1 - discount / 100))
        : basePrice - discount;

    return {
      id: w.id,
      name: w.name,
      duration: w.duration,
      price: discountedPrice,
      currency: "AED",
    };
  });

  const form = useForm<TIeltsGeneralSchema>({
    resolver: zodResolver(IeltsGeneralSchema),
    defaultValues: {
      testModule: "General Training",
      givenNames: "",
      middleName: "",
      birthCity: "",
      birthCountry: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: "",
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: "United Arab Emirates",
      postalAddress1: "",
      postalAddress2: "",
      postalAddress3: "",
      poBox: "",
      city: "",
      postcode: "",
      marketingPreference: "",
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
      selectedCourse: "",
      selectedWorkshop: "",
      vatNumber: "",
      paymentMethod: "online",
      termsAgreed: false,
      examDate: undefined,
      examTimeSlot: "",
      speakingSlot: "",
    },
  });

  const { watch, trigger, setValue, handleSubmit } = form;
  const formData = watch();

  // Pricing Logic
  const selectedCourse = coursesData.find((c: any) => c.id === formData.selectedCourse);
  const selectedWorkshop = workshopsData.find((w: any) => w.id === formData.selectedWorkshop);

  const coursePrice = selectedCourse ? (selectedCourse as any).discounted_price ?? (selectedCourse as any).price : 0;
  const workshopPrice = selectedWorkshop?.price || 0;

  const baseFee = activeExam?.examFee ? parseFloat(activeExam.examFee) : 1470;
  const serviceFee = activeExam?.additionalFee ? parseFloat(activeExam.additionalFee) : 150;

  const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;
  const total = subtotal;

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];

    if (step === 1) {
      fieldsToValidate = ["examDate", "examTimeSlot", "speakingSlot"];
    } else if (step === 2) {
      // Validate the whole form before moving to review
      const isValid = await trigger();
      if (isValid) setStep(3);
      return;
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await trigger(fieldsToValidate as any);
      if (isValid) setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(Math.max(0, step - 1));

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

  const onSubmit = async (data: TIeltsGeneralSchema) => {
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
        date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
        sex: data.sex,
        email: data.email,
        mobile_number: data.mobileNumber,
        phone: data.mobileNumber,
        residence_country: data.residenceCountry,
        postal_address_1: data.postalAddress1,
        postal_address_2: data.postalAddress2,
        postal_address_3: data.postalAddress3,
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
        exam_fee: baseFee,
        total_amount: total,
        exam_date: data.examDate
          ? new Date(data.examDate as any).toISOString()
          : "",
      });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error(error?.message || "Something went wrong during submission.", { id: "ielts-submit" });
    }
  };

  const onInvalid = (errors: any) => {
    console.error("Form Errors:", errors);
    const errorFields = Object.keys(errors).join(", ");
    toast.error(`Validation failed for: ${errorFields}`);
  };

  return (
    <Form {...form}>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {step === 0 && (
          <TermsStep
            onNext={nextStep}
            examFee={baseFee}
            additionalFee={serviceFee}
          />
        )}

        {step === 1 && (
          <DateStep
            value={formData.examDate}
            timeSlot={formData.examTimeSlot as any}
            speakingSlot={formData.speakingSlot}
            onChange={(date) => setValue("examDate", date)}
            onTimeSlotChange={(slot) => {
              setValue("examTimeSlot", slot);
              setValue("speakingSlot", "");
            }}
            onSpeakingSlotChange={(slot) => setValue("speakingSlot", slot)}
            onNext={nextStep}
            onBack={prevStep}
            error={form.formState.errors.examDate}
            timeSlotError={form.formState.errors.examTimeSlot}
            speakingSlotError={form.formState.errors.speakingSlot}
          />
        )}

        {step === 2 && (
          <RegistrationFormStep
            form={form}
            onSubmit={nextStep}
            onInvalid={onInvalid}
            onBack={prevStep}
            languages={languages}
            coursesData={coursesData}
            workshopsData={workshopsData}
          />
        )}

        {step === 3 && (
          <GlobalReviewStep
            onEdit={() => setStep(2)}
            onSubmit={handleSubmit(onSubmit)}
            paymentMethodValue={(formData as any)?.paymentMethod}
            onPaymentMethodChange={(val) => setValue("paymentMethod", val as any)}
            paymentMethodError={(form.formState.errors as any)?.paymentMethod}
            examName="IELTS General Exam"
            baseFee={baseFee}
            serviceFee={serviceFee}
            total={total}
            selectedCourseData={selectedCourse}
            selectedWorkshopData={selectedWorkshop}
            reviewStepNumber={3}
            paymentStepNumber={4}
          >
            <ReviewSummaryGrid
              personalDetails={[
                { label: "Given Names", value: formData.givenNames },
                { label: "Middle Name", value: formData.middleName || "N/A" },
                { label: "Surnames", value: formData.surnames || "N/A" },
                { label: "Date of Birth", value: formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A" },
                { label: "Gender", value: (formData.sex as string) || "N/A" },
                { label: "City of Birth", value: formData.birthCity || "N/A" },
                { label: "Country of Birth", value: formData.birthCountry || "N/A" },
                { label: "Mobile Number", value: formData.mobileNumber || "N/A" },
                { label: "Nationality", value: formData.nationality || "N/A" },
              ]}
              identityContact={[
                { label: "ID Type", value: (formData.idType as string)?.replace("_", " ") },
                { label: "ID Number", value: formData.idNumber || "N/A" },
                { label: "Email", value: formData.email },
                { label: "ID Expiry Date", value: formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A" },
                { label: "Identity Document", value: formData.idDocument ? (formData.idDocument as File).name : "No file attached" },
                { label: "Issuing Authority", value: formData.issuingAuthority || "N/A" },
              ]}
              testInformation={[
                { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                { label: "Time Slot", value: formData.examTimeSlot === "9:00 AM" ? "Morning Session (09:00 AM)" : formData.examTimeSlot === "1:00 PM" ? "Afternoon Session (01:00 PM)" : "Morning Session" },
                { label: "Speaking Slot", value: formData.speakingSlot || "Not selected" },
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
      </div>
    </Form>
  );
}
