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

interface DateStepProps {
  value?: Date;
  onChange: (date: Date) => void;
  onNext: () => void;
  onBack: () => void;
  error?: any;
}

export function DateStep({
  value,
  onChange,
  onNext,
  onBack,
  error,
}: DateStepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
        <Stepper step={1}>Select Exam Date</Stepper>

        <div className="mt-8 flex justify-center">
          <Field data-invalid={!!error}>
            <FieldContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => date && onChange(date)}
                disabled={(date) => date <= new Date()}
                className="rounded-2xl border border-slate-100 shadow-sm p-4 bg-white"
              />
              <FieldError errors={[error]} className="mt-4 text-center" />
            </FieldContent>
          </Field>
        </div>

        <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-700 font-medium"
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            disabled={!value}
            // className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
