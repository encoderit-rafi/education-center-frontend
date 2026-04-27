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
import {
    CheckCircle2,
    UploadCloud,
    Gavel,
    Info,
    Globe,
    User,
    CreditCard,
    BookOpen,
    School,
    Languages,
    ArrowRight
} from "lucide-react";
import { RefinedIeltsSchema, type TIeltsFormSchema } from "./-type";



export default function FormIELTSRegistration() {
    const form = useForm<TIeltsFormSchema>({
        resolver: zodResolver(RefinedIeltsSchema),
        defaultValues: {
            testModule: "",
            givenNames: "",
            surnames: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            gender: "",
            testTiming: "",
            takenBefore: "",
            lessThan2Years: "",
            existingAccount: "",
            educationLevel: "",
            occupationLevel: "",
            occupationSector: "",
            reasonForTest: "",
            destinationCountry: "",
            firstLanguage: "",
            yearsStudyingEnglish: "",
            countryOfBirth: "",
            countryOfCitizenship: "",
            selectedCourse: false,
            selectedWorkshop: false,
            workshopHours: "",
            termsAccepted: false,
            permissionLogIntoAccount: false,
            infoCorrect: false,
        },
    });

    const { control, handleSubmit } = form;

    // Watch fields for dynamic calculations and conditional logic
    const takenBefore = useWatch({ control, name: "takenBefore" });
    const selectedCourse = useWatch({ control, name: "selectedCourse" });
    const selectedWorkshop = useWatch({ control, name: "selectedWorkshop" });
    const workshopHours = useWatch({ control, name: "workshopHours" });

    const EXAM_FEE = 1400;
    const SERVICE_FEE = 100;
    const COURSE_BASE_PRICE = 4000;
    const DISCOUNT_RATE = 0.30;
    const VAT_RATE = 0.05;

    const workshopPriceMap: Record<string, number> = {
        "5 Hours": 250,
        "10 Hours": 500,
    };

    // Derived calculations
    const { total, vat, coursePrice, discount, workshopPrice, taxableAmount } = useMemo(() => {
        const cPrice = selectedCourse ? COURSE_BASE_PRICE : 0;
        const disc = selectedCourse ? (cPrice * DISCOUNT_RATE) : 0;
        const wPrice = selectedWorkshop ? (workshopPriceMap[workshopHours] || 0) : 0;

        const taxable = SERVICE_FEE + (cPrice - disc) + wPrice;
        const vatAmount = taxable * VAT_RATE;
        const totalAmount = EXAM_FEE + taxable + vatAmount;

        return {
            total: totalAmount,
            vat: vatAmount,
            coursePrice: cPrice,
            discount: disc,
            workshopPrice: wPrice,
            taxableAmount: taxable
        };
    }, [selectedCourse, selectedWorkshop, workshopHours]);

    const onSubmit: SubmitHandler<TIeltsFormSchema> = (data) => {
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
                        IELTS Exam Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Start your journey to global success with a registration process optimized for international candidates.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(38,24,23,0.08)] p-8 md:p-12 border border-outline-variant/10">
                    <Form {...form}>
                        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>

                            {/* Registration Stepper Preview */}
                            <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
                                {[
                                    { step: 1, label: "Personal", active: true },
                                    { step: 2, label: "Identity", active: false },
                                    { step: 3, label: "Document", active: false },
                                    { step: 4, label: "Review", active: false },
                                ].map((item, idx, arr) => (
                                    <div key={item.step} className="flex items-center flex-1 last:flex-none">
                                        <div className="flex flex-col items-center min-w-[100px]">
                                            <div className={cn(
                                                "w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300",
                                                item.active ? "bg-[#A11D1D] text-white scale-110 shadow-lg shadow-[#A11D1D]/20" : "bg-slate-100 text-slate-400"
                                            )}>
                                                {item.step}
                                            </div>
                                            <span className={cn(
                                                "text-[10px] uppercase tracking-widest font-bold transition-colors duration-300",
                                                item.active ? "text-[#A11D1D]" : "text-slate-400"
                                            )}>
                                                {item.label}
                                            </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <div className="flex-1 h-[2px] bg-slate-100 mx-4"></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* 1. Test Selection */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <BookOpen className="text-[#A11D1D] w-6 h-6" />
                                    Test Selection
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="testModule"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">IELTS Test Module *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Module" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="academic">Academic</SelectItem>
                                                        <SelectItem value="general">General Training</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="testTiming"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Test Timing *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Preferred Time" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                                        <SelectItem value="12:45 PM">12:45 PM</SelectItem>
                                                        <SelectItem value="03:30 PM">03:30 PM</SelectItem>
                                                        <SelectItem value="06:15 PM">06:15 PM</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 2. Personal Details */}
                            <div className="pt-8 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <User className="text-[#A11D1D] w-6 h-6" />
                                    Personal Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="givenNames"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Given name(s) *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="As per passport" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="surnames"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Surname(s) *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="As per passport" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
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
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 px-2">
                                                                    <SelectValue placeholder="Day" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {Array.from({ length: 31 }, (_, i) => (
                                                                    <SelectItem key={i + 1} value={String(i + 1)}>{i + 1 < 10 ? `0${i + 1}` : i + 1}</SelectItem>
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
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 px-2">
                                                                    <SelectValue placeholder="Month" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
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
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 px-2">
                                                                    <SelectValue placeholder="Year" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {Array.from({ length: 80 }, (_, i) => (
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
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem className="col-span-1 md:col-span-2">
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Gender *</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        className="flex gap-8 h-14 items-center"
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        {["Male", "Female", "Other"].map((g) => (
                                                            <div key={g} className="flex items-center space-x-2 group cursor-pointer">
                                                                <RadioGroupItem value={g} id={`gender-${g}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <Label htmlFor={`gender-${g}`} className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">{g}</Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* History Questions */}
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-8 mt-8">
                                    <FormField
                                        control={control}
                                        name="takenBefore"
                                        render={({ field }) => (
                                            <FormItem className="space-y-4">
                                                <FormLabel className="text-sm font-bold text-[#111827]">Have you taken the CD-IELTS Test before? *</FormLabel>
                                                <FormControl>
                                                    <RadioGroup className="flex gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                                            <RadioGroupItem value="yes" id="taken-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor="taken-yes" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">Yes</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                                            <RadioGroupItem value="no" id="taken-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor="taken-no" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">No</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {takenBefore === "yes" && (
                                        <div className="space-y-8 animate-in slide-in-from-left-4 duration-500 pl-6 border-l-2 border-[#A11D1D]/20">
                                            <FormField
                                                control={control}
                                                name="lessThan2Years"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-widest">Was it less than 2 years? *</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup className="flex flex-wrap gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                                {["Yes", "No", "I do not know"].map(opt => (
                                                                    <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                                        <RadioGroupItem value={opt} id={`years-${opt}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                        <Label htmlFor={`years-${opt}`} className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">{opt}</Label>
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
                                                name="existingAccount"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-widest">Do you have an existing IELTS account? *</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup className="flex flex-wrap gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                                {["Yes", "No", "I forgot account details"].map(opt => (
                                                                    <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                                        <RadioGroupItem value={opt} id={`acc-${opt}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                        <Label htmlFor={`acc-${opt}`} className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">{opt}</Label>
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
                            </div>

                            {/* 3. Background Information */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <School className="text-[#A11D1D] w-6 h-6" />
                                    Background Information
                                </h2>
                                <FormField
                                    control={control}
                                    name="educationLevel"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Level of education completed *</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    {[
                                                        "Secondary (up to 16 years)",
                                                        "Secondary (16-19 years)",
                                                        "Degree (or equivalent)",
                                                        "Post-graduate"
                                                    ].map(edu => (
                                                        <label key={edu} className={cn(
                                                            "flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border group",
                                                            field.value === edu ? "bg-[#A11D1D]/5 border-[#A11D1D]/20" : "bg-slate-50 border-transparent hover:border-[#A11D1D]/20"
                                                        )}>
                                                            <RadioGroupItem value={edu} id={`edu-${edu}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor={`edu-${edu}`} className="text-sm font-bold text-slate-700 group-hover:text-[#A11D1D] transition-colors cursor-pointer">
                                                                {edu}
                                                            </Label>
                                                        </label>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="occupationLevel"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Occupation level *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Student", "Self-employed", "Employer/Partner", "Employee (Senior level)", "Employee (Middle/Junior level)", "Homeworker", "Retired", "Other"].map(o => (
                                                            <SelectItem key={o} value={o}>{o}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="occupationSector"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Occupation sector *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Sector" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Administrative Services", "Banking and Finance", "Construction Industries", "Education", "Arts and Entertainment"].map(s => (
                                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="reasonForTest"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Why are you taking the test? *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Reason" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Higher education extended course", "Immigration", "Employment", "Personal reasons"].map(r => (
                                                            <SelectItem key={r} value={r}>{r}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="destinationCountry"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Destination Country *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Country" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Australia", "Canada", "United Kingdom", "United States of America"].map(c => (
                                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 4. About You */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <Languages className="text-[#A11D1D] w-6 h-6" />
                                    About you
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="firstLanguage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First language *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Language" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Arabic", "English", "French", "Spanish"].map(l => (
                                                            <SelectItem key={l} value={l}>{l}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="yearsStudyingEnglish"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Years studying English *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Select Years" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {["Less than 1", "2", "3", "4+"].map(y => (
                                                            <SelectItem key={y} value={y}>{y}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <p className="text-[10px] text-slate-400 italic mt-1 font-medium px-1">Your answer has no impact on your test score</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="countryOfBirth"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Birth *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter country" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="countryOfCitizenship"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Citizenship *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter citizenship" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 5. Add-on services */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <div className="bg-slate-50 rounded-2xl p-8 space-y-8 border border-slate-100 relative group overflow-hidden">
                                    <h3 className="text-lg font-extrabold uppercase tracking-widest text-[#A11D1D] flex items-center gap-2 relative z-10">
                                        <CreditCard className="w-5 h-5" />
                                        Add-on services
                                    </h3>
                                    <div className="space-y-4 relative z-10">
                                        <FormField
                                            control={control}
                                            name="selectedCourse"
                                            render={({ field }) => (
                                                <FormItem className={cn(
                                                    "flex items-center space-x-3 space-y-0 p-5 rounded-xl border transition-all cursor-pointer group/item",
                                                    field.value ? "bg-[#A11D1D]/5 border-[#A11D1D]/30" : "bg-white border-slate-200 hover:border-[#A11D1D]/20"
                                                )}>
                                                    <FormControl>
                                                        <div className="relative flex items-center justify-center">
                                                            <input
                                                                className="peer appearance-none w-6 h-6 rounded-md border-2 border-slate-300 checked:bg-[#A11D1D] checked:border-[#A11D1D] transition-all cursor-pointer"
                                                                type="checkbox"
                                                                checked={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                            <span className="absolute text-white text-xs pointer-events-none opacity-0 peer-checked:opacity-100 font-black">✓</span>
                                                        </div>
                                                    </FormControl>
                                                    <div className="flex flex-col flex-1 cursor-pointer">
                                                        <FormLabel className="text-sm font-extrabold text-slate-700 cursor-pointer">TEPTH IELTS (One-to-One Course)</FormLabel>
                                                        <span className="text-xs font-bold text-[#A11D1D]">AED {COURSE_BASE_PRICE.toLocaleString()}</span>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />

                                        <div className={cn(
                                            "grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl border transition-all",
                                            selectedWorkshop ? "bg-[#A11D1D]/5 border-[#A11D1D]/30" : "bg-white border-slate-200 hover:border-[#A11D1D]/20"
                                        )}>
                                            <FormField
                                                control={control}
                                                name="selectedWorkshop"
                                                render={({ field }) => (
                                                    <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer md:col-span-1">
                                                        <FormControl>
                                                            <div className="relative flex items-center justify-center">
                                                                <input
                                                                    className="peer appearance-none w-6 h-6 rounded-md border-2 border-slate-300 checked:bg-[#A11D1D] checked:border-[#A11D1D] transition-all cursor-pointer"
                                                                    type="checkbox"
                                                                    checked={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                                <span className="absolute text-white text-xs pointer-events-none opacity-0 peer-checked:opacity-100 font-black">✓</span>
                                                            </div>
                                                        </FormControl>
                                                        <FormLabel className="text-sm font-extrabold text-slate-700 cursor-pointer">IELTS Exam Workshop</FormLabel>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="workshopHours"
                                                render={({ field }) => (
                                                    <FormItem className="md:col-span-2">
                                                        <Select
                                                            disabled={!selectedWorkshop}
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger className="bg-white border-slate-200 h-10">
                                                                    <SelectValue placeholder="Select number of hours" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="5 Hours">5 Hours (AED 250)</SelectItem>
                                                                <SelectItem value="10 Hours">10 Hours (AED 500)</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <p className="text-[11px] text-[#A11D1D] font-black italic tracking-wide mt-2">
                                            * A 30% discount is granted on the course fee (not workshop) when selecting one of our courses.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 6. Fee Summary */}
                            <div className="pt-8 border-t border-slate-100">
                                <div className="bg-[#111827] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group border-l-[6px] border-[#A11D1D]">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#A11D1D]/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
                                        <div className="space-y-6 flex-1 w-full">
                                            <h4 className="text-lg font-black uppercase tracking-widest text-[#A11D1D]">Booking Summary</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">IELTS {form.getValues("testModule") || ""} Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {EXAM_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">Registration Service Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {SERVICE_FEE.toLocaleString()}</span>
                                                </div>

                                                {selectedCourse && (
                                                    <div className="flex justify-between items-center text-[#A11D1D] text-sm font-black">
                                                        <span className="uppercase tracking-tighter">Course Add-on (30% Discount)</span>
                                                        <span className="tracking-widest">AED {(coursePrice - discount).toLocaleString()}</span>
                                                    </div>
                                                )}

                                                {selectedWorkshop && workshopPrice > 0 && (
                                                    <div className="flex justify-between items-center text-slate-300 text-sm">
                                                        <span className="font-medium uppercase tracking-tighter">Workshop ({workshopHours})</span>
                                                        <span className="font-bold text-white tracking-widest">AED {workshopPrice.toLocaleString()}</span>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center text-slate-300 text-sm border-t border-slate-800 pt-3">
                                                    <span className="font-medium uppercase tracking-tighter">VAT 5%</span>
                                                    <span className="font-bold text-white tracking-widest">AED {vat.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right w-full md:w-auto flex flex-col justify-end">
                                            <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black mb-2">Total Fees Due</div>
                                            <div className="text-5xl font-black text-white tracking-tighter">
                                                AED {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <p className="text-[10px] text-slate-600 mt-4 uppercase font-black tracking-widest leading-none">
                                                * VAT is applicable to registration, courses and workshops
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 7. Terms & Conditions */}
                            <div className="pt-8 border-t border-slate-100 space-y-6">
                                <h2 className="text-lg font-bold text-[#A11D1D] flex items-center gap-2">
                                    <Gavel className="w-5 h-5" />
                                    Agree Terms & Conditions
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { key: "termsAccepted", label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                        { key: "permissionLogIntoAccount", label: "I hereby give permission to the center to log into my account to complete my registration." },
                                        { key: "infoCorrect", label: "I hereby acknowledge that all information written above is correct and true." },
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

                            {/* Form Actions */}
                            <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                                <button className="text-[#A11D1D] font-bold hover:underline underline-offset-8 transition-all px-4 py-2" type="button">Save for Later</button>
                                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                                    <Button type="button" variant="outline" className="h-16 px-8 text-slate-600 font-extrabold rounded-xl">Previous</Button>
                                    <Button
                                        type="submit"
                                        className="bg-[#A11D1D] text-white px-12 h-16 rounded-xl font-black text-lg active:scale-95 transform transition-all hover:bg-[#8e1214] hover:shadow-2xl hover:shadow-[#A11D1D]/20 flex items-center gap-3"
                                    >
                                        Proceed to Identity
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>
        </div>
    );
}
