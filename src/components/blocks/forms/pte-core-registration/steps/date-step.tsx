"use client";
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

const PTE_CORE_SCHEDULE: Record<number, string[]> = {
  6: ["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"], // Saturday
  0: ["6:15 PM"], // Sunday
  1: ["10:00 AM", "3:30 PM", "6:15 PM"], // Monday
  2: ["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"], // Tuesday
  3: ["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"], // Wednesday
  4: [], // Thursday (As per image)
  5: [], // Friday (Closed)
};

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
  const availableSlots = value ? PTE_CORE_SCHEDULE[value.getDay()] : [];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <Stepper step={2}>Select Exam Date & Time</Stepper>

        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <Field data-invalid={!!error}>
            <FieldLabel required>Select Date</FieldLabel>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => {
                  onChange(date);
                  onTimeSlotChange(""); // Reset time slot on date change
                }}
                disabled={(date) => {
                  const day = date.getDay();
                  const isClosed = !PTE_CORE_SCHEDULE[day] || PTE_CORE_SCHEDULE[day].length === 0;
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                  return isClosed || isPast;
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
                {value ? (
                  <RadioGroup
                    value={timeSlot}
                    onValueChange={onTimeSlotChange}
                    className="grid gap-4"
                  >
                    {availableSlots.map((slot) => (
                      <Label
                        key={slot}
                        htmlFor={slot}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${timeSlot === slot
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={slot} id={slot} />
                          <div>
                            <p className="font-bold text-slate-900">
                              Session
                            </p>
                            <p className="text-xs text-slate-500 font-medium">Starts at {slot}</p>
                          </div>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="p-8 rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-2">
                    <CalendarIcon className="w-8 h-8 text-slate-200" />
                    <p className="text-sm text-slate-400 font-medium">Please select a date first</p>
                  </div>
                )}
                <FieldError errors={[timeSlotError]} className="mt-4" />
              </FieldContent>
            </Field>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium">
              Note: Please select your preferred test date. Available slots are based on the weekly schedule.
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
