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
  oet: {
    id: "oet",
    name: "OET",
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
  EXAM_IDS_DATA.ielts,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.pte_academic,
  EXAM_IDS_DATA.celpip_general,
  EXAM_IDS_DATA.cael,
  EXAM_IDS_DATA.selt,
  EXAM_IDS_DATA.oet,
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
export const COURSES_DATA = {
  group_classroom: {
    id: "group_classroom",
    name: "Group Classroom",
    class_mode_id: "group",
    class_type_id: "classroom",
    price: 1850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },

  semi_private_classroom: {
    id: "semi_private_classroom",
    name: "Semi-Private Classroom",
    class_mode_id: "semi_private",
    class_type_id: "classroom",
    price: 2850,
    currency: "AED",
    general_discount: 5,
    special_discount: 15,
  },

  vip_classroom: {
    id: "vip_classroom",
    name: "VIP Classroom",
    class_mode_id: "vip",
    class_type_id: "classroom",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },

  vip_online: {
    id: "vip_online",
    name: "Private Online",
    class_mode_id: "vip",
    class_type_id: "online",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
};
export const EXAM_PREPARATION_COURSES_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    exam: {
      name: "IELTS",
      fullName: "International English Language Testing System",
      description:
        "The IELTS is one of the most widely recognized English proficiency exams in the world. It is accepted by over 11,000 universities, immigration authorities, and organizations across more than 140 countries.",
      usage: [
        "Immigration to Canada, the UK, Australia, and New Zealand",
        "University admission",
        "Professional registration",
      ],
      types: [
        {
          name: "IELTS Academic",
          purpose: "University admission and higher education",
        },
        {
          name: "IELTS General Training",
          purpose: "Immigration and work purposes",
        },
      ],
    },
    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The most personalized and intensive exam preparation program, designed for candidates who want focused attention, faster progress, and a fully customized preparation plan.",
        bestFor: [
          "Candidates aiming for high band scores",
          "Limited preparation time",
          "Individual attention preference",
          "Fast improvement in specific sections",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "A small-group format combining personalized instruction with collaboration and peer learning. Only 2 students per class.",
        bestFor: [
          "Friends or colleagues learning together",
          "Students preferring interactive learning",
          "Balanced peer and instructor focus",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.group_classroom,
        description:
          "A dynamic classroom experience with structured learning, interaction, and instructor guidance in a collaborative environment.",
        bestFor: [
          "Interactive classroom preference",
          "Motivation through peer engagement",
          "Structured group dynamics",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.vip_online,
        description:
          "High-quality exam training through live interactive sessions. Ideal for busy professionals or those studying from home.",
        bestFor: [
          "Studying from home preference",
          "Busy professional schedules",
          "Live interaction without commuting",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.celpip_general,
    exam: {
      name: "CELPIP General",
      fullName: "Canadian English Language Proficiency Index Program",
      description:
        "The CELPIP test is specifically designed for Canadian immigration and citizenship applications. It is approved by Immigration, Refugees and Citizenship Canada (IRCC) and is widely used for permanent residency and citizenship processes. Unlike some other exams, CELPIP uses Canadian English accents and real-life scenarios, making it highly practical for candidates planning to live and work in Canada.",
      usage: [
        "Permanent Residency in Canada",
        "Canadian Citizenship applications",
        "Work permits and professional registration",
        "Approved by IRCC",
      ],
      types: [
        {
          name: "CELPIP General",
          purpose: "Immigration and citizenship purposes",
        },
      ],
    },
    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The CELPIP Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
        bestFor: [
          "Need to achieve a high score CLB 8+",
          "Limited preparation timeframe",
          "Prefer individual attention & feedback",
          "Improve specific exam sections quickly",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small, supportive environment",
          "Friends or family preparing together",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "2 Students Only",
        },
      },
      {
        ...COURSES_DATA.group_classroom,
        description:
          "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Practical strategies & peer practice",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "Small Groups",
        },
      },
      {
        ...COURSES_DATA.vip_online,
        description:
          "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
        bestFor: [
          "Studying from home preference",
          "Demanding work schedules",
          "Live instructor interaction",
          "Flexible scheduling options",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_academic,
    exam: {
      name: "PTE Academic",
      fullName: "Pearson Test of English",
      description:
        "The PTE Academic is a fully computer-based English proficiency exam developed by Pearson. It is widely accepted by thousands of universities and governments around the world, including Australia, Canada, and New Zealand. Results are typically available within 48 hours. The test uses advanced AI scoring technology to evaluate speaking, writing, listening, and reading skills objectively.",
      usage: [
        "Fast results turnaround (48 hours)",
        "Immigration to Australia, Canada & NZ",
        "Global university admission",
        "Advanced AI scoring technology",
      ],
      types: [
        {
          name: "PTE Academic",
          purpose: "Academic and immigration purposes",
        },
      ],
    },
    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The PTE Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
        bestFor: [
          "Need to achieve a high score 79+",
          "Limited preparation timeframe",
          "Prefer individual attention & feedback",
          "Improve specific exam sections quickly",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small, supportive environment",
          "Friends or family preparing together",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "2 Students Only",
        },
      },
      {
        ...COURSES_DATA.group_classroom,
        description:
          "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Structured program coverage",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "Small Groups",
        },
      },
      {
        ...COURSES_DATA.vip_online,
        description:
          "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
        bestFor: [
          "Studying from home preference",
          "Demanding work schedules",
          "Live instructor interaction",
          "Flexible scheduling options",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.toefl,
    exam: {
      name: "TOEFL iBT",
      fullName: "Test of English as a Foreign Language",
      description:
        "The TOEFL iBT is one of the most respected English proficiency exams, widely used for university admission, especially in the United States and Canada. It is accepted by more than 11,500 institutions in over 160 countries. The exam measures academic English skills needed for studying in an English-speaking environment.",
      usage: [
        "University admission in USA & Canada",
        "Postgraduate studies abroad",
        "Academic English communication",
      ],
      types: [
        {
          name: "TOEFL iBT",
          purpose: "Academic English communication",
        },
      ],
    },
    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The TOEFL iBT Private One-to-One Course offers the most personalized and intensive preparation available. Every session is tailored to your current level, target score, and exam deadline, focusing on realistic tasks and proven strategies.",
        bestFor: [
          "Need to achieve a high score",
          "Limited preparation timeframe",
          "Prefer individual attention & feedback",
          "Improve specific sections quickly",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small, supportive environment",
          "Friends or family preparing together",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "2 Students Only",
        },
      },
      {
        ...COURSES_DATA.group_classroom,
        description:
          "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Practical strategies & peer practice",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "Small Groups",
        },
      },
      {
        ...COURSES_DATA.vip_online,
        description:
          "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules that make commuting difficult.",
        bestFor: [
          "Studying from home preference",
          "Demanding work schedules",
          "Live interaction without commuting",
          "Flexible real-time instruction",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.selt,
    exam: {
      name: "SELT",
      fullName: "Skills for English (SELT)",
      description:
        "Skills for English (SELT) is an English test approved by the UK Home Office for visa and immigration applications to the United Kingdom. It is required for various UK visa categories, including work visas, family visas, and settlement applications. Only specific approved exams fall under the SELT category, such as certain versions of IELTS or language tests provided by authorized testing providers.",
      usage: [
        "UK Work Visas",
        "UK Family and Spouse Visas",
        "UK Settlement (Indefinite Leave to Remain)",
        "UK Home Office approved",
      ],
      types: [
        {
          name: "SELT A1-C2",
          purpose: "Visa and immigration applications",
        },
      ],
    },
    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The Skills for English (SELT) Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
        bestFor: [
          "Need to achieve a high score CLB 8+",
          "Limited preparation timeframe",
          "Prefer individual attention & feedback",
          "Improve specific exam sections quickly",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },
      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small, supportive environment",
          "Friends or family preparing together",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "2 Students Only",
        },
      },
      {
        ...COURSES_DATA.group_classroom,
        description:
          "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Structured program coverage",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
          classSize: "Small Groups",
        },
      },
      {
        ...COURSES_DATA.vip_online,
        description:
          "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
        bestFor: [
          "Studying from home preference",
          "Demanding work schedules",
          "Live instructor interaction",
          "Flexible scheduling options",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.cael,
    exam: {
      name: "CAEL",
      fullName: "Canadian Academic English Language Assessment",
      description:
        "The CAEL exam is designed primarily for students who want to study at Canadian universities and colleges. It evaluates English proficiency in an academic context, focusing on the type of language students encounter in lectures, classroom discussions, and academic assignments. CAEL is recognized by many Canadian universities and higher education institutions, making it an excellent option for candidates planning to pursue higher education in Canada.",
      usage: [
        "Canadian University Admissions",
        "Canadian College Admissions",
        "Academic English Proficiency Assessment",
        "Higher Education in Canada",
      ],
      types: [
        {
          name: "CAEL",
          purpose: "Academic study and university admissions in Canada",
        },
      ],
    },

    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The CAEL Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to the candidate’s current level, target score, and exam deadline.",
        bestFor: [
          "Need to achieve a high score CLB 8+",
          "Limited preparation timeframe",
          "Prefer individual attention & continuous feedback",
          "Improve specific exam sections quickly",
        ],
        features: [
          "Realistic CAEL exam tasks & simulations",
          "Section-wise exam strategies",
          "Detailed writing correction & feedback",
          "Intensive speaking practice",
          "Time-management techniques",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while still benefiting from collaboration with another student. The instructor provides detailed guidance while encouraging discussion, interaction, and peer learning.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small supportive environment",
          "Friends or family preparing together",
        ],
        features: [
          "Guided speaking practice",
          "Writing analysis & correction",
          "Reading & listening strategies",
          "Structured section-wise training",
          "Exam simulations & confidence building",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          classSize: "2 Students Only",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.group_classroom,
        description:
          "The CAEL Group Course is ideal for candidates who benefit from a dynamic classroom environment while still receiving meaningful instructor support. Small groups encourage active participation, discussion, and regular speaking practice.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Consistent instructor guidance",
        ],
        features: [
          "Reading comprehension strategies",
          "Listening techniques under time pressure",
          "Writing structures for scoring criteria",
          "Speaking fluency & confidence practice",
          "Authentic exam-style questions",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          classSize: "Small Groups",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.vip_online,
        description:
          "Our CAEL Online Preparation Course provides the same high-quality exam training as our classroom programs through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules.",
        bestFor: [
          "Studying from home preference",
          "Busy work or study schedules",
          "Flexible learning environment",
          "Live instructor interaction",
        ],
        features: [
          "Live instructor-led online sessions",
          "Structured training for all sections",
          "Speaking practice with feedback",
          "Writing evaluation & improvement guidance",
          "Flexible scheduling options",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.oet,
    exam: {
      name: "OET",
      fullName: "Occupational English Test",
      description:
        "The OET is an English proficiency exam specifically designed for healthcare professionals. It is recognized by medical and healthcare regulatory bodies in countries such as the UK, Australia, New Zealand, Ireland, and Canada. Unlike general English exams, OET focuses on real healthcare communication scenarios, including patient consultations, medical documentation, and professional discussions.",
      usage: [
        "Healthcare Professional Registration",
        "Medical & Nursing Licensing",
        "Healthcare Migration Requirements",
        "Professional Communication Assessment",
      ],
      professions: [
        "Doctors",
        "Nurses",
        "Dentists",
        "Pharmacists",
        "Physiotherapists",
        "Other Healthcare Specialists",
      ],
      types: [
        {
          name: "OET",
          purpose:
            "English proficiency assessment for healthcare professionals",
        },
      ],
    },

    courses: [
      {
        ...COURSES_DATA.vip_classroom,
        description:
          "The OET Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to the candidate’s current level, target score, and exam deadline.",
        bestFor: [
          "Need to achieve a high score",
          "Limited preparation timeframe",
          "Prefer individual attention & continuous feedback",
          "Improve specific exam sections quickly",
        ],
        features: [
          "Realistic OET exam tasks & simulations",
          "Section-wise exam strategies",
          "Detailed writing correction & feedback",
          "Intensive speaking practice",
          "Time-management techniques",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.semi_private_classroom,
        description:
          "Designed for candidates who prefer a small learning environment while still benefiting from collaboration with another student. The instructor provides detailed guidance while encouraging discussion, interaction, and peer learning.",
        bestFor: [
          "Interactive learning preference",
          "Collaborative problem solving",
          "Small supportive environment",
          "Friends or colleagues preparing together",
        ],
        features: [
          "Guided speaking practice",
          "Writing analysis & correction",
          "Reading & listening strategies",
          "Structured section-wise training",
          "Exam simulations & confidence building",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          classSize: "2 Students Only",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.group_classroom,
        description:
          "The OET Group Course is ideal for candidates who benefit from a dynamic classroom environment while still receiving meaningful instructor support. Small groups encourage active participation, discussion, and regular speaking practice.",
        bestFor: [
          "Dynamic classroom preference",
          "Motivation through peer engagement",
          "Structured collaborative learning",
          "Consistent instructor guidance",
        ],
        features: [
          "Reading comprehension strategies",
          "Listening techniques under time pressure",
          "Writing structures for scoring criteria",
          "Speaking fluency & confidence practice",
          "Authentic exam-style questions",
        ],
        details: {
          duration: "24 Hours",
          completionTime: "6 Weeks",
          classSize: "Small Groups",
          schedule: "Flexible",
        },
      },

      {
        ...COURSES_DATA.vip_online,
        description:
          "Our OET Online Preparation Course provides the same high-quality exam training as our classroom programs through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules.",
        bestFor: [
          "Studying from home preference",
          "Busy work schedules",
          "Flexible learning environment",
          "Live instructor interaction",
        ],
        features: [
          "Live instructor-led online sessions",
          "Structured training for all sections",
          "Speaking practice with feedback",
          "Writing evaluation & improvement guidance",
          "Flexible scheduling options",
        ],
        details: {
          duration: "20 Hours",
          format: "Live Online Classes",
          schedule: "Flexible",
        },
      },
    ],
  },
];
export const EXAM_CARDS_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    type: "items",
    description:
      "The world's most popular English proficiency test — accepted for university admissions, migration, and UK visas. Choose the IELTS variant that matches your goal below.",
    items: [
      { ...EXAM_IDS_DATA.ielts_academic, type: "description" },
      { ...EXAM_IDS_DATA.ielts_general, type: "description" },
      { ...EXAM_IDS_DATA.ielts_ukvi, type: "items" },
    ],
  },
  // {
  //   ...EXAM_IDS_DATA.ielts_academic,
  //   type: "description",
  //   data: {
  //     content:
  //       "The world's most popular English test for higher education and professional registration.",
  //     overview:
  //       "IELTS Academic measures whether your level of English language proficiency is suitable for an academic environment. It reflects aspects of academic language and evaluates whether you’re ready to begin training or studying.",
  //     stats: [
  //       { label: "Test Duration", value: "2 hours 45 mins" },
  //       { label: "Score Scale", value: "0–9 Bands" },
  //       { label: "Results In", value: "3–5 days" },
  //       { label: "Validity", value: "2 years" },
  //     ],
  //     sections: [
  //       {
  //         name: "Listening",
  //         duration: "30 min",
  //         details: "4 recorded monologues and conversations.",
  //         icon: "listening",
  //       },
  //       {
  //         name: "Academic Reading",
  //         duration: "60 min",
  //         details:
  //           "3 long texts which range from the descriptive and factual to the discursive and analytical.",
  //         icon: "reading",
  //       },
  //       {
  //         name: "Academic Writing",
  //         duration: "60 min",
  //         details:
  //           "Task 1: describe a chart, graph, or diagram. Task 2: write an essay in response to a point of view.",
  //         icon: "writing",
  //       },
  //       {
  //         name: "Speaking",
  //         duration: "11–14 min",
  //         details: "A face-to-face interview with an examiner.",
  //         icon: "speaking",
  //       },
  //     ],
  //     whoShouldTake: [
  //       "Prospective undergraduate students",
  //       "Prospective postgraduate students",
  //       "Medical professionals (Doctors, Nurses, etc.)",
  //       "Professional registration applicants",
  //     ],
  //     acceptedFor: [
  //       "University admissions worldwide",
  //       "Medical board registration",
  //       "Student visa applications",
  //     ],
  //     faqs: [
  //       {
  //         question: "Is the Academic test harder than General Training?",
  //         answer:
  //           "The Reading and Writing sections are more complex as they are geared towards academic study. Listening and Speaking are the same.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   ...EXAM_IDS_DATA.ielts_general,
  //   type: "description",
  //   data: {
  //     content:
  //       "The world's most popular English test for migration, secondary education, and work experience.",
  //     overview:
  //       "IELTS General Training measures English language proficiency in a practical, everyday context. The tasks and tests reflect both workplace and social situations.",
  //     stats: [
  //       { label: "Test Duration", value: "2 hours 45 mins" },
  //       { label: "Score Scale", value: "0–9 Bands" },
  //       { label: "Results In", value: "3–5 days" },
  //       { label: "Validity", value: "2 years" },
  //     ],
  //     sections: [
  //       {
  //         name: "Listening",
  //         duration: "30 min",
  //         details: "4 recorded monologues and conversations.",
  //         icon: "listening",
  //       },
  //       {
  //         name: "General Reading",
  //         duration: "60 min",
  //         details:
  //           "Extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines.",
  //         icon: "reading",
  //       },
  //       {
  //         name: "General Writing",
  //         duration: "60 min",
  //         details:
  //           "Task 1: write a letter requesting information or explaining a situation. Task 2: write an essay in response to a point of view.",
  //         icon: "writing",
  //       },
  //       {
  //         name: "Speaking",
  //         duration: "11–14 min",
  //         details: "A face-to-face interview with an examiner.",
  //         icon: "speaking",
  //       },
  //     ],
  //     whoShouldTake: [
  //       "Migrants to Australia, Canada, New Zealand, and the UK",
  //       "Secondary school students",
  //       "Job seekers in English-speaking countries",
  //       "Vocational training applicants",
  //     ],
  //     acceptedFor: [
  //       "Skilled migration visas",
  //       "Permanent residency applications",
  //       "Secondary education admissions",
  //       "Work permits",
  //     ],
  //     faqs: [
  //       {
  //         question: "Can I use General Training for university study?",
  //         answer:
  //           "Usually no. Most universities require IELTS Academic. Always check with the institution you are applying to.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   ...EXAM_IDS_DATA.ielts_ukvi,
  //   type: "items",
  //   description:
  //     "IELTS for UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for visa applications to the UK.",
  //   items: [
  //     EXAM_IDS_DATA.ielts_ukvi_academic,
  //     EXAM_IDS_DATA.ielts_ukvi_general,
  //     EXAM_IDS_DATA.ielts_life_skills_a1,
  //     EXAM_IDS_DATA.ielts_life_skills_a2,
  //     EXAM_IDS_DATA.ielts_life_skills_b1,
  //   ],
  // },
  {
    ...EXAM_IDS_DATA.toefl,
    type: "description",
    description:
      "Internet-based English proficiency test used for academic admissions, immigration, and professional certification worldwide.",
    data: {
      content:
        "Internet-based English proficiency test used for academic admissions, immigration, and professional certification worldwide.",
      overview:
        "The TOEFL iBT is an Internet-based English proficiency test that measures reading, listening, speaking, and writing skills in an academic context. It takes approximately 2 hours to complete in one sitting and is used primarily for academic admissions, immigration, and professional certification. The TOEFL iBT is accepted by over 12,000 universities and institutions in 160+ countries.",
      stats: [
        { label: "Test Duration", value: "~2 hours" },
        { label: "Score Scale", value: "0–120" },
        { label: "Results In", value: "3 days" },
        { label: "Validity", value: "2 years" },
      ],
      sections: [
        {
          name: "Reading",
          duration: "~30 min",
          details:
            "50 items. Task types: Complete the Words, Read in Daily Life, Read an Academic Passage.",
          icon: "reading",
        },
        {
          name: "Listening",
          duration: "~29 min",
          details:
            "47 items. Task types: Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk.",
          icon: "listening",
        },
        {
          name: "Writing",
          duration: "~23 min",
          details:
            "12 items. Task types: Build a Sentence, Write an Email, Write for an Academic Discussion.",
          icon: "writing",
        },
        {
          name: "Speaking",
          duration: "~8 min",
          details:
            "11 items. Task types: Listen and Repeat, Take an Interview. Test time does not include directions.",
          icon: "speaking",
        },
      ],
      whoShouldTake: [
        "University applicants in the USA, Canada, UK, and Australia",
        "Scholarship and fellowship applicants",
        "Students applying to graduate programmes",
        "Immigration and professional certification requirements",
      ],
      acceptedFor: [
        "US/Canadian/UK/Australian university admissions",
        "Graduate programme applications",
        "Immigration purposes",
        "Professional certification",
      ],
      faqs: [
        {
          question: "What score do I need for a US university?",
          answer:
            "Most US universities require a TOEFL iBT score of 80–100+. Top universities may require 100–110.",
        },
        {
          question: "Can I get a hard copy of my score report?",
          answer:
            "Yes. If requested before your test, it will be mailed 11–15 days after your test date. Express shipping (2–5 days) is available.",
        },
        {
          question: "How is TOEFL different from IELTS?",
          answer:
            "TOEFL is fully Internet-based and is primarily used in North America. IELTS includes a face-to-face speaking component.",
        },
      ],
    },
  },
  {
    ...EXAM_IDS_DATA.pte,
    type: "items",
    description:
      "PTE  is a computer-based English language proficiency test for non-native English speakers.",
    items: [
      { ...EXAM_IDS_DATA.pte_academic, type: "description" },
      { ...EXAM_IDS_DATA.pte_core, type: "description" },
      { ...EXAM_IDS_DATA.pte_ukvi, type: "items" },
    ],
  },
  {
    ...EXAM_IDS_DATA.celpip,
    type: "items",
    description:
      "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
    items: [
      { ...EXAM_IDS_DATA.celpip_general, type: "description" },
      { ...EXAM_IDS_DATA.celpip_general_ls, type: "description" },
    ],
  },
  {
    ...EXAM_IDS_DATA.cael,
    type: "description",
    description:
      "The Canadian Academic English Language Test — specifically designed for study and professional registration in Canada.",
    data: {
      content:
        "The Canadian Academic English Language Test — specifically designed for study and professional registration in Canada.",
      overview:
        "The CAEL Test measures the English language proficiency of students planning to study in Canadian post-secondary institutions. CAEL is one of the best tools for identifying students with the right English skills for academic success.",
      stats: [
        { label: "Test Duration", value: "~3.5 hours" },
        { label: "Score Scale", value: "10–90" },
        { label: "Results In", value: "8 business days" },
        { label: "Validity", value: "2 years" },
      ],
      sections: [
        {
          name: "Listening",
          duration: "50 min",
          details: "Listening to various types of academic information.",
          icon: "listening",
        },
        {
          name: "Reading",
          duration: "50 min",
          details: "Reading academic articles and responding to questions.",
          icon: "reading",
        },
        {
          name: "Writing",
          duration: "35 min",
          details: "Writing academic essays based on provided information.",
          icon: "writing",
        },
        {
          name: "Speaking",
          duration: "25 min",
          details: "Academic speaking tasks and interview format.",
          icon: "speaking",
        },
      ],
      whoShouldTake: [
        "Students applying to Canadian universities and colleges",
        "Professional registration applicants in Canada",
      ],
      acceptedFor: [
        "University admissions in Canada",
        "Professional certification",
      ],
      faqs: [
        {
          question: "Is CAEL only for Canada?",
          answer:
            "Yes, it is specifically designed for the Canadian academic context.",
        },
      ],
    },
  },
  {
    ...EXAM_IDS_DATA.selt,
    type: "items",
    description:
      "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
    items: [
      { ...EXAM_IDS_DATA.selt_a1, type: "description" },
      { ...EXAM_IDS_DATA.selt_a2, type: "description" },
      { ...EXAM_IDS_DATA.selt_b1, type: "description" },
      { ...EXAM_IDS_DATA.selt_b1_r_w, type: "description" },
      { ...EXAM_IDS_DATA.selt_b2, type: "description" },
      { ...EXAM_IDS_DATA.selt_c1, type: "description" },
      { ...EXAM_IDS_DATA.selt_c2, type: "description" },
    ],
  },
];
