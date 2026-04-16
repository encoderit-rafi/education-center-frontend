"use client";

import { Search } from "lucide-react";

import { Input } from "../ui/input";

export default function SearchCommand() {
  return (
    <div className="flex ">
      <Input
        className="-me-px rounded-s-md flex-1 rounded-e-none shadow-none focus-visible:z-10"
        placeholder="Search..."
        type="text"
      />
      <button
        aria-label="Subscribe"
        className="inline-flex w-9 items-center justify-center rounded-e-md border border-input bg-background text-sm outline-none transition-[color,box-shadow] hover:bg-accent focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-primary hover:text-primary"
        type="button"
      >
        <Search aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
