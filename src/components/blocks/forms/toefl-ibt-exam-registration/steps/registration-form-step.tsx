"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { User, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import Stepper from "@/components/stepper";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { TToeflIbtSchema } from "../_type";

interface RegistrationFormStepProps {
    form: UseFormReturn<TToeflIbtSchema>;
    onSubmit: (data: TToeflIbtSchema) => void;
    onInvalid: (errors: any) => void;
    onBack: () => void;
}

export function RegistrationFormStep({
    form,
    onSubmit,
    onInvalid,
    onBack,
}: RegistrationFormStepProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = form;

    const formData = watch();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="space-y-12 animate-in fade-in duration-500"
        >
            {/* Step 1: Personal Information */}
            <div className="space-y-8">
                <Stepper step={1}>Personal Information</Stepper>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Field data-invalid={!!errors.givenName}>
                        <FieldLabel required>First / Given Name</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Enter your first name"
                                {...register("givenName")}
                            />
                            <FieldError errors={[errors.givenName]} />
                            <FieldDescription>
                                Your name must match the ID you show when taking the test.
                            </FieldDescription>
                            <div className="flex items-center gap-2 mt-2">
                                <Checkbox
                                    id="noGivenOrLastName"
                                    checked={formData.noGivenOrLastName}
                                    onCheckedChange={(val) => setValue("noGivenOrLastName", val as boolean)}
                                />
                                <Label htmlFor="noGivenOrLastName" className="text-xs font-light">
                                    I do not have a first/given or last/family name
                                </Label>
                            </div>
                        </FieldContent>
                    </Field>

                    <Field>
                        <FieldLabel>Middle Name</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Optional"
                                {...register("middleName")}
                            />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.familyName}>
                        <FieldLabel required>Last / Family Name</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Enter your last name"
                                {...register("familyName")}
                            />
                            <FieldError errors={[errors.familyName]} />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.dobDay || !!errors.dobMonth || !!errors.dobYear}>
                        <FieldLabel required>Date of Birth</FieldLabel>
                        <FieldContent>
                            <div className="grid grid-cols-3 gap-2">
                                <Select onValueChange={(val) => setValue("dobDay", val as any)} value={formData.dobDay}>
                                    <SelectTrigger className="h-11 rounded-md border-slate-200 bg-white">
                                        <SelectValue placeholder="Day" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-80">
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                {i + 1}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={(val) => setValue("dobMonth", val as any)} value={formData.dobMonth}>
                                    <SelectTrigger className="h-11 rounded-md border-slate-200 bg-white">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-80">
                                        {months.map((m, i) => (
                                            <SelectItem key={m} value={(i + 1).toString()}>
                                                {m}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={(val) => setValue("dobYear", val as any)} value={formData.dobYear}>
                                    <SelectTrigger className="h-11 rounded-md border-slate-200 bg-white">
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-80">
                                        {Array.from({ length: 100 }, (_, i) => (
                                            <SelectItem key={2024 - i} value={(2024 - i).toString()}>
                                                {2024 - i}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <FieldError errors={[errors.dobDay, errors.dobMonth, errors.dobYear]} />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.gender}>
                        <FieldLabel required>Gender</FieldLabel>
                        <FieldContent>
                            <Select onValueChange={(val) => setValue("gender", val as any)} value={formData.gender}>
                                <SelectTrigger className="h-11 rounded-md border-slate-200 bg-white">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FieldError errors={[errors.gender]} />
                        </FieldContent>
                    </Field>
                </div>
            </div>

            {/* Step 2: Address & Contact */}
            <div className="space-y-8 pt-8 border-t border-slate-100">
                <Stepper step={2}>Address & Contact</Stepper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Field data-invalid={!!errors.country}>
                        <FieldLabel required>Country</FieldLabel>
                        <FieldContent>
                            <CountryDropdown
                                placeholder="Select country"
                                value={formData.country}
                                onChange={(c) => setValue("country", c.name)}
                                className="rounded-md bg-white border-slate-200 h-11"
                            />
                            <FieldError errors={[errors.country]} />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.streetAddress1}>
                        <FieldLabel required>Street Address</FieldLabel>
                        <FieldContent className="space-y-2">
                            <Input
                                placeholder="Address Line 1"
                                {...register("streetAddress1")}
                            />
                            <Input
                                placeholder="Address Line 2 (Optional)"
                                {...register("streetAddress2")}
                            />
                            <div className="flex items-center gap-2 mt-2">
                                <Checkbox
                                    id="moreAddressLines"
                                    checked={formData.moreAddressLines}
                                    onCheckedChange={(val) => setValue("moreAddressLines", val as boolean)}
                                />
                                <Label htmlFor="moreAddressLines" className="text-xs font-light">
                                    I need more address lines
                                </Label>
                            </div>
                            <FieldError errors={[errors.streetAddress1]} />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.city}>
                        <FieldLabel required>Town / City</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Enter your city"
                                {...register("city")}
                            />
                            <FieldError errors={[errors.city]} />
                        </FieldContent>
                    </Field>

                    <Field>
                        <FieldLabel>State / Province</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Optional"
                                {...register("state")}
                            />
                        </FieldContent>
                    </Field>

                    <Field>
                        <FieldLabel>Postal Code / ZIP</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Optional"
                                {...register("postalCode")}
                            />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.phoneNumber}>
                        <FieldLabel required>Phone Number</FieldLabel>
                        <FieldContent>
                            <PhoneInput
                                value={formData.phoneNumber}
                                onChange={(val) => setValue("phoneNumber", val)}
                                defaultCountry="AE"
                                className="h-11"
                            />
                            <FieldError errors={[errors.phoneNumber]} />
                        </FieldContent>
                    </Field>

                    <Field>
                        <FieldLabel>Agent Code (Optional)</FieldLabel>
                        <FieldContent>
                            <Input
                                placeholder="Enter code if provided"
                                {...register("agentCode")}
                            />
                        </FieldContent>
                    </Field>
                </div>
            </div>

            {/* Form Actions */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
                <Button
                    variant="ghost"
                    type="button"
                    onClick={onBack}
                    className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all"
                >
                    Back
                </Button>
                <Button
                    type="submit"
                    className="bg-[#A11D1D] hover:bg-[#8A1818] text-white px-10 h-14 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#A11D1D]/10 flex items-center gap-3 group transition-all"
                >
                    Continue to Review
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </form>
    );
}
