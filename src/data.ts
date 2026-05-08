import { AppNavigationItem } from "./components/blocks/app-navigation";

export const EXAM_IDS_DATA = {
  ielts: {
    id: "ielts",
    name: "IELTS",
  },
  ielts_academic: {
    id: "ielts-academic",
    name: "IELTS Academic",
  },
  ielts_general: {
    id: "ielts-general",
    name: "IELTS General",
  },
  ielts_ukvi: {
    id: "ielts-ukvi",
    name: "IELTS UKVI",
  },
  ielts_ukvi_academic: {
    id: "ielts-ukvi-academic",
    name: "IELTS UKVI Academic",
  },
  ielts_ukvi_general: {
    id: "ielts-ukvi-general",
    name: "IELTS UKVI General",
  },
  ielts_life_skills_a1: {
    id: "ielts-life-skills-a1",
    name: "IELTS Life Skills A1",
  },
  ielts_life_skills_a2: {
    id: "ielts-life-skills-a2",
    name: "IELTS Life Skills A2",
  },
  ielts_life_skills_b1: {
    id: "ielts-life-skills-b1",
    name: "IELTS Life Skills B1",
  },
  toefl_ibt: {
    id: "toefl-ibt",
    name: "TOEFL iBT",
  },
  pte: {
    id: "pte",
    name: "PTE",
  },
  pte_academic: {
    id: "pte-academic",
    name: "PTE Academic",
  },
  pte_core: {
    id: "pte-core",
    name: "PTE Core",
  },
  pte_ukvi: {
    id: "pte-ukvi",
    name: "PTE UKVI (SELT)",
  },
  pte_academic_ukvi: {
    id: "pte-academic-ukvi",
    name: "PTE Academic UKVI",
  },
  pte_home_a1: {
    id: "pte-home-a1",
    name: "PTE Home A1",
  },
  pte_home_a2: {
    id: "pte-home-a2",
    name: "PTE Home A2",
  },
  pte_home_b1: {
    id: "pte-home-b1",
    name: "PTE Home B1",
  },
  toefl: {
    id: "toefl",
    name: "TOEFL iBT",
  },
  celpip: {
    id: "celpip",
    name: "CELPIP",
  },
  celpip_general: {
    id: "celpip-general",
    name: "CELPIP General",
  },
  celpip_general_ls: {
    id: "celpip-general-ls",
    name: "CELPIP General LS",
  },
  cael: {
    id: "cael",
    name: "CAEL",
  },
  selt: {
    id: "selt",
    name: "Skills for English (SELT)",
  },
  selt_a1: {
    id: "selt-a1",
    name: "UKVI Speaking and listening at level A1",
  },
  selt_a2: {
    id: "selt-a2",
    name: "UKVI Speaking and listening at level A2",
  },
  selt_b1: {
    id: "selt-b1",
    name: "UKVI Speaking and listening at level B1",
  },
  selt_b1_r_w: {
    id: "selt-b1-r-w",
    name: "UKVI Speaking, listening, reading, and writing at level B1",
  },
  selt_b2: {
    id: "selt-b2",
    name: "UKVI Speaking, listening, reading, and writing at level B2",
  },
  selt_c1: {
    id: "selt-c1",
    name: "UKVI Speaking, listening, reading, and writing at level C1",
  },
  selt_c2: {
    id: "selt-c2",
    name: "UKVI Speaking, listening, reading, and writing at level C2",
  },
};
export const NAV_EXAMS_DATA = [
  EXAM_IDS_DATA.ielts,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.pte,
  EXAM_IDS_DATA.celpip,
  EXAM_IDS_DATA.cael,
  EXAM_IDS_DATA.selt,
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
    name: "Paid Mock Tests",
    href: "/paid-mock-tests",
    items: NAV_PAID_MOCK_TESTS.map((item) => ({
      name: item.name,
      href: `/paid-mock-tests/${item.id}`,
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
    name: "Fees",
    href: "/fees",
    items: NAV_FEES.map((fee) => ({
      name: fee.name,
      href: `/fees#${fee.id}`,
    })),
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
export const SECONDARY_NAV: AppNavigationItem[] = [
  {
    type: "single",
    name: "Free Consultation",
    href: "/free-consultation",
  },
  {
    type: "single",
    name: "Test Your English",
    href: "/test-your-english",
  },
  {
    type: "single",
    name: "Assessment Solutions",
    href: "/assessment-solutions",
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
];
