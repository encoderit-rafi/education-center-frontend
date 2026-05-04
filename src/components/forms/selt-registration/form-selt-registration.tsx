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

import { RefinedSeltSchema, type TSeltFormSchema } from "./-type";

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
        <div className="bg-[#fcfcfc] font-body text-slate-900 min-h-screen pb-20 selection:bg-red-50">
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#111827]">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-30 grayscale scale-105" alt="SELT Registration" src="/images/about-us/infrastructure-center.png" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-transparent to-[#111827]"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A11D1D]/10 border border-[#A11D1D]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#A11D1D] animate-pulse"></span>
                        <span className="text-[#A11D1D] text-[10px] font-black uppercase tracking-[0.2em]">Official Registration Portal</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 font-headline uppercase leading-[0.9]">
                        SELT <span className="text-[#A11D1D]">Registration</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Secure your journey with the trusted SELT English test registration.
                    </p>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
                <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
                    {showValidationWarning && (
                        <div className="bg-red-50 border-b border-red-100 px-8 py-4 flex items-center gap-4 animate-in slide-in-from-top-full duration-500">
                            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                                <Info className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-xs font-black text-red-600 uppercase tracking-widest italic">
                                Please correct the highlighted errors in Step {currentStep} to proceed to {currentStep === 3 ? "Review" : "the next step"}.
                            </p>
                        </div>
                    )}
                    {isSubmitted ? (
                        <div className="p-16 md:p-24 text-center space-y-10 animate-in fade-in zoom-in duration-700">
                            <div className="w-32 h-32 bg-green-50 rounded-[2.5rem] flex items-center justify-center mx-auto rotate-[15deg] shadow-xl shadow-green-100">
                                <CheckCircle2 className="w-16 h-16 text-green-500" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Registration <span className="text-green-500">Successful!</span></h2>
                                <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto">
                                    Your SELT registration has been received. Our team will review your documents and contact you shortly with the next steps.
                                </p>
                            </div>
                            <div className="pt-10">
                                <Button onClick={() => window.location.reload()} className="bg-[#111827] text-white px-12 h-20 rounded-[1.5rem] font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest italic">
                                    Return to Home
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Stepper */}
                    <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-6">
                        <div className="flex items-center justify-between max-w-3xl mx-auto">
                            {[
                                { step: 1, label: "Identity", icon: User },
                                { step: 2, label: "Details", icon: CreditCard },
                                { step: 3, label: "Address", icon: MapPin },
                                { step: 4, label: "Review", icon: ShieldCheck },
                            ].map((item) => (
                                <div key={item.step} className="flex flex-col items-center gap-2 group relative">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm",
                                        currentStep >= item.step ? "bg-[#A11D1D] text-white rotate-[10deg] scale-110 shadow-[#A11D1D]/20 shadow-xl" : "bg-white text-slate-300 border border-slate-200"
                                    )}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className={cn(
                                        "text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300",
                                        currentStep >= item.step ? "text-[#A11D1D]" : "text-slate-400"
                                    )}>{item.label}</span>
                                    {item.step < 3 && (
                                        <div className="absolute left-[calc(100%+1rem)] top-6 w-16 md:w-32 h-[2px] bg-slate-100 hidden sm:block">
                                            <div className={cn("h-full bg-[#A11D1D] transition-all duration-700 ease-in-out", currentStep > item.step ? "w-full" : "w-0")}></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        <Form {...form}>
                            <form className="space-y-16" onSubmit={handleSubmit(onSubmit)}>
                                
                                {/* Step 1: Personal Identity */}
                                {currentStep === 1 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Personal <span className="text-[#A11D1D]">Identity</span></h3>
                                            <p className="text-slate-500 text-sm font-medium">Please enter your information exactly as it appears on your identification document.</p>
                                        </div>

                                        <div className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="idLastName" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">ID last name</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter last name" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="idFirstNames" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">ID first names</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter first names" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <FormField control={control} name="idMiddleName" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">ID middle name</FormLabel>
                                                    <p className="text-[10px] text-slate-400 font-medium italic">If you do not have a middle name or your middle name is not included on your ID then please leave this field empty.</p>
                                                    <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter middle name (optional)" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="space-y-6">
                                                <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date of birth</FormLabel>
                                                <p className="text-[10px] text-slate-400 font-medium italic -mt-4">If you are a minor you will need consent from your parent or guardian.</p>
                                                <div className="grid grid-cols-3 gap-6">
                                                    <FormField control={control} name="dobDay" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="dobMonth" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="dobYear" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            <div className="space-y-6 pt-4 border-t border-slate-50">
                                                <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Repeat your date of birth</FormLabel>
                                                <p className="text-[10px] text-slate-400 font-medium italic -mt-4">Please type in the same date of birth again.</p>
                                                <div className="grid grid-cols-3 gap-6">
                                                    <FormField control={control} name="repeatDobDay" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center focus:ring-[#A11D1D]/10" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="repeatDobMonth" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="repeatDobYear" render={({ field }) => (
                                                        <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                                                <FormField control={control} name="nationality" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country of nationality</FormLabel>
                                                        <p className="text-[10px] text-slate-400 font-medium italic">As indicated on the ID you register with.</p>
                                                        <FormControl><CountryDropdown placeholder="Select nationality" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white shadow-none border-slate-200" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="countryOfBirth" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country of birth</FormLabel>
                                                        <p className="text-[10px] text-slate-400 font-medium italic">This is the country you were born in.</p>
                                                        <FormControl><CountryDropdown placeholder="Select country of birth" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white shadow-none border-slate-200" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="townCityOfBirth" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Town or city of birth</FormLabel>
                                                        <p className="text-[10px] text-slate-400 font-medium italic">This is the town or city you were born in.</p>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter town or city" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="gender" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gender</FormLabel>
                                                        <p className="text-[10px] text-slate-400 font-medium italic">This is your gender.</p>
                                                        <FormControl>
                                                            <SearchableDropdown 
                                                                options={[
                                                                    {label: "Male", value: "male"},
                                                                    {label: "Female", value: "female"},
                                                                    {label: "Other", value: "other"}
                                                                ]} 
                                                                placeholder="Select your gender" 
                                                                value={field.value} 
                                                                onChange={(val) => field.onChange(val)} 
                                                                className="h-14"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: ID & Booking Details */}
                                {currentStep === 2 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Document <span className="text-[#A11D1D]">Details</span></h3>
                                            <p className="text-slate-500 text-sm font-medium">Please provide your identification document information and test reason.</p>
                                        </div>

                                        <div className="space-y-12">
                                            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-10">
                                                <FormField control={control} name="idType" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter">*ID to present at the test centre</FormLabel>
                                                        <p className="text-xs text-slate-400 font-medium italic">Please select the ID you will bring to the test centre.</p>
                                                        <FormControl>
                                                            <SearchableDropdown 
                                                                options={[
                                                                    {label: "Passport", value: "passport"},
                                                                    {label: "Govt ID card, can be Biometric (only accepted in the country it was issued)", value: "govt_id"},
                                                                    {label: "EU ID card (only accepted in the country it was issued)**", value: "eu_id"},
                                                                    {label: "Valid travel document with photograph (excluding Emergency Travel Documents)", value: "travel_doc"},
                                                                    {label: "UK issued Biometric Residence Card (UK BRC)", value: "uk_brc"},
                                                                    {label: "UK issued Biometric Residence Permit (UK BRP)", value: "uk_brp"},
                                                                    {label: "Emirates ID (only accepted in UAE)", value: "emirates_id"}
                                                                ]} 
                                                                placeholder="Please choose a type of ID" 
                                                                value={field.value} 
                                                                onChange={(val) => field.onChange(val)} 
                                                                className="h-14"
                                                            />
                                                        </FormControl>
                                                        <div className="pt-2">
                                                            <p className="text-sm font-black text-slate-900 italic uppercase">Acceptable ID. Only Passport or Emirates ID.</p>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    <FormField control={control} name="idNumber" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">ID number</FormLabel>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter ID number" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="repeatIdNumber" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Repeat your ID number</FormLabel>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Repeat ID number" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="space-y-6">
                                                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expiry date</FormLabel>
                                                    <p className="text-[10px] text-slate-400 font-medium italic -mt-4">Do not complete if your document does not have one. (e.g., 23 10 2025)</p>
                                                    <div className="grid grid-cols-3 gap-6">
                                                        <FormField control={control} name="idExpiryDay" render={({ field }) => (
                                                            <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="DD" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                        )} />
                                                        <FormField control={control} name="idExpiryMonth" render={({ field }) => (
                                                            <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="MM" maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>
                                                        )} />
                                                        <FormField control={control} name="idExpiryYear" render={({ field }) => (
                                                            <FormItem><FormControl><Input className="h-14 rounded-xl border-slate-200 text-center" placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
                                                        )} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                <div className="p-10 rounded-[2.5rem] bg-[#111827] text-white space-y-8 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A11D1D]/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <Info className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight tracking-widest italic">Reason for test</h4>
                                                    </div>
                                                    <p className="text-xs text-slate-400 font-medium italic -mt-4">Please enter a reason for taking the test.</p>

                                                    <FormField control={control} name="reason" render={({ field }) => (
                                                        <FormItem className="space-y-6">
                                                            <FormControl>
                                                                <RadioGroup className="space-y-6" onValueChange={field.onChange} value={field.value}>
                                                                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#A11D1D]/50 transition-all cursor-pointer group">
                                                                        <RadioGroupItem value="ukvi" id="reason-ukvi" className="w-6 h-6 border-white/20 text-[#A11D1D] focus:ring-[#A11D1D]" />
                                                                        <div className="flex-1">
                                                                            <Label htmlFor="reason-ukvi" className="text-lg font-black uppercase tracking-tighter cursor-pointer block mb-1 italic">UKVI</Label>
                                                                            <span className="text-xs text-slate-400 font-medium">For UK Visa and Immigration applications</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-4">
                                                                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#A11D1D]/50 transition-all cursor-pointer group">
                                                                            <RadioGroupItem value="other" id="reason-other" className="w-6 h-6 border-white/20 text-[#A11D1D] focus:ring-[#A11D1D]" />
                                                                            <Label htmlFor="reason-other" className="text-lg font-black uppercase tracking-tighter cursor-pointer italic">Other</Label>
                                                                        </div>
                                                                        {field.value === "other" && (
                                                                            <FormField control={control} name="reasonOther" render={({ field }) => (
                                                                                <FormItem className="animate-in fade-in slide-in-from-top-4 duration-300">
                                                                                    <FormControl>
                                                                                        <Textarea 
                                                                                            className="bg-white/5 border-white/10 rounded-2xl min-h-[120px] focus:border-[#A11D1D] text-white placeholder:text-slate-500" 
                                                                                            placeholder="Please specify your reason here..." 
                                                                                            {...field} 
                                                                                        />
                                                                                    </FormControl>
                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )} />
                                                                        )}
                                                                    </div>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-10">
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <Globe className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight italic">Test History</h4>
                                                    </div>

                                                    <FormField control={control} name="takenBefore" render={({ field }) => (
                                                        <FormItem className="space-y-4">
                                                            <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">*Have you taken the Skills for English Test (SELT) before?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup className="flex gap-8" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                    {["yes", "no"].map(v => (
                                                                        <div key={v} className="flex items-center space-x-3 group cursor-pointer">
                                                                            <RadioGroupItem value={v} id={`taken-${v}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                            <Label htmlFor={`taken-${v}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer capitalize italic">{v}</Label>
                                                                        </div>
                                                                    ))}
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />

                                                    {formData.takenBefore === "yes" && (
                                                        <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-300">
                                                            <FormField control={control} name="takenWithinTwoYears" render={({ field }) => (
                                                                <FormItem className="space-y-4">
                                                                    <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">*Was it less than 2 years?</FormLabel>
                                                                    <FormControl>
                                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                            {[
                                                                                {label: "Yes", value: "yes"},
                                                                                {label: "No", value: "no"},
                                                                                {label: "I do not know", value: "dont_know"}
                                                                            ].map(v => (
                                                                                <div key={v.value} className="flex items-center space-x-3 group cursor-pointer">
                                                                                    <RadioGroupItem value={v.value} id={`2yrs-${v.value}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                                    <Label htmlFor={`2yrs-${v.value}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer italic">{v.label}</Label>
                                                                                </div>
                                                                            ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />

                                                            <FormField control={control} name="hasExistingAccount" render={({ field }) => (
                                                                <FormItem className="space-y-4">
                                                                    <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">*Do you have an existing account?</FormLabel>
                                                                    <FormControl>
                                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                            {[
                                                                                {label: "Yes", value: "yes"},
                                                                                {label: "No", value: "no"},
                                                                                {label: "I forgot my details", value: "forgot"}
                                                                            ].map(v => (
                                                                                <div key={v.value} className="flex items-center space-x-3 group cursor-pointer">
                                                                                    <RadioGroupItem value={v.value} id={`acc-${v.value}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                                    <Label htmlFor={`acc-${v.value}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer italic">{v.label}</Label>
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
                                            </div>

                                            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col md:flex-row items-center gap-10 shadow-sm">
                                                <div className="flex-1 space-y-6">
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <Info className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight italic text-slate-900">Marketing Consent</h4>
                                                    </div>
                                                    <FormField control={control} name="marketingConsent" render={({ field }) => (
                                                        <FormItem className="space-y-6">
                                                            <FormLabel className="text-sm font-bold text-slate-700 italic">* Would you like to receive updates and special offers?:</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup className="flex gap-12" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                    <div className="flex items-center space-x-4 group cursor-pointer">
                                                                        <RadioGroupItem value="yes" id="m_yes_selt" className="w-6 h-6 border-2 border-slate-300 text-[#A11D1D] focus:border-[#A11D1D]" />
                                                                        <Label htmlFor="m_yes_selt" className="text-lg font-black text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer italic">Yes</Label>
                                                                    </div>
                                                                    <div className="flex items-center space-x-4 group cursor-pointer">
                                                                        <RadioGroupItem value="no" id="m_no_selt" className="w-6 h-6 border-2 border-slate-300 text-[#A11D1D] focus:border-[#A11D1D]" />
                                                                        <Label htmlFor="m_no_selt" className="text-lg font-black text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer italic">No</Label>
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

                                {/* Step 3: English Equivalent & Address */}
                                {currentStep === 3 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic italic">Address <span className="text-[#A11D1D]">& Documents</span></h3>
                                            <p className="text-slate-500 text-sm font-medium italic">Finalize your registration with your address and document uploads.</p>
                                        </div>

                                        <div className="space-y-12">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 space-y-10 shadow-sm">
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <Globe className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight italic">English Equivalent</h4>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                        <FormField control={control} name="englishLastName" render={({ field }) => (
                                                            <FormItem className="space-y-2">
                                                                <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">English last name</FormLabel>
                                                                <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter last name" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                        <FormField control={control} name="englishFirstNames" render={({ field }) => (
                                                            <FormItem className="space-y-2">
                                                                <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">English first names</FormLabel>
                                                                <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter first names" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                    </div>

                                                    <FormField control={control} name="englishMiddleName" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">English middle name</FormLabel>
                                                            <p className="text-[10px] text-slate-400 font-medium italic">If you do not have a middle name then please leave this field empty.</p>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter middle name (optional)" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="bg-[#111827] rounded-[2.5rem] border border-white/10 p-8 md:p-12 space-y-8 shadow-2xl relative overflow-hidden group text-white">
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A11D1D]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                                                    <div className="flex items-center gap-3 text-[#A11D1D] relative z-10">
                                                        <UploadCloud className="w-8 h-8" />
                                                        <h4 className="text-2xl font-black uppercase tracking-tight italic">Document Upload</h4>
                                                    </div>
                                                    
                                                    <FormField control={control} name="passportCopy" render={({ field }) => (
                                                        <FormItem className="space-y-6 relative z-10">
                                                            <FormLabel className="text-sm font-bold text-slate-300 italic">Upload Your Passport Copy (Optional)</FormLabel>
                                                            <FormControl>
                                                                <div className="relative group h-56 rounded-[2rem] border-2 border-dashed border-white/20 hover:border-[#A11D1D]/50 hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden">
                                                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A11D1D]/10 transition-all duration-500">
                                                                        <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-[#A11D1D]" />
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#A11D1D] block mb-2">Choose File</span>
                                                                        <span className="text-[10px] text-slate-500 block italic">(pdf, docx, doc, png, jpeg)</span>
                                                                        <span className="text-[9px] text-slate-600 block mt-1 uppercase font-bold tracking-widest">Max size 128 MB</span>
                                                                    </div>
                                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files?.[0])} accept=".pdf,.docx,.doc,.png,.jpg,.jpeg" />
                                                                    {field.value && <div className="absolute inset-0 bg-[#111827] flex items-center justify-center p-6 animate-in fade-in duration-300">
                                                                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 w-full">
                                                                            <CheckCircle2 className="w-5 h-5 text-[#A11D1D]" />
                                                                            <span className="text-xs font-bold text-slate-200 truncate flex-1 italic">{(field.value as File).name}</span>
                                                                            <button type="button" onClick={() => field.onChange(undefined)} className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-all"><X className="w-4 h-4" /></button>
                                                                        </div>
                                                                    </div>}
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 space-y-10 shadow-sm">
                                                <div className="flex items-center gap-3 text-[#A11D1D]">
                                                    <MapPin className="w-6 h-6" />
                                                    <h4 className="text-xl font-black uppercase tracking-tight italic">Your Address</h4>
                                                </div>

                                                <div className="space-y-6">
                                                    <FormField control={control} name="addressLine1" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Address Line 1</FormLabel>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Street address" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="addressLine2" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Apartment, suite, unit, etc. (optional)" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="addressLine3" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Further details (optional)" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    <FormField control={control} name="townCity" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Town or City</FormLabel>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter city" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="country" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Country</FormLabel>
                                                            <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    <FormField control={control} name="postcode" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Postcode / Zip code</FormLabel>
                                                            <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter postcode" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="telephone" render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Telephone</FormLabel>
                                                            <p className="text-[10px] text-slate-400 font-medium italic">Give us the best number to contact you in case there is a problem.</p>
                                                            <FormControl><PhoneInput defaultCountry="AE" {...field} defaultCountry="AE" className="h-14" /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Review Data */}
                                {currentStep === 4 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-2">
                                                <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Review <span className="text-[#A11D1D]">Registration</span></h3>
                                                <p className="text-slate-500 text-sm font-medium italic">Please review all your details carefully before finalizing your registration.</p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Final Step</p>
                                                </div>
                                            </div>
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
                                        <Button type="button" onClick={handleBack} variant="ghost" className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs hover:text-[#A11D1D] transition-colors italic">
                                            ← Go back
                                        </Button>
                                    ) : (
                                        <div />
                                    )}

                                    <div className="flex gap-4 w-full md:w-auto">
                                        {currentStep < 4 ? (
                                            <Button
                                                type="button"
                                                onClick={handleNext}
                                                className="bg-[#111827] text-white px-12 h-20 rounded-[1.5rem] font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group italic"
                                            >
                                                {currentStep === 3 ? "Review Details" : "Continue"}
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                className="bg-[#A11D1D] text-white px-16 h-20 rounded-[1.5rem] font-black text-xl hover:bg-[#8e1214] transition-all shadow-2xl shadow-[#A11D1D]/30 active:scale-95 transform group italic"
                                            >
                                                Finalize Registration
                                                <CheckCircle2 className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </Form>
                        </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
