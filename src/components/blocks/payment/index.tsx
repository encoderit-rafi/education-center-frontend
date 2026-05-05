import React from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

interface PaymentProps {
  amount: number;
  currency?: string;
}

export default function Payment({ amount, currency = "aed" }: PaymentProps) {
  if (!stripeKey) {
    return (
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 text-sm">
        <p className="font-bold mb-2">Stripe Key Missing</p>
        <p className="opacity-80">
          Please add <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to your{" "}
          <code>.env.local</code> file to enable payments.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-primary/10 p-6 text-primary rounded-md border border-dashed border-primary/20 flex justify-between items-center">
        <div>
          <p className="text-xs font-black  uppercase tracking-widest mb-1">
            Total to pay
          </p>
          <p className="text-2xl font-black ">
            {amount.toLocaleString()}{" "}
            <span className="text-sm">{currency.toUpperCase()}</span>
          </p>
        </div>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: Math.round(amount * 100),
          currency: currency.toLowerCase(),
          paymentMethodTypes: ["card"],
        }}
      >
        <div>
          <PaymentElement />
        </div>
      </Elements>
    </div>
  );
}
