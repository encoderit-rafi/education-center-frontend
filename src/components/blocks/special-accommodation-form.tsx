"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, SendHorizontal, ShieldCheck, UploadCloud, FileCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
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

  const clearFile = () => {
    setFileName("");
    setValue("document", undefined);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-10 text-center space-y-6 animate-fade-up">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
        <div className="space-y-2">
          <h3 className="text-2xl font-black uppercase tracking-tight">Request Received</h3>
          <p className="text-emerald-700 font-medium">
            Thank you! Your accommodation request has been securely received. Our support team will reach out within 48 hours.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="border-emerald-200 text-emerald-800 hover:bg-emerald-100/50 rounded-xl"
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.name}>
          <FieldLabel className="text-sm font-medium">
            Full Name <span className="text-primary font-bold">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              {...register("name")}
              placeholder="John Doe"
              className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
            />
          </FieldContent>
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel className="text-sm font-medium">
            Email Address <span className="text-primary font-bold">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className="bg-slate-50/50 border-slate-200 h-14 rounded-xl px-6 placeholder:text-slate-400 font-medium"
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <Field data-invalid={!!errors.message}>
        <FieldLabel className="text-sm font-medium">
          Accommodation Details <span className="text-primary font-bold">*</span>
        </FieldLabel>
        <FieldContent>
          <Textarea
            {...register("message")}
            placeholder="Please describe your specific requirements in detail..."
            rows={5}
            className="bg-slate-50/50 border-slate-200 rounded-xl p-6 placeholder:text-slate-400 font-medium resize-none"
          />
        </FieldContent>
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>

      <div className="space-y-4">
        <FieldLabel className="text-sm font-medium">Supporting Documentation</FieldLabel>
        <div className={cn(
          "relative p-8 border-2 border-dashed rounded-2xl transition-all flex flex-col items-center justify-center text-center group bg-slate-50/30",
          fileName ? "border-primary/30 bg-primary/5" : "border-slate-200 hover:border-primary/50"
        )}>
          {fileName ? (
            <div className="flex flex-col items-center space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-900">{fileName}</p>
                <button
                  type="button"
                  onClick={clearFile}
                  className="text-xs text-primary font-bold uppercase tracking-widest hover:underline flex items-center gap-1 mx-auto"
                >
                  <X className="w-3 h-3" /> Remove File
                </button>
              </div>
            </div>
          ) : (
            <>
              <UploadCloud className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors mb-4" />
              <div className="space-y-1 mb-6">
                <p className="font-bold text-slate-700">Drop your medical evidence here</p>
                <p className="text-sm text-slate-400 font-medium">
                  PDF, JPG or PNG (Max 10MB)
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl border-slate-200 hover:bg-white font-bold"
              >
                Browse Files
              </Button>
            </>
          )}
          <input
            id="document-upload"
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      <div className="pt-4 space-y-6">
        <Button
          disabled={isSubmitting}
          type="submit"
          className="h-14 px-12 rounded-xl font-black uppercase tracking-widest text-sm w-full md:w-auto transition-all active:scale-95 shadow-xl shadow-primary/10"
        >
          <div className="flex items-center gap-3">
            {isSubmitting ? "Sending Request..." : "Send Inquiry"}
            {!isSubmitting && <SendHorizontal className="w-4 h-4" />}
          </div>
        </Button>

        <p className="flex items-center gap-2 text-sm text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Confidential and secure inquiry. We value your privacy.</span>
        </p>
      </div>
    </form>
  );
}
