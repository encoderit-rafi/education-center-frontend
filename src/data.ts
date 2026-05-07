import { AppNavigationItem } from "./components/blocks/app-navigation";

export const NAV_EXAMS_DATA = [
  {
    id: "ielts",
    name: "IELTS",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
  },
  {
    id: "pte",
    name: "PTE",
  },
  {
    id: "celpip",
    name: "CELPIP",
  },
  {
    id: "cael",
    name: "CAEL",
  },
  {
    id: "selt",
    name: "Skills for English (SELT)",
  },
];
export const NAV_EXAM_PREPARATION_COURSES_DATA = [
  {
    id: "ielts",
    name: "IELTS",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
  },
  {
    id: "pte-academic",
    name: "PTE Academic",
  },
  {
    id: "celpip-general",
    name: "CELPIP General",
  },
  {
    id: "selt",
    name: "Skills for English (SELT)",
  },
];
export const NAV_BOOK_EXAMS_DATA = [
  {
    id: "ielts",
    name: "IELTS",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
  },
  {
    id: "pte-academic",
    name: "PTE Academic",
  },
  {
    id: "celpip-general",
    name: "CELPIP General",
  },
  {
    id: "cael",
    name: "CAEL",
  },
  {
    id: "selt",
    name: "Skills for English (SELT)",
  },
];
export const NAV_FEES = [
  {
    id: "ielts",
    name: "IELTS",
  },
  {
    id: "toefl",
    name: "TOEFL",
  },
  {
    id: "pte",
    name: "PTE",
  },
  {
    id: "psi-ukvi",
    name: "PSI (UKVI)",
  },
  {
    id: "celpip",
    name: "CELPIP",
  },
  {
    id: "cael",
    name: "CAEL",
  },
  {
    id: "oet",
    name: "OET",
  },
];
export const NAV_PAID_MOCK_TESTS = [
  { id: "ielts", name: "IELTS" },
  { id: "toefl", name: "TOEFL iBT" },
  { id: "pte-academic", name: "PTE Academic" },
];

export const PRIMARY_NAV: AppNavigationItem[] = [
  { type: "single", name: "home", href: "/" },
  {
    type: "dropdown",
    name: "Exams",
    href: "/exams",
    items: NAV_EXAMS_DATA.map((exam) => ({
      name: exam.name,
      href: `/exams/${exam.id}`,
    })),
  },
  {
    type: "dropdown",
    name: "Exam Preparation Courses",
    href: "/exam-preparation-courses",
    items: NAV_EXAM_PREPARATION_COURSES_DATA.map((exam) => ({
      name: exam.name,
      href: `/exam-preparation-courses/${exam.id}`,
    })),
  },

  {
    type: "dropdown",
    name: "Book Exams",
    href: "/book-exams",
    items: NAV_BOOK_EXAMS_DATA.map((exam) => ({
      name: exam.name,
      href: `/book-exams/${exam.id}`,
    })),
  },
  {
    type: "dropdown",
    name: "Fees",
    href: "/fees",
    items: NAV_FEES.map((fee) => ({
      name: fee.name,
      href: `/fees#${fee.id}`,
    })),
  },
  {
    type: "dropdown",
    name: "Paid Mock Tests",
    href: "/paid-mock-tests",
    items: NAV_PAID_MOCK_TESTS.map((item) => ({
      name: item.name,
      href: `/paid-mock-tests/${item.id}`,
    })),
  },
];
export const SECONDARY_NAV: AppNavigationItem[] = [
  {
    type: "single",
    name: "Free Consultation",
    href: "/free-consultation",
  },
  {
    type: "single",
    name: "Assessment Solutions",
    href: "/assessment-solutions",
  },
  {
    type: "dropdown",
    name: "Test Dates",
    href: "/test-dates",
    items: [
      { name: "IELTS", href: "/test-dates" },
      { name: "TOEFL iBT", href: "/test-dates" },
      { name: "PTE", href: "/test-dates" },
      { name: "CELPIP General", href: "/test-dates" },
      { name: "CAEL", href: "/test-dates" },
      { name: "Skills for English (SELT)", href: "/test-dates" },
    ],
  },
  {
    type: "single",
    name: "Exam Special Accommodation",
    href: "/special-accommodation",
  },
  {
    type: "dropdown",
    name: "Exam Proctoring Services",
    href: "/exam-proctoring-services",
    items: [
      { name: "Institutions", href: "/exam-proctoring-services/institutions" },
      { name: "Test-Takers", href: "/exam-proctoring-services/test-takers" },
    ],
  },
  {
    type: "dropdown",
    name: "Exam Delivery",
    href: "/exam-delivery",
    items: [
      { name: "Exam Provider", href: "/exam-delivery/exam-provider" },
      { name: "Test Takers", href: "/exam-delivery/test-takers" },
      { name: "Vendor", href: "/exam-delivery/vendor" },
    ],
  },
  {
    type: "dropdown",
    name: "Our Venues",
    href: "/our-venues",
    items: [
      {
        name: "360° Virtual Tour",
        href: "/our-venues/360-degree-virtual-tour",
      },
      { name: "Book An Exam Venue", href: "/our-venues/book-an-exam-venue" },
    ],
  },
  {
    type: "single",
    name: "Test Your English",
    href: "/test-your-english",
  },
  {
    type: "dropdown",
    name: "About Us",
    href: "/about-us",
    items: [
      { name: "Who We Are", href: "/about-us/who-we-are" },
      { name: "Mission & Vision", href: "/about-us/vision-and-mission" },
      { name: "Why Choose Us", href: "/about-us/why-choose-us" },
      { name: "Accreditation", href: "/about-us/accreditation" },
      { name: "How to Find Us", href: "/about-us/how-to-find-us" },
    ],
  },
  {
    type: "single",
    name: "Contact Us",
    href: "/contact-us",
  },
];
