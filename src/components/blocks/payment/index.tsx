import React from "react";
import { Elements, CardElement, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function Payment() {
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
