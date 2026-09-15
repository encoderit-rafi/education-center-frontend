"use client";
import React, { useCallback, useState, forwardRef, useEffect, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";

// shadcn
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

// data
import { countries } from "country-data-list";

// Country interface
export interface Country {
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  currencies: string[];
  emoji?: string;
  ioc: string;
  languages: string[];
  name: string;
  status: string;
}

// Dropdown props
interface CountryDropdownProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  options?: Country[];
  onChange?: (country: Country) => void;
  value?: string;
  slim?: boolean;
  placeholder?: string;
}

const formatCountryName = (name: string): string => {
  if (!name) return name;
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const DEFAULT_COUNTRY_OPTIONS: Country[] = countries.all
  .filter(
    (country: Country) =>
      country.emoji && country.status !== "deleted" && country.ioc !== "PRK",
  )
  .map((country: Country) => ({
    ...country,
    name: formatCountryName(country.name),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

/** Get Arabic name for a country given its alpha2 code, or fall back to English name. */
function getArabicName(alpha2: string, fallback: string): string {
  try {
    const displayNames = new Intl.DisplayNames(["ar"], { type: "region" });
    const name = displayNames.of(alpha2.toUpperCase());
    return name || fallback;
  } catch {
    return fallback;
  }
}

const CountryDropdownComponent = (
  {
    options = DEFAULT_COUNTRY_OPTIONS,
    onChange,
    value,
    disabled = false,
    placeholder,
    slim = false,
    className,
    ...props
  }: CountryDropdownProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined,
  );
  const t = useTranslations("CountryDropdown");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const displayPlaceholder = placeholder || t("placeholder");

  // Pre-compute Arabic names for all options once
  const arabicNamesMap = useMemo(() => {
    if (!isArabic) return null;
    const map: Record<string, string> = {};
    options.forEach((c) => {
      map[c.alpha2] = getArabicName(c.alpha2, c.name);
    });
    return map;
  }, [isArabic, options]);

  const getDisplayName = (country: Country) =>
    isArabic && arabicNamesMap ? arabicNamesMap[country.alpha2] || country.name : country.name;

  useEffect(() => {
    let initialCountry: Country | undefined = undefined;
    if (value) {
      initialCountry = options.find(
        (country) =>
          country.alpha3 === value ||
          country.alpha2 === value ||
          country.name === value ||
          country.name.toLowerCase() === value.toLowerCase(),
      );
    }
    setSelectedCountry((prev) => {
      if (prev?.alpha3 === initialCountry?.alpha3 && prev?.name === initialCountry?.name) {
        return prev;
      }
      return initialCountry;
    });
  }, [value, options]);

  const handleSelect = useCallback(
    (country: Country) => {

      setSelectedCountry(country);
      onChange?.(country);
      setOpen(false);
    },
    [onChange],
  );

  const triggerClasses = cn(
    "flex w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base transition-[color,box-shadow,background-color] outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm placeholder:text-slate-400 [&>span]:line-clamp-1",
    open && "border-primary ring-3 ring-ring/30",
    slim === true && "w-20",
    className,
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        type="button"
        className={triggerClasses}
        disabled={disabled}
        {...props}
      >
          {selectedCountry ? (
            <div className="flex items-center flex-1 w-0 gap-2 overflow-hidden text-left">
              <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                <CircleFlag
                  countryCode={selectedCountry.alpha2.toLowerCase()}
                  height={20}
                />
              </div>
              {slim === false && (
                <span className="truncate font-medium" dir={isArabic ? "rtl" : "ltr"}>
                  {getDisplayName(selectedCountry)}
                </span>
              )}
            </div>
          ) : (
            <span className="text-slate-400">
              {slim === false ? displayPlaceholder : <Globe size={20} />}
            </span>
          )}
          <ChevronDown
            size={16}
            className={cn(
              "shrink-0 text-slate-500 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
          </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={4}
        // Prevent Base UI from moving focus into the popup on open,
        // which would cause the browser to scroll to the search input.
        initialFocus={false}
        className="w-(--anchor-width) min-w-48 p-0"
      >
          <Command className="w-full max-h-75 overflow-hidden bg-white text-slate-700">
            <div className="p-1 border-b border-slate-100">
              <CommandInput
                placeholder={t("searchPlaceholder")}
                className="h-9 px-2 outline-none w-full bg-slate-50"
              />
            </div>
            <CommandList className="max-h-75 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-track]:bg-slate-800 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600">
              <CommandEmpty className="py-6 text-center text-sm text-slate-500">
                {t("emptyMessage")}
              </CommandEmpty>
              <CommandGroup>
                {options
                  .filter((x) => x.name)
                  .map((option, key: number) => {
                    const arabicName = isArabic && arabicNamesMap ? arabicNamesMap[option.alpha2] : null;
                    return (
                      <CommandItem
                        key={key}
                        onSelect={() => handleSelect(option)}
                        className="flex items-center gap-2 rounded text-sm outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50"
                      >
                        <CheckIcon
                          className={cn(
                            "h-4 w-4 shrink-0 text-primary",
                            option.name === selectedCountry?.name
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        <div className="flex items-center gap-2 flex-1 min-w-0 text-slate-700">
                          <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                            <CircleFlag
                              countryCode={option.alpha2.toLowerCase()}
                              height={20}
                            />
                          </div>
                          {arabicName ? (
                            <div className="grid grid-cols-2 flex-1 min-w-0 gap-1 items-center">
                              <span className="truncate text-xs text-slate-400">{option.name}</span>
                              <span className="truncate font-medium text-slate-700 text-right" dir="rtl">{arabicName}</span>
                            </div>
                          ) : (
                            <span className="truncate font-medium">{option.name}</span>
                          )}
                        </div>
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
            </CommandList>
          </Command>
      </PopoverContent>
    </Popover>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);
