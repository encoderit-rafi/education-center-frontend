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
  timeSlot?: "9:00 AM" | "1:00 PM" | "";
  speakingSlot?: string;
  onChange: (date: Date) => void;
  onTimeSlotChange: (slot: "9:00 AM" | "1:00 PM") => void;
  onSpeakingSlotChange: (slot: string) => void;
  onNext: () => void;
  onBack: () => void;
  error?: any;
  timeSlotError?: any;
  speakingSlotError?: any;
}

export function DateStep({
  value,
  timeSlot,
  speakingSlot,
  onChange,
  onTimeSlotChange,
  onSpeakingSlotChange,
  onNext,
  onBack,
  error,
  timeSlotError,
  speakingSlotError,
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
                modifiers={{
                  available: (date) => date.getDay() === 0,
                }}
                modifiersClassNames={{
                  available:
                    "font-semibold text-primary underline underline-offset-4 decoration-primary",
                }}
                disabled={(date) => {
                  const isPast =
                    date < new Date(new Date().setHours(0, 0, 0, 0));
                  return isPast || date.getDay() !== 0;
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
                  onValueChange={(val) =>
                    onTimeSlotChange(val as "9:00 AM" | "1:00 PM")
                  }
                  className="grid gap-4"
                >
                  {[
                    {
                      id: "9:00 AM",
                      time: "09:00 AM",
                    },
                    {
                      id: "1:00 PM",
                      time: "1:00 PM",
                    },
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
                              <p className="text-sm font-medium">
                                {slot.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Label>
                      {timeSlot === slot.id && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-sm font-medium leading-relaxed mb-3">
                            {slot.id === "9:00 AM"
                              ? "The Speaking Test usually takes place in the afternoon. This will be confirmed by the British Council."
                              : "The Speaking Test usually takes place in the morning. This will be confirmed by the British Council."}
                          </p>
                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                              Select Speaking Slot
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {(slot.id === "9:00 AM"
                                ? [
                                  "1:00 PM",
                                  "1:20 PM",
                                  "1:40 PM",
                                  "2:00 PM",
                                  "2:20 PM",
                                  "2:40 PM",
                                  "3:00 PM",
                                  "3:20 PM",
                                  "3:40 PM",
                                  "4:00 PM",
                                ]
                                : [
                                  "9:00 AM",
                                  "9:20 AM",
                                  "9:40 AM",
                                  "10:00 AM",
                                  "10:20 AM",
                                  "10:40 AM",
                                  "11:00 AM",
                                  "11:20 AM",
                                  "11:40 AM",
                                  "12:00 PM",
                                  "12:20 PM",
                                  "12:40 PM",

                                ]
                              ).map((sSlot) => {
                                const isSelected = speakingSlot === sSlot;
                                return (
                                  <button
                                    key={sSlot}
                                    type="button"
                                    onClick={() => onSpeakingSlotChange(sSlot)}
                                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${isSelected
                                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                                      }`}
                                  >
                                    {sSlot}
                                  </button>
                                );
                              })}
                            </div>
                            {speakingSlotError && (
                              <p className="text-xs font-semibold text-destructive mt-2">
                                {speakingSlotError.message}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </RadioGroup>
                <FieldError errors={[timeSlotError, speakingSlotError]} className="mt-4" />
              </FieldContent>
            </Field>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-sm font-medium">
              Note: The speaking test might be conducted in-person or via
              video-call on exam day.This will be confirmed by the British Council.
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button onClick={onBack}>Back</Button>
          <Button onClick={onNext} disabled={!value || !timeSlot || !speakingSlot}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
