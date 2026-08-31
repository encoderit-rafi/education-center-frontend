import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButtonProps,
} from "react-day-picker";
import { useLocale } from "next-intl";
import { ar } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  captionLayout = "dropdown",
  buttonVariant = "ghost",
  fromYear = new Date().getFullYear(),
  toYear = new Date().getFullYear() + 50,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  fromYear?: number;
  toYear?: number;
}) {
  const defaultClassNames = getDefaultClassNames();
  const activeLocale = useLocale();
  const calendarLocale = props.locale || (activeLocale === "ar" ? ar : undefined);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={calendarLocale}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] sm:[--cell-size:--spacing(10)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      startMonth={props.startMonth || new Date(fromYear, 0)}
      endMonth={props.endMonth || new Date(toYear, 11)}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(activeLocale === "ar" ? "ar" : "en-US", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-full", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months,
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none -mt-2",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none -mt-2",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-bold justify-center h-10 gap-2 mb-2 ",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative has-focus:border-primary border border-slate-200 shadow-sm has-focus:ring-primary/20 has-focus:ring-[3px] rounded-md bg-white transition-all",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "absolute inset-0 opacity-0 cursor-pointer z-10",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "select-none font-black text-slate-800",
          captionLayout === "label"
            ? "text-lg uppercase tracking-widest"
            : "rounded-md px-2 flex items-center gap-1 text-xs h-7 [&>svg]:text-muted-foreground [&>svg]:size-3",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex w-full justify-between", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md w-(--cell-size) h-(--cell-size) flex items-center justify-center font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday,
        ),
        week: cn("flex w-full mt-2 justify-between", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number,
        ),
        day: cn(
          "relative w-(--cell-size) h-(--cell-size) p-0.5 flex items-center justify-center group/day select-none",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day,
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: DayButtonProps) {
  const defaultClassNames = getDefaultClassNames();
  const [mounted, setMounted] = React.useState(false);

  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={mounted ? day.date.toLocaleDateString() : undefined}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        !modifiers.disabled &&
          "bg-(--calendar-available,transparent) text-(--calendar-available-text,inherit)",
        "data-[selected-single=true]:bg-(--calendar-accent,#A11D1D) data-[selected-single=true]:text-(--calendar-accent-foreground,white) data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-(--calendar-accent,#A11D1D) data-[range-start=true]:text-(--calendar-accent-foreground,white) data-[range-end=true]:bg-(--calendar-accent,#A11D1D) data-[range-end=true]:text-(--calendar-accent-foreground,white) group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-full w-full items-center justify-center gap-1 leading-none font-black text-base group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70 transition-colors",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
