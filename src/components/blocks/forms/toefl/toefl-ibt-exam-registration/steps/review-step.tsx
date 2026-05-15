"use client";

import React from "react";
import { format } from "date-fns";
import {
    User,
    ShieldCheck,
    Globe,
    CreditCard,
    Edit3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { TToeflIbtSchema } from "../_type/toefl-ibt";
import Payment from "@/components/blocks/payment";
import { PriceDisplay } from "@/components/ui/price-display";
import Stepper from "@/components/stepper";

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
        <form onSubmit={onSubmit} className="space-y-12 animate-in fade-in duration-500">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">
                            Review Your Details
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 font-medium">
                            Please confirm all information is correct before proceeding to payment.
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        onClick={onEdit}
                        className="text-[#A11D1D] hover:text-[#A11D1D] hover:bg-[#A11D1D]/5 font-bold flex items-center gap-2 px-4 py-2 self-start md:self-center uppercase tracking-widest text-xs"
                    >
                        <Edit3 className="size-4" /> Edit Details
                    </Button>
                </div>

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
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                                    Issuing Authority
                                </span>
                                <span className="text-sm font-bold text-slate-900">
                                    {data.issuingAuthority || "N/A"}
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
            </div>

            {/* Payment Section */}
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <Stepper step={4}>Payment</Stepper>
                    <div className="text-right">
                        <PriceDisplay
                            amount={total}
                            className="text-2xl font-black text-[#A11D1D] flex items-center justify-end"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                            <Payment amount={total} currency={"AED"} />
                        </div>
                        <Button
                            type="submit"
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
                        >
                            Book
                        </Button>
                    </div>

                    <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
                        <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
                            <CreditCard className="w-5 h-5 text-[#A11D1D]" />
                            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">Order Summary</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">TOEFL iBT Exam</span>
                                <PriceDisplay amount={baseFee} className="font-bold text-slate-900" />
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">Registration Service Fee</span>
                                <PriceDisplay amount={serviceFee} className="font-bold text-slate-900" />
                            </div>

                            {data.selectedCourse && selectedCourseData && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">
                                        Course: {selectedCourseData.name}
                                    </span>
                                    <PriceDisplay
                                        amount={
                                            selectedCourseData.price *
                                            (1 - selectedCourseData.special_discount / 100)
                                        }
                                        className="font-bold text-slate-900"
                                    />
                                </div>
                            )}

                            {data.selectedWorkshop && selectedWorkshopData && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">
                                        Workshop: {selectedWorkshopData.name}
                                    </span>
                                    <PriceDisplay
                                        amount={selectedWorkshopData.price}
                                        className="font-bold text-slate-900"
                                    />
                                </div>
                            )}

                            <div className="pt-6 border-t border-slate-200">
                                <div className="flex justify-between items-center">
                                    <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                                        Total Amount
                                    </span>
                                    <PriceDisplay
                                        amount={total}
                                        className="text-3xl font-black text-[#A11D1D]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
