"use client";

import React from "react";
import { Edit3, CreditCard, User, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/price-display";
import Stepper from "@/components/stepper";
import { PaymentMethodSelector } from "@/components/blocks/payment-method-selector";
import { cn } from "@/lib/utils";

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

function SummarySection({
  icon,
  title,
  fields,
}: {
  icon: React.ReactNode;
  title: string;
  fields: ReviewField[];
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-black">
        {icon}
        <span className="text-xs font-bold tracking-widest uppercase">{title}</span>
      </div>
      <div className="space-y-4">
        {fields.map((field, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
              {field.label}
            </span>
            <span
              className={cn(
                "text-sm font-bold",
                field.highlight ? "text-[#A11D1D]" : "text-slate-900",
              )}
            >
              {field.value ?? "N/A"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewSummaryGrid({
  personalDetails,
  identityContact,
  testInformation,
}: ReviewSummaryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SummarySection
        icon={<User className="size-4" />}
        title="Personal Details"
        fields={personalDetails}
      />
      <SummarySection
        icon={<ShieldCheck className="size-4" />}
        title="Identity & Contact"
        fields={identityContact}
      />
      <SummarySection
        icon={<Globe className="size-4" />}
        title="Test Information"
        fields={testInformation}
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
}: GlobalReviewStepProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Stepper step={reviewStepNumber}>Review Your Details</Stepper>
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

        {/* Exam-specific detailed breakdown */}
        {children}
      </div>

      {/* Payment Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Stepper step={paymentStepNumber}>Payment</Stepper>
          <div className="text-right">
            <PriceDisplay
              amount={total}
              className="text-2xl font-black text-[#A11D1D] flex items-center justify-end"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
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
              Book
            </Button>
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
              <CreditCard className="w-5 h-5 text-[#A11D1D]" />
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900">
                Order Summary
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">
                  {examName}
                </span>
                <PriceDisplay
                  amount={baseFee}
                  className="font-bold text-slate-900"
                />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">
                  Registration Service Fee
                </span>
                <PriceDisplay
                  amount={serviceFee}
                  className="font-bold text-slate-900"
                />
              </div>

              {selectedCourseData && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Course: {selectedCourseData.name}
                  </span>
                  <PriceDisplay
                    amount={
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
