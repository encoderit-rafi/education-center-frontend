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
import { COURSES } from "@/lib/courses-data";
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
        {/* Row 1: Red Row with Logo, Primary Nav & Search */}
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
                    className="w-24 md:w-96"
                  />
                </div>
                {/* Spacer for the absolute element - only visible on desktop */}
                <div className="hidden lg:block w-24 md:w-32 h-12" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {/* Desktop Primary Nav */}
              <NavigationMenu className="hidden lg:flex" viewport={false}>
                <NavigationMenuList className="gap-2">
                  {primaryNav.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 text-sm font-bold text-white hover:bg-black/10 hover:text-white border-none outline-none focus:bg-white/10 transition-all rounded-lg">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="z-50 p-1 min-w-48 !bg-[#AD1010] !text-white border border-red-700 shadow-2xl rounded-xl">

                            <ul className="flex flex-col">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className="px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-colors w-full flex items-center"
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
                            className="px-2 py-1.5 text-sm font-bold text-white hover:bg-white/10 transition-all rounded-lg"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>


                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="hidden md:block bg-white rounded-full">
                <SearchCommand />
              </div>

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden">
                <Popover>
                  <PopoverTrigger render={<Button className="p-2 text-white hover:text-red-200 transition-colors" variant="ghost" />}>
                    <Menu className="w-6 h-6" />
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64 bg-white border-slate-200 p-1 shadow-2xl rounded-xl z-[60]">
                    <NavigationMenu className="max-w-none *:w-full">
                      <NavigationMenuList className="flex-col items-start gap-0">
                        {navItems.map((item, index) => (
                          <NavigationMenuItem className="w-full" key={item.label}>
                            {item.children ? (
                              <>
                                <div className="px-2 py-1.5 font-bold text-slate-400 text-[10px] uppercase tracking-wider">
                                  {item.label}
                                </div>
                                <ul className="mb-2">
                                  {item.children.map((child) => (
                                    <li key={child.label}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={child.href}
                                          className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-900 rounded-lg transition-colors w-full flex items-center"
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
                                  className="px-3 py-2 text-sm font-bold text-slate-700 hover:bg-red-50 hover:text-red-900 rounded-lg transition-colors w-full flex items-center"
                                >
                                  {item.label}
                                </Link>
                              </NavigationMenuLink>

                            )}
                            {index < navItems.length - 1 && (
                              <div className="mx-2 my-1 h-px bg-slate-100" />
                            )}
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Dark Row with Secondary Nav */}
        <div className="hidden lg:block bg-[#111827] border-b border-black shadow-sm">
          <div className="flex justify-end pr-6">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex items-center justify-end gap-x-4 xl:gap-x-6 py-3 pl-40">
                {secondaryNav.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>                        <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 text-sm font-bold text-white hover:bg-white/10 hover:text-white border-none outline-none focus:bg-white/10 transition-all rounded-lg">
                        <div className="flex items-center gap-1.5">
                          {item.label}
                          {item.badge && (
                            <Badge className="bg-red-600 text-[9px] px-1.5 py-0 border-none text-white">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 p-1 min-w-48 !bg-[#AD1010] !text-white border border-red-700 shadow-2xl rounded-xl">

                          <ul className="flex flex-col">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-colors w-full flex items-center"
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
                          className="px-2 py-1.5 text-sm font-bold text-white hover:bg-white/10 hover:text-white transition-all rounded-lg"
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
        </div>
      </div>
    </header>
  );
}
