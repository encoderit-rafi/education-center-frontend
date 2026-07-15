"use client";

import React from "react";
import { useTranslations } from "next-intl";
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
import { INSTITUTIONS_INFO } from "@/data";

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
                  if (date.getDay() !== 0) return true;
                  const now = new Date();
                  const checkDate = new Date(date);
                  checkDate.setHours(13, 0, 0, 0); // 1:00 PM (latest slot)
                  return (
                    checkDate.getTime() - now.getTime() < 72 * 60 * 60 * 1000
                  );
                }}
                className="w-full max-w-xl mx-auto border rounded-md p-4 sm:p-8 bg-white shadow-xl"
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
                      disabled: (() => {
                        if (!value) return true;
                        const now = new Date();
                        const checkDate = new Date(value);
                        checkDate.setHours(9, 0, 0, 0);
                        return (
                          checkDate.getTime() - now.getTime() <
                          72 * 60 * 60 * 1000
                        );
                      })(),
                    },
                    {
                      id: "1:00 PM",
                      time: "1:00 PM",
                      disabled: (() => {
                        if (!value) return true;
                        const now = new Date();
                        const checkDate = new Date(value);
                        checkDate.setHours(13, 0, 0, 0);
                        return (
                          checkDate.getTime() - now.getTime() <
                          72 * 60 * 60 * 1000
                        );
                      })(),
                    },
                  ].map((slot) => (
                    <div key={slot.id} className="space-y-3">
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          slot.disabled
                            ? "opacity-40 cursor-not-allowed pointer-events-none"
                            : ""
                        } ${
                          timeSlot === slot.id
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-slate-100 bg-white hover:border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full overflow-hidden">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem
                              value={slot.id}
                              id={slot.id}
                              disabled={slot.disabled}
                            />
                            <div>
                              <p className="text-sm font-medium">{slot.time}</p>
                            </div>
                          </div>
                        </div>
                      </Label>
                      {timeSlot === slot.id && (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 animate-in slide-in-from-top-2 duration-300 space-y-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider mb-3">
                              {tIelts("speakingFormat")}
                            </p>
                            <RadioGroup
                              value={speakingSlot}
                              onValueChange={onSpeakingSlotChange}
                              className="grid gap-3"
                            >
                              <div className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-slate-100/50 transition-colors">
                                <RadioGroupItem
                                  value={tIelts("speakingFaceToFace")}
                                  id={`live-${slot.id}`}
                                  className="mt-1"
                                />
                                <Label
                                  htmlFor={`live-${slot.id}`}
                                  className="text-sm font-medium leading-tight cursor-pointer text-slate-800"
                                >
                                  {tIelts("speakingFaceToFace")}
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-slate-100/50 transition-colors">
                                <RadioGroupItem
                                  value={tIelts("speakingVideoCall")}
                                  id={`vcs-${slot.id}`}
                                  className="mt-1"
                                />
                                <Label
                                  htmlFor={`vcs-${slot.id}`}
                                  className="text-sm font-medium leading-tight cursor-pointer text-slate-800"
                                >
                                  {tIelts("speakingVideoCall")}
                                </Label>
                              </div>
                            </RadioGroup>
                            {speakingSlotError && (
                              <p className="text-xs font-semibold text-destructive mt-2">
                                {speakingSlotError.message}
                              </p>
                            )}
                          </div>
                          <div className="pt-4 border-t border-slate-200 text-sm font-medium text-justify space-y-2">
                            <div className="text-sm font-medium text-justify">
                              {tIelts.rich(
                                slot.id === "9:00 AM"
                                  ? "speakingNoteMorning"
                                  : "speakingNoteAfternoon",
                                {
                                  strong: (chunks) => <strong>{chunks}</strong>,
                                  br: () => <br />,
                                  phone: INSTITUTIONS_INFO.phone,
                                  email: INSTITUTIONS_INFO.email,
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </RadioGroup>
                <FieldError
                  errors={[timeSlotError, speakingSlotError]}
                  className="mt-4"
                />
              </FieldContent>
            </Field>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button onClick={onBack}>Back</Button>
          <Button
            onClick={onNext}
            disabled={!value || !timeSlot || !speakingSlot}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
