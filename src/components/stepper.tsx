import { cn } from "@/lib/utils";
import { PropsWithChildren, type ComponentProps } from "react";

function Stepper({
  step = 1,
  className,
  children,
  ...props
}: PropsWithChildren & ComponentProps<"h3"> & { step: number }) {
  return (
    <h3
      {...props}
      className={cn(
        "flex items-center gap-3 text-wrap text-lg capitalize font-black text-secondary tracking-tight",
        className,
      )}
    >
      <span className="size-9 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
        {step}
      </span>
      {children}
    </h3>
  );
}

export default Stepper;
