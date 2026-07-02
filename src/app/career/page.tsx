"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { PhoneInput } from "@/components/ui/phone-input";
import { format } from "date-fns";
import api from "@/axios";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const careerSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  middle_name: z.string().optional(),
  last_name: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  gender: z
    .string()
    .trim()
    .min(1, "Please select your gender"),
  dob: z
    .any()
    .refine((val) => val instanceof Date, "Please select your date of birth")
    .refine((val) => {
      if (!(val instanceof Date)) return false;
      const today = new Date();
      const ageLimitDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      return val <= ageLimitDate;
    }, "You must be at least 18 years old"),
  nationality: z
    .string()
    .trim()
    .min(1, "Please select your nationality"),
  email: z
    .string()
    .trim()
    .min(1, "Email Address is required")
    .email("Please enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .min(1, "Mobile Number is required")
    .min(7, "Please enter a valid mobile number"),
  address: z
    .string()
    .trim()
    .min(1, "Address is required")
    .min(5, "Address must be at least 5 characters"),
  city: z
    .string()
    .trim()
    .min(1, "City/Emirate is required"),
  pobox: z.string().optional(),
  resume: z
    .any()
    .refine((val) => !!val, "Please upload your resume (PDF, DOC, or DOCX)")
    .refine(
      (val) => !val || (val instanceof File && val.size <= 5 * 1024 * 1024),
      "Resume file size must be less than 5MB",
    ),
});

type CareerFormValues = z.infer<typeof careerSchema>;

