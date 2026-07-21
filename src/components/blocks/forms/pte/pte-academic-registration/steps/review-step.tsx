"use client";

import React from "react";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";
import { format } from "date-fns";
import {
  User,
  ShieldCheck,
  Globe,
  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { TPteAcademicSchema } from "../_type";


interface ReviewStepProps {
  data: TPteAcademicSchema;
  form: UseFormReturn<TPteAcademicSchema>;
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
    watch,
    setValue,
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
      examName="PTE Academic Exam"
      baseFee={baseFee}
      serviceFee={serviceFee}
      total={total}
      selectedCourseData={selectedCourseData}
      selectedWorkshopData={selectedWorkshopData}
      reviewStepNumber={3}
      paymentStepNumber={4}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Details Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <User className="size-4" />
              <span className="text-xs font-bold tracking-widest text-black uppercase">
                PERSONAL DETAILS
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Given Names
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.noGivenNames ? "N/A" : data.givenNames}
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
                  {data.noSurname ? "N/A" : data.surnames}
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
                  Sex
                </span>
                <span className="text-sm font-semibold text-black capitalize">
                  {data.gender || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Phone Number
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
                  {data.countryOfCitizenship || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Identity & Contact Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
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
                  {data.emailUsername}
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
                  {data.passportCopy
                    ? (data.passportCopy as File).name
                    : "No file attached"}
                </span>
              </div>
            </div>
          </div>

          {/* Test Information Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-black">
              <Globe className="size-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
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
                  {data.examTime || "N/A"}
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
                  {data.countryOfResidence}
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
                  {data.homeLanguage || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Destination Country
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.planningCountry || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Reason for Test
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.reasonForTaking} {data.studyLevel ? `(${data.studyLevel})` : ""}
                </span>
              </div>
              {data.occupationSector && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Occupation Sector
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.occupationSector === "Other"
                      ? data.occupationSectorOther || "Other"
                      : data.occupationSector}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Current Situation
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.currentSituation}
                </span>
              </div>
              {data.selectedWorkshop && selectedWorkshopData && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Workshops
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {selectedWorkshopData.name} ({selectedWorkshopData.duration})
                  </span>
                </div>
              )}
            </div>
      </div>
    </div>
    </GlobalReviewStep>
  );
}
