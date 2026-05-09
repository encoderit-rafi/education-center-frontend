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
  EXAM_IDS_DATA.ielts,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.pte_academic,
];

export const PRIMARY_NAV: AppNavigationItem[] = [
  { type: "single", name: "home", href: "/" },
  {
    type: "dropdown",
    name: "Exams",
    href: "/exams",
    items: [
      ...NAV_EXAMS_DATA.map((exam) => ({
        name: exam.name,
        href: `/exams/${exam.id}`,
      })),
      {
        name: "Other Exams",
        href: "/exams/other-exams",
      },
    ],
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
export const PAID_MOCK_TEST_CARDS_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    description:
      "Master time pressure, improve writing structure, and build real exam confidence through practice.",
    important:
      "Students typically improve 1–1.5 bands by mastering time allocation and exam strategy.",
    points: [
      "Learn when to skip & scan questions",
      "Fix weak writing structure (Task 1 & 2)",
      "Build 3-hour exam stamina",
      "Reduce real test anxiety",
    ],
  },
  {
    ...EXAM_IDS_DATA.toefl,
    description:
      "Prepare for the new adaptive, fast-paced TOEFL with real exam simulation.",
    important:
      "Develop faster responses and handle adaptive difficulty with confidence.",
    points: [
      "Adapt to changing question difficulty",
      "Improve fast reading & note-taking",
      "Practice new academic task formats",
      "Strengthen quick speaking responses",
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_academic,
    description:
      "Train for a fully computer-scored exam by mastering speed, accuracy, and task strategy.",
    important:
      "Understand high-impact tasks and boost scores with smart preparation.",
    points: [
      "Practice real computer interface & timing",
      "Improve speaking response (3–5 sec)",
      "Master integrated scoring system",
      "Get AI-based score predictions",
    ],
  },
];
export const PAID_MOCK_TESTS_DATA = {
  ielts: {
    ...EXAM_IDS_DATA.ielts,
    hero: {
      title: "IELTS",
      titleHighlight: "Paid Mock Test",
      description:
        "The International English Language Testing System is heavily influenced by time pressure, question familiarity, and writing expectations. Our mock tests help in ways that normal practice cannot.",
    },
    benefits: {
      title: "Benefits of Mock Tests for",
      titleHighlight: "IELTS",
      description:
        "Master the environment, the pressure, and the strict timing before your actual test day.",
      items: [
        {
          title: "Understanding the Exam Rhythm",
          description:
            "In IELTS, the order of tasks matters. Listening flows into reading, and both require intense concentration. When students do full mock tests, they learn how to maintain focus for nearly three hours, which many first-time candidates underestimate.",
          icon: "Activity",
        },
        {
          title: "Training Your Brain for Time Allocation",
          description:
            "IELTS Reading is where many students lose marks. Through mock tests, students learn strategy and awareness that usually improves scores by 1–1.5 bands for many candidates.",
          icon: "Clock",
          points: [
            "When to skip a difficult question",
            "How to scan instead of read every line",
            "How much time to spend on each passage",
          ],
        },
        {
          title: "Mastering Writing Task Expectations",
          description:
            "Many candidates think their English is good but still score Band 6 or 6.5 in Writing. Real timed practice exposes weaknesses that normal writing practice hides.",
          icon: "PenTool",
          points: [
            "Whether Task 2 arguments are strong enough",
            "If Task 1 reports are structured properly",
            "Fitting into 20 and 40 minutes limits",
          ],
        },
        {
          title: "Reducing Test-Day Anxiety",
          description:
            "Students who sit their first full IELTS test on exam day often panic because the environment feels unfamiliar. Mock tests simulate the pressure, strict timing, and mental fatigue.",
          icon: "ShieldCheck",
        },
        {
          title: "Identifying Score Patterns",
          description:
            "Through multiple mock tests, teachers can identify patterns such as strong listening but weak reading or poor essay structure, helping create targeted improvement plans.",
          icon: "TrendingUp",
        },
      ],
    },
    testimonial: {
      quote:
        "By the time students enter the real test room, it feels like just another practice session.",
      tagline: "The TEPTH Mock Test Experience",
    },
    booking: {
      title: "Book Your",
      titleHighlight: "IELTS Test",
      initialMockTestId: "ielts",
    },
  },
  pte_academic: {
    ...EXAM_IDS_DATA.pte_academic,
    hero: {
      title: "PTE Academic",
      titleHighlight: "Mock Test",
      description:
        "The Pearson Test of English Academic is fully computer-scored. Understanding the scoring logic and mastering the digital interface is critical for achieving your target score.",
    },
    benefits: {
      title: "Benefits of Mock Tests for",
      titleHighlight: "PTE",
      description:
        "Master the digital interface and integrated scoring logic before your actual test day.",
      items: [
        {
          title: "Learning the Computer Interface",
          description:
            "Many students lose marks simply because they are unfamiliar with the digital environment. Mock tests allow students to practice with the interface until it becomes automatic.",
          icon: "Monitor",
          points: [
            "Microphone timing & activation",
            "Recording countdowns awareness",
            "Typing speed requirements",
            "Highlighting & navigation tools",
          ],
        },
        {
          title: "Understanding Integrated Scoring",
          description:
            "PTE tasks often contribute to multiple skills simultaneously. Mock tests show students which tasks give the highest score impact, allowing smarter preparation.",
          icon: "Brain",
          points: [
            "Repeat Sentence (Listening & Speaking)",
            "Reading & Writing Fill in the Blanks",
            "Identifying high-impact task types",
          ],
        },
        {
          title: "Improving Response Speed",
          description:
            "PTE is extremely fast-paced. In speaking tasks, you often have only 3–5 seconds to begin speaking. Mock testing trains students to respond immediately and fluently.",
          icon: "Zap",
          points: [
            "Start speaking immediately (3-5s window)",
            "Avoid long pauses & hesitations",
            "Maintain natural fluency under pressure",
          ],
        },
        {
          title: "Building Digital Stamina",
          description:
            "The PTE exam can feel mentally exhausting because everything happens on a computer. Mock tests prepare students for the concentration required throughout the session.",
          icon: "Activity",
          points: [
            "Manage long screen time fatigue",
            "Handle rapid task switching",
            "Maintain concentration without breaks",
          ],
        },
        {
          title: "Predicting Real Scores",
          description:
            "High-quality PTE mock tests provide AI-based score estimates that closely resemble real exam scoring, allowing students to measure readiness before test day.",
          icon: "TrendingUp",
          points: [
            "Accurate AI-based score estimates",
            "Identify weak task categories",
            "Adjust strategy before the real test",
          ],
        },
      ],
    },
    testimonial: {
      quote:
        "PTE mock tests are the only way to understand how the AI scoring system evaluates your performance in real-time.",
      tagline: "The TEPTH Digital Experience",
    },
    booking: {
      title: "Book Your",
      titleHighlight: "PTE Mock Test",
      initialMockTestId: "pte",
    },
  },
  toefl: {
    ...EXAM_IDS_DATA.toefl,
    hero: {
      title: "TOEFL iBT",
      titleHighlight: "Mock Test",
      description:
        "With the updated TOEFL format being shorter, faster, and more adaptive, mock tests have become even more critical for achieving elite scores.",
    },
    benefits: {
      title: "Benefits of Mock Tests for",
      titleHighlight: "TOEFL iBT",
      description:
        "Master the 2026 adaptive format and faster pace before your actual test day.",
      items: [
        {
          title: "Adaptive Test Readiness",
          description:
            "The updated TOEFL uses an adaptive system in Reading and Listening where difficulty changes based on your performance. Mock tests help you master this dynamic flow.",
          icon: "Shuffle",
          points: [
            "Maintain accuracy from the start",
            "Stay calm when difficulty shifts",
            "Avoid distraction during difficulty shifts",
          ],
        },
        {
          title: "Mastering the Faster Pace",
          description:
            "With the overall time reduced to 90 minutes, the pace is noticeably faster. Practice under real time limits to prioritize essential information over overthinking.",
          icon: "Gauge",
          points: [
            "Faster reading comprehension",
            "Quick note-taking during listening",
            "Immediate response planning",
          ],
        },
        {
          title: "New Academic Task Practice",
          description:
            "The latest TOEFL includes tasks that resemble real academic interactions. Mock tests ensure you understand the level of detail expected in these responses.",
          icon: "BookOpen",
          points: [
            "Familiarity with new task structures",
            "Efficient response planning",
            "Master practical communication styles",
          ],
        },
        {
          title: "Rapid Speaking Response",
          description:
            "In the updated format, speaking tasks provide very little preparation time. Timed mock testing is the only way to build real speaking confidence and fluency.",
          icon: "Mic",
          points: [
            "Structure responses within seconds",
            "Speak clearly without long pauses",
            "Maintain organization under pressure",
          ],
        },
        {
          title: "Digital Intensive Stamina",
          description:
            "Although shorter, the test demands continuous concentration. Learn to manage mental fatigue and maintain consistency across all sections.",
          icon: "Timer",
          points: [
            "Manage mental fatigue effectively",
            "Focus during rapid task transitions",
            "Remain consistent across sections",
          ],
        },
        {
          title: "Realistic Score Patterns",
          description:
            "Well-designed mock tests reveal patterns like weak speaking organization or slow reading speed, making your preparation far more focused and productive.",
          icon: "TrendingUp",
          points: [
            "Identify weak speaking organization",
            "Measure reading speed under pressure",
            "Analyze writing structure patterns",
          ],
        },
      ],
    },
    testimonial: {
      quote:
        "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency.",
      tagline: "Master the Shorter, Faster TOEFL iBT",
    },
    booking: {
      title: "Book Your",
      titleHighlight: "TOEFL Mock Test",
      initialMockTestId: "toefl",
    },
  },
};
