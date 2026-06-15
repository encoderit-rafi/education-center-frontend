"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { languages } from "@/lib/languages-data";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./_type/toefl-ibt";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { format } from "date-fns";
import { GlobalReviewStep, ReviewSummaryGrid } from "@/components/blocks/forms/global-review-step";
import { PriceDisplay } from "@/components/ui/price-display";
import { toast } from "sonner";
import { getEducationLevelLabel } from "@/lib/utils";

// Import Steps
import { TermsStep } from "./steps/terms-step";
import { DateStep } from "./steps/date-step";
import { RegistrationFormStep } from "./steps/registration-form-step";

// Static courses and workshops data removed to be loaded dynamically from the API

interface FormProps {
    examId?: string;
}

export default function FormTOEFLIBTRegistration({ examId: initialExamId }: FormProps = {}) {
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
        : examsList.find((e: any) => e.slug === "toefl-ibt");

    const examId = initialExamId || activeExam?.id;

    const { data: courseDetailResponse } = useQuery({
        queryKey: ["course-detail", "toefl"],
        queryFn: async () => {
            const response = await api.get("/courses/toefl");
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
            idType: "" as any,
            idNumber: "",
            idExpiryDate: undefined,
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
            reasonsForTakingToefl: "",
            intendedEnrollmentDate: undefined,
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

    const isExpressRegistration = (date: Date | undefined): boolean => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);
        const diffTime = selectedDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 7;
    };

    const calculateTotal = () => {
        const isExpress = isExpressRegistration(formData.examDate);

        // Base/Standard TOEFL fees
        const baseFeeAED = activeExam?.examFee ? parseFloat(activeExam.examFee) : 1270;
        const baseFeeUSD = Math.round(baseFeeAED / 3.67) || 340;

        // Express registration fee (7 days or less)
        const expressFeeUSD = isExpress ? 40 : 0;
        const expressFeeAED = isExpress ? 190 : 0;

        // Course fee (in AED)
        const selectedCourseData = formData.selectedCourse
            ? coursesData.find((c: any) => c.id === formData.selectedCourse)
            : null;
        const coursePriceAED = selectedCourseData
            ? (selectedCourseData.discounted_price ?? selectedCourseData.price)
            : 0;

        // Workshop fee (in AED)
        const workshopPriceAED = formData.selectedWorkshop
            ? (workshopsData as any)[formData.selectedWorkshop]?.price || 0
            : 0;

        // Convert Course & Workshop fees to USD for display purposes
        const AED_TO_USD_RATE = 3.67;
        const coursePriceUSD = coursePriceAED > 0 ? Math.round(coursePriceAED / AED_TO_USD_RATE) : 0;
        const workshopPriceUSD = workshopPriceAED > 0 ? Math.round(workshopPriceAED / AED_TO_USD_RATE) : 0;

        const totalAED = baseFeeAED + expressFeeAED + coursePriceAED + workshopPriceAED;
        const totalUSD = baseFeeUSD + expressFeeUSD + coursePriceUSD + workshopPriceUSD;

        return {
            baseFeeUSD,
            baseFeeAED,
            expressFeeUSD,
            expressFeeAED,
            coursePriceUSD,
            coursePriceAED,
            workshopPriceUSD,
            workshopPriceAED,
            totalAED,
            totalUSD,
            isExpress
        };
    };

    const pricing = calculateTotal();
    const total = pricing.totalAED;

    const paymentMutation = useMutation({
        mutationFn: (body: Record<string, unknown>) =>
            api.post("/payments/initiate", body),
        onSuccess: (response) => {
            const checkoutUrl = response.data?.data?.checkoutUrl;
            if (checkoutUrl) {
                toast.success("Redirecting to checkout...", { id: "toefl-submit" });
                window.location.href = checkoutUrl;
            } else {
                console.error("Checkout URL not found in response");
                toast.error("Checkout URL not found in server response.", { id: "toefl-submit" });
            }
        },
        onError: (error: any) => {
            console.error("Payment initiation failed:", error);
            toast.error(error?.response?.data?.message || "Payment initiation failed.", { id: "toefl-submit" });
        },
    });

    const bookingMutation = useMutation({
        mutationFn: (newBooking: Record<string, unknown>) =>
            api.post("/exam-bookings", newBooking),
        onSuccess: (response) => {
            const bookingId = response.data?.data?.id;
            toast.loading("Initiating payment...", { id: "toefl-submit" });
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
            toast.error(error?.response?.data?.message || "Exam booking failed.", { id: "toefl-submit" });
        },
    });

    const handleFormSubmit: SubmitHandler<TToeflIbtSchema> = async (data) => {
        if (currentStep < 3) {
            goToStep(3);
        } else {
            try {
                toast.loading("Uploading ID document...", { id: "toefl-submit" });

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
                    toast.error("Exam details are still loading. Please try again in a moment.", { id: "toefl-submit" });
                    return;
                }

                toast.loading("Submitting booking request...", { id: "toefl-submit" });

                bookingMutation.mutate({
                    exam_id: examId,
                    test_module: "TOEFL iBT",
                    given_names: data.givenNames,
                    first_name: data.givenNames,
                    middle_name: data.middleName,
                    surnames: data.surnames,
                    last_name: data.surnames || "",
                    date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth as any).toISOString() : "",
                    gender: data.gender,
                    email: data.email,
                    mobile_number: data.phoneNumber,
                    phone: data.phoneNumber,
                    residence_country: data.country,
                    country: data.country,
                    postal_address_1: data.streetAddress1,
                    postal_address_2: data.streetAddress2,
                    city: data.city,
                    state: data.state,
                    postcode: data.postalCode,
                    po_box: data.poBox,
                    id_type: data.idType === "emirates_id" ? "emirates" : (data.idType === "passport" ? "passport" : (data.idType || "passport")),
                    id_number: data.idNumber,
                    id_expiry_date: data.idExpiryDate
                        ? new Date(data.idExpiryDate as any).toISOString()
                        : "",
                    id_document: idDocumentUrl,
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
                    reason_for_taking_test: data.reasonsForTakingToefl || "",
                    destination_country: data.destinationCountry,
                    marketing_preference: data.marketingPreference,
                    selected_course: data.selectedCourse,
                    selected_workshop: data.selectedWorkshop,
                    payment_methods: formData.paymentMethod || data.paymentMethod,
                    exam_time_slot: data.examTimeSlot,
                    exam_fee: (pricing.baseFeeAED + pricing.expressFeeAED) || 1270,
                    total_amount: total,
                    exam_date: data.examDate
                        ? new Date(data.examDate as any).toISOString()
                        : "",
                });
            } catch (error: any) {
                console.error("Form submission error:", error);
                toast.error(error?.message || "Something went wrong during submission.", { id: "toefl-submit" });
            }
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
            </div>

            <div className="max-w-4xl mx-auto">
                <Form {...form}>
                    {currentStep === 0 && (
                        <TermsStep
                            onNext={() => goToStep(1)}
                            examFee={pricing.baseFeeAED}
                            additionalFee={activeExam?.additionalFee ? parseFloat(activeExam.additionalFee) : 100}
                        />
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
                            coursesData={coursesData}
                            workshopsData={workshopsData}
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
                            baseFee={pricing.baseFeeAED}
                            serviceFee={pricing.expressFeeAED}
                            total={pricing.totalAED}
                            selectedCourseData={formData.selectedCourse ? coursesData.find((c: any) => c.id === formData.selectedCourse) : undefined}
                            selectedWorkshopData={formData.selectedWorkshop ? (workshopsData as any)[formData.selectedWorkshop] : undefined}
                            reviewStepNumber={3}
                            paymentStepNumber={4}
                            customOrderSummary={
                                <div className="space-y-4">
                                    {activeExam?.usdExamFee && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500 font-medium">USD Exam Fee</span>
                                            <span className="font-bold text-slate-900">
                                                ${parseFloat(activeExam.usdExamFee).toFixed(2)}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-sm items-center">
                                        <span className="text-slate-500 font-medium">Standard Registration Fee</span>
                                        <span className="font-bold text-slate-900 inline-flex items-center gap-1">
                                            ${pricing.baseFeeUSD} <span className="text-slate-400 font-normal text-xs inline-flex items-center gap-0.5">(estimated <PriceDisplay amount={pricing.baseFeeAED} minimumFractionDigits={0} maximumFractionDigits={0} className="text-slate-400 font-normal text-xs" />)</span>
                                        </span>
                                    </div>

                                    {pricing.isExpress && (
                                        <div className="flex justify-between text-sm items-center animate-in fade-in slide-in-from-top-1 duration-300">
                                            <span className="text-slate-500 font-medium">Express Registration Fee</span>
                                            <span className="font-bold text-red-700 inline-flex items-center gap-1">
                                                $40 <span className="text-red-500/80 font-normal text-xs inline-flex items-center gap-0.5">(estimated <PriceDisplay amount={190} minimumFractionDigits={0} maximumFractionDigits={0} className="text-red-500/80 font-normal text-xs" />)</span>
                                            </span>
                                        </div>
                                    )}

                                    {formData.selectedCourse && pricing.coursePriceAED > 0 && (
                                        <div className="flex justify-between text-sm items-center">
                                            <span className="text-slate-500 font-medium">
                                                Course: {coursesData.find((c: any) => c.id === formData.selectedCourse)?.name}
                                            </span>
                                            <span className="font-bold text-slate-900 inline-flex items-center gap-1">
                                                ${pricing.coursePriceUSD} <span className="text-slate-400 font-normal text-xs inline-flex items-center gap-0.5">(<PriceDisplay amount={pricing.coursePriceAED} minimumFractionDigits={0} maximumFractionDigits={0} className="text-slate-400 font-normal text-xs" />)</span>
                                            </span>
                                        </div>
                                    )}

                                    {formData.selectedWorkshop && pricing.workshopPriceAED > 0 && (
                                        <div className="flex justify-between text-sm items-center">
                                            <span className="text-slate-500 font-medium">
                                                Workshop: {(workshopsData as any)[formData.selectedWorkshop]?.name}
                                            </span>
                                            <span className="font-bold text-slate-900 inline-flex items-center gap-1">
                                                ${pricing.workshopPriceUSD} <span className="text-slate-400 font-normal text-xs inline-flex items-center gap-0.5">(<PriceDisplay amount={pricing.workshopPriceAED} minimumFractionDigits={0} maximumFractionDigits={0} className="text-slate-400 font-normal text-xs" />)</span>
                                            </span>
                                        </div>
                                    )}

                                    <div className="pt-6 border-t border-slate-200">
                                        <div className="flex justify-between items-center">
                                            <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                                                Total Amount
                                            </span>
                                            <div className="text-right flex items-baseline gap-2 justify-end flex-wrap">
                                                <span className="text-3xl font-black text-primary">
                                                    ${pricing.totalUSD}
                                                </span>
                                                <span className="text-3xl font-semibold text-primary inline-flex items-center gap-0.5 justify-end">
                                                    <span className="text-xs font-semibold text-primary"> estimated </span> <PriceDisplay amount={pricing.totalAED} minimumFractionDigits={0} maximumFractionDigits={0} className="text-primary font-semibold text-3xl" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
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

                                ]}
                                testInformation={[
                                    { label: "Exam Date", value: formData.examDate ? format(new Date(formData.examDate as any), "PPP") : "N/A", highlight: true },
                                    { label: "Time Slot", value: `${formData.examTimeSlot || "N/A"} Session` },
                                    { label: "Address Line 1", value: formData.streetAddress1 },
                                    ...(formData.streetAddress2 ? [{ label: "Address Line 2", value: formData.streetAddress2 }] : []),
                                    { label: "City", value: formData.city },
                                    { label: "Country of Residence", value: formData.country },
                                    { label: "First Language", value: formData.firstLanguage === "Other" ? (formData.firstLanguageOther || "Other") : (formData.firstLanguage || "N/A") },
                                    { label: "Education Level", value: getEducationLevelLabel(formData.educationLevel) },
                                    { label: "Next Level of Study", value: formData.nextLevelOfStudy === "Other" ? (formData.nextLevelOfStudyOther || "Other") : (formData.nextLevelOfStudy || "N/A") },
                                    { label: "Desired Field of Study", value: formData.desiredFieldOfStudy === "Other" ? (formData.desiredFieldOfStudyOther || "Other") : (formData.desiredFieldOfStudy || "N/A") },
                                    { label: "Reason for taking TOEFL", value: formData.reasonsForTakingToefl || "N/A" },
                                    { label: "Intended Enrollment Date", value: formData.intendedEnrollmentDate ? format(new Date(formData.intendedEnrollmentDate as any), "MMMM yyyy") : "N/A" },
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
