export const VAT_PERCENT = Number(
  process.env.NEXT_PUBLIC_VAT || process.env.VAT || "5"
);

export function calculateVat(amount: number): number {
  return amount * (VAT_PERCENT / 100);
}

export function addVat(amount: number): number {
  return amount + calculateVat(amount);
}
