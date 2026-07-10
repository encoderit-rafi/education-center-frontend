"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "@/consts";
import { FieldError } from "@/components/ui/field";

export function useRecaptcha() {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const validateCaptcha = (errorMessage: string): string | null => {
    if (!RECAPTCHA_SITE_KEY) return "";

    const token = captchaRef.current?.getValue();
    if (!token) {
      setCaptchaError(errorMessage);
      return null;
    }

    setCaptchaError(null);
    return token;
  };

  const resetCaptcha = () => {
    captchaRef.current?.reset();
    setCaptchaError(null);
  };

  const clearCaptchaError = () => setCaptchaError(null);

  return {
    captchaRef,
    captchaError,
    validateCaptcha,
    resetCaptcha,
    clearCaptchaError,
    isEnabled: Boolean(RECAPTCHA_SITE_KEY),
  };
}

type FormRecaptchaProps = {
  captchaRef: React.RefObject<ReCAPTCHA | null>;
  error?: string | null;
  onChange?: () => void;
};

export function FormRecaptcha({ captchaRef, error, onChange }: FormRecaptchaProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!RECAPTCHA_SITE_KEY || !mounted) {
    return null;
  }

  return (
    <div className="space-y-2">
      <ReCAPTCHA
        ref={captchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={() => onChange?.()}
        onExpired={() => onChange?.()}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}
