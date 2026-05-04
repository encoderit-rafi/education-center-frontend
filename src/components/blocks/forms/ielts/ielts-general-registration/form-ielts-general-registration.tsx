"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
    CheckCircle2,
    MapPin,
    ArrowRight,
    Globe,
    User,
    ShieldCheck,
    BookOpen,
    HelpCircle,
    Info,
    AlertCircle,
    Phone,
    Mail,
    Clock,
    Calendar,
    ExternalLink,
    AlertTriangle,
    CreditCard,
    Search
} from "lucide-react";
import { IeltsGeneralSchema, type TIeltsGeneralSchema } from "./-type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { format } from "date-fns";

export default function FormIELTSGeneralRegistration() {
    const [step, setStep] = useState(1);

    const form = useForm<TIeltsGeneralSchema>({
        resolver: zodResolver(IeltsGeneralSchema),
        defaultValues: {
            bookingFor: "" as any,
            givenNames: "",
            surnames: "",
            noSurname: false,
            dateOfBirth: undefined,
            sex: "" as any,
            email: "",
            confirmEmail: "",
            mobileNumber: "",
            smsConsent: false,
            residenceCountry: "",
            postalAddress1: "",
            postalAddress2: "",
            postalAddress3: "",
            city: "",
            postcode: "",
            marketingPreference: "" as any,
            idType: "" as any,
            idNumber: "",
            idExpiryDate: undefined,
            issuingAuthority: "",
            nationality: "",
            firstLanguage: "",
            yearsStudyingEnglish: "",
            educationLevel: "",
            occupationLevel: "",
            occupationSector: "",
            reasonForTakingTest: "",
            destinationCountry: "",
            confirmationRecipient: "myself" as any,
            vatNumber: "",
            termsAgreed: false,
        },
    });

    const { control, handleSubmit, trigger, watch } = form;
    const formData = watch();

    const onSubmit: SubmitHandler<TIeltsGeneralSchema> = (data) => {
        if (step < 5) {
            handleNext();
            return;
        }
        console.log("IELTS General Registration Submitted:", data);
    };

    const handleNext = async () => {
        const fieldsToValidate = getFieldsForStep(step);
        const isValid = await trigger(fieldsToValidate as any);
        if (isValid) {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const getFieldsForStep = (currentStep: number) => {
        switch (currentStep) {
            case 1: return ["bookingFor", "givenNames", "surnames", "noSurname", "dateOfBirth", "sex", "email", "confirmEmail", "mobileNumber", "smsConsent", "residenceCountry", "postalAddress1", "city", "postcode", "marketingPreference"];
            case 2: return ["idType", "idNumber", "idExpiryDate", "issuingAuthority", "nationality"];
            case 3: return ["firstLanguage", "yearsStudyingEnglish", "educationLevel", "occupationLevel", "occupationSector", "reasonForTakingTest", "destinationCountry"];
            case 5: return ["confirmationRecipient", "termsAgreed"];
            default: return [];
        }
    };

    const stepHeadings = [
        "Personal details",
        "Identification details",
        "About you",
        "Review details",
        "Payment & Policies"
    ];

    const stepIcons = [
        <User className="w-5 h-5" key="i1" />,
        <ShieldCheck className="w-5 h-5" key="i2" />,
        <BookOpen className="w-5 h-5" key="i3" />,
        <Search className="w-5 h-5" key="i4" />,
        <CheckCircle2 className="w-5 h-5" key="i5" />
    ];

    const accentColor = "#A11D1D";

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 px-4 md:px-8 font-sans selection:bg-[#A11D1D]/10 selection:text-[#A11D1D]">
            <div className="max-w-4xl mx-auto">
                {/* Progress Tracking */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`bg-[${accentColor}] text-white p-3 rounded-2xl shadow-lg shadow-[#A11D1D]/20`} style={{ backgroundColor: accentColor }}>
                            {stepIcons[step - 1]}
                        </div>
                        <div>
                            <p className="text-[#A11D1D] text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: accentColor }}>Step {step} of 5</p>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mt-1 uppercase">
                                {stepHeadings[step - 1]}
                            </h1>
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                            className="h-full transition-all duration-700 ease-out" 
                            style={{ width: `${(step / 5) * 100}%`, backgroundColor: accentColor }}
                        ></div>
                    </div>
                </div>

                {/* Main Form Container */}
                <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: accentColor }}></div>
                    
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-14 space-y-12">
                            
                            {step === 1 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-green-50 border border-green-100 rounded-2xl p-6 flex items-center gap-4">
                                        <div className="bg-green-500 rounded-full p-1 text-white"><CheckCircle2 className="w-4 h-4" /></div>
                                        <p className="text-green-800 font-bold text-sm">Hi! You are now logged in.</p>
                                    </div>

                                    <div className="bg-[#FFF8E7] border border-[#FFECB3] rounded-3xl p-8 space-y-6">
                                        <h3 className="text-gray-900 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                            <Info className="w-4 h-4 text-[#FFB300]" />
                                            Please note:
                                        </h3>
                                        <div className="space-y-4 text-gray-700 text-sm font-medium leading-relaxed">
                                            <p>To continue with this booking you will need:</p>
                                            <ul className="space-y-4">
                                                <li className="flex gap-4">
                                                    <span className="text-[#FFB300] font-bold mt-1">*</span>
                                                    <span>A valid identification document of the test taker. Make sure you have a Passport or Emirates ID card, at hand, as you must enter the details of the identification document as part of the booking process. The ID copy does not have to be uploaded when booking your test.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="text-[#FFB300] font-bold mt-1">*</span>
                                                    <span>A payment card, if you wish to pay online</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <FormField
                                            control={control}
                                            name="bookingFor"
                                            render={({ field }) => (
                                                <FormItem className="space-y-6">
                                                    <FormLabel className="text-2xl font-black text-gray-900 tracking-tight">Who are you booking the test for?</FormLabel>
                                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                                        You cannot book a test for a child under the age of 11. If your child is 16 or over, please ask them to register for themselves.
                                                    </p>
                                                    <FormControl>
                                                        <RadioGroup className="flex flex-col gap-4" onValueChange={field.onChange} value={field.value}>
                                                            <div className="flex items-center space-x-4 p-5 rounded-2xl border border-slate-100 hover:border-[#A11D1D]/30 transition-all cursor-pointer bg-slate-50/50 group">
                                                                <RadioGroupItem value="myself" id="myself" className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]" />
                                                                <Label htmlFor="myself" className="font-bold text-slate-700 cursor-pointer group-hover:text-[#A11D1D] transition-colors">Myself</Label>
                                                            </div>
                                                            <div className="flex items-center space-x-4 p-5 rounded-2xl border border-slate-100 hover:border-[#A11D1D]/30 transition-all cursor-pointer bg-slate-50/50 group">
                                                                <RadioGroupItem value="child" id="child" className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]" />
                                                                <div className="flex flex-col cursor-pointer group-hover:text-[#A11D1D] transition-colors">
                                                                    <Label htmlFor="child" className="font-bold text-slate-700 cursor-pointer">My child</Label>
                                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">(under 16 years old)</span>
                                                                </div>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage className="text-xs font-bold" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    <div className="space-y-10">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">About you</h2>
                                        <div className="grid grid-cols-1 gap-10">
                                            <FormField control={control} name="givenNames" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">First / given names:</FormLabel>
                                                    <FormControl><Input placeholder="Enter given names" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                    <FormMessage className="text-xs font-bold" />
                                                </FormItem>
                                            )} />
                                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
                                                <FormField control={control} name="surnames" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Surname / family name:</FormLabel>
                                                        <FormControl><Input placeholder="Enter surname" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="noSurname" render={({ field }) => (
                                                    <FormItem className="flex items-center space-x-3 space-y-0 h-14 pb-2">
                                                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D]" /></FormControl>
                                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer">I don't have a surname / family name</Label>
                                                    </FormItem>
                                                )} />
                                            </div>
                                            
                                            <DateTimePicker 
                                                mode="date" 
                                                control={control} 
                                                name="dateOfBirth" 
                                                label="Date of birth:*"
                                                placeholder="Select date of birth" 
                                                fromYear={1950} 
                                                toYear={new Date().getFullYear()}
                                                className="h-14 rounded-xl border-slate-200"
                                            />

                                            <FormField control={control} name="sex" render={({ field }) => (
                                                <FormItem className="space-y-4">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Sex:</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup className="flex gap-10" onValueChange={field.onChange} value={field.value}>
                                                            {["Female", "Male"].map(s => (
                                                                <div key={s} className="flex items-center space-x-3 group cursor-pointer">
                                                                    <RadioGroupItem value={s.toLowerCase()} id={`sex-${s}`} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D]" />
                                                                    <Label htmlFor={`sex-${s}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{s}</Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    <div className="space-y-10">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your contact details</h2>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                            Please provide your phone number and postal address in case we need to contact you or send you any documents (e.g. your test report form).
                                        </p>
                                        <div className="grid grid-cols-1 gap-10">
                                            <FormField control={control} name="email" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email address:</FormLabel>
                                                    <FormControl><Input placeholder="example@email.com" className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="confirmEmail" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Confirm email address:</FormLabel>
                                                    <FormControl><Input placeholder="example@email.com" className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="mobileNumber" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Mobile number:</FormLabel>
                                                    <FormControl><PhoneInput value={field.value} onChange={field.onChange} className="h-14 rounded-xl border-slate-200" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            
                                            <FormField control={control} name="smsConsent" render={({ field }) => (
                                                <FormItem className="flex items-start space-x-4 space-y-0 p-6 rounded-3xl bg-slate-50/50 border border-slate-100">
                                                    <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                                                    <div className="space-y-2">
                                                        <Label className="text-sm font-bold text-slate-600 leading-relaxed cursor-pointer">I agree to receive notifications or to be contacted about my test registration to this telephone number via SMS, WhatsApp, etc.</Label>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">Please note: this service might not be available in your location.</p>
                                                    </div>
                                                </FormItem>
                                            )} />

                                            <FormField control={control} name="residenceCountry" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Country / territory of residence:</FormLabel>
                                                    <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 rounded-xl border-slate-200" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="space-y-4">
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Postal address:</FormLabel>
                                                <div className="space-y-4">
                                                    <FormField control={control} name="postalAddress1" render={({ field }) => <FormItem><FormControl><Input placeholder="Address line 1" className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl><FormMessage /></FormItem>} />
                                                    <FormField control={control} name="postalAddress2" render={({ field }) => <FormItem><FormControl><Input placeholder="Address line 2" className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl></FormItem>} />
                                                    <FormField control={control} name="postalAddress3" render={({ field }) => <FormItem><FormControl><Input placeholder="Address line 3" className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl></FormItem>} />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FormField control={control} name="city" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Town / City:</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="postcode" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Postcode / ZIP:</FormLabel>
                                                        <FormControl><Input className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    <div className="space-y-10">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your marketing preferences</h2>
                                        <FormField control={control} name="marketingPreference" render={({ field }) => (
                                            <FormItem className="space-y-8">
                                                <FormControl>
                                                    <RadioGroup className="flex flex-col gap-6" onValueChange={field.onChange} value={field.value}>
                                                        {[
                                                            { id: "all", label: "I am happy to receive updates about products, services and events provided or organised by the British Council (including members of the wider British Council group)." },
                                                            { id: "some", label: "I am happy to receive information about products, services and events organised by British Council and by third parties selected by the British Council." },
                                                            { id: "none", label: "Please do not send me any marketing updates." }
                                                        ].map(opt => (
                                                            <div key={opt.id} className="flex items-start space-x-4 group cursor-pointer">
                                                                <RadioGroupItem value={opt.id} id={`mkt-${opt.id}`} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D] mt-1" />
                                                                <Label htmlFor={`mkt-${opt.id}`} className="text-sm font-bold text-slate-600 leading-relaxed cursor-pointer group-hover:text-[#A11D1D] transition-colors">{opt.label}</Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-4">
                                            <ShieldCheck className="w-6 h-6 text-[#A11D1D]" />
                                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Identification details</h2>
                                        </div>
                                        <div className="grid grid-cols-1 gap-12">
                                            <FormField control={control} name="idType" render={({ field }) => (
                                                <FormItem className="space-y-6">
                                                    <FormLabel className="text-lg font-black text-gray-900 tracking-tight">Identification type</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" onValueChange={field.onChange} value={field.value}>
                                                            {[{ id: "passport", label: "Passport" }, { id: "emirates_id", label: "Emirates ID" }].map(opt => (
                                                                <div key={opt.id} className="flex items-center space-x-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-[#A11D1D]/30 transition-all cursor-pointer group">
                                                                    <RadioGroupItem value={opt.id} id={`id-${opt.id}`} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D]" />
                                                                    <Label htmlFor={`id-${opt.id}`} className="font-bold text-slate-700 cursor-pointer group-hover:text-[#A11D1D] transition-colors">{opt.label}</Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="bg-orange-50/50 border-l-4 border-orange-400 p-6 space-y-2">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Please note:</p>
                                                <p className="text-xs text-orange-800 font-medium leading-relaxed">On the test day, you will be required to bring the same identification document you are using for registration.</p>
                                            </div>

                                            <FormField control={control} name="idNumber" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">ID number:</FormLabel>
                                                    <FormControl><Input className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <DateTimePicker 
                                                mode="date" 
                                                control={control} 
                                                name="idExpiryDate" 
                                                label="ID expiry date:*"
                                                placeholder="Select expiry date" 
                                                fromYear={new Date().getFullYear()} 
                                                toYear={new Date().getFullYear() + 20}
                                                className="h-14 rounded-xl border-slate-200"
                                            />

                                            <FormField control={control} name="issuingAuthority" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Issuing authority:</FormLabel>
                                                    <FormControl><Input className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={control} name="nationality" render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What is your country / territory of nationality?</FormLabel>
                                                    <FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 rounded-xl border-slate-200" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-12">
                                        <div className="space-y-10">
                                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">About you</h2>
                                            <div className="grid grid-cols-1 gap-8">
                                                <FormField control={control} name="firstLanguage" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What is your first language?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[{label: "English", value: "English"}, {label: "Bengali", value: "Bengali"}, {label: "Arabic", value: "Arabic"}]} placeholder="Select language" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="yearsStudyingEnglish" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">How many years have you been studying English?</FormLabel>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Your answer to this question has no impact on your test score</p>
                                                        <FormControl><SearchableDropdown options={[{label: "0-1 years", value: "0-1"}, {label: "2-5 years", value: "2-5"}, {label: "5+ years", value: "5+"}]} placeholder="Select years" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="educationLevel" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What level of education have you completed?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[{label: "Secondary", value: "secondary"}, {label: "Undergraduate", value: "undergraduate"}, {label: "Postgraduate", value: "postgraduate"}]} placeholder="Select level" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="h-px bg-slate-100"></div>

                                        <div className="space-y-10">
                                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your occupation</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FormField control={control} name="occupationLevel" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What is your occupation level?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[{label: "Student", value: "student"}, {label: "Professional", value: "professional"}, {label: "Manager", value: "manager"}]} placeholder="Select level" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="occupationSector" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What is your occupation sector?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[{label: "Education", value: "education"}, {label: "Health", value: "health"}, {label: "Business", value: "business"}]} placeholder="Select sector" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="h-px bg-slate-100"></div>

                                        <div className="space-y-10">
                                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your interest in IELTS</h2>
                                            <div className="grid grid-cols-1 gap-8">
                                                <FormField control={control} name="reasonForTakingTest" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Why are you taking the test?</FormLabel>
                                                        <FormControl><SearchableDropdown options={[{label: "Study", value: "study"}, {label: "Work", value: "work"}, {label: "Immigration", value: "immigration"}]} placeholder="Select reason" value={field.value} onChange={field.onChange} className="h-14 bg-white" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="destinationCountry" render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Which country / territory do you want to study / work / live in?</FormLabel>
                                                        <FormControl><CountryDropdown placeholder="Select destination" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-14 rounded-xl border-slate-200" /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-[#FFF8E7] border border-[#FFECB3] rounded-3xl p-8 flex items-start gap-5 shadow-sm">
                                        <div className="bg-[#FFB300] rounded-full p-2 text-white mt-1">
                                            <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-900 font-black text-sm uppercase tracking-widest leading-none mb-2">You have not booked yet!</p>
                                            <p className="text-gray-600 text-sm font-medium leading-relaxed">Please check all the details carefully before you book.</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#A11D1D]/5 rounded-3xl border border-[#A11D1D]/10 p-10 space-y-8">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A11D1D]">You are booking</p>
                                            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">IELTS General Training</h2>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6 flex flex-col justify-between">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <BookOpen className="w-5 h-5 text-[#A11D1D]" />
                                                        <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight">Listening, Reading & Writing</h3>
                                                    </div>
                                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">IELTS on paper</p>
                                                    <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
                                                        <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                            <Calendar className="w-4 h-4 text-[#A11D1D]" /> 20 June 2026
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                            <Clock className="w-4 h-4 text-[#A11D1D]" /> 08:45 - 13:00 <span className="text-[10px] text-slate-400 font-medium italic">(please arrive at 07:30)</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 items-start pt-2">
                                                        <MapPin className="w-4 h-4 text-[#A11D1D] mt-1 shrink-0" />
                                                        <div>
                                                            <p className="text-sm font-black text-gray-900 uppercase tracking-tight">Sorbonne University Abu Dhabi</p>
                                                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">FCQ7+392 - Hazza Bin Zayed St - Al Reem Island - Abu Dhabi</p>
                                                            <button type="button" className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest mt-2 flex items-center gap-2 hover:underline">
                                                                <Globe className="w-3 h-3" /> View on map
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="w-full h-12 rounded-xl border-2 border-[#A11D1D] text-[#A11D1D] font-black text-[10px] uppercase tracking-widest hover:bg-[#A11D1D] hover:text-white transition-all mt-4">Change written test</button>
                                            </div>

                                            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6 flex flex-col justify-between">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <User className="w-5 h-5 text-[#A11D1D]" />
                                                        <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight">Speaking test</h3>
                                                    </div>
                                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Face to face</p>
                                                    <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
                                                        <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                            <Calendar className="w-4 h-4 text-[#A11D1D]" /> 20 June 2026
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                            <Clock className="w-4 h-4 text-[#A11D1D]" /> 14:40 - 15:00 <span className="text-[10px] text-slate-400 font-medium italic">(please arrive at 14:10)</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 items-start pt-2">
                                                        <MapPin className="w-4 h-4 text-[#A11D1D] mt-1 shrink-0" />
                                                        <div>
                                                            <p className="text-sm font-black text-gray-900 uppercase tracking-tight">Sorbonne University Abu Dhabi</p>
                                                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">FCQ7+392 - Hazza Bin Zayed St - Al Reem Island - Abu Dhabi</p>
                                                            <button type="button" className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest mt-2 flex items-center gap-2 hover:underline">
                                                                <Globe className="w-3 h-3" /> View on map
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="w-full h-12 rounded-xl border-2 border-[#A11D1D] text-[#A11D1D] font-black text-[10px] uppercase tracking-widest hover:bg-[#A11D1D] hover:text-white transition-all mt-4">Change speaking schedule</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Your details</h3>
                                            <button type="button" onClick={() => setStep(1)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">Change</button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14 text-sm">
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name:</p><p className="font-bold text-gray-900 text-lg uppercase tracking-tight">{formData.givenNames} {formData.surnames}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date of Birth:</p><p className="font-bold text-gray-900 text-lg tracking-tight">{formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : ""}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sex:</p><p className="font-bold text-gray-900 text-lg uppercase tracking-tight">{formData.sex}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email address:</p><p className="font-bold text-gray-900 text-lg tracking-tight">{formData.email}</p></div>
                                            <div className="space-y-4 md:col-span-2 pt-4">
                                                <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile telephone number:</p><p className="font-bold text-gray-900 text-lg tracking-tight">{formData.mobileNumber}</p></div>
                                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/50 border border-slate-100 w-fit">
                                                    <div className="p-2 bg-white rounded-lg border border-slate-200"><Phone className="w-4 h-4 text-[#A11D1D]" /></div>
                                                    <p className="text-xs font-bold text-slate-600">I want to receive updates about my tests and results to this mobile telephone number</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:col-span-2 pt-4"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address:</p><div className="font-bold text-gray-900 text-lg leading-relaxed uppercase tracking-tight"><p>{formData.postalAddress1}</p><p>{formData.postalAddress2}</p><p>{formData.postalAddress3}</p><p>{formData.city}</p><p>{formData.postcode}</p><p>{formData.residenceCountry}</p></div></div>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Your identification</h3>
                                            <button type="button" onClick={() => setStep(2)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">Change</button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14 text-sm">
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">ID number:</p><p className="font-bold text-gray-900 text-lg tracking-tight">{formData.idNumber}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">ID expiry date:</p><p className="font-bold text-gray-900 text-lg tracking-tight">{formData.idExpiryDate ? format(formData.idExpiryDate, "PPP") : ""}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Issuing authority:</p><p className="font-bold text-gray-900 text-lg uppercase tracking-tight">{formData.issuingAuthority}</p></div>
                                            <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Country / territory of nationality:</p><p className="font-bold text-gray-900 text-lg uppercase tracking-tight">{formData.nationality}</p></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-8">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase border-b border-slate-100 pb-4">Payment</h2>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Fee:</span><span className="font-black text-gray-900 text-xl tracking-tight uppercase">1,400.00 AED</span></div>
                                            <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Tax:</span><span className="font-black text-gray-900 text-xl tracking-tight uppercase">70.00 AED</span></div>
                                            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                                                <span className="font-black text-gray-900 uppercase tracking-tight text-lg">Total:</span>
                                                <div className="flex flex-col items-end gap-2">
                                                    <span className="text-3xl font-black text-[#A11D1D] tracking-tight uppercase">1,470.00 AED</span>
                                                    <button type="button" className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline border-b border-[#A11D1D]">I have a promo code</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase border-b border-slate-100 pb-4">Order acknowledgement</h2>
                                        <FormField control={control} name="confirmationRecipient" render={({ field }) => (
                                            <FormItem className="space-y-8">
                                                <FormLabel className="text-sm font-bold text-slate-500 leading-relaxed">Who should receive the order confirmation for the test booking?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup className="flex flex-col gap-5" onValueChange={field.onChange} value={field.value}>
                                                        {[
                                                            { id: "myself", label: "Myself" },
                                                            { id: "other", label: "Another Person" },
                                                            { id: "company", label: "A Company" }
                                                        ].map(opt => (
                                                            <div key={opt.id} className="flex items-center space-x-4 group cursor-pointer">
                                                                <RadioGroupItem value={opt.id} id={`conf-${opt.id}`} className="w-6 h-6 border-slate-300 data-[state=checked]:bg-[#A11D1D]" />
                                                                <Label htmlFor={`conf-${opt.id}`} className="font-bold text-slate-600 group-hover:text-[#A11D1D] transition-colors cursor-pointer text-base">{opt.label}</Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={control} name="vatNumber" render={({ field }) => (
                                            <FormItem className="space-y-3 pt-6">
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">VAT/NIP number:</FormLabel>
                                                <FormControl><Input className="h-14 rounded-xl border-slate-200 font-medium" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>

                                    <div className="space-y-8">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase border-b border-slate-100 pb-4">Our terms and conditions</h2>
                                        <FormField control={control} name="termsAgreed" render={({ field }) => (
                                            <FormItem className="flex items-start space-x-5 space-y-0 p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100">
                                                <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-6 h-6 border-slate-300 data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                                                <div className="space-y-4 text-sm">
                                                    <Label className="font-bold text-slate-700 leading-relaxed cursor-pointer">I agree to the IELTS <button type="button" className="text-[#A11D1D] hover:underline">terms and conditions</button> and <button type="button" className="text-[#A11D1D] hover:underline">cancellation policy</button></Label>
                                                    <p className="text-slate-400 font-medium leading-relaxed">The British Council will use the information that you are providing in connection with processing your registration. The legal basis for processing your information is agreement with our terms and conditions of registration (contract).</p>
                                                    <button type="button" className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline">+ Read full notice</button>
                                                </div>
                                            </FormItem>
                                        )} />
                                    </div>

                                    <div className="space-y-8 pt-6">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase border-b border-slate-100 pb-4">Book and pay:</h2>
                                        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 md:p-14 space-y-10 shadow-sm relative overflow-hidden group hover:border-[#A11D1D]/20 transition-all">
                                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <CreditCard className="w-32 h-32 text-[#A11D1D]" />
                                            </div>
                                            <div className="space-y-3 relative z-10">
                                                <p className="text-base font-black text-gray-900 tracking-tight">Recommended payment method</p>
                                                <div className="h-1 w-12 bg-[#A11D1D] rounded-full"></div>
                                            </div>
                                            <Button 
                                                type="submit"
                                                className="w-full md:w-auto min-w-[240px] bg-[#A11D1D] hover:bg-[#8A1818] text-white px-14 py-10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-[#A11D1D]/20 flex items-center justify-center gap-4 group h-auto"
                                            >
                                                Pay online
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                        <div className="flex flex-col gap-4 items-center pt-4">
                                            <button type="button" className="text-[#A11D1D] font-black text-xs uppercase tracking-widest border-b-2 border-[#A11D1D]/20 hover:border-[#A11D1D] transition-all pb-1">Pay offline</button>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Payment options will be shown on next page</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step < 5 && (
                                <div className="pt-10 border-t border-slate-100 flex justify-between items-center mt-12">
                                    {step > 1 && (
                                        <button 
                                            type="button" 
                                            onClick={() => setStep(step - 1)} 
                                            className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-[#A11D1D] transition-all px-4"
                                        >
                                            Previous
                                        </button>
                                    )}
                                    <Button 
                                        type="button"
                                        onClick={handleNext}
                                        className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-12 py-8 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 ml-auto flex items-center gap-4 group transition-all h-auto"
                                        style={{ backgroundColor: accentColor }}
                                    >
                                        {step === 4 ? "Save and continue" : "Save and continue"}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            )}
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
