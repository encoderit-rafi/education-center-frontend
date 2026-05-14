"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Laptop,
  GraduationCap,
  MapPin,
  Phone,
  HelpCircle,
  FileText,
  Globe,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export default function SearchCommand({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-md text-sm outline-none transition-[color,box-shadow] focus-visible:border-rounded focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-primary hover:text-primary cursor-pointer group",
          className,
        )}
        aria-label="Search"
      >
        <Search className="size-4.5 group-hover:scale-110" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList className="">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Exams & Registration">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact-us"))}
            >
              <GraduationCap className="mr-2 h-4 w-4 text-primary" />
              <span>IELTS Registration</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact-us"))}
            >
              <Laptop className="mr-2 h-4 w-4 text-primary" />
              <span>PTE Core Registration</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact-us"))}
            >
              <Globe className="mr-2 h-4 w-4 text-primary" />
              <span>PTE Academic Registration</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact-us"))}
            >
              <FileText className="mr-2 h-4 w-4 text-primary" />
              <span>PTE Home Registration</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Services">
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/free-consultation"))
              }
            >
              <HelpCircle className="mr-2 h-4 w-4 text-blue-500" />
              <span>Free Consultation</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/our-venues"))}
            >
              <MapPin className="mr-2 h-4 w-4 text-green-500" />
              <span>Explore Our Venues</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/paid-mock-test"))}
            >
              <Laptop className="mr-2 h-4 w-4 text-orange-500" />
              <span>Book a Mock Test</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Support">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact-us"))}
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>Contact Support</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/about-us/who-we-are"))
              }
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
