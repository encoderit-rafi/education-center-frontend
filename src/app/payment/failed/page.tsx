import type { Metadata } from "next";
import { Suspense } from "react";
import PaymentFailedClient from "./payment-failed-client";

export const metadata: Metadata = {
  title: "Payment Failed | TEPTH",
  description: "We were unable to process your payment. Please try again or contact support.",
};

export default function PaymentFailedPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-[85vh] w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/70 py-16 px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-sm font-semibold text-slate-500">Checking transaction details...</p>
          </div>
        </div>
      }
    >
      <PaymentFailedClient />
    </Suspense>
  );
}
