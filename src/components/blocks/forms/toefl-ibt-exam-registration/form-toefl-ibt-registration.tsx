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
    Phone,
    Briefcase
} from "lucide-react";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./-type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import Payment from "@/components/blocks/payment";

export default function FormTOEFLIBTRegistration() {
    const [step, setStep] = useState(1);

    const form = useForm<TToeflIbtSchema>({
        resolver: zodResolver(ToeflIbtSchema),
        defaultValues: {
            givenName: "",
            noGivenOrLastName: false,
            middleName: "",
            familyName: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            gender: "",
            country: "",
            streetAddress1: "",
            streetAddress2: "",
            moreAddressLines: false,
            city: "",
            state: "",
            postalCode: "",
            countryCode: "",
            phoneNumber: "",
            agentCode: "",
        },
    });

    const { control, handleSubmit, trigger, watch } = form;
    const formData = watch();

    const onSubmit: SubmitHandler<TToeflIbtSchema> = (data) => {
        if (step < 3) {
            handleNext();
            return;
        }
        console.log("TOEFL iBT Registration Submitted:", data);
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
            case 1: return ["givenName", "familyName", "dobDay", "dobMonth", "dobYear", "gender"];
            case 2: return ["country", "streetAddress1", "city", "phoneNumber"];
            default: return [];
        }
    };

    const stepHeadings = [
        "Personal Information",
        "Address & Contact",
        "Review & Payment"
    ];

    return (
        <div className="section base-py">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto base-px">
                <div className="flex flex-col mb-8">
                    <span className="section-label">Step {step} of 3</span>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
                            {step}
                        </span>
                        <h2 className="text-2xl font-headline font-black text-secondary tracking-tight uppercase">
                            {stepHeadings[step - 1]}
                        </h2>
                    </div>
                    <div
                        className="w-12 h-1 bg-[#A11D1D] mt-4 transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>

                {/* Main Form Container */}
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">

                        {step === 1 && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-[#A11D1D]" />
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Your Name</h2>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        Your name must match the ID you show when taking the test.
                                        <button type="button" className="text-[#A11D1D] font-bold ml-1 hover:underline">View ID Requirements.</button>
                                    </p>

                                    <div className="grid grid-cols-1 gap-8">
                                        <FormField
                                            control={control}
                                            name="givenName"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">First / Given Name:*</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your first name"
                                                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={control}
                                            name="noGivenOrLastName"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <Label className="text-sm font-bold text-slate-600 cursor-pointer">I do not have a first/given or last/family name</Label>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField
                                                control={control}
                                                name="middleName"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Middle Name:</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Optional"
                                                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="familyName"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Last / Family Name:*</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter your last name"
                                                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Date of Birth:*</FormLabel>
                                            <div className="grid grid-cols-3 gap-4">
                                                <FormField control={control} name="dobDay" render={({ field }) => (
                                                    <FormItem><FormControl>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 bg-white"><SelectValue placeholder="Day" /></SelectTrigger>
                                                            <SelectContent className="max-h-80">{Array.from({ length: 31 }, (_, i) => (<SelectItem key={i + 1} value={(i + 1).toString()}>{i + 1}</SelectItem>))}</SelectContent>
                                                        </Select>
                                                    </FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="dobMonth" render={({ field }) => (
                                                    <FormItem><FormControl>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 bg-white"><SelectValue placeholder="Month" /></SelectTrigger>
                                                            <SelectContent className="max-h-80">
                                                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m, i) => (
                                                                    <SelectItem key={m} value={(i + 1).toString()}>{m}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl><FormMessage /></FormItem>
                                                )} />
                                                <FormField control={control} name="dobYear" render={({ field }) => (
                                                    <FormItem><FormControl>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 bg-white"><SelectValue placeholder="Year" /></SelectTrigger>
                                                            <SelectContent className="max-h-80">{Array.from({ length: 100 }, (_, i) => (<SelectItem key={2024 - i} value={(2024 - i).toString()}>{2024 - i}</SelectItem>))}</SelectContent>
                                                        </Select>
                                                    </FormControl><FormMessage /></FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <FormField
                                            control={control}
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Gender:*</FormLabel>
                                                    <FormControl>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 bg-white"><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="male">Male</SelectItem>
                                                                <SelectItem value="female">Female</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-[#A11D1D]" />
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Your Address</h2>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8">
                                        <FormField
                                            control={control}
                                            name="country"
                                            render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country:*</FormLabel>
                                                    <FormControl>
                                                        <CountryDropdown
                                                            placeholder="Select country"
                                                            value={field.value}
                                                            onChange={(c) => field.onChange(c.name)}
                                                            className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="space-y-4">
                                            <FormField control={control} name="streetAddress1" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Street Address:*</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Address Line 1"
                                                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="streetAddress2" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Address Line 2"
                                                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField
                                            control={control}
                                            name="moreAddressLines"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4 rounded-xl border border-slate-100 bg-slate-50/50 w-fit">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <Label className="text-sm font-bold text-slate-600 cursor-pointer">I need more address lines</Label>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField control={control} name="city" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Town / City:*</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={control} name="state" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">State / Province:</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={control} name="postalCode" render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Postal Code / ZIP:</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )} />
                                    </div>

                                    <div className="pt-8 border-t border-slate-100 space-y-8">
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-[#A11D1D]" />
                                            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Contact Details</h2>
                                        </div>
                                        <div className="grid grid-cols-1 gap-8">
                                            <FormField control={control} name="phoneNumber" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Phone Number:*</FormLabel>
                                                    <FormControl>
                                                        <div className="relative h-12 rounded-lg bg-white border border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-[#A11D1D]/5 transition-all overflow-hidden">
                                                            <PhoneInput
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                defaultCountry="AE"
                                                                className="h-full w-full border-none focus-within:ring-0"
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Briefcase className="w-5 h-5 text-[#A11D1D]" />
                                            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Additional Info</h2>
                                        </div>
                                        <FormField control={control} name="agentCode" render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Agent Code (Optional):</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter code if provided"
                                                        className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 md:p-10 space-y-8">
                                    <div className="flex justify-between items-center border-b border-slate-200 pb-6">
                                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Review Your Details</h3>
                                        <button type="button" onClick={() => setStep(1)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline font-bold">Edit</button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Full Name</p>
                                                <p className="font-bold text-gray-900">{formData.givenName} {formData.middleName} {formData.familyName}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Date of Birth</p>
                                                <p className="font-bold text-gray-900">{formData.dobDay}/{formData.dobMonth}/{formData.dobYear}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Contact Number</p>
                                                <p className="font-bold text-gray-900">{formData.phoneNumber}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                                                <p className="font-bold text-gray-900">{formData.city}, {formData.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-[#A11D1D]" />
                                        <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Secure Payment</h2>
                                    </div>
                                    <Payment amount={1260} currency="AED" />
                                </div>
                            </div>
                        )}
                        <div className="pt-10 border-t border-slate-100 flex justify-between items-center mt-12">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all px-4"
                                >
                                    Back
                                </button>
                            )}
                            <Button
                                type={step === 3 ? "submit" : "button"}
                                onClick={step < 3 ? handleNext : undefined}
                                className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-10 h-14 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 ml-auto flex items-center gap-3 group transition-all"
                            >
                                {step === 3 ? "Confirm & Pay" : "Continue to Next"}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
