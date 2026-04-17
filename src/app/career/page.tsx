import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle2, Info } from "lucide-react";

export default function CareerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <section className="relative w-full h-[55vh] min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us/infrastructure-center.png"
                        alt="Work at TEPTH"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className={cn(
                            "text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]",
                            "font-heading"
                        )}>
                            Join Our <br />
                            <span className="italic text-[#A11D1D]">Global Team.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                            We are looking for passionate individuals to help us redefine educational excellence and testing standards in the UAE.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Left Column: Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-white p-12 md:p-16 rounded-sm shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#A11D1D]" />

                                <div className="mb-12">
                                    <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tighter mb-4">Personal Information</h2>
                                    <p className="text-gray-500 text-sm">Please fill out the form below and attach your latest CV to apply.</p>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Full Name */}
                                        <div className="md:col-span-2 space-y-2">
                                            <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name:*</Label>
                                            <Input id="name" placeholder="Enter your full name" className="rounded-none border-gray-200 focus:border-[#A11D1D] focus:ring-[#A11D1D] h-12" required />
                                        </div>

                                        {/* Gender */}
                                        <div className="space-y-2">
                                            <Label htmlFor="gender" className="text-xs font-black uppercase tracking-widest text-gray-500">Select Gender:*</Label>
                                            <Select>
                                                <SelectTrigger className="rounded-none border-gray-200 focus:ring-[#A11D1D] h-12">
                                                    <SelectValue placeholder="-Select Gender-" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* DOB */}
                                        <div className="space-y-2">
                                            <Label htmlFor="dob" className="text-xs font-black uppercase tracking-widest text-gray-500">Date of Birth:*</Label>
                                            <Input id="dob" type="date" className="rounded-none border-gray-200 focus:border-[#A11D1D] h-12" required />
                                        </div>

                                        {/* Nationality */}
                                        <div className="space-y-2">
                                            <Label htmlFor="nationality" className="text-xs font-black uppercase tracking-widest text-gray-500">Nationality:*</Label>
                                            <Select>
                                                <SelectTrigger className="rounded-none border-gray-200 focus:ring-[#A11D1D] h-12">
                                                    <SelectValue placeholder="-Select Country-" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                    <SelectItem value="us">United States</SelectItem>
                                                    {/* Add more as needed */}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address:*</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="rounded-none border-gray-200 h-12" required />
                                        </div>

                                        {/* Phone - Grid within Grid */}
                                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-xs font-black uppercase tracking-widest text-gray-500">Country Code:*</Label>
                                                <Select>
                                                    <SelectTrigger className="rounded-none border-gray-200 h-12">
                                                        <SelectValue placeholder="+971" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="971">UAE (+971)</SelectItem>
                                                        <SelectItem value="1">USA (+1)</SelectItem>
                                                        <SelectItem value="44">UK (+44)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="md:col-span-2 space-y-2">
                                                <Label htmlFor="mobile" className="text-xs font-black uppercase tracking-widest text-gray-500">Mobile No:*</Label>
                                                <Input id="mobile" placeholder="Ex: 50 123 4567" className="rounded-none border-gray-200 h-12" required />
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="md:col-span-2 space-y-2">
                                            <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest text-gray-500">Residential Address:*</Label>
                                            <Input id="address" placeholder="Enter your full address" className="rounded-none border-gray-200 h-12" required />
                                        </div>

                                        {/* Emirate/City */}
                                        <div className="space-y-2">
                                            <Label htmlFor="city" className="text-xs font-black uppercase tracking-widest text-gray-500">Emirate/City:*</Label>
                                            <Input id="city" placeholder="Dubai" className="rounded-none border-gray-200 h-12" required />
                                        </div>

                                        {/* P.O. Box */}
                                        <div className="space-y-2">
                                            <Label htmlFor="pobox" className="text-xs font-black uppercase tracking-widest text-gray-500">P.O. Box:</Label>
                                            <Input id="pobox" placeholder="123456" className="rounded-none border-gray-200 h-12" />
                                        </div>

                                        {/* File Upload */}
                                        <div className="md:col-span-2 space-y-4 pt-6">
                                            <Label className="text-xs font-black uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1">Attach your CV:</Label>
                                            <div className="border-2 border-dashed border-gray-200 p-10 flex flex-col items-center justify-center space-y-4 hover:border-[#A11D1D] transition-colors cursor-pointer group bg-gray-50/50">
                                                <Upload className="w-10 h-10 text-gray-300 group-hover:text-[#A11D1D] transition-colors" />
                                                <div className="text-center">
                                                    <p className="text-sm font-bold text-gray-600">Click to upload or drag and drop</p>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Only doc, docx or pdf file allowed</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mock CAPTCHA */}
                                        <div className="md:col-span-2 flex items-center gap-4 bg-gray-50 p-4 border border-gray-200 rounded-sm">
                                            <div className="p-4 bg-white border border-gray-200 rounded shadow-sm flex items-center gap-4">
                                                <div className="w-6 h-6 border-2 border-gray-200 rounded flex items-center justify-center cursor-pointer">
                                                    {/* Placeholder for checkbox */}
                                                </div>
                                                <span className="text-sm font-medium text-gray-600">I&apos;m not a robot</span>
                                                <div className="ml-8 flex flex-col items-center">
                                                    <Image src="/images/shared/recaptcha.png" alt="reCAPTCHA" width={30} height={30} className="opacity-50 grayscale" />
                                                    <span className="text-[8px] text-gray-400 mt-1">reCAPTCHA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full md:w-auto px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-none shadow-lg hover:shadow-xl transition-all">
                                        Submit Application
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column: Info */}
                        <aside className="lg:col-span-4 space-y-8">
                            <div className="bg-[#111827] text-white p-10 rounded-sm">
                                <h3 className="text-xl font-black mb-6 font-heading tracking-tight">Why TEPTH?</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Global Impact", desc: "Collaborate with international testing providers and experts." },
                                        { title: "Modern Environment", desc: "Work in the heart of Dubai Silicon Oasis with world-class facilities." },
                                        { title: "Continuous Growth", desc: "Professional development sessions and industry accreditation." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-[#A11D1D] shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-black uppercase text-white mb-1 tracking-widest">{item.title}</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 border border-gray-200 rounded-sm">
                                <div className="flex items-center gap-2 mb-6 text-[#A11D1D]">
                                    <Info className="w-5 h-5" />
                                    <h4 className="font-black uppercase tracking-widest text-[10px]">Important Note</h4>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                    Please ensure all information provided matches your official identification documents (Passport/Emirates ID). Candidates of all nationalities are encouraged to apply.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
