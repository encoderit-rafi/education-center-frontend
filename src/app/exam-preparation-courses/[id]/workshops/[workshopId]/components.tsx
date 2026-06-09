import React from "react";
import { CheckCircle2, type LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// WorkshopChecklistSection
// ---------------------------------------------------------------------------

interface WorkshopChecklistSectionProps {
  title: string;
  icon: LucideIcon;
  /** string[] OR newline-separated string */
  items: string[] | string | null | undefined;
  fallback?: string;
}

export function WorkshopChecklistSection({
  title,
  icon: Icon,
  items,
  fallback,
}: WorkshopChecklistSectionProps) {
  let list: string[] = [];

  if (Array.isArray(items)) {
    list = items.filter(Boolean);
  } else if (typeof items === "string") {
    list = items
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  }

  if (!list.length && !fallback) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
        <Icon className="size-5 text-primary" />
        {title}
      </h2>
      <div className="h-px bg-slate-100" />
      <ul className="space-y-3 text-slate-600 font-medium text-sm">
        {list.length > 0 ? (
          list.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))
        ) : (
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
            <span>{fallback}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// WorkshopStatCard
// ---------------------------------------------------------------------------

interface WorkshopStatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  suffix?: string;
  compact?: boolean;
}

export function WorkshopStatCard({
  icon: Icon,
  label,
  value,
  suffix,
  compact = false,
}: WorkshopStatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
      <div>
        <Icon className="size-6 text-primary mb-3" />
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </p>
      </div>
      <p
        className={`font-black text-slate-800 mt-2 ${
          compact ? "text-sm line-clamp-2" : "text-lg"
        }`}
      >
        {value}
        {suffix ? ` ${suffix}` : ""}
      </p>
    </div>
  );
}
