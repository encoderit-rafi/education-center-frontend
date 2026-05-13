"use client";

import React from "react";
import { format } from "date-fns";
import {
  User,
  ShieldCheck,
  Globe,
  CreditCard,
  Edit3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { TIeltsAcademicSchema } from "../_type";
import Payment from "@/components/blocks/payment";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Stepper from "@/components/stepper";

interface ReviewStepProps {
  data: TIeltsAcademicSchema;
  form: UseFormReturn<TIeltsAcademicSchema>;
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
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const formData = watch();

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Review Your Details
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Please confirm all information is correct before proceeding to
              payment.
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
            <div className="flex items-center gap-2 text-slate-400">
              <User className="size-4" />
              <span className="text-xs font-bold tracking-widest">
                PERSONAL DETAILS
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Full Name
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.givenNames} {data.middleName} {data.surnames}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Date of Birth
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.dateOfBirth ? format(data.dateOfBirth, "PPP") : "N/A"}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Gender
                </span>
                <span className="text-sm font-semibold text-slate-700 capitalize">
                  {data.sex}
                </span>
              </div>
            </div>
          </div>

          {/* Identity & Contact Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-bold tracking-widest">
                IDENTITY & CONTACT
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  {data.idType?.replace("_", " ").toUpperCase()}
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.idNumber}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Email
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  {data.idType?.replace("_", " ").toUpperCase()} EXPIRY
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.idExpiryDate ? format(data.idExpiryDate, "PPP") : "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  IDENTITY DOCUMENT
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.idDocument ? (data.idDocument as File).name : "No file attached"}
                </span>
              </div>
            </div>
          </div>

          {/* Test Info Summary */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-400">
              <Globe className="size-4" />
              <span className="text-xs font-bold tracking-widest">
                TEST INFORMATION
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Exam Date
                </span>
                <span className="text-sm font-semibold text-primary">
                  {data.examDate ? format(data.examDate, "PPP") : "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Time Slot
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.examTimeSlot === "9:00 AM"
                    ? "Morning Session (09:00 AM)"
                    : data.examTimeSlot === "11:00 AM"
                      ? "Morning Session (11:00 AM)"
                      : "Morning Session"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.city}, {data.residenceCountry}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  P.O. BOX / POSTAL CODE
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.poBox || "N/A"} / {data.postcode || "N/A"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold">
                  First Language
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data.firstLanguage}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secure Payment Stepper */}
      <div className="flex items-center justify-between">
        <Stepper step={3}>Secure Payment</Stepper>
        <div className="text-right">
          <span className="text-2xl font-black text-primary">
            {total.toFixed(2)}{" "}
            <span className="text-xs font-bold text-slate-400">AED</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <Payment amount={total} currency={"aed"} />
          </div>
          <Button
            type="submit"
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
          >
            Book
            {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
        </div>

        <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
            <CreditCard className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg text-slate-800">Order Summary</h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">IELTS Academic Exam</span>
              <span className="font-medium">{baseFee.toFixed(2)} AED</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Registration Service Fee</span>
              <span className="font-medium">{serviceFee.toFixed(2)} AED</span>
            </div>

            {data.selectedCourse && selectedCourseData && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Course: {selectedCourseData.name}
                </span>
                <span className="font-medium text-emerald-600">
                  +
                  {(
                    selectedCourseData.price *
                    (1 - selectedCourseData.special_discount / 100)
                  ).toFixed(2)}{" "}
                  AED
                </span>
              </div>
            )}

            {data.selectedWorkshop && selectedWorkshopData && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Workshop: {selectedWorkshopData.name}
                </span>
                <span className="font-medium text-emerald-600">
                  +{selectedWorkshopData.price.toFixed(2)} AED
                </span>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="font-black text-slate-900 tracking-tight">
                  Total Amount
                </span>
                <span className="text-3xl font-black text-primary">
                  {total.toFixed(2)}{" "}
                  <span className="text-xs font-bold text-primary/60">AED</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
