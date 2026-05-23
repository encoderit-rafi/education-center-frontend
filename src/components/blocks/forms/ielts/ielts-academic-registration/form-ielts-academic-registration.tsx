"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./_type";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { format } from "date-fns";
import { User, ShieldCheck, Globe } from "lucide-react";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";

import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";

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

export const COURSES_DATA = {
  group_classroom: {
    id: "group_classroom",
    name: "Group Classroom",
    class_mode_id: "group",
    class_type_id: "classroom",
    price: 1850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
  semi_private_classroom: {
    id: "semi_private_classroom",
    name: "Semi-Private Classroom",
    class_mode_id: "semi_private",
    class_type_id: "classroom",
    price: 2850,
    currency: "AED",
    general_discount: 5,
    special_discount: 15,
  },
  vip_classroom: {
    id: "vip_classroom",
    name: "VIP Classroom",
    class_mode_id: "vip",
    class_type_id: "classroom",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
  vip_online: {
    id: "vip_online",
    name: "Private Online",
    class_mode_id: "vip",
    class_type_id: "online",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
};

export default function FormIeltsAcademicRegistration() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

  const form = useForm<TIeltsAcademicSchema>({
    resolver: zodResolver(IeltsAcademicSchema),
    defaultValues: {
      testModule: "Academic",
      givenNames: "",
      middleName: "",
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
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      marketingPreference: "",
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
    const baseFee = 1400;
    const serviceFee = 150;
    const coursePrice = formData.selectedCourse
      ? (COURSES_DATA as any)[formData.selectedCourse].price *
      (1 -
        (COURSES_DATA as any)[formData.selectedCourse].special_discount / 100)
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

  const handleFormSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
    if (currentStep < 3) {
      goToStep(3);
    } else {
      bookingMutation.mutate({
        exam_id: "ielts-academic",
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
              form={form}
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
              paymentMethodValue={(formData as any)?.paymentMethod}
              onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
              paymentMethodError={(form.formState.errors as any)?.paymentMethod}
              examName="IELTS Academic Exam"
              baseFee={pricing.baseFee}
              serviceFee={pricing.serviceFee}
              total={total}
              selectedCourseData={
                formData.selectedCourse
                  ? (COURSES_DATA as any)[formData.selectedCourse]
                  : undefined
              }
              selectedWorkshopData={
                formData.selectedWorkshop
                  ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop]
                  : undefined
              }
              reviewStepNumber={4}
              paymentStepNumber={5}
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
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Date of Birth</span><span className="text-sm font-semibold text-black">{formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "N/A"}</span></div>
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
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">ID Expiry Date</span><span className="text-sm font-semibold text-black">{formData.idExpiryDate ? format(formData.idExpiryDate, "PPP") : "N/A"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Identity Document</span><span className="text-sm font-semibold text-black">{formData.idDocument ? (formData.idDocument as File).name : "No file attached"}</span></div>
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
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Exam Date</span><span className="text-sm font-semibold text-primary">{formData.examDate ? format(formData.examDate, "PPP") : "N/A"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Time Slot</span><span className="text-sm font-semibold text-black">{formData.examTimeSlot === "9:00 AM" ? "Morning Session (09:00 AM)" : formData.examTimeSlot === "11:00 AM" ? "Morning Session (11:00 AM)" : "Morning Session"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Address Line 1</span><span className="text-sm font-semibold text-black">{formData.postalAddress1}</span></div>
                    {formData.postalAddress2 && <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Address Line 2</span><span className="text-sm font-semibold text-black">{formData.postalAddress2}</span></div>}
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Emirate / City</span><span className="text-sm font-semibold text-black">{formData.city}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Country of Residence</span><span className="text-sm font-semibold text-black">{formData.residenceCountry}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">P.O. Box</span><span className="text-sm font-semibold text-black">{formData.poBox || "N/A"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Postal Code</span><span className="text-sm font-semibold text-black">{formData.postcode || "N/A"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">First Language</span><span className="text-sm font-semibold text-black">{formData.firstLanguage || "N/A"}</span></div>
                    <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase">Education Level</span><span className="text-sm font-semibold text-black">{formData.educationLevel || "N/A"}</span></div>
                  </div>
                </div>
              </div>
            </GlobalReviewStep>
          )}
        </Form>
      </div>
    </div>
  );
}
