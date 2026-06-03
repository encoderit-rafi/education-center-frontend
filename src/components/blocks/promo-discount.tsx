import { BadgePercent } from "lucide-react";
import React from "react";

export default function PromoDiscount() {
  return (
    <section className="relative overflow-hidden  mx-auto bg-primary py-14 md:py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/[0.03] blur-2xl" />

      {/* Subtle diagonal grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative px-4 lg:px-8 max-w-6xl mx-auto text-center space-y-8">
        {/* Label pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-sm">
          <BadgePercent className="size-3.5" />
          Exclusive Online Offer
        </div>

        {/* Main heading */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.08] tracking-tight">
            Save up to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">25%</span>
              <span className="absolute inset-0 -mx-2 rounded-lg bg-white/15 blur-sm" />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-xl text-white/80 leading-relaxed font-medium">
            On <em className="not-italic font-semibold text-white">some</em> of
            our courses when you book your exam and register for the course with{" "}
            <span className="font-extrabold text-white underline underline-offset-4 decoration-white/40">
              TEPTH
            </span>{" "}
            and pay online on our website.
          </p>
        </div>

        {/* Discount breakdown pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {[
            {
              label: "Group Course",
              value: "10%",
              color: "bg-emerald-400/20 border-emerald-300/30 text-emerald-100",
            },
            {
              label: "Semi-private Course",
              value: "15%",
              color: "bg-rose-400/20 border-rose-300/30 text-rose-100",
            },
            {
              label: "In-person 1-to-1",
              value: "20%",
              color: "bg-sky-400/20 border-sky-300/30 text-sky-100",
            },
            {
              label: "Online 1-to-1",
              value: "20%",
              color: "bg-amber-400/20 border-amber-300/30 text-amber-100",
            },
            {
              label: "Hybrid 1-to-1",
              value: "25%",
              color: "bg-orange-400/20 border-orange-300/30 text-orange-100",
            },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-transform duration-200 hover:scale-105 ${color}`}
            >
              <span className="font-black text-base">{value}</span>
              <span className="opacity-80">·</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
