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
import { CountryDropdown } from "@/components/ui/country-dropdown";
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
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Calendar as CalendarIcon,
    AlertCircle,
    Check
} from "lucide-react";
import Image from "next/image";



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
            specialRequirements: "no",
            specialRequirementsDetails: "",
            firstPreferredDate: "",
            secondPreferredDate: "",
            selectedOneToOneCourse: false,
            selectedGroupCourse: false,
            selectedSemiPrivateCourse: false,
            selectedPrivateCourse: false,
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
    const specialRequirements = useWatch({ control, name: "specialRequirements" });
    const selectedOneToOneCourse = useWatch({ control, name: "selectedOneToOneCourse" });
    const selectedGroupCourse = useWatch({ control, name: "selectedGroupCourse" });
    const selectedSemiPrivateCourse = useWatch({ control, name: "selectedSemiPrivateCourse" });
    const selectedPrivateCourse = useWatch({ control, name: "selectedPrivateCourse" });
    const selectedWorkshop = useWatch({ control, name: "selectedWorkshop" });
    const workshopHours = useWatch({ control, name: "workshopHours" });

    const EXAM_FEE = 1400;
    const SERVICE_FEE = 100;
    // Course Prices
    const PRICES = {
        ONE_TO_ONE: 4000,
        GROUP: 2500,
        SEMI_PRIVATE: 3200,
        PRIVATE: 3800,
    };

    const DISCOUNT_RATE = 0.30;
    const VAT_RATE = 0.05;

    const workshopPriceMap: Record<string, number> = {
        "5 Hours": 250,
        "10 Hours": 500,
    };

    // Derived calculations
    const { total, vat, coursePrice, discount, workshopPrice, taxableAmount } = useMemo(() => {
        let totalCoursesPrice = 0;
        if (selectedOneToOneCourse) totalCoursesPrice += PRICES.ONE_TO_ONE;
        if (selectedGroupCourse) totalCoursesPrice += PRICES.GROUP;
        if (selectedSemiPrivateCourse) totalCoursesPrice += PRICES.SEMI_PRIVATE;
        if (selectedPrivateCourse) totalCoursesPrice += PRICES.PRIVATE;

        const wPrice = selectedWorkshop ? (workshopPriceMap[workshopHours] || 0) : 0;
        const disc = totalCoursesPrice * DISCOUNT_RATE;

        // Taxable amount is service fee + discounted course price + workshop price
        const taxable = SERVICE_FEE + (totalCoursesPrice - disc) + wPrice;
        const vatAmount = taxable * VAT_RATE;
        const totalAmount = EXAM_FEE + taxable + vatAmount;

        return {
            total: totalAmount,
            vat: vatAmount,
            coursePrice: totalCoursesPrice,
            discount: disc,
            workshopPrice: wPrice,
            taxableAmount: taxable
        };
    }, [
        selectedOneToOneCourse,
        selectedGroupCourse,
        selectedSemiPrivateCourse,
        selectedPrivateCourse,
        selectedWorkshop,
        workshopHours
    ]);

    const onSubmit: SubmitHandler<TIeltsFormSchema> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#111827]">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        width={1920}
                        height={1080}
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
                                                        <SelectTrigger >
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
                                                        <SelectTrigger >
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
                                                    <Input placeholder="As per passport" {...field} />
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
                                                    <Input placeholder="As per passport" {...field} />
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
                                                                <SelectTrigger >
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
                                                                <SelectTrigger >
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
                                                                <SelectTrigger >
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

                                {/* Special Requirements */}
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-8 mt-8">
                                    <FormField
                                        control={control}
                                        name="specialRequirements"
                                        render={({ field }) => (
                                            <FormItem className="space-y-4">
                                                <div className="flex items-start gap-2">
                                                    <AlertCircle className="w-5 h-5 text-[#A11D1D] mt-0.5" />
                                                    <FormLabel className="text-sm font-bold text-[#111827]">
                                                        Do You Have Any Special Requirements Due to Ill Health/Medical Conditions? *
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <RadioGroup className="flex gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                                            <RadioGroupItem value="yes" id="special-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor="special-yes" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">Yes</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                                            <RadioGroupItem value="no" id="special-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor="special-no" className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm">No</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {specialRequirements === "yes" && (
                                        <FormField
                                            control={control}
                                            name="specialRequirementsDetails"
                                            render={({ field }) => (
                                                <FormItem className="animate-in slide-in-from-left-4 duration-500 pl-6 border-l-2 border-[#A11D1D]/20">
                                                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-widest">If please mention *</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Please describe your requirements"
                                                            className="bg-white border-slate-200 h-14 rounded-xl"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
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
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">What level of education have you completed? *</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    className="flex flex-col gap-4"
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    {[
                                                        "Secondary (up to 16 years)",
                                                        "Secondary (16-19 years)",
                                                        "Degree (or equivalent)",
                                                        "Post-graduate"
                                                    ].map(edu => (
                                                        <div key={edu} className="flex items-center space-x-3 group cursor-pointer">
                                                            <RadioGroupItem value={edu} id={`edu-${edu}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor={`edu-${edu}`} className="font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-sm text-slate-600">
                                                                {edu}
                                                            </Label>
                                                        </div>
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
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">What is your occupation level? *</FormLabel>
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "Self-employed", value: "Self-employed" },
                                                            { label: "Employer/Partner", value: "Employer/Partner" },
                                                            { label: "Employee (Senior level)", value: "Employee (Senior level)" },
                                                            { label: "Employee (Middle/Junior level)", value: "Employee (Middle/Junior level)" },
                                                            { label: "Homeworker", value: "Homeworker" },
                                                            { label: "Retired", value: "Retired" },
                                                            { label: "Student", value: "Student" },
                                                            { label: "Other", value: "Other" },
                                                        ]}
                                                        placeholder="Select Level"
                                                        searchPlaceholder="Search level..."
                                                        value={field.value}
                                                        onChange={field.onChange}

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
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">What is your occupation sector? *</FormLabel>
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "Administrative Services", value: "Administrative Services" },
                                                            { label: "Agriculture, Fishing, Forestry, Mining", value: "Agriculture, Fishing, Forestry, Mining" },
                                                            { label: "Arts and Entertainment", value: "Arts and Entertainment" },
                                                            { label: "Banking and Finance", value: "Banking and Finance" },
                                                            { label: "Catering and Leisure", value: "Catering and Leisure" },
                                                            { label: "Construction Industries", value: "Construction Industries" },
                                                            { label: "Craft and Design", value: "Craft and Design" },
                                                            { label: "Education", value: "Education" },
                                                            { label: "Health and Social Services", value: "Health and Social Services" },
                                                            { label: "Hospitality", value: "Hospitality" },
                                                            { label: "Manufacturing and Blue Collar", value: "Manufacturing and Blue Collar" },
                                                            { label: "Other", value: "Other" },
                                                        ]}
                                                        placeholder="Select Sector"
                                                        searchPlaceholder="Search sector..."
                                                        value={field.value}
                                                        onChange={field.onChange}

                                                    />
                                                </FormControl>
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
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "Higher education extended course (3 months or more)", value: "Higher education extended course" },
                                                            { label: "Higher education short course (3 months or less)", value: "Higher education short course" },
                                                            { label: "Other educational purposes", value: "Other educational purposes" },
                                                            { label: "Registration as a doctor", value: "Registration as a doctor" },
                                                            { label: "Immigration", value: "Immigration" },
                                                            { label: "Employment", value: "Employment" },
                                                            { label: "Professional registration (not medical)", value: "Professional registration" },
                                                            { label: "Personal reasons", value: "Personal reasons" },
                                                        ]}
                                                        placeholder="Select Reason"
                                                        searchPlaceholder="Search reason..."
                                                        value={field.value}
                                                        onChange={field.onChange}

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
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Which country / territory do you want to study / work / live in? *</FormLabel>
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "Australia", value: "Australia" },
                                                            { label: "Canada", value: "Canada" },
                                                            { label: "New Zealand", value: "New Zealand" },
                                                            { label: "Republic of Ireland", value: "Republic of Ireland" },
                                                            { label: "United Kingdom", value: "United Kingdom" },
                                                            { label: "United States of America", value: "United States of America" },
                                                            { label: "Afghanistan", value: "Afghanistan" },
                                                            { label: "Aland Islands", value: "Aland Islands" },
                                                            { label: "Albania", value: "Albania" },
                                                            { label: "Algeria", value: "Algeria" },
                                                        ]}
                                                        placeholder="Select Country"
                                                        searchPlaceholder="Search country..."
                                                        value={field.value}
                                                        onChange={field.onChange}

                                                    />
                                                </FormControl>
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
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "Arabic", value: "Arabic" },
                                                            { label: "Bengali", value: "Bengali" },
                                                            { label: "Chinese", value: "Chinese" },
                                                            { label: "English", value: "English" },
                                                            { label: "French", value: "French" },
                                                            { label: "Spanish", value: "Spanish" },
                                                        ]}
                                                        placeholder="Select Language"
                                                        searchPlaceholder="Search language..."
                                                        value={field.value}
                                                        onChange={field.onChange}

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
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Years studying English *</FormLabel>
                                                <FormControl>
                                                    <SearchableDropdown
                                                        options={[
                                                            { label: "1 (less than)", value: "1" },
                                                            { label: "2", value: "2" },
                                                            { label: "3", value: "3" },
                                                            { label: "4", value: "4" },
                                                            { label: "5", value: "5" },
                                                            { label: "6", value: "6" },
                                                            { label: "7", value: "7" },
                                                            { label: "8", value: "8" },
                                                            { label: "9 or more years", value: "9+" },
                                                        ]}
                                                        placeholder="Select Years"
                                                        searchPlaceholder="Search years..."
                                                        value={field.value}
                                                        onChange={field.onChange}

                                                    />
                                                </FormControl>
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
                                                    <CountryDropdown
                                                        value={field.value}
                                                        onChange={(country) => field.onChange(country.name)}

                                                    />
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
                                                    <CountryDropdown
                                                        value={field.value}
                                                        onChange={(country) => field.onChange(country.name)}

                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Preferred Dates */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <CalendarIcon className="text-[#A11D1D] w-6 h-6" />
                                    Preferred Dates
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                    <DateTimePicker
                                        control={control}
                                        name="firstPreferredDate"
                                        label="First preferred date *"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="bg-white border-slate-200 h-14 rounded-xl"
                                    />
                                    <DateTimePicker
                                        control={control}
                                        name="secondPreferredDate"
                                        label="Second preferred date *"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="bg-white border-slate-200 h-14 rounded-xl"
                                    />
                                </div>
                                <p className="text-xs text-slate-500 flex items-center gap-2 px-2">
                                    <Info className="w-4 h-4 text-[#A11D1D]" />
                                    Note: All Sundays except holidays and deactivated Sundays. It should be easy for us to update the date or add additional days and past Sundays to be inactive.
                                </p>
                            </div>

                            {/* 5. Add-on services */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3 mb-8">
                                        <BookOpen className="text-[#A11D1D] w-6 h-6" />
                                        Add-on services
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {([
                                            { name: "selectedOneToOneCourse", label: "TEPTH IELTS (One-to-One Course)", price: PRICES.ONE_TO_ONE },
                                            { name: "selectedGroupCourse", label: "TEPTH IELTS (Group Course)", price: PRICES.GROUP },
                                            { name: "selectedSemiPrivateCourse", label: "TEPTH IELTS (Semi-Private Course)", price: PRICES.SEMI_PRIVATE },
                                            { name: "selectedPrivateCourse", label: "TEPTH IELTS (Private One-to-One Course)", price: PRICES.PRIVATE },
                                        ] as const).map((course) => (
                                            <FormField
                                                key={course.name}
                                                control={control}
                                                name={course.name}
                                                render={({ field }) => (
                                                    <FormItem className={cn(
                                                        "flex flex-row items-center space-x-3 space-y-0 p-5 rounded-xl border transition-all cursor-pointer bg-white",
                                                        field.value ? "border-[#A11D1D] ring-1 ring-[#A11D1D]/10" : "border-slate-200 hover:border-[#A11D1D]/20"
                                                    )}>
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                className="data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                            />
                                                        </FormControl>
                                                        <div className="flex flex-col w-full">
                                                            <FormLabel className="font-bold text-slate-700 cursor-pointer text-sm">{course.label}</FormLabel>
                                                            <span className="text-xs font-bold text-[#A11D1D] mt-1">AED {course.price.toLocaleString()}.00</span>
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}

                                        <div className="md:col-span-2 space-y-4">
                                            <FormField
                                                control={control}
                                                name="selectedWorkshop"
                                                render={({ field }) => (
                                                    <FormItem className={cn(
                                                        "flex flex-row items-center space-x-3 space-y-0 p-5 rounded-xl border transition-all cursor-pointer bg-white",
                                                        field.value ? "border-[#A11D1D] ring-1 ring-[#A11D1D]/10" : "border-slate-200 hover:border-[#A11D1D]/20"
                                                    )}>
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                className="data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-bold text-slate-700 cursor-pointer">IELTS Exam Workshop</FormLabel>
                                                    </FormItem>
                                                )}
                                            />

                                            {selectedWorkshop && (
                                                <FormField
                                                    control={control}
                                                    name="workshopHours"
                                                    render={({ field }) => (
                                                        <FormItem className="animate-in slide-in-from-top-2 duration-300">
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="bg-white border-slate-200 rounded-xl h-14 w-full shadow-sm px-6">
                                                                        <SelectValue placeholder="Select number of hours" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {Object.keys(workshopPriceMap).map(h => (
                                                                        <SelectItem key={h} value={h}>
                                                                            <div className="flex justify-between w-full min-w-[200px]">
                                                                                <span>{h}</span>
                                                                                <span className="font-bold text-[#A11D1D]">AED {workshopPriceMap[h]}</span>
                                                                            </div>
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-[#A11D1D] font-bold italic tracking-wide mt-6 flex items-center gap-2">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        * A 30% discount is granted on the course fee (not workshop) when selecting one of our courses.
                                    </p>
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
                                                    <span className="font-medium uppercase tracking-tighter">IELTS {form.getValues("testModule") || "Exam"} Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {EXAM_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">Registration Service Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {SERVICE_FEE.toLocaleString()}</span>
                                                </div>

                                                {coursePrice > 0 && (
                                                    <div className="space-y-2 pt-2 border-t border-white/10">
                                                        <div className="flex justify-between items-center text-slate-300 text-sm">
                                                            <span className="font-medium uppercase tracking-tighter">Selected Courses</span>
                                                            <span className="font-bold text-white tracking-widest">AED {coursePrice.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center text-emerald-400 text-xs font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                                                            <span className="uppercase tracking-tighter">30% Course Discount</span>
                                                            <span className="tracking-widest">- AED {discount.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {workshopPrice > 0 && (
                                                    <div className="flex justify-between items-center text-slate-300 text-sm pt-2 border-t border-white/10">
                                                        <span className="font-medium uppercase tracking-tighter">IELTS Workshop ({workshopHours})</span>
                                                        <span className="font-bold text-white tracking-widest">AED {workshopPrice.toLocaleString()}</span>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center text-slate-300 text-sm pt-4 border-t border-white/10">
                                                    <span className="font-medium uppercase tracking-tighter">VAT (5% Applicable to all)</span>
                                                    <span className="font-bold text-white tracking-widest">AED {vat.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A11D1D] mb-1">Total Amount</span>
                                            <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                                <span className="text-xl align-top mr-2 text-slate-500">AED</span>
                                                {Math.round(total).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 7. Terms & Conditions */}
                            <div className="pt-12 border-t border-slate-100 space-y-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] px-4">* Agree Terms & Conditions</h3>
                                <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                                    {[
                                        { name: "termsAccepted", label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                        { name: "permissionLogIntoAccount", label: "I hereby give permission to the center to log into my account to complete my registration." },
                                        { name: "infoCorrect", label: "I hereby acknowledge that all information written above is correct and true. I understand that any incorrect information I have provided above is my own responsibility and not of the test center." }
                                    ].map((item) => (
                                        <FormField
                                            key={item.name}
                                            control={control}
                                            name={item.name as any}
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 group">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="mt-1 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-sm text-slate-600 leading-relaxed group-hover:text-[#111827] transition-colors cursor-pointer select-none font-medium">
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
