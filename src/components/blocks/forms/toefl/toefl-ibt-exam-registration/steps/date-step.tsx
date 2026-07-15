"use client";

import React from "react";
import { Calendar as CalendarIcon, AlertTriangle } from "lucide-react";
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
import { AED } from "@/components/ui/aed";

interface DateStepProps {
  value: Date | undefined;
  timeSlot: "AM" | "PM" | "" | undefined;
  onChange: (date: Date | undefined) => void;
  onTimeSlotChange: (slot: "AM" | "PM" | "") => void;
  onNext: () => void;
  onBack: () => void;
  error?: any;
  timeSlotError?: any;
}

const TOEFL_SCHEDULE: Record<
  number,
  { id: "AM" | "PM"; label: string; hours: number; minutes: number }[]
> = {
  3: [{ id: "PM", label: "6:00 PM", hours: 18, minutes: 0 }], // Wednesday
  6: [{ id: "AM", label: "10:00 AM", hours: 10, minutes: 0 }], // Saturday
};

function isSlotDisabled(date: Date, hours: number, minutes: number): boolean {
  const now = new Date();
  const checkDate = new Date(date);
  checkDate.setHours(hours, minutes, 0, 0);
  return checkDate.getTime() - now.getTime() < 48 * 60 * 60 * 1000;
}

function isExpressRegistration(date: Date | undefined): boolean {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const examDate = new Date(date);
  examDate.setHours(0, 0, 0, 0);
  const diffTime = examDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= 7;
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
  const availableSlots = value ? TOEFL_SCHEDULE[value.getDay()] || [] : [];
  const t = useCalendarTranslations();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <Stepper step={1}>{t.selectExamDateTime}</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>{t.selectDate}</FieldLabel>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => {
                  onChange(date);
                  onTimeSlotChange(""); // Reset time slot on date change
                }}
                modifiers={{
                  available: (date) => {
                    const day = date.getDay();
                    return (
                      TOEFL_SCHEDULE[day] && TOEFL_SCHEDULE[day].length > 0
                    );
                  },
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const day = date.getDay();
                  const slots = TOEFL_SCHEDULE[day] || [];
                  if (slots.length === 0) return true;
                  return slots.every((slot) =>
                    isSlotDisabled(date, slot.hours, slot.minutes),
                  );
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
                {value ? (
                  <RadioGroup
                    value={timeSlot}
                    onValueChange={(val) =>
                      onTimeSlotChange(val as "AM" | "PM" | "")
                    }
                    className="grid gap-4"
                  >
                    {availableSlots.map((slot) => {
                      const isDisabled = isSlotDisabled(
                        value,
                        slot.hours,
                        slot.minutes,
                      );
                      return (
                        <div key={slot.id}>
                          <Label
                            htmlFor={slot.id}
                            className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${isDisabled
                                ? "opacity-40 cursor-not-allowed pointer-events-none"
                                : ""
                              } ${timeSlot === slot.id
                                ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]"
                                : "border-slate-100 bg-white hover:border-slate-200"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem
                                value={slot.id}
                                id={slot.id}
                                disabled={isDisabled}
                              />
                              <p className="font-bold text-slate-900">
                                {slot.label}
                              </p>
                            </div>
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                ) : (
                  <div className="p-8 rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-2">
                    <CalendarIcon className="w-8 h-8 text-slate-200" />
                    <p className="text-sm text-slate-400 font-medium">
                      {t.pleaseSelectDateFirst}
                    </p>
                  </div>
                )}
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>

            {value && isExpressRegistration(value) && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm leading-relaxed space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertTriangle className="size-4 text-amber-600" />
                  <span>Express Registration Fee Applies</span>
                </div>
                <p className="text-xs text-amber-800 font-medium">
                  Since your selected exam date is 7 days or less from today, an{" "}
                  <strong>
                    Express Registration Fee of $49{" "}
                    <span className="text-xs inline-flex items-center gap-0.5">
                      (Approximately{" "}
                      <AED className="h-[0.8em] w-auto fill-current" />
                      190)
                    </span>
                  </strong>{" "}
                  will be automatically applied to your registration total.
                </p>
              </div>
            )}

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-relaxed space-y-1">
              <p>
                <span className="font-bold text-slate-700">Note:</span> You may
                also reach out to us at{" "}
                <a
                  href="tel:+97165531250"
                  className="text-[#A11D1D] hover:underline font-semibold"
                >
                  +97165531250
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@tepth.org"
                  className="text-[#A11D1D] hover:underline font-semibold"
                >
                  info@tepth.org
                </a>{" "}
                and confirm the Test date availability before you proceed with
                the TOEFL iBT Registration on our website.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button onClick={onBack}>{t.back}</Button>
          <Button onClick={onNext} disabled={!value || !timeSlot}>
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
}
