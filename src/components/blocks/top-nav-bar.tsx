import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import SearchCommand from "./search-command";

const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "Fees", href: "/fees" },
  { label: "Our Venues", href: "/our-venues" },
  {
    label: "Test Your English",
    href: "/test-your-english",
    badge: "FREE",
  },
  {
    label: "Test",
    children: [
      { label: "Test Dates", href: "/test-dates" },
      { label: "Paid Mock Test", href: "/paid-mock-test" },
      { label: "Enroll Course", href: "/enroll-now" },
      { label: "Join A Workshop", href: "/workshops" },
      { label: "Book a Test", href: "/book-a-test" },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about-us/who-we-are" },
      { label: "Mission & Vision", href: "/about-us/vision-and-mission" },
      { label: "Why Choose Us", href: "/about-us/why-choose-us" },
      { label: "Accreditation", href: "/about-us/accreditation" },
      { label: "How to Find Us", href: "/about-us/how-to-find-us" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
        <div className="base-gap gap-10">
          <Link href="/">
            <Image
              alt="TEPTH Logo"
              width={80}
              height={80}
              src="/images/tepth-logo.png"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 font-headline text-sm font-medium tracking-tight">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors cursor-pointer">
                      {item.label} <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="start">
                      <DropdownMenuGroup>
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.href}>
                            <Link href={child.href}>{child.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.5 bg-primary text-[10px] font-bold text-white rounded uppercase tracking-wider shadow-sm flex items-center">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="base-gap">
          {/* Search */}
          <SearchCommand />
          {/* Enroll Now */}
          <Link
            href="/book-a-test"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "max-lg:hidden font-headline font-bold! px-6 py-2.5 rounded-lg shadow-md whitespace-nowrap",
            })}
          >
            Book a Test
          </Link>
        </div>
      </div>
    </header>
  );
}

