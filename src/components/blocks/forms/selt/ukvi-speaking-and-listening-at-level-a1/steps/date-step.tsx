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
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <Stepper step={1}>Select Exam Date & Time</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>Select Date (Mon, Tue, Wed Only)</FieldLabel>
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
                  const isPast =
                    date < new Date(new Date().setHours(0, 0, 0, 0));
                  return !isAllowed || isPast;
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
                  ].map((slot) => (
                    <div key={slot.id} className="space-y-3">
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          timeSlot === slot.id
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-slate-100 bg-white hover:border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={slot.id} id={slot.id} />
                          <p className="text-sm font-medium">{slot.id}</p>
                        </div>
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
