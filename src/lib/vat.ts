const rawVat = process.env.NEXT_PUBLIC_VAT ?? process.env.VAT;
export const VAT_PERCENT =
  rawVat !== undefined && rawVat.trim() !== "" ? Number(rawVat) : 0;

/** Full country name returned by the CountryDropdown for UAE. */
export const UAE_COUNTRY_NAME = "United Arab Emirates";

/**
 * Checks if the given country name matches the United Arab Emirates.
 */
export function isUaeCountry(country?: string | null): boolean {
  if (!country) return false;
  const normalized = country.trim().toLowerCase();
  return (
    normalized === "united arab emirates" ||
    normalized === "uae" ||
    normalized === "ae"
  );
}

/**
 * Basic VAT calculation for an amount.
 */
export function calculateVat(amount: number): number {
  if (VAT_PERCENT <= 0 || !amount || amount <= 0) return 0;
  return Number((amount * (VAT_PERCENT / 100)).toFixed(2));
}

export function addVat(amount: number): number {
  return Number((amount + calculateVat(amount)).toFixed(2));
}

/**
 * VAT Rules (Updated):
 *
 * 1. Paid Mock Test:
 *    - Home-based:
 *        - UAE: Yes
 *        - Non-UAE: No
 *    - Center-based:
 *        - UAE & Non-UAE: Yes
 *
 * 2. Book Exam:
 *    - UAE & Non-UAE: Yes
 *
 * 3. Prep Course & Workshop:
 *    - Group, semi-private, one-to-one in person, hybrid one-to-one (classroom/in-person/hybrid):
 *        - UAE & Non-UAE: Yes
 *    - Online:
 *        - UAE: Yes
 *        - Non-UAE: No
 */

/**
 * Determines if VAT applies for Paid Mock Test.
 */
export function shouldApplyPaidMockTestVat(
  location?: string | null,
  country?: string | null
): boolean {
  if (VAT_PERCENT <= 0) return false;
  const isCenter = (location || "").toLowerCase().includes("center");
  if (isCenter) return true;
  return isUaeCountry(country);
}

/**
 * Determines if VAT applies for Book Exam.
 */
export function shouldApplyExamBookingVat(): boolean {
  return VAT_PERCENT > 0;
}

/**
 * Determines if VAT applies for Prep Course & Workshop.
 */
export function shouldApplyCourseOrWorkshopVat(
  deliveryType?: string | null,
  country?: string | null,
  nameOrTitle?: string | null
): boolean {
  if (VAT_PERCENT <= 0) return false;

  const typeStr = (deliveryType || "").trim().toLowerCase();
  const nameStr = (nameOrTitle || "").trim().toLowerCase();

  // If online delivery only (and not hybrid/in-person)
  const isOnline =
    (typeStr === "online" || nameStr.includes("online")) &&
    !typeStr.includes("hybrid") &&
    !typeStr.includes("classroom") &&
    !typeStr.includes("in-person") &&
    !nameStr.includes("hybrid") &&
    !nameStr.includes("in person") &&
    !nameStr.includes("in-person");

  if (isOnline) {
    return isUaeCountry(country);
  }

  // Group, semi-private, one-to-one in person, hybrid one-to-one, classroom -> VAT applied for all countries
  return true;
}

/** Legacy general VAT check by country */
export function shouldApplyVat(country: string): boolean {
  return VAT_PERCENT > 0 && isUaeCountry(country);
}

/** Returns the VAT amount only when applicable for the given billing country. */
export function calculateVatForCountry(amount: number, country: string): number {
  if (!shouldApplyVat(country)) return 0;
  return calculateVat(amount);
}

