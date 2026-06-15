import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Removes keys from an object whose value is null, undefined, or an empty string.
 * Useful for cleaning up API payloads before submission.
 */
export function omitEmpty<T extends Record<string, unknown>>(
  obj: T,
): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== null && value !== undefined && value !== "",
    ),
  ) as Partial<T>;
}

/**
 * Maps education level raw values (snake_case IDs) to user-friendly labels.
 */
export function getEducationLevelLabel(level?: string): string {
  if (!level) return "N/A";
  const mapping: Record<string, string> = {
    secondary_up_to_16: "Secondary (up to 16 years)",
    secondary_16_19: "Secondary (16-19 years)",
    degree: "Degree (or equivalent)",
    post_graduate: "Post-graduate",
  };
  return mapping[level] || level;
}

