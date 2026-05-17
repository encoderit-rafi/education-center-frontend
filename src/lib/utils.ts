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
