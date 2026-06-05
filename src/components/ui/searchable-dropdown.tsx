import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

interface SearchableDropdownProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  options: {
    label: string | React.ReactNode;
    value: string;
    description?: string | React.ReactNode;
  }[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchableDropdown = React.forwardRef<
  HTMLButtonElement,
  SearchableDropdownProps
>(
  (
    {
      options,
      placeholder = "Select option...",
      searchPlaceholder = "Search...",
      emptyMessage = "No results found.",
      value,
      onChange,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    const selectedLabel = React.useMemo(
      () => options.find((opt) => opt.value === value)?.label,
      [options, value],
    );

    const handleSelect = React.useCallback(
      (val: string) => {
        onChange?.(val);
        setOpen(false);
      },
      [onChange],
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          {...props}
          ref={ref}
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "flex w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base transition-[color,box-shadow,background-color] outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm placeholder:text-slate-400 [&>span]:line-clamp-1",
            open && "border-primary ring-3 ring-ring/30",
            className,
          )}
        >
          <div className="flex items-center flex-1 w-0 gap-2 overflow-hidden text-left">
            <span
              className={cn(
                "truncate font-medium",
                !value && "text-slate-400 font-normal",
              )}
            >
              {selectedLabel || placeholder}
            </span>
          </div>
          <ChevronDown
            size={16}
            className={cn(
              "shrink-0 text-slate-500 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={4}
          // Prevent Base UI from moving focus into the popup on open,
          // which would cause the browser to scroll to the input element.
          initialFocus={false}
          className="w-[var(--anchor-width)] min-w-[12rem] p-0"
        >
          <Command className="w-full max-h-[300px] overflow-hidden bg-white text-slate-700">
            <div className="p-1 border-b border-slate-100">
              <CommandInput
                placeholder={searchPlaceholder}
                className="h-9 px-2 outline-none w-full bg-slate-50"
              />
            </div>
            <CommandList className="max-h-[300px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-track]:bg-slate-800 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600">
              <CommandEmpty className="py-6 text-center text-sm text-slate-500">
                {emptyMessage}
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className="flex items-center gap-2 rounded-none px-3 py-3 text-md outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50 border-b border-red-100 last:border-0"
                  >
                    <Check
                      className={cn(
                        "h-4 w-4 text-red-600 shrink-0",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="truncate font-medium">
                        {option.label}
                      </span>
                      {option.description && (
                        <span className="truncate text-sm font-semibold text-primary">
                          {option.description}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

SearchableDropdown.displayName = "SearchableDropdown";
