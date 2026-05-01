import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileSearch, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="relative mb-8">
        <div className="crimson-gradient absolute -inset-4 blur-2xl opacity-10 rounded-full" />
        <div className="relative flex items-center justify-center size-24 rounded-3xl bg-surface shadow-xl border border-border">
          <FileSearch className="size-12 text-primary" />
        </div>
      </div>

      <h1 className="text-8xl md:text-9xl font-headline font-bold tracking-tighter mb-4 text-primary">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-headline font-semibold text-on-surface mb-4">
        Page Not Found
      </h2>
      
      <p className="max-w-md text-on-surface-variant mb-10 text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/" className="inline-flex items-center justify-center">
            <Home className="mr-2 size-5" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8">
          <Link href="/contact-us">
            Contact Support
          </Link>
        </Button>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
