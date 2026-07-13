"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/consts";
import { FieldError } from "@/components/ui/field";

export function useRecaptcha() {
  const captchaRef = useRef<TurnstileInstance | null>(null);
  const tokenRef = useRef<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    tokenRef.current = token;
  };

  const validateCaptcha = (errorMessage: string): string | null => {
    if (!TURNSTILE_SITE_KEY) return "";

    const token = tokenRef.current;
    if (!token) {
      setCaptchaError(errorMessage);
      return null;
    }

    setCaptchaError(null);
    return token;
  };

  const resetCaptcha = () => {
    captchaRef.current?.reset();
    tokenRef.current = null;
    setCaptchaError(null);
  };

  const clearCaptchaError = () => setCaptchaError(null);

  return {
    captchaRef,
    captchaError,
    validateCaptcha,
    resetCaptcha,
    clearCaptchaError,
    setToken,
    isEnabled: Boolean(TURNSTILE_SITE_KEY),
  };
}

type FormRecaptchaProps = {
  captchaRef: React.RefObject<TurnstileInstance | null>;
  error?: string | null;
  onChange?: () => void;
  setToken?: (token: string | null) => void;
};

export function FormRecaptcha({ captchaRef, error, onChange, setToken }: FormRecaptchaProps) {
  if (!TURNSTILE_SITE_KEY) {
    return null;
  }

  return (
    <div className="space-y-2">
      <Turnstile
        ref={captchaRef}
        siteKey={TURNSTILE_SITE_KEY}
        onSuccess={(token) => {
          setToken?.(token);
          onChange?.();
        }}
        onExpire={() => {
          setToken?.(null);
        }}
        onError={() => {
          setToken?.(null);
        }}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}
