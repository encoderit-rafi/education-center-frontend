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
                  return checkDate.getTime() - now.getTime() < 72 * 60 * 60 * 1000;
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
                      disabled: (() => {
                        if (!value) return true;
                        const now = new Date();
                        const checkDate = new Date(value);
                        checkDate.setHours(9, 0, 0, 0);
                        return checkDate.getTime() - now.getTime() < 72 * 60 * 60 * 1000;
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
                        return checkDate.getTime() - now.getTime() < 72 * 60 * 60 * 1000;
                      })(),
                    },
                  ].map((slot) => (
                    <div key={slot.id} className="space-y-3">
                      <Label
                        htmlFor={slot.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          slot.disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                        } ${timeSlot === slot.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                      >
                        <div className="flex items-center justify-between w-full overflow-hidden">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={slot.id} id={slot.id} disabled={slot.disabled} />
                            <div>
                              <p className="text-sm font-medium">
                                {slot.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Label>
                      {timeSlot === slot.id && (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 animate-in slide-in-from-top-2 duration-300 space-y-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                              Select Speaking Test Delivery Format
                            </p>
                            <RadioGroup
                              value={speakingSlot}
                              onValueChange={onSpeakingSlotChange}
                              className="grid gap-3"
                            >
                              <div className="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-slate-100/50 transition-colors">
                                <RadioGroupItem
                                  value="Live with the examiner at the test center (Face to face)."
                                  id={`live-${slot.id}`}
                                  className="mt-1"
                                />
                                <Label
                                  htmlFor={`live-${slot.id}`}
                                  className="text-sm font-medium leading-tight cursor-pointer text-slate-800"
                                >
                                  Live with the examiner at the test center (Face to face).
                                </Label>
                              </div>
                              <div className="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-slate-100/50 transition-colors">
                                <RadioGroupItem
                                  value="Video Call at the test centre (VCS)"
                                  id={`vcs-${slot.id}`}
                                  className="mt-1"
                                />
                                <Label
                                  htmlFor={`vcs-${slot.id}`}
                                  className="text-sm font-medium leading-tight cursor-pointer text-slate-800"
                                >
                                  Video Call at the test centre (VCS)
                                </Label>
                              </div>
                            </RadioGroup>
                            {speakingSlotError && (
                              <p className="text-xs font-semibold text-destructive mt-2">
                                {speakingSlotError.message}
                              </p>
                            )}
                          </div>
                          <div className="pt-4 border-t border-slate-200 text-sm font-medium leading-relaxed text-slate-700 space-y-2">
                            {slot.id === "9:00 AM" ? (
                              <>
                                <p>
                                  <strong>Note:</strong> The Speaking Test usually takes place in the afternoon. The Speaking Test might be conducted in-person with the examiner (face to face) or via video call on exam day. We will confirm with you the Speaking Test delivery format before we book you the test. This will still need to be confirmed by the British Council.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">
                                  You may also reach out to us at <a href={`tel:${INSTITUTIONS_INFO.phone}`} className="underline text-primary font-semibold">{INSTITUTIONS_INFO.phone}</a> or <a href={`mailto:${INSTITUTIONS_INFO.email}`} className="underline text-primary font-semibold">{INSTITUTIONS_INFO.email}</a> and confirm the Speaking Test delivery format before you proceed with the CD-IELTLS Registration on our website.
                                </p>
                              </>
                            ) : (
                              <>
                                <p>
                                  <strong>Note:</strong> The Speaking Test usually takes place in the morning. The Speaking Test might be conducted in-person with the examiner (face to face) or via video call on exam day. We will confirm with you the Speaking Test delivery format before we book you the test. This will still need to be confirmed by the British Council.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">
                                  You may also reach out to us at <a href={`tel:${INSTITUTIONS_INFO.phone}`} className="underline text-primary font-semibold">{INSTITUTIONS_INFO.phone}</a> or <a href={`mailto:${INSTITUTIONS_INFO.email}`} className="underline text-primary font-semibold">{INSTITUTIONS_INFO.email}</a> and confirm the Speaking Test delivery format before you proceed with the CD-IELTLS Registration on our website.
                                </p>
                              </>
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
