"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./_type/toefl-ibt";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { format } from "date-fns";
import { User, ShieldCheck, Globe } from "lucide-react";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";

// Import Steps
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

export default function FormTOEFLIBTRegistration() {
    const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Date, 2: Form, 3: Review

    const form = useForm<TToeflIbtSchema>({
        resolver: zodResolver(ToeflIbtSchema),
        defaultValues: {
            examDate: undefined,
            examTimeSlot: "" as any,
            givenNames: "",
            middleName: "",
            surnames: "",
            noSurname: false,
            dateOfBirth: undefined,
            gender: "" as any,
            email: "",
            confirmEmail: "",
            phoneNumber: "",
            smsConsent: false,
            country: "United Arab Emirates",
            streetAddress1: "",
            streetAddress2: "",
            moreAddressLines: false,
            city: "",
            state: "",
            postalCode: "",
            agentCode: "",
            idType: "passport" as any,
            idNumber: "",
            idExpiryDate: undefined,
            issuingAuthority: "",
            nationality: "",
            idDocument: undefined,
            takenBefore: "No" as any,
            lessThanTwoYears: "No" as any,
            existingAccount: "No" as any,
            firstLanguage: "",
            yearsStudyingEnglish: "",
            educationLevel: "",
            occupationLevel: "",
            occupationSector: "",
            reasonForTakingTest: "",
            destinationCountry: "",
            selectedCourse: "",
            selectedWorkshop: "",
            marketingPreference: "" as any,
            paymentMethod: "" as any,
            termsAgreed: false,
        },
    });

    const formData = form.watch();

    const goToStep = (step: number) => {
        setCurrentStep(step);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const calculateTotal = () => {
        const baseFee = 1260; // TOEFL iBT fee
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

    const handleFormSubmit: SubmitHandler<TToeflIbtSchema> = (data) => {
        if (currentStep < 3) {
            goToStep(3);
        } else {
            bookingMutation.mutate({
                exam_id: "toefl-ibt",
                given_names: data.givenNames,
                middle_name: data.middleName,
                surnames: data.surnames,
                date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
                gender: data.gender,
                email: data.email,
                phone_number: data.phoneNumber,
                country: data.country,
                street_address_1: data.streetAddress1,
                street_address_2: data.streetAddress2,
                city: data.city,
                state: data.state,
                postal_code: data.postalCode,
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
        console.error("TOEFL Registration Validation Errors:", errors);
        const firstError = Object.keys(errors)[0];
        const element = document.getElementsByName(firstError)[0];
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                    TOEFL iBT <span className="text-[#A11D1D]">Registration</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                    Complete your TOEFL iBT registration in a few easy steps.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Form {...form}>
                    {currentStep === 0 && (
                        <TermsStep onNext={() => goToStep(1)} />
                    )}

                    {currentStep === 1 && (
                        <DateStep
                            value={formData.examDate}
                            timeSlot={formData.examTimeSlot}
                            onChange={(date) => form.setValue("examDate", date)}
                            onTimeSlotChange={(slot) => form.setValue("examTimeSlot", slot)}
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
                            examName="TOEFL iBT Exam"
                            baseFee={pricing.baseFee}
                            serviceFee={pricing.serviceFee}
                            total={pricing.total}
                            selectedCourseData={formData.selectedCourse ? (COURSES_DATA as any)[formData.selectedCourse] : undefined}
                            selectedWorkshopData={formData.selectedWorkshop ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop] : undefined}
                            reviewStepNumber={3}
                            paymentStepNumber={4}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {/* Personal Details Summary */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-black">
                                        <User className="size-4" />
                                        <span className="text-xs font-bold tracking-widest">PERSONAL DETAILS</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Given Names</span><span className="text-sm font-bold text-slate-900">{formData.givenNames}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Middle Name</span><span className="text-sm font-bold text-slate-900">{formData.middleName || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Surnames</span><span className="text-sm font-bold text-slate-900">{formData.surnames || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Date of Birth</span><span className="text-sm font-bold text-slate-900">{formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Gender</span><span className="text-sm font-bold text-slate-900 capitalize">{formData.gender || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Contact Number</span><span className="text-sm font-bold text-slate-900">{formData.phoneNumber || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Nationality</span><span className="text-sm font-bold text-slate-900">{formData.nationality || "N/A"}</span></div>
                                    </div>
                                </div>
                                {/* Identity & Contact Summary */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-black">
                                        <ShieldCheck className="size-4" />
                                        <span className="text-xs font-bold tracking-widest">IDENTITY &amp; CONTACT</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">ID Type</span><span className="text-sm font-bold text-slate-900 capitalize">{formData.idType?.replace("_", " ")}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">ID Number</span><span className="text-sm font-bold text-slate-900">{formData.idNumber || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Email</span><span className="text-sm font-bold text-slate-900">{formData.email}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">ID Expiry Date</span><span className="text-sm font-bold text-slate-900">{formData.idExpiryDate ? format(formData.idExpiryDate, "PPP") : "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Identity Document</span><span className="text-sm font-bold text-slate-900 truncate max-w-[200px]">{formData.idDocument ? (formData.idDocument as File).name : "No file attached"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Issuing Authority</span><span className="text-sm font-bold text-slate-900">{formData.issuingAuthority || "N/A"}</span></div>
                                    </div>
                                </div>
                                {/* Test Info Summary */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-black">
                                        <Globe className="size-4" />
                                        <span className="text-xs font-bold tracking-widest">TEST INFORMATION</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Exam Date</span><span className="text-sm font-bold text-[#A11D1D]">{formData.examDate ? format(formData.examDate, "PPP") : "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Time Slot</span><span className="text-sm font-bold text-slate-900">{formData.examTimeSlot || "N/A"} Session</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Address Line 1</span><span className="text-sm font-bold text-slate-900">{formData.streetAddress1}</span></div>
                                        {formData.streetAddress2 && <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Address Line 2</span><span className="text-sm font-bold text-slate-900">{formData.streetAddress2}</span></div>}
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">City</span><span className="text-sm font-bold text-slate-900">{formData.city}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Country of Residence</span><span className="text-sm font-bold text-slate-900">{formData.country}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">First Language</span><span className="text-sm font-bold text-slate-900">{formData.firstLanguage || "N/A"}</span></div>
                                        <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Education Level</span><span className="text-sm font-bold text-slate-900">{formData.educationLevel?.replace(/_/g, " ") || "N/A"}</span></div>
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
