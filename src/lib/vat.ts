const rawVat = process.env.NEXT_PUBLIC_VAT ?? process.env.VAT;
export const VAT_PERCENT =
  rawVat !== undefined && rawVat.trim() !== "" ? Number(rawVat) : 0;

/** Full country name returned by the CountryDropdown for UAE. */
export const UAE_COUNTRY_NAME = "United Arab Emirates";

/**
 * VAT rules:
 *  - Billing country = UAE  && VAT_PERCENT > 0  → apply VAT
 *  - Billing country = UAE  && VAT_PERCENT = 0  → no VAT
 *  - Billing country ≠ UAE  && VAT_PERCENT > 0  → no VAT
 */
export function shouldApplyVat(country: string): boolean {
  return VAT_PERCENT > 0 && country === UAE_COUNTRY_NAME;
}

/** Returns the VAT amount only when applicable for the given billing country. */
export function calculateVatForCountry(amount: number, country: string): number {
  if (!shouldApplyVat(country)) return 0;
  return Number((amount * (VAT_PERCENT / 100)).toFixed(2));
}

export function calculateVat(amount: number): number {
  return Number((amount * (VAT_PERCENT / 100)).toFixed(2));
}

export function addVat(amount: number): number {
  return Number((amount + calculateVat(amount)).toFixed(2));
}
