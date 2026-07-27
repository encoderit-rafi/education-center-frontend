import { Info } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export default function BaseNoteBox({
  title = "To continue with this booking you will need:",
  notes = [],
  className,
}: {
  title: string;
  notes: (string | React.ReactNode)[];
  className?: string;
}) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div
      className={cn(
        "bg-primary/5 border border-primary/50 border-dashed rounded-md p-4",
        className
      )}
    >
      <h3 className="text-primary font-bold flex items-center gap-2 mb-4">
        <Info className="size-5 shrink-0" />
        <span>{title}</span>
      </h3>

      <ul className="space-y-3">
        {notes.map((note, index) => (
          <li
            key={index}
            className="text-secondary text-sm font-light leading-relaxed flex items-start gap-3"
          >
            <span className="size-1.5 bg-primary rounded-full mt-2 shrink-0" />
            <span className="flex-1 text-justify leading-relaxed">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
