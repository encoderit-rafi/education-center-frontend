import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import SearchCommand from "./search-command";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

import { COURSES } from "@/lib/courses-data";

const navItems = [
  {
    label: "Exam Preparation Courses",
    children: COURSES.filter(course => course.id.endsWith("-prep")).map((course) => ({
      label: course.title,
      href: `/courses/${course.id}`,
    }))
  },
  { label: "Fees", href: "/fees" },
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
    label: "Book Exam", href: "/book-a-test"
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
  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-3 mx-auto gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              alt="TEPTH Logo"
              width={80}
              height={80}
              src="/images/tepth-logo.png"
              className="w-16 h-auto md:w-20"
            />
          </Link>
        </div>

        {/* Carousel Navigation - hidden on small mobile, visible from sm up */}
        <div className="flex-1 min-w-0 max-w-[calc(100%-180px)] lg:max-w-none">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full group relative px-10 h-12"
          >
            <CarouselContent className="flex items-center h-12 -ml-2">
              {navItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 basis-auto">
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 hover:bg-red-50 transition-all text-sm font-medium whitespace-nowrap cursor-pointer outline-none">
                        {item.label} <ChevronDown className="h-4 w-4 opacity-50" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuGroup>
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.label}>
                              <Link href={child.href} className="w-full">{child.label}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-red-900 dark:hover:text-red-400 hover:bg-red-50 transition-all text-sm font-medium whitespace-nowrap group"
                    >
                      {item.label}
                      {item.badge && (
                        <span className="px-1.5 py-0.5 bg-red-600 text-[9px] font-bold text-white rounded-md uppercase tracking-wider shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex h-8 w-8 hover:bg-red-50 hover:text-red-900 absolute left-0 top-1/2 !translate-y-[-50%] active:!translate-y-[-50%] z-10 bg-white/90 border-none shadow-md opacity-100 disabled:hidden transition-opacity" />
            <CarouselNext className="flex h-8 w-8 hover:bg-red-50 hover:text-red-900 absolute right-0 top-1/2 !translate-y-[-50%] active:!translate-y-[-50%] z-10 bg-white/90 border-none shadow-md opacity-100 disabled:hidden transition-opacity" />
          </Carousel>
        </div>

        {/* Actions (Search, Hamburger) */}
        <div className="flex items-center gap-2 shrink-0">
          <SearchCommand />

          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden p-1.5 rounded-md hover:bg-slate-100 transition-colors">
              <Menu className="size-5 text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="end">
              <DropdownMenuGroup>
                {navItems.map((item) => {
                  if (item.children) {
                    return (
                      <DropdownMenuSub key={item.label}>
                        <DropdownMenuSubTrigger>
                          {item.label}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.label}>
                              <Link href={child.href} className="w-full">
                                {child.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    );
                  }
                  return (
                    <DropdownMenuItem key={item.label}>
                      <Link href={item.href || "#"} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
