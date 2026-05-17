"use client";
import Image from "next/image";
import Link from "next/link";

import SearchCommand from "./search-command";

import Banner from "./banner";
import AppNavigation from "./app-navigation";
import { SECONDARY_NAV } from "@/data";
import { usePrimaryNav } from "@/hooks/use-primary-nav";
import MobileNav from "./mobile-nav";

export default function NavBar() {
  const { primaryNav, isLoading } = usePrimaryNav();

  return (
    <header className="sticky top-0 z-50 overflow-visible shadow-lg">
      <Banner />
      {/* Row 1 */}
      <div className="relative z-20 nav-px nav-py flex items-center justify-between gap-2 bg-white backdrop-blur-sm">
        <Link href={"/"}>
          <Image
            alt="TEPTH Logo"
            width={112}
            height={112}
            src="/images/tepth-logo.png"
            className="w-32 h-auto"
            priority
          />
        </Link>
        <div className="max-lg:hidden">
          <AppNavigation navigations={primaryNav} isLoading={isLoading} />
        </div>
        <div className="w-24  flex items-center justify-end gap-2">
          <SearchCommand />
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="relative z-10 hidden lg:flex bg-secondary text-white nav-px py-1.5 items-center justify-center gap-2">
        <AppNavigation navigations={SECONDARY_NAV} />
      </div>
    </header>
  );
}
