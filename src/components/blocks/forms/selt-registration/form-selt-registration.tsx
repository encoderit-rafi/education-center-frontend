"use client";
import React, { useMemo, useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
    User,
    Globe,
    Info,
    ArrowRight,
    School,
    CheckCircle2,
    Lock,
    ShieldCheck,
    CreditCard,
    UploadCloud,
    Camera,
    X,
    MapPin,
    Phone
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { Textarea } from "@/components/ui/textarea";

import { RefinedSeltSchema, type TSeltFormSchema } from "./_type";

export default function FormSELTRegistration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showValidationWarning, setShowValidationWarning] = useState(false);

    const form = useForm<TSeltFormSchema>({
        resolver: zodResolver(RefinedSeltSchema),
        mode: "onChange",
        defaultValues: {
            idLastName: "",
            idFirstNames: "",
            idMiddleName: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            repeatDobDay: "",
            repeatDobMonth: "",
            repeatDobYear: "",
            nationality: "",
            countryOfBirth: "",
            townCityOfBirth: "",
            gender: "",
            idType: "",
            idNumber: "",
            repeatIdNumber: "",
            idExpiryDay: "",
            idExpiryMonth: "",
            idExpiryYear: "",
            reason: "ukvi",
            reasonOther: "",
            passportCopy: undefined,
            marketingConsent: "",
            takenBefore: "",
            takenWithinTwoYears: "",
            hasExistingAccount: "",
            englishLastName: "",
            englishFirstNames: "",
            englishMiddleName: "",
            addressLine1: "",
            addressLine2: "",
            addressLine3: "",
            townCity: "",
            country: "",
            postcode: "",
            telephone: "",
        },
    });

    const { control, handleSubmit, trigger, formState: { errors } } = form;
    const formData = useWatch({ control });

    const getFieldsForStep = (currentStep: number) => {
        switch (currentStep) {
            case 1: return ["idLastName", "idFirstNames", "idMiddleName", "dobDay", "dobMonth", "dobYear", "repeatDobDay", "repeatDobMonth", "repeatDobYear", "nationality", "countryOfBirth", "townCityOfBirth", "gender"];
            case 2: return ["idType", "idNumber", "repeatIdNumber", "idExpiryDay", "idExpiryMonth", "idExpiryYear", "reason", "reasonOther", "takenBefore", "takenWithinTwoYears", "hasExistingAccount", "marketingConsent"];
            case 3: return ["englishLastName", "englishFirstNames", "englishMiddleName", "addressLine1", "addressLine2", "addressLine3", "townCity", "country", "postcode", "telephone", "passportCopy"];
            default: return [];
        }
    };

    const handleNext = async () => {
        const fields = getFieldsForStep(currentStep);
        const isValid = await trigger(fields as any);
        if (isValid) {
            setShowValidationWarning(false);
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 400, behavior: "smooth" });
        } else {
            setShowValidationWarning(true);
            // Scroll to the first error
            const firstError = Object.keys(errors)[0];
            if (firstError) {
                const element = document.getElementsByName(firstError)[0];
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    const onSubmit: SubmitHandler<TSeltFormSchema> = (data) => {
        console.log("SELT Form Data:", data);
        setIsSubmitted(true);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    return (
        <div className="section base-py">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto base-px">
                <div className="flex flex-col mb-8">
                    <span className="section-label text-xs font-black uppercase tracking-widest text-[#A11D1D] mb-2">Step {currentStep} of 4</span>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-[#A11D1D] text-white flex items-center justify-center font-black text-sm shadow-lg shadow-[#A11D1D]/20">
                            {currentStep}
                        </span>
                        <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
                            {currentStep === 1
                                ? "Personal Details"
                                : currentStep === 2
                                    ? "Identification Details"
                                    : currentStep === 3
                                        ? "Address & Documents"
                                        : "Review Registration"}
                        </h2>
                    </div>
                    <div
                        className="w-full h-1 bg-slate-100 mt-4 rounded-full overflow-hidden"
                    >
                        <div
                            className="h-full bg-[#A11D1D] transition-all duration-500"
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                        />
                    </div>
                </div>

                {showValidationWarning && (
                    <div className="bg-red-50 border border-red-100 rounded-2xl px-6 py-4 flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                            <Info className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xs font-black text-red-600 uppercase tracking-widest">
                            Please correct the highlighted errors to proceed.
                        </p>
                    </div>
                )}

                {isSubmitted ? (
                    <div className="bg-white rounded-3xl p-12 md:p-16 text-center space-y-8 border border-slate-100 shadow-sm animate-in fade-in zoom-in duration-700">
                        <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-green-100">
                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Registration <span className="text-green-500">Successful!</span></h2>
                            <p className="text-slate-500 text-sm font-medium max-w-md mx-auto leading-relaxed">
                                Your SELT registration has been received. Our team will review your documents and contact you shortly with the next steps.
                            </p>
                        </div>
                        <div className="pt-8">
                            <Button 
                                onClick={() => window.location.reload()} 
                                className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg"
                            >
                                Return to Home
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Form {...form}>
                        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>

                            {/* Step 1: Personal Details */}
                            {currentStep === 1 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Personal Details</h3>
                                        <p className="text-gray-500 text-sm font-medium">Please enter your information exactly as it appears on your identification document.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField control={control} name="idLastName" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID last name:*</FormLabel>
                                                    <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter last name" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="idFirstNames" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID first names:*</FormLabel>
                                                    <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter first names" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={control} name="idMiddleName" render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID middle name:</FormLabel>
                                                <p className="text-[10px] text-gray-400 font-medium">If you do not have a middle name or your middle name is not included on your ID then please leave this field empty.</p>
                                                <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter middle name (optional)" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="space-y-4">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Date of birth:*</FormLabel>
                                            <p className="text-[10px] text-gray-400 font-medium -mt-2">If you are a minor you will need consent from your parent or guardian.</p>
                                            <div className="grid grid-cols-3 gap-4">
                                                <FormField control={control} name="dobDay" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="dobMonth" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="dobYear" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-6 border-t border-slate-100">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Repeat your date of birth:*</FormLabel>
                                            <p className="text-[10px] text-gray-400 font-medium -mt-2">Please type in the same date of birth again.</p>
                                            <div className="grid grid-cols-3 gap-4">
                                                <FormField control={control} name="repeatDobDay" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="repeatDobMonth" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="repeatDobYear" render={({ field }) => (
                                                    <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                            <FormField control={control} name="nationality" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of nationality:*</FormLabel>
                                                    <p className="text-[10px] text-gray-400 font-medium">As indicated on the ID you register with.</p>
                                                    <FormControl><CountryDropdown placeholder="Select nationality" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12 bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all rounded-lg shadow-none" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="countryOfBirth" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of birth:*</FormLabel>
                                                    <p className="text-[10px] text-gray-400 font-medium">This is the country you were born in.</p>
                                                    <FormControl><CountryDropdown placeholder="Select country of birth" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12 bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all rounded-lg shadow-none" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField control={control} name="townCityOfBirth" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Town or city of birth:*</FormLabel>
                                                    <p className="text-[10px] text-gray-400 font-medium">This is the town or city you were born in.</p>
                                                    <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter town or city" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="gender" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Gender:*</FormLabel>
                                                    <p className="text-[10px] text-gray-400 font-medium">This is your gender.</p>
                                                    <FormControl>
                                                        <SearchableDropdown
                                                            options={[
                                                                { label: "Male", value: "male" },
                                                                { label: "Female", value: "female" },
                                                                { label: "Other", value: "other" }
                                                            ]}
                                                            placeholder="Select your gender"
                                                            value={field.value}
                                                            onChange={(val) => field.onChange(val)}
                                                            className="h-12 border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all rounded-lg"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Identification Details */}
                            {currentStep === 2 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Identification Details</h3>
                                        <p className="text-gray-500 text-sm font-medium">Please provide your identification document information and test reason.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 md:p-8 space-y-8">
                                            <FormField control={control} name="idType" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID to present at the test centre:*</FormLabel>
                                                    <p className="text-[10px] text-gray-400 font-medium">Please select the ID you will bring to the test centre.</p>
                                                    <FormControl>
                                                        <SearchableDropdown
                                                            options={[
                                                                { label: "Passport", value: "passport" },
                                                                { label: "Govt ID card, can be Biometric (only accepted in the country it was issued)", value: "govt_id" },
                                                                { label: "EU ID card (only accepted in the country it was issued)**", value: "eu_id" },
                                                                { label: "Valid travel document with photograph (excluding Emergency Travel Documents)", value: "travel_doc" },
                                                                { label: "UK issued Biometric Residence Card (UK BRC)", value: "uk_brc" },
                                                                { label: "UK issued Biometric Residence Permit (UK BRP)", value: "uk_brp" },
                                                                { label: "Emirates ID (only accepted in UAE)", value: "emirates_id" }
                                                            ]}
                                                            placeholder="Please choose a type of ID"
                                                            value={field.value}
                                                            onChange={(val) => field.onChange(val)}
                                                            className="h-12 border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all rounded-lg"
                                                        />
                                                    </FormControl>
                                                    <div className="pt-2">
                                                        <p className="text-[10px] font-black text-[#A11D1D] uppercase tracking-widest">Acceptable ID: Only Passport or Emirates ID.</p>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FormField control={control} name="idNumber" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID number:*</FormLabel>
                                                        <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter ID number" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="repeatIdNumber" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Repeat your ID number:*</FormLabel>
                                                        <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Repeat ID number" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="space-y-4">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Expiry date:</FormLabel>
                                                <p className="text-[10px] text-gray-400 font-medium -mt-2">Do not complete if your document does not have one. (e.g., 23 10 2025)</p>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <FormField control={control} name="idExpiryDay" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="idExpiryMonth" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="idExpiryYear" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-12 rounded-lg border-slate-200 text-center focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <Info className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">Reason for test</h4>
                                                </div>

                                                <FormField control={control} name="reason" render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormControl>
                                                            <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" onValueChange={field.onChange} value={field.value}>
                                                                <div
                                                                    onClick={() => field.onChange("ukvi")}
                                                                    className={cn(
                                                                        "flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer group bg-white shadow-sm",
                                                                        field.value === "ukvi" ? "border-[#A11D1D] ring-4 ring-[#A11D1D]/5" : "border-slate-100 hover:border-slate-200"
                                                                    )}
                                                                >
                                                                    <RadioGroupItem value="ukvi" id="reason-ukvi" className="border-[#A11D1D] text-[#A11D1D] mt-1" />
                                                                    <Label htmlFor="reason-ukvi" className="flex flex-col cursor-pointer">
                                                                        <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">UKVI</span>
                                                                        <span className="text-[10px] text-gray-400 font-medium leading-tight mt-1">For UK Visa and Immigration applications</span>
                                                                    </Label>
                                                                </div>
                                                                <div
                                                                    onClick={() => field.onChange("other")}
                                                                    className={cn(
                                                                        "flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer group bg-white shadow-sm",
                                                                        field.value === "other" ? "border-[#A11D1D] ring-4 ring-[#A11D1D]/5" : "border-slate-100 hover:border-slate-200"
                                                                    )}
                                                                >
                                                                    <RadioGroupItem value="other" id="reason-other" className="border-[#A11D1D] text-[#A11D1D] mt-1" />
                                                                    <Label htmlFor="reason-other" className="flex flex-col cursor-pointer">
                                                                        <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">Other</span>
                                                                    </Label>
                                                                </div>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        {field.value === "other" && (
                                                            <FormField control={control} name="reasonOther" render={({ field: otherField }) => (
                                                                <FormItem className="animate-in fade-in slide-in-from-top-2 duration-300">
                                                                    <FormControl>
                                                                        <Textarea
                                                                            className="bg-white border-slate-200 rounded-lg min-h-[100px] focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 text-sm"
                                                                            placeholder="Please specify your reason here..."
                                                                            {...otherField}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />
                                                        )}
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="h-px bg-slate-100"></div>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <Globe className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">Test History</h4>
                                                </div>

                                                <FormField control={control} name="takenBefore" render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-sm font-bold text-gray-700">Have you taken the Skills for English Test (SELT) before?*</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup className="flex gap-8 items-center h-12" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                {["yes", "no"].map(v => (
                                                                    <div key={v} className="flex items-center space-x-2 group cursor-pointer">
                                                                        <RadioGroupItem value={v} id={`taken-${v}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                        <Label htmlFor={`taken-${v}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer capitalize">{v}</Label>
                                                                    </div>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                {formData.takenBefore === "yes" && (
                                                    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                                        <FormField control={control} name="takenWithinTwoYears" render={({ field }) => (
                                                            <FormItem className="space-y-4">
                                                                <FormLabel className="text-sm font-bold text-gray-700">Was it less than 2 years?*</FormLabel>
                                                                <FormControl>
                                                                    <RadioGroup className="flex flex-wrap gap-8" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                        {[
                                                                            { label: "Yes", value: "yes" },
                                                                            { label: "No", value: "no" },
                                                                            { label: "I do not know", value: "dont_know" }
                                                                        ].map(v => (
                                                                            <div key={v.value} className="flex items-center space-x-2 group cursor-pointer">
                                                                                <RadioGroupItem value={v.value} id={`2yrs-${v.value}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                                <Label htmlFor={`2yrs-${v.value}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">{v.label}</Label>
                                                                            </div>
                                                                        ))}
                                                                    </RadioGroup>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />

                                                        <FormField control={control} name="hasExistingAccount" render={({ field }) => (
                                                            <FormItem className="space-y-4">
                                                                <FormLabel className="text-sm font-bold text-gray-700">Do you have an existing account?*</FormLabel>
                                                                <FormControl>
                                                                    <RadioGroup className="flex flex-wrap gap-8" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                        {[
                                                                            { label: "Yes", value: "yes" },
                                                                            { label: "No", value: "no" },
                                                                            { label: "I forgot my details", value: "forgot" }
                                                                        ].map(v => (
                                                                            <div key={v.value} className="flex items-center space-x-2 group cursor-pointer">
                                                                                <RadioGroupItem value={v.value} id={`acc-${v.value}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                                <Label htmlFor={`acc-${v.value}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">{v.label}</Label>
                                                                            </div>
                                                                        ))}
                                                                    </RadioGroup>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="h-px bg-slate-100"></div>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <Info className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">Marketing Consent</h4>
                                                </div>
                                                <FormField control={control} name="marketingConsent" render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-sm font-bold text-gray-700">Would you like to receive updates and special offers?*</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup className="flex gap-12 items-center h-12" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                <div className="flex items-center space-x-2 group cursor-pointer">
                                                                    <RadioGroupItem value="yes" id="m_yes_selt" className="border-[#A11D1D] text-[#A11D1D]" />
                                                                    <Label htmlFor="m_yes_selt" className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">Yes</Label>
                                                                </div>
                                                                <div className="flex items-center space-x-2 group cursor-pointer">
                                                                    <RadioGroupItem value="no" id="m_no_selt" className="border-[#A11D1D] text-[#A11D1D]" />
                                                                    <Label htmlFor="m_no_selt" className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">No</Label>
                                                                </div>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Address & Documents */}
                            {currentStep === 3 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Address & Documents</h3>
                                        <p className="text-gray-500 text-sm font-medium">Finalize your registration with your address and document uploads.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-8">
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <Globe className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">English Equivalent</h4>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <FormField control={control} name="englishLastName" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">English last name:*</FormLabel>
                                                            <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter last name" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="englishFirstNames" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">English first names:*</FormLabel>
                                                            <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter first names" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={control} name="englishMiddleName" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">English middle name:</FormLabel>
                                                        <p className="text-[10px] text-gray-400 font-medium">If you do not have a middle name then please leave this field empty.</p>
                                                        <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter middle name (optional)" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="h-px bg-slate-100"></div>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <UploadCloud className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">Document Upload</h4>
                                                </div>

                                                <FormField control={control} name="passportCopy" render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-sm font-bold text-gray-700">Upload Your Passport Copy (Optional)</FormLabel>
                                                        <FormControl>
                                                            <div className="relative group h-48 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#A11D1D]/50 hover:bg-slate-50/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden bg-white shadow-sm">
                                                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A11D1D]/10 transition-all duration-500">
                                                                    <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-[#A11D1D]" />
                                                                </div>
                                                                <div className="text-center">
                                                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-[#A11D1D] block mb-1">Choose File</span>
                                                                    <span className="text-[10px] text-gray-400 block">(pdf, docx, doc, png, jpeg)</span>
                                                                    <span className="text-[9px] text-gray-300 block mt-1 uppercase font-black tracking-widest">Max size 128 MB</span>
                                                                </div>
                                                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files?.[0])} accept=".pdf,.docx,.doc,.png,.jpg,.jpeg" />
                                                                {field.value && <div className="absolute inset-0 bg-white flex items-center justify-center p-6 animate-in fade-in duration-300">
                                                                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 w-full shadow-sm">
                                                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                                        <span className="text-xs font-bold text-gray-700 truncate flex-1">{(field.value as File).name}</span>
                                                                        <button type="button" onClick={() => field.onChange(undefined)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all"><X className="w-4 h-4" /></button>
                                                                    </div>
                                                                </div>}
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="h-px bg-slate-100"></div>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest">Your Address</h4>
                                                </div>

                                                <div className="space-y-4">
                                                    <FormField control={control} name="addressLine1" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Address Line 1:*</FormLabel>
                                                            <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Street address" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <FormField control={control} name="addressLine2" render={({ field }) => (
                                                            <FormItem className="space-y-2">
                                                                <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Apartment, suite, etc. (optional)" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                        <FormField control={control} name="addressLine3" render={({ field }) => (
                                                            <FormItem className="space-y-2">
                                                                <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Further details (optional)" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <FormField control={control} name="townCity" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Town or City:*</FormLabel>
                                                            <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter city" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="country" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country:*</FormLabel>
                                                            <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12 bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all rounded-lg shadow-none" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <FormField control={control} name="postcode" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Postcode / Zip code:*</FormLabel>
                                                            <FormControl><Input className="h-12 rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all" placeholder="Enter postcode" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="telephone" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Telephone:*</FormLabel>
                                                            <p className="text-[10px] text-gray-400 font-medium">Give us the best number to contact you in case there is a problem.</p>
                                                            <FormControl>
                                                                <div className="relative h-12 rounded-lg bg-white border border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-[#A11D1D]/5 transition-all overflow-hidden">
                                                                    <PhoneInput {...field} defaultCountry="AE" className="h-full w-full border-none focus-within:ring-0" />
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Review Registration */}
                            {currentStep === 4 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Review Registration</h3>
                                        <p className="text-gray-500 text-sm font-medium">Please review your information before final submission.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Identity Summary */}
                                        <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 relative group">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-[#A11D1D]">
                                                    <User className="w-5 h-5" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest italic">Identity</h4>
                                                </div>
                                                <Button type="button" onClick={() => setCurrentStep(1)} variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D] hover:bg-[#A11D1D]/5 px-4 h-8 rounded-full transition-all">Edit</Button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-xs">
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Full Name</p><p className="font-black text-slate-900 italic uppercase">{formData.idFirstNames} {formData.idMiddleName} {formData.idLastName}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Date of Birth</p><p className="font-black text-slate-900 italic">{formData.dobDay}/{formData.dobMonth}/{formData.dobYear}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Birth Details</p><p className="font-black text-slate-900 italic uppercase">{formData.townCityOfBirth}, {formData.countryOfBirth}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Nationality</p><p className="font-black text-slate-900 italic uppercase">{formData.nationality}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Gender</p><p className="font-black text-slate-900 italic uppercase">{formData.gender}</p></div>
                                            </div>
                                        </div>

                                        {/* Document Summary */}
                                        <div className="p-8 rounded-[2.5rem] bg-[#111827] text-white space-y-6 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A11D1D]/10 rounded-full blur-[50px] -mr-16 -mt-16"></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="flex items-center gap-3 text-[#A11D1D]">
                                                    <CreditCard className="w-5 h-5" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest italic">Document Details</h4>
                                                </div>
                                                <Button type="button" onClick={() => setCurrentStep(2)} variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 px-4 h-8 rounded-full transition-all">Edit</Button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-xs relative z-10">
                                                <div className="space-y-1"><p className="text-slate-500 font-bold uppercase tracking-tighter">ID Type</p><p className="font-black text-white italic uppercase">{formData.idType}</p></div>
                                                <div className="space-y-1"><p className="text-slate-500 font-bold uppercase tracking-tighter">ID Number</p><p className="font-black text-white italic uppercase">{formData.idNumber}</p></div>
                                                <div className="space-y-1"><p className="text-slate-500 font-bold uppercase tracking-tighter">Expiry Date</p><p className="font-black text-white italic">{formData.idExpiryDay}/{formData.idExpiryMonth}/{formData.idExpiryYear}</p></div>
                                                <div className="space-y-1 md:col-span-2"><p className="text-slate-500 font-bold uppercase tracking-tighter">Reason</p><p className="font-black text-white italic uppercase">{formData.reason === "other" ? formData.reasonOther : formData.reason}</p></div>
                                            </div>
                                        </div>

                                        {/* English & Address Summary */}
                                        <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 space-y-8 shadow-sm md:col-span-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-[#A11D1D]">
                                                    <MapPin className="w-5 h-5" />
                                                    <h4 className="text-sm font-black uppercase tracking-widest italic">English Equivalent & Contact</h4>
                                                </div>
                                                <Button type="button" onClick={() => setCurrentStep(3)} variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D] hover:bg-[#A11D1D]/5 px-4 h-8 rounded-full transition-all">Edit</Button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs border-b border-slate-50 pb-8">
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">English Name</p><p className="font-black text-slate-900 italic uppercase">{formData.englishFirstNames} {formData.englishMiddleName} {formData.englishLastName}</p></div>
                                                <div className="space-y-1 md:col-span-2"><p className="text-slate-400 font-bold uppercase tracking-tighter">Address</p><p className="font-black text-slate-900 italic uppercase leading-relaxed">{formData.addressLine1}, {formData.addressLine2}, {formData.townCity}, {formData.country} {formData.postcode}</p></div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Telephone</p><p className="font-black text-slate-900 italic uppercase">{formData.telephone}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">Marketing</p><p className="font-black text-slate-900 italic uppercase">{formData.marketingConsent}</p></div>
                                                <div className="space-y-1"><p className="text-slate-400 font-bold uppercase tracking-tighter">History</p><p className="font-black text-slate-900 italic uppercase">{formData.takenBefore === "yes" ? "Taken Previously" : "First Attempt"}</p></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 rounded-[2.5rem] bg-green-50 border border-green-100 flex items-start gap-4 shadow-sm shadow-green-100/50">
                                        <div className="w-10 h-10 rounded-2xl bg-green-500 flex items-center justify-center shrink-0 rotate-12">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-xs text-green-700 font-bold leading-relaxed italic uppercase tracking-tight">
                                            I confirm that all the information provided above is accurate and matches my legal identification documents. I am aware that any misinformation may lead to cancellation of my registration without refund.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Form Navigation Actions */}
                            <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100">
                                {currentStep > 1 ? (
                                    <button 
                                        type="button" 
                                        onClick={handleBack} 
                                        className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all px-4 py-2"
                                    >
                                        Previous
                                    </button>
                                ) : (
                                    <div />
                                )}

                                <div className="flex gap-4 w-full md:w-auto">
                                    {currentStep < 4 ? (
                                        <Button
                                            type="button"
                                            onClick={handleNext}
                                            className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                                        >
                                            {currentStep === 3 ? "Review Details" : "Save and continue"}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            className="px-16 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                                        >
                                            Finalize Registration
                                            <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </div>
    );
}
