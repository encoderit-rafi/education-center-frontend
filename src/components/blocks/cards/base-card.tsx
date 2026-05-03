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
        "text-xl font-black text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight",
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
const BaseCard = ({
  className,
  children,
  ...props
}: PropsWithChildren & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "group flex flex-col space-y-6 rounded-xl border border-slate-300 bg-white p-8  transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { BaseCard, BaseCardTitle, BaseCardDescription };
