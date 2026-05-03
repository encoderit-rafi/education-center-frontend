import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function GradientBox({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("relative overflow-hidden bg-primary", className)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5" />
      </div>

      {children}
    </section>
  );
}
