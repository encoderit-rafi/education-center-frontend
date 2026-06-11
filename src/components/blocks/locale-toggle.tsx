"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function getLocaleCookie(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)locale=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : "en";
}

const LOCALES = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];

export function LocaleToggle() {
  const router = useRouter();
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    setLocale(getLocaleCookie());
  }, []);

  function handleChange(next: string | null) {
    if (!next) return;
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    setLocale(next);
    router.refresh();
  }

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        // size="sm"
        size="sm"
        className="w-auto gap-1.5 px-2.5 font-semibold text-xs text-primary"
      >
        <Globe className="w-3.5 h-3.5 shrink-0" />
        <SelectValue className="uppercase font-normal text-secondary" />
      </SelectTrigger>
      <SelectContent align="end">
        {LOCALES.map((l) => (
          <SelectItem key={l.value} value={l.value}>
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
