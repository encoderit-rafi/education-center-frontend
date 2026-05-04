"use client";

import * as React from "react";
import { format, addMonths, subMonths } from "date-fns";
import { enGB } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface SearchCalendarProps {
  selectedRange: { from: Date | undefined; to: Date | undefined };
  onRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  onSearch?: () => void;
  className?: string;
}

export function SearchCalendar({
  selectedRange,
  onRangeChange,
  onSearch,
  className,
}: SearchCalendarProps) {
  const [month, setMonth] = React.useState<Date>(selectedRange.from || new Date());

  const handlePreviousMonth = () => {
    setMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setMonth((prev) => addMonths(prev, 1));
  };

  const handleClear = () => {
    onRangeChange({ from: undefined, to: undefined });
  };

  return (
    <div className={cn("flex flex-col items-center w-full max-w-4xl p-6 rounded-lg bg-[#ebf3ff]", className)}>
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">From:</span>
            <span className="text-lg font-bold">
              {selectedRange.from ? format(selectedRange.from, "d MMMM yyyy") : "---"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">To:</span>
            <span className="text-lg font-bold">
              {selectedRange.to ? format(selectedRange.to, "d MMMM yyyy") : "---"}
            </span>
          </div>
        </div>
        <button
          onClick={handleClear}
          type="button"
          className="text-[#0056b3] font-bold hover:underline cursor-pointer px-2 py-1"
        >
          Clear
        </button>
      </div>

      {/* Calendar Card */}
      <div className="relative w-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 pb-12">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 h-11 w-11 p-0 flex items-center justify-center transition-transform hover:scale-105"
            onClick={handlePreviousMonth}
            type="button"
          >
            <ChevronLeft className="h-7 w-7 text-gray-400" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 h-11 w-11 p-0 flex items-center justify-center transition-transform hover:scale-105"
            onClick={handleNextMonth}
            type="button"
          >
            <ChevronRight className="h-7 w-7 text-gray-400" />
          </Button>
        </div>

        {/* DayPicker */}
        <div className="flex justify-center">
          <DayPicker
            mode="range"
            selected={{ from: selectedRange.from, to: selectedRange.to }}
            onSelect={(range) => {
              onRangeChange({ from: range?.from, to: range?.to });
            }}
            month={month}
            onMonthChange={setMonth}
            numberOfMonths={2}
            showOutsideDays={false}
            locale={enGB}
            className="border-none p-0 m-0"
            classNames={{
              months: "flex flex-col sm:flex-row gap-12 justify-center",
              month: "space-y-4",
              month_caption: "flex justify-center pt-1 relative items-center mb-4",
              caption_label: "text-lg font-bold text-gray-700",
              nav: "hidden", 
              table: "w-full border-collapse space-y-1",
              weekdays: "flex border-b border-gray-100 pb-2 mb-2",
              weekday: "text-gray-400 rounded-md w-9 font-medium text-[0.85rem] uppercase text-center",
              week: "flex w-full mt-1",
              day: cn(
                "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20",
                "font-bold aria-selected:opacity-100 hover:bg-[#e0edff] hover:rounded-md transition-all flex items-center justify-center"
              ),
              range_start: "!bg-[#0056b3] !text-white !rounded-full z-10",
              range_end: "!bg-[#0056b3] !text-white !rounded-full z-10",
              range_middle: "!bg-[#e0edff] !text-[#0056b3] !rounded-none",
              today: "text-[#0056b3] font-black",
              outside: "text-gray-300 opacity-50",
              disabled: "text-gray-300 opacity-50",
              hidden: "invisible",
            }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-10 mb-8 border-t border-dotted border-gray-300" />

      {/* Action Button */}
      <Button
        onClick={onSearch}
        className="w-full max-w-sm h-14 rounded-full bg-[#0056b3] hover:bg-[#004494] text-lg font-bold shadow-lg"
      >
        Search for tests
      </Button>
    </div>
  );
}
