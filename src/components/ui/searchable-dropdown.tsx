import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "lucide-react"

interface SearchableDropdownProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  options: { label: string; value: string }[]
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  value?: string
  onChange?: (value: string) => void
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
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    const selectedLabel = React.useMemo(
      () => options.find((opt) => opt.value === value)?.label,
      [options, value]
    )

    const handleSelect = React.useCallback(
      (val: string) => {
        onChange?.(val)
        setOpen(false)
      },
      [onChange]
    )

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            {...props}
            ref={ref}
            type="button"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-none transition-colors outline-none hover:border-slate-300 focus:ring-2 focus:ring-slate-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
              open && "ring-2 ring-slate-300 border-slate-300",
              className
            )}
          >
            <div className="flex items-center flex-1 w-0 gap-2 overflow-hidden text-left">
              <span className={cn("truncate font-medium", !value && "text-slate-400 font-normal")}>
                {selectedLabel || placeholder}
              </span>
            </div>
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200", open && "rotate-180")} />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={4}
            className={cn(
              "z-50 w-[var(--radix-popover-trigger-width)] min-w-[12rem] rounded-md border border-slate-200 bg-white p-1 text-slate-700 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            )}
          >
            <Command className="w-full max-h-[300px] overflow-hidden bg-white text-slate-700">
              <div className="p-1 border-b border-slate-100">
                <CommandInput placeholder={searchPlaceholder} className="h-9 px-2 outline-none w-full bg-slate-50 rounded" />
              </div>
              <CommandList className="overflow-y-auto no-scrollbar p-1">
                <CommandEmpty className="py-6 text-center text-sm text-slate-500">{emptyMessage}</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm outline-none cursor-default select-none hover:bg-slate-50 focus:bg-slate-50 data-[selected=true]:bg-slate-50"
                    >
                      <Check
                        className={cn(
                          "h-4 w-4 text-[#A11D1D] shrink-0",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <span className="flex-1 truncate font-medium">{option.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)

SearchableDropdown.displayName = "SearchableDropdown"
