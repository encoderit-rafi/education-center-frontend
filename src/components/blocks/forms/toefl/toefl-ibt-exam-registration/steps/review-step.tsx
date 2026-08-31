"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import {
    User,
    ShieldCheck,
    Globe,
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { TToeflIbtSchema } from "../_type/toefl-ibt";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";
import { getIdTypeLabel } from "@/lib/utils";

interface ReviewStepProps {
    data: TToeflIbtSchema;
    form: UseFormReturn<TToeflIbtSchema>;
    onEdit: () => void;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    onBack: () => void;
    baseFee: number;
    serviceFee: number;
    vat: number;
    total: number;
    selectedCourseData?: any;
    selectedWorkshopData?: any;
}

export function ReviewStep({
    data,
    form,
    onEdit,
    onSubmit,
    baseFee,
    serviceFee,
    total,
    selectedCourseData,
    selectedWorkshopData,
}: ReviewStepProps) {
    const t = useTranslations("FormsShared.GlobalReviewStep");
    const tFields = useTranslations("FormsShared.FormFields");
    const tToefl = useTranslations("FormsShared.TOEFL");
    return (
        <GlobalReviewStep
            onEdit={onEdit}
            onSubmit={onSubmit}
            paymentMethodValue={(form.watch() as any)?.paymentMethod}
            onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
            paymentMethodError={(form.formState.errors as any)?.paymentMethod}
            examName={tToefl("examName")}
            baseFee={baseFee}
            serviceFee={serviceFee}
            total={total}
            selectedCourseData={selectedCourseData}
            selectedWorkshopData={selectedWorkshopData}
            reviewStepNumber={3}
            paymentStepNumber={4}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Personal Details Summary */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-black">
                        <User className="size-4" />
                        <span className="text-xs font-bold tracking-wideste">
                            {t("personalDetails")}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("firstGivenNames")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.givenNames}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("middleName")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.middleName || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("surname")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.surnames || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("dateOfBirth")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.dateOfBirth ? format(data.dateOfBirth, "PPP") : t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("sex")}
                            </span>
                            <span className="text-sm font-bold text-slate-900 capitalize">
                                {data.gender || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("mobileNumber")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.phoneNumber || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("nationality")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.nationality || t("na")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Identity & Contact Summary */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-black">
                        <ShieldCheck className="size-4" />
                        <span className="text-xs font-bold tracking-wideste">
                            {t("identityContact")}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("identificationType")}
                            </span>
                            <span className="text-sm font-bold text-slate-900 capitalize">
                                {getIdTypeLabel(data.idType)}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("idNumber")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.idNumber || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("email")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.email}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("idExpiryDate")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.idExpiryDate ? format(data.idExpiryDate, "PPP") : t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("issuingAuthority")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.issuingAuthority || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("attachIdCopy")}
                            </span>
                            <span className="text-sm font-bold text-slate-900 wrap-break-word">
                                {data.idDocument
                                    ? (data.idDocument as File).name
                                    : t("noFileAttached")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Test Info Summary */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-black">
                        <Globe className="size-4" />
                        <span className="text-xs font-bold tracking-wideste">
                            {t("testInformation")}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tToefl("examDate")}
                            </span>
                            <span className="text-sm font-bold text-[#A11D1D]">
                                {data.examDate ? format(data.examDate, "PPP") : t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Exam Day
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.examDate ? format(new Date(data.examDate), "EEEE") : t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tToefl("timeSlot")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.examTimeSlot ? `${data.examTimeSlot} ${t("session")}` : t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("addressLine1")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.streetAddress1}
                            </span>
                        </div>
                        {data.streetAddress2 && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    {tFields("addressLine2")}
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.streetAddress2}
                                </span>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("emirateCity")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.city}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tFields("countryOfResidence")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.country}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tToefl("firstLanguage")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.firstLanguage === "Other"
                                    ? data.firstLanguageOther || t("otherNotSpecified")
                                    : data.firstLanguage || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Years Studying English
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.yearsStudyingEnglish || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Have You Taken TOEFL Before?
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.takenBefore || t("na")}
                            </span>
                        </div>
                        {data.takenBefore === "Yes" && (
                            <>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                        Was It Less Than 2 Years Ago?
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">
                                        {data.lessThanTwoYears || t("na")}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                        Existing Account
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">
                                        {data.existingAccount || t("na")}
                                    </span>
                                </div>
                            </>
                        )}
                        {data.reasonsForTakingToefl && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Reason for Taking TOEFL
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.reasonsForTakingToefl}
                                </span>
                            </div>
                        )}
                        {data.nextLevelOfStudy && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Next Level of Study
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.nextLevelOfStudy}
                                </span>
                            </div>
                        )}
                        {data.desiredFieldOfStudy && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Desired Field of Study
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.desiredFieldOfStudy === "Other"
                                        ? data.desiredFieldOfStudyOther || t("otherNotSpecified")
                                        : data.desiredFieldOfStudy}
                                </span>
                            </div>
                        )}
                        {data.intendedEnrollmentDate && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Intended Enrollment Date
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {format(data.intendedEnrollmentDate, "PPP")}
                                </span>
                            </div>
                        )}
                        {data.destinationCountry && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Destination Country
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.destinationCountry}
                                </span>
                            </div>
                        )}
                        {data.marketingPreference && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Marketing Preference
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.marketingPreference}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </GlobalReviewStep>
    );
}
