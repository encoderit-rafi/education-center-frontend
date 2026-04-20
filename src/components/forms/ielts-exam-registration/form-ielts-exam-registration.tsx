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
import { cn } from "@/lib/utils";

export default function FormIELTSRegistration() {
    const [formData, setFormData] = useState({
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
    });

    const EXAM_FEE = 1400;
    const SERVICE_FEE = 100;
    const COURSE_BASE_PRICE = 4000;
    const DISCOUNT_RATE = 0.30;
    const VAT_RATE = 0.05;

    // Workshop pricing placeholders
    const workshopPriceMap: Record<string, number> = {
        "5 Hours": 250,
        "10 Hours": 500,
    };

    const coursePrice = formData.selectedCourse ? COURSE_BASE_PRICE : 0;
    const discount = formData.selectedCourse ? (coursePrice * DISCOUNT_RATE) : 0;
    const workshopPrice = formData.selectedWorkshop ? (workshopPriceMap[formData.workshopHours] || 0) : 0;

    const taxableAmount = SERVICE_FEE + (coursePrice - discount) + workshopPrice;
    const vat = taxableAmount * VAT_RATE;

    const total = EXAM_FEE + taxableAmount + vat;

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
                    <span className="text-primary-fixed font-bold text-sm tracking-widest uppercase mb-4 block animate-in fade-in slide-in-from-top-4 duration-1000">IELTS Academic & General</span>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline uppercase">
                        Ielts Exam Registration
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Start your journey to global success with a registration process optimized for international candidates.
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
                            { step: 3, label: "Document", active: false },
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

                        {/* Test Selection */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">assignment</span>
                                Test Selection
                            </h2>
                            <div className="flex flex-col gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">IELTS Test Module <span className="text-primary">*</span></Label>
                                <Select onValueChange={(v) => updateField("testModule", v)}>
                                    <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                        <SelectValue placeholder="Select Module" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="academic">Academic</SelectItem>
                                        <SelectItem value="general">General Training</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">person</span>
                                Personal Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Given name(s) <span className="text-primary">*</span></Label>
                                    <Input
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4"
                                        placeholder="As per passport"
                                        value={formData.givenNames}
                                        onChange={(e) => updateField("givenNames", e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Surname(s) <span className="text-primary">*</span></Label>
                                    <Input
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4"
                                        placeholder="As per passport"
                                        value={formData.surnames}
                                        onChange={(e) => updateField("surnames", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Date of Birth <span className="text-primary">*</span></Label>
                                    <Select onValueChange={(v) => updateField("dobDay", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 31 }, (_, i) => (
                                                <SelectItem key={i + 1} value={String(i + 1)}>{i + 1 < 10 ? `0${i + 1}` : i + 1}</SelectItem>
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
                                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
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
                                            {Array.from({ length: 80 }, (_, i) => (
                                                <SelectItem key={2024 - i} value={String(2024 - i)}>{2024 - i}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col gap-4">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Gender <span className="text-primary">*</span></Label>
                                    <RadioGroup
                                        className="flex gap-8"
                                        onValueChange={(v) => updateField("gender", v)}
                                        value={formData.gender}
                                    >
                                        {["Male", "Female", "Other"].map((g) => (
                                            <div key={g} className="flex items-center space-x-2 group cursor-pointer">
                                                <RadioGroupItem value={g} id={`gender-${g}`} className="border-primary text-primary" />
                                                <Label htmlFor={`gender-${g}`} className="font-medium group-hover:text-primary transition-colors cursor-pointer">{g}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Select Test Timing <span className="text-primary">*</span></Label>
                                    <Select onValueChange={(v) => updateField("testTiming", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Preferred Time" />
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

                            {/* CD-IELTS History */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-10 mt-8">
                                <div className="space-y-4">
                                    <Label className="text-sm font-bold text-on-background">Have you taken the CD-IELTS Test before? <span className="font-normal text-slate-500">(Yes / No)</span></Label>
                                    <RadioGroup className="flex gap-8" onValueChange={(v) => updateField("takenBefore", v)}>
                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                            <RadioGroupItem value="yes" id="taken-yes" className="border-primary text-primary" />
                                            <Label htmlFor="taken-yes" className="font-medium group-hover:text-primary transition-colors cursor-pointer">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                            <RadioGroupItem value="no" id="taken-no" className="border-primary text-primary" />
                                            <Label htmlFor="taken-no" className="font-medium group-hover:text-primary transition-colors cursor-pointer">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {formData.takenBefore === "yes" && (
                                    <div className="space-y-10 animate-in slide-in-from-left-4 duration-500 overflow-hidden">
                                        <div className="h-px bg-slate-200"></div>
                                        <div className="space-y-4">
                                            <Label className="text-sm font-bold text-on-background">Was it less than 2 years? <span className="font-normal text-slate-500">(Yes / No / I do not know)</span></Label>
                                            <RadioGroup className="flex flex-wrap gap-8" onValueChange={(v) => updateField("lessThan2Years", v)}>
                                                {["Yes", "No", "I do not know"].map(opt => (
                                                    <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value={opt} id={`years-${opt}`} className="border-primary text-primary" />
                                                        <Label htmlFor={`years-${opt}`} className="font-medium group-hover:text-primary transition-colors cursor-pointer">{opt}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                        <div className="space-y-4 border-t border-slate-200 pt-10">
                                            <Label className="text-sm font-bold text-on-background">Do you have an existing IELTS account? <span className="font-normal text-slate-500">(Yes / No / I forgot)</span></Label>
                                            <RadioGroup className="flex flex-wrap gap-8" onValueChange={(v) => updateField("existingAccount", v)}>
                                                {["Yes", "No", "I forgot account details"].map(opt => (
                                                    <div key={opt} className="flex items-center space-x-2 group cursor-pointer">
                                                        <RadioGroupItem value={opt} id={`acc-${opt}`} className="border-primary text-primary" />
                                                        <Label htmlFor={`acc-${opt}`} className="font-medium group-hover:text-primary transition-colors cursor-pointer">{opt}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Background Information */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">school</span>
                                Background Information
                            </h2>
                            <div className="flex flex-col gap-4">
                                <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Level of education completed</Label>
                                <RadioGroup
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    onValueChange={(v) => updateField("educationLevel", v)}
                                    value={formData.educationLevel}
                                >
                                    {[
                                        "Secondary (up to 16 years)",
                                        "Secondary (16-19 years)",
                                        "Degree (or equivalent)",
                                        "Post-graduate"
                                    ].map(edu => (
                                        <label key={edu} className={cn(
                                            "flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border group",
                                            formData.educationLevel === edu ? "bg-primary/5 border-primary/20" : "bg-slate-50 border-transparent hover:border-primary/20"
                                        )}>
                                            <RadioGroupItem
                                                value={edu}
                                                id={`edu-${edu}`}
                                                className="border-primary text-primary"
                                            />
                                            <Label htmlFor={`edu-${edu}`} className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors cursor-pointer">
                                                {edu}
                                            </Label>
                                        </label>
                                    ))}
                                </RadioGroup>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Occupation level</Label>
                                    <Select onValueChange={(v) => updateField("occupationLevel", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Student", "Self-employed", "Employer/Partner", "Employee (Senior level)", "Employee (Middle/Junior level)", "Homeworker", "Retired", "Other"].map(o => (
                                                <SelectItem key={o} value={o}>{o}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Occupation sector</Label>
                                    <Select onValueChange={(v) => updateField("occupationSector", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Sector" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Administrative Services", "Banking and Finance", "Construction Industries", "Education", "Arts and Entertainment"].map(s => (
                                                <SelectItem key={s} value={s}>{s}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Why are you taking the test?</Label>
                                    <Select onValueChange={(v) => updateField("reasonForTest", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Reason" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Higher education extended course", "Immigration", "Employment", "Personal reasons"].map(r => (
                                                <SelectItem key={r} value={r}>{r}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Destination Country</Label>
                                    <Select onValueChange={(v) => updateField("destinationCountry", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Australia", "Canada", "United Kingdom", "United States of America"].map(c => (
                                                <SelectItem key={c} value={c}>{c}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* About You */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">language</span>
                                About you
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">First language</Label>
                                    <Select onValueChange={(v) => updateField("firstLanguage", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Arabic", "English", "French", "Spanish"].map(l => (
                                                <SelectItem key={l} value={l}>{l}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Years studying English</Label>
                                    <Select onValueChange={(v) => updateField("yearsStudyingEnglish", v)}>
                                        <SelectTrigger className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20">
                                            <SelectValue placeholder="Select Years" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["Less than 1", "2", "3", "4+"].map(y => (
                                                <SelectItem key={y} value={y}>{y}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <p className="text-[10px] text-slate-500 italic mt-1 font-medium">Your answer to this question has no impact on your test score</p>
                                </div>
                            </div>
                        </div>

                        {/* Add-on services */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <div className="bg-slate-50 rounded-2xl p-8 space-y-8 border border-slate-100 overflow-hidden relative group">
                                <h3 className="text-lg font-extrabold uppercase tracking-widest text-primary flex items-center gap-2 relative z-10">
                                    <span className="material-symbols-outlined">library_add</span>
                                    Add-on services
                                </h3>
                                <div className="space-y-4 relative z-10">
                                    <label className={cn(
                                        "flex items-center gap-4 p-5 rounded-xl border transition-all cursor-pointer group/item",
                                        formData.selectedCourse ? "bg-primary/5 border-primary/30" : "bg-white border-slate-200 hover:border-primary/20"
                                    )}>
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                className="peer appearance-none w-6 h-6 rounded-md border-2 border-slate-300 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                                type="checkbox"
                                                checked={formData.selectedCourse}
                                                onChange={(e) => updateField("selectedCourse", e.target.checked)}
                                            />
                                            <span className="material-symbols-outlined absolute text-white text-sm opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity select-none font-black">check</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-extrabold text-on-surface">TEPTH IELTS (One-to-One Course)</span>
                                            <span className="text-xs font-bold text-primary">AED {COURSE_BASE_PRICE.toLocaleString()}</span>
                                        </div>
                                    </label>

                                    <div className={cn(
                                        "grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl border transition-all",
                                        formData.selectedWorkshop ? "bg-primary/5 border-primary/30" : "bg-white border-slate-200 hover:border-primary/20"
                                    )}>
                                        <label className="flex items-center gap-4 cursor-pointer md:col-span-1 group/item">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    className="peer appearance-none w-6 h-6 rounded-md border-2 border-slate-300 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                                    type="checkbox"
                                                    checked={formData.selectedWorkshop}
                                                    onChange={(e) => updateField("selectedWorkshop", e.target.checked)}
                                                />
                                                <span className="material-symbols-outlined absolute text-white text-sm opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity select-none font-black">check</span>
                                            </div>
                                            <span className="text-sm font-extrabold text-on-surface">IELTS Exam Workshop</span>
                                        </label>
                                        <div className="md:col-span-2">
                                            <Select
                                                disabled={!formData.selectedWorkshop}
                                                onValueChange={(v) => updateField("workshopHours", v)}
                                            >
                                                <SelectTrigger className="bg-slate-50/50 border-slate-200 h-10">
                                                    <SelectValue placeholder="Select number of hours" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="5 Hours">5 Hours (AED 250)</SelectItem>
                                                    <SelectItem value="10 Hours">10 Hours (AED 500)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-primary font-black italic tracking-wide mt-2">
                                        * A 30% discount is granted on the course fee (not workshop) when selecting one of our courses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Identity & Origin Preview */}
                        <div className="pt-8 border-t border-outline-variant/10 space-y-8">
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                Identity & Origin
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Country of Birth</Label>
                                    <Input
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4"
                                        placeholder="Select Country"
                                        onChange={(e) => updateField("countryOfBirth", e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Country of Citizenship</Label>
                                    <Input
                                        className="bg-slate-50 border-none rounded-lg h-14 focus:ring-2 focus:ring-primary/20 transition-all px-4"
                                        placeholder="Select Citizenship"
                                        onChange={(e) => updateField("countryOfCitizenship", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Fee Summary */}
                        <div className="pt-8 border-t border-outline-variant/10">
                            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group border-l-[6px] border-primary">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
                                    <div className="space-y-6 flex-1">
                                        <h4 className="text-lg font-black uppercase tracking-widest text-primary">Booking Summary</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-slate-300 text-sm">
                                                <span className="font-medium uppercase tracking-tighter">IELTS {formData.testModule || ""} Fee</span>
                                                <span className="font-bold text-white tracking-widest">AED {EXAM_FEE.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-slate-300 text-sm">
                                                <span className="font-medium uppercase tracking-tighter">Registration Service Fee</span>
                                                <span className="font-bold text-white tracking-widest">AED {SERVICE_FEE.toLocaleString()}</span>
                                            </div>

                                            {formData.selectedCourse && (
                                                <div className="flex justify-between items-center text-primary text-sm font-black">
                                                    <span className="uppercase tracking-tighter">Course Add-on (30% Discount applied)</span>
                                                    <span className="tracking-widest">AED {(coursePrice - discount).toLocaleString()}</span>
                                                </div>
                                            )}

                                            {formData.selectedWorkshop && workshopPrice > 0 && (
                                                <div className="flex justify-between items-center text-slate-300 text-sm">
                                                    <span className="font-medium uppercase tracking-tighter">Workshop ({formData.workshopHours})</span>
                                                    <span className="font-bold text-white tracking-widest">AED {workshopPrice.toLocaleString()}</span>
                                                </div>
                                            )}

                                            <div className="flex justify-between items-center text-slate-300 text-sm border-t border-slate-800 pt-3">
                                                <span className="font-medium uppercase tracking-tighter">VAT 5%</span>
                                                <span className="font-bold text-white tracking-widest">AED {vat.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right w-full md:w-auto h-full flex flex-col justify-end">
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

                        {/* Terms & Conditions */}
                        <div className="pt-8 space-y-6">
                            {[
                                { key: "termsAccepted", label: "I hereby acknowledge that I have read and understood the terms and conditions outlined above." },
                                { key: "permissionLogIntoAccount", label: "I hereby give permission to the center to log into my account to complete my registration." },
                                { key: "infoCorrect", label: "I hereby acknowledge that all information written above is correct and true." },
                            ].map((item) => (
                                <div key={item.key} className="flex items-start space-x-3 group cursor-pointer">
                                    <div className="relative flex items-center justify-center mt-1">
                                        <input
                                            type="checkbox"
                                            id={item.key}
                                            className="peer appearance-none w-5 h-5 border-2 border-primary/30 rounded bg-white checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                            checked={(formData as any)[item.key]}
                                            onChange={(e) => updateField(item.key, e.target.checked)}
                                        />
                                        <span className="material-symbols-outlined absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity select-none font-black">check</span>
                                    </div>
                                    <Label
                                        htmlFor={item.key}
                                        className="text-sm text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors cursor-pointer select-none font-medium"
                                    >
                                        {item.label}
                                    </Label>
                                </div>
                            ))}
                        </div>

                        {/* Form Actions */}
                        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                            <button className="text-primary font-bold hover:underline underline-offset-8 transition-all px-4 py-2" type="button">Save for Later</button>
                            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                                <Button className="flex-1 h-16 bg-slate-100 hover:bg-slate-200 text-slate-600 font-extrabold rounded-xl border-none">Previous</Button>
                                <Button
                                    type="submit"
                                    className="flex-1 h-16 bg-primary text-white px-12 py-7 rounded-xl font-black text-lg active:scale-95 transform transition-all hover:bg-[#8e1214] hover:shadow-2xl hover:shadow-primary/20 flex items-center justify-center gap-3 group"
                                >
                                    Proceed to Identity
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Button>
                            </div>
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
