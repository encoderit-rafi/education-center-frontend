"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  required = false,
  ...props
}: React.ComponentProps<"label"> & { required?: boolean }) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex text-nowrap items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        required && "after:content-['*'] after:ml-0.5 after:text-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
