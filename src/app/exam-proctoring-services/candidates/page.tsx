"use client";

import {
  CheckCircle2,
  Info,
  Clock,
  CreditCard,
  CalendarDays,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { AED } from "@/components/ui/aed";
import { PriceDisplay } from "@/components/ui/price-display";

type FeeEntry = {
  duration: string;
  fee: string;
};

const FEES: FeeEntry[] = [
  { duration: "60 min", fee: "250" },
  { duration: "120 min", fee: "300" },
  { duration: "150 min", fee: "350" },
  { duration: "180 min", fee: "400" },
  { duration: "210 min", fee: "450" },
  { duration: "240 min", fee: "500" },
];

const columnHelper = createColumnHelper<FeeEntry>();

const columns = [
  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => <span className="text-base">{info.getValue()}</span>,
  }),
  columnHelper.accessor("fee", {
    header: "Fee",
    cell: (info) => (
      <div className="text-right">
        <PriceDisplay
          amount={parseInt(info.getValue())}
          className="text-xl font-bold text-white"
        />
        <AED className="h-3 ml-1 text-white inline-block" />
      </div>
    ),
  }),
];

export default function TestTakersPage() {
  const table = useReactTable({
    data: FEES,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* 1. Compact Minimal Header */}
      <header className="bg-white border-b border-gray-100 py-10">
        <div className="container px-6 mx-auto lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide leading-none mb-4">
              For <span className="text-primary">Candidates</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              Professional proctoring services for students from other
              institutions who need a secure and monitored environment for their
              exams.
            </p>
          </div>
        </div>
      </header>

      <main className="container px-6 mx-auto lg:px-24 py-10 space-y-8">
        {/* 2. Main Split Content: Booking & Fees */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Booking Process (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 tracking-wide mb-6 flex items-center gap-3">
              <div className="w-1 rounded-full h-6 bg-[#A11D1D]"></div>
              How to Book Your Proctored Exam
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 group">
                <span className="text-3xl font-bold text-gray-100 group-hover:text-[#A11D1D]/20 transition-colors">
                  1.
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-wider mb-1">
                    Review Rules & Regulations
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Review the rules of your home institution carefully. Pay
                    attention to deadlines, requirements, and rules for external
                    testing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <span className="text-3xl font-bold text-gray-100 group-hover:text-[#A11D1D]/20 transition-colors">
                  2.
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-wider mb-1">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium mb-4">
                    Speak to our staff about requirements, duration, format
                    (computer/paper), date, time, and accommodations.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#A11D1D]">
                      <Phone className="w-4 h-4" /> +971 4 333 3616
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#A11D1D]">
                      <Mail className="w-4 h-4" /> info@tepth.net
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <span className="text-3xl font-bold text-gray-100 group-hover:text-[#A11D1D]/20 transition-colors">
                  3.
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-wider mb-1">
                    Inform Your Home Institution
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Provide them our contact details so they can send us your
                    exam package. If no return envelope is provided, we can
                    arrange a courier (extra charge).
                  </p>
                  <div className="mt-3 text-xs text-gray-400 italic">
                    &quot;We are not responsible for the package after courier
                    collection.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Fees (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#A11D1D] p-6 md:p-8 rounded-xl text-white shadow-xl">
              <h2 className="text-xl font-bold tracking-wide mb-6 flex items-center justify-between text-white">
                Proctoring Fees
              </h2>

              <table className="w-full text-sm">
                <thead>
                  {table.getHeaderGroups().map((hg) => (
                    <tr key={hg.id} className="border-b border-white/20">
                      {hg.headers.map((header) => (
                        <th
                          key={header.id}
                          className={`pb-3 font-bold tracking-widest text-white text-xs ${header.id === "fee" ? "text-right" : "text-left"}`}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b text-white border-white/10 hover:bg-white/5 transition-colors "
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={`py-3 px-4 ${cell.column.id === "fee" ? "text-right" : "font-bold"}`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 pt-6 border-t border-white/20 space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-white/80 tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-white" /> One proctor
                  provided
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-white/80 tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Per exam, per
                  session
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Payment & Day-of (Grid 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 tracking-widest mb-4 flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#A11D1D]" /> 5. Payment
              Method
            </h3>
            <ul className="space-y-3">
              {[
                "Cash or Card on/before exam day",
                "Electronic payment via online link",
                "Wire transfer (Candidate covers charges)",
              ].map((m, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium text-gray-500"
                >
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>{" "}
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-50 text-xs font-bold text-[#A11D1D] rounded-lg leading-relaxed">
              Highly recommended to pay in advance to avoid payment failure and
              inconvenience that could result in cancelling your exam.
            </div>
          </div>

          {/* Day-of */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 tracking-widest mb-4 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-[#A11D1D]" /> 6. On Exam Day
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium mb-4">
              Arrive early to settle in and avoid anxiety. Bring an approved
              valid photo ID and follow home institution regulations.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold text-[#A11D1D] bg-gray-50 p-4 rounded-lg border border-gray-100">
              <Info className="w-4 h-4" /> Double-check ID & belongings before
              leaving.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
