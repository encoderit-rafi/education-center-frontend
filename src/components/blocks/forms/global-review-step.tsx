"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Edit3, CreditCard, User, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/price-display";
import Stepper from "@/components/stepper";
import { PaymentMethodSelector } from "@/components/blocks/payment-method-selector";
import { cn } from "@/lib/utils";
import { VAT_PERCENT, calculateVat } from "@/lib/vat";

// ─── ReviewSummaryGrid ────────────────────────────────────────────────────────

export interface ReviewField {
  label: string;
  value?: string | React.ReactNode | null;
  /** If true, value text is rendered in the brand red (#A11D1D / text-primary) */
  highlight?: boolean;
}

export interface ReviewSummaryGridProps {
  personalDetails: ReviewField[];
  identityContact: ReviewField[];
  testInformation: ReviewField[];
}

const translateLabel = (label: string, locale: string) => {
  if (locale !== "ar") return label;
  const cleanLabel = label.trim().toLowerCase();
  const mapping: Record<string, string> = {
    "given names": "الاسم الأول / الأسماء المعطاة",
    "middle name": "الاسم الأوسط",
    "surnames": "اسم العائلة",
    "surname": "اسم العائلة",
    "date of birth": "تاريخ الميلاد",
    "gender": "الجنس",
    "sex": "الجنس",
    "city of birth": "مدينة الميلاد",
    "country of birth": "بلد الميلاد",
    "phone number": "رقم الجوال",
    "mobile number": "رقم الجوال",
    "nationality": "الجنسية",
    "country of nationality": "بلد الجنسية",
    
    "id type": "نوع الهوية",
    "id number": "رقم الهوية",
    "email": "البريد الإلكتروني",
    "id expiry date": "تاريخ انتهاء الهوية",
    "identity document": "وثيقة الهوية",
    "id document": "وثيقة الهوية",
    "issuing authority": "جهة الإصدار",
    
    "exam date": "تاريخ الامتحان",
    "time slot": "الموعد",
    "speaking slot": "طريقة تقديم اختبار المحادثة",
    "address line 1": "العنوان سطر 1",
    "address line 2": "العنوان سطر 2",
    "address line 3": "العنوان سطر 3",
    "street address 1": "عنوان الشارع 1",
    "street address 2": "عنوان الشارع 2",
    "emirate / city": "الإمارة / المدينة",
    "town / city": "المدينة",
    "country of residence": "بلد الإقامة",
    "p.o. box": "رقم صندوق البريد",
    "postal code": "الرمز البريدي",
    "post code": "الرمز البريدي",
    "first language": "اللغة الأولى",
    "occupation level": "المستوى الوظيفي",
    "occupation sector": "القطاع الوظيفي",
    "selected level": "المستوى المختار",
    "test module": "نوع الاختبار",
    "reason for taking test": "السبب من إجراء الاختبار",
    "destination country": "بلد الوجهة",
    "payment method": "طريقة الدفع",
    "total amount": "المبلغ الإجمالي",
    "exam fee": "رسوم الاختبار",
    "registration service fee": "رسوم خدمة التسجيل",
    "vat": "ضريبة القيمة المضافة",
  };
  return mapping[cleanLabel] || label;
};

