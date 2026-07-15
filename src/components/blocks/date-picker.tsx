"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { ar } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: (date: Date) => boolean;
  className?: string;
  "aria-invalid"?: boolean;
  name?: string;
  fromYear?: number;
  toYear?: number;
  calendarClassName?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  disabled,
  className,
  "aria-invalid": ariaInvalid,
  name,
  fromYear,
  toYear,
  calendarClassName,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const activeLocale = useLocale();

  const handleSelect = (date: Date | undefined) => {
    if (onChange) {
      onChange(date);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            name={name}
            aria-invalid={ariaInvalid}
            className={cn(
              "w-full justify-start text-left font-normal rounded-md border border-slate-200 px-3 py-2 text-sm transition-all outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 shadow-none hover:shadow-none hover:bg-transparent aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
              !value && "text-muted-foreground",
              className,
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-slate-400 " />
            {value ? (
              format(value, "PPP", { locale: activeLocale === "ar" ? ar : undefined })
            ) : (
              <span className="text-slate-400">{placeholder}</span>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start" initialFocus={false}>
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          disabled={disabled}
          fromYear={fromYear}
          toYear={toYear}
          className={calendarClassName}
        />
      </PopoverContent>
    </Popover>
  );
}
