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
  psi: {
    id: "psi",
    name: "PSI",
  },
  psi_ukvi: {
    id: "psi-ukvi",
    name: "PSI UKVI",
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
  EXAM_IDS_DATA.ielts,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.pte,
  EXAM_IDS_DATA.psi_ukvi,
  EXAM_IDS_DATA.celpip,
  EXAM_IDS_DATA.cael,
  EXAM_IDS_DATA.oet,
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
      href: `/fees/${fee.id}`,
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
    name: "Test Your English Level",
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
export const WORKSHOPS_DATA = {
  workshop_2_hours: {
    id: "workshop_2_hours",
    name: "Workshop 2 Hours",
    duration: "2 hours",
    price: 600,
    currency: "AED",
  },
  workshop_4_hours: {
    id: "workshop_4_hours",
    name: "Workshop 4 Hours",
    duration: "4 hours",
    price: 1000,
    currency: "AED",
  },
  workshop_6_hours: {
    id: "workshop_6_hours",
    name: "Workshop 6 Hours",
    duration: "6 hours",
    price: 1350,
    currency: "AED",
  },
  workshop_8_hours: {
    id: "workshop_8_hours",
    name: "Workshop 8 Hours",
    duration: "8 hours",
    price: 1600,
    currency: "AED",
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

    description:
      "The world's most popular English proficiency test — accepted for university admissions, migration, and UK visas. Choose the IELTS variant that matches your goal below.",
  },
  {
    ...EXAM_IDS_DATA.toefl,

    description:
      "Internet-based English proficiency test used for academic admissions, immigration, and professional certification worldwide.",
  },
  {
    ...EXAM_IDS_DATA.pte,

    description:
      "PTE  is a computer-based English language proficiency test for non-native English speakers.",
  },
  {
    ...EXAM_IDS_DATA.celpip,

    description:
      "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
    items: [
      { ...EXAM_IDS_DATA.celpip_general, type: "description" },
      { ...EXAM_IDS_DATA.celpip_general_ls, type: "description" },
    ],
  },
  {
    ...EXAM_IDS_DATA.cael,

    description:
      "The Canadian Academic English Language Test — specifically designed for study and professional registration in Canada.",
  },
  {
    ...EXAM_IDS_DATA.selt,

    description:
      "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
  },
];
export const EXAM_DETAILE_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    type: "items",
    description:
      "The world's most popular English proficiency test — accepted for university admissions, migration, and UK visas. Choose the IELTS variant that matches your goal below.",
    items: [
      { ...EXAM_IDS_DATA.ielts_academic },
      { ...EXAM_IDS_DATA.ielts_general },
      { ...EXAM_IDS_DATA.ielts_ukvi },
    ],
  },
  {
    ...EXAM_IDS_DATA.ielts_academic,
    type: "details",
    subtitle: "For higher education and professional registration",
    description:
      "The International English Language Testing System (IELTS) is the world’s most popular English proficiency test. Succeed on the gold standard for measuring English language ability in academic contexts.",
    overview:
      "The International English Language Testing System (IELTS) is the world’s most popular English proficiency test. The IELTS Academic test is the international gold standard for measuring English language ability in academic contexts, such as universities or colleges. If you want to apply to an undergraduate or postgraduate degree in an English-speaking environment, you’ll likely have to succeed on the IELTS Academic test.",
    stats: [
      { label: "Total Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "1–5 Days" },
      { label: "Validity", value: "2 Years" },
      { label: "Format", value: "Academic" },
    ],
    sections: [
      {
        icon: "listening",
        name: "Listening Component",
        duration: "30 minutes (+10m transfer time)",
        details:
          "The Listening Component is designed to assess a wide range of listening skills, including how well you understand main ideas, recognize opinions, and follow arguments.",
        skills: [
          "understand main ideas and specific factual information",
          "recognise the opinions, attitudes and purpose of a speaker",
          "follow the development of an argument",
        ],
        format:
          "You will listen to four recordings of native English speakers and then write your answers to a series of questions.\nRecording 1: a conversation between two people set in an everyday social context.\nRecording 2: a monologue set in an everyday social context, e.g. a speech about local facilities.\nRecording 3: a conversation between up to four people set in an educational or training context, e.g. a university tutor and a student discussing an assignment.\nRecording 4: a monologue on an academic subject, e.g. a university lecture.",
        questions: "40 questions",
        taskTypes:
          "multiple choice, matching, plan/map/diagram labelling, form/note/table/flow-chart/summary completion, sentence completion",
        marks:
          "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
      },
      {
        icon: "reading",
        name: "Reading Component",
        duration: "60 minutes",
        details:
          "Three long texts which range from the descriptive and factual to the discursive and analytical. These are taken from books, journals, magazines and newspapers.",
        format:
          "Three long texts taken from books, journals, magazines and newspapers. Selected for a non-specialist audience but appropriate for people entering university courses or seeking professional registration.",
        questions: "40 questions",
        taskTypes:
          "Fill gaps in a passage of written text or in a table, match headings to written text to diagrams or charts, complete sentences, give short answers to open questions, answer multiple choice questions",
        marks:
          "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
      },
      {
        icon: "writing",
        name: "Writing Component",
        duration: "60 minutes",
        details:
          "Write in a formal style in the IELTS Academic Writing test. Consists of two tasks that must be managed within the hour.",
        format:
          "Task 1: Describe, summarise or explain information from a graph, table, chart or diagram in your own words (150+ words).\nTask 2: Write an essay in response to a point of view, argument or problem (250+ words).",
        questions: "2 tasks",
        taskTypes: "Task 1 (Summary/Description) and Task 2 (Essay)",
        marks:
          "Your Writing test will be marked by a certificated IELTS examiner. Task 2 is worth twice as much as Task 1. Scores are reported in whole and half bands.",
      },
      {
        icon: "speaking",
        name: "Speaking Component",
        duration: "11–14 minutes",
        details:
          "The Speaking test is a face-to-face interview with a certified examiner. It is interactive and as close to a real-life situation as a test can get.",
        format:
          "The Speaking test consists of three parts:\nPart 1: You will answer general questions about yourself and a range of familiar topics.\nPart 2: You will be given a card which asks you to talk about a particular topic.\nPart 3: You will be asked further questions about the topic in Part 2.",
      },
    ],
    whoShouldTake: [
      "Students applying for undergraduate or postgraduate degrees",
      "Professionals seeking registration in English-speaking environments",
      "Individuals planning to study at universities or colleges",
    ],
    acceptedFor: [
      "University Admissions",
      "Professional Registration",
      "Student Visas",
      "Academic Employment",
    ],
    faqs: [
      {
        question: "Is the Academic test harder than General Training?",
        answer:
          "The Reading and Writing sections are more complex as they are geared towards academic study. Listening and Speaking are the same.",
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.ielts_general,
    type: "details",
    subtitle: "For migration, work experience, or secondary education",
    description:
      "The IELTS General Training test is designed to measure your English language proficiency in a practical, everyday context. The test reflects both workplace and social situations.",
    overview:
      "The IELTS General Training test is designed to measure your English language proficiency in a practical, everyday context. The test reflects both workplace and social situations. Take IELTS General Training if you want to work or undertake work-related training in an English-speaking country or emigrate to an English-speaking country.",
    stats: [
      { label: "Total Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "1–5 Days" },
      { label: "Validity", value: "2 Years" },
      { label: "Format", value: "General Training" },
    ],
    sections: [
      {
        icon: "listening",
        name: "Listening Component",
        duration: "30 minutes (+10m transfer time)",
        details:
          "The Listening Component is designed to assess a wide range of listening skills, including how well you understand main ideas and follow arguments.",
        skills: [
          "understand main ideas and specific factual information",
          "recognise the opinions, attitudes and purpose of a speaker",
          "follow the development of an argument",
        ],
        format:
          "You will listen to four recordings of native English speakers and then write your answers to a series of questions.\nRecording 1: a conversation between two people set in an everyday social context.\nRecording 2: a monologue set in an everyday social context, e.g. a speech about local facilities.\nRecording 3: a conversation between up to four people set in an educational or training context, e.g. a university tutor and a student discussing an assignment.\nRecording 4: a monologue on an academic subject, e.g. a university lecture.",
        questions: "40 questions",
        taskTypes:
          "multiple choice, matching, plan/map/diagram labelling, form/note/table/flow-chart/summary completion, sentence completion",
        marks:
          "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
      },
      {
        icon: "reading",
        name: "Reading Component",
        duration: "60 minutes",
        details:
          "The IELTS Reading test takes approximately 60 minutes, including the time it takes to transfer your answers from your question booklet to your answer sheet.",
        format:
          "Extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines. These are materials you are likely to encounter on a daily basis in an English-speaking environment.",
        questions: "40 questions",
        taskTypes:
          "Multiple choice, identifying information, identifying writer's views/claims, matching information, matching headings, matching features, matching sentence endings, sentence completion, summary completion, note completion, table completion, flow-chart completion, diagram label completion, short-answer questions.",
        marks:
          "Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.",
      },
      {
        icon: "writing",
        name: "Writing Component",
        duration: "60 minutes",
        details:
          "Write responses to practical and general prompts. Consists of two tasks that must be managed within the hour.",
        format:
          "Task 1: Write a letter requesting information or explaining a situation (150+ words).\nTask 2: Write an essay in response to a point of view, argument or problem (250+ words).",
        questions: "2 tasks",
        taskTypes: "Task 1 (Letter Writing) and Task 2 (Essay)",
        marks:
          "Your Writing test will be marked by a certificated IELTS examiner. Task 2 is worth twice as much as Task 1. Scores are reported in whole and half bands.",
      },
      {
        icon: "speaking",
        name: "Speaking Component",
        duration: "11–14 minutes",
        details:
          "The Speaking test is a face-to-face interview with a certified examiner. It is interactive and as close to a real-life situation as a test can get.",
        format:
          "The Speaking test consists of three parts:\nPart 1: You will answer general questions about yourself and a range of familiar topics.\nPart 2: You will be given a card which asks you to talk about a particular topic.\nPart 3: You will be asked further questions about the topic in Part 2.",
      },
    ],
    whoShouldTake: [
      "Individuals planning to work or undertake work-related training in an English-speaking country",
      "Those who wish to emigrate to an English-speaking country",
      "People looking to demonstrate proficiency in a practical, everyday context",
    ],
    acceptedFor: [
      "Work Permits",
      "Immigration",
      "Secondary Education",
      "Work-related Training",
    ],
    faqs: [
      {
        question: "Can I use General Training for university study?",
        answer:
          "Usually no. Most universities require IELTS Academic. Always check with the institution you are applying to.",
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi,
    type: "items",
    description:
      "IELTS for UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for visa applications to the UK.",
    items: [
      { ...EXAM_IDS_DATA.ielts_ukvi_academic },
      { ...EXAM_IDS_DATA.ielts_ukvi_general },
      { ...EXAM_IDS_DATA.ielts_life_skills_a1 },
      { ...EXAM_IDS_DATA.ielts_life_skills_a2 },
      { ...EXAM_IDS_DATA.ielts_life_skills_b1 },
    ],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi_academic,
    type: "details",
    subtitle: "For study at degree level and above in the UK",
    description:
      "IELTS Academic for UKVI measures whether your level of English language proficiency is suitable for an academic environment.",
    overview:
      "IELTS Academic for UKVI is a Secure English Language Test (SELT) that is required for student visa applications to the UK for courses at degree level and above.",
    stats: [
      { label: "Test Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details: "4 sections, 40 items",
        icon: "listening",
      },
      {
        name: "Academic Reading",
        duration: "60 min",
        details: "3 sections, 40 items",
        icon: "reading",
      },
      {
        name: "Academic Writing",
        duration: "60 min",
        details: "2 tasks",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details: "Face-to-face interview",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["Students applying for UK student visas (degree level)"],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Universities"],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi_general,
    type: "details",
    subtitle: "For migration and work in the UK",
    description:
      "IELTS General Training for UKVI measures English language proficiency in a practical, everyday context.",
    overview:
      "IELTS General Training for UKVI is a Secure English Language Test (SELT) required for UK visa applications for migration, work, or secondary education.",
    stats: [
      { label: "Test Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details: "4 sections, 40 items",
        icon: "listening",
      },
      {
        name: "General Reading",
        duration: "60 min",
        details: "Extracts from books/magazines",
        icon: "reading",
      },
      {
        name: "General Writing",
        duration: "60 min",
        details: "2 tasks",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details: "Face-to-face interview",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["Migrants to the UK", "Work visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Work Permits"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a1,
    type: "details",
    subtitle: "For Family, Spouse or Partner visas",
    description:
      "IELTS Life Skills A1 measures Speaking and Listening skills at CEFR Level A1.",
    overview:
      "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for 'family of a settled person' visas.",
    stats: [
      { label: "Duration", value: "16–18 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "16–18 min",
        details:
          "Face-to-face interview with an examiner and another test taker.",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family/Spouse visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a2,
    type: "details",
    subtitle: "For Family visa extension",
    description:
      "IELTS Life Skills A2 measures Speaking and Listening skills at CEFR Level A2.",
    overview:
      "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for extension to Family, Spouse or Partner visa.",
    stats: [
      { label: "Duration", value: "18–20 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "18–20 min",
        details:
          "Face-to-face interview with an examiner and another test taker.",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family visa extension applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_b1,
    type: "details",
    subtitle: "For Citizenship and Settlement",
    description:
      "IELTS Life Skills B1 measures Speaking and Listening skills at CEFR Level B1.",
    overview:
      "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for indefinite leave to remain or citizenship.",
    stats: [
      { label: "Duration", value: "22 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "22 min",
        details:
          "Face-to-face interview with an examiner and another test taker.",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Citizenship/Settlement applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.toefl,
    type: "details",
    subtitle: "Test of English as a Foreign Language — Internet-Based Test",
    description:
      "The TOEFL iBT is an Internet-based English proficiency test that measures reading, listening, speaking, and writing skills in an academic context.",
    overview:
      "The TOEFL iBT is used primarily for academic admissions, immigration, and professional certification. It takes about 1.5 hours to complete in one sitting, though test takers should allow approximately two hours for the entire process including directions.\n\nAs the test adapts to each individual, the specific items and exact timing may vary slightly. It is widely recognized as one of the most respected English-language tests in the world, accepted by more than 11,500 universities and other institutions in over 160 countries.",
    stats: [
      { label: "Total Duration", value: "~2 Hours" },
      { label: "Score Scale", value: "0–120" },
      { label: "Results In", value: "3 Days" },
      { label: "Validity", value: "2 Years" },
      { label: "Format", value: "Internet-based" },
    ],
    sections: [
      {
        icon: "reading",
        name: "Reading",
        duration: "Approx. 30 minutes",
        questions: "50 items",
        details:
          "Read academic and daily life texts to evaluate comprehension.",
        format:
          "• Complete the Words\n• Read in Daily Life\n• Read an Academic Passage",
      },
      {
        icon: "listening",
        name: "Listening",
        duration: "Approx. 29 minutes",
        questions: "47 items",
        details:
          "Evaluate your ability to understand conversations and lectures in English.",
        format:
          "• Listen and Choose a Response\n• Listen to a Conversation\n• Listen to an Announcement\n• Listen to an Academic Talk",
      },
      {
        icon: "writing",
        name: "Writing",
        duration: "Approx. 23 minutes",
        questions: "12 items",
        details: "Write responses to academic and practical prompts.",
        format:
          "• Build a Sentence\n• Write an Email\n• Write for an Academic Discussion",
      },
      {
        icon: "speaking",
        name: "Speaking",
        duration: "Approx. 8 minutes",
        questions: "11 items",
        details:
          "Respond to prompts verbally to demonstrate speaking proficiency.",
        format: "• Listen and Repeat\n• Take an Interview",
      },
    ],
    whoShouldTake: [
      "Students planning to study at a higher education institution",
      "English-language learning program admissions and exit",
      "Scholarship and certification candidates",
      "Students and workers applying for visas",
    ],
    acceptedFor: [
      "Academic Admissions",
      "Immigration",
      "Professional Certification",
      "Student Visas",
    ],
    faqs: [
      {
        question: "How is TOEFL different from IELTS?",
        answer:
          "TOEFL is fully Internet-based and is primarily used in North America. IELTS includes a face-to-face speaking component.",
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.pte,
    type: "items",
    description:
      "Fast, computer-based English test for study and migration — accepted by thousands of institutions and governments worldwide.",
    items: [
      { ...EXAM_IDS_DATA.pte_academic },
      { ...EXAM_IDS_DATA.pte_core },
      { ...EXAM_IDS_DATA.pte_ukvi },
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_academic,
    type: "details",
    subtitle: "Fast, computer-based English test for study and migration",
    description:
      "PTE Academic is a computer-based English test that assesses your academic-level speaking, writing, reading and listening skills in a single 2-hour sitting.",
    overview:
      "PTE Academic is the preferred choice for students planning to study at a university globally. It provides a fast, fair, and flexible way to prove your English level for academic admissions.\n\nBeyond academia, PTE Academic is widely accepted for work and migration visas, particularly for Australia and New Zealand. It is also uniquely recognized by the U.S. State Boards of Nursing for professional registration and work visas.",
    stats: [
      { label: "Total Duration", value: "2 Hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "2 Days" },
      { label: "Validity", value: "2 Years" },
      { label: "AI Scored", value: "Yes" },
    ],
    sections: [
      {
        icon: "speaking",
        name: "Part 1: Speaking & Writing",
        duration: "54–67 minutes",
        details:
          "Assess your ability to communicate effectively in an academic environment through various integrated tasks.",
        format:
          "Tasks include Personal Introduction, Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Answer Short Question, Summarize Written Text, and Write Essay.",
      },
      {
        icon: "reading",
        name: "Part 2: Reading",
        duration: "29–30 minutes",
        details:
          "Evaluate your ability to understand written English in academic contexts.",
        format:
          "Tasks include Reading & Writing: Fill in the Blanks, Multiple Choice (Multiple Answer), Re-order Paragraphs, Reading: Fill in the Blanks, and Multiple Choice (Single Answer).",
      },
      {
        icon: "listening",
        name: "Part 3: Listening",
        duration: "30–43 minutes",
        details:
          "Test your ability to understand spoken English through a variety of audio and video clips.",
        format:
          "Tasks include Summarize Spoken Text, Multiple Choice (Multiple Answer), Fill in the Blanks, Highlight Correct Summary, Multiple Choice (Single Answer), Select Missing Word, Highlight Incorrect Words, and Write from Dictation.",
      },
    ],
    whoShouldTake: [
      "Students applying for undergraduate or postgraduate study globally",
      "Individuals applying for work or migration visas for Australia and New Zealand",
      "Nurses and healthcare professionals seeking U.S. state board registration",
    ],
    acceptedFor: [
      "University Admissions (Global)",
      "Australian Migration & Work Visas",
      "New Zealand Migration & Work Visas",
      "U.S. Nursing Registration",
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_core,
    type: "details",
    subtitle: "For Canadian migration and work",
    description:
      "PTE Core is a 2-hour computer-based English test that assesses your general speaking, writing, reading and listening skills in a single test.",
    overview:
      "The PTE Core test results are available in just 2 days. It is recognized by the Canadian government (IRCC) for permanent residency applications under all economic classes.\n\nChoose PTE Core if you are applying for permanent residency in Canada. You can also choose PTE Core if you are applying for Canadian citizenship. The test evaluates your ability to use English in everyday vocational situations.",
    stats: [
      { label: "Total Duration", value: "2 Hours" },
      { label: "Approval", value: "IRCC Canada" },
      { label: "Results In", value: "2 Days" },
      { label: "Validity", value: "2 Years" },
      { label: "AI Scored", value: "Yes" },
    ],
    sections: [
      {
        icon: "speaking",
        name: "Part 1: Speaking & Writing",
        duration: "Around 50 minutes",
        details: "This section will test your speaking and writing skills.",
        format:
          "Tasks include Personal Introduction, Read Aloud, Repeat Sentence, Describe Image, Respond to a Situation, Answer Short Question, Summarize Written Text, and Write Email.",
      },
      {
        icon: "reading",
        name: "Part 2: Reading",
        duration: "Around 30 minutes",
        details: "This section will test your reading skills.",
        format:
          "Tasks include Reading & Writing: Fill in the Blanks, Multiple Choice (Multiple Answer), Re-order Paragraphs, Reading: Fill in the Blanks, and Multiple Choice (Single Answer).",
      },
      {
        icon: "listening",
        name: "Part 3: Listening",
        duration: "Around 30 minutes",
        details: "This section will test your listening skills.",
        format:
          "Tasks include Summarize Spoken Text, Multiple Choice (Multiple Answer), Fill in the Blanks, Highlight Correct Summary, Multiple Choice (Single Answer), Select Missing Word, Highlight Incorrect Words, and Write from Dictation.",
      },
    ],
    whoShouldTake: [
      "Individuals applying for Canadian Permanent Residency (PR)",
      "Applicants for Canadian Citizenship",
      "Individuals applying under any economic class pathway",
    ],
    acceptedFor: [
      "Canadian Permanent Residency (IRCC)",
      "Canadian Citizenship",
      "All Economic Class Applications",
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_ukvi,
    type: "items",
    description: "Secure English Language Test (SELT) for UK Visas",
    items: [
      { ...EXAM_IDS_DATA.pte_academic_ukvi },
      { ...EXAM_IDS_DATA.pte_home_a1 },
      { ...EXAM_IDS_DATA.pte_home_a2 },
      { ...EXAM_IDS_DATA.pte_home_b1 },
    ],
  },
  {
    ...EXAM_IDS_DATA.pte_academic_ukvi,
    type: "details",
    subtitle: "Secure English Language Test (SELT) for UK Visas",
    description:
      "PTE Academic UKVI is a SELT approved by the UK Home Office for all UK visas that require a four-skill language test.",
    overview:
      "PTE Academic UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for use in UK visa applications.",
    stats: [
      { label: "Test Duration", value: "2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "2 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Writing",
        duration: "54–67 min",
        details: "Integrated skills assessment",
        icon: "speaking",
      },
      {
        name: "Reading",
        duration: "29–30 min",
        details: "Multiple choice, fill in the blanks",
        icon: "reading",
      },
      {
        name: "Listening",
        duration: "30–43 min",
        details: "Summarize spoken text, dictation",
        icon: "listening",
      },
    ],
    whoShouldTake: ["UK visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.pte_home_a1,
    type: "details",
    subtitle: "For Family and Work visas in the UK",
    description:
      "PTE Home A1 is a basic English test for UK Family and Work visas.",
    overview:
      "PTE Home A1 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Results In", value: "2 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "22 min",
        details: "Speaking and listening tasks only",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family/Spouse visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.pte_home_a2,
    type: "details",
    subtitle: "For UK Family visa extension",
    description:
      "PTE Home A2 is for those applying for a UK Family visa extension.",
    overview:
      "PTE Home A2 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Results In", value: "2 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "22 min",
        details: "Speaking and listening tasks only",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family visa extension applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.pte_home_b1,
    type: "details",
    subtitle: "For UK Citizenship and Settlement",
    description:
      "PTE Home B1 is for UK Citizenship (Naturalisation) and Settlement (Indefinite Leave to Remain).",
    overview:
      "PTE Home B1 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Results In", value: "2 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "22 min",
        details: "Speaking and listening tasks only",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Citizenship and Settlement applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.celpip,
    type: "items",
    description:
      "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
    items: [
      { ...EXAM_IDS_DATA.celpip_general },
      { ...EXAM_IDS_DATA.celpip_general_ls },
    ],
  },
  {
    ...EXAM_IDS_DATA.celpip_general,
    type: "details",
    subtitle: "For Permanent Residency in Canada",
    description:
      "The CELPIP – General evaluates test taker’s English listening, reading, writing, and speaking skills and is officially designated for permanent residence applications by IRCC.",
    overview:
      "The CELPIP – General evaluates test taker’s English listening, reading, writing, and speaking skills. It is officially designated for permanent residence applications by Immigration, Refugees and Citizenship Canada (IRCC), visa purposes by the Australian Department of Home Affairs (DHA), and is also accepted for professional designations.\n\nIt is a computer-delivered test and it takes under 2 hours and 50 minutes to complete in one sitting with no separate speaking session.",
    stats: [
      { label: "Total Duration", value: "2h 50m" },
      { label: "Format", value: "Computer" },
      { label: "Results In", value: "3–4 Days" },
      { label: "Score Scale", value: "M–12" },
      { label: "Validity", value: "2 Years" },
    ],
    sections: [
      {
        icon: "listening",
        name: "Listening Component",
        duration: "47–55 minutes",
        details:
          "Listen to passages and answer questions. The Listening Test contains 6 parts designed to evaluate various real-life listening scenarios.",
        format:
          "Part 1: Listening to Problem Solving\nPart 2: Listening to a Daily Life Conversation\nPart 3: Listening for Information\nPart 4: Listening to a News Item\nPart 5: Listening to a Discussion\nPart 6: Listening to Viewpoints",
        questions: "38-40 questions",
        taskTypes: "Multiple Choice",
        marks:
          "The test may contain unscored reading or listening items used for test development.",
      },
      {
        icon: "reading",
        name: "Reading Component",
        duration: "55–60 minutes",
        details:
          "Read passages and answer questions. Evaluate your ability to understand written correspondence, diagrams, and discursive texts.",
        format:
          "Part 1: Reading Correspondence\nPart 2: Reading to Apply a Diagram\nPart 3: Reading for Information\nPart 4: Reading for Viewpoints",
        questions: "38-40 questions",
        taskTypes: "Multiple Choice, Gap Fill",
      },
      {
        icon: "writing",
        name: "Writing Component",
        duration: "53–60 minutes",
        details:
          "Respond to questions with written answers. Focuses on practical communication such as email writing and responding to survey questions.",
        format:
          "Task 1: Writing an Email\nTask 2: Responding to Survey Questions",
        questions: "2 tasks",
      },
      {
        icon: "speaking",
        name: "Speaking Component",
        duration: "15–20 minutes",
        details:
          "Reply to on-screen prompts verbally. This component is completed in the same sitting as the other tests.",
        format:
          "Task 1: Giving Advice\nTask 2: Talking about a Personal Experience\nTask 3: Describing a Scene\nTask 4: Making Predictions\nTask 5: Comparing and Persuading\nTask 6: Dealing with a Difficult Situation\nTask 7: Expressing Opinions\nTask 8: Describing an Unusual Situation",
      },
    ],
    whoShouldTake: [
      "Permanent residence applicants (IRCC Canada)",
      "Visa applicants for Australia (DHA)",
      "Individuals seeking professional designations",
      "Students applying to Universities and Colleges",
    ],
    acceptedFor: [
      "Permanent Residency",
      "Professional Designation",
      "Australian Visa",
      "Academic Admissions",
    ],
    faqs: [
      {
        question:
          "What is the difference between CELPIP General and General LS?",
        answer:
          "General is for residency (all 4 skills). General LS is for citizenship (only Listening and Speaking).",
      },
    ],
  },
  {
    ...EXAM_IDS_DATA.celpip_general_ls,
    type: "details",
    subtitle: "For Canadian Citizenship",
    description:
      "The CELPIP – General LS evaluates test taker’s English listening and speaking skills and is officially designated for citizenship applications by IRCC.",
    overview:
      "The CELPIP – General LS is a computer-delivered test for citizenship applications. It takes approximately 1 hour and 10 minutes to complete in one sitting.",
    stats: [
      { label: "Total Duration", value: "1h 10m" },
      { label: "Format", value: "Computer" },
      { label: "Results In", value: "3–4 Days" },
      { label: "Score Scale", value: "M–12" },
      { label: "Validity", value: "2 Years" },
    ],
    sections: [
      {
        icon: "listening",
        name: "Listening Component",
        duration: "47–55 minutes",
        details: "Listen to passages and answer questions.",
        format:
          "Part 1: Listening to Problem Solving\nPart 2: Listening to a Daily Life Conversation\nPart 3: Listening for Information\nPart 4: Listening to a News Item\nPart 5: Listening to a Discussion\nPart 6: Listening to Viewpoints",
        questions: "38-40 questions",
        taskTypes: "Multiple Choice",
      },
      {
        icon: "speaking",
        name: "Speaking Component",
        duration: "15–20 minutes",
        details: "Reply to on-screen prompts verbally.",
        format:
          "Task 1: Giving Advice\nTask 2: Talking about a Personal Experience\nTask 3: Describing a Scene\nTask 4: Making Predictions\nTask 5: Comparing and Persuading\nTask 6: Dealing with a Difficult Situation\nTask 7: Expressing Opinions\nTask 8: Describing an Unusual Situation",
      },
    ],
    whoShouldTake: ["Canadian citizenship applicants"],
    acceptedFor: ["Canadian Citizenship"],
  },
  {
    ...EXAM_IDS_DATA.cael,
    type: "details",
    subtitle: "Canadian Academic English Language Test",
    description:
      "The CAEL Test measures the English language proficiency of students planning to study at Canadian universities and colleges.",
    overview:
      "The CAEL Test (Canadian Academic English Language Test) is a computer-delivered test that evaluates your ability to use English in academic contexts. It is accepted by over 180 Canadian academic institutions and professional organizations.\n\nThe test is designed to reflect the language tasks you will perform in a university or college setting, such as reading articles, listening to lectures, and responding to academic prompts.",
    stats: [
      { label: "Total Duration", value: "3.5 Hours" },
      { label: "Format", value: "Computer" },
      { label: "Results In", value: "8 Business Days" },
      { label: "Validity", value: "2 Years" },
      { label: "Acceptance", value: "180+ Inst." },
    ],
    sections: [
      {
        icon: "speaking",
        name: "Speaking",
        duration: "7–10 minutes",
        details: "Reply to on-screen prompts verbally.",
        format:
          "Test takers respond to three speaking tasks that reflect common university-level communication scenarios.",
      },
      {
        icon: "reading",
        name: "Integrated Reading",
        duration: "35–50 minutes",
        details: "Read passages and reply to questions.",
        format:
          "Read one long academic text and answer questions, evaluating comprehension and information retrieval skills.",
      },
      {
        icon: "listening",
        name: "Integrated Listening",
        duration: "25–35 minutes",
        details: "Listen to passages and reply to questions.",
        format:
          "Listen to one long academic lecture and answer questions based on the content and key details.",
      },
      {
        icon: "writing",
        name: "Academic Unit A & B",
        duration: "120–140 minutes",
        details:
          "Integrated academic units combining reading, listening, and writing.",
        format:
          "Combines reading and listening materials on specific academic topics, followed by a writing task that integrates information from both sources.",
      },
    ],
    whoShouldTake: [
      "Students applying for undergraduate or postgraduate programs in Canada",
      "Professionals seeking registration with Canadian regulatory bodies",
    ],
    acceptedFor: [
      "University Admissions (Canada)",
      "College Admissions (Canada)",
      "Professional Registration",
      "Study Permit Applications",
    ],
  },
  {
    ...EXAM_IDS_DATA.oet,
    type: "details",
    subtitle: "Occupational English Test",
    description:
      "The English language test specifically for healthcare professionals.",
    overview:
      "OET is designed specifically for 12 healthcare professions. It assesses the English language communication skills of healthcare professionals who wish to register and practise in an English-speaking environment.",
    stats: [
      { label: "Test Duration", value: "~3 hours" },
      { label: "Score Scale", value: "0–500" },
      { label: "Results In", value: "16 business days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "45 min",
        details: "Healthcare-related listening tasks.",
        icon: "listening",
      },
      {
        name: "Reading",
        duration: "60 min",
        details: "Health-related reading materials.",
        icon: "reading",
      },
      {
        name: "Writing",
        duration: "45 min",
        details: "Writing a referral letter based on case notes.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "20 min",
        details: "Profession-specific role-plays.",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["Doctors", "Nurses", "Healthcare professionals"],
    acceptedFor: [
      "Healthcare registration",
      "Migration for health professionals",
    ],
  },
  {
    ...EXAM_IDS_DATA.psi,
    type: "details",
    subtitle: "Professional Testing Solutions",
    description:
      "Global leader in assessment and certification across healthcare, IT, and professional sectors.",
    overview:
      "PSI offers comprehensive testing solutions for licensing, certification, and corporate talent assessment.",
    stats: [
      { label: "Format", value: "Computer-based" },
      { label: "Availability", value: "Global" },
    ],
    sections: [],
    whoShouldTake: [
      "Professional certification seekers",
      "Licensing applicants",
    ],
    acceptedFor: ["Industry certifications", "Professional licensing"],
  },
  {
    ...EXAM_IDS_DATA.selt,
    type: "items",
    description:
      "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
    items: [
      { ...EXAM_IDS_DATA.selt_a1 },
      { ...EXAM_IDS_DATA.selt_a2 },
      { ...EXAM_IDS_DATA.selt_b1 },
    ],
  },
  {
    ...EXAM_IDS_DATA.selt_a1,
    type: "details",
    subtitle: "For UK Family, Spouse or Partner visas",
    description:
      "Skills for English (UKVI) A1 is for those who need to demonstrate speaking and listening skills at level A1.",
    overview:
      "This test measures speaking and listening skills only. It is approved by the UK Home Office for Family, Spouse or Partner visa applications.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "17–22 min",
        details: "Face-to-face or online speaking and listening tasks",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family visa applicants", "UK Spouse visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.selt_a2,
    type: "details",
    subtitle: "For UK Family visa extension",
    description:
      "Skills for English (UKVI) A2 is for UK Family visa extensions.",
    overview:
      "This test measures speaking and listening skills at level A2. It is required for extending a Family, Spouse or Partner visa after 2.5 years.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "17–22 min",
        details: "Speaking and listening tasks",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Family visa extension applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.selt_b1,
    type: "details",
    subtitle: "For UK Citizenship and Settlement",
    description:
      "Skills for English (UKVI) B1 Speaking & Listening is for UK Citizenship and Settlement.",
    overview:
      "This test measures speaking and listening skills at level B1. It is approved for Indefinite Leave to Remain (Settlement) and British Citizenship applications.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "17–22 min",
        details: "Speaking and listening tasks",
        icon: "speaking",
      },
    ],
    whoShouldTake: ["UK Citizenship applicants", "UK Settlement applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
];

export const FEES_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.toefl,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.pte,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.psi_ukvi,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.celpip,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.cael,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
  {
    ...EXAM_IDS_DATA.oet,
    service_fee: 100,
    exam_fee: 1500,
    workshops: [
      WORKSHOPS_DATA.workshop_2_hours,
      WORKSHOPS_DATA.workshop_4_hours,
      WORKSHOPS_DATA.workshop_6_hours,
      WORKSHOPS_DATA.workshop_8_hours,
    ],
    courses: [
      COURSES_DATA.group_classroom,
      COURSES_DATA.semi_private_classroom,
      COURSES_DATA.vip_classroom,
      COURSES_DATA.vip_online,
    ],
  },
];
