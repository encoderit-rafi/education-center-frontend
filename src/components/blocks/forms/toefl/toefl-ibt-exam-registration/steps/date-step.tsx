"use client";

import React from "react";
import { ArrowRight, Calendar as CalendarIcon } from "lucide-react";
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
                onSelect={(date) => date && onChange(date)}
                modifiers={{
                  available: (date) => date.getDay() === 3,
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const isWednesday = date.getDay() === 3;
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isPast = date < today;
                  return !isWednesday || isPast;
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
                    { id: "AM", label: "AM" },
                    { id: "PM", label: "PM" },
                  ].map((slot) => (
                    <div key={slot.id}>
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${timeSlot === slot.id
                          ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]"
                          : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                      >
                        <RadioGroupItem value={slot.id} id={slot.id} />
                        <p className="font-bold text-slate-900">{slot.label}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>
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
