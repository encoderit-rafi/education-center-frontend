"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { IeltsGeneralSchema, type TIeltsGeneralSchema } from "./_type";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";
import { languages } from "@/lib/languages-data";
import { courses as coursesData, workshops as workshopsData } from "@/lib/data";
import { format } from "date-fns";
import { User, ShieldCheck, Globe } from "lucide-react";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";

// Import steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";

const EXAM_FEE = 1400;
const SERVICE_FEE = 150;

export default function FormIELTSGeneralRegistration() {
  const [step, setStep] = useState(0);

  const form = useForm<TIeltsGeneralSchema>({
    resolver: zodResolver(IeltsGeneralSchema),
    defaultValues: {
      testModule: "General Training",
      bookingFor: "",
      givenNames: "",
      middleName: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: undefined,
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: undefined,
      postalAddress1: "",
      postalAddress2: "",
      postalAddress3: "",
      poBox: "",
      city: "",
      postcode: "",
      marketingPreference: undefined,
      idType: undefined,
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      idDocument: undefined,
      takenBefore: undefined,
      lessThanTwoYears: undefined,
      existingAccount: undefined,
      firstLanguage: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      selectedCourse: "",
      selectedWorkshop: "",
      confirmationRecipient: "",
      vatNumber: "",
      paymentMethod: "online",
      termsAgreed: false,
      examDate: undefined,
      examTimeSlot: "",
    },
  });

  const { watch, trigger, setValue, handleSubmit } = form;
  const formData = watch();

  // Pricing Logic
  const selectedCourse = coursesData.find((c) => c.id === formData.selectedCourse);
  const selectedWorkshop = workshopsData.find((w) => w.id === formData.selectedWorkshop);

  const coursePrice = selectedCourse ? selectedCourse.price * (1 - (selectedCourse.special_discount || 0) / 100) : 0;
  const workshopPrice = selectedWorkshop?.price || 0;

  const subtotal = EXAM_FEE + SERVICE_FEE + coursePrice + workshopPrice;
  const total = subtotal;

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];

    if (step === 1) {
      fieldsToValidate = ["examDate", "examTimeSlot"];
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

  const onSubmit = async (data: TIeltsGeneralSchema) => {
    bookingMutation.mutate({
      exam_id: "ielts-general",
      test_module: data.testModule,
      given_names: data.givenNames,
      middle_name: data.middleName,
      surnames: data.surnames,
      date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
      sex: data.sex,
      email: data.email,
      mobile_number: data.mobileNumber,
      residence_country: data.residenceCountry,
      postal_address_1: data.postalAddress1,
      postal_address_2: data.postalAddress2,
      postal_address_3: data.postalAddress3,
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
  };

  const onInvalid = (errors: any) => {
    console.error("Form Errors:", errors);
    const errorFields = Object.keys(errors).join(", ");
    toast.error(`Validation failed for: ${errorFields}`);
  };

  return (
    <Form {...form}>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {step === 0 && <TermsStep onNext={nextStep} />}

        {step === 1 && (
          <DateStep
            value={formData.examDate}
            timeSlot={formData.examTimeSlot as any}
            onChange={(date) => setValue("examDate", date)}
            onTimeSlotChange={(slot) => setValue("examTimeSlot", slot)}
            onNext={nextStep}
            onBack={prevStep}
            error={form.formState.errors.examDate}
            timeSlotError={form.formState.errors.examTimeSlot}
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
            baseFee={EXAM_FEE}
            serviceFee={SERVICE_FEE}
            total={total}
            selectedCourseData={selectedCourse}
            selectedWorkshopData={selectedWorkshop}
            reviewStepNumber={3}
            paymentStepNumber={4}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Personal Details Summary */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-black">
                  <User className="size-4" />
                  <span className="text-xs font-bold tracking-widest text-black">PERSONAL DETAILS</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Given Names</span><span className="text-sm font-semibold text-black">{formData.givenNames}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Middle Name</span><span className="text-sm font-semibold text-black">{formData.middleName || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Surnames</span><span className="text-sm font-semibold text-black">{formData.surnames || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Date of Birth</span><span className="text-sm font-semibold text-black">{formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Gender</span><span className="text-sm font-semibold text-black capitalize">{formData.sex || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Mobile Number</span><span className="text-sm font-semibold text-black">{formData.mobileNumber || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Nationality</span><span className="text-sm font-semibold text-black">{formData.nationality || "N/A"}</span></div>
                </div>
              </div>
              {/* Identity & Contact Summary */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-black">
                  <ShieldCheck className="size-4" />
                  <span className="text-xs font-bold tracking-widest">IDENTITY &amp; CONTACT</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">ID Type</span><span className="text-sm font-semibold text-black capitalize">{formData.idType?.replace("_", " ")}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">ID Number</span><span className="text-sm font-semibold text-black">{formData.idNumber || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Email</span><span className="text-sm font-semibold text-black">{formData.email}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">ID Expiry Date</span><span className="text-sm font-semibold text-black">{formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Identity Document</span><span className="text-sm font-semibold text-black truncate max-w-[200px]">{formData.idDocument ? (formData.idDocument as File).name : "No file attached"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Issuing Authority</span><span className="text-sm font-semibold text-black">{formData.issuingAuthority || "N/A"}</span></div>
                </div>
              </div>
              {/* Test Info Summary */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-black">
                  <Globe className="size-4" />
                  <span className="text-xs font-bold tracking-widest">TEST INFORMATION</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Exam Date</span><span className="text-sm font-semibold text-primary">{formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Time Slot</span><span className="text-sm font-semibold text-black">{formData.examTimeSlot === "9:00 AM" ? "Morning Session (09:00 AM)" : formData.examTimeSlot === "11:00 AM" ? "Morning Session (11:00 AM)" : "Morning Session"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Address</span><span className="text-sm font-semibold text-black text-xs leading-relaxed">{formData.postalAddress1}{formData.postalAddress2 && <>, {formData.postalAddress2}</>}{formData.poBox && <><br />P.O. Box: {formData.poBox}</>}<br />{formData.city}, {formData.postcode}<br />{formData.residenceCountry}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">First Language</span><span className="text-sm font-semibold text-black">{formData.firstLanguage || "N/A"}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Education Level</span><span className="text-sm font-semibold text-black">{formData.educationLevel || "N/A"}</span></div>
                </div>
              </div>
            </div>
          </GlobalReviewStep>
        )}
      </div>
    </Form>
  );
}
