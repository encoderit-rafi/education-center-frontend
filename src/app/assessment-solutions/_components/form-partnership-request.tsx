"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type PartnershipFormValues = {
    fullName: string;
    institution: string;
    workEmail: string;
    message: string;
};

export default function FormPartnershipRequest() {
    const [isSuccess, setIsSuccess] = useState(false);
    const t = useTranslations("AssessmentSolutionsPage");
    const tForm = useTranslations("AssessmentSolutionsPage.partnershipForm");

    const partnershipSchema = z.object({
        fullName: z
            .string()
            .trim()
            .min(1, { message: tForm("validation.fullNameRequired") })
            .min(2, { message: tForm("validation.fullNameMin") }),
        institution: z
            .string()
            .trim()
            .min(1, { message: tForm("validation.institutionRequired") })
            .min(2, { message: tForm("validation.institutionMin") }),
        workEmail: z
            .string()
            .trim()
            .min(1, { message: tForm("validation.workEmailRequired") })
            .email({ message: tForm("validation.workEmailInvalid") }),
        message: z
            .string()
            .trim()
            .min(1, { message: tForm("validation.messageRequired") })
            .min(10, { message: tForm("validation.messageMin") }),
    });

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
                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                <h2 className="text-2xl font-bold font-headline text-secondary">{tForm("successTitle")}</h2>
                <p className="text-emerald-700 text-sm">
                    {tForm("successDesc")}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field data-invalid={!!errors.fullName}>
                    <FieldLabel required className="text-[12px] font-semibold uppercase tracking-widest mb-3" htmlFor="fullName">
                        {tForm("fullName")}
                    </FieldLabel>
                    <input
                        {...register("fullName")}
                        id="fullName"
                        type="text"
                        placeholder={tForm("fullNamePlaceholder")}
                        className={cn(
                            "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                            errors.fullName ? "ring-1 ring-red-500 bg-red-50" : ""
                        )}
                    />
                    {errors.fullName && <FieldError className="mt-2">{errors.fullName.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.institution}>
                    <FieldLabel required className="text-[12px] font-semibold uppercase tracking-widest mb-3" htmlFor="institution">
                        {tForm("institution")}
                    </FieldLabel>
                    <input
                        {...register("institution")}
                        id="institution"
                        type="text"
                        placeholder={tForm("institutionPlaceholder")}
                        className={cn(
                            "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                            errors.institution ? "ring-1 ring-red-500 bg-red-50" : ""
                        )}
                    />
                    {errors.institution && <FieldError className="mt-2">{errors.institution.message}</FieldError>}
                </Field>
            </div>

            <Field data-invalid={!!errors.workEmail}>
                <FieldLabel required className="text-[12px] font-semibold uppercase tracking-widest mb-3" htmlFor="workEmail">
                    {tForm("workEmail")}
                </FieldLabel>
                <input
                    {...register("workEmail")}
                    id="workEmail"
                    type="email"
                    placeholder={tForm("workEmailPlaceholder")}
                    className={cn(
                        "w-full bg-red-50/30 border-none rounded-md p-4 text-sm focus:ring-1 focus:ring-red-800 placeholder:text-neutral-300",
                        errors.workEmail ? "ring-1 ring-red-500 bg-red-50" : ""
                    )}
                />
                {errors.workEmail && <FieldError className="mt-2">{errors.workEmail.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.message}>
                <FieldLabel required className="text-[12px] font-semibold uppercase tracking-widest mb-3" htmlFor="message">
                    {tForm("message")}
                </FieldLabel>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder={tForm("messagePlaceholder")}
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
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : null}
                {isSubmitting ? tForm("submitting") : tForm("submit")}
            </button>
        </form>
    );
}
