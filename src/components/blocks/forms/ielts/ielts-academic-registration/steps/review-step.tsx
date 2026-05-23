"use client";

import React from "react";
import { format } from "date-fns";
import {
  User,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { TIeltsAcademicSchema } from "../_type";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";

interface ReviewStepProps {
  data: TIeltsAcademicSchema;
  form: UseFormReturn<TIeltsAcademicSchema>;
  onEdit: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onInvalid: (errors: any) => void;
  baseFee: number;
  serviceFee: number;
  total: number;
  selectedCourseData?: any;
  selectedWorkshopData?: any;
}

export function ReviewStep({
  data,
  form,
  onEdit,
  onSubmit,
  onInvalid,
  baseFee,
  serviceFee,
  total,
  selectedCourseData,
  selectedWorkshopData,
}: ReviewStepProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const formData = watch();

  return (
    <GlobalReviewStep
      onEdit={onEdit}
      onSubmit={onSubmit}
      paymentMethodValue={(form.watch() as any)?.paymentMethod}
      onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
      paymentMethodError={(form.formState.errors as any)?.paymentMethod}
      examName="IELTS Academic Exam"
      baseFee={baseFee}
      serviceFee={serviceFee}
      total={total}
      selectedCourseData={selectedCourseData}
      selectedWorkshopData={selectedWorkshopData}
      reviewStepNumber={4}
      paymentStepNumber={5}
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Details Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <User className="size-4" />
              <span className="text-xs font-bold tracking-widest text-black">
                PERSONAL DETAILS
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Given Names
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.givenNames}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Middle Name
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.middleName || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Surnames
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.surnames || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Date of Birth
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.dateOfBirth ? format(data.dateOfBirth, "PPP") : "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Gender
                </span>
                <span className="text-sm font-semibold text-black capitalize">
                  {data.sex || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Mobile Number
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.mobileNumber || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Nationality
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.nationality || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Identity & Contact Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-bold tracking-widest">
                IDENTITY & CONTACT
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  ID Type
                </span>
                <span className="text-sm font-semibold text-black capitalize">
                  {data.idType?.replace("_", " ")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  ID Number
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.idNumber || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Email
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  ID Expiry Date
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.idExpiryDate ? format(data.idExpiryDate, "PPP") : "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Identity Document
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.idDocument
                    ? (data.idDocument as File).name
                    : "No file attached"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Issuing Authority
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.issuingAuthority || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Test Info Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <Globe className="size-4" />
              <span className="text-xs font-bold tracking-widest">
                TEST INFORMATION
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Exam Date
                </span>
                <span className="text-sm font-semibold text-primary">
                  {data.examDate ? format(data.examDate, "PPP") : "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Time Slot
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.examTimeSlot === "9:00 AM"
                    ? "Morning Session (09:00 AM)"
                    : data.examTimeSlot === "11:00 AM"
                      ? "Morning Session (11:00 AM)"
                      : "Morning Session"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Address Line 1
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.postalAddress1}
                </span>
              </div>
              {data.postalAddress2 && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Address Line 2
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.postalAddress2}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Emirate / City
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.city}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Country of Residence
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.residenceCountry}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  P.O. Box
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.poBox || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Postal Code
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.postcode || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  First Language
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.firstLanguage || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Education Level
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.educationLevel || "N/A"}
                </span>
              </div>
            </div>
        </div>
    </div>
    </GlobalReviewStep>
  );
}
