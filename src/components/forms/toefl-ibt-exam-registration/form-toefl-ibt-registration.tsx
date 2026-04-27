"use client";

import { useMemo } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { CheckCircle2, UploadCloud, Gavel, Info, Globe, Badge as BadgeIcon, User, CreditCard } from "lucide-react";

// --- Schema Definition ---
import { RefinedToeflSchema, type TToeflFormSchema } from "./-type";


export default function FormTOEFLIBTRegistration() {
    const form = useForm<TToeflFormSchema>({
        resolver: zodResolver(RefinedToeflSchema),
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            countryOfBirth: "",
            nationality: "",
            idType: "",
            idNumber: "",
            countryOfResidence: "",
            residentialAddress: "",
            country: "",
            province: "",
            city: "",
            poBox: "",
            postalCode: "",
            countryCode: "+971",
            mobileNo: "",
            email: "",
            confirmEmail: "",
            studyCountry: "",
            testDate1: "",
            testDate2: "",
            nativeLanguage: "",
            studyLevel: "",
            studyField: "",
            hasTakenBefore: "",
            lessThan2Years: "",
            existingETSAccount: "",
            selectedOneToOne: false,
            selectedWorkshop: false,
            selectedExpressDelivery: false,
            termsAccepted: false,
            permissionLogIntoAccount: false,
            infoCorrect: false,
        },
    });

    const { control } = form;

    // Watch fields for dynamic calculations and conditional logic
    const hasTakenBefore = useWatch({ control, name: "hasTakenBefore" });
    const selectedOneToOne = useWatch({ control, name: "selectedOneToOne" });
    const selectedWorkshop = useWatch({ control, name: "selectedWorkshop" });
    const selectedExpressDelivery = useWatch({ control, name: "selectedExpressDelivery" });

    const EXAM_FEE = 1250;
    const SERVICE_FEE = 150;
    const ONE_TO_ONE_COURSE_FEE = 4000;
    const WORKSHOP_FEE = 600;
    const EXPRESS_DELIVERY_FEE = 130;
    const VAT_RATE = 0.05;

    // Derived calculations
    const { total, serviceVAT, coursesVAT, coursePrice, workshopPrice, deliveryPrice } = useMemo(() => {
        const cPrice = selectedOneToOne ? ONE_TO_ONE_COURSE_FEE : 0;
        const wPrice = selectedWorkshop ? WORKSHOP_FEE : 0;
        const dPrice = selectedExpressDelivery ? EXPRESS_DELIVERY_FEE : 0;
        const sVAT = SERVICE_FEE * VAT_RATE;
        const cVAT = (cPrice + wPrice) * VAT_RATE;
        const totalAmount = EXAM_FEE + SERVICE_FEE + sVAT + dPrice + cPrice + wPrice + cVAT;

        return {
            total: totalAmount,
            serviceVAT: sVAT,
            coursesVAT: cVAT,
            coursePrice: cPrice,
            workshopPrice: wPrice,
            deliveryPrice: dPrice
        };
    }, [selectedOneToOne, selectedWorkshop, selectedExpressDelivery]);

    const onSubmit: SubmitHandler<TToeflFormSchema> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#111827]">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        className="w-full h-full object-cover"
                        alt="Academic environment"
                        src="/images/about-us/infrastructure-center.png"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <span className="text-[#A11D1D] text-sm font-black uppercase tracking-[0.3em] mb-4 block">Official Registration</span>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline uppercase">
                        TOEFL iBT Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Complete your official TOEFL iBT registration for academic and professional success worldwide.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(38,24,23,0.08)] p-8 md:p-12 border border-outline-variant/10">
                    <Form {...form}>
                        <form className="space-y-12" onSubmit={form.handleSubmit(onSubmit)}>
                            {/* 1. Personal Details */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <User className="text-[#A11D1D] w-6 h-6" />
                                    Personal Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <FormField
                                        control={control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Name(s) *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Given names" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="middleName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Middle Name (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Optional" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Last Name *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Surname" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                                    <FormField
                                        control={control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Gender *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="--Select Gender--" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Male">Male</SelectItem>
                                                        <SelectItem value="Female">Female</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Date of Birth *</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <FormField
                                                control={control}
                                                name="dobDay"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                                    <SelectValue placeholder="Day" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {Array.from({ length: 31 }, (_, i) => (
                                                                    <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="dobMonth"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                                    <SelectValue placeholder="Month" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                                                                    <SelectItem key={m} value={m}>{m}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="dobYear"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                                    <SelectValue placeholder="Year" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {Array.from({ length: 100 }, (_, i) => (
                                                                    <SelectItem key={2024 - i} value={String(2024 - i)}>{2024 - i}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <FormField
                                        control={control}
                                        name="countryOfBirth"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Birth *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="--Select Country--" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["UAE", "India", "Pakistan", "UK", "USA", "Canada"].map(c => (
                                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <FormField
                                        control={control}
                                        name="nationality"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Nationality *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="--Select Country--" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["UAE", "India", "Pakistan", "UK", "USA", "Canada"].map(c => (
                                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="idType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Select ID Type *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select ID Type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Passport">Passport</SelectItem>
                                                        <SelectItem value="Emirates ID">Emirates ID</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="idNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Passport / Emirates ID Card No *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 2. Residential Address */}
                            <div className="pt-8 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <Globe className="text-[#A11D1D] w-6 h-6" />
                                    Address Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="countryOfResidence"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Permanent Residence *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="-Select Country-" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["UAE", "India", "Pakistan", "UK", "USA", "Canada"].map(c => (
                                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="residentialAddress"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Residential Address *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Building, Street, Area" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <FormField
                                        control={control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="--Select Country--" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["UAE", "India", "Pakistan", "UK", "USA", "Canada"].map(c => (
                                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="province"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Province (optional)</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Province" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Emirate/City *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="City" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <FormField
                                        control={control}
                                        name="poBox"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">P.O. Box (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="P.O. Box" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="postalCode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Postal code (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Postal code" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 3. Contact Info */}
                            <div className="pt-8 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                                        <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Mobile No *</Label>
                                        <div className="flex gap-2">
                                            <FormField
                                                control={control}
                                                name="countryCode"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 w-32">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="+971">+971 (UAE)</SelectItem>
                                                                <SelectItem value="+91">+880 (BD)</SelectItem>
                                                                <SelectItem value="+44">+44 (UK)</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="mobileNo"
                                                render={({ field }) => (
                                                    <FormItem className="flex-1">
                                                        <FormControl>
                                                            <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="(ex: 050)" type="tel" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <span className="text-[10px] text-slate-400">14 characters remaining</span>
                                    </div>
                                    <FormField
                                        control={control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Email" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <FormField
                                        control={control}
                                        name="confirmEmail"
                                        render={({ field }) => (
                                            <FormItem className="col-start-1 md:col-start-3">
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Confirm Email Address *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Confirm Email" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 4. Test Details */}
                            <div className="pt-8 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <Info className="text-[#A11D1D] w-6 h-6" />
                                    Test Details
                                </h2>
                                <FormField
                                    control={control}
                                    name="studyCountry"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">In what country do you plan to study/work? *</FormLabel>
                                            <FormControl>
                                                <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="e.g. USA, Canada" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="testDate1"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First preferred test date *</FormLabel>
                                                <FormControl>
                                                    <Input type="date" className="bg-slate-50 border-none rounded-lg h-14" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="testDate2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Second preferred date</FormLabel>
                                                <FormControl>
                                                    <Input type="date" className="bg-slate-50 border-none rounded-lg h-14" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="nativeLanguage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Native Language *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Native Language" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="studyLevel"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Which level of study? *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                                                        <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                                                        <SelectItem value="Professional">Professional</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name="studyField"
                                    render={({ field }) => (
                                        <FormItem className="md:w-1/2">
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Which field of study *</FormLabel>
                                            <FormControl>
                                                <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Field of study" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* 5. History Questions */}
                            <div className="pt-8 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <FormField
                                    control={control}
                                    name="hasTakenBefore"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-black">Have you taken the TOEFL iBT Test before? *</FormLabel>
                                            <FormControl>
                                                <RadioGroup className="flex gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                    <div className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value="yes" id="toefl-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                                        <Label htmlFor="toefl-yes" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">Yes</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value="no" id="toefl-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                                        <Label htmlFor="toefl-no" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">No</Label>
                                                    </div>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {hasTakenBefore === "yes" && (
                                    <div className="animate-in slide-in-from-left-4 duration-500 space-y-8 pl-6 border-l-2 border-[#A11D1D]/20 mt-4">
                                        <FormField
                                            control={control}
                                            name="lessThan2Years"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col gap-4">
                                                    <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Was it less than 2 years? *</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} defaultValue={field.value}>
                                                            {["Yes", "No", "I do not know"].map(opt => (
                                                                <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                                    <RadioGroupItem value={opt} id={`years-${opt}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                    <Label htmlFor={`years-${opt}`} className="font-medium group-hover:text-[#A11D1D] transition-colors cursor-pointer">{opt}</Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name="existingETSAccount"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col gap-4">
                                                    <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Do you have an existing ETS account? *</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup className="flex flex-wrap gap-6" onValueChange={field.onChange} defaultValue={field.value}>
                                                            {["Yes", "No", "I forgot my ETS account details"].map(opt => (
                                                                <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                                    <RadioGroupItem value={opt} id={`acc-${opt}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                    <Label htmlFor={`acc-${opt}`} className="font-medium group-hover:text-[#A11D1D] transition-colors cursor-pointer">{opt}</Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* 6. Add-on Services */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827]">Add-on services</h2>
                                <div className="space-y-4">
                                    <FormField
                                        control={control}
                                        name="selectedOneToOne"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer">
                                                <FormControl>
                                                    <input type="checkbox" className="w-5 h-5 border-2 border-[#A11D1D] rounded checked:bg-[#A11D1D] cursor-pointer" checked={field.value} onChange={field.onChange} />
                                                </FormControl>
                                                <FormLabel className="text-sm font-medium text-slate-700 cursor-pointer">TEPTH TOEFL-IBT (One-to-One Course) (AED 4,000.00)</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="selectedWorkshop"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer">
                                                <FormControl>
                                                    <input type="checkbox" className="w-5 h-5 border-2 border-[#A11D1D] rounded checked:bg-[#A11D1D] cursor-pointer" checked={field.value} onChange={field.onChange} />
                                                </FormControl>
                                                <FormLabel className="text-sm font-medium text-slate-700 cursor-pointer">TOEFL-IBT Exam Workshop (AED 600.00)</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="selectedExpressDelivery"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-2 space-y-0">
                                                <div className="flex items-center space-x-3 cursor-pointer">
                                                    <FormControl>
                                                        <input type="checkbox" className="w-5 h-5 border-2 border-[#A11D1D] rounded checked:bg-[#A11D1D] cursor-pointer" checked={field.value} onChange={field.onChange} />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-medium text-slate-700 cursor-pointer">Hard copy TOEFL iBT score report Express delivery AED 130</FormLabel>
                                                </div>
                                                <p className="text-[10px] text-slate-400 pl-8">(Do Not Select if you reside outside the GCC Countries)</p>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 7. Document Upload */}
                            <div className="pt-8 border-t border-slate-100 space-y-6">
                                <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-black">Attach a valid copy of Passport / Emirates ID: *</Label>
                                <div className="flex flex-col gap-3">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-[#A11D1D]/30 cursor-pointer transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadCloud className="text-slate-400 mb-2 group-hover:text-[#A11D1D] transition-colors" />
                                            <p className="text-sm font-bold text-[#A11D1D]">Choose File</p>
                                            <p className="text-[10px] text-slate-400">No file chosen</p>
                                        </div>
                                        <input className="hidden" type="file" />
                                    </label>
                                    <p className="text-[10px] text-slate-500 font-medium">(max file size 128 MB)</p>
                                    <p className="text-[10px] text-red-700 font-bold">(pdf, docx, doc, png, jpeg)</p>
                                </div>
                            </div>

                            {/* 8. Terms & Conditions */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-lg font-bold text-[#A11D1D] flex items-center gap-2">
                                    <Gavel className="w-5 h-5" />
                                    Agree Terms & Conditions
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { key: "termsAccepted", label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                        { key: "permissionLogIntoAccount", label: "I hereby give permission to the center to log into my account to complete my registration." },
                                        { key: "infoCorrect", label: "I hereby acknowledge that all information written above is correct and true. I understand that any incorrect information I have provided above is my own responsibility and not of the test center." },
                                    ].map((item) => (
                                        <FormField
                                            key={item.key}
                                            control={control}
                                            name={item.key as any}
                                            render={({ field }) => (
                                                <FormItem className="flex items-start space-x-3 space-y-0 cursor-pointer group">
                                                    <FormControl>
                                                        <div className="relative flex items-center justify-center mt-1">
                                                            <input
                                                                type="checkbox"
                                                                className="peer appearance-none w-5 h-5 border-2 border-[#A11D1D] rounded bg-white checked:bg-[#A11D1D] transition-all cursor-pointer"
                                                                checked={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                            <span className="absolute text-white text-[10px] pointer-events-none opacity-0 peer-checked:opacity-100 font-black">✓</span>
                                                        </div>
                                                    </FormControl>
                                                    <FormLabel className="text-sm text-slate-600 leading-relaxed group-hover:text-[#111827] transition-colors cursor-pointer select-none">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Fee Summary */}
                            <div className="pt-8 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-8 space-y-8 border border-slate-200">
                                    <h3 className="text-lg font-extrabold uppercase tracking-widest text-[#A11D1D] flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" />
                                        Fee Summary
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-[#111827]">TOEFL iBT Exam Fee</span>
                                                <span className="text-[10px] text-slate-500 italic">(No VAT added on exam fee)</span>
                                            </div>
                                            <span className="font-bold text-[#111827] text-lg">AED {EXAM_FEE.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-600">Registration Service Fee</span>
                                                <span className="text-[10px] text-slate-400">(Inc. 5% VAT)</span>
                                            </div>
                                            <span className="font-bold text-[#111827] text-lg">AED {(SERVICE_FEE + serviceVAT).toFixed(2)}</span>
                                        </div>
                                        {(selectedOneToOne || selectedWorkshop) && (
                                            <div className="flex justify-between items-center border-t border-slate-200 pt-4">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-600">Selected Courses / Workshops</span>
                                                    <span className="text-[10px] text-slate-400">(Inc. 5% VAT)</span>
                                                </div>
                                                <span className="font-bold text-[#111827] text-lg">AED {(coursePrice + workshopPrice + coursesVAT).toFixed(2)}</span>
                                            </div>
                                        )}
                                        {selectedExpressDelivery && (
                                            <div className="flex justify-between items-center border-t border-slate-200 pt-4">
                                                <div className="flex flex-col"><span className="font-medium text-slate-600">Hard copy Express delivery</span></div>
                                                <span className="font-bold text-[#111827] text-lg">AED {EXPRESS_DELIVERY_FEE.toFixed(2)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div className="flex flex-col gap-1 items-center md:items-start">
                                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Total Amount Due</span>
                                            <span className="text-[10px] text-slate-400 italic">All fees are in UAE Dirhams</span>
                                        </div>
                                        <div className="text-4xl font-black text-[#A11D1D] tracking-tighter">
                                            AED {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="pt-12 flex flex-col md:flex-row justify-end items-center gap-6">
                                <Button
                                    type="submit"
                                    className="bg-[#A11D1D] text-white px-12 py-7 rounded-xl font-extrabold text-lg active:scale-95 transform transition-all hover:bg-[#8e1214] hover:shadow-2xl hover:shadow-[#A11D1D]/20 w-full md:w-auto"
                                >
                                    Proceed to Payment
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>
        </div>
    );
}
