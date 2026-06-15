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
  Loader2,
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
import api from "@/axios";
import { useTranslations } from "next-intl";

interface SearchResult {
  course?: {
    slug: string;
  };
  type: string;
  id: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  slug: string;
  image?: string | null;
  target?: string | null;
}

export default function SearchCommand({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const t = useTranslations("Search");

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

  // Reset search state when dialog closes
  React.useEffect(() => {
    if (!open) {
      setQuery("");
      setDebouncedQuery("");
      setResults([]);
      setIsLoading(false);
    }
  }, [open]);

  // Debounce query
  React.useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery("");
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // API search on debounced query
  React.useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    let active = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await api.get<{
          success: boolean;
          message: string;
          data: SearchResult[];
        }>("/search-everything", { params: { q: debouncedQuery } });

        if (active) {
          if (response.data?.success) {
            setResults(response.data.data);
          } else {
            setResults([]);
          }
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        if (active) {
          setResults([]);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
    };
  }, [debouncedQuery]);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const getTargetUrl = (item: SearchResult) => {
    if (item.type === "course") {
      return `/exam-preparation-courses/${item.slug}`;
    }
    if (item.type === "exam") {
      return `/exams/${item.slug}`;
    }
    if (item.type === "workshop") {
      return `/exam-preparation-courses/${item.course?.slug}/workshops/${item.id}`;
    }
    if (item.type === "package") {
      return `/exam-preparation-courses/${item.course?.slug}/packages/${item.id}`;
    }
    return item.target || "#";
  };

  const courses = results.filter((item) => item.type === "course");
  const exams = results.filter((item) => item.type === "exam");
  const workshops = results.filter((item) => item.type === "workshop");
  const others = results.filter(
    (item) =>
      item.type !== "course" &&
      item.type !== "exam" &&
      item.type !== "workshop",
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-md text-sm outline-none transition-[color,box-shadow] focus-visible:border-rounded focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 text-primary hover:text-primary cursor-pointer group",
          className,
        )}
        aria-label={t("placeholder")}
      >
        <Search className="size-4.5 group-hover:scale-110" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={!query}>
        <CommandInput
          placeholder={t("placeholder")}
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="">
          {isLoading && (
            <div className="flex items-center justify-center py-8 text-sm text-muted-foreground gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span>{t("searching")}</span>
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <CommandEmpty>
              {t("noResults", { query })}
            </CommandEmpty>
          )}

          {!isLoading && query && results.length > 0 && (
            <>
              {courses.length > 0 && (
                <CommandGroup heading={t("courses")}>
                  {courses.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() =>
                        runCommand(() => router.push(getTargetUrl(item)))
                      }
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer data-[selected=true]:bg-accent/50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {exams.length > 0 && (
                <CommandGroup heading={t("exams")}>
                  {exams.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() =>
                        runCommand(() => router.push(getTargetUrl(item)))
                      }
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer data-[selected=true]:bg-accent/50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {workshops.length > 0 && (
                <CommandGroup heading={t("workshops")}>
                  {workshops.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() =>
                        runCommand(() => router.push(getTargetUrl(item)))
                      }
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer data-[selected=true]:bg-accent/50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Laptop className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {others.length > 0 && (
                <CommandGroup heading={t("otherResults")}>
                  {others.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() =>
                        runCommand(() => router.push(getTargetUrl(item)))
                      }
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer data-[selected=true]:bg-accent/50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}

          {!query && (
            <>
              <CommandGroup heading={t("examsAndRegistration")}>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/contact-us"))}
                >
                  <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                  <span>{t("ieltsRegistration")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/contact-us"))}
                >
                  <Laptop className="mr-2 h-4 w-4 text-primary" />
                  <span>{t("pteCoreRegistration")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/contact-us"))}
                >
                  <Globe className="mr-2 h-4 w-4 text-primary" />
                  <span>{t("pteAcademicRegistration")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/contact-us"))}
                >
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  <span>{t("pteHomeRegistration")}</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading={t("services")}>
                <CommandItem
                  onSelect={() =>
                    runCommand(() => router.push("/free-consultation"))
                  }
                >
                  <HelpCircle className="mr-2 h-4 w-4 text-blue-500" />
                  <span>{t("freeConsultation")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/our-venues"))}
                >
                  <MapPin className="mr-2 h-4 w-4 text-green-500" />
                  <span>{t("exploreOurVenues")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() =>
                    runCommand(() => router.push("/paid-mock-test"))
                  }
                >
                  <Laptop className="mr-2 h-4 w-4 text-orange-500" />
                  <span>{t("bookMockTest")}</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading={t("support")}>
                <CommandItem
                  onSelect={() => runCommand(() => router.push("/contact-us"))}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{t("contactSupport")}</span>
                </CommandItem>
                <CommandItem
                  onSelect={() =>
                    runCommand(() => router.push("/about-us/who-we-are"))
                  }
                >
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>{t("faqs")}</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
