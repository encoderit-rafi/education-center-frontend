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
    Phone,
    Briefcase
} from "lucide-react";
import { ToeflIbtSchema, type TToeflIbtSchema } from "./-type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
            case 2: return ["country", "streetAddress1", "city", "countryCode", "phoneNumber"];
            default: return [];
        }
    };

    const stepHeadings = [
        "Personal Information",
        "Address & Contact",
        "Review & Payment"
    ];

    const stepIcons = [
        <User className="w-5 h-5" key="i1" />,
        <MapPin className="w-5 h-5" key="i2" />,
        <ShieldCheck className="w-5 h-5" key="i3" />
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 px-4 md:px-8 font-sans selection:bg-[#A11D1D]/10 selection:text-[#A11D1D]">
            <div className="max-w-4xl mx-auto">
                {/* Progress Tracking */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-[#A11D1D] text-white p-3 rounded-2xl shadow-lg shadow-[#A11D1D]/20">
                            {stepIcons[step - 1]}
                        </div>
                        <div>
                            <p className="text-[#A11D1D] text-[10px] font-black uppercase tracking-[0.2em]">Step {step} of 3</p>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mt-1 uppercase">
                                {stepHeadings[step - 1]}
                            </h1>
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                            className="bg-[#A11D1D] h-full transition-all duration-700 ease-out" 
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A11D1D]"></div>
                    
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-14 space-y-12">
                            
                            {step === 1 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <User className="w-5 h-5 text-[#A11D1D]" />
                                            <h2 className="text-xl font-black text-gray-900 tracking-tight">Name</h2>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                            Your name must match the ID you show when taking the test. 
                                            <button type="button" className="text-[#A11D1D] font-bold ml-1 hover:underline">View ID Requirements.</button>
                                        </p>

                                        <div className="grid grid-cols-1 gap-8 pt-4">
                                            <FormField
                                                control={control}
                                                name="givenName"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">First / Given Name:*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your first name" className="rounded-xl border-slate-200 h-14 font-medium" {...field} />
                                                        </FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="noGivenOrLastName"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D]" />
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
                                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Middle Name:</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Optional" className="rounded-xl border-slate-200 h-14 font-medium" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-xs font-bold" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={control}
                                                    name="familyName"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Last / Family Name:*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter your last name" className="rounded-xl border-slate-200 h-14 font-medium" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-xs font-bold" />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Date of Birth:*</FormLabel>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <FormField control={control} name="dobDay" render={({ field }) => (
                                                        <FormItem><FormControl>
                                                            <Select onValueChange={field.onChange} value={field.value}>
                                                                <SelectTrigger className="h-14 rounded-xl border-slate-200"><SelectValue placeholder="Select Day" /></SelectTrigger>
                                                                <SelectContent>{Array.from({ length: 31 }, (_, i) => (<SelectItem key={i + 1} value={(i + 1).toString()}>{i + 1}</SelectItem>))}</SelectContent>
                                                            </Select>
                                                        </FormControl><FormMessage /></FormItem>
                                                    )} />
                                                    <FormField control={control} name="dobMonth" render={({ field }) => (
                                                        <FormItem><FormControl>
                                                            <Select onValueChange={field.onChange} value={field.value}>
                                                                <SelectTrigger className="h-14 rounded-xl border-slate-200"><SelectValue placeholder="Select Month" /></SelectTrigger>
                                                                <SelectContent>
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
                                                                <SelectTrigger className="h-14 rounded-xl border-slate-200"><SelectValue placeholder="Select Year" /></SelectTrigger>
                                                                <SelectContent>{Array.from({ length: 100 }, (_, i) => (<SelectItem key={2024 - i} value={(2024 - i).toString()}>{2024 - i}</SelectItem>))}</SelectContent>
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
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Gender:*</FormLabel>
                                                        <FormControl>
                                                            <Select onValueChange={field.onChange} value={field.value}>
                                                                <SelectTrigger className="h-14 rounded-xl border-slate-200"><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="male">Male</SelectItem>
                                                                    <SelectItem value="female">Female</SelectItem>
                                                                    <SelectItem value="other">Other</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3 mb-2">
                                            <MapPin className="w-5 h-5 text-[#A11D1D]" />
                                            <h2 className="text-xl font-black text-gray-900 tracking-tight">Address</h2>
                                        </div>

                                        <div className="grid grid-cols-1 gap-8">
                                            <FormField
                                                control={control}
                                                name="country"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Country:*</FormLabel>
                                                        <FormControl>
                                                            <CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="rounded-xl border-slate-200 h-14" />
                                                        </FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="space-y-4">
                                                <FormField control={control} name="streetAddress1" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Street Address:*</FormLabel>
                                                        <FormControl><Input placeholder="Address Line 1" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="streetAddress2" render={({ field }) => (
                                                    <FormItem><FormControl><Input placeholder="Address Line 2" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl></FormItem>
                                                )} />
                                            </div>

                                            <FormField
                                                control={control}
                                                name="moreAddressLines"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5 border-slate-300 data-[state=checked]:bg-[#A11D1D]" />
                                                        </FormControl>
                                                        <Label className="text-sm font-bold text-slate-600 cursor-pointer">I need more address lines</Label>
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FormField control={control} name="city" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">City:*</FormLabel>
                                                        <FormControl><Input className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="state" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">State/Province/Territory:</FormLabel>
                                                        <FormControl><Input className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <FormField control={control} name="postalCode" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Postal Code:</FormLabel>
                                                    <FormControl><Input className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                </FormItem>
                                            )} />
                                        </div>

                                        <div className="pt-8 border-t border-slate-100 space-y-8">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Phone className="w-5 h-5 text-[#A11D1D]" />
                                                <h2 className="text-xl font-black text-gray-900 tracking-tight">Phone</h2>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <FormField control={control} name="countryCode" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Country Code:*</FormLabel>
                                                        <FormControl><Input placeholder="+971" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )} />
                                                <FormField control={control} name="phoneNumber" render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Phone Number:*</FormLabel>
                                                        <FormControl><Input placeholder="Enter number" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                        <FormMessage className="text-xs font-bold" />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-slate-100 space-y-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Briefcase className="w-5 h-5 text-[#A11D1D]" />
                                                <h2 className="text-xl font-black text-gray-900 tracking-tight">Agent Code</h2>
                                            </div>
                                            <FormField control={control} name="agentCode" render={({ field }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Agent Code (Optional):</FormLabel>
                                                    <FormControl><Input placeholder="Enter code if provided" className="rounded-xl border-slate-200 h-14 font-medium" {...field} /></FormControl>
                                                </FormItem>
                                            )} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-slate-50/50 rounded-3xl border border-slate-100 p-8 md:p-12 space-y-10">
                                        <div className="flex justify-between items-center border-b border-slate-200 pb-6">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Review Details</h3>
                                            <button type="button" onClick={() => setStep(1)} className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline">Edit</button>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Full Name</p>
                                                    <p className="font-bold text-gray-900">{formData.givenName} {formData.middleName} {formData.familyName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Date of Birth</p>
                                                    <p className="font-bold text-gray-900">{formData.dobDay}/{formData.dobMonth}/{formData.dobYear}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Contact</p>
                                                    <p className="font-bold text-gray-900">{formData.countryCode} {formData.phoneNumber}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                                                    <p className="font-bold text-gray-900">{formData.city}, {formData.country}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#A11D1D]/5 rounded-3xl p-8 md:p-12 border border-[#A11D1D]/10 space-y-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 font-bold">Registration Fee:</span>
                                            <span className="text-2xl font-black text-[#A11D1D]">AED 1,200</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Service Tax (5%):</span>
                                            <span className="font-bold text-gray-900">AED 60</span>
                                        </div>
                                        <div className="h-px bg-[#A11D1D]/10"></div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-black text-gray-900 uppercase tracking-tight">Total Amount:</span>
                                            <span className="text-3xl font-black text-[#A11D1D]">AED 1,260</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Footer */}
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
                                    className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-12 py-8 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 ml-auto flex items-center gap-3 group transition-all"
                                >
                                    {step === 3 ? "Confirm & Pay" : "Continue to Next"}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
