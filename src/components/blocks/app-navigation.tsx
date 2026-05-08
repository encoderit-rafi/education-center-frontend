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

type NavItem = { name: string; href: string };
type NavSingle = NavItem & { type: "single" };
type NavDropdown = NavItem & { type: "dropdown"; items: NavItem[] };

export type AppNavigationItem = NavSingle | NavDropdown;

export type AppNavigationProps = {
  navigations: AppNavigationItem[];
};

export default function AppNavigation({ navigations }: AppNavigationProps) {
  const pathname = usePathname();

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

          return (
            <NavigationMenuItem key={item.name}>
              {item.type === "single" && (
                <NavigationMenuLink active={isParentActive} asChild>
                  <Link href={item.href} className="capitalize">
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              )}
              {item.type === "dropdown" && (
                <>
                  <NavigationMenuTrigger
                    asChild
                    className={cn(
                      "bg-transparent px-2 py-1.5 text-sm border-none outline-none transition-all rounded-sm",
                      isActive && "bg-primary text-white font-medium",
                    )}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50 p-1 min-w-36 border bg-white text-primary rounded-xl shadow-2xl">
                    <ul className="flex flex-col gap-1">
                      {item.items.map((child) => {
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
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
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
