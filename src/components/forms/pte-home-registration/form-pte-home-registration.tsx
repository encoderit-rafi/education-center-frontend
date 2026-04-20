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
import { Checkbox } from "@/components/ui/checkbox";

type WorkshopOption = {
    label: string;
    price: number;
};

const workshops: WorkshopOption[] = [
    { label: "2 hours workshop", price: 600 },
    { label: "4 hours workshop", price: 1000 },
    { label: "6 hours workshop", price: 1350 },
    { label: "8 hours workshop", price: 1600 },
];

export default function FormPTEHomeRegistration() {
    const [formData, setFormData] = useState({
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
        termsAccepted: false,
        permissionLogIntoAccount: false,
        infoCorrect: false,
        workshop: "",
    });

    const EXAM_FEE = 1230;
    const SERVICE_FEE = 100; // Assuming a base service fee
    const VAT_RATE = 0.05;

    const selectedWorkshop = workshops.find((w) => w.label === formData.workshop);
    const workshopPrice = selectedWorkshop?.price || 0;

    // Calculations
    const serviceFeeWithVAT = SERVICE_FEE * (1 + VAT_RATE);
    const workshopVAT = workshopPrice * VAT_RATE;
    const total = EXAM_FEE + SERVICE_FEE + (SERVICE_FEE * VAT_RATE) + workshopPrice + workshopVAT;

    const updateField = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        className="w-full h-full object-cover"
                        alt="Modern high-end university library interior"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4MVsRUAf7ZsJAIO9JeORu68_2FAzAvcF-_yI7jbx0w-xiabblmgx6otP5lt2kFnaDKe_Q89HH8kcVwhhwADijkL-yMaBmEqYpsfbGpCoOLZyYIBXSHNggVKmv4s3A4OVIytI1HhCa1cOUQpQJJ6aBj27UJAaqgH_7ZwhdPd57fOp6BKgCvOecAXymMOiUQd54zPB28OAp7wmM8ndZ-mpmWlN1xjxYn188BxiecgkCw-y_YL45q2UxusCGu4TVNldzVzx_CUlffBT"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline">
                        PTE Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Start your journey to global academic success with a seamless registration process designed for future scholars.
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
                            { step: 3, label: "Contact", active: false },
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Country of Issue</Label>
                                    <Select onValueChange={(v) => updateField("countryOfIssue", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="UAE">United Arab Emirates</SelectItem>
                                            <SelectItem value="India">India</SelectItem>
                                            <SelectItem value="Pakistan">Pakistan</SelectItem>
                                            <SelectItem value="UK">United Kingdom</SelectItem>
                                            <SelectItem value="USA">United States</SelectItem>
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

                        {/* Workshop Selection (Added for functionality) */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">school</span>
                                Preparation Workshop
                            </h2>
                            <div className="flex flex-col gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Select Workshop (Optional)</Label>
                                <Select onValueChange={(v) => updateField("workshop", v)}>
                                    <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                        <SelectValue placeholder="Add a workshop to your registration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {workshops.map((w) => (
                                            <SelectItem key={w.label} value={w.label}>
                                                {w.label} - AED {w.price}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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

                        {/* User Insight */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <div className="flex flex-col gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">How did you hear about the test?</Label>
                                <Select onValueChange={(v) => updateField("referralSource", v)}>
                                    <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                        <SelectValue placeholder="Select Source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Social Media">Social Media</SelectItem>
                                        <SelectItem value="Google Search">Google Search</SelectItem>
                                        <SelectItem value="Friend or Colleague">Friend or Colleague</SelectItem>
                                        <SelectItem value="Education Agent">Education Agent</SelectItem>
                                        <SelectItem value="Institution Website">Institution Website</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Preferences */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <div className="flex flex-col gap-4">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Would you like to receive updates and special offers?</Label>
                                <RadioGroup
                                    className="flex gap-8"
                                    onValueChange={(v) => updateField("receiveUpdates", v)}
                                    value={formData.receiveUpdates}
                                >
                                    {["Yes", "No"].map((opt) => (
                                        <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                            <RadioGroupItem value={opt} id={`updates-${opt}`} className="border-primary text-primary" />
                                            <Label htmlFor={`updates-${opt}`} className="font-medium group-hover:text-primary transition-colors cursor-pointer">{opt}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
                                Terms & Conditions
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { key: "termsAccepted", label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                    { key: "permissionLogIntoAccount", label: "I hereby give permission to the center to log into my account to complete my registration." },
                                    { key: "infoCorrect", label: "I hereby acknowledge that all information written above is correct and true. I understand that any incorrect information I have provided above is my own responsibility and not of the test center." },
                                ].map((item) => (
                                    <div key={item.key} className="flex items-start space-x-3 group cursor-pointer">
                                        <Checkbox
                                            id={item.key}
                                            className="mt-1 border-primary data-[state=checked]:bg-primary transition-all scale-110"
                                            checked={(formData as any)[item.key]}
                                            onCheckedChange={(checked) => updateField(item.key, !!checked)}
                                        />
                                        <Label
                                            htmlFor={item.key}
                                            className="text-sm text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors cursor-pointer select-none"
                                        >
                                            {item.label}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fee Summary */}
                        <div className="pt-8 border-t border-outline-variant/10">
                            <div className="bg-slate-900 rounded-2xl p-8 space-y-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-primary/20"></div>

                                <h3 className="text-lg font-extrabold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined">payments</span>
                                    Fee Summary
                                </h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-slate-400">PTE Home A2 / Core Exam</span>
                                        <span className="font-bold text-white tracking-tight">AED {EXAM_FEE.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-slate-400">Test Registration Service Fee (Inc. 5% VAT)</span>
                                        <span className="font-bold text-white tracking-tight">AED {serviceFeeWithVAT.toFixed(2)}</span>
                                    </div>
                                    {selectedWorkshop && (
                                        <div className="flex justify-between items-center text-sm animate-in zoom-in-95 duration-300">
                                            <span className="font-medium text-slate-400">Preparation Workshop ({selectedWorkshop.label})</span>
                                            <span className="font-bold text-white tracking-tight">AED {workshopPrice.toLocaleString()}</span>
                                        </div>
                                    )}
                                    {workshopVAT > 0 && (
                                        <div className="flex justify-between items-center text-sm text-slate-500">
                                            <span className="font-medium">Workshop 5% VAT</span>
                                            <span className="font-bold tracking-tight">AED {workshopVAT.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="h-px bg-slate-800 my-6"></div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-white">Total Amount</span>
                                        <div className="text-3xl font-black text-primary tracking-tighter">
                                            AED {total.toFixed(2)}
                                        </div>
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
                                className="bg-primary text-white px-12 py-7 rounded-xl font-extrabold text-lg active:scale-95 transform transition-all hover:bg-primary-variant hover:shadow-2xl hover:shadow-primary/20 flex items-center gap-3 w-full md:w-auto"
                            >
                                Proceed to Review
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}