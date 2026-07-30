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
import { useCalendarTranslations } from "@/lib/translations";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const isSlotDisabled = (date: Date | undefined, slotId: string) => {
  if (!date) return true;
  const now = new Date();
  const slotDate = new Date(date);

  if (slotId === "10:00 AM") {
    slotDate.setHours(10, 0, 0, 0);
  } else if (slotId === "1:30 PM") {
    slotDate.setHours(13, 30, 0, 0);
  } else if (slotId === "5:30 PM") {
    slotDate.setHours(17, 30, 0, 0);
  } else {
    return true;
  }

  return slotDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
};

interface DateStepProps {
  value?: Date;
  timeSlot?: "10:00 AM" | "1:30 PM" | "5:30 PM" | "";
  onChange: (date: Date) => void;
  onTimeSlotChange: (slot: "10:00 AM" | "1:30 PM" | "5:30 PM") => void;
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
  const t = useCalendarTranslations();
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <Stepper step={1}>{t.selectExamDateTime}</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>{t.selectDate}</FieldLabel>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => date && onChange(date)}
                modifiers={{
                  available: (date) => [1, 2, 3].includes(date.getDay()),
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const day = date.getDay();
                  const isAllowed = day >= 1 && day <= 3;
                  const allSlotsDisabled =
                    isSlotDisabled(date, "10:00 AM") &&
                    isSlotDisabled(date, "1:30 PM") &&
                    isSlotDisabled(date, "5:30 PM");
                  return !isAllowed || allSlotsDisabled;
                }}
                className="w-full max-w-xl mx-auto border rounded-md p-4 sm:p-8 bg-white shadow-xl"
              />
              <FieldError errors={[error]} className="mt-4 text-center" />
            </FieldContent>
          </Field>

          <div className="space-y-8">
            <Field data-invalid={!!timeSlotError}>
              <FieldLabel required>{t.availableTimeSlots}</FieldLabel>
              <FieldContent>
                <RadioGroup
                  value={timeSlot}
                  onValueChange={(val) => onTimeSlotChange(val as any)}
                  className="grid gap-4"
                >
                  {[
                    {
                      id: "10:00 AM",
                      label: "Morning Session",
                      time: "10:00 AM",
                    },
                    {
                      id: "1:30 PM",
                      label: "Afternoon Session",
                      time: "01:30 PM",
                    },
                    {
                      id: "5:30 PM",
                      label: "Evening Session",
                      time: "05:30 PM",
                    },
                  ].map((slot) => {
                    const disabled = isSlotDisabled(value, slot.id);
                    return (
                      <div key={slot.id} className="space-y-3">
                        <Label
                          htmlFor={slot.id}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${disabled
                              ? "border-slate-100 bg-slate-50 opacity-50 pointer-events-none cursor-not-allowed"
                              : timeSlot === slot.id
                                ? "border-primary bg-primary/5 ring-1 ring-primary"
                                : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={slot.id} id={slot.id} disabled={disabled} />
                            <p className="text-sm font-medium">{slot.id}</p>
                          </div>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>


          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button onClick={onBack}>{t.back}</Button>
          <Button
            onClick={onNext}
            disabled={!value || !timeSlot || isSlotDisabled(value, timeSlot)}
          >
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
}
