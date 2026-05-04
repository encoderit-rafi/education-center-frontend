import React from "react";
import { CheckIcon, ChevronDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import { CircleFlag } from "react-circle-flags";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
    React.ComponentProps<"input">,
    "onChange" | "value" | "ref"
> &
    Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
        onChange?: (value: RPNInput.Value) => void;
    };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
    React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
        ({ className, onChange, value, ...props }, ref) => {
            return (
                <RPNInput.default
                    ref={ref}
                    className={cn("flex", className)}
                    flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={InputComponent}
                    smartCaret={false}
                    value={value || undefined}
                    /**
                     * Handles the onChange event.
                     *
                     * react-phone-number-input might trigger the onChange event as undefined
                     * when a valid phone number is not entered. To prevent this,
                     * the value is coerced to an empty string.
                     *
                     * @param {E164Number | undefined} value - The entered value
                     */
                    onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
                    {...props}
                />
            );
        },
    );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
    <Input
        className={cn("rounded-e-lg rounded-s-none h-full bg-white border-none focus-visible:ring-0 focus-visible:border-none", className)}
        {...props}
        ref={ref}
    />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    options: CountryEntry[];
    onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
    disabled,
    value: selectedCountry,
    options: countryList,
    onChange,
}: CountrySelectProps) => {
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <PopoverPrimitive.Root
            open={isOpen}
            onOpenChange={(open) => {
                setIsOpen(open);
                open && setSearchValue("");
            }}
        >
            <PopoverPrimitive.Trigger asChild>
                    <Button
                        type="button"
                        variant="ghost"
                        className="flex gap-1 rounded-e-none rounded-s-lg px-3 focus:z-10 h-full bg-white hover:bg-white"
                        disabled={disabled}
                    >
                        <FlagComponent
                            country={selectedCountry}
                            countryName={selectedCountry}
                        />
                        <ChevronDown
                            className={cn(
                                "size-4 text-slate-500 transition-transform duration-200",
                                isOpen && "rotate-180",
                                disabled ? "hidden" : "opacity-100",
                            )}
                        />
                    </Button>
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    className="z-50 w-[300px] rounded-md border border-slate-200 bg-white p-1 text-slate-700 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                >
                    <Command className="bg-white text-slate-700">
                    <div className="p-1 border-b border-slate-100">
                        <CommandInput
                            value={searchValue}
                            onValueChange={(value) => {
                                setSearchValue(value);
                                setTimeout(() => {
                                    if (scrollAreaRef.current) {
                                        const viewportElement = scrollAreaRef.current.querySelector(
                                            "[data-radix-scroll-area-viewport]",
                                        );
                                        if (viewportElement) {
                                            viewportElement.scrollTop = 0;
                                        }
                                    }
                                }, 0);
                            }}
                            placeholder="Search country..."
                            className="h-9 px-2 outline-none w-full bg-white rounded"
                        />
                    </div>
                    <CommandList className="p-1">
                        <ScrollArea ref={scrollAreaRef} className="h-72 no-scrollbar">
                            <CommandEmpty className="py-6 text-center text-sm text-slate-500">No country found.</CommandEmpty>
                            <CommandGroup>
                                {countryList.map(({ value, label }) =>
                                    value ? (
                                        <CountrySelectOption
                                            key={value}
                                            country={value}
                                            countryName={label}
                                            selectedCountry={selectedCountry}
                                            onChange={onChange}
                                            onSelectComplete={() => setIsOpen(false)}
                                        />
                                    ) : null,
                                )}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
    selectedCountry: RPNInput.Country;
    onChange: (country: RPNInput.Country) => void;
    onSelectComplete: () => void;
}

const CountrySelectOption = ({
    country,
    countryName,
    selectedCountry,
    onChange,
    onSelectComplete,
}: CountrySelectOptionProps) => {
    const handleSelect = () => {
        onChange(country);
        onSelectComplete();
    };

    return (
        <CommandItem 
            value={countryName}
            className="flex items-center gap-2 rounded px-2 py-2 text-sm outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50" 
            onSelect={handleSelect}
        >
            <CheckIcon
                className={cn(
                    "h-4 w-4 shrink-0 text-[#A11D1D]",
                    country === selectedCountry ? "opacity-100" : "opacity-0"
                )}
            />
            <div className="flex items-center gap-2 flex-1 truncate text-slate-700">
                <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                    <CircleFlag
                        countryCode={country.toLowerCase()}
                        height={20}
                    />
                </div>
                <span className="truncate font-medium">{countryName}</span>
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-tight">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
        </CommandItem>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    if (!country) {
        return <span className="flex h-4 w-6 shrink-0 bg-foreground/20" />;
    }

    return (
        <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
            <CircleFlag
                countryCode={country.toLowerCase()}
                height={20}
            />
        </div>
    );
};

export { PhoneInput };
