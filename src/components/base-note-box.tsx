import { Info } from "lucide-react";
import React from "react";

export default function BaseNoteBox({
  title = "To continue with this booking you will need:",
  notes = [],
}: {
  title: string;
  notes: string[];
}) {
  return (
    <div className="bg-primary/5 border border-primary/50  border-dashed rounded-md p-4">
      <h3 className="text-primary font-bold flex items-center gap-2 mb-4">
        <Info className="size-5" />
        {title}
      </h3>

      <ul className="space-y-3">
        {notes.map((note, index) => (
          <li
            key={index}
            className="text-secondary text-sm font-light leading-relaxed flex items-start gap-3"
          >
            <span className="size-1.5 bg-primary rounded-full mt-2 shrink-0" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
