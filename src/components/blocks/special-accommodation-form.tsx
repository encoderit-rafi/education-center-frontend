"use client";
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
import {
  CheckCircle2,
  SendHorizontal,
  ShieldCheck,
  UploadCloud,
  FileCheck,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useTranslations } from "next-intl";

type InquiryFormValues = {
  name: string;
  email: string;
  message: string;
  document?: any;
};

export default function SpecialAccommodationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState<string | null>(null);
  const t = useTranslations("SpecialAccommodationPage");
  const tForm = useTranslations("SpecialAccommodationPage.inquiry.form");

  const inquirySchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.fullNameRequired") })
      .min(2, { message: tForm("validation.fullNameMin") }),
    email: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.emailRequired") })
      .email({ message: tForm("validation.emailInvalid") }),
    message: z
      .string()
      .trim()
      .min(1, { message: tForm("validation.detailsRequired") })
      .min(10, { message: tForm("validation.detailsMin") }),
    document: z.any().optional(),
  });

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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  const ALLOWED_TYPES = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
  const ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"];
  const MAX_FILE_SIZE_MB = 10;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    const typeOk = ALLOWED_TYPES.includes(file.type) || ALLOWED_EXTENSIONS.includes(ext);
    if (!typeOk) {
      setFileError("Invalid file type. Allowed formats: PDF, PNG, JPG, JPEG.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError(
        `File is too large. Maximum allowed size is ${MAX_FILE_SIZE_MB}MB (your file: ${(file.size / (1024 * 1024)).toFixed(2)}MB).`
      );
      e.target.value = "";
      return;
    }

    setFileError(null);
    setFileName(file.name);
    setValue("document", file);
  };

  const clearFile = () => {
    setFileName("");
    setFileError(null);
    setValue("document", undefined);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-10 text-center space-y-6 animate-fade-up">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
        <div className="space-y-2">
          <h3 className="text-2xl font-black uppercase tracking-tight">
            {tForm("successTitle")}
          </h3>
          <p className="text-emerald-700 font-medium">
            {tForm("successDesc")}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="border-emerald-200 text-emerald-800 hover:bg-emerald-100/50 rounded-xl"
        >
          {tForm("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field data-invalid={!!errors.name}>
          <FieldLabel required>{tForm("fullName")}</FieldLabel>
          <FieldContent>
            <Input {...register("name")} placeholder={tForm("fullNamePlaceholder")} />
          </FieldContent>
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel required>{tForm("email")}</FieldLabel>
          <FieldContent>
            <Input
              {...register("email")}
              type="email"
              placeholder={tForm("emailPlaceholder")}
            />
          </FieldContent>
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
      </div>

      <Field data-invalid={!!errors.message}>
        <FieldLabel required>{tForm("details")}</FieldLabel>
        <FieldContent>
          <Textarea
            {...register("message")}
            placeholder={tForm("detailsPlaceholder")}
            rows={5}
            className="bg-transparent border border-slate-200 rounded-md px-3 py-2 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 placeholder:text-slate-400 placeholder:text-sm"
          />
        </FieldContent>
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>

      <div className="space-y-4">
        <FieldLabel>{tForm("documentation")}</FieldLabel>
        <div
          className={cn(
            "relative p-8 border-2 border-dashed rounded-2xl transition-all flex flex-col items-center justify-center text-center group bg-slate-50/30",
            fileName
              ? "border-primary/30 bg-primary/5"
              : "border-slate-200 hover:border-primary/50",
          )}
        >
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
                  <X className="w-3 h-3" /> {tForm("remove")}
                </button>
              </div>
            </div>
          ) : (
            <>
              <UploadCloud className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors mb-4" />
              <div className="space-y-1 mb-6">
                <p className="font-bold text-slate-700">
                  {tForm("dropText")}
                </p>
                <p className="text-sm text-slate-400 font-medium">
                  {tForm("fileLimit")}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl border-slate-200 hover:bg-white font-bold"
              >
                {tForm("browse")}
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
        {fileError && (
          <p className="mt-2 text-[12px] font-semibold text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
            {fileError}
          </p>
        )}
      </div>

      <div className="pt-4 space-y-6">
        <Button
          disabled={isSubmitting}
          type="submit"
        >
          <div className="flex items-center gap-3">
            {isSubmitting ? tForm("submitting") : tForm("submit")}
          </div>
        </Button>

        <p className="flex items-center gap-2 text-sm text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>{tForm("privacyText")}</span>
        </p>
      </div>
    </form>
  );
}
