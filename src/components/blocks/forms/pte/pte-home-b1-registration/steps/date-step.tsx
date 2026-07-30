"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
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
  value: Date | undefined;
  timeSlot: string;
  onChange: (date: Date | undefined) => void;
  onTimeSlotChange: (slot: string) => void;
  onNext: () => void;
  onBack: () => void;
  error?: any;
  timeSlotError?: any;
}

const B1_SCHEDULE: Record<number, string[]> = {
  1: ["1:15 PM"], // Monday
};

function getSlotDateTime(date: Date, slotTimeStr: string): Date {
  const checkDate = new Date(date);
  const match = slotTimeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();
    if (ampm === "PM" && hours < 12) {
      hours += 12;
    } else if (ampm === "AM" && hours === 12) {
      hours = 0;
    }
    checkDate.setHours(hours, minutes, 0, 0);
  }
  return checkDate;
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
  const t = useTranslations("FormsShared.DateStep");
  const availableSlots = value ? B1_SCHEDULE[value.getDay()] || [] : [];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <Stepper step={2}>{t("selectDate")}</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>{t("selectDateLabel")}</FieldLabel>
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
                    const slots = B1_SCHEDULE[day] || [];
                    return slots.length > 0;
                  },
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const day = date.getDay();
                  const slots = B1_SCHEDULE[day] || [];
                  if (slots.length === 0) return true;
                  const now = new Date();
                  return slots.every((slot) => {
                    const slotDate = getSlotDateTime(date, slot);
                    return slotDate.getTime() - now.getTime() < 24 * 60 * 60 * 1000;
                  });
                }}
                className="w-full max-w-xl mx-auto border rounded-md p-4 sm:p-8 bg-white shadow-xl"
              />
              <FieldError errors={[error]} className="mt-4 text-center" />
            </FieldContent>
          </Field>

          <div className="space-y-8">
            <Field data-invalid={!!timeSlotError}>
              <FieldLabel required>{t("availableTimeSlots")}</FieldLabel>
              <FieldContent>
                {value ? (
                  <RadioGroup
                    value={timeSlot}
                    onValueChange={onTimeSlotChange}
                    className="grid gap-4"
                  >
                    {availableSlots.map((slot) => {
                      const isDisabled = (() => {
                        if (!value) return true;
                        const now = new Date();
                        const slotDate = getSlotDateTime(value, slot);
                        return slotDate.getTime() - now.getTime() < 24 * 60 * 60 * 1000;
                      })();
                      return (
                        <Label
                          key={slot}
                          htmlFor={slot}
                          className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${isDisabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                            } ${timeSlot === slot
                              ? "border-primary bg-primary/5 ring-1 ring-primary"
                              : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={slot} id={slot} disabled={isDisabled} />
                            <p className="text-sm font-medium">{slot}</p>
                          </div>
                        </Label>
                      );
                    })}
                  </RadioGroup>
                ) : (
                  <div className="p-8 rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-2">
                    <CalendarIcon className="w-8 h-8 text-slate-200" />
                    <p className="text-sm text-slate-400 font-medium">{t("pleaseSelectDateFirst")}</p>
                  </div>
                )}
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>


          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button
            type="button"
            onClick={onBack}
          >
            {t("back")}
          </Button>
          <Button
            type="button"
            onClick={onNext}
            disabled={!value || !timeSlot}
          >
            {t("next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
