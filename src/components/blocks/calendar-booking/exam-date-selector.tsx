"use client"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ExamDateSelectorProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date | undefined) => void;
  selectedTime?: string;
  onTimeSelect?: (time: string) => void;
  disabledDates?: (date: Date) => boolean;
}

const TIME_SLOTS = [
  "09:00 AM",
  "11:30 AM",
  "02:00 PM",
  "04:30 PM",
  "07:00 PM"
];

export function ExamDateSelector({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect,
  disabledDates
}: ExamDateSelectorProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#A11D1D]">
          <CalendarDays className="w-5 h-5" />
          <h3 className="text-sm font-black uppercase tracking-widest">Select Exam Date</h3>
        </div>

        <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden">
          <CardContent className="p-4 bg-white">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateSelect}
              className="w-full"
              numberOfMonths={2}
              captionLayout="label"
              classNames={{
                day: "text-lg md:text-xl p-2",
                month_caption: "mb-4",
                caption_label: "text-base w-full items-center justify-center flex font-black uppercase tracking-widest",
              }}
              disabled={disabledDates || ((date) =>
                date < new Date() || date > new Date(new Date().getFullYear() + 1, 11, 31)
              )}
              initialFocus
            />
          </CardContent>
        </Card>
      </div>

      {selectedDate && (
        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2 text-[#A11D1D]">
            <span className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h3 className="text-sm font-black uppercase tracking-widest">Available Time Slots</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => onTimeSelect?.(time)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 group",
                  selectedTime === time
                    ? "border-[#A11D1D] bg-[#A11D1D]/5 shadow-md shadow-[#A11D1D]/5"
                    : "border-slate-100 bg-white hover:border-slate-200"
                )}
              >
                <span className={cn(
                  "text-sm font-black tracking-tight transition-colors",
                  selectedTime === time ? "text-[#A11D1D]" : "text-gray-900 group-hover:text-[#A11D1D]"
                )}>
                  {time}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500">
                  Available
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in zoom-in duration-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-0.5">Booking confirmed for:</p>
              <p className="text-sm font-black text-slate-900">
                {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} at {selectedTime}
              </p>
            </div>
          </div>
          <p className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Seat available
          </p>
        </div>
      )}
    </div>
  )
}
