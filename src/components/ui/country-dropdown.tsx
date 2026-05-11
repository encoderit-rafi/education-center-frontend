"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";

// shadcn
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import * as PopoverPrimitive from "@radix-ui/react-popover";

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
interface CountryDropdownProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    options?: Country[];
    onChange?: (country: Country) => void;
    value?: string;
    slim?: boolean;
    placeholder?: string;
}

const CountryDropdownComponent = (
    {
        options = countries.all.filter(
            (country: Country) =>
                country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
        ),
        onChange,
        value,
        disabled = false,
        placeholder = "Select a country",
        slim = false,
        className,
        ...props
    }: CountryDropdownProps,
    ref: React.ForwardedRef<HTMLButtonElement>
) => {
    const [open, setOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
        undefined
    );

    useEffect(() => {
        if (value) {
            const initialCountry = options.find(
                (country) => 
                    country.alpha3 === value || 
                    country.alpha2 === value || 
                    country.name === value
            );
            if (initialCountry) {
                setSelectedCountry(initialCountry);
            } else {
                // Reset selected country if value is not found
                setSelectedCountry(undefined);
            }
        } else {
            // Reset selected country if value is undefined or null
            setSelectedCountry(undefined);
        }
    }, [value, options]);

    const handleSelect = useCallback(
        (country: Country) => {
            console.log("🌍 CountryDropdown value: ", country);
            setSelectedCountry(country);
            onChange?.(country);
            setOpen(false);
        },
        [onChange]
    );

    const triggerClasses = cn(
        "flex h-11 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-none transition-[color,box-shadow,background-color] outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive placeholder:text-slate-400 [&>span]:line-clamp-1",
        open && "border-primary ring-3 ring-ring/30",
        slim === true && "w-20",
        className
    );

    return (
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
            <PopoverPrimitive.Trigger asChild>
                <button
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
                                <span className="truncate font-medium">
                                    {selectedCountry.name}
                                </span>
                            )}
                        </div>
                    ) : (
                        <span className="text-slate-400">
                            {slim === false ? (
                                placeholder
                            ) : (
                                <Globe size={20} />
                            )}
                        </span>
                    )}
                    <ChevronDown size={16} className={cn("shrink-0 text-slate-500 transition-transform duration-200", open && "rotate-180")} />
                </button>
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    className={cn(
                        "z-50 w-[var(--radix-popover-trigger-width)] min-w-[12rem] rounded-md border border-slate-200 bg-white p-1 text-slate-700 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    )}
                >
                    <Command className="w-full max-h-[300px] overflow-hidden bg-white text-slate-700">
                        <div className="p-1 border-b border-slate-100">
                            <CommandInput placeholder="Search country..." className="h-9 px-2 outline-none w-full bg-slate-50 rounded" />
                        </div>
                        <CommandList className="overflow-y-auto no-scrollbar p-1">
                            <CommandEmpty className="py-6 text-center text-sm text-slate-500">No country found.</CommandEmpty>
                            <CommandGroup>
                                {options
                                    .filter((x) => x.name)
                                    .map((option, key: number) => (
                                        <CommandItem
                                            key={key}
                                            onSelect={() => handleSelect(option)}
                                            className="flex items-center gap-2 rounded px-2 py-2 text-sm outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50"
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "h-4 w-4 shrink-0 text-[#A11D1D]",
                                                    option.name === selectedCountry?.name
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            <div className="flex items-center gap-2 flex-1 truncate text-slate-700">
                                                <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                                                    <CircleFlag
                                                        countryCode={option.alpha2.toLowerCase()}
                                                        height={20}
                                                    />
                                                </div>
                                                <span className="truncate font-medium">{option.name}</span>
                                            </div>
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);