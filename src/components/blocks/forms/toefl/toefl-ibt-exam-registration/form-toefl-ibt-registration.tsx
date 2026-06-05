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
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";

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

import { ielts_general_courses as COURSES_DATA } from "@/lib/data";

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
            takenBefore: "" as any,
            lessThanTwoYears: "" as any,
            existingAccount: "" as any,
            firstLanguage: "",
            yearsStudyingEnglish: "",
            educationLevel: "",
            nextLevelOfStudy: "",
            nextLevelOfStudyOther: "",
            desiredFieldOfStudy: "",
            desiredFieldOfStudyOther: "",
            reasonsForTakingToefl: [],
            etsProductsInterest: "",
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
                first_language: data.firstLanguage === "Other" ? data.firstLanguageOther : data.firstLanguage,
                years_studying_english: data.yearsStudyingEnglish,
                education_level: data.educationLevel,
                next_level_of_study: data.nextLevelOfStudy === "Other" ? data.nextLevelOfStudyOther : data.nextLevelOfStudy,
                desired_field_of_study: data.desiredFieldOfStudy === "Other" ? data.desiredFieldOfStudyOther : data.desiredFieldOfStudy,
                reasons_for_taking_toefl: data.reasonsForTakingToefl,
                ets_products_interest: data.etsProductsInterest,
                occupation_level: data.occupationLevel,
                occupation_sector: data.occupationSector,
                reason_for_taking_test: data.reasonsForTakingToefl?.join(", ") || "",
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
                            selectedCourseData={formData.selectedCourse ? COURSES_DATA.find((c: any) => c.id === formData.selectedCourse) : undefined}
                            selectedWorkshopData={formData.selectedWorkshop ? (WORKSHOPS_DATA as any)[formData.selectedWorkshop] : undefined}
                            reviewStepNumber={3}
                            paymentStepNumber={4}
                        >
                                                    <ReviewSummaryGrid
                            personalDetails={[
                              { label: "Given Names", value: formData.givenNames },
                              { label: "Middle Name", value: formData.middleName || "N/A" },
                              { label: "Surnames", value: formData.surnames || "N/A" },
                              { label: "Date of Birth", value: formData.dateOfBirth ? format(new Date(formData.dateOfBirth as any), "PPP") : "N/A" },
                              { label: "Gender", value: formData.gender || "N/A" },
                              { label: "Contact Number", value: formData.phoneNumber || "N/A" },
                              { label: "Nationality", value: formData.nationality || "N/A" },
                            ]}
                            identityContact={[
                              { label: "ID Type", value: formData.idType?.replace("_", " ") },
                              { label: "ID Number", value: formData.idNumber || "N/A" },
                              { label: "Email", value: formData.email },
                              { label: "ID Expiry Date", value: formData.idExpiryDate ? format(new Date(formData.idExpiryDate as any), "PPP") : "N/A" },
                              { label: "Identity Document", value: formData.idDocument ? (formData.idDocument as File).name : "No file attached" },
                              { label: "Issuing Authority", value: formData.issuingAuthority || "N/A" },
                            ]}
                            testInformation={[
                              { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                              { label: "Time Slot", value: `${formData.examTimeSlot || "N/A"} Session` },
                              { label: "Address Line 1", value: formData.streetAddress1 },
                              ...(formData.streetAddress2 ? [{ label: "Address Line 2", value: formData.streetAddress2 }] : []),
                              { label: "City", value: formData.city },
                              { label: "Country of Residence", value: formData.country },
                              { label: "First Language", value: formData.firstLanguage === "Other" ? (formData.firstLanguageOther || "Other") : (formData.firstLanguage || "N/A") },
                              { label: "Education Level", value: formData.educationLevel?.replace(/_/g, " ") || "N/A" },
                              { label: "Next Level of Study", value: formData.nextLevelOfStudy === "Other" ? (formData.nextLevelOfStudyOther || "Other") : (formData.nextLevelOfStudy || "N/A") },
                              { label: "Desired Field of Study", value: formData.desiredFieldOfStudy === "Other" ? (formData.desiredFieldOfStudyOther || "Other") : (formData.desiredFieldOfStudy || "N/A") },
                              { label: "Reason for taking TOEFL", value: formData.reasonsForTakingToefl?.join(", ") || "N/A" },
                              { label: "ETS Products Interest", value: formData.etsProductsInterest || "N/A" },
                            ]}
                        />
                        </GlobalReviewStep>
                    )}
                </Form>
            </div>
        </div>
    );
}
