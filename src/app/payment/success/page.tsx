import type { Metadata } from "next";
import { Suspense } from "react";
import PaymentSuccessClient from "./payment-success-client";

export const metadata: Metadata = {
  title: "Payment Successful | TEPTH",
  description: "Your payment has been successfully processed. Thank you for choosing TEPTH.",
};

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[85vh] w-full flex items-center justify-center bg-linear-to-br from-slate-50 via-gray-50 to-slate-100/70 py-16 px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-sm font-semibold text-slate-500">Confirming your payment...</p>
          </div>
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
