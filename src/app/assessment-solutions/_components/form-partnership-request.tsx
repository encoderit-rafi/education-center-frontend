"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";

const partnershipSchema = z.object({
    fullName: z.string().min(2, { message: "Full Name is required." }),
    institution: z.string().min(2, { message: "Institution is required." }),
    workEmail: z.string().email({ message: "Please provide a valid work email address." }),
    message: z.string().min(10, { message: "Please provide a detailed description." }),
});

type PartnershipFormValues = z.infer<typeof partnershipSchema>;

export default function FormPartnershipRequest() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PartnershipFormValues>({
        resolver: zodResolver(partnershipSchema),
        defaultValues: {
            fullName: "",
            institution: "",
            workEmail: "",
            message: "",
        },
    });

    const onSubmit = async (data: PartnershipFormValues) => {
        console.log("Partnership Request:", data);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-10 text-center space-y-4 shadow-sm h-full flex flex-col items-center justify-center min-h-[400px]">
                <span className="material-symbols-outlined text-6xl text-emerald-500">check_circle</span>
                <h2 className="text-2xl font-bold font-headline text-secondary">Request Received</h2>
                <p className="text-emerald-700 text-sm">
                    Thank you for reaching out. Our partnership team will review your inquiry and connect with your institution within 24-48 business hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field data-invalid={!!errors.fullName}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        {...register("fullName")}
                        id="fullName"
                        type="text"
                        placeholder="Enter Your Full Name"
                        className={cn(
                            "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                            errors.fullName ? "ring-1 ring-red-500 bg-red-50" : ""
                        )}
                    />
                    {errors.fullName && <FieldError className="mt-2">{errors.fullName.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.institution}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3" htmlFor="institution">
                        Institution
                    </label>
                    <input
                        {...register("institution")}
                        id="institution"
                        type="text"
                        placeholder="Enter Your Institution Name"
                        className={cn(
                            "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                            errors.institution ? "ring-1 ring-red-500 bg-red-50" : ""
                        )}
                    />
                    {errors.institution && <FieldError className="mt-2">{errors.institution.message}</FieldError>}
                </Field>
            </div>

            <Field data-invalid={!!errors.workEmail}>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3" htmlFor="workEmail">
                    Work Email
                </label>
                <input
                    {...register("workEmail")}
                    id="workEmail"
                    type="email"
                    placeholder="Enter Your Work Email"
                    className={cn(
                        "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                        errors.workEmail ? "ring-1 ring-red-500 bg-red-50" : ""
                    )}
                />
                {errors.workEmail && <FieldError className="mt-2">{errors.workEmail.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.message}>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3" htmlFor="message">
                    Message
                </label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="Enter Your Message"
                    className={cn(
                        "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                        errors.message ? "ring-1 ring-red-500 bg-red-50" : ""
                    )}
                />
                {errors.message && <FieldError className="mt-2">{errors.message.message}</FieldError>}
            </Field>

            <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-red-800 text-white py-5 rounded-md font-extrabold text-sm uppercase tracking-widest hover:bg-red-900 transition-all shadow-lg shadow-red-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {isSubmitting ? (
                    <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                ) : null}
                {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
            </button>
        </form>
    );
}
