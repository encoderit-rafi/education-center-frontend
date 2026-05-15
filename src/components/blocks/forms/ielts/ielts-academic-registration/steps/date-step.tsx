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
  timeSlot?: "9:00 AM" | "11:00 AM" | "";
  onChange: (date: Date) => void;
  onTimeSlotChange: (slot: "9:00 AM" | "11:00 AM") => void;
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
        <Stepper step={1}>Select Exam Date & Time</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>Select Date</FieldLabel>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => date && onChange(date)}
                disabled={(date) => {
                  // Deactivate only Sunday (0)
                  const isSunday = date.getDay() === 0;

                  // Also deactivate past dates
                  const isPast = date < new Date();

                  return isSunday || isPast;
                }}
                className="rounded-2xl border border-slate-100 shadow-sm p-4 bg-white [--calendar-accent:theme(colors.primary.DEFAULT)]"
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
                  onValueChange={(val) => onTimeSlotChange(val as "9:00 AM" | "11:00 AM")}
                  className="grid gap-4"
                >
                  {[
                    { id: "9:00 AM", label: "Morning Session", time: "09:00 AM" },
                    { id: "11:00 AM", label: "Afternoon Session", time: "11:00 AM" },
                  ].map((slot) => (
                    <div key={slot.id} className="space-y-3">
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${timeSlot === slot.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                      >
                        <div className="flex items-center justify-between w-full overflow-hidden">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={slot.id} id={slot.id} />
                            <div>
                              <p className="font-bold text-slate-900">{slot.label}</p>
                              <p className="text-sm font-medium">Starts at {slot.time}</p>
                            </div>
                          </div>
                        </div>
                      </Label>
                      {timeSlot === slot.id && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-sm font-medium leading-relaxed">
                            {slot.id === "9:00 AM"
                              ? "The Speaking Test usually takes place in the afternoon. This will be confirmed by the British Council."
                              : "The Speaking Test usually takes place in the morning. This will be confirmed by the British Council."}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </RadioGroup>
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium">
              Note: Please select your preferred test date. Public Holidays & Sunday will be deactivated separately.
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button

            onClick={onBack}
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            disabled={!value || !timeSlot}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
