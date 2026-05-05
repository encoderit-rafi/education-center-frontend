"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SearchCommand from "./search-command";
import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";

import { Badge } from "../ui/badge";
import { exams, exams_types } from "@/lib/data";
import { cn } from "@/lib/utils";
import EXAM_PREPARATION_COURSES from "@/lib/demo-data/exam-preparation-courses";
interface NavItem {
  type: "primary" | "secondary";
  label: string;
  href?: string;
  badge?: string;
  children?: { label: string; href: string }[];
}
const navigations: NavItem[] = [
  {
    type: "primary",
    label: "Exams",
    // href: "/exams",
    children: exams_types.map((et) => ({
      label: et.exam.name,
      href: `/exams/${et.exam.id}`,
    })),
  },
  {
    type: "primary",
    label: "Exam Preparation Courses",
    children: [
      ...EXAM_PREPARATION_COURSES.map((course) => ({
        label: course.name,
        href: `/exam-preparation-courses/${course.id}`,
      })),
      {
        label: "Exam Workshops",
        href: "/exam-workshops",
      },
    ],
  },
  {
    type: "secondary",
    label: "Free Consultation",
    href: "/free-consultation",
  },
  {
    type: "secondary",

    label: "Assessment Solutions",
    href: "/assessment-solutions",
  },
  {
    type: "primary",
    label: "Book Exam",
    children: [
      { label: "IELTS", href: "/book-exams" },
      { label: "TOEFL iBT", href: "/book-exams" },
      { label: "PTE", href: "/book-exams" },
      { label: "CELPIP General", href: "/book-exams" },
      { label: "CAEL", href: "/book-exams" },
      { label: "Skills for English (SELT)", href: "/book-exams" },
      {
        label: "Test Day Guidelines",
        href: "/book-exams/test-day-guidelines",
      },
    ],
  },
  {
    type: "primary",
    label: "Test Dates",
    children: [
      { label: "IELTS", href: "/test-dates" },
      { label: "TOEFL iBT", href: "/test-dates" },
      { label: "PTE", href: "/test-dates" },
      { label: "CELPIP General", href: "/test-dates" },
      { label: "CAEL", href: "/test-dates" },
      { label: "Skills for English (SELT)", href: "/test-dates" },
    ],
  },
  {
    type: "primary",
    label: "Paid Mock Test", // candidates can purchase them online and we email them within 72 hours
    children: paid_mock_tests.map((test) => {
      return {
        label: test.exam_name,
        href: `/paid-mock-test/${test.id}`,
      };
    }),
  },
  {
    type: "secondary",
    label: "Fees",
    children: [
      { label: "IELTS", href: "/fees/ielts" },
      { label: "PTE", href: "/fees/pte" },
      { label: "CELPIP", href: "/fees/celpip" },
      { label: "CAEL", href: "/fees/cael" },
      { label: "TOEFL", href: "/fees/toefl" },
      { label: "OET", href: "/fees/oet" },
    ],
  },
  {
    type: "secondary",
    label: "Our Venues",
    children: [
      {
        label: "360° Virtual Tour",
        href: "/our-venues/360-degree-virtual-tour",
      },
      { label: "Book An Exam Venue", href: "/our-venues/book-an-exam-venue" },
    ],
  },
  {
    type: "primary",
    label: "Test Your English",
    href: "/test-your-english",
    badge: "FREE",
  },
  {
    type: "secondary",

    label: "Exam Special Accommodation",
    href: "/special-accommodation",
  },
  {
    type: "secondary",

    label: "Exam Delivery",
    children: [
      { label: "Exam Provider", href: "/exam-delivery/exam-provider" },
      { label: "Test Takers", href: "/exam-delivery/test-takers" },
      { label: "Vendor", href: "/exam-delivery/vendor" },
    ],
  },
  {
    type: "secondary",

    label: "Exam Proctoring Services",
    children: [
      { label: "Institutions", href: "/exam-proctoring-services/institutions" },
      { label: "Test-Takers", href: "/exam-proctoring-services/test-takers" },
    ],
  },
  {
    type: "primary",
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about-us/who-we-are" },
      { label: "Mission & Vision", href: "/about-us/vision-and-mission" },
      { label: "Why Choose Us", href: "/about-us/why-choose-us" },
      { label: "Accreditation", href: "/about-us/accreditation" },
      { label: "How to Find Us", href: "/about-us/how-to-find-us" },
    ],
  },
  {
    type: "primary",
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 overflow-visible shadow-lg">
      {/* Row 1 */}
      <div className="relative z-20 nav-px nav-py flex items-center justify-between gap-2 bg-white/90 backdrop-blur-sm">
        <Link href="/">
          <Image
            alt="TEPTH Logo"
            width={150}
            height={150}
            src="/images/tepth-logo.png"
            className="w-28"
          />
        </Link>
        {/* Desktop Primary Nav */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-2">
            {navigations
              .filter((item) => item.type === "primary")
              .map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 text-sm border-none outline-none transition-all rounded-lg">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50 p-1 min-w-48 border-none bg-primary! text-white! rounded-xl shadow-2xl">
                        <ul className="flex flex-col">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="px-4 py-2.5 text-sm  hover:bg-black/10 rounded-lg transition-colors w-full "
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href || "#"}
                        className="px-2 py-1.5 text-sm hover:bg-black/5 transition-all rounded-lg"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-24  flex items-center justify-end gap-2">
          <SearchCommand />
          {/* Mobile Menu Trigger */}
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  className="lg:hidden p-0 h-9 w-9 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <PopoverContent
              align="end"
              className="w-64 bg-primary border-none p-1 shadow-2xl rounded-xl z-[60] text-white"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigations.map((item, index) => (
                    <NavigationMenuItem className="w-full" key={item.label}>
                      {item.children ? (
                        <>
                          <div className="px-2 py-1.5 font-bold text-white/50 text-[10px] uppercase tracking-wider">
                            {item.label}
                          </div>
                          <ul className="mb-2">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="px-3 py-2 text-sm text-white hover:bg-black/10 rounded-lg transition-colors w-full flex items-center"
                                  >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href || "#"}
                            className="px-3 py-2 text-sm font-bold text-white hover:bg-black/10 rounded-lg transition-colors w-full flex items-center"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                      {index < navigations.length - 1 && (
                        <div className="mx-2 my-1 h-px bg-white/10" />
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* Row 2 */}
      <div className="relative z-10 hidden lg:flex bg-primary text-white nav-px py-1 items-center justify-center gap-2">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-2">
            {navigations
              .filter((item) => item.type === "secondary")
              .map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      {" "}
                      <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 text-sm border-none outline-none hover:bg-black/10! data-[state=open]:bg-black/10 hover:text-white! focus:text-white! active:text-white! data-[state=open]:text-white transition-all rounded-lg">
                        <div className="flex items-center gap-1.5">
                          {item.label}
                          {item.badge && (
                            <Badge className="bg-red-600 text-[9px] px-1.5 py-0 border-none text-white">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50 p-1 min-w-48 border-none! bg-primary! text-white!">
                        <ul className="flex flex-col">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="px-4 py-2.5 text-sm  hover:bg-black/10 rounded-lg transition-colors w-full "
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href || "#"}
                        className="px-2 py-1.5 text-sm  text-white hover:bg-black/10 hover:text-white transition-all rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          {item.label === "Test Your English" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          )}
                          {item.label}
                          {item.badge && (
                            <Badge className="bg-red-600 text-[9px] px-1.5 py-0 border-none text-white">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
