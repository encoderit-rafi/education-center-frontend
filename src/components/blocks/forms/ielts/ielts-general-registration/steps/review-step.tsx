"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import {
  User,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { TIeltsGeneralSchema } from "../_type";
import { GlobalReviewStep } from "@/components/blocks/forms/global-review-step";
import { getEducationLevelLabel, getIdTypeLabel } from "@/lib/utils";

interface ReviewStepProps {
  data: TIeltsGeneralSchema;
  form: UseFormReturn<TIeltsGeneralSchema>;
  onEdit: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onInvalid: (errors: any) => void;
  baseFee: number;
  serviceFee: number;
  vat: number;
  total: number;
  tax: number;
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
  vat,
  total,
  tax,
  selectedCourseData,
  selectedWorkshopData,
}: ReviewStepProps) {
  const t = useTranslations("FormsShared.GlobalReviewStep");
  const tFields = useTranslations("FormsShared.FormFields");
  const tIelts = useTranslations("FormsShared.IELTS");
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
      examName={tIelts("examName", { module: tIelts("testModule") })}
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
            <span className="text-xs font-bold tracking-widest text-black">
              {t("personalDetails")}
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("firstGivenNames")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.givenNames}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("middleName")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.middleName || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("surname")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.surnames || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("dateOfBirth")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.dateOfBirth ? format(data.dateOfBirth, "PPP") : t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("sex")}
              </span>
              <span className="text-sm font-semibold text-black capitalize">
                {data.sex || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("cityOfBirth")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.birthCity || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("countryOfBirth")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.birthCountry || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("mobileNumber")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.mobileNumber || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("nationality")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.nationality || t("na")}
              </span>
            </div>
          </div>
        </div>

        {/* Identity & Contact Summary */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-black">
            <ShieldCheck className="size-4" />
            <span className="text-xs font-bold tracking-widest">
              {t("identityContact")}
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("identificationType")}
              </span>
              <span className="text-sm font-semibold text-black capitalize">
                {getIdTypeLabel(data.idType)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("idNumber")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.idNumber || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("email")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.email}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("idExpiryDate")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.idExpiryDate ? format(data.idExpiryDate, "PPP") : t("na")}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("attachIdCopy")}
              </span>
              <span className="text-sm font-semibold text-black wrap-break-word">
                {data.idDocument
                  ? (data.idDocument as File).name
                  : t("noFileAttached")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("issuingAuthority")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.issuingAuthority || t("na")}
              </span>
            </div>
          </div>
        </div>

        {/* Test Info Summary */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-black">
            <Globe className="size-4" />
            <span className="text-xs font-bold tracking-widest">
              {t("testInformation")}
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("examDate")}
              </span>
              <span className="text-sm font-semibold text-primary">
                {data.examDate ? format(data.examDate, "PPP") : t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                Exam Day
              </span>
              <span className="text-sm font-semibold text-black">
                {data.examDate ? format(new Date(data.examDate), "EEEE") : t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("timeSlot")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.examTimeSlot === "9:00 AM"
                  ? t("morningSession")
                  : data.examTimeSlot === "1:00 PM"
                    ? t("afternoonSession")
                    : t("morningSession")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {t("speakingSlot")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.speakingSlot || t("notSelected")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("addressLine1")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.postalAddress1}
              </span>
            </div>
            {data.postalAddress2 && (
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  {tFields("addressLine2")}
                </span>
                <span className="text-sm font-semibold text-black">
                  {data.postalAddress2}
                </span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("emirateCity")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.city}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("countryOfResidence")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.residenceCountry}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("poBox")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.poBox || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tFields("postalCode")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.postcode || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("firstLanguage")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.firstLanguage === "Other"
                  ? data.firstLanguageOther || t("otherNotSpecified")
                  : data.firstLanguage || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("yearsStudyingEnglish")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.yearsStudyingEnglish || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("occupationLevel")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.occupationLevel === "Other"
                  ? data.occupationLevelOther || t("otherNotSpecified")
                  : data.occupationLevel || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("occupationSector")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.occupationSector === "Other"
                  ? data.occupationSectorOther || t("otherNotSpecified")
                  : data.occupationSector || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("reasonForTest")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.reasonForTakingTest === "other"
                  ? data.reasonForTakingTestOther || t("otherNotSpecified")
                  : data.reasonForTakingTest || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("educationLevel")}
              </span>
              <span className="text-sm font-semibold text-black">
                {getEducationLevelLabel(data.educationLevel)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("destinationCountry")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.destinationCountry || t("na")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {tIelts("haveYouTakenBefore")}
              </span>
              <span className="text-sm font-semibold text-black">
                {data.takenBefore || t("na")}
              </span>
            </div>
            {data.takenBefore === "Yes" && (
              <>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    {tIelts("wasItLessThan2Years")}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.lessThanTwoYears || t("na")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    {tIelts("existingAccount")}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {data.existingAccount || t("na")}
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
