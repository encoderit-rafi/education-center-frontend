"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  message: z.string().min(10, { message: "Please provide a detailed description of your requirements." }),
  document: z.any().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function SpecialAccommodationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    console.log("Accommodation Inquiry:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setValue("document", e.target.files[0]);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-10 text-center space-y-4 shadow-sm h-full flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-emerald-500">check_circle</span>
        <h2 className="text-2xl font-bold font-headline text-secondary">Inquiry Received</h2>
        <p className="text-emerald-700 text-sm">
          We have securely received your special accommodation request. Our support team will review your requirements and reach out within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field data-invalid={!!errors.name}>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="John Doe"
          type="text"
          className={cn(
            "w-full px-4 py-3 rounded-lg border-none bg-white text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none placeholder:text-neutral-300",
            errors.name ? "ring-2 ring-red-500 bg-red-50" : ""
          )}
        />
        {errors.name && <FieldError className="mt-2">{errors.name.message}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.email}>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          {...register("email")}
          id="email"
          placeholder="john@example.com"
          type="email"
          className={cn(
            "w-full px-4 py-3 rounded-lg border-none bg-white text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none placeholder:text-neutral-300",
            errors.email ? "ring-2 ring-red-500 bg-red-50" : ""
          )}
        />
        {errors.email && <FieldError className="mt-2">{errors.email.message}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.message}>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1" htmlFor="message">
          Accommodation Details
        </label>
        <textarea
          {...register("message")}
          id="message"
          placeholder="Please describe your specific requirements..."
          rows={4}
          className={cn(
            "w-full px-4 py-3 rounded-lg border-none bg-white text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none placeholder:text-neutral-300",
            errors.message ? "ring-2 ring-red-500 bg-red-50" : ""
          )}
        />
        {errors.message && <FieldError className="mt-2">{errors.message.message}</FieldError>}
      </Field>

      <div className="relative my-8 p-6 border-2 border-dashed border-red-200 hover:border-primary transition-colors rounded-xl flex flex-col items-center text-center bg-white/50 group cursor-pointer overflow-hidden">
        <span className="material-symbols-outlined text-4xl text-neutral-300 group-hover:text-primary transition-colors mb-2">
          cloud_upload
        </span>
        <p className="font-bold text-on-surface text-sm mb-1 truncate max-w-full">
          {fileName ? <span className="text-primary">{fileName}</span> : "Secure Document Portal"}
        </p>
        <p className="text-[10px] text-slate-400 mb-4 uppercase tracking-wider font-semibold">
          Upload PDF, JPG or PNG (Max 10MB)
        </p>
        <button
          className="bg-secondary text-white px-8 py-2.5 rounded-lg text-xs font-bold w-full hover:bg-black transition-colors"
          type="button"
        >
          {fileName ? "Change Document" : "Browse Files"}
        </button>
        <input
          id="document-upload"
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileUpload}
        />
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-red-800 transition-colors text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
        ) : null}
        {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
      </button>
    </form>
  );
}
