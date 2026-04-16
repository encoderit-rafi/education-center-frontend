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
            {/* Courses */}
            <Link
              href="/courses"
              className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
            >
              Courses
            </Link>
            {/* Fees */}
            <Link
              href="/fees"
              className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
            >
              Fees
            </Link>

            {/* Our Venues */}
            <Link
              href="/our-venues"
              className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
            >
              Our Venues
            </Link>

            {/* Test Your English */}
            <Link
              href="/test-your-english"
              className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                Test Your English
                <span className="px-1.5 py-0.5 bg-primary text-[10px] font-bold text-white rounded uppercase tracking-wider shadow-sm flex items-center">
                  FREE
                </span>
              </span>
            </Link>
            {/* Test */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors cursor-pointer">
                Test <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/test-dates">Test Dates</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/paid-mock-test">Paid Mock Test</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/enroll-now">Enroll Course</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/workshops">Join A Workshop</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/book-a-test">Book a Test</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors cursor-pointer">
                About Us <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/about-us/who-we-are">Who We Are</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about-us/vision-and-mission">
                      Mission & Vision
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about-us/why-choose-us">Why Choose Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about-us/accreditation">Accreditation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about-us/how-to-find-us">How to Find Us</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Contact Us */}
            <Link
              href="/contact-us"
              className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
            >
              Contact Us
            </Link>
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
