import React from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

export default function Payment() {
  if (!stripeKey) {
    return (
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 text-sm">
        <p className="font-bold mb-2">Stripe Key Missing</p>
        <p className="opacity-80">Please add <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to your <code>.env.local</code> file to enable payments.</p>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: 100, // $1
        currency: "usd",
        paymentMethodTypes: ["card"],
      }}
    >
      <PaymentElement />
    </Elements>
  );
}
