import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileSearch, Home } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFoundPage");
  return (
    // <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
    //   <div className="relative mb-8">
    //     <div className="crimson-gradient absolute -inset-4 blur-2xl opacity-10 rounded-full" />
    //     <div className="relative flex items-center justify-center size-24 rounded-3xl bg-surface shadow-xl border border-border">
    //       <FileSearch className="size-12 text-primary" />
    //     </div>
    //   </div>

    //   <h1 className="text-8xl md:text-9xl font-headline font-bold tracking-tighter mb-4 text-primary">
    //     404
    //   </h1>

    //   <h2 className="text-2xl md:text-3xl font-headline font-semibold text-on-surface mb-4">
    //     Page Not Found
    //   </h2>

    //   <p className="max-w-md text-on-surface-variant mb-10 text-lg">
    //     Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
    //   </p>

    //   <div className="flex flex-col sm:flex-row gap-4">
    //     <Button
    //       size="lg"
    //       className="rounded-full px-8"
    //       render={
    //         <Link href="/" className="inline-flex items-center justify-center">
    //           <Home className="mr-2 size-5" />
    //           Back to Home
    //         </Link>
    //       }
    //     />
    //     <Button
    //       variant="outline"
    //       size="lg"
    //       className="rounded-full px-8"
    //       render={<Link href="/contact-us">Contact Support</Link>}
    //     />
    //   </div>

    //   {/* Decorative background elements */}
    //   <div className="absolute top-1/4 left-0 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    //   <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    // </div>
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24 text-center">
      {/* Icon */}
      <div className="relative mb-6 sm:mb-8">
        <div className="crimson-gradient absolute -inset-4 rounded-full opacity-10 blur-2xl" />

        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-border bg-surface shadow-xl sm:size-24 sm:rounded-3xl">
          <FileSearch className="size-10 text-primary sm:size-12" />
        </div>
      </div>

      {/* 404 */}
      <h1 className="mb-3 text-6xl font-bold tracking-tighter text-primary sm:text-7xl md:mb-4 md:text-8xl lg:text-9xl">
        404
      </h1>

      {/* Title */}
      <h2 className="mb-3 px-2 text-xl font-semibold text-on-surface sm:text-2xl md:mb-4 md:text-3xl">
        {t("title")}
      </h2>

      {/* Description */}
      <p className="mb-8 max-w-md px-2 text-sm leading-relaxed text-on-surface-variant sm:text-base md:mb-10 md:text-lg">
        {t("description")}
      </p>

      {/* Buttons */}
      <div className="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
        <Button
          size="lg"
          className="w-full rounded-full px-6 sm:w-auto sm:px-8"
          render={
            <Link href="/" className="inline-flex items-center justify-center">
              <Home className="mr-2 size-5" />
              {t("backToHome")}
            </Link>
          }
        />

        <Button
          variant="outline"
          size="lg"
          className="w-full rounded-full px-6 sm:w-auto sm:px-8"
          render={<Link href="/contact-us">{t("contactSupport")}</Link>}
        />
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute bottom-1/4 right-0 h-56 w-56 translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96" />
    </div>
  );
}
