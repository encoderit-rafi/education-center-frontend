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
import { TSeltA1Schema } from "../_type";

interface ReviewStepProps {
  data: TSeltA1Schema;
  form: UseFormReturn<TSeltA1Schema>;
  onEdit: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onInvalid?: (errors: any) => void;
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
  } = form;

  const formData = watch();

  return (
    <GlobalReviewStep
      onEdit={onEdit}
      onSubmit={onSubmit}
      paymentMethodValue={(form.watch() as any)?.paymentMethod}
      onPaymentMethodChange={(val) => (form.setValue as any)("paymentMethod", val)}
      paymentMethodError={(form.formState.errors as any)?.paymentMethod}
      examName="SELT A1 Exam Fee"
      baseFee={baseFee}
      serviceFee={serviceFee}
      total={total}
      selectedCourseData={selectedCourseData}
      selectedWorkshopData={selectedWorkshopData}
      reviewStepNumber={4}
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
                  {data.nationality || "N/A"}
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
              <span className="text-xs font-bold tracking-widest uppercase">
                TEST & PROFILE
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
                  {data.examTimeSlot}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Address
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.postalAddress1}, {data.city}
                </span>
              </div>
              {(data as any).residenceCountry && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Country of Residence
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {(data as any).residenceCountry}
                  </span>
                </div>
              )}
              {(data as any).countryOfBirth && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Country of Birth
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {(data as any).countryOfBirth}
                  </span>
                </div>
              )}
              {(data as any).reasonForTest && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Reason for Test
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {(data as any).reasonForTest === "other"
                      ? ((data as any).reasonForTestOther || "Other")
                      : (data as any).reasonForTest}
                  </span>
                </div>
              )}
              {(data as any).takenBefore && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Taken Before
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {(data as any).takenBefore}
                  </span>
                </div>
              )}
              {(data as any).takenBefore === "Yes" && (
                <>
                  {(data as any).lessThanTwoYears && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Was It Less Than 2 Years Ago?
                      </span>
                      <span className="text-sm font-semibold text-black">
                        {(data as any).lessThanTwoYears}
                      </span>
                    </div>
                  )}
                  {(data as any).existingAccount && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Existing Account
                      </span>
                      <span className="text-sm font-semibold text-black">
                        {(data as any).existingAccount}
                      </span>
                    </div>
                  )}
                </>
              )}
              {(data as any).marketingPreference && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Marketing Preference
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {(data as any).marketingPreference}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Course Add-on
                </span>
                <span className="text-sm font-semibold text-primary capitalize">
                  {selectedCourseData?.name || "None"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Workshop Add-on
                </span>
                <span className="text-sm font-semibold text-primary capitalize">
                  {selectedWorkshopData?.name || "None"}
                </span>
              </div>
            </div>
      </div>
    </div>
    </GlobalReviewStep>
  );
}
