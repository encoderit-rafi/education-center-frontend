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
            dateOfBirth: undefined,
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
        <div className="bg-gray-50/50 font-body text-on-surface min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
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
                <div className="bg-white border border-gray-100 rounded-[2rem] shadow-2xl shadow-gray-200/50 p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#A11D1D]" />
                    <Form {...form}>
                        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>

                            {/* Registration Stepper Preview */}
                            <div className="flex items-center justify-between mb-16 overflow-x-auto pb-4 no-scrollbar border-b border-gray-100">
                                {[
                                    { step: 1, label: "Personal", active: true },
                                    { step: 2, label: "Identity", active: false },
                                    { step: 3, label: "Document", active: false },
                                    { step: 4, label: "Review", active: false },
                                ].map((item, idx, arr) => (
                                    <div key={item.step} className="flex items-center flex-1 last:flex-none">
                                        <div className="flex flex-col items-center min-w-[100px]">
                                            <div className={cn(
                                                "w-12 h-12 rounded-lg flex items-center justify-center font-black mb-3 transition-all duration-300 border-2",
                                                item.active
                                                    ? "bg-[#A11D1D] border-[#A11D1D] text-white shadow-lg"
                                                    : "bg-white border-gray-200 text-gray-400"
                                            )}>
                                                {item.step}
                                            </div>
                                            <span className={cn(
                                                "text-[10px] uppercase tracking-[0.2em] font-black transition-colors duration-300",
                                                item.active ? "text-[#A11D1D]" : "text-gray-400"
                                            )}>
                                                {item.label}
                                            </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <div className={cn(
                                                "flex-1 h-[2px] mx-4",
                                                item.active ? "bg-[#A11D1D]/20" : "bg-gray-100"
                                            )}></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* 1. Test Selection */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="testModule"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">IELTS Test Module:*</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12">
                                                            <SelectValue placeholder="-Select Module-" />
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
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Select Test Timing:*</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="rounded-lg border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12">
                                                            <SelectValue placeholder="-Select Preferred Time-" />
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
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="givenNames"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Given name(s):*</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="As per passport" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="surnames"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Surname(s):*</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="As per passport" className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <DateTimePicker
                                        control={control}
                                        name="dateOfBirth"
                                        label="Date of Birth:*"
                                        labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12 w-full"
                                        fromYear={1940}
                                        toYear={2024}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Gender:*</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    className="flex gap-8 h-12 items-center"
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    {["Male", "Female", "Other"].map((g) => (
                                                        <div key={g} className="flex items-center space-x-2 group cursor-pointer">
                                                            <RadioGroupItem value={g} id={`gender-${g}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <Label htmlFor={`gender-${g}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer">{g}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* History Questions */}
                                <div className="space-y-6 pt-6 border-t border-gray-50">
                                    <FormField
                                        control={control}
                                        name="takenBefore"
                                        render={({ field }) => (
                                            <FormItem className="space-y-4">
                                                <FormLabel className="text-sm font-black text-gray-900 uppercase tracking-widest">Have you taken the CD-IELTS Test before?*</FormLabel>
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
                                        <div className="space-y-8 animate-in slide-in-from-left-4 duration-500 pl-6 border-l-2 border-[#A11D1D]">
                                            <FormField
                                                control={control}
                                                name="lessThan2Years"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-xs font-black text-gray-500 uppercase tracking-widest">Was it less than 2 years?*</FormLabel>
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
                                                        <FormLabel className="text-xs font-black text-gray-500 uppercase tracking-widest">Do you have an existing IELTS account?*</FormLabel>
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
                                <div className="space-y-6 pt-6 border-t border-gray-50">
                                    <FormField
                                        control={control}
                                        name="specialRequirements"
                                        render={({ field }) => (
                                            <FormItem className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <AlertCircle className="w-5 h-5 text-[#A11D1D] mt-0.5" />
                                                    <FormLabel className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                                        Do You Have Any Special Requirements Due to Ill Health/Medical Conditions?*
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
                                                <FormItem className="animate-in slide-in-from-left-4 duration-500 pl-6 border-l-2 border-[#A11D1D]">
                                                    <FormLabel className="text-xs font-black text-gray-500 uppercase tracking-widest">If please mention:*</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Please describe your requirements"
                                                            className="rounded-lg border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
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
                            <div className="space-y-8">
                                <FormField
                                    control={control}
                                    name="educationLevel"
                                    render={({ field }) => (
                                        <FormItem className="space-y-6">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">What level of education have you completed?*</FormLabel>
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
                                                            <Label htmlFor={`edu-${edu}`} className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer text-gray-600">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                                                            { label: "Employer/Partner", value: "Employer/Partner" },
                                                            { label: "Employee (Senior level)", value: "Employee (Senior level)" },
                                                            { label: "Employee (Middle/Junior level)", value: "Employee (Middle/Junior level)" },
                                                            { label: "Homeworker", value: "Homeworker" },
                                                            { label: "Retired", value: "Retired" },
                                                            { label: "Student", value: "Student" },
                                                            { label: "Other", value: "Other" },
                                                        ]}
                                                        placeholder="-Select Level-"
                                                        searchPlaceholder="Search level..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
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
                                                        placeholder="-Select Sector-"
                                                        searchPlaceholder="Search sector..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <FormField
                                        control={control}
                                        name="reasonForTest"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Why are you taking the test?*</FormLabel>
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
                                                        placeholder="-Select Reason-"
                                                        searchPlaceholder="Search reason..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
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
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Which country do you want to live in?*</FormLabel>
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
                                                        placeholder="-Select Country-"
                                                        searchPlaceholder="Search country..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 4. About You */}
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <FormField
                                        control={control}
                                        name="firstLanguage"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">First language:*</FormLabel>
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
                                                        placeholder="-Select Language-"
                                                        searchPlaceholder="Search language..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
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
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Years studying English:*</FormLabel>
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
                                                        placeholder="-Select Years-"
                                                        searchPlaceholder="Search years..."
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                                    />
                                                </FormControl>
                                                <p className="text-[10px] text-gray-400 italic mt-1 font-bold uppercase tracking-widest">Your answer has no impact on your test score</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <FormField
                                        control={control}
                                        name="countryOfBirth"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of Birth:*</FormLabel>
                                                <FormControl>
                                                    <CountryDropdown
                                                        value={field.value}
                                                        onChange={(country) => field.onChange(country.name)}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full shadow-none"
                                                        placeholder="-Select Country-"
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
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of Citizenship:*</FormLabel>
                                                <FormControl>
                                                    <CountryDropdown
                                                        value={field.value}
                                                        onChange={(country) => field.onChange(country.name)}
                                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full shadow-none"
                                                        placeholder="-Select Country-"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Preferred Dates */}
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <DateTimePicker
                                        control={control}
                                        name="firstPreferredDate"
                                        label="First preferred date:*"
                                        labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                    />
                                    <DateTimePicker
                                        control={control}
                                        name="secondPreferredDate"
                                        label="Second preferred date:*"
                                        labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                        mode="date"
                                        placeholder="dd/mm/yyyy"
                                        className="rounded-lg border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Info className="w-4 h-4 text-[#A11D1D]" />
                                    Note: All Sundays except holidays and deactivated Sundays.
                                </p>
                            </div>

                            {/* 5. Add-on services */}
                            <div className="space-y-6">
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
                                                    "flex flex-row items-center space-x-3 space-y-0 p-6 rounded-lg border transition-all cursor-pointer bg-white",
                                                    field.value ? "border-[#A11D1D] ring-1 ring-[#A11D1D]" : "border-gray-200 hover:border-[#A11D1D]/20"
                                                )}>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="rounded-lg data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <div className="flex flex-col w-full">
                                                        <FormLabel className="font-black text-gray-900 uppercase tracking-widest text-xs cursor-pointer">{course.label}</FormLabel>
                                                        <span className="text-[10px] font-black text-[#A11D1D] mt-1 uppercase tracking-widest">AED {course.price.toLocaleString()}.00</span>
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
                                                    "flex flex-row items-center space-x-3 space-y-0 p-6 rounded-lg border transition-all cursor-pointer bg-white",
                                                    field.value ? "border-[#A11D1D] ring-1 ring-[#A11D1D]" : "border-gray-200 hover:border-[#A11D1D]/20"
                                                )}>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="rounded-lg data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-black text-gray-900 uppercase tracking-widest text-xs cursor-pointer">IELTS Exam Workshop</FormLabel>
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
                                                                <SelectTrigger className="bg-white border-gray-200 rounded-lg h-12 w-full px-6 focus:ring-[#A11D1D]">
                                                                    <SelectValue placeholder="-Select number of hours-" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {Object.keys(workshopPriceMap).map(h => (
                                                                    <SelectItem key={h} value={h}>
                                                                        <div className="flex justify-between w-full min-w-[200px]">
                                                                            <span className="font-bold text-xs uppercase tracking-widest">{h}</span>
                                                                            <span className="font-black text-[#A11D1D] text-xs">AED {workshopPriceMap[h]}</span>
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
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-6 flex items-center gap-2">
                                    <AlertCircle className="w-3.5 h-3.5 text-[#A11D1D]" />
                                    * 30% discount on course fee when selecting a course.
                                </p>
                            </div>

                            {/* 6. Fee Summary */}
                            <div className="pt-6">
                                <div className="bg-white border-2 border-gray-900 rounded-lg p-8 md:p-12 relative overflow-hidden">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
                                        <div className="space-y-6 flex-1 w-full">
                                            <h4 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 pb-2 inline-block">Booking Summary</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center text-gray-600 text-xs font-black uppercase tracking-widest">
                                                    <span>IELTS {form.getValues("testModule") || "Exam"} Fee</span>
                                                    <span className="text-gray-900">AED {EXAM_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-gray-600 text-xs font-black uppercase tracking-widest">
                                                    <span>Registration Service Fee</span>
                                                    <span className="text-gray-900">AED {SERVICE_FEE.toLocaleString()}</span>
                                                </div>

                                                {coursePrice > 0 && (
                                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                                        <div className="flex justify-between items-center text-gray-600 text-xs font-black uppercase tracking-widest">
                                                            <span>Selected Courses</span>
                                                            <span className="text-gray-900">AED {coursePrice.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center text-emerald-600 text-xs font-black uppercase tracking-widest bg-emerald-50 px-4 py-2">
                                                            <span>30% Course Discount</span>
                                                            <span>- AED {discount.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {workshopPrice > 0 && (
                                                    <div className="flex justify-between items-center text-gray-600 text-xs font-black uppercase tracking-widest pt-4 border-t border-gray-100">
                                                        <span>IELTS Workshop ({workshopHours})</span>
                                                        <span className="text-gray-900">AED {workshopPrice.toLocaleString()}</span>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center text-gray-600 text-xs font-black uppercase tracking-widest pt-4 border-t-2 border-gray-900">
                                                    <span>VAT (5% Applicable)</span>
                                                    <span className="text-gray-900">AED {vat.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right flex flex-col items-end w-full md:w-auto pt-8 md:pt-0">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A11D1D] mb-2">Total Amount Payable</span>
                                            <div className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                                                <span className="text-xl align-top mr-2 text-gray-400">AED</span>
                                                {Math.round(total).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 7. Terms & Conditions */}
                            <div className="pt-6 space-y-4">
                                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">* Agree Terms & Conditions</h3>
                                <div className="space-y-6">
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
                                                <FormItem className="flex flex-row items-start space-x-4 space-y-0 group p-4 border border-transparent hover:border-gray-100 transition-colors">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="mt-1 rounded-lg data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors cursor-pointer select-none font-bold uppercase tracking-wide">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 mt-8">
                                <button className="text-[#A11D1D] font-black text-xs uppercase tracking-widest hover:underline underline-offset-8 transition-all px-4 py-2" type="button">Save for Later</button>
                                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="px-12 py-8 border-gray-200 text-gray-500 font-black text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-gray-50 transition-all"
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4"
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
