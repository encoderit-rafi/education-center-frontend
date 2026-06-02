import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldLabel, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: any;
}

export function PaymentMethodSelector({
  value,
  onChange,
  error,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      <FieldLabel required>Payment Method</FieldLabel>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid  gap-3"
      >
        <label
          htmlFor="payment-stripe"
          className={cn(
            "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
            value === "stripe"
              ? "border-primary bg-primary/5"
              : "hover:bg-slate-50",
          )}
        >
          <RadioGroupItem value="stripe" id="payment-stripe" />
          {/* <Image
            src="/images/stripe-logo.png"
            alt="Stripe"
            width={50}
            height={50}
          /> */}
          <span>Credit/Debit Card</span>
          <Image
            src="/images/cards.png"
            alt="Stripe"
            width={50}
            height={50}
            className="ml-auto"
          />
        </label>
        <label
          htmlFor="payment-paypal"
          className={cn(
            "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
            value === "paypal"
              ? "border-primary bg-primary/5"
              : "hover:bg-slate-50",
          )}
        >
          <RadioGroupItem value="paypal" id="payment-paypal" />
          <Image
            src="/images/paypal-logo.png"
            alt="PayPal"
            width={80}
            height={50}
          />
        </label>
      </RadioGroup>
      {error && <FieldError errors={[error]} />}
    </div>
  );
}
