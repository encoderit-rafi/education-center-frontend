import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../../ui/button";
import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
const BaseCardTitle = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "text-xl font-black text-slate-900 text-nowrap group-hover:text-primary transition-colors tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
const BaseCardDescription = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "font-normal text-sm leading-relaxed text-slate-500 line-clamp-3",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
const BaseCardImportantInfo = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "rounded-md border border-dashed border-primary/40 bg-primary/5 p-3 text-xs leading-relaxed text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
const BaseCardIcon = ({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 [&_svg]:size-6",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
const BaseCard = ({
  className,
  children,
  ...props
}: PropsWithChildren & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "group flex flex-col space-y-6 rounded-xl border border-slate-300 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardImportantInfo,
  BaseCardIcon,
};
