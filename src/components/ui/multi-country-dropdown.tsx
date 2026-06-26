"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";
import { useTranslations } from "next-intl";
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
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { countries } from "country-data-list";

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

interface MultiCountryDropdownProps {
  onChange?: (selectedNames: string[]) => void;
  value?: string[]; // array of country names or codes
  placeholder?: string;
  maxSelections?: number;
  className?: string;
}

const MultiCountryDropdownComponent = (
  {
    onChange,
    value = [],
    placeholder = "-Select Countries-",
    maxSelections = 5,
    className,
    ...props
  }: MultiCountryDropdownProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const t = useTranslations("CountryDropdown");

  const options: Country[] = countries.all.filter(
    (country: Country) =>
      country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
  );

  // Sync state with prop
  useEffect(() => {
    if (value && value.length > 0) {
      const matched = options.filter(
        (c) => value.includes(c.name) || value.includes(c.alpha2) || value.includes(c.alpha3)
      );
      setSelectedCountries(matched);
    } else {
      setSelectedCountries([]);
    }
  }, [value, options]);

  const handleSelect = useCallback(
    (country: Country) => {
      const isSelected = selectedCountries.some((c) => c.name === country.name);
      let updated: Country[];

      if (isSelected) {
        updated = selectedCountries.filter((c) => c.name !== country.name);
      } else {
        if (selectedCountries.length >= maxSelections) {
          // Prevent selecting more than the maximum limit
          return;
        }
        updated = [...selectedCountries, country];
      }

      setSelectedCountries(updated);
      onChange?.(updated.map((c) => c.name));
    },
    [selectedCountries, maxSelections, onChange]
  );

  const displayLabel = selectedCountries.length > 0
    ? selectedCountries.map((c) => c.name).join(", ")
    : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        type="button"
        className={cn(
          "flex w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base transition-[color,box-shadow,background-color] outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-slate-400 [&>span]:line-clamp-1",
          open && "border-primary ring-3 ring-ring/30",
          className
        )}
        {...props}
      >
        <span className={cn("truncate text-left flex-1 font-medium", selectedCountries.length === 0 && "text-slate-400")}>
          {displayLabel}
        </span>
        <ChevronDown size={16} className={cn("shrink-0 text-slate-500 transition-transform duration-200", open && "rotate-180")} />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" sideOffset={4} className="w-(--anchor-width) min-w-[12rem] p-0" initialFocus={false}>
        <Command className="w-full max-h-[300px] overflow-hidden bg-white text-slate-700">
          <div className="p-1 border-b border-slate-100">
            <CommandInput placeholder={t("searchPlaceholder")} className="h-9 px-2 outline-none w-full bg-slate-50" />
          </div>
          <CommandList className="max-h-[300px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-track]:bg-slate-800 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600">
            <CommandEmpty className="py-6 text-center text-sm text-slate-500">{t("emptyMessage")}</CommandEmpty>
            <CommandGroup>
              {options.filter((x) => x.name).map((option, key) => {
                const isChecked = selectedCountries.some((c) => c.name === option.name);
                const isDisabled = !isChecked && selectedCountries.length >= maxSelections;

                return (
                  <CommandItem
                    key={key}
                    onSelect={() => !isDisabled && handleSelect(option)}
                    className={cn(
                      "flex items-center gap-2 rounded text-sm outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50 p-2",
                      isDisabled && "opacity-50 cursor-not-allowed pointer-events-none"
                    )}
                  >
                    <Checkbox checked={isChecked} disabled={isDisabled} className="h-4 w-4 rounded border-slate-300" />
                    <div className="flex items-center gap-2 flex-1 truncate text-slate-700">
                      <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag countryCode={option.alpha2.toLowerCase()} height={20} />
                      </div>
                      <span className="truncate font-medium">{option.name}</span>
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

export const MultiCountryDropdown = forwardRef(MultiCountryDropdownComponent);
