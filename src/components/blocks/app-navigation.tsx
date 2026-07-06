"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type NavItem = { name: string; href: string };
type NavSingle = NavItem & { type: "single" };
type NavDropdown = NavItem & { type: "dropdown"; items: NavItem[] };

export type AppNavigationItem = NavSingle | NavDropdown;

export type AppNavigationProps = {
  navigations: AppNavigationItem[];
  isLoading?: boolean;
};

export default function AppNavigation({ navigations, isLoading }: AppNavigationProps) {
  const pathname = usePathname();
  const t = useTranslations("NavBar.menu");

  const translateName = (name: string) => {
    try {
      return t.has(name) ? t(name) : name;
    } catch {
      return name;
    }
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-2">
        {navigations.map((item) => {
          const isMatch = (href: string) =>
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(href + "/");

          const isParentActive = isMatch(item.href);
          const isChildActive =
            item.type === "dropdown" &&
            item.items.some((child) => isMatch(child.href));
          const isActive = isParentActive || isChildActive;

          // Treat dropdown with no children (and not loading) as a direct link
          const hasChildren = item.type === "dropdown" && (isLoading || item.items.length > 0);

          return (
            <NavigationMenuItem key={item.name}>
              {(item.type === "single" || (item.type === "dropdown" && !hasChildren)) && (
                <NavigationMenuLink active={isParentActive} asChild>
                  <Link href={item.href} className="capitalize">
                    {translateName(item.name)}
                  </Link>
                </NavigationMenuLink>
              )}
              {item.type === "dropdown" && hasChildren && (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent px-2 py-1.5 text-sm border-none outline-none transition-all rounded-sm capitalize",
                      isActive && "bg-primary text-white font-medium",
                    )}
                  >
                    {translateName(item.name)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50 p-1 min-w-36 border bg-white text-primary rounded-xl shadow-2xl">
                    <ul className="flex flex-col gap-1">
                       {isLoading && item.items.length === 0 ? (
                        <div className="p-4 flex flex-col gap-2 min-w-50">
                          <div className="h-4 bg-slate-100 animate-pulse rounded w-3/4"></div>
                          <div className="h-4 bg-slate-100 animate-pulse rounded w-1/2"></div>
                          <div className="h-4 bg-slate-100 animate-pulse rounded w-5/6"></div>
                        </div>
                      ) : (
                        item.items.map((child) => {
                          const isSubItemActive = isMatch(child.href);
                          return (
                            <li key={child.name} className="group/child relative">
                              <NavigationMenuLink
                                active={isSubItemActive}
                                asChild
                              >
                                <Link
                                  href={child.href}
                                  className="whitespace-nowrap"
                                >
                                  {translateName(child.name)}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })
                      )}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
