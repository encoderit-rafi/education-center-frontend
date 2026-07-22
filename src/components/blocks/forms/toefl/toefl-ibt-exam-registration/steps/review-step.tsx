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
import { getEducationLevelLabel } from "@/lib/utils";

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
                                {data.idType?.replace("_", " ")}
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
                                {tFields("attachIdCopy")}
                            </span>
                            <span className="text-sm font-bold text-slate-900 truncate max-w-50">
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
                                {data.firstLanguage || t("na")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                {tToefl("educationLevel")}
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {getEducationLevelLabel(data.educationLevel)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalReviewStep>
    );
}
