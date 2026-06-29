export const VAT_PERCENT = Number(
  process.env.NEXT_PUBLIC_VAT || process.env.VAT || "5"
);

export function calculateVat(amount: number): number {
  return Number((amount * (VAT_PERCENT / 100)).toFixed(2));
}

export function addVat(amount: number): number {
  return Number((amount + calculateVat(amount)).toFixed(2));
}