const translateValue = (val: string, locale: string) => {
  if (locale !== "ar") return val;
  let cleanVal = val.trim();
  
  // Translate dates (e.g. "July 26th, 2026", "July 1st, 1984")
  const months: Record<string, string> = {
    January: "يناير",
    February: "فبراير",
    March: "مارس",
    April: "أبريل",
    May: "مايو",
    June: "يونيو",
    July: "يوليو",
    August: "أغسطس",
    September: "سبتمبر",
    October: "أكتوبر",
    November: "نوفمبر",
    December: "ديسمبر"
  };
  
  for (const [engMonth, arMonth] of Object.entries(months)) {
    if (cleanVal.includes(engMonth)) {
      cleanVal = cleanVal.replace(engMonth, arMonth);
    }
  }
  
  // Replace ordinals like "1st", "2nd", "3rd", "4th" etc.
  cleanVal = cleanVal.replace(/(\d+)(st|nd|rd|th)/g, "$1");

  // Handle common time slot labels
  if (cleanVal.includes("Morning Session")) {
    cleanVal = cleanVal.replace("Morning Session", "الجلسة الصباحية");
  }
  if (cleanVal.includes("Afternoon Session")) {
    cleanVal = cleanVal.replace("Afternoon Session", "الجلسة المسائية");
  }
  if (cleanVal.includes("Evening Session")) {
    cleanVal = cleanVal.replace("Evening Session", "الجلسة المسائية المتأخرة");
  }

  const lower = cleanVal.toLowerCase();
  
  // Handle genders
  if (lower === "male") return "ذكر";
  if (lower === "female") return "أنثى";
  if (lower === "other") return "أخرى";
  
  // Handle ID types
  if (lower === "emirates id" || lower === "emirates_id" || lower === "emirates") return "الهوية الإماراتية";
  if (lower === "passport") return "جواز سفر";
  if (lower === "visa") return "تأشيرة";
  if (lower === "others" || lower === "other") return "أخرى";
  
  // Handle YES/NO
  if (lower === "yes") return "نعم";
  if (lower === "no") return "لا";
  if (lower === "n/a") return "غير متوفر";
  
  // Handle common countries
  if (lower === "united arab emirates") return "الإمارات العربية المتحدة";
  if (lower === "saudi arabia") return "المملكة العربية السعودية";
  if (lower === "oman") return "عمان";
  if (lower === "qatar") return "قطر";
  if (lower === "kuwait") return "الكويت";
  if (lower === "bahrain") return "البحرين";
  if (lower === "egypt") return "مصر";
  if (lower === "jordan") return "الأردن";
  if (lower === "lebanon") return "لبنان";
  if (lower === "syria") return "سوريا";
  if (lower === "iraq") return "العراق";
  if (lower === "yemen") return "اليمن";
  if (lower === "palestine") return "فلسطين";
  if (lower === "sudan") return "السودان";
  
  // Handle occupation levels / sectors / languages
  if (lower === "self-employed") return "عامل لحسابه الخاص";
  if (lower === "albanian") return "الألبانية";
  if (cleanVal.includes("Agriculture, Fishing, Forestry, Mining")) {
    return "الزراعة والصيد والغابات والتعدين";
  }
  
  // Format Speaking Slot description if in English
  if (cleanVal.includes("Live with the examiner")) {
    return "مباشر مع الممتحن في مركز الاختبار (وجهاً لوجه)";
  }
  if (cleanVal.includes("Video Call at the test")) {
    return "مكالمة فيديو في مركز الاختبار (VCS)";
  }
  
  return cleanVal;
};

