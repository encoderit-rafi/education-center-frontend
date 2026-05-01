"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-destructive/20 blur-2xl rounded-full" />
        <div className="relative flex items-center justify-center size-24 rounded-3xl bg-surface shadow-xl border border-destructive/20 text-destructive">
          <AlertCircle className="size-12" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4 text-on-surface">
        Something went wrong!
      </h1>

      <p className="max-w-md text-on-surface-variant mb-10 text-lg">
        An unexpected error occurred. We&apos;ve been notified and are looking
        into it.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()} size="lg" className="rounded-full px-8">
          <RotateCcw className="mr-2 size-4" />
          Try Again
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8"
          render={
            <Link href="/" className="inline-flex items-center justify-center">
              <Home className="mr-2 size-5" />
              Back to Home
            </Link>
          }
        />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-64 h-64 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />

      {error.digest && (
        <p className="mt-12 text-xs text-on-surface-variant/50 font-mono">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
