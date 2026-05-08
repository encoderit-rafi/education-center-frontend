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
import {
  Menu,
  Search,
  ChevronRight,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";
import SearchCommand from "./search-command";
import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";

import { Badge } from "../ui/badge";
import { exams, exams_types } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EXAM_PREPARATION_COURSES_LINKS } from "@/lib/constants/exams";
import { EXAM_FEES } from "@/app/fees/page";
import Banner from "./banner";
import AppNavigation, { AppNavigationItem } from "./app-navigation";
import {
  NAV_BOOK_EXAMS_DATA,
  NAV_EXAM_PREPARATION_COURSES_DATA,
  NAV_EXAMS_DATA,
  NAV_FEES,
  NAV_PAID_MOCK_TESTS,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "@/data";

interface NavChild {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

interface NavItem {
  type: "primary" | "secondary";
  label: string;
  href?: string;
  badge?: string;
  children?: NavChild[];
}
const navigations: NavItem[] = [
  // {
  //   type: "primary",
  //   label: "Exams",
  //   href: "/exams",
  //   children: exams_types.map((et) => ({
  //     label: et.exam.name,
  //     href: `/exams/${et.exam.id}`,
  //   })),
  // },
  // {
  //   type: "primary",
  //   label: "Exam Preparation Courses",
  //   children: [
  //     ...EXAM_PREPARATION_COURSES_LINKS,
  //     {
  //       label: "Exam Workshops",
  //       href: "/exam-workshops",
  //     },
  //   ],
  // },
  // {
  //   type: "secondary",
  //   label: "Free Consultation",
  //   href: "/free-consultation",
  // },
  // {
  //   type: "secondary",
  //   label: "Assessment Solutions",
  //   href: "/assessment-solutions",
  // },
  // {
  //   type: "primary",
  //   label: "Book Exam",
  //   children: [
  //     {
  //       label: "IELTS",
  //       children: [
  //         { label: "IELTS Academic", href: "/book-exams/ielts_academic" },
  //         { label: "IELTS General", href: "/book-exams/ielts_general" },
  //         {
  //           label: "IELTS UKVI",
  //           href: "/book-exams/ielts_ukvi",
  //         },
  //         {
  //           label: "IELTS Life Skills",
  //           href: "/book-exams/ielts_life_skills_a1",
  //         },
  //       ],
  //     },
  //     { label: "TOEFL iBT", href: "/book-exams/toefl_ibt" },
  //     { label: "PTE", href: "/book-exams/pte_academic" },
  //     { label: "CELPIP General", href: "/book-exams/celpip_general" },
  //     { label: "CAEL", href: "/book-exams/cael" },
  //     { label: "Skills for English (SELT)", href: "/book-exams/selt" },
  //     {
  //       label: "Test Day Guidelines",
  //       href: "/book-exams/test-day-guidelines",
  //     },
  //   ],
  // },
  // {
  //   type: "primary",
  //   label: "Test Dates",
  //   children: [
  //     { label: "IELTS", href: "/test-dates" },
  //     { label: "TOEFL iBT", href: "/test-dates" },
  //     { label: "PTE", href: "/test-dates" },
  //     { label: "CELPIP General", href: "/test-dates" },
  //     { label: "CAEL", href: "/test-dates" },
  //     { label: "Skills for English (SELT)", href: "/test-dates" },
  //   ],
  // },
  // {
  //   type: "primary",
  //   label: "Paid Mock Test", // candidates can purchase them online and we email them within 72 hours
  //   children: [
  //     { label: "IELTS", href: "/paid-mock-test/ielts" },
  //     { label: "PTE Academic", href: "/paid-mock-test/pte-academic" },
  //     { label: "TOEFL iBT", href: "/paid-mock-test/toefl" },
  //   ],
  // },
  // {
  //   type: "secondary",
  //   label: "Fees",
  //   children: EXAM_FEES.map((exam) => {
  //     return {
  //       label: exam.name,
  //       href: `/fees#${exam.id}`,
  //     };
  //   }),
  // },
  // {
  //   type: "secondary",
  //   label: "Our Venues",
  //   children: [
  //     {
  //       label: "360° Virtual Tour",
  //       href: "/our-venues/360-degree-virtual-tour",
  //     },
  //     { label: "Book An Exam Venue", href: "/our-venues/book-an-exam-venue" },
  //   ],
  // },
  // {
  //   type: "secondary",
  //   label: "Test Your English",
  //   href: "/test-your-english",
  // },
  // {
  //   type: "primary",
  //   label: "Exam Proctoring Services",
  //   children: [
  //     { label: "Institutions", href: "/exam-proctoring-services/institutions" },
  //     { label: "Test-Takers", href: "/exam-proctoring-services/test-takers" },
  //   ],
  // },
  // {
  //   type: "secondary",
  //   label: "Exam Special Accommodation",
  //   href: "/special-accommodation",
  // },
  // {
  //   type: "secondary",
  //   label: "Exam Delivery",
  //   children: [
  //     { label: "Exam Provider", href: "/exam-delivery/exam-provider" },
  //     { label: "Test Takers", href: "/exam-delivery/test-takers" },
  //     { label: "Vendor", href: "/exam-delivery/vendor" },
  //   ],
  // },
  // {
  //   type: "primary",
  //   label: "About Us",
  //   children: [
  //     { label: "Who We Are", href: "/about-us/who-we-are" },
  //     { label: "Mission & Vision", href: "/about-us/vision-and-mission" },
  //     { label: "Why Choose Us", href: "/about-us/why-choose-us" },
  //     { label: "Accreditation", href: "/about-us/accreditation" },
  //     { label: "How to Find Us", href: "/about-us/how-to-find-us" },
  //   ],
  // },
  // {
  //   type: "primary",
  //   label: "Contact Us",
  //   href: "/contact-us",
  // },
];

// const PRIMARY_NAV: AppNavigationItem[] = [
//   { type: "single", name: "home", href: "/" },
//   {
//     type: "dropdown",
//     name: "Exams",
//     href: "/exams",
//     items: NAV_EXAMS_DATA.map((exam) => ({
//       name: exam.name,
//       href: `/exams/${exam.id}`,
//     })),
//   },
//   {
//     type: "dropdown",
//     name: "Exam Preparation Courses",
//     href: "/exam-preparation-courses",
//     items: NAV_EXAM_PREPARATION_COURSES_DATA.map((exam) => ({
//       name: exam.name,
//       href: `/exam-preparation-courses/${exam.id}`,
//     })),
//   },
//   {
//     type: "single",
//     name: "Test Your English",
//     href: "/test-your-english",
//   },
//   {
//     type: "dropdown",
//     name: "Book Exams",
//     href: "/book-exams",
//     items: NAV_BOOK_EXAMS_DATA.map((exam) => ({
//       name: exam.name,
//       href: `/book-exams/${exam.id}`,
//     })),
//   },
//   {
//     type: "dropdown",
//     name: "Fees",
//     href: "/fees",
//     items: NAV_FEES.map((fee) => ({
//       name: fee.name,
//       href: `/fees#${fee.id}`,
//     })),
//   },
//   {
//     type: "dropdown",
//     name: "Paid Mock Tests",
//     href: "/paid-mock-tests",
//     items: NAV_PAID_MOCK_TESTS.map((item) => ({
//       name: item.name,
//       href: `/paid-mock-tests/${item.id}`,
//     })),
//   },
// ];
// const SECONDARY_NAV: AppNavigationItem[] = [
//   {
//     type: "single",
//     name: "Free Consultation",
//     href: "/free-consultation",
//   },
//   {
//     type: "single",
//     name: "Assessment Solutions",
//     href: "/assessment-solutions",
//   },
//   {
//     type: "dropdown",
//     name: "Test Dates",
//     href: "/test-dates",
//     items: [
//       { name: "IELTS", href: "/test-dates" },
//       { name: "TOEFL iBT", href: "/test-dates" },
//       { name: "PTE", href: "/test-dates" },
//       { name: "CELPIP General", href: "/test-dates" },
//       { name: "CAEL", href: "/test-dates" },
//       { name: "Skills for English (SELT)", href: "/test-dates" },
//     ],
//   },
//   {
//     type: "single",
//     name: "Exam Special Accommodation",
//     href: "/special-accommodation",
//   },
//   {
//     type: "dropdown",
//     name: "Exam Proctoring Services",
//     href: "/exam-proctoring-services",
//     items: [
//       { name: "Institutions", href: "/exam-proctoring-services/institutions" },
//       { name: "Test-Takers", href: "/exam-proctoring-services/test-takers" },
//     ],
//   },
//   {
//     type: "dropdown",
//     name: "Exam Delivery",
//     href: "/exam-delivery",
//     items: [
//       { name: "Exam Provider", href: "/exam-delivery/exam-provider" },
//       { name: "Test Takers", href: "/exam-delivery/test-takers" },
//       { name: "Vendor", href: "/exam-delivery/vendor" },
//     ],
//   },
//   {
//     type: "dropdown",
//     name: "Our Venues",
//     href: "/our-venues",
//     items: [
//       {
//         name: "360° Virtual Tour",
//         href: "/our-venues/360-degree-virtual-tour",
//       },
//       { name: "Book An Exam Venue", href: "/our-venues/book-an-exam-venue" },
//     ],
//   },
//   {
//     type: "dropdown",
//     name: "About Us",
//     href: "/about-us",
//     items: [
//       { name: "Who We Are", href: "/about-us/who-we-are" },
//       { name: "Mission & Vision", href: "/about-us/vision-and-mission" },
//       { name: "Why Choose Us", href: "/about-us/why-choose-us" },
//       { name: "Accreditation", href: "/about-us/accreditation" },
//       { name: "How to Find Us", href: "/about-us/how-to-find-us" },
//     ],
//   },
//   {
//     type: "single",
//     name: "Contact Us",
//     href: "/contact-us",
//   },
// ];

export default function NavBar() {
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
        {/* Desktop Primary Nav */}
        <div className="max-lg:hidden">
          <AppNavigation navigations={PRIMARY_NAV} />
        </div>

        <div className="w-24  flex items-center justify-end gap-2">
          <SearchCommand />
          {/* Mobile Menu Trigger */}
          {/* <Popover>
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
              className="w-64 bg-primary border-none p-1 shadow-2xl rounded-xl z-[60] text-white overflow-y-auto max-h-[80vh]"
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
                                {child.children ? (
                                  <>
                                    <div className="px-3 py-2 text-sm text-white/70 font-bold uppercase tracking-widest text-[9px]">
                                      {child.label}
                                    </div>
                                    <ul className="pl-4 mb-2">
                                      {child.children.map((sub) => (
                                        <li key={sub.label}>
                                          <NavigationMenuLink asChild>
                                            <Link
                                              href={sub.href}
                                              className="px-3 py-1.5 text-sm text-white hover:bg-black/10 rounded-lg transition-colors w-full flex items-center"
                                            >
                                              {sub.label}
                                            </Link>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href || "#"}
                                      className="px-3 py-2 text-sm text-white hover:bg-black/10 rounded-lg transition-colors w-full flex items-center"
                                    >
                                      {child.label}
                                    </Link>
                                  </NavigationMenuLink>
                                )}
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
          </Popover> */}
        </div>
      </div>
      {/* Row 2 */}
      <div className="relative z-10 hidden lg:flex bg-secondary text-white nav-px py-1.5 items-center justify-center gap-2">
        <AppNavigation navigations={SECONDARY_NAV} />
      </div>
    </header>
  );
}
