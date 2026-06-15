"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  function handleChange(next: string) {
    if (!next) return;
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    setLocale(next);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          data-slot="dropdown-menu-trigger"
          className="hover:cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md has-[>svg]:px-2.5 gap-1.5 h-9 px-2.5 text-app-text"
          type="button"
        >
          <Languages className="size-4" />
          <span className="uppercase text-xs font-semibold">{locale}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {LOCALES.map((l) => (
            <DropdownMenuRadioItem key={l.value} value={l.value}>
              {l.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

