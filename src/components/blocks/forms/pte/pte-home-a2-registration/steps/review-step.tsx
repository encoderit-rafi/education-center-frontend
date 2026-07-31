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
import { TPteHomeA2Schema } from "../_type";

interface ReviewStepProps {
  data: TPteHomeA2Schema;
  form: UseFormReturn<TPteHomeA2Schema>;
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
      examName="PTE Home A2 Exam"
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
                  {data.noMiddleName ? "N/A" : data.middleName || "N/A"}
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
                  First Language
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.homeLanguage || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Reason for Test
                </span>
                <span className="text-sm font-semibold text-black">
                  {(() => {
                    const mapping: Record<string, string> = {
                      family_visa: "Family visa (Partner, Spouse or Parent)",
                      settlement: "Settlement (Indefinite Leave to Remain)",
                      citizenship: "Citizenship",
                      sportsperson_visa: "Sportsperson visa (Tier 2)",
                      representative_visa: "Representative of an Overseas Business visa",
                      other: data.reasonForTakingOther || "Other",
                    };
                    return mapping[data.reasonForTaking] || data.reasonForTaking;
                  })()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Current Situation
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.currentSituation === "Other"
                    ? (data.currentSituationOther || "Other")
                    : data.currentSituation || "N/A"}
                </span>
              </div>
              {data.referralSource && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Referral Source
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.referralSource === "Other" || data.referralSource === "other"
                      ? (data.referralSourceOther || "Other")
                      : data.referralSource}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Taken Before
                </span>
                <span className="text-sm font-semibold text-black capitalize">
                  {data.takenBefore || "N/A"}
                </span>
              </div>
              {data.takenBefore === "yes" && (
                <>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      Was It Within 2 Years?
                    </span>
                    <span className="text-sm font-semibold text-black capitalize">
                      {data.takenWithinTwoYears || "N/A"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      Existing Account
                    </span>
                    <span className="text-sm font-semibold text-black capitalize">
                      {data.hasExistingAccount || "N/A"}
                    </span>
                  </div>
                </>
              )}
              {data.marketingPreference && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Marketing Preference
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.marketingPreference}
                  </span>
                </div>
              )}
            </div>
      </div>
    </div>
    </GlobalReviewStep>
  );
}
