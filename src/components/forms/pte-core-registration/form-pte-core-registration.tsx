"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

type CourseOption = {
    id: string;
    label: string;
    price: number;
};

const courses: CourseOption[] = [
    { id: "group", label: "Group (In-person classroom-based course)", price: 1850 },
    { id: "semi-private", label: "Semi-Private (In-person classroom-based)", price: 2850 },
    { id: "private", label: "Private one-to-one (In-person classroom)", price: 4850 },
    { id: "online", label: "Private one-to-one (Online course)", price: 3850 },
];

export default function FormPTECoreRegistration() {
    const [formData, setFormData] = useState({
        givenNames: "",
        surnames: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        gender: "",
        testTiming: "",
        countryOfIssue: "",
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
        countryCode: "+971",
        telephone: "",
        email: "",
        selectedCourse: "",
    });

    const EXAM_FEE = 1450;
    const SERVICE_FEE = 5;
    const VAT_RATE = 0.05;

    const selectedCourse = courses.find((c) => c.id === formData.selectedCourse);
    const coursePrice = selectedCourse?.price || 0;
    const serviceVAT = SERVICE_FEE * VAT_RATE;
    const courseVAT = coursePrice * VAT_RATE;
    
    // Total calculation: Exam (No VAT) + Service (+ VAT) + Course (+ VAT)
    const total = EXAM_FEE + SERVICE_FEE + serviceVAT + coursePrice + courseVAT;

    const updateField = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        className="w-full h-full object-cover"
                        alt="Modern university library"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4MVsRUAf7ZsJAIO9JeORu68_2FAzAvcF-_yI7jbx0w-xiabblmgx6otP5lt2kFnaDKe_Q89HH8kcVwhhwADijkL-yMaBmEqYpsfbGpCoOLZyYIBXSHNggVKmv4s3A4OVIytI1HhCa1cOUQpQJJ6aBj27UJAaqgH_7ZwhdPd57fOp6BKgCvOecAXymMOiUQd54zPB28OAp7wmM8ndZ-mpmWlN1xjxYn188BxiecgkCw-y_YL45q2UxusCGu4TVNldzVzx_CUlffBT"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline uppercase">
                        PTE Core Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Fast-track your global immigration and career journey with PTE Core registration through TEPTH Academy.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(38,24,23,0.08)] p-8 md:p-12 border border-outline-variant/10">
                    
                    {/* Registration Stepper */}
                    <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4 no-scrollbar">
                        {[
                            { step: 1, label: "Personal", active: true },
                            { step: 2, label: "Identity", active: false },
                            { step: 3, label: "Background", active: false },
                            { step: 4, label: "Review", active: false },
                        ].map((item, idx, arr) => (
                            <div key={item.step} className="flex items-center flex-1 last:flex-none">
                                <div className="flex flex-col items-center min-w-[120px]">
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300",
                                        item.active ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-surface-container-high text-on-surface-variant"
                                    )}>
                                        {item.step}
                                    </div>
                                    <span className={cn(
                                        "text-xs uppercase tracking-widest font-bold transition-colors duration-300",
                                        item.active ? "text-primary" : "text-on-surface-variant"
                                    )}>
                                        {item.label}
                                    </span>
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="flex-1 h-[2px] bg-outline-variant opacity-30 min-w-[40px] mb-6 mx-4"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        {/* Personal Details */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">person</span>
                                Personal Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Given name(s)</Label>
                                    <Input 
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                        placeholder="As per your identification document"
                                        value={formData.givenNames}
                                        onChange={(e) => updateField("givenNames", e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Surname(s)</Label>
                                    <Input 
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                        placeholder="Family name"
                                        value={formData.surnames}
                                        onChange={(e) => updateField("surnames", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Date of Birth</Label>
                                    <Select onValueChange={(v) => updateField("dobDay", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 31 }, (_, i) => (
                                                <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Select onValueChange={(v) => updateField("dobMonth", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
                                                <SelectItem key={m} value={m}>{m}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Select onValueChange={(v) => updateField("dobYear", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 100 }, (_, i) => (
                                                <SelectItem key={2024 - i} value={String(2024 - i)}>{2024 - i}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col gap-4">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Gender</Label>
                                    <RadioGroup 
                                        className="flex gap-8" 
                                        onValueChange={(v) => updateField("gender", v)}
                                        value={formData.gender}
                                    >
                                        {["Male", "Female", "X/Other"].map((g) => (
                                            <div key={g} className="flex items-center space-x-2 group cursor-pointer">
                                                <RadioGroupItem value={g} id={`gender-${g}`} className="border-primary text-primary" />
                                                <Label htmlFor={`gender-${g}`} className="font-medium group-hover:text-primary transition-colors cursor-pointer">{g}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Select Test Timing</Label>
                                    <Select onValueChange={(v) => updateField("testTiming", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="--- Select Time ---" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                            <SelectItem value="12:45 PM">12:45 PM</SelectItem>
                                            <SelectItem value="03:30 PM">03:30 PM</SelectItem>
                                            <SelectItem value="06:15 PM">06:15 PM</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Identity & Origin */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                Identity & Origin
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { label: "Country of birth", key: "countryOfBirth" },
                                    { label: "Country of citizenship", key: "countryOfCitizenship" },
                                    { label: "Country of residence", key: "countryOfResidence" },
                                    { label: "Language mostly spoken at home", key: "languageSpoken" },
                                ].map((field) => (
                                    <div key={field.key} className="flex flex-col gap-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{field.label}</Label>
                                        <Select onValueChange={(v) => updateField(field.key, v)}>
                                            <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                                <SelectValue placeholder={field.key === "languageSpoken" ? "Select Language" : "Select Country"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {field.key === "languageSpoken" ? (
                                                    ["English", "Arabic", "Hindi", "Urdu", "Spanish", "French"].map(l => (
                                                        <SelectItem key={l} value={l}>{l}</SelectItem>
                                                    ))
                                                ) : (
                                                    ["UAE", "India", "Pakistan", "UK", "USA"].map(c => (
                                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Identification Document */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">badge</span>
                                Identification Document
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">ID Type</Label>
                                    <Select defaultValue="Passport" onValueChange={(v) => updateField("idType", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Passport" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Passport">Passport</SelectItem>
                                            <SelectItem value="National ID Card">National ID Card</SelectItem>
                                            <SelectItem value="Government Issued ID">Government Issued ID</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Document Number</Label>
                                    <Input 
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                        placeholder="Enter ID number"
                                        value={formData.documentNumber}
                                        onChange={(e) => updateField("documentNumber", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Upload Your Documents */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                Upload Your Documents
                            </h2>
                            <div className="flex flex-col gap-4">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Upload Your Passport Copy</Label>
                                <div className="flex flex-col gap-3">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100/80 hover:border-primary/30 cursor-pointer transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <span className="material-symbols-outlined text-slate-400 mb-2 group-hover:text-primary transition-colors">upload_file</span>
                                            <p className="text-sm font-bold text-primary">Choose File</p>
                                        </div>
                                        <input className="hidden" type="file" />
                                    </label>
                                    <p className="text-[10px] text-on-surface-variant font-medium">(max file size 128 MB) (pdf, docx, doc, png, jpeg)</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Information */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">quiz</span>
                                Background Information
                            </h2>
                            <div className="space-y-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Why are you taking the test?</Label>
                                    <Select onValueChange={(v) => updateField("purposeOfTest", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Purpose" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Immigration">Immigration / Permanent Residency</SelectItem>
                                            <SelectItem value="Work Visa">Work Visa</SelectItem>
                                            <SelectItem value="Higher Education">Higher Education</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Current Occupation</Label>
                                    <Input 
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                        placeholder="e.g. Software Engineer, Student" 
                                        value={formData.occupation}
                                        onChange={(e) => updateField("occupation", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">contact_phone</span>
                                Contact Information
                            </h2>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Address</Label>
                                    <Textarea 
                                        className="bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 transition-all p-4 resize-none" 
                                        placeholder="Street name, building, apartment..." 
                                        rows={3} 
                                        value={formData.fullAddress}
                                        onChange={(e) => updateField("fullAddress", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">City</Label>
                                    <Input 
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                        placeholder="Your city"
                                        value={formData.city}
                                        onChange={(e) => updateField("city", e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-1 flex flex-col gap-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Code</Label>
                                        <Input 
                                            className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                            placeholder="+971"
                                            value={formData.countryCode}
                                            onChange={(e) => updateField("countryCode", e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-3 flex flex-col gap-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Telephone number</Label>
                                        <Input 
                                            className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                            placeholder="Mobile for SMS" 
                                            type="tel"
                                            value={formData.telephone}
                                            onChange={(e) => updateField("telephone", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email / Username</Label>
                                <Input 
                                    className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4" 
                                    placeholder="example@domain.com" 
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Fee Summary */}
                        <div className="pt-8 border-t border-outline-variant/10">
                            <div className="bg-slate-50 rounded-2xl p-8 space-y-8 border border-slate-200">
                                <h3 className="text-lg font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined">payments</span>
                                    Fee Summary
                                </h3>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-on-surface">PTE-Core Exam Fee</span>
                                            <span className="text-xs text-on-surface-variant italic">(No VAT added on exam fee)</span>
                                        </div>
                                        <span className="font-bold text-on-surface text-lg">AED {EXAM_FEE.toLocaleString()}</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-on-surface-variant">Test Registration Service Fee</span>
                                            <span className="text-[10px] text-on-surface-variant">(Inc. 5% VAT)</span>
                                        </div>
                                        <span className="font-bold text-on-surface text-lg">AED {(SERVICE_FEE + serviceVAT).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Courses & Add-on Services */}
                                <div className="space-y-4 pt-6 border-t border-slate-200">
                                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-secondary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">school</span>
                                        Courses & Add-on Services
                                    </h4>
                                    
                                    <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-blue-50 text-blue-900 font-bold">
                                                <tr>
                                                    <th className="p-4 border-r border-slate-200">COURSES</th>
                                                    <th className="p-4 w-32 text-center border-r border-slate-200">Fees</th>
                                                    <th className="p-4 w-24 text-center">Select</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 text-on-surface">
                                                {courses.map((course) => (
                                                    <tr 
                                                        key={course.id} 
                                                        className={cn(
                                                            "transition-colors cursor-pointer",
                                                            formData.selectedCourse === course.id ? "bg-primary/5" : "hover:bg-slate-50"
                                                        )}
                                                        onClick={() => updateField("selectedCourse", formData.selectedCourse === course.id ? "" : course.id)}
                                                    >
                                                        <td className="p-4 border-r border-slate-200 font-medium">{course.label}</td>
                                                        <td className="p-4 text-center font-bold border-r border-slate-200 text-blue-900">AED {course.price.toLocaleString()}</td>
                                                        <td className="p-4 text-center">
                                                            <div className={cn(
                                                                "w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center transition-all",
                                                                formData.selectedCourse === course.id ? "bg-primary border-primary" : "border-slate-300"
                                                            )}>
                                                                {formData.selectedCourse === course.id && (
                                                                    <span className="material-symbols-outlined text-white text-xs">check</span>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-[10px] italic text-on-surface-variant">* Courses and workshops VAT applies (5%)</p>
                                </div>

                                {/* Total Calculation */}
                                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex flex-col gap-1 items-center md:items-start">
                                        <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Total Amount Due</span>
                                        <span className="text-[10px] text-on-surface-variant italic">All fees are in UAE Dirhams</span>
                                    </div>
                                    <div className="text-4xl font-black text-primary tracking-tighter">
                                        AED {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                            <button 
                                className="text-on-surface-variant font-bold hover:text-primary hover:underline underline-offset-8 transition-all px-4 py-2" 
                                type="button"
                            >
                                Save as Draft
                            </button>
                            <Button 
                                type="submit"
                                className="bg-primary text-white px-12 py-7 rounded-xl font-extrabold text-lg active:scale-95 transform transition-all hover:bg-[#8e1214] hover:shadow-2xl hover:shadow-primary/20 flex items-center gap-3 w-full md:w-auto group"
                            >
                                Proceed to Identity
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Trust Indicators Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-white p-8 rounded-2xl flex items-start gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="p-4 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-slate-900 mb-2">Secure Registration</h4>
                            <p className="text-slate-500 leading-relaxed text-sm">Your data is encrypted and handled according to international academic integrity standards.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl flex items-start gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="p-4 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-slate-900 mb-2">Need Assistance?</h4>
                            <p className="text-slate-500 leading-relaxed text-sm">Our support team is available 24/7 to help you with your registration process.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
