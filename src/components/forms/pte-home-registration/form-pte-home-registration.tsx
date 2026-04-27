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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { 
    User, 
    Globe, 
    MapPin, 
    Gavel, 
    ArrowRight,
    School,
    UploadCloud,
    Search
} from "lucide-react";

// --- Schema & Interface ---
const pteHomeSchema = z.object({
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().min(1, "Surnames are required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    gender: z.string().min(1, "Gender is required"),
    countryOfIssue: z.string().min(1, "Country of issue is required"),
    countryOfBirth: z.string().min(1, "Country of birth is required"),
    countryOfCitizenship: z.string().min(1, "Country of citizenship is required"),
    countryOfResidence: z.string().min(1, "Country of residence is required"),
    languageSpoken: z.string().min(1, "Language spoken is required"),
    idType: z.string().min(1, "ID type is required"),
    documentNumber: z.string().min(1, "Document number is required"),
    fullAddress: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    countryCode: z.string().min(1, "Code is required"),
    telephone: z.string().min(1, "Telephone is required"),
    email: z.string().email("Invalid email address"),
    referralSource: z.string().min(1, "Referral source is required"),
    receiveUpdates: z.string().min(1, "Please select an option"),
    workshop: z.string(),
    termsAccepted: z.boolean(),
    permissionLogIntoAccount: z.boolean(),
    infoCorrect: z.boolean(),
});

interface IPteHomeForm {
    givenNames: string;
    surnames: string;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
    gender: string;
    countryOfIssue: string;
    countryOfBirth: string;
    countryOfCitizenship: string;
    countryOfResidence: string;
    languageSpoken: string;
    idType: string;
    documentNumber: string;
    fullAddress: string;
    city: string;
    countryCode: string;
    telephone: string;
    email: string;
    referralSource: string;
    receiveUpdates: string;
    workshop: string;
    termsAccepted: boolean;
    permissionLogIntoAccount: boolean;
    infoCorrect: boolean;
}

const workshops = [
    { label: "2 hours workshop", price: 600 },
    { label: "4 hours workshop", price: 1000 },
    { label: "6 hours workshop", price: 1350 },
    { label: "8 hours workshop", price: 1600 },
];

export default function FormPTEHomeRegistration() {
    const form = useForm<IPteHomeForm>({
        resolver: zodResolver(pteHomeSchema),
        defaultValues: {
            givenNames: "",
            surnames: "",
            dobDay: "",
            dobMonth: "",
            dobYear: "",
            gender: "",
            countryOfIssue: "",
            countryOfBirth: "",
            countryOfCitizenship: "",
            countryOfResidence: "",
            languageSpoken: "",
            idType: "Passport",
            documentNumber: "",
            fullAddress: "",
            city: "",
            countryCode: "+971",
            telephone: "",
            email: "",
            referralSource: "",
            receiveUpdates: "",
            workshop: "",
            termsAccepted: false,
            permissionLogIntoAccount: false,
            infoCorrect: false,
        },
    });

    const { control, handleSubmit } = form;

    const selectedWorkshopLabel = useWatch({ control, name: "workshop" });

    const EXAM_FEE = 1230;
    const SERVICE_FEE = 100;
    const VAT_RATE = 0.05;

    const { total, serviceVAT, workshopPrice, workshopVAT } = useMemo(() => {
        const selected = workshops.find(w => w.label === selectedWorkshopLabel);
        const wPrice = selected?.price || 0;
        const sVAT = SERVICE_FEE * VAT_RATE;
        const wVAT = wPrice * VAT_RATE;
        const totalAmount = EXAM_FEE + SERVICE_FEE + sVAT + wPrice + wVAT;

        return {
            total: totalAmount,
            serviceVAT: sVAT,
            workshopPrice: wPrice,
            workshopVAT: wVAT
        };
    }, [selectedWorkshopLabel]);

    const onSubmit: SubmitHandler<IPteHomeForm> = (data) => {
        console.log("PTE Home Form Data:", data);
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
                        PTE Home Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Start your journey to global academic success with a seamless registration process designed for future scholars.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(38,24,23,0.08)] p-8 md:p-12 border border-outline-variant/10">
                    <Form {...form}>
                        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
                            
                            {/* Stepper Preview */}
                            <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
                                {[
                                    { step: 1, label: "Personal", active: true },
                                    { step: 2, label: "Identity", active: false },
                                    { step: 3, label: "Contact", active: false },
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
                            </div>

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
                                                                <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 px-2">
                                                                    <SelectValue placeholder="Month" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
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
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Gender *</FormLabel>
                                                <FormControl>
                                                    <RadioGroup className="flex gap-8 h-14 items-center" onValueChange={field.onChange} defaultValue={field.value}>
                                                        {["Male", "Female", "Other"].map((g) => (
                                                            <div key={g} className="flex items-center space-x-2 group cursor-pointer">
                                                                <RadioGroupItem value={g} id={`gender-${g}`} className="border-[#A11D1D] text-[#A11D1D]" />
                                                                <Label htmlFor={`gender-${g}`} className="font-bold group-hover:text-[#A11D1D] cursor-pointer text-sm">{g}</Label>
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
                                        name="countryOfIssue"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Issue *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter country" {...field} />
                                                </FormControl>
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
                                    <FormField
                                        control={control}
                                        name="countryOfResidence"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Country of Residence *</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Enter residence" {...field} />
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
                                                <FormControl>
                                                    <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Mostly spoken at home" {...field} />
                                                </FormControl>
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
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                            <SelectValue placeholder="Passport" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Passport">Passport</SelectItem>
                                                        <SelectItem value="National ID Card">National ID Card</SelectItem>
                                                        <SelectItem value="Government Issued ID">Government Issued ID</SelectItem>
                                                    </SelectContent>
                                                </Select>
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

                            {/* 3. Workshop Selection */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <h3 className="text-lg font-extrabold uppercase tracking-widest text-[#A11D1D] flex items-center gap-2">
                                    <School className="w-5 h-5" />
                                    Preparation Workshop
                                </h3>
                                <FormField
                                    control={control}
                                    name="workshop"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Workshop (Optional)</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                        <SelectValue placeholder="Add a workshop to your registration" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="">No workshop</SelectItem>
                                                    {workshops.map((w) => (
                                                        <SelectItem key={w.label} value={w.label}>
                                                            {w.label} - AED {w.price}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                    <div className="grid grid-cols-4 gap-4">
                                        <FormField
                                            control={control}
                                            name="countryCode"
                                            render={({ field }) => (
                                                <FormItem className="col-span-1">
                                                    <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Code *</FormLabel>
                                                    <FormControl>
                                                        <Input className="bg-slate-50 border-none rounded-lg h-14" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={control}
                                            name="telephone"
                                            render={({ field }) => (
                                                <FormItem className="col-span-3">
                                                    <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Telephone *</FormLabel>
                                                    <FormControl>
                                                        <Input className="bg-slate-50 border-none rounded-lg h-14" placeholder="Mobile for SMS" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
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

                            {/* 5. User Insights */}
                            <div className="pt-8 border-t border-slate-100 space-y-8">
                                <FormField
                                    control={control}
                                    name="referralSource"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">How did you hear about us? *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14">
                                                        <SelectValue placeholder="Select Source" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {["Social Media", "Google Search", "Friend", "Education Agent", "Website", "Other"].map(r => (
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
                                    name="receiveUpdates"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Receive updates and special offers? *</FormLabel>
                                            <FormControl>
                                                <RadioGroup className="flex gap-8" onValueChange={field.onChange} defaultValue={field.value}>
                                                    <div className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value="Yes" id="updates-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                                        <Label htmlFor="updates-yes" className="font-bold group-hover:text-[#A11D1D] cursor-pointer text-sm">Yes</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value="No" id="updates-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                                        <Label htmlFor="updates-no" className="font-bold group-hover:text-[#A11D1D] cursor-pointer text-sm">No</Label>
                                                    </div>
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
                                                    <span className="font-medium uppercase tracking-tighter">PTE Home Exam Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {EXAM_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">Registration Service Fee</span>
                                                    <span className="font-bold text-white tracking-widest">AED {SERVICE_FEE.toLocaleString()}</span>
                                                </div>
                                                {workshopPrice > 0 && (
                                                    <div className="flex justify-between items-center text-slate-300 text-sm">
                                                        <span className="font-medium uppercase tracking-tighter">Preparation Workshop</span>
                                                        <span className="font-bold text-white tracking-widest">AED {workshopPrice.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between items-center text-slate-300 text-sm border-t border-slate-800 pt-3">
                                                    <span className="font-medium uppercase tracking-tighter">VAT 5% (Service & Workshop)</span>
                                                    <span className="font-bold text-white tracking-widest">AED {(serviceVAT + workshopVAT).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right w-full md:w-auto flex flex-col justify-end">
                                            <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black mb-2">Total Fees Due</div>
                                            <div className="text-5xl font-black text-white tracking-tighter">
                                                AED {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </div>
                                            <p className="text-[10px] text-slate-600 mt-4 uppercase font-black tracking-widest leading-none">
                                                * VAT is applicable to service fee and workshops
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