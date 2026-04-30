"use client";

import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
    CheckCircle2,
    Info,
    AlertCircle,
    Check,
    Clock,
    MapPin,
    CreditCard,
    ExternalLink,
    ArrowRight
} from "lucide-react";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./-type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";

export default function FormIELTSAcademicRegistration() {
    const [step, setStep] = useState(1);

    const form = useForm<TIeltsAcademicSchema>({
        resolver: zodResolver(IeltsAcademicSchema),
        defaultValues: {
            bookingFor: "" as any,
            givenNames: "",
            surnames: "",
            noSurname: false,
            dateOfBirth: undefined,
            sex: "" as any,
            mobileNumber: "",
            smsConsent: false,
            residenceCountry: "",
            postalAddress1: "",
            postalAddress2: "",
            postalAddress3: "",
            city: "",
            postcode: "",
            marketingPreference: "" as any,
            // Step 2
            idType: "" as any,
            idNumber: "",
            idExpiryDate: undefined,
            issuingAuthority: "",
            nationality: "",
            // Step 3
            firstLanguage: "",
            yearsStudyingEnglish: "",
            educationLevel: "",
            occupationLevel: "",
            occupationSector: "",
            reasonForTakingTest: "",
            destinationCountry: "",
            // Step 4
            confirmationRecipient: "" as any,
            vatNumber: "",
            termsAgreed: false,
        },
    });

    const { control, handleSubmit, watch } = form;

    const formData = watch();

    const onSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
        if (step < 5) {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            console.log("Final Form Data:", data);
        }
    };

    return (
        <div className="bg-gray-50/50 font-body text-on-surface min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto pt-12 px-6">
                <div className="flex flex-col mb-8">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Step {step} of 5</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                        {step === 1 ? "Personal details" : step === 2 ? "Identification details" : step === 3 ? "Your profile" : "Review"}
                    </h1>
                    <div className="w-12 h-1 bg-[#A11D1D] mt-4 transition-all duration-500" style={{ width: `${(step / 5) * 100}%` }}></div>
                </div>

                {/* Logged In Alert */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-1">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-green-800 text-sm font-medium">Hi! You are now logged in.</p>
                </div>

                {/* Main Form Container */}
                <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A11D1D]"></div>
                    
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-12">
                            
                            {step === 1 && (
                                <>
                        {/* Note Box */}
                        <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 md:p-8 space-y-4">
                            <h3 className="text-gray-900 font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                                <Info className="w-4 h-4 text-orange-500" />
                                Please note:
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                To continue with this booking you will need:
                            </p>
                            <ul className="space-y-3">
                                <li className="text-gray-600 text-sm leading-relaxed flex gap-3">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>A valid identification document of the test taker. Make sure you have a Passport or Emirates ID card, at hand, as you must enter the details of the identification document as part of the booking process. The ID copy does not have to be uploaded when booking your test.</span>
                                </li>
                                <li className="text-gray-600 text-sm leading-relaxed flex gap-3">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>A payment card, if you wish to pay online</span>
                                </li>
                            </ul>
                        </div>

                        {/* Who are you booking for */}
                        <div className="space-y-6">
                            <FormField
                                control={control}
                                name="bookingFor"
                                render={({ field }) => (
                                    <FormItem className="space-y-6">
                                        <FormLabel className="text-lg font-black text-gray-900 tracking-tight">Who are you booking the test for?</FormLabel>
                                        <p className="text-gray-500 text-sm font-medium">
                                            You cannot book a test for a child under the age of 11. If your child is 16 or over, please ask them to register for themselves.
                                        </p>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="space-y-4"
                                            >
                                                <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-slate-50/30">
                                                    <RadioGroupItem value="myself" id="myself" className="border-[#A11D1D] text-[#A11D1D]" />
                                                    <Label htmlFor="myself" className="flex flex-col cursor-pointer">
                                                        <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">Myself</span>
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-slate-50/30">
                                                    <RadioGroupItem value="child" id="child" className="border-[#A11D1D] text-[#A11D1D]" />
                                                    <Label htmlFor="child" className="flex flex-col cursor-pointer">
                                                        <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">My child</span>
                                                        <span className="text-xs text-gray-400 font-medium">(under 16 years old)</span>
                                                    </Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="h-px bg-slate-100"></div>

                        {/* About You Section */}
                        <div className="space-y-8">
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">About you</h2>
                            
                            <div className="grid grid-cols-1 gap-8">
                                <FormField
                                    control={control}
                                    name="givenNames"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">First / given names:*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="As per passport" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
                                        <FormField
                                            control={control}
                                            name="surnames"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2 flex-1 w-full">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Surname / family name:*</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="As per passport" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name="noSurname"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 h-12">
                                                    <FormControl>
                                                        <Checkbox
                                                            id="noSurname"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel htmlFor="noSurname" className="text-xs font-bold text-gray-500 cursor-pointer">
                                                            I don't have a surname / family name
                                                        </FormLabel>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <DateTimePicker
                                        control={control}
                                        name="dateOfBirth"
                                        label="Date of birth:*"
                                        labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12 w-full"
                                        fromYear={1940}
                                        toYear={2024}
                                    />

                                    <FormField
                                        control={control}
                                        name="sex"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Sex:*</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        className="flex gap-8 h-12 items-center"
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                    >
                                                        {["female", "male"].map((s) => (
                                                            <div key={s} className="flex items-center space-x-2 group cursor-pointer">
                                                                <RadioGroupItem value={s} id={`sex-${s}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <Label htmlFor={`sex-${s}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer capitalize">{s}</Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100"></div>

                        {/* Contact Details Section */}
                        <div className="space-y-8">
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">Your contact details</h2>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                Please provide your phone number and postal address in case we need to contact you or send you any documents (e.g. your test report form).
                            </p>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="mobileNumber"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Mobile number:*</FormLabel>
                                                <FormControl>
                                                    <div className="relative h-12">
                                                        <PhoneInput 
                                                            value={field.value as any}
                                                            onChange={field.onChange}
                                                            className="rounded-lg border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-[#A11D1D]/5 transition-all h-full"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name="smsConsent"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D] mt-1"
                                                />
                                            </FormControl>
                                            <div className="space-y-2">
                                                <FormLabel className="text-sm font-bold text-gray-600 leading-relaxed cursor-pointer">
                                                    I agree to receive notifications or to be contacted about my test registration to this telephone number via SMS, WhatsApp, etc.
                                                </FormLabel>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-[#A11D1D]">Please note: this service might not be available in your location.</p>
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name="residenceCountry"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country / territory of residence:*</FormLabel>
                                            <FormControl>
                                                <CountryDropdown
                                                    placeholder="Search country..."
                                                    value={field.value}
                                                    onChange={(country) => field.onChange(country.name)}
                                                    className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-500">Postal address:*</Label>
                                    <div className="space-y-3">
                                        <FormField
                                            control={control}
                                            name="postalAddress1"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Address Line 1" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name="postalAddress2"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Address Line 2 (Optional)" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name="postalAddress3"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Address Line 3 (Optional)" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Town / City:*</FormLabel>
                                                <FormControl>
                                                    <Input className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="postcode"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Postcode / ZIP:*</FormLabel>
                                                <FormControl>
                                                    <Input className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100"></div>

                        {/* Marketing Preferences */}
                        <div className="space-y-8">
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">Your marketing preferences</h2>
                            
                            <FormField
                                control={control}
                                name="marketingPreference"
                                render={({ field }) => (
                                    <FormItem className="space-y-6">
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="space-y-6"
                                            >
                                                {[
                                                    { id: "all", label: "I am happy to receive updates about products, services and events provided or organised by the British Council (including members of the wider British Council group)." },
                                                    { id: "some", label: "I am happy to receive information about products, services and events organised by British Council and by third parties selected by the British Council." },
                                                    { id: "none", label: "Please do not send me any marketing updates." }
                                                ].map((opt) => (
                                                    <div key={opt.id} className="flex items-start space-x-4 group cursor-pointer">
                                                        <RadioGroupItem value={opt.id} id={`mkt-${opt.id}`} className="border-[#A11D1D] text-[#A11D1D] mt-1" />
                                                        <Label htmlFor={`mkt-${opt.id}`} className="text-sm font-medium text-gray-600 leading-relaxed cursor-pointer group-hover:text-[#A11D1D] transition-colors">
                                                            {opt.label}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                    The British Council would like to use the information you provide to send details of activities, services and events (including social events) which we think are of interest.
                                </p>
                                <button type="button" className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">+ Read full notice</button>
                            </div>
                        </div>

                                </>
                            )}

                            {step === 2 && (
                                <div className="space-y-12">
                                    {/* Identification type */}
                                    <div className="space-y-6">
                                        <FormField
                                            control={control}
                                            name="idType"
                                            render={({ field }) => (
                                                <FormItem className="space-y-6">
                                                    <FormLabel className="text-lg font-black text-gray-900 tracking-tight">Identification type</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            value={field.value}
                                                            className="space-y-4"
                                                        >
                                                            <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-slate-50/30">
                                                                <RadioGroupItem value="passport" id="passport" className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <Label htmlFor="passport" className="flex flex-col cursor-pointer">
                                                                    <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">Passport</span>
                                                                </Label>
                                                            </div>
                                                            <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-slate-50/30">
                                                                <RadioGroupItem value="emirates_id" id="emirates_id" className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <Label htmlFor="emirates_id" className="flex flex-col cursor-pointer">
                                                                    <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">Emirates ID</span>
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    {/* Note Box Step 2 */}
                                    <div className="border-l-4 border-orange-500 bg-orange-50/30 p-6 rounded-r-2xl">
                                        <p className="text-sm font-black uppercase tracking-widest text-orange-600 mb-2">Please note:</p>
                                        <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                            On the test day, you will be required to bring the same identification document you are using for registration.
                                        </p>
                                    </div>

                                    {/* ID Details */}
                                    <div className="space-y-8">
                                        <FormField
                                            control={control}
                                            name="idNumber"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Passport number:*</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <DateTimePicker
                                            control={control}
                                            name="idExpiryDate"
                                            label="Passport expiry date:*"
                                            labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                            mode="date"
                                            placeholder="dd/mm/yyyy"
                                            className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12 w-full"
                                            fromYear={2024}
                                            toYear={2040}
                                        />

                                        <FormField
                                            control={control}
                                            name="issuingAuthority"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Issuing authority:*</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={control}
                                            name="nationality"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What is your country / territory of nationality?*</FormLabel>
                                                    <FormControl>
                                                        <CountryDropdown
                                                            placeholder="Search country..."
                                                            value={field.value}
                                                            onChange={(country) => field.onChange(country.name)}
                                                            className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="h-px bg-slate-100"></div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-12">
                                    {/* Yellow Note Box */}
                                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                                        <div className="bg-amber-100 p-2 rounded-lg">
                                            <AlertCircle className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <p className="text-amber-800 text-sm font-medium leading-relaxed">
                                            Answering these questions has no impact on your IELTS test results. These questions will help us improve our services to test takers like you.
                                        </p>
                                    </div>

                                    {/* About You Section */}
                                    <div className="space-y-8">
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight">About you</h2>
                                        
                                        <div className="space-y-8">
                                            <FormField
                                                control={control}
                                                name="firstLanguage"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What is your first language?*</FormLabel>
                                                        <FormControl>
                                                            <SearchableDropdown
                                                                options={[
                                                                    { label: "Arabic", value: "Arabic" },
                                                                    { label: "Bengali", value: "Bengali" },
                                                                    { label: "Chinese", value: "Chinese" },
                                                                    { label: "English", value: "English" },
                                                                    { label: "French", value: "French" },
                                                                    { label: "Spanish", value: "Spanish" },
                                                                    { label: "Other", value: "Other" },
                                                                ]}
                                                                placeholder="-Select Language-"
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="yearsStudyingEnglish"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">How many years have you been studying English?*</FormLabel>
                                                        <p className="text-[10px] uppercase font-black tracking-widest text-[#A11D1D]">Your answer to this question has no impact on your test score</p>
                                                        <FormControl>
                                                            <SearchableDropdown
                                                                options={[
                                                                    { label: "0-2 years", value: "0-2" },
                                                                    { label: "3-5 years", value: "3-5" },
                                                                    { label: "6-9 years", value: "6-9" },
                                                                    { label: "10+ years", value: "10+" },
                                                                ]}
                                                                placeholder="-Select Duration-"
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="educationLevel"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-6">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What level of education have you completed?*</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                className="space-y-4"
                                                            >
                                                                {[
                                                                    { id: "secondary_up_to_16", label: "Secondary (up to 16 years)" },
                                                                    { id: "secondary_16_19", label: "Secondary (16-19 years)" },
                                                                    { id: "degree", label: "Degree (or equivalent)" },
                                                                    { id: "post_graduate", label: "Post-graduate" },
                                                                ].map((opt) => (
                                                                    <div key={opt.id} className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-slate-50/30">
                                                                        <RadioGroupItem value={opt.id} id={opt.id} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                        <Label htmlFor={opt.id} className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{opt.label}</Label>
                                                                    </div>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    {/* Your Occupation Section */}
                                    <div className="space-y-8">
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Your occupation</h2>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField
                                                control={control}
                                                name="occupationLevel"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What is your occupation level?*</FormLabel>
                                                        <FormControl>
                                                            <SearchableDropdown
                                                                options={[
                                                                    { label: "Self-employed", value: "Self-employed" },
                                                                    { label: "Employee (Senior level)", value: "Employee (Senior level)" },
                                                                    { label: "Employee (Middle/Junior level)", value: "Employee (Middle/Junior level)" },
                                                                    { label: "Student", value: "Student" },
                                                                    { label: "Other", value: "Other" },
                                                                ]}
                                                                placeholder="-Select Level-"
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="occupationSector"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What is your occupation sector?*</FormLabel>
                                                        <FormControl>
                                                            <SearchableDropdown
                                                                options={[
                                                                    { label: "Education", value: "Education" },
                                                                    { label: "Health and Social Services", value: "Health and Social Services" },
                                                                    { label: "Banking and Finance", value: "Banking and Finance" },
                                                                    { label: "Other", value: "Other" },
                                                                ]}
                                                                placeholder="-Select Sector-"
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    {/* Your Interest in IELTS */}
                                    <div className="space-y-8">
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Your interest in IELTS</h2>
                                        
                                        <div className="space-y-8">
                                            <FormField
                                                control={control}
                                                name="reasonForTakingTest"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Why are you taking the test?*</FormLabel>
                                                        <FormControl>
                                                            <SearchableDropdown
                                                                options={[
                                                                    { label: "Higher education extended course", value: "Higher education" },
                                                                    { label: "Immigration", value: "Immigration" },
                                                                    { label: "Employment", value: "Employment" },
                                                                    { label: "Professional registration", value: "Professional registration" },
                                                                ]}
                                                                placeholder="-Select Reason-"
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="destinationCountry"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Which country / territory do you want to study / work / live in?*</FormLabel>
                                                        <FormControl>
                                                            <CountryDropdown
                                                                placeholder="-Select Country-"
                                                                value={field.value}
                                                                onChange={(country) => field.onChange(country.name)}
                                                                className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-12">
                                    {/* Yellow Note Box */}
                                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                                        <div className="bg-amber-100 p-2 rounded-lg">
                                            <AlertCircle className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="text-amber-900 font-bold text-sm mb-1">You have not booked yet!</p>
                                            <p className="text-amber-800 text-sm font-medium leading-relaxed">
                                                Please check all the details carefully before you book.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Booking Summary Section */}
                                    <div className="space-y-8">
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight">You are booking</h2>
                                        <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 space-y-8">
                                            <h3 className="text-lg font-black text-gray-900">IELTS Academic</h3>
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                {/* Written Test Box */}
                                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                                                            <Clock className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900">Listening, Reading & Writing</h4>
                                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">IELTS on computer</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-indigo-50/50 rounded-xl p-4 space-y-2">
                                                        <div className="flex items-center gap-2 text-indigo-900 text-sm font-bold">
                                                            <CheckCircle2 className="w-4 h-4" />
                                                            15 May 2026
                                                        </div>
                                                        <div className="text-indigo-700 text-xs font-medium">
                                                            13:30 - 16:15 <span className="text-indigo-400 italic">(please arrive at 12:45)</span>
                                                        </div>
                                                    </div>

                                                    <button type="button" className="w-full py-2 rounded-full border border-indigo-200 text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-all uppercase tracking-widest">Change written test</button>

                                                    <div className="pt-4 border-t border-slate-50 space-y-3">
                                                        <div className="flex items-start gap-2 text-sm">
                                                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                                                            <div>
                                                                <p className="font-bold text-gray-900">British Council Sharjah</p>
                                                                <p className="text-gray-500 text-xs font-medium">Sharjah</p>
                                                            </div>
                                                            <button type="button" className="ml-auto text-[#A11D1D] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                                                <ExternalLink className="w-3 h-3" /> View map
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Speaking Test Box */}
                                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900">Speaking test</h4>
                                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Face to face</p>
                                                        </div>
                                                    </div>

                                                    <div className="bg-emerald-50/50 rounded-xl p-4 space-y-2">
                                                        <div className="flex items-center gap-2 text-emerald-900 text-sm font-bold">
                                                            <CheckCircle2 className="w-4 h-4" />
                                                            15 May 2026
                                                        </div>
                                                        <div className="text-emerald-700 text-xs font-medium">
                                                            09:00 - 09:20 <span className="text-emerald-400 italic">(please arrive at 08:40)</span>
                                                        </div>
                                                    </div>

                                                    <button type="button" className="w-full py-2 rounded-full border border-emerald-200 text-emerald-600 text-xs font-bold hover:bg-emerald-50 transition-all uppercase tracking-widest">Change speaking schedule</button>

                                                    <div className="pt-4 border-t border-slate-50 space-y-3">
                                                        <div className="flex items-start gap-2 text-sm">
                                                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                                                            <div>
                                                                <p className="font-bold text-gray-900">British Council Sharjah</p>
                                                                <p className="text-gray-500 text-xs font-medium">Sharjah</p>
                                                            </div>
                                                            <button type="button" className="ml-auto text-[#A11D1D] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                                                <ExternalLink className="w-3 h-3" /> View map
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* User Details Summary */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Your details</h3>
                                            <button type="button" onClick={() => setStep(1)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">Change</button>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-6 text-sm">
                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Name:</div>
                                            <div className="font-black text-gray-900 text-base">{formData.givenNames} {formData.surnames}</div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Date of Birth:</div>
                                            <div className="font-bold text-gray-700">
                                                {formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "-"}
                                            </div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Sex:</div>
                                            <div className="font-bold text-gray-700 capitalize">{formData.sex}</div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Mobile number:</div>
                                            <div className="font-bold text-gray-700">{formData.mobileNumber}</div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Address:</div>
                                            <div className="font-bold text-gray-700 leading-relaxed whitespace-pre-line">
                                                {formData.postalAddress1}
                                                {formData.postalAddress2 && `\n${formData.postalAddress2}`}
                                                {formData.postalAddress3 && `\n${formData.postalAddress3}`}
                                                {`\n${formData.city}, ${formData.postcode}`}
                                                {`\n${formData.residenceCountry}`}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Identification Summary */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Your identification</h3>
                                            <button type="button" onClick={() => setStep(2)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">Change</button>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-6 text-sm">
                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">ID number:</div>
                                            <div className="font-black text-gray-900 text-base">{formData.idNumber}</div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">ID expiry date:</div>
                                            <div className="font-bold text-gray-700">
                                                {formData.idExpiryDate ? new Date(formData.idExpiryDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "-"}
                                            </div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Issuing authority:</div>
                                            <div className="font-bold text-gray-700">{formData.issuingAuthority}</div>

                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Nationality:</div>
                                            <div className="font-bold text-gray-700">{formData.nationality}</div>
                                        </div>
                                    </div>

                                    {/* Payment Section */}
                                    <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 space-y-6">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Payment</h3>
                                        
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500 font-medium">Fee:</span>
                                                <span className="font-black text-gray-900">1,400.00 AED</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500 font-medium">Tax:</span>
                                                <span className="font-black text-gray-900">70.00 AED</span>
                                            </div>
                                            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                                                <span className="text-lg font-black text-gray-900">Total:</span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-black text-[#A11D1D]">1,470.00 AED</span>
                                                    <button type="button" className="block text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline mt-1">I have a promo code</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Acknowledgement */}
                                    <div className="space-y-8">
                                        <div className="space-y-6">
                                            <FormField
                                                control={control}
                                                name="confirmationRecipient"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-6">
                                                        <FormLabel className="text-lg font-black text-gray-900 tracking-tight">Who should receive the order confirmation?</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                                            >
                                                                {[
                                                                    { id: "confirm-myself", value: "myself", label: "Myself" },
                                                                    { id: "confirm-other", value: "other", label: "Another Person" },
                                                                    { id: "confirm-company", value: "company", label: "A Company" },
                                                                ].map((opt) => (
                                                                    <div key={opt.id} className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white shadow-sm">
                                                                        <RadioGroupItem value={opt.value} id={opt.id} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                        <Label htmlFor={opt.id} className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors cursor-pointer">{opt.label}</Label>
                                                                    </div>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={control}
                                            name="vatNumber"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">VAT/NIP number:</FormLabel>
                                                    <FormControl>
                                                        <Input className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Terms and Conditions */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Our terms and conditions</h3>
                                        
                                        <FormField
                                            control={control}
                                            name="termsAgreed"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D] mt-1"
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-3">
                                                        <FormLabel className="text-sm font-bold text-gray-700 leading-relaxed cursor-pointer">
                                                            I agree to the IELTS <button type="button" className="text-[#A11D1D] hover:underline underline-offset-4 font-black">terms and conditions</button> and <button type="button" className="text-[#A11D1D] hover:underline underline-offset-4 font-black">cancellation policy</button>
                                                        </FormLabel>
                                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                                            The British Council will use the information that you are providing in connection with processing your registration. The legal basis for processing your information is agreement with our terms and conditions of registration (contract).
                                                        </p>
                                                        <button type="button" className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline">+ Read full notice</button>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Final Payment Actions */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Book and pay:</h3>
                                        
                                        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                                            <div className="p-8 space-y-6">
                                                <p className="text-sm font-black uppercase tracking-widest text-gray-500">Recommended payment method</p>
                                                <Button
                                                    type="submit"
                                                    className="w-full md:w-auto px-16 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-4 group"
                                                >
                                                    <CreditCard className="w-5 h-5" />
                                                    Pay online
                                                </Button>
                                            </div>
                                            <div className="bg-slate-50 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                                <button type="button" className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline underline-offset-8">Pay offline</button>
                                                <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">Payment options will be shown on next page</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {/* Footer Actions */}
                        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
                            {step > 1 && (
                                <button 
                                    onClick={() => setStep(step - 1)}
                                    className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all px-4 py-2" 
                                    type="button"
                                >
                                    Previous
                                </button>
                            )}
                            <div className="flex gap-4 ml-auto">
                                <Button
                                    type="submit"
                                    className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                                >
                                    {step === 5 ? "Submit Registration" : "Save and continue"}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
                </div>
            </div>
        </div>
    );
}
