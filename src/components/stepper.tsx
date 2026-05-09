import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

function Stepper({
  step = 1,
  title,
  className,
  ...props
}: ComponentProps<"div"> & { step: number; title: string }) {
  return (
    <div {...props} className={cn("flex items-center gap-3", className)}>
      <span className="size-9 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
        {step}
      </span>
      <h2 className="text-xl font-black text-secondary tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default Stepper;
