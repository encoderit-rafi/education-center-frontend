"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2 } from "lucide-react";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { PhoneInput } from "@/components/ui/phone-input";

const careerSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    gender: z.string().min(1, "Please select your gender"),
    dob: z.any().refine((val) => val instanceof Date, "Please select your date of birth"),
    nationality: z.string().min(1, "Please select your nationality"),
    email: z.string().email("Please enter a valid email address"),
    mobile: z.string().min(7, "Please enter a valid mobile number"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    city: z.string().min(2, "City/Emirate is required"),
    pobox: z.string().optional(),
    resume: z.any().optional(), // In a real app, you'd validate the file type and size
});

type CareerFormValues = z.infer<typeof careerSchema>;

export default function CareerPage() {
    const [mounted, setMounted] = useState(false);
    const [captchaError, setCaptchaError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const captchaRef = useRef<ReCAPTCHA>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const form = useForm<CareerFormValues>({
        resolver: zodResolver(careerSchema),
        defaultValues: {
            fullName: "",
            gender: "",
            dob: undefined,
            nationality: "",
            email: "",
            mobile: "",
            address: "",
            city: "",
            pobox: "",
        },
    });

    const onSubmit = async (data: CareerFormValues) => {
        const token = captchaRef.current?.getValue();
        if (!token) {
            setCaptchaError("Please verify that you are not a robot.");
            return;
        }
        setCaptchaError(null);
        
        console.log("Form Data:", data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col min-h-screen bg-gray-50/50 items-center justify-center p-6">
                <div className="max-w-md w-full bg-white p-12 rounded-sm shadow-xl border border-gray-100 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black font-heading tracking-tighter">Application Sent!</h2>
                        <p className="text-gray-500 font-medium">Thank you for your interest. Our HR team will review your application and contact you soon.</p>
                    </div>
                    <Button 
                        onClick={() => window.location.reload()}
                        className="w-full bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-widest py-6"
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50">
            {/* Main Content */}
            <section className="py-24">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-12">
                            <div className="bg-white p-12 md:p-16 rounded-sm shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#A11D1D]" />

                                <div className="mb-12">
                                    <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tighter mb-4">Personal Information</h2>
                                    <p className="text-gray-500 text-sm">Please fill out the form below and attach your latest CV to apply.</p>
                                </div>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Full Name */}
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name:*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your full name" className="rounded-none border-gray-200 focus:border-[#A11D1D] focus:ring-[#A11D1D] h-12" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Gender */}
                                            <FormField
                                                control={form.control}
                                                name="gender"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Select Gender:*</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="rounded-none border-gray-200 focus:ring-[#A11D1D] h-12">
                                                                    <SelectValue placeholder="-Select Gender-" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="male">Male</SelectItem>
                                                                <SelectItem value="female">Female</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* DOB */}
                                            <DateTimePicker
                                                control={form.control}
                                                name="dob"
                                                label="Date of Birth:*"
                                                labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                                                mode="date"
                                                placeholder="Select your birth date"
                                                className="rounded-none border-gray-200 h-12 focus:border-[#A11D1D] w-full"
                                            />

                                            {/* Nationality */}
                                            <FormField
                                                control={form.control}
                                                name="nationality"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Nationality:*</FormLabel>
                                                        <FormControl>
                                                            <CountryDropdown
                                                                value={field.value}
                                                                onChange={(country) => field.onChange(country.name)}
                                                                className="rounded-none border-gray-200 h-12 focus:border-[#A11D1D] w-full shadow-none"
                                                                placeholder="-Select Nationality-"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Email */}
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address:*</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="email@example.com" className="rounded-none border-gray-200 h-12" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Phone */}
                                            <FormField
                                                control={form.control}
                                                name="mobile"
                                                render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Mobile No:*</FormLabel>
                                                        <FormControl>
                                                            <PhoneInput
                                                                {...field}
                                                                defaultCountry="AE"
                                                                placeholder="Ex: 50 123 4567"
                                                                className="rounded-none border-gray-200 h-12 focus-within:border-[#A11D1D] focus-within:ring-1 focus-within:ring-[#A11D1D]"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Address */}
                                            <FormField
                                                control={form.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Residential Address:*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your full address" className="rounded-none border-gray-200 h-12" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Emirate/City */}
                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Emirate/City:*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Dubai" className="rounded-none border-gray-200 h-12" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* P.O. Box */}
                                            <FormField
                                                control={form.control}
                                                name="pobox"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">P.O. Box:</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="123456" className="rounded-none border-gray-200 h-12" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* File Upload */}
                                            <div className="md:col-span-2 space-y-4 pt-6">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1">Attach your CV:</FormLabel>
                                                <div className="border-2 border-dashed border-gray-200 p-10 flex flex-col items-center justify-center space-y-4 hover:border-[#A11D1D] transition-colors cursor-pointer group bg-gray-50/50">
                                                    <Upload className="w-10 h-10 text-gray-300 group-hover:text-[#A11D1D] transition-colors" />
                                                    <div className="text-center">
                                                        <p className="text-sm font-bold text-gray-600">Click to upload or drag and drop</p>
                                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Only doc, docx or pdf file allowed</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ReCAPTCHA */}
                                            <div className="md:col-span-2 space-y-2">
                                            {mounted && (
                                                <ReCAPTCHA
                                                    ref={captchaRef}
                                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                                                    onChange={() => setCaptchaError(null)}
                                                />
                                            )}
                                                {captchaError && (
                                                    <p className="text-red-500 text-sm font-medium">{captchaError}</p>
                                                )}
                                            </div>
                                        </div>

                                        <Button 
                                            type="submit"
                                            disabled={form.formState.isSubmitting}
                                            className="w-full md:w-auto px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-none shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                        >
                                            {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                                        </Button>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