function SummaryCard({
  icon,
  title,
  fields,
  colsClassName = "grid-cols-1 sm:grid-cols-2",
}: {
  icon: React.ReactNode;
  title: string;
  fields: ReviewField[];
  colsClassName?: string;
}) {
  const t = useTranslations("FormsShared.GlobalReviewStep");
  const locale = useLocale();
  return (
    <div className="border border-slate-150 rounded-2xl bg-white overflow-hidden shadow-xs">
      {/* Card Header */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 bg-slate-50 border-b border-slate-100 text-slate-800">
        <span className="text-[#A11D1D]">{icon}</span>
        <span className="text-xs font-black tracking-wider uppercase">
          {title}
        </span>
      </div>
      {/* Card Body */}
      <div className={cn("grid gap-5 p-5", colsClassName)}>
        {fields.map((field, i) => {
          const displayLabel = translateLabel(field.label, locale);
          const displayValue = typeof field.value === "string" 
            ? translateValue(field.value, locale) 
            : field.value;

          return (
            <div key={i} className="flex flex-col space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {displayLabel}
              </span>
              <span
                className={cn(
                  "text-sm font-semibold leading-normal",
                  field.highlight ? "text-[#A11D1D] font-bold" : "text-slate-900",
                )}
              >
                {displayValue ?? t("na")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ReviewSummaryGrid({
  personalDetails,
  identityContact,
  testInformation,
}: ReviewSummaryGridProps) {
  const t = useTranslations("FormsShared.GlobalReviewStep");
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SummaryCard
          icon={<User className="size-4" />}
          title={t("personalDetails")}
          fields={personalDetails}
          colsClassName="grid-cols-1 sm:grid-cols-2"
        />
        <SummaryCard
          icon={<ShieldCheck className="size-4" />}
          title={t("identityContact")}
          fields={identityContact}
          colsClassName="grid-cols-1 sm:grid-cols-2"
        />
      </div>
      <SummaryCard
        icon={<Globe className="size-4" />}
        title={t("testInformation")}
        fields={testInformation}
        colsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  );
}

// ─── GlobalReviewStep ─────────────────────────────────────────────────────────

interface GlobalReviewStepProps {
  onEdit: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;

  // Payment Section State
  paymentMethodValue: string;
  onPaymentMethodChange: (val: string) => void;
  paymentMethodError?: any;

  // Order Summary Details
  examName: string;
  baseFee: number;
  serviceFee: number;
  total: number;
  selectedCourseData?: any;
  selectedWorkshopData?: any;

  // Layout / Details
  children: React.ReactNode;

  reviewStepNumber: number;
  paymentStepNumber: number;

  customOrderSummary?: React.ReactNode;
}

export function GlobalReviewStep({
  onEdit,
  onSubmit,
  paymentMethodValue,
  onPaymentMethodChange,
  paymentMethodError,
  examName,
  baseFee,
  serviceFee,
  total,
  selectedCourseData,
  selectedWorkshopData,
  children,
  reviewStepNumber,
  paymentStepNumber,
  customOrderSummary,
}: GlobalReviewStepProps) {
  const t = useTranslations("FormsShared.GlobalReviewStep");
  const selectedCoursePrice = selectedCourseData
    ? (selectedCourseData.discounted_price ??
       selectedCourseData.price * (1 - (selectedCourseData.special_discount || 0) / 100))
    : 0;
  const selectedWorkshopPrice = selectedWorkshopData ? selectedWorkshopData.price : 0;
  const calculatedSubtotal = baseFee + serviceFee + selectedCoursePrice + selectedWorkshopPrice;
  const vatAmount = calculateVat(calculatedSubtotal);

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Stepper step={reviewStepNumber}>{t("title")}</Stepper>
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              {t("title")}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {t("description")}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={onEdit}
            className="text-primary hover:text-primary hover:bg-primary/5 font-bold flex items-center gap-2 px-4 py-2 self-start md:self-center"
          >
            <Edit3 className="size-4" /> {t("editDetails")}
          </Button>
        </div>

        {/* Exam-specific detailed breakdown */}
        {children}
      </div>

      {/* Payment Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Stepper step={paymentStepNumber}>{t("payment")}</Stepper>
          {/* <div className="text-right">
            <PriceDisplay
              amount={total}
              className="text-2xl font-black text-[#A11D1D] flex items-center justify-end"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <PaymentMethodSelector
                value={paymentMethodValue}
                onChange={onPaymentMethodChange}
                error={paymentMethodError}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              {t("iAcceptPay")}
            </Button>
          </div>

          <div className="bg-slate-50/50 rounded-2xl border border-slate-100 space-y-6 h-fit md:sticky md:top-24 p-2">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
              <CreditCard className="w-5 h-5 text-[#A11D1D]" />
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                {t("orderSummary")}
              </h3>
            </div>

            <div className="space-y-4">
              {customOrderSummary ? (
                customOrderSummary
              ) : (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">{t("examFee", { name: examName })}</span>
                    <PriceDisplay
                      amount={baseFee}
                      className="font-bold text-slate-900"
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      {t("registrationServiceFee")}
                    </span>
                    <PriceDisplay
                      amount={serviceFee}
                      className="font-bold text-slate-900"
                    />
                  </div>

                  {selectedCourseData && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">
                        {t("courseFee", { name: selectedCourseData.name })}
                      </span>
                      <PriceDisplay
                        amount={
                          selectedCourseData.discounted_price ??
                          selectedCourseData.price *
                            (1 - (selectedCourseData.special_discount || 0) / 100)
                        }
                        className="font-bold text-slate-900"
                      />
                    </div>
                  )}

                  {selectedWorkshopData && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">
                        {t("workshopFee", { name: selectedWorkshopData.name })}
                      </span>
                      <PriceDisplay
                        amount={selectedWorkshopData.price}
                        className="font-bold text-slate-900"
                      />
                    </div>
                  )}

                  {VAT_PERCENT > 0 && (
                    <>
                      <div className="flex justify-between text-sm pt-4 border-t border-slate-100">
                        <span className="text-slate-500 font-semibold">{t("subtotal")}</span>
                        <PriceDisplay
                          amount={calculatedSubtotal}
                          className="font-bold text-slate-900"
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">
                          {t("vat", { percent: VAT_PERCENT })}
                        </span>
                        <PriceDisplay
                          amount={vatAmount}
                          className="font-bold text-slate-900"
                        />
                      </div>
                    </>
                  )}

                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="font-black text-md uppercase">
                        {t("totalAmount")}
                      </span>
                      <PriceDisplay
                        amount={total}
                        className="text-3xl font-black text-primary"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
