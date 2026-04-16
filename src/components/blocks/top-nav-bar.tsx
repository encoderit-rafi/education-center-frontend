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
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center bg-transparent">
          <Image
            alt="TEPTH Logo"
            width={80}
            height={80}
            src="/images/tepth-logo.png"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 font-headline text-sm font-medium tracking-tight">
          {/* Exams Dropdown */}
          {/* <div className="relative dropdown group py-2">
            <button className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors cursor-pointer">
              Exams{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu hidden absolute top-full left-0 w-64 bg-white dark:bg-slate-950 shadow-xl rounded-xl border border-slate-100 dark:border-slate-800 p-2 mt-1">
              <Link
                href="/exams"
                className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
              >
                Exam
              </Link>
              <Link
                href="/test-dates"
                className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
              >
                Test Dates
              </Link>
              <Link
                href="/paid-mock-test"
                className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
              >
                Paid Mock Test
              </Link>
              <Link
                href="/fees"
                className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
              >
                Fees
              </Link>
              <Link
                href="/test-your-english"
                className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
              >
                <span className="flex items-center gap-1.5">
                  Test Your English
                  <span className="px-1.5 py-0.5 bg-primary text-[10px] font-bold text-white rounded uppercase tracking-wider shadow-sm flex items-center">
                    FREE
                  </span>
                </span>
              </Link>
            </div>
          </div> */}

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
          {/* New Nav Items */}
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
          {/* Contact Us */}
          <Link
            href="/contact-us"
            className="text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
        {/* Search */}
        <div className="hidden lg:flex items-center relative mx-4">
          <span className="material-symbols-outlined absolute left-3 text-slate-400 text-xl">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-40 xl:w-48 font-body"
            placeholder="Search..."
            type="text"
          />
        </div>
        {/* Enroll Now */}
        <div className="flex items-center gap-4">
          <Link
            href="/book-a-test"
            className="crimson-gradient text-white font-headline font-bold px-6 py-2.5 rounded-lg shadow-md active:scale-95 transition-transform duration-200 whitespace-nowrap cursor-pointer block text-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
