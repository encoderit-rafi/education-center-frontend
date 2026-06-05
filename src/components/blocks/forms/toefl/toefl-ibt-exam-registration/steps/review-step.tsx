"use client";

import React from "react";
import { format } from "date-fns";
import {
    User,
    ShieldCheck,
    Globe,
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { TToeflIbtSchema } from "../_type/toefl-ibt";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";

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
    return (
        <GlobalReviewStep
            onEdit={onEdit}
            onSubmit={onSubmit}
            paymentMethodValue={(form.watch() as any)?.paymentMethod}
            onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
            paymentMethodError={(form.formState.errors as any)?.paymentMethod}
            examName="TOEFL iBT Exam"
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
                            PERSONAL DETAILS
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Given Names
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.givenNames}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Middle Name
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.middleName || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Surnames
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.surnames || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Date of Birth
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.dateOfBirth ? format(data.dateOfBirth, "PPP") : "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Gender
                            </span>
                            <span className="text-sm font-bold text-slate-900 capitalize">
                                {data.gender || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Contact Number
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.phoneNumber || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Nationality
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.nationality || "N/A"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Identity & Contact Summary */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-black">
                        <ShieldCheck className="size-4" />
                        <span className="text-xs font-bold tracking-wideste">
                            IDENTITY & CONTACT
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                ID Type
                            </span>
                            <span className="text-sm font-bold text-slate-900 capitalize">
                                {data.idType?.replace("_", " ")}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                ID Number
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.idNumber || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Email
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.email}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                ID Expiry Date
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.idExpiryDate ? format(data.idExpiryDate, "PPP") : "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Identity Document
                            </span>
                            <span className="text-sm font-bold text-slate-900 truncate max-w-[200px]">
                                {data.idDocument
                                    ? (data.idDocument as File).name
                                    : "No file attached"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Test Info Summary */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-black">
                        <Globe className="size-4" />
                        <span className="text-xs font-bold tracking-wideste">
                            TEST INFORMATION
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Exam Date
                            </span>
                            <span className="text-sm font-bold text-[#A11D1D]">
                                {data.examDate ? format(data.examDate, "PPP") : "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Time Slot
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.examTimeSlot || "N/A"} Session
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Address Line 1
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.streetAddress1}
                            </span>
                        </div>
                        {data.streetAddress2 && (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Address Line 2
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.streetAddress2}
                                </span>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                City
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.city}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Country of Residence
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.country}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                First Language
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.firstLanguage || "N/A"}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                Education Level
                            </span>
                            <span className="text-sm font-bold text-slate-900">
                                {data.educationLevel?.replace(/_/g, " ") || "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalReviewStep>
    );
}
