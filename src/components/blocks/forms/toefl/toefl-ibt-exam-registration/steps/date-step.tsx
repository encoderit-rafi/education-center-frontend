"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import Stepper from "@/components/stepper";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface DateStepProps {
  value?: Date;
  timeSlot?: "AM" | "PM" | "";
  onChange: (date: Date) => void;
  onTimeSlotChange: (slot: "AM" | "PM") => void;
  onNext: () => void;
  onBack: () => void;
  error?: any;
  timeSlotError?: any;
}

export function DateStep({
  value,
  timeSlot,
  onChange,
  onTimeSlotChange,
  onNext,
  onBack,
  error,
  timeSlotError,
}: DateStepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <Stepper step={1}>Select Exam Date &amp; Time</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>Select Date</FieldLabel>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => {
                  if (date) {
                    onChange(date);
                    if (date.getDay() === 6) {
                      onTimeSlotChange("AM");
                    } else if (date.getDay() === 3) {
                      onTimeSlotChange("PM");
                    }
                  }
                }}
                modifiers={{
                  available: (date) => date.getDay() === 3 || date.getDay() === 6,
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const isWednesday = date.getDay() === 3;
                  const isSaturday = date.getDay() === 6;
                  const now = new Date();
                  if (isWednesday) {
                    const checkDate = new Date(date);
                    checkDate.setHours(13, 0, 0, 0); // 1:00 PM
                    return checkDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
                  }
                  if (isSaturday) {
                    const checkDate = new Date(date);
                    checkDate.setHours(10, 0, 0, 0); // 10:00 AM
                    return checkDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
                  }
                  return true;
                }}
                className="w-full max-w-xl mx-auto border rounded-md p-8 bg-white shadow-xl"
              />
              <FieldError errors={[error]} className="mt-4 text-center" />
            </FieldContent>
          </Field>

          <div className="space-y-8">
            <Field data-invalid={!!timeSlotError}>
              <FieldLabel required>Available Time Slots</FieldLabel>
              <FieldContent>
                <RadioGroup
                  value={timeSlot}
                  onValueChange={(val) => onTimeSlotChange(val as "AM" | "PM")}
                  className="grid gap-4"
                >
                  {[
                    {
                      id: "AM",
                      label: "10:00 AM",
                      disabled: (() => {
                        if (value?.getDay() === 3) return true;
                        if (!value) return true;
                        const now = new Date();
                        const checkDate = new Date(value);
                        checkDate.setHours(10, 0, 0, 0);
                        return checkDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
                      })(),
                    },
                    {
                      id: "PM",
                      label: "1:00 PM",
                      disabled: (() => {
                        if (value?.getDay() === 6) return true;
                        if (!value) return true;
                        const now = new Date();
                        const checkDate = new Date(value);
                        checkDate.setHours(13, 0, 0, 0);
                        return checkDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
                      })(),
                    },
                  ].map((slot) => (
                    <div key={slot.id}>
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          slot.disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                        } ${timeSlot === slot.id
                          ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]"
                          : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                      >
                        <RadioGroupItem value={slot.id} id={slot.id} disabled={slot.disabled} />
                        <p className="font-bold text-slate-900">{slot.label}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-relaxed space-y-1">
              <p>
                <span className="font-bold text-slate-700">Note:</span> You may also reach out to us at{" "}
                <a href="tel:+97165531250" className="text-[#A11D1D] hover:underline font-semibold">+97165531250</a> or{" "}
                <a href="mailto:info@tepth.org" className="text-[#A11D1D] hover:underline font-semibold">info@tepth.org</a>{" "}
                and confirm the Test date availability before you proceed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button onClick={onBack}>Back</Button>
          <Button onClick={onNext} disabled={!value || !timeSlot}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
