/**
 * Helper utilities for course discount calculation.
 * Standard discounts by course name:
 * - Group Course / Group Classroom: 10%
 * - Semi-Private Course / Semi-Private Classroom: 15%
 * - Online One-to-One / Private Online / VIP Online: 20%
 * - In-Person One-to-One / VIP Classroom / Classroom: 20%
 * - Hybrid One-to-One: 25%
 */

export function getCourseDiscountPercentage(
  courseName: string = "",
  fallbackDiscount: number = 0
): number {
  if (!courseName) return fallbackDiscount;
  const name = courseName.toLowerCase();
  if (name.includes("group")) return 10;
  if (name.includes("semi-private")) return 15;
  if (name.includes("hybrid")) return 25;
  if (
    name.includes("online") &&
    (name.includes("one-to-one") ||
      name.includes("1-to-1") ||
      name.includes("private") ||
      name.includes("vip"))
  ) {
    return 20;
  }
  if (
    name.includes("in-person") ||
    name.includes("classroom") ||
    name.includes("one-to-one") ||
    name.includes("1-to-1") ||
    name.includes("vip") ||
    name.includes("private")
  ) {
    return 20;
  }
  return fallbackDiscount;
}

export function calculateCourseDiscountedPrice(
  basePrice: number,
  courseName: string = "",
  fallbackDiscount: number = 0,
  discountType: "PERCENTAGE" | "FIXED" | null = "PERCENTAGE"
): number {
  if (!basePrice || isNaN(basePrice)) return 0;
  const discountVal = getCourseDiscountPercentage(courseName, fallbackDiscount);
  if (discountType === "FIXED") {
    return Math.max(0, basePrice - discountVal);
  }
  return basePrice * (1 - discountVal / 100);
}