export default function CareerPage() {
  const t = useTranslations("CareerPage");
  const [isSuccess, setIsSuccess] = useState(false);
  const resumeFileRef = useRef<HTMLInputElement>(null);


  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      dob: undefined,
      nationality: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      pobox: "",
      resume: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("👉 Form Validation Errors:", errors);
    }
  }, [errors]);

  const onSubmit = async (data: CareerFormValues) => {
    try {
      const file = data.resume as File;

      // 1. Upload the file to the file upload API
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      toast.loading("Uploading resume...", { id: "career-submit" });

      const uploadRes = await api.post("/files/upload", uploadFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const relativeUrl = uploadRes.data?.url;
      if (!relativeUrl) {
        throw new Error(
          "Failed to retrieve uploaded file URL from the server.",
        );
      }

      // Construct full absolute resume URL dynamically from axios config
      const apiBase =
        api.defaults.baseURL || "https://vote.encoder-test-vpn.space/api/v1";
      const apiHost = apiBase.replace("/api/v1", "");
      const fullResumeUrl = relativeUrl.startsWith("http")
        ? relativeUrl
        : `${apiHost}${relativeUrl}`;

      console.log("Resume uploaded successfully! URL:", fullResumeUrl);

      // 2. Submit the career application
      toast.loading("Submitting application...", { id: "career-submit" });

      const payload = {
        first_name: data.first_name,
        middle_name: data.middle_name || "",
        last_name: data.last_name,
        gender: data.gender,
        dob: format(data.dob, "yyyy-MM-dd"),
        nationality: data.nationality,
        email: data.email,
        mobile: data.mobile,
        address: data.address,
        city: data.city,
        pobox: data.pobox || "",
        resume: fullResumeUrl,
      };

      const res = await api.post("/career", payload);

      if (res.data?.success || res.status === 200 || res.status === 201) {
        toast.success("Application Submitted Successfully!", {
          id: "career-submit",
          description:
            "Thank you for applying. We will review your application and resume shortly.",
        });
        setIsSuccess(true);
      } else {
        toast.error("Submission Failed", {
          id: "career-submit",
          description:
            res.data?.message ||
            "Failed to submit application. Please try again.",
        });
      }
    } catch (error: any) {
      console.error("Submission error:", error);

      let errorMessage = "An unexpected error occurred. Please try again later.";
      if (error.response?.status === 413) {
        errorMessage = "The uploaded file is too large. Please upload a file smaller than 5MB.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error("Submission Error", {
        id: "career-submit",
        description: errorMessage,
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50/50 items-center justify-center p-6 animate-fade-up">
        <div className="max-w-md w-full bg-white p-12 rounded-sm shadow-xl border border-gray-100 text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black font-heading tracking-tighter">
              {t("successTitle")}
            </h2>
            <p className="text-gray-500 font-medium">
              {t("successDescription")}
            </p>
          </div>
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-widest py-6"
          >
            {t("goBack")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Main Content */}
      <section className="py-24">
        <div className="container px-6 mx-auto sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
              <div className="bg-white p-12 md:p-16 rounded-sm shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#A11D1D]" />

                <div className="mb-12">
                  <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tighter mb-4">
                    {t("title")}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {t("description")}
                  </p>
                </div>

                <form
                  onSubmit={(e) => handleSubmit(onSubmit)(e)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Name, Middle Name, Last Name */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Field data-invalid={!!errors.first_name}>
                        <FieldLabel required>{t("form.firstName")}</FieldLabel>
                        <FieldContent>
                          <Input
                            placeholder={t("form.firstNamePlaceholder")}
                            {...register("first_name")}
                          />
                        </FieldContent>
                        {errors.first_name && (
                          <FieldError>{errors.first_name.message}</FieldError>
                        )}
                      </Field>

                      <Field data-invalid={!!errors.middle_name}>
                        <FieldLabel>{t("form.middleName")}</FieldLabel>
                        <FieldContent>
                          <Input
                            placeholder={t("form.middleNamePlaceholder")}
                            {...register("middle_name")}
                          />
                        </FieldContent>
                        {errors.middle_name && (
                          <FieldError>{errors.middle_name.message}</FieldError>
                        )}
                      </Field>

                      <Field data-invalid={!!errors.last_name}>
                        <FieldLabel required>{t("form.lastName")}</FieldLabel>
                        <FieldContent>
                          <Input
                            placeholder={t("form.lastNamePlaceholder")}
                            {...register("last_name")}
                          />
                        </FieldContent>
                        {errors.last_name && (
                          <FieldError>{errors.last_name.message}</FieldError>
                        )}
                      </Field>
                    </div>

                    {/* Gender */}
                    <Field data-invalid={!!errors.gender}>
                      <FieldLabel className="text-sm font-medium">
                        {t("form.gender")} <span className="text-primary font-bold">*</span>
                      </FieldLabel>
                      <FieldContent>
                        <Controller
                          control={control}
                          name="gender"
                          render={({ field }) => (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="flex h-11 w-full bg-white items-center justify-between whitespace-nowrap rounded-md border border-slate-200 px-3 py-2 text-base outline-none focus:border-primary focus:ring-3 focus:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium hover:border-slate-200 hover:text-inherit hover:bg-white hover:shadow-none transition-none"
                                >
                                  <span className={!field.value ? "text-slate-400 font-normal" : ""}>
                                    {field.value
                                      ? field.value === "male"
                                        ? t("form.male")
                                        : t("form.female")
                                      : t("form.genderPlaceholder")}
                                  </span>
                                  <ChevronDown className="w-4 h-4 text-slate-500" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) bg-white">
                                <DropdownMenuRadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  <DropdownMenuRadioItem value="male">
                                    {t("form.male")}
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem value="female">
                                    {t("form.female")}
                                  </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        />
                      </FieldContent>
                      {errors.gender && (
                        <FieldError>{errors.gender.message}</FieldError>
                      )}
                    </Field>

                    {/* DOB */}
                    <Field data-invalid={!!errors.dob}>
                      <FieldLabel className="text-sm font-medium">
                        {t("form.dob")} <span className="text-primary font-bold">*</span>
                      </FieldLabel>
                      <FieldContent>
                        <Controller
                          control={control}
                          name="dob"
                          render={({ field }) => {
                            const maxDob = new Date();
                            maxDob.setFullYear(maxDob.getFullYear() - 18);
                            return (
                              <DateTimePicker
                                mode="date"
                                placeholder={t("form.dobPlaceholder")}
                                value={field.value}
                                onChange={field.onChange}
                                disabledDays={{ after: maxDob }}
                                toYear={maxDob.getFullYear()}
                              />
                            );
                          }}
                        />
                      </FieldContent>
                      {errors.dob && (
                        <FieldError>{(errors.dob as any).message}</FieldError>
                      )}
                    </Field>

                    {/* Nationality */}
                    <Field data-invalid={!!errors.nationality}>
                      <FieldLabel className="text-sm font-medium">
                        {t("form.nationality")} <span className="text-primary font-bold">*</span>
                      </FieldLabel>
                      <FieldContent>
                        <Controller
                          control={control}
                          name="nationality"
                          render={({ field }) => (
                            <CountryDropdown
                              value={field.value}
                              onChange={(country) =>
                                field.onChange(country.alpha2.toUpperCase())
                              }
                              placeholder={t("form.nationalityPlaceholder")}
                            />
                          )}
                        />
                      </FieldContent>
                      {errors.nationality && (
                        <FieldError>{errors.nationality.message}</FieldError>
                      )}
                    </Field>

                    {/* Email */}
                    <Field data-invalid={!!errors.email}>
                      <FieldLabel required>{t("form.email")}</FieldLabel>
                      <FieldContent>
                        <Input
                          type="email"
                          placeholder={t("form.emailPlaceholder")}
                          {...register("email")}
                        />
                      </FieldContent>
                      {errors.email && (
                        <FieldError>{errors.email.message}</FieldError>
                      )}
                    </Field>

                    {/* Phone */}
                    <Field data-invalid={!!errors.mobile}>
                      <FieldLabel className="text-sm font-medium">
                        {t("form.mobile")} <span className="text-primary font-bold">*</span>
                      </FieldLabel>
                      <FieldContent>
                        <Controller
                          control={control}
                          name="mobile"
                          render={({ field }) => (
                            <PhoneInput
                              value={field.value}
                              onChange={field.onChange}
                              defaultCountry="AE"
                              placeholder={t("form.mobilePlaceholder")}
                            />
                          )}
                        />
                      </FieldContent>
                      {errors.mobile && (
                        <FieldError>{errors.mobile.message}</FieldError>
                      )}
                    </Field>

                    {/* Address */}
                    <Field data-invalid={!!errors.address}>
                      <FieldLabel required>{t("form.address")}</FieldLabel>
                      <FieldContent>
                        <Input
                          placeholder={t("form.addressPlaceholder")}
                          {...register("address")}
                        />
                      </FieldContent>
                      {errors.address && (
                        <FieldError>{errors.address.message}</FieldError>
                      )}
                    </Field>

                    {/* Emirate/City */}
                    <Field data-invalid={!!errors.city}>
                      <FieldLabel required>{t("form.city")}</FieldLabel>
                      <FieldContent>
                        <Input
                          placeholder={t("form.cityPlaceholder")}
                          {...register("city")}
                        />
                      </FieldContent>
                      {errors.city && (
                        <FieldError>{errors.city.message}</FieldError>
                      )}
                    </Field>

                    {/* P.O. Box */}
                    <Field data-invalid={!!errors.pobox}>
                      <FieldLabel>{t("form.pobox")}</FieldLabel>
                      <FieldContent>
                        <Input
                          placeholder={t("form.poboxPlaceholder")}
                          {...register("pobox")}
                        />
                      </FieldContent>
                      {errors.pobox && (
                        <FieldError>{errors.pobox.message}</FieldError>
                      )}
                    </Field>

                    {/* File Upload */}
                    <Field data-invalid={!!errors.resume}>
                      <FieldLabel className="text-sm font-medium">
                        {t("form.attachCv")} <span className="text-primary font-bold">*</span>
                      </FieldLabel>
                      <FieldContent>
                        <Controller
                          control={control}
                          name="resume"
                          render={({ field }) => {
                            const file = field.value as File | undefined;
                            return (
                              <div
                                onClick={() => resumeFileRef.current?.click()}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (
                                    e.dataTransfer.files &&
                                    e.dataTransfer.files[0]
                                  ) {
                                    const droppedFile = e.dataTransfer.files[0];
                                    const ext = droppedFile.name
                                      .split(".")
                                      .pop()
                                      ?.toLowerCase();
                                    if (
                                      ext &&
                                      ["pdf", "doc", "docx"].includes(ext)
                                    ) {
                                      field.onChange(droppedFile);
                                    } else {
                                      toast.error("Invalid file type", {
                                        description:
                                          "Only PDF, DOC, or DOCX files are allowed.",
                                      });
                                    }
                                  }
                                }}
                                className={cn(
                                  "relative border-2 border-dashed p-10 flex flex-col items-center justify-center space-y-4 transition-colors cursor-pointer group rounded-none",
                                  file
                                    ? "border-[#A11D1D]/30 bg-[#A11D1D]/5"
                                    : "border-gray-200 hover:border-[#A11D1D] bg-gray-50/50",
                                )}
                              >
                                <input
                                  type="file"
                                  ref={resumeFileRef}
                                  className="hidden"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                      field.onChange(e.target.files[0]);
                                    }
                                  }}
                                />
                                {file ? (
                                  <div className="flex flex-col items-center space-y-3 w-full text-center">
                                    <div className="w-16 h-16 bg-[#A11D1D]/10 rounded-full flex items-center justify-center text-[#A11D1D]">
                                      <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1">
                                      <p className="font-bold text-gray-900 text-sm max-w-xs truncate">
                                        {file.name}
                                      </p>
                                      <p className="text-xs text-gray-500 font-medium">
                                        {(file.size / (1024 * 1024)).toFixed(
                                          2,
                                        )}{" "}
                                        MB
                                      </p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        field.onChange(undefined);
                                        if (resumeFileRef.current)
                                          resumeFileRef.current.value = "";
                                      }}
                                      className="text-xs text-[#A11D1D] hover:text-[#8A1818] font-black uppercase tracking-widest flex items-center gap-1 hover:underline mx-auto mt-2"
                                    >
                                      {t("form.removeFile")}
                                    </button>
                                  </div>
                                ) : (
                                  <>
                                    <Upload className="w-10 h-10 text-gray-300 group-hover:text-[#A11D1D] transition-colors" />
                                    <div className="text-center">
                                      <p className="text-sm font-bold text-gray-600">
                                        {t("form.uploadText")}
                                      </p>
                                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                        {t("form.uploadHint")}
                                      </p>
                                    </div>
                                  </>
                                )}
                              </div>
                            );
                          }}
                        />
                      </FieldContent>
                      {errors.resume && (
                        <FieldError>{errors.resume.message as string}</FieldError>
                      )}
                    </Field>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("submitting") : t("submit")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
