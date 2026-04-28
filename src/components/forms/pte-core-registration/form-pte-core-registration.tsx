"use client";
import { useMemo } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
    User,
    Globe,
    Badge as BadgeIcon,
    UploadCloud,
    Info,
    MapPin,
    Gavel,
    ArrowRight,
    School,
    FileQuestion as QuizIcon,
    Calendar as CalendarIcon
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

import { RefinedPteCoreSchema, type TPteCoreFormSchema } from "./-type";


const courses = [
    { id: "group", label: "Group (In-person classroom-based course)", price: 1850 },
    { id: "semi-private", label: "Semi-Private (In-person classroom-based)", price: 2850 },
    { id: "private", label: "Private one-to-one (In-person classroom)", price: 4850 },
    { id: "online", label: "Private one-to-one (Online course)", price: 3850 },
];

export default function FormPTECoreRegistration() {
    const form = useForm<TPteCoreFormSchema>({
        resolver: zodResolver(RefinedPteCoreSchema),
        defaultValues: {
            givenNames: "",
            surnames: "",
            dob: undefined,
            gender: "",
            testTiming: "",
            countryOfBirth: "",
            countryOfCitizenship: "",
            countryOfResidence: "",
            languageSpoken: "",
            idType: "Passport",
            documentNumber: "",
            purposeOfTest: "",
            occupation: "",
            fullAddress: "",
            city: "",
            telephone: "",
            email: "",
            selectedCourse: "",
            termsAccepted: false,
            permissionLogIntoAccount: false,
            infoCorrect: false,
        },
    });

    const { control, handleSubmit } = form;

    const selectedCourseId = useWatch({ control, name: "selectedCourse" });

    const EXAM_FEE = 1450;
    const SERVICE_FEE = 5;
    const VAT_RATE = 0.05;

    const { total, serviceVAT, coursePrice, courseVAT } = useMemo(() => {
        const selected = courses.find(c => c.id === selectedCourseId);
        const cPrice = selected?.price || 0;
        const sVAT = SERVICE_FEE * VAT_RATE;
        const cVAT = cPrice * VAT_RATE;
        const totalAmount = EXAM_FEE + SERVICE_FEE + sVAT + cPrice + cVAT;

        return {
            total: totalAmount,
            serviceVAT: sVAT,
            coursePrice: cPrice,
            courseVAT: cVAT
        };
    }, [selectedCourseId]);

    const onSubmit: SubmitHandler<TPteCoreFormSchema> = (data) => {
        console.log("PTE Core Form Data:", data);
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
                        PTE Core Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Fast-track your global immigration and career journey with PTE Core registration through TEPTH Academy.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 mt-20 relative z-20">
                <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(38,24,23,0.08)] p-8 md:p-12 border border-outline-variant/10">
                    <Form {...form}>
                        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>

                            {/* Stepper Preview */}
                            {/* <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
                                {[
                                    { step: 1, label: "Personal", active: true },
                                    { step: 2, label: "Identity", active: false },
                                    { step: 3, label: "Background", active: false },
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
                                                "text-[10px] uppercase tracking-widest font-bold",
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
                            </div> */}

                            {/* 1. Personal Details */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="As per identification" {...field} />
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
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Family name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                    <DateTimePicker
                                        mode="date"
                                        label="Date of Birth *"
                                        control={control}
                                        name="dob"
                                        fromYear={1950}
                                        toYear={2050}
                                        className="bg-slate-50 border-none rounded-lg h-14 font-bold px-4"
                                    />
                                    <FormField
                                        control={control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Gender *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Select Gender"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {["Male", "Female", "Other"].map((g) => (
                                                            <DropdownMenuItem
                                                                key={g}
                                                                onSelect={() => field.onChange(g)}
                                                            >
                                                                {g}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                    <FormField
                                        control={control}
                                        name="testTiming"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Test Timing *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Select Time"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {["10:00 AM", "12:45 PM", "03:30 PM", "06:15 PM"].map((t) => (
                                                            <DropdownMenuItem
                                                                key={t}
                                                                onSelect={() => field.onChange(t)}
                                                            >
                                                                {t}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 2. Identity & Documents */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <Globe className="text-[#A11D1D] w-6 h-6" />
                                    Identity & Origin
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="countryOfBirth"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Birth *</FormLabel>
                                                <FormControl>
                                                    <CountryDropdown
                                                        className="bg-slate-50 border-none rounded-lg h-14 font-bold px-4"
                                                        placeholder="Select country"
                                                        onChange={(country) => field.onChange(country.name)}
                                                        defaultValue={field.value}
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
                                                        className="bg-slate-50 border-none rounded-lg h-14 font-bold px-4"
                                                        placeholder="Select citizenship"
                                                        onChange={(country) => field.onChange(country.name)}
                                                        defaultValue={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="countryOfResidence"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Residence *</FormLabel>
                                                <FormControl>
                                                    <CountryDropdown
                                                        className="bg-slate-50 border-none rounded-lg h-14 font-bold px-4"
                                                        placeholder="Select residence"
                                                        onChange={(country) => field.onChange(country.name)}
                                                        defaultValue={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="languageSpoken"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Language Spoken *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Select Language"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {["English", "Arabic", "Hindi", "Urdu", "Bengali", "Other"].map((lang) => (
                                                            <DropdownMenuItem
                                                                key={lang}
                                                                onSelect={() => field.onChange(lang)}
                                                            >
                                                                {lang}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <FormField
                                        control={control}
                                        name="idType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">ID Type *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Passport"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {["Passport", "National ID Card", "Government Issued ID"].map((type) => (
                                                            <DropdownMenuItem
                                                                key={type}
                                                                onSelect={() => field.onChange(type)}
                                                            >
                                                                {type}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="documentNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Document Number *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter ID number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex flex-col gap-4 pt-4">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Upload Passport Copy *</Label>
                                    <div className="flex flex-col gap-3">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100/80 hover:border-[#A11D1D]/30 cursor-pointer transition-all group">
                                            <div className="flex flex-col items-center justify-center">
                                                <UploadCloud className="text-slate-400 mb-2 group-hover:text-[#A11D1D] transition-colors w-8 h-8" />
                                                <p className="text-sm font-bold text-[#A11D1D]">Choose File</p>
                                            </div>
                                            <input className="hidden" type="file" />
                                        </label>
                                        <p className="text-[10px] text-slate-400 font-medium">Max 128 MB (PDF, DOCX, PNG, JPEG)</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Background Information */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <Info className="text-[#A11D1D] w-6 h-6" />
                                    Background Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="purposeOfTest"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Why are you taking the test? *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Select Purpose"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {[
                                                            { value: "Immigration", label: "Immigration / Permanent Residency" },
                                                            { value: "Work Visa", label: "Work Visa" },
                                                            { value: "Higher Education", label: "Higher Education" }
                                                        ].map((item) => (
                                                            <DropdownMenuItem
                                                                key={item.value}
                                                                onSelect={() => field.onChange(item.value)}
                                                            >
                                                                {item.label}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="occupation"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Current Occupation *</FormLabel>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        render={
                                                            <Button
                                                                variant="outline"
                                                                className="flex w-full items-center justify-between bg-slate-50 border-none rounded-lg h-14 px-4 font-bold"
                                                            >
                                                                <span>{field.value || "Select Occupation"}</span>
                                                                <ChevronDownIcon className="size-4 opacity-50" />
                                                            </Button>
                                                        }
                                                    />
                                                    <DropdownMenuContent align="start" className="min-w-[200px]">
                                                        {["Professional", "Student", "Business Owner", "Unemployed", "Retired", "Other"].map((occ) => (
                                                            <DropdownMenuItem
                                                                key={occ}
                                                                onSelect={() => field.onChange(occ)}
                                                            >
                                                                {occ}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* 4. Contact Information */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight text-[#111827] flex items-center gap-3">
                                    <MapPin className="text-[#A11D1D] w-6 h-6" />
                                    Contact Information
                                </h2>
                                <FormField
                                    control={control}
                                    name="fullAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Full Address *</FormLabel>
                                            <FormControl>
                                                <Textarea className="bg-slate-50 border-none rounded-lg p-4 min-h-[100px]" placeholder="Street name, building..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">City *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter city" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="telephone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Telephone *</FormLabel>
                                                <FormControl>
                                                    <PhoneInput
                                                        {...field}
                                                        defaultCountry="AE"
                                                        placeholder="Enter phone number"
                                                        className="bg-slate-50 border-none rounded-lg h-14"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address *</FormLabel>
                                            <FormControl>
                                                <Input type="email" className="bg-slate-50 border-none rounded-lg h-14" placeholder="example@domain.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* 5. Course Add-ons */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h3 className="text-lg font-extrabold uppercase tracking-widest text-[#A11D1D] flex items-center gap-2">
                                    <School className="w-5 h-5" />
                                    Preparation Courses
                                </h3>
                                <FormField
                                    control={control}
                                    name="selectedCourse"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <RadioGroup className="grid grid-cols-1 gap-4" onValueChange={field.onChange} defaultValue={field.value}>
                                                    {courses.map(course => (
                                                        <label key={course.id} className={cn(
                                                            "flex items-center justify-between p-5 rounded-xl border transition-all cursor-pointer group/item",
                                                            field.value === course.id ? "bg-[#A11D1D]/5 border-[#A11D1D]/30" : "bg-white border-slate-200 hover:border-[#A11D1D]/20"
                                                        )}>
                                                            <div className="flex items-center gap-4">
                                                                <RadioGroupItem value={course.id} id={`course-${course.id}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <div className="flex flex-col">
                                                                    <span className="text-sm font-extrabold text-slate-700">{course.label}</span>
                                                                    <span className="text-xs text-slate-400">PTE Core Preparation</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-bold text-[#A11D1D]">AED {course.price.toLocaleString()}</span>
                                                        </label>
                                                    ))}
                                                    <label className={cn(
                                                        "flex items-center justify-between p-5 rounded-xl border transition-all cursor-pointer group/item",
                                                        field.value === "" ? "bg-[#A11D1D]/5 border-[#A11D1D]/30" : "bg-white border-slate-200 hover:border-[#A11D1D]/20"
                                                    )}>
                                                        <div className="flex items-center gap-4">
                                                            <RadioGroupItem value="" id="course-none" className="border-[#A11D1D] text-[#A11D1D]" />
                                                            <span className="text-sm font-extrabold text-slate-700">No course required</span>
                                                        </div>
                                                    </label>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                                    <span className="font-medium uppercase tracking-tighter">PTE Core Exam Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {EXAM_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">Registration Service Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {SERVICE_FEE.toLocaleString()}</span>
                                                </div>
                                                {coursePrice > 0 && (
                                                    <div className="flex justify-between items-center text-slate-300 text-sm">
                                                        <span className="font-medium uppercase tracking-tighter">Preparation Course</span>
                                                        <span className="font-bold text-white tracking-widest">AED {coursePrice.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between items-center text-slate-300 text-sm border-t border-slate-800 pt-3">
                                                    <span className="font-medium uppercase tracking-tighter">VAT 5% (Service & Course)</span>
                                                    <span className="font-bold text-white tracking-widest">AED {(serviceVAT + courseVAT).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right w-full md:w-auto flex flex-col justify-end">
                                            <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black mb-2">Total Fees Due</div>
                                            <div className="text-5xl font-black text-white tracking-tighter">
                                                AED {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <p className="text-[10px] text-slate-600 mt-4 uppercase font-black tracking-widest leading-none">
                                                * VAT is applicable to service fee and courses
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
                                        { key: "termsAccepted" as const, label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                        { key: "permissionLogIntoAccount" as const, label: "I hereby give permission to the center to log into my account to complete my registration." },
                                        { key: "infoCorrect" as const, label: "I hereby acknowledge that all information written above is correct and true." },
                                    ].map((item) => (
                                        <FormField
                                            key={item.key}
                                            control={control}
                                            name={item.key}
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

                            {/* Actions */}
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
