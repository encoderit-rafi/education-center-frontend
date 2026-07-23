import React from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("FormsShared.GlobalReviewStep");
  return (
    <div className="space-y-3">
      <FieldLabel required>{t("paymentMethod")}</FieldLabel>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid gap-3"
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
          <span className="font-semibold">{t("creditCard")}</span>
          <Image
            src="/images/cards.png"
            alt="Stripe"
            width={50}
            height={50}
            className="ms-auto"
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
