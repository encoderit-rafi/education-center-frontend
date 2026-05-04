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
    X
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";

import { RefinedPteHomeUkviSchema, type TPteHomeUkviFormSchema } from "./-type";

const courses = [
    { id: "group", label: "Group (In-person classroom-based course)", price: 1850 },
    { id: "semi-private", label: "Semi-Private (In-person classroom-based)", price: 2850 },
    { id: "private", label: "Private one-to-one (In-person classroom)", price: 4850 },
    { id: "online", label: "Private one-to-one (Online course)", price: 3850 },
];

export default function FormPTEHomeUkviRegistration() {
    const [currentStep, setCurrentStep] = useState(1);

    const form = useForm<TPteHomeUkviFormSchema>({
        resolver: zodResolver(RefinedPteHomeUkviSchema),
        mode: "onChange",
        defaultValues: {
            givenNames: "",
            noGivenNames: false,
            surnames: "",
            noSurname: false,
            emailUsername: "",
            dateOfBirth: undefined,
            gender: "",
            readyToBook: "" as any,
            homeLanguage: "",
            planningCountry: "",
            currentSituation: "",
            reasonForTaking: "",
            studyLevel: "",
            occupationSector: "",
            referralSource: "",
            takenBefore: "",
            takenWithinTwoYears: "",
            hasExistingAccount: "",
            dataSharingAgreed: false,
            bookingTermsAgreed: false,
            marketingConsent: "",
            testTiming: "",
            idPolicyRead: false,
            idType: "",
            idCountryOfIssue: "",
            documentNumberConfirmed: false,
            documentNumber: "",
            passportCopy: undefined,
            userPhoto: undefined,
            selectedCourse: "",
            infoCorrect: false,
        },
    });

    const { control, handleSubmit, trigger, setValue, formState: { errors } } = form;
    const formData = useWatch({ control });

    const getFieldsForStep = (currentStep: number) => {
        switch (currentStep) {
            case 1: return ["givenNames", "noGivenNames", "surnames", "noSurname", "emailUsername", "dateOfBirth", "gender", "placeOfBirth", "countryOfBirth", "countryOfCitizenship", "countryOfResidence", "address", "city", "mobileNumber", "readyToBook"];
            case 2: return ["homeLanguage", "planningCountry", "currentSituation", "reasonForTaking", "studyLevel", "occupationSector", "referralSource", "takenBefore", "takenWithinTwoYears", "hasExistingAccount", "dataSharingAgreed", "bookingTermsAgreed", "marketingConsent"];
            case 3: return ["idPolicyRead", "idType", "idCountryOfIssue", "documentNumberConfirmed", "documentNumber", "testTiming", "passportCopy", "infoCorrect"];
            default: return [];
        }
    };

    const handleNext = async () => {
        const fields = getFieldsForStep(currentStep);
        const isValid = await trigger(fields as any);
        if (isValid) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 400, behavior: "smooth" });
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    const EXAM_FEE = 1150; 
    const SERVICE_FEE = 5;
    const VAT_RATE = 0.05;

    const { total, serviceVAT, coursePrice, courseVAT } = useMemo(() => {
        const selected = courses.find(c => c.id === formData.selectedCourse);
        const cPrice = selected?.price || 0;
        const sVAT = SERVICE_FEE * VAT_RATE;
        const wVAT = cPrice * VAT_RATE;
        const totalAmount = EXAM_FEE + SERVICE_FEE + sVAT + cPrice + wVAT;

        return {
            total: totalAmount,
            serviceVAT: sVAT,
            coursePrice: cPrice,
            courseVAT: wVAT
        };
    }, [formData.selectedCourse]);

    const onSubmit: SubmitHandler<TPteHomeUkviFormSchema> = (data) => {
        console.log("PTE Home UKVI Form Data:", data);
    };

    return (
        <div className="bg-[#fcfcfc] font-body text-slate-900 min-h-screen pb-20 selection:bg-red-50">
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#111827]">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-30 grayscale scale-105" alt="PTE Home UKVI" src="/images/about-us/infrastructure-center.png" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-transparent to-[#111827]"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A11D1D]/10 border border-[#A11D1D]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#A11D1D] animate-pulse"></span>
                        <span className="text-[#A11D1D] text-[10px] font-black uppercase tracking-[0.2em]">Official Registration Portal</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 font-headline uppercase leading-[0.9]">
                        PTE Home <span className="text-[#A11D1D]">UKVI</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Secure your journey to UK visa extension with the trusted PTE Home UKVI English test registration.
                    </p>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
                <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
                    {/* Stepper */}
                    <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-6">
                        <div className="flex items-center justify-between max-w-3xl mx-auto">
                            {[
                                { step: 1, label: "Identity", icon: User },
                                { step: 2, label: "Booking", icon: Globe },
                                { step: 3, label: "Review", icon: ShieldCheck },
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
                                
                                {/* Step 1: Personal Details */}
                                {currentStep === 1 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Personal <span className="text-[#A11D1D]">Details</span></h3>
                                            <p className="text-slate-500 text-sm font-medium">Please enter your information exactly as it appears on your passport.</p>
                                        </div>

                                        <div className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="givenNames" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Given name(s)</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200 focus:ring-[#A11D1D]/10 focus:border-[#A11D1D] transition-all" placeholder="Enter first names" disabled={formData.noGivenNames} {...field} /></FormControl>
                                                        <FormField control={control} name="noGivenNames" render={({ field }) => (
                                                            <div className="flex items-center gap-2 mt-2 cursor-pointer group">
                                                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D]" checked={field.value} onChange={field.onChange} id="noGivenNames" />
                                                                <label htmlFor="noGivenNames" className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-widest">I do not have a given name</label>
                                                            </div>
                                                        )} />
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="surnames" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Surname(s) / Family name</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter family name" disabled={formData.noSurname} {...field} /></FormControl>
                                                        <FormField control={control} name="noSurname" render={({ field }) => (
                                                            <div className="flex items-center gap-2 mt-2 cursor-pointer group">
                                                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D]" checked={field.value} onChange={field.onChange} id="noSurname" />
                                                                <label htmlFor="noSurname" className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-widest">I do not have a surname</label>
                                                            </div>
                                                        )} />
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="emailUsername" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email / Username</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="yourname@example.com" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <DateTimePicker mode="date" label="Date of Birth" control={control} name="dateOfBirth" fromYear={1950} toYear={2024} className="h-14 rounded-xl border-slate-200" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="gender" render={({ field }) => (
                                                    <FormItem className="space-y-6">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Gender, as it appears on your Identification.</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup className="flex gap-8 pt-2" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                {["Male", "Female", "Other"].map(g => (
                                                                    <div key={g} className="flex items-center space-x-3 group cursor-pointer">
                                                                        <RadioGroupItem value={g.toLowerCase()} id={`g-home-${g}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                        <Label htmlFor={`g-home-${g}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{g === "Other" ? "X/Other" : g}</Label>
                                                                    </div>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="placeOfBirth" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Place of birth</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="countryOfBirth" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country of birth</FormLabel>
                                                        <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="countryOfCitizenship" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country of citizenship</FormLabel>
                                                        <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="countryOfResidence" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country of residence</FormLabel>
                                                        <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="city" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">City / Town</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <FormField control={control} name="address" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address</FormLabel>
                                                    <FormControl><Input className="h-14 rounded-xl border-slate-200" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <FormField control={control} name="mobileNumber" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile Number</FormLabel>
                                                        <FormControl><PhoneInput {...field} defaultCountry="AE" className="h-14" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="readyToBook" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">Are you ready to book?</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                                                                {["yes", "no"].map(opt => (
                                                                    <label key={opt} className={cn(
                                                                        "flex-1 flex items-center justify-center h-14 rounded-xl border-2 transition-all cursor-pointer capitalize font-bold",
                                                                        field.value === opt ? "border-[#A11D1D] bg-red-50 text-[#A11D1D]" : "border-slate-100 text-slate-400 hover:border-slate-200"
                                                                    )}>
                                                                        <RadioGroupItem value={opt} className="sr-only" />
                                                                        {opt}
                                                                    </label>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Booking & History */}
                                {currentStep === 2 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Booking <span className="text-[#A11D1D]">Questions</span></h3>
                                            <p className="text-slate-500 text-sm font-medium">Please provide your language background and previous test history.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-10">
                                                <FormField control={control} name="homeLanguage" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-slate-700 italic">*What language do you speak mostly at home?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[
                                                            {label: "Arabic", value: "arabic"},
                                                            {label: "Bengali", value: "bengali"},
                                                            {label: "English", value: "english"},
                                                            {label: "Hindi", value: "hindi"},
                                                            {label: "Urdu", value: "urdu"},
                                                            {label: "Other", value: "other"}
                                                        ]} placeholder="Select one..." value={field.value} onChange={(val) => field.onChange(val)} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={control} name="planningCountry" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-slate-700">*Which country or region are you planning to settle in?</FormLabel>
                                                        <FormControl><CountryDropdown placeholder="Select one..." value={field.value} onChange={(val) => field.onChange(val.name)} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={control} name="currentSituation" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-slate-700">*Which best describes your current situation?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[
                                                            {label: "Working - full time", value: "work_full"},
                                                            {label: "Working - part time", value: "work_part"},
                                                            {label: "Not studying or working", value: "not_working"},
                                                            {label: "Other - specify below", value: "other"}
                                                        ]} placeholder="Select one..." value={field.value} onChange={(val) => field.onChange(val)} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={control} name="reasonForTaking" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-slate-700">*Why are you taking PTE Home UKVI?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[
                                                            {label: "Settlement (ILR)", value: "settlement"},
                                                            {label: "Family Visa", value: "family_visa"},
                                                            {label: "Spouse Visa", value: "spouse_visa"},
                                                            {label: "Other", value: "other"}
                                                        ]} placeholder="Select one..." value={field.value} onChange={(val) => field.onChange(val)} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={control} name="occupationSector" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-slate-700">*What is your occupation sector?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[
                                                            {label: "Agriculture", value: "agri"},
                                                            {label: "Banking and Finance", value: "banking"},
                                                            {label: "Education", value: "edu"},
                                                            {label: "Health and Social Services", value: "health"},
                                                            {label: "Retail Trade", value: "retail"},
                                                            {label: "Personal Services", value: "personal"},
                                                            {label: "Other", value: "other"}
                                                        ]} placeholder="Select one..." value={field.value} onChange={(val) => field.onChange(val)} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <div className="space-y-10">
                                                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-8">
                                                    <div className="flex items-center gap-2 text-[#A11D1D] mb-4">
                                                        <Info className="w-4 h-4" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest italic">Previous Test History</span>
                                                    </div>

                                                    <FormField control={control} name="takenBefore" render={({ field }) => (
                                                        <FormItem className="space-y-4">
                                                            <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter">*Have you taken the PTE Home UKVI Test before?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup className="flex gap-8" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                    {["yes", "no"].map(v => (
                                                                        <div key={v} className="flex items-center space-x-3 group cursor-pointer">
                                                                            <RadioGroupItem value={v} id={`taken-${v}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                            <Label htmlFor={`taken-${v}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer capitalize">{v}</Label>
                                                                        </div>
                                                                    ))}
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />

                                                    {formData.takenBefore === "yes" && (
                                                        <div className="space-y-8 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                                            <FormField control={control} name="takenWithinTwoYears" render={({ field }) => (
                                                                <FormItem className="space-y-4">
                                                                    <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter">*Was it less than 2 years?</FormLabel>
                                                                    <FormControl>
                                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                            {[
                                                                                {label: "Yes", value: "yes"},
                                                                                {label: "No", value: "no"},
                                                                                {label: "I do not know", value: "dont_know"}
                                                                            ].map(v => (
                                                                                <div key={v.value} className="flex items-center space-x-3 group cursor-pointer">
                                                                                    <RadioGroupItem value={v.value} id={`2yrs-${v.value}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                                    <Label htmlFor={`2yrs-${v.value}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{v.label}</Label>
                                                                                </div>
                                                                            ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />

                                                            <FormField control={control} name="hasExistingAccount" render={({ field }) => (
                                                                <FormItem className="space-y-4">
                                                                    <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter">*Do you have an existing PTE account?</FormLabel>
                                                                    <FormControl>
                                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                            {[
                                                                                {label: "Yes", value: "yes"},
                                                                                {label: "No", value: "no"},
                                                                                {label: "I forgot details", value: "forgot"}
                                                                            ].map(v => (
                                                                                <div key={v.value} className="flex items-center space-x-3 group cursor-pointer">
                                                                                    <RadioGroupItem value={v.value} id={`acc-${v.value}`} className="w-5 h-5 border-red-200 text-[#A11D1D]" />
                                                                                    <Label htmlFor={`acc-${v.value}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{v.label}</Label>
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

                                                <div className="space-y-6 pt-4">
                                                    <FormField control={control} name="dataSharingAgreed" render={({ field }) => (
                                                        <FormItem className="flex items-start space-x-3 space-y-0">
                                                            <FormControl><input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D]" checked={field.value} onChange={field.onChange} /></FormControl>
                                                            <div className="space-y-1 leading-none">
                                                                <FormLabel className="text-xs font-bold text-slate-700">Consent for data sharing</FormLabel>
                                                                <p className="text-[10px] text-slate-400">I agree to Pearson sharing my score with relevant authorities.</p>
                                                            </div>
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="bookingTermsAgreed" render={({ field }) => (
                                                        <FormItem className="flex items-start space-x-3 space-y-0">
                                                            <FormControl><input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D]" checked={field.value} onChange={field.onChange} /></FormControl>
                                                            <div className="space-y-1 leading-none">
                                                                <FormLabel className="text-xs font-bold text-slate-700">Accept terms & conditions</FormLabel>
                                                                <p className="text-[10px] text-slate-400">I have read and agree to the PTE Home booking terms.</p>
                                                            </div>
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={control} name="marketingConsent" render={({ field }) => (
                                                        <FormItem className="space-y-6 pt-4">
                                                            <FormLabel className="text-sm font-bold text-slate-700">* Would you like to receive updates and special offers?:</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup className="flex gap-8 pt-2" onValueChange={field.onChange} value={field.value ?? ""}>
                                                                    <div className="flex items-center space-x-3 group cursor-pointer">
                                                                        <RadioGroupItem value="yes" id="m_yes_home" className="w-5 h-5 border-2 border-slate-300 text-[#A11D1D] focus:border-[#A11D1D]" />
                                                                        <Label htmlFor="m_yes_home" className="text-sm font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">Yes</Label>
                                                                    </div>
                                                                    <div className="flex items-center space-x-3 group cursor-pointer">
                                                                        <RadioGroupItem value="no" id="m_no_home" className="w-5 h-5 border-2 border-slate-300 text-[#A11D1D] focus:border-[#A11D1D]" />
                                                                        <Label htmlFor="m_no_home" className="text-sm font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">No</Label>
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

                                {/* Step 3: Identity & Review */}
                                {currentStep === 3 && (
                                    <div className="space-y-16 animate-in fade-in slide-in-from-right-8 duration-500">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic italic">Final <span className="text-[#A11D1D]">Confirmation</span></h3>
                                            <p className="text-slate-500 text-sm font-medium">Verify your identification and finalize your registration.</p>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                                            <div className="lg:col-span-2 space-y-12">
                                                <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 space-y-10 shadow-sm">
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <CreditCard className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight">Identification Details</h4>
                                                    </div>

                                                    <div className="space-y-10">
                                                        {/* UKVI Policy Checkbox */}
                                                        <FormField control={control} name="idPolicyRead" render={({ field }) => (
                                                            <FormItem className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                                                <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">*Your identification document</FormLabel>
                                                                <p className="text-xs text-slate-500 leading-relaxed italic">You must bring a valid ID on test day. If you don't have a passport, please read our <span className="text-[#A11D1D] underline cursor-pointer">ID Policy</span> to see if we can accept your ID.</p>
                                                                <div className="flex items-start gap-3 pt-2">
                                                                    <FormControl><input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D] cursor-pointer" checked={field.value} onChange={field.onChange} id="id_policy" /></FormControl>
                                                                    <FormLabel htmlFor="id_policy" className="text-xs font-bold text-slate-600 cursor-pointer leading-relaxed italic">I have read the ID Policy and understand I can only take the test if I bring a valid ID on the day.</FormLabel>
                                                                </div>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                            <FormField control={control} name="idType" render={({ field }) => (
                                                                <FormItem className="space-y-3">
                                                                    <FormLabel className="text-sm font-bold text-slate-700">*ID Type</FormLabel>
                                                                    <FormControl><SearchableDropdown options={[
                                                                        {label: "Valid Passport", value: "passport"},
                                                                        {label: "National ID Card", value: "nat_id"},
                                                                        {label: "Other ID in Policy", value: "other_id"}
                                                                    ]} placeholder="Select your identification document" value={field.value} onChange={(val) => field.onChange(val)} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />

                                                            <FormField control={control} name="idCountryOfIssue" render={({ field }) => (
                                                                <FormItem className="space-y-3">
                                                                    <FormLabel className="text-sm font-bold text-slate-700">*Country of issue</FormLabel>
                                                                    <FormControl><CountryDropdown placeholder="Select the country your ID is from" value={field.value} onChange={(val) => field.onChange(val.name)} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />
                                                        </div>

                                                        {/* Document Number Section */}
                                                        <div className="space-y-6">
                                                            <FormField control={control} name="documentNumberConfirmed" render={({ field }) => (
                                                                <FormItem className="flex items-center gap-3">
                                                                    <FormControl><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#A11D1D] focus:ring-[#A11D1D] cursor-pointer" checked={field.value} onChange={field.onChange} id="doc_confirm" /></FormControl>
                                                                    <Label htmlFor="doc_confirm" className="text-xs font-bold text-slate-600 cursor-pointer italic">I confirm I have entered the document number from my ID below.</Label>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />

                                                            <FormField control={control} name="documentNumber" render={({ field }) => (
                                                                <FormItem className="space-y-3">
                                                                    <FormLabel className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">*ID number e.g. passport number or eVisa share code</FormLabel>
                                                                    <p className="text-[10px] text-slate-400 italic">Enter the unique number on your ID:</p>
                                                                    <FormControl><Input className="h-14 rounded-xl border-slate-200" placeholder="Enter number" {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 space-y-10 shadow-sm">
                                                    <div className="flex items-center gap-3 text-[#A11D1D]">
                                                        <UploadCloud className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight">Document Uploads</h4>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        <FormField control={control} name="passportCopy" render={({ field }) => (
                                                            <FormItem className="space-y-4">
                                                                <FormLabel className="text-sm font-bold text-slate-700">* Upload Your Passport Copy</FormLabel>
                                                                <FormControl>
                                                                    <div className="relative group h-48 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#A11D1D]/50 hover:bg-red-50/30 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden">
                                                                        <UploadCloud className="w-8 h-8 text-slate-300 group-hover:text-[#A11D1D] transition-colors" />
                                                                        <div className="text-center">
                                                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#A11D1D] block mb-1">Choose File</span>
                                                                            <span className="text-[9px] text-slate-400 block">(pdf, docx, doc, png, jpeg)</span>
                                                                            <span className="text-[9px] text-slate-300 block">max file size 128 MB</span>
                                                                        </div>
                                                                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files?.[0])} accept=".pdf,.docx,.doc,.png,.jpg,.jpeg" />
                                                                        {field.value && <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
                                                                            <span className="text-[10px] font-bold text-slate-600 truncate max-w-full">{(field.value as File).name}</span>
                                                                            <button type="button" onClick={() => field.onChange(undefined)} className="absolute top-2 right-2 p-1 bg-red-100 text-[#A11D1D] rounded-full hover:bg-red-200 transition-all"><X className="w-3 h-3" /></button>
                                                                        </div>}
                                                                    </div>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />

                                                        <FormField control={control} name="userPhoto" render={({ field }) => (
                                                            <FormItem className="space-y-4">
                                                                <FormLabel className="text-sm font-bold text-slate-700">Recent Photograph</FormLabel>
                                                                <FormControl>
                                                                    <div className="relative group h-48 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#A11D1D]/50 hover:bg-red-50/30 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden">
                                                                        <Camera className="w-8 h-8 text-slate-300 group-hover:text-[#A11D1D] transition-colors" />
                                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#A11D1D]">Upload Photograph</span>
                                                                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files?.[0])} accept="image/*" />
                                                                        {field.value && <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
                                                                            <span className="text-[10px] font-bold text-slate-600 truncate max-w-full">{(field.value as File).name}</span>
                                                                            <button type="button" onClick={() => field.onChange(undefined)} className="absolute top-2 right-2 p-1 bg-red-100 text-[#A11D1D] rounded-full hover:bg-red-200 transition-all"><X className="w-3 h-3" /></button>
                                                                        </div>}
                                                                    </div>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )} />
                                                    </div>
                                                </div>

                                                <div className="p-8 md:p-12 rounded-3xl bg-[#111827] text-white space-y-8 border-l-[8px] border-[#A11D1D] shadow-2xl relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A11D1D]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                                                    <div className="flex items-center gap-3 text-[#A11D1D] relative z-10">
                                                        <ShieldCheck className="w-6 h-6" />
                                                        <h4 className="text-xl font-black uppercase tracking-tight tracking-widest">Final Declaration</h4>
                                                    </div>
                                                    <FormField control={control} name="infoCorrect" render={({ field }) => (
                                                        <FormItem className="flex items-start space-x-4 space-y-0 cursor-pointer relative z-10 group">
                                                            <FormControl>
                                                                <div className="relative flex items-center justify-center mt-1">
                                                                    <input type="checkbox" className="peer appearance-none w-6 h-6 border-2 border-[#A11D1D] rounded bg-white/5 checked:bg-[#A11D1D] transition-all cursor-pointer" checked={field.value} onChange={field.onChange} />
                                                                    <CheckCircle2 className="absolute text-white w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                                </div>
                                                            </FormControl>
                                                            <FormLabel className="text-sm font-bold text-slate-300 leading-relaxed group-hover:text-white transition-colors cursor-pointer select-none">
                                                                I hereby acknowledge that all information written above is correct and true. I understand that any discrepancy may affect my registration.
                                                            </FormLabel>
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            {/* Summary Sidebar */}
                                            <div className="space-y-8">
                                                <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-8 shadow-sm">
                                                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                                                        <School className="w-4 h-4" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest italic">Preparation Course</span>
                                                    </div>
                                                    
                                                    <RadioGroup onValueChange={(val) => form.setValue("selectedCourse", val)} value={formData.selectedCourse ?? ""} className="space-y-3">
                                                        {courses.map(course => (
                                                            <label key={course.id} className={cn(
                                                                "flex flex-col p-4 rounded-2xl border transition-all cursor-pointer group",
                                                                formData.selectedCourse === course.id ? "bg-white border-[#A11D1D] shadow-md shadow-[#A11D1D]/5" : "bg-white/50 border-slate-200 hover:border-[#A11D1D]/20"
                                                            )}>
                                                                <div className="flex items-center justify-between mb-1">
                                                                    <RadioGroupItem value={course.id} className="sr-only" />
                                                                    <span className={cn("text-xs font-black uppercase tracking-tighter transition-colors", formData.selectedCourse === course.id ? "text-[#A11D1D]" : "text-slate-600")}>{course.label.split('(')[0]}</span>
                                                                    {formData.selectedCourse === course.id && <CheckCircle2 className="w-4 h-4 text-[#A11D1D]" />}
                                                                </div>
                                                                <span className="text-lg font-black text-slate-900 tracking-tighter">AED {course.price.toLocaleString()}</span>
                                                            </label>
                                                        ))}
                                                        <label className={cn(
                                                            "flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer",
                                                            !formData.selectedCourse ? "bg-white border-[#A11D1D]" : "bg-white/50 border-slate-200"
                                                        )}>
                                                            <RadioGroupItem value="" className="sr-only" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">No Prep Course</span>
                                                        </label>
                                                    </RadioGroup>

                                                    <div className="pt-8 border-t border-slate-200 space-y-4">
                                                        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                                                            <span>Exam Fee</span>
                                                            <span className="text-slate-900 italic">AED {EXAM_FEE.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                                                            <span>Service Fee</span>
                                                            <span className="text-slate-900 italic">AED {SERVICE_FEE.toLocaleString()}</span>
                                                        </div>
                                                        {coursePrice > 0 && (
                                                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                                                                <span>Course</span>
                                                                <span className="text-slate-900 italic">AED {coursePrice.toLocaleString()}</span>
                                                            </div>
                                                        )}
                                                        <div className="flex justify-between text-lg font-black text-[#A11D1D] pt-4 border-t-2 border-dashed border-slate-200 italic">
                                                            <span>TOTAL</span>
                                                            <span>AED {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-6 rounded-3xl bg-[#A11D1D]/5 border border-[#A11D1D]/10 flex gap-4">
                                                    <Lock className="w-5 h-5 text-[#A11D1D] shrink-0" />
                                                    <p className="text-[10px] text-[#A11D1D] font-bold uppercase tracking-widest leading-relaxed italic">
                                                        Secure 256-bit SSL encrypted registration portal. Your data is protected by Pearson global security standards.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Form Navigation Actions */}
                                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100">
                                    {currentStep > 1 ? (
                                        <Button type="button" onClick={handleBack} variant="ghost" className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs hover:text-[#A11D1D] transition-colors">
                                            ← Back to {currentStep === 2 ? "Identity" : "Booking"}
                                        </Button>
                                    ) : (
                                        <div />
                                    )}

                                    <div className="flex gap-4 w-full md:w-auto">
                                        {currentStep < 3 ? (
                                            <Button
                                                type="button"
                                                onClick={handleNext}
                                                className="bg-[#111827] text-white px-12 h-20 rounded-[1.5rem] font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group"
                                            >
                                                Save & Continue
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                className="bg-[#A11D1D] text-white px-16 h-20 rounded-[1.5rem] font-black text-xl hover:bg-[#8e1214] transition-all shadow-2xl shadow-[#A11D1D]/30 active:scale-95 transform group"
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
                </div>
            </section>
        </div>
    );
}
