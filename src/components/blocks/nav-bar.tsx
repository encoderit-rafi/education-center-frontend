"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import SearchCommand from "./search-command";
import { COURSES } from "@/lib/courses-data";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface NavItem {
  label: string;
  href?: string;
  badge?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Exam Preparation Courses",
    children: COURSES.filter(course => course.id.endsWith("-prep")).map((course) => ({
      label: course.title,
      href: `/courses/${course.id}`,
    }))
  },
  {
    label: "Fees",
    children: [
      { label: "IELTS Fees", href: "/fees/ielts" },
      { label: "PTE Fees", href: "/fees/pte" },
      { label: "CELPIP Fees", href: "/fees/celpip" },
      { label: "CAEL Fees", href: "/fees/cael" },
      { label: "TOEFL Fees", href: "/fees/toefl" },
      { label: "OET Fees", href: "/fees/oet" },
      { label: "Exam Workshop", href: "/fees/exam-workshop" },
    ],
  },
  {
    label: "Our Venues",
    children: [
      { label: "360° Virtual Tour", href: "/our-venues/360-degree-virtual-tour" },
      { label: "Book An Exam Venue", href: "/our-venues/book-an-exam-venue" },
    ],
  },
  {
    label: "Test Your English",
    href: "/test-your-english",
    badge: "FREE",
  },
  {
    label: "Paid Mock Test", href: "/paid-mock-test"
  },
  {
    label: "Test Dates", href: "/test-dates"
  },
  {
    label: "Book Exam",
    children: [
      { label: "Book Test", href: "/book-a-test" },
      { label: "Test Day Guidelines", href: "/book-a-test/test-day-guidelines" },
    ],
  },
  {
    label: "Free Consultation", href: "/free-consultation"
  },
  {
    label: "Assessment Solutions", href: "/assessment-solutions"
  },
  {
    label: "Exam Special Accommodation", href: "/special-accommodation"
  },
  {
    label: "Exam Delivery",
    children: [
      { label: "Exam Provider", href: "/exam-delivery/exam-provider" },
      { label: "Test Takers", href: "/exam-delivery/test-takers" },
      { label: "Vendor", href: "/exam-delivery/vendor" },

    ]
  },
  {
    label: "Exam Proctoring Services",
    children: [
      { label: "Institutions", href: "/exam-proctoring-services/institutions" },
      { label: "Test-Takers", href: "/exam-proctoring-services/test-takers" },
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

export default function NavBar() {
  const primaryNav = navItems.filter((item) =>
    ["Exam Preparation Courses", "Fees", "Our Venues", "About Us", "Contact Us"].includes(item.label)
  );
  const secondaryNav = navItems.filter(
    (item) => !["Exam Preparation Courses", "Fees", "Our Venues", "About Us", "Contact Us"].includes(item.label)
  );

  return (
    <header className="sticky top-0 w-full z-50 overflow-visible bg-white">
      <div className="w-full">
        {/* Row 1: Logo & Primary Nav */}
        <div className="bg-[#AD1010] text-white">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-12">
              <Link href="/" className="shrink-0 relative lg:z-20">
                <div className="lg:absolute lg:top-[100%] lg:-translate-y-1/2 left-0 bg-white p-2 lg:p-3 shadow-lg rounded-xl lg:rounded-2xl border border-slate-200">
                  <Image
                    alt="TEPTH Logo"
                    width={150}
                    height={150}
                    src="/images/tepth-logo.png"
                    className="w-24 md:w-32 h-auto"
                  />
                </div>
                {/* Spacer for the absolute element - only visible on desktop */}
                <div className="hidden lg:block w-24 md:w-32 h-12" />
              </Link>

              {/* <nav className="hidden lg:flex items-center justify-end bg-red-500 gap-6">
              {primaryNav.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav> */}

            </div>

            <div className="flex items-center gap-4 ">
              <nav className="hidden lg:flex items-center justify-end gap-6">
                {primaryNav.map((item) => (
                  <NavItem key={item.label} item={item} isWhite />
                ))}
              </nav>
              <div className="hidden md:block bg-white rounded-full">
                <SearchCommand />
              </div>
              <div className="lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 text-slate-600 hover:text-red-900 transition-colors outline-none">
                    <Menu className="w-6 h-6 text-white" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 bg-white border-slate-200 text-slate-900 z-[60]">
                    {navItems.map((item) => {
                      if (item.children) {
                        return (
                          <DropdownMenuSub key={item.label}>
                            <DropdownMenuSubTrigger className="rounded-lg focus:bg-red-50 focus:text-red-900">
                              <div className="w-full py-2 px-1 text-sm font-medium">
                                {item.label}
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="min-w-[200px] bg-white border-slate-200 p-2 shadow-2xl rounded-xl z-[70]">
                              {item.children.map((child) => (
                                <DropdownMenuItem
                                  key={child.label}
                                  render={<Link href={child.href} />}
                                  className="focus:bg-red-50 focus:text-red-900 rounded-lg transition-all duration-200"
                                >
                                  <div className="w-full px-4 py-2 text-sm font-medium">
                                    {child.label}
                                  </div>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        );
                      }
                      return (
                        <DropdownMenuItem
                          key={item.label}
                          render={item.href ? <Link href={item.href} /> : undefined}
                          className="focus:bg-red-50 focus:text-red-900 rounded-lg transition-all duration-200"
                        >
                          <div className="w-full py-2 px-1 text-sm font-medium">
                            {item.label}
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Secondary Nav */}
        <div className="hidden lg:block bg-[#111827] border-b border-black shadow-sm">
          <div className="flex justify-end pr-6">
            <nav className="flex items-center justify-center lg:justify-end gap-x-4 xl:gap-x-6 gap-y-2 pl-40 pr-8 py-3 flex-wrap">
              {secondaryNav.map((item) => (
                <NavItem key={item.label} item={item} isWhite />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ item, isWhite }: { item: NavItem, isWhite?: boolean }) {
  if (item.children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(
          "flex items-center gap-1.5 text-sm font-bold transition-all duration-300 outline-none group",
          isWhite ? "text-white hover:text-red-200" : "text-slate-600 hover:text-red-900"
        )}>
          {item.label}
          {item.badge && (
            <Badge className="ml-1 px-1.5 py-0.5 bg-red-600 text-[9px] font-bold text-white rounded-md uppercase tracking-wider shadow-sm border-none h-auto">
              {item.badge}
            </Badge>
          )}
          <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[240px] bg-white border-slate-200 p-2 shadow-2xl rounded-xl z-[60]">
          <DropdownMenuGroup>
            {item.children.map((child) => (
              <DropdownMenuItem
                key={child.label}
                render={<Link href={child.href} />}
                className="focus:bg-red-50 focus:text-red-900 rounded-lg transition-all duration-200"
              >
                <div className="w-full px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-red-900">
                  {child.label}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "text-sm font-bold transition-all duration-300 flex items-center gap-2",
        isWhite ? "text-white hover:text-red-200" : "text-slate-600 hover:text-red-900"
      )}
    >
      {item.label === "Test Your English" && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
      )}
      {item.label}
      {item.badge && (
        <Badge className="ml-1 px-1.5 py-0.5 bg-red-600 text-[9px] font-bold text-white rounded-md uppercase tracking-wider shadow-sm border-none h-auto">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}
