"use client";

import React from "react";
import { format } from "date-fns";
import {
  User,
  ShieldCheck,
  Globe,
  CreditCard,
  Edit3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { TPteAcademicSchema } from "../_type";
import Payment from "@/components/blocks/payment";
import { PriceDisplay } from "@/components/ui/price-display";
import Stepper from "@/components/stepper";


interface ReviewStepProps {
  data: TPteAcademicSchema;
  form: UseFormReturn<TPteAcademicSchema>;
  onEdit: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onInvalid: (errors: any) => void;
  baseFee: number;
  serviceFee: number;
  vat: number;
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
  vat,
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
    <form onSubmit={onSubmit} className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Review Your Details
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Please confirm all information is correct before proceeding to payment.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={onEdit}
            className="text-primary hover:text-primary hover:bg-primary/5 font-bold flex items-center gap-2 px-4 py-2 self-start md:self-center"
          >
            <Edit3 className="size-4" /> Edit Details
          </Button>
        </div>

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
                  {data.documentNumber || "N/A"}
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
      </div>

      {/* Payment Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Stepper step={4}>Payment</Stepper>
          <div className="text-right">
            <PriceDisplay
              amount={total}
              className="text-2xl font-black text-[#A11D1D] flex items-center justify-end"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <Payment amount={total} currency={"AED"} />
            </div>
            <Button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              Book
            </Button>
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
              <CreditCard className="w-5 h-5 text-[#A11D1D]" />
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">Order Summary</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">PTE Academic Exam</span>
                <PriceDisplay amount={baseFee} className="font-bold text-slate-900" />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Registration Service Fee</span>
                <PriceDisplay amount={serviceFee} className="font-bold text-slate-900" />
              </div>

              {data.selectedCourse && selectedCourseData && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Course: {selectedCourseData.name}
                  </span>
                  <PriceDisplay
                    amount={selectedCourseData.price}
                    className="font-bold text-slate-900"
                  />
                </div>
              )}

              {data.selectedWorkshop && selectedWorkshopData && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Workshop: {selectedWorkshopData.name}
                  </span>
                  <PriceDisplay
                    amount={selectedWorkshopData.price}
                    className="font-bold text-slate-900"
                  />
                </div>
              )}

              <div className="pt-6 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                    Total Amount
                  </span>
                  <PriceDisplay
                    amount={total}
                    className="text-3xl font-black text-[#A11D1D]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
