"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./_type";

// Import Steps
import { TermsStep } from "./steps/terms-step";
import { RegistrationFormStep } from "./steps/registration-form-step";
import { ReviewStep } from "./steps/review-step";

export default function FormTOEFLIBTRegistration() {
    const [currentStep, setCurrentStep] = useState(0); // 0: Terms, 1: Form, 2: Review

    const form = useForm<TToeflIbtSchema>({
        resolver: zodResolver(ToeflIbtSchema),
        defaultValues: {
            givenName: "",
            noGivenOrLastName: false,
            middleName: "",
            familyName: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            gender: "",
            country: "",
            streetAddress1: "",
            streetAddress2: "",
            moreAddressLines: false,
            city: "",
            state: "",
            postalCode: "",
            countryCode: "",
            phoneNumber: "",
            agentCode: "",
        },
    });

    const formData = form.watch();

    const goToStep = (step: number) => {
        setCurrentStep(step);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleFormSubmit: SubmitHandler<TToeflIbtSchema> = (data) => {
        if (currentStep < 2) {
            goToStep(2);
        } else {
            console.log("Final TOEFL iBT Submission:", data);
            // API call logic would go here
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
                        <RegistrationFormStep
                            form={form}
                            onSubmit={handleFormSubmit}
                            onInvalid={onInvalid}
                            onBack={() => goToStep(0)}
                        />
                    )}

                    {currentStep === 2 && (
                        <ReviewStep
                            data={formData}
                            onEdit={() => goToStep(1)}
                            onBack={() => goToStep(1)}
                            onSubmit={form.handleSubmit(handleFormSubmit, onInvalid)}
                        />
                    )}
                </Form>
            </div>
        </div>
    );
}
