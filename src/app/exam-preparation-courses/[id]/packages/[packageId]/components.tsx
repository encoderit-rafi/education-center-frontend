import React from "react";
import { CheckCircle2, type LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// PackageChecklistSection
// ---------------------------------------------------------------------------

interface PackageChecklistSectionProps {
  /** Section heading text */
  title: string;
  /** Lucide icon to render next to the heading */
  icon: LucideIcon;
  /**
   * Items to render.
   * - string[]  → rendered as-is
   * - string    → split by "\n", trimmed, empty lines dropped
   */
  items: string[] | string | null | undefined;
  /** Fallback text when no items are found */
  fallback?: string;
}

export function renderChecklistItem(text: string | React.ReactNode) {
  if (typeof text !== "string") return text;
  const parts = text.split("**");
  if (parts.length <= 1) return text;
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
}

export function PackageChecklistSection({
  title,
  icon: Icon,
  items,
  fallback = "Comprehensive preparation targeting all exam modules.",
}: PackageChecklistSectionProps) {
  // Normalise to string[]
  let list: string[] = [];

  if (Array.isArray(items)) {
    list = items;
    // Support {goals: string[]} shape from legacy API response
    if (
      list.length === 0 &&
      items &&
      typeof items === "object" &&
      !Array.isArray(items) &&
      (items as any).goals
    ) {
      list = (items as any).goals as string[];
    }
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
      <div className="space-y-3">
        <ul className="space-y-3 text-slate-600 font-medium text-sm">
          {list.length > 0 ? (
            list.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span>{renderChecklistItem(item)}</span>
              </li>
            ))
          ) : (
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
              <span>{renderChecklistItem(fallback)}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PackageStatCard
// ---------------------------------------------------------------------------

interface PackageStatCardProps {
  /** Lucide icon */
  icon: LucideIcon;
  /** Label rendered in small caps above the value */
  label: string;
  /** Main value text */
  value: string;
  /** Optional suffix appended after the value (e.g. "Hours", "weeks") */
  suffix?: string;
  /** Use smaller text for longer values (e.g. schedule info) */
  compact?: boolean;
}

export function PackageStatCard({
  icon: Icon,
  label,
  value,
  suffix,
  compact = false,
}: PackageStatCardProps) {
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
