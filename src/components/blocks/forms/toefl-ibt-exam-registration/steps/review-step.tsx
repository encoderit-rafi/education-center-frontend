"use client";

import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Payment from "@/components/blocks/payment";
import { TToeflIbtSchema } from "../_type";

interface ReviewStepProps {
    data: TToeflIbtSchema;
    onEdit: (step: number) => void;
    onSubmit: () => void;
    onBack: () => void;
}

export function ReviewStep({
    data,
    onEdit,
    onSubmit,
    onBack,
}: ReviewStepProps) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthLabel = months[parseInt(data.dobMonth) - 1];

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Review Section */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 md:p-10 space-y-8">
                <div className="flex justify-between items-center border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase">Review Your Details</h3>
                    <button 
                        type="button" 
                        onClick={() => onEdit(1)} 
                        className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline"
                    >
                        Edit
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Full Name</p>
                            <p className="font-bold text-gray-900">
                                {data.givenName} {data.middleName && `${data.middleName} `}{data.familyName}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Date of Birth</p>
                            <p className="font-bold text-gray-900">
                                {data.dobDay} {monthLabel} {data.dobYear}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Gender</p>
                            <p className="font-bold text-gray-900 capitalize">{data.gender}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Contact Number</p>
                            <p className="font-bold text-gray-900">{data.phoneNumber}</p>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                            <p className="font-bold text-gray-900">
                                {data.city}, {data.state && `${data.state}, `}{data.country}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Address</p>
                            <p className="font-bold text-gray-900 leading-relaxed">
                                {data.streetAddress1}
                                {data.streetAddress2 && <><br />{data.streetAddress2}</>}
                                {data.postalCode && <><br />ZIP: {data.postalCode}</>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#A11D1D]" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Secure Payment</h2>
                </div>
                <Payment amount={1260} currency="AED" />
            </div>

            {/* Final Actions */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
                <Button
                    variant="ghost"
                    type="button"
                    onClick={onBack}
                    className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all"
                >
                    Back
                </Button>
                <Button
                    onClick={onSubmit}
                    className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-10 h-14 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 flex items-center gap-3 group transition-all"
                >
                    Confirm & Pay
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
