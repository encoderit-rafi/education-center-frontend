"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./_type/toefl-ibt";

// Import Steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

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

    const handleFormSubmit: SubmitHandler<TToeflIbtSchema> = (data) => {
        if (currentStep < 3) {
            goToStep(3);
        } else {
            console.log("Final TOEFL iBT Submission:", data);
            alert("TOEFL iBT Registration Submitted Successfully!");
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
                        <ReviewStep
                            data={formData}
                            form={form}
                            onEdit={() => goToStep(2)}
                            onBack={() => goToStep(2)}
                            onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
                            baseFee={pricing.baseFee}
                            serviceFee={pricing.serviceFee}
                            vat={pricing.vat}
                            total={pricing.total}
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
                        />
                    )}
                </Form>
            </div>
        </div>
    );
}
