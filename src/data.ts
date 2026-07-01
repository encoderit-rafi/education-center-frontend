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
    id: "ielts-for-ukvi-academic",
    name: "IELTS for UKVI Academic",
  },
  ielts_ukvi_general: {
    id: "ielts-for-ukvi-general-training",
    name: "IELTS for UKVI General Training",
  },
  ielts_life_skills_a1: {
    id: "ielts-for-ukvi-life-skills-a1",
    name: "IELTS for UKVI Life Skills A1",
  },
  ielts_life_skills_a2: {
    id: "ielts-for-ukvi-life-skills-a2",
    name: "IELTS for UKVI Life Skills A2",
  },
  ielts_life_skills_b1: {
    id: "ielts-for-ukvi-life-skills-b1",
    name: "IELTS for UKVI Life Skills B1",
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
    name: "PTE UKVI",
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
    name: "CELPIP General",
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
    id: "skill-for-english-selt",
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
  EXAM_IDS_DATA.pte,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.cael,
  EXAM_IDS_DATA.celpip,
  EXAM_IDS_DATA.selt,
];
// export const NAV_EXAM_PREPARATION_COURSES_DATA = [
//   EXAM_IDS_DATA.ielts,
//   EXAM_IDS_DATA.toefl,
//   EXAM_IDS_DATA.pte_academic,
//   EXAM_IDS_DATA.celpip_general,
//   EXAM_IDS_DATA.cael,
//   EXAM_IDS_DATA.selt,
//   EXAM_IDS_DATA.oet,
// ];
export const NAV_TEST_DATES_DATA = [
  EXAM_IDS_DATA.ielts,
  EXAM_IDS_DATA.pte,
  EXAM_IDS_DATA.toefl,
  EXAM_IDS_DATA.cael,
  EXAM_IDS_DATA.celpip_general,
  EXAM_IDS_DATA.selt,
];

export const TEST_DATES_CARDS_DATA = [
  {
    ...EXAM_IDS_DATA.ielts,
    description:
      "Check upcoming IELTS test dates for Academic and General Training modules in Sharjah and across the UAE.",
  },
  {
    ...EXAM_IDS_DATA.pte,
    description:
      "View real-time availability for PTE Academic and PTE UKVI tests. Fast results and frequent testing windows.",
  },
  {
    ...EXAM_IDS_DATA.toefl,
    description:
      "Find available TOEFL iBT test sessions. Select your preferred date and secure your seat for the internet-based test.",
  },
  {
    ...EXAM_IDS_DATA.cael,
    description:
      "Find CAEL test dates for study and professional registration in Canada. Choose from our available sessions.",
  },
  {
    ...EXAM_IDS_DATA.celpip_general,
    description:
      "Upcoming CELPIP General test dates for Canadian immigration and citizenship applications.",
  },
  {
    ...EXAM_IDS_DATA.selt,
    description:
      "Secure English Language Test (SELT) dates for UK visa applications. View upcoming speaking, listening, reading, and writing slots.",
  },
  {
    ...EXAM_IDS_DATA.oet,
    description:
      "Check available OET test dates for healthcare professionals. Secure your seat for Medicine, Nursing, and other healthcare disciplines.",
  },
];
// export const NAV_BOOK_EXAMS_DATA = [
//   EXAM_IDS_DATA.ielts,
//   EXAM_IDS_DATA.toefl,
//   EXAM_IDS_DATA.pte_academic,
//   EXAM_IDS_DATA.celpip_general,
//   EXAM_IDS_DATA.cael,
//   EXAM_IDS_DATA.selt,
// ];
// export const NAV_FEES = [
//   EXAM_IDS_DATA.ielts,
//   EXAM_IDS_DATA.toefl,
//   EXAM_IDS_DATA.pte,
//   EXAM_IDS_DATA.psi_ukvi,
//   EXAM_IDS_DATA.celpip,
//   EXAM_IDS_DATA.cael,
//   EXAM_IDS_DATA.oet,
// ];
// export const NAV_PAID_MOCK_TESTS = [
//   EXAM_IDS_DATA.ielts,
//   EXAM_IDS_DATA.toefl,
//   EXAM_IDS_DATA.pte,
// ];

export const PRIMARY_NAV: AppNavigationItem[] = [
  { type: "single", name: "home", href: "/" },
  {
    type: "dropdown",
    name: "Exams",
    href: "/exams",
    items: [
      // ...NAV_EXAMS_DATA.map((exam) => ({
      //   name: exam.name,
      //   href: `/exams/${exam.id}`,
      // })),
      // {
      //   name: "Other Exams",
      //   href: "/exams/other-exams",
      // },
    ],
  },
  {
    type: "dropdown",
    name: "Test Dates",
    href: "/test-dates",
    items: NAV_TEST_DATES_DATA.map((item) => ({
      name: item.name,
      href: `/test-dates/${item.id}`,
    })),
  },
  {
    type: "dropdown",
    name: "Book Exam",
    href: "/book-exams",
    items: [],
  },
  {
    type: "dropdown",
    name: "Paid Mock Tests",
    href: "/paid-mock-tests",
    items: [],
  },
  {
    type: "dropdown",
    name: "Exam Preparation Courses",
    href: "/exam-preparation-courses",
    // items: NAV_EXAM_PREPARATION_COURSES_DATA.map((exam) => ({
    //   name: exam.name,
    //   href: `/exam-preparation-courses/${exam.id}`,
    // })),
    items: [],
  },

  {
    type: "dropdown",
    name: "Fees",
    href: "/fees",
    items: [],
  },

  {
    type: "dropdown",
    name: "About Us",
    href: "/about-us",
    items: [
      { name: "Who We Are", href: "/about-us/who-we-are" },
      { name: "Mission & Vision", href: "/about-us/mission-and-vision" },
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
    name: "English Quiz",
    href: "/english-quiz",
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
      { name: "Candidates", href: "/exam-proctoring-services/candidates" },
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
// export const PAID_MOCK_TEST_CARDS_DATA = [
//   {
//     ...EXAM_IDS_DATA.ielts,
//     description:
//       "Master time pressure, improve writing structure, and build real exam confidence through practice.",
//     important:
//       "Students typically improve 1–1.5 bands by mastering time allocation and exam strategy.",
//     points: [
//       "Learn when to skip & scan questions",
//       "Fix weak writing structure (Task 1 & 2)",
//       "Build 3-hour exam stamina",
//       "Reduce real test anxiety",
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.toefl,
//     description:
//       "Prepare for the new adaptive, fast-paced TOEFL with real exam simulation.",
//     important:
//       "Develop faster responses and handle adaptive difficulty with confidence.",
//     points: [
//       "Adapt to changing question difficulty",
//       "Improve fast reading & note-taking",
//       "Practice new academic task formats",
//       "Strengthen quick speaking responses",
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.pte_academic,
//     description:
//       "Train for a fully computer-scored exam by mastering speed, accuracy, and task strategy.",
//     important:
//       "Understand high-impact tasks and boost scores with smart preparation.",
//     points: [
//       "Practice real computer interface & timing",
//       "Improve speaking response (3–5 sec)",
//       "Master integrated scoring system",
//       "Get AI-based score predictions",
//     ],
//   },
// ];
// export const PAID_MOCK_TESTS_DATA = {
//   ielts: {
//     ...EXAM_IDS_DATA.ielts,
//     hero: {
//       title: "IELTS",
//       titleHighlight: "Paid Mock Test",
//       description:
//         "The International English Language Testing System is heavily influenced by time pressure, question familiarity, and writing expectations. Our mock tests help in ways that normal practice cannot.",
//     },
//     benefits: {
//       title: "Benefits of Mock Tests for",
//       titleHighlight: "IELTS",
//       description:
//         "Master the environment, the pressure, and the strict timing before your actual test day.",
//       items: [
//         {
//           title: "Understanding the Exam Rhythm",
//           description:
//             "In IELTS, the order of tasks matters. Listening flows into reading, and both require intense concentration. When students do full mock tests, they learn how to maintain focus for nearly three hours, which many first-time candidates underestimate.",
//           icon: "Activity",
//         },
//         {
//           title: "Training Your Brain for Time Allocation",
//           description:
//             "IELTS Reading is where many students lose marks. Through mock tests, students learn strategy and awareness that usually improves scores by 1–1.5 bands for many candidates.",
//           icon: "Clock",
//           points: [
//             "When to skip a difficult question",
//             "How to scan instead of read every line",
//             "How much time to spend on each passage",
//           ],
//         },
//         {
//           title: "Mastering Writing Task Expectations",
//           description:
//             "Many candidates think their English is good but still score Band 6 or 6.5 in Writing. Real timed practice exposes weaknesses that normal writing practice hides.",
//           icon: "PenTool",
//           points: [
//             "Whether Task 2 arguments are strong enough",
//             "If Task 1 reports are structured properly",
//             "Fitting into 20 and 40 minutes limits",
//           ],
//         },
//         {
//           title: "Reducing Test-Day Anxiety",
//           description:
//             "Students who sit their first full IELTS test on exam day often panic because the environment feels unfamiliar. Mock tests simulate the pressure, strict timing, and mental fatigue.",
//           icon: "ShieldCheck",
//         },
//         {
//           title: "Identifying Score Patterns",
//           description:
//             "Through multiple mock tests, teachers can identify patterns such as strong listening but weak reading or poor essay structure, helping create targeted improvement plans.",
//           icon: "TrendingUp",
//         },
//       ],
//     },
//     testimonial: {
//       quote:
//         "By the time students enter the real test room, it feels like just another practice session.",
//       tagline: "The TEPTH Mock Test Experience",
//     },
//     booking: {
//       title: "Book Your",
//       titleHighlight: "IELTS Test",
//       initialMockTestId: "ielts",
//     },
//   },
//   pte: {
//     ...EXAM_IDS_DATA.pte,
//     hero: {
//       title: "PTE",
//       titleHighlight: "Mock Test",
//       description:
//         "The Pearson Test of English Academic is fully computer-scored. Understanding the scoring logic and mastering the digital interface is critical for achieving your target score.",
//     },
//     benefits: {
//       title: "Benefits of Mock Tests for",
//       titleHighlight: "PTE",
//       description:
//         "Master the digital interface and integrated scoring logic before your actual test day.",
//       items: [
//         {
//           title: "Learning the Computer Interface",
//           description:
//             "Many students lose marks simply because they are unfamiliar with the digital environment. Mock tests allow students to practice with the interface until it becomes automatic.",
//           icon: "Monitor",
//           points: [
//             "Microphone timing & activation",
//             "Recording countdowns awareness",
//             "Typing speed requirements",
//             "Highlighting & navigation tools",
//           ],
//         },
//         {
//           title: "Understanding Integrated Scoring",
//           description:
//             "PTE tasks often contribute to multiple skills simultaneously. Mock tests show students which tasks give the highest score impact, allowing smarter preparation.",
//           icon: "Brain",
//           points: [
//             "Repeat Sentence (Listening & Speaking)",
//             "Reading & Writing Fill in the Blanks",
//             "Identifying high-impact task types",
//           ],
//         },
//         {
//           title: "Improving Response Speed",
//           description:
//             "PTE is extremely fast-paced. In speaking tasks, you often have only 3–5 seconds to begin speaking. Mock testing trains students to respond immediately and fluently.",
//           icon: "Zap",
//           points: [
//             "Start speaking immediately (3-5s window)",
//             "Avoid long pauses & hesitations",
//             "Maintain natural fluency under pressure",
//           ],
//         },
//         {
//           title: "Building Digital Stamina",
//           description:
//             "The PTE exam can feel mentally exhausting because everything happens on a computer. Mock tests prepare students for the concentration required throughout the session.",
//           icon: "Activity",
//           points: [
//             "Manage long screen time fatigue",
//             "Handle rapid task switching",
//             "Maintain concentration without breaks",
//           ],
//         },
//         {
//           title: "Predicting Real Scores",
//           description:
//             "High-quality PTE mock tests provide AI-based score estimates that closely resemble real exam scoring, allowing students to measure readiness before test day.",
//           icon: "TrendingUp",
//           points: [
//             "Accurate AI-based score estimates",
//             "Identify weak task categories",
//             "Adjust strategy before the real test",
//           ],
//         },
//       ],
//     },
//     testimonial: {
//       quote:
//         "PTE mock tests are the only way to understand how the AI scoring system evaluates your performance in real-time.",
//       tagline: "The TEPTH Digital Experience",
//     },
//     booking: {
//       title: "Book Your",
//       titleHighlight: "PTE Mock Test",
//       initialMockTestId: "pte",
//     },
//   },
//   toefl: {
//     ...EXAM_IDS_DATA.toefl,
//     hero: {
//       title: "TOEFL iBT",
//       titleHighlight: "Mock Test",
//       description:
//         "With the updated TOEFL format being shorter, faster, and more adaptive, mock tests have become even more critical for achieving elite scores.",
//     },
//     benefits: {
//       title: "Benefits of Mock Tests for",
//       titleHighlight: "TOEFL iBT",
//       description:
//         "Master the 2026 adaptive format and faster pace before your actual test day.",
//       items: [
//         {
//           title: "Adaptive Test Readiness",
//           description:
//             "The updated TOEFL uses an adaptive system in Reading and Listening where difficulty changes based on your performance. Mock tests help you master this dynamic flow.",
//           icon: "Shuffle",
//           points: [
//             "Maintain accuracy from the start",
//             "Stay calm when difficulty shifts",
//             "Avoid distraction during difficulty shifts",
//           ],
//         },
//         {
//           title: "Mastering the Faster Pace",
//           description:
//             "With the overall time reduced to 90 minutes, the pace is noticeably faster. Practice under real time limits to prioritize essential information over overthinking.",
//           icon: "Gauge",
//           points: [
//             "Faster reading comprehension",
//             "Quick note-taking during listening",
//             "Immediate response planning",
//           ],
//         },
//         {
//           title: "New Academic Task Practice",
//           description:
//             "The latest TOEFL includes tasks that resemble real academic interactions. Mock tests ensure you understand the level of detail expected in these responses.",
//           icon: "BookOpen",
//           points: [
//             "Familiarity with new task structures",
//             "Efficient response planning",
//             "Master practical communication styles",
//           ],
//         },
//         {
//           title: "Rapid Speaking Response",
//           description:
//             "In the updated format, speaking tasks provide very little preparation time. Timed mock testing is the only way to build real speaking confidence and fluency.",
//           icon: "Mic",
//           points: [
//             "Structure responses within seconds",
//             "Speak clearly without long pauses",
//             "Maintain organization under pressure",
//           ],
//         },
//         {
//           title: "Digital Intensive Stamina",
//           description:
//             "Although shorter, the test demands continuous concentration. Learn to manage mental fatigue and maintain consistency across all sections.",
//           icon: "Timer",
//           points: [
//             "Manage mental fatigue effectively",
//             "Focus during rapid task transitions",
//             "Remain consistent across sections",
//           ],
//         },
//         {
//           title: "Realistic Score Patterns",
//           description:
//             "Well-designed mock tests reveal patterns like weak speaking organization or slow reading speed, making your preparation far more focused and productive.",
//           icon: "TrendingUp",
//           points: [
//             "Identify weak speaking organization",
//             "Measure reading speed under pressure",
//             "Analyze writing structure patterns",
//           ],
//         },
//       ],
//     },
//     testimonial: {
//       quote:
//         "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency.",
//       tagline: "Master the Shorter, Faster TOEFL iBT",
//     },
//     booking: {
//       title: "Book Your",
//       titleHighlight: "TOEFL Mock Test",
//       initialMockTestId: "toefl",
//     },
//   },
// };
// export const WORKSHOPS_DATA = {
//   workshop_2_hours: {
//     id: "workshop_2_hours",
//     name: "Workshop 2 Hours",
//     duration: "2 hours",
//     price: 600,
//     currency: "AED",
//   },
//   workshop_4_hours: {
//     id: "workshop_4_hours",
//     name: "Workshop 4 Hours",
//     duration: "4 hours",
//     price: 1000,
//     currency: "AED",
//   },
//   workshop_6_hours: {
//     id: "workshop_6_hours",
//     name: "Workshop 6 Hours",
//     duration: "6 hours",
//     price: 1350,
//     currency: "AED",
//   },
//   workshop_8_hours: {
//     id: "workshop_8_hours",
//     name: "Workshop 8 Hours",
//     duration: "8 hours",
//     price: 1600,
//     currency: "AED",
//   },
// };
// export const COURSES_DATA = {
//   group_classroom: {
//     id: "group_classroom",
//     name: "Group Classroom",
//     class_mode_id: "group",
//     class_type_id: "classroom",
//     price: 1850,
//     currency: "AED",
//     general_discount: 5,
//     special_discount: 10,
//   },

//   semi_private_classroom: {
//     id: "semi_private_classroom",
//     name: "Semi-Private Classroom",
//     class_mode_id: "semi_private",
//     class_type_id: "classroom",
//     price: 2850,
//     currency: "AED",
//     general_discount: 5,
//     special_discount: 15,
//   },
//   // private one to one
//   vip_classroom: {
//     id: "vip_classroom",
//     name: "VIP Classroom",
//     class_mode_id: "vip",
//     class_type_id: "classroom",
//     price: 4850,
//     currency: "AED",
//     general_discount: 5,
//     special_discount: 20,
//   },
//   //online one to one

//   vip_online: {
//     id: "vip_online",
//     name: "Private Online",
//     class_mode_id: "vip",
//     class_type_id: "online",
//     price: 4850,
//     currency: "AED",
//     general_discount: 5,
//     special_discount: 20,
//   },
// };
// export const EXAM_PREPARATION_COURSES_DATA = [
//   {
//     ...EXAM_IDS_DATA.ielts,
//     exam: {
//       name: "IELTS",
//       fullName: "International English Language Testing System",
//       description:
//         "The IELTS is one of the most widely recognized English proficiency exams in the world. It is accepted by over 11,000 universities, immigration authorities, and organizations across more than 140 countries.",
//       usage: [
//         "Immigration to Canada, the UK, Australia, and New Zealand",
//         "University admission",
//         "Professional registration",
//       ],
//       types: [
//         {
//           name: "IELTS Academic",
//           purpose: "University admission and higher education",
//         },
//         {
//           name: "IELTS General Training",
//           purpose: "Immigration and work purposes",
//         },
//       ],
//     },
//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The most personalized and intensive exam preparation program, designed for candidates who want focused attention, faster progress, and a fully customized preparation plan.",
//         bestFor: [
//           "Candidates aiming for high band scores",
//           "Limited preparation time",
//           "Individual attention preference",
//           "Fast improvement in specific sections",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "A small-group format combining personalized instruction with collaboration and peer learning. Only 2 students per class.",
//         bestFor: [
//           "Friends or colleagues learning together",
//           "Students preferring interactive learning",
//           "Balanced peer and instructor focus",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "A dynamic classroom experience with structured learning, interaction, and instructor guidance in a collaborative environment.",
//         bestFor: [
//           "Interactive classroom preference",
//           "Motivation through peer engagement",
//           "Structured group dynamics",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "High-quality exam training through live interactive sessions. Ideal for busy professionals or those studying from home.",
//         bestFor: [
//           "Studying from home preference",
//           "Busy professional schedules",
//           "Live interaction without commuting",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.celpip_general,
//     exam: {
//       name: "CELPIP General",
//       fullName: "Canadian English Language Proficiency Index Program",
//       description:
//         "The CELPIP test is specifically designed for Canadian immigration and citizenship applications. It is approved by Immigration, Refugees and Citizenship Canada (IRCC) and is widely used for permanent residency and citizenship processes. Unlike some other exams, CELPIP uses Canadian English accents and real-life scenarios, making it highly practical for candidates planning to live and work in Canada.",
//       usage: [
//         "Permanent Residency in Canada",
//         "Canadian Citizenship applications",
//         "Work permits and professional registration",
//         "Approved by IRCC",
//       ],
//       types: [
//         {
//           name: "CELPIP General",
//           purpose: "Immigration and citizenship purposes",
//         },
//       ],
//     },
//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The CELPIP Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
//         bestFor: [
//           "Need to achieve a high score CLB 8+",
//           "Limited preparation timeframe",
//           "Prefer individual attention & feedback",
//           "Improve specific exam sections quickly",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small, supportive environment",
//           "Friends or family preparing together",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "2 Students Only",
//         },
//       },
//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Practical strategies & peer practice",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "Small Groups",
//         },
//       },
//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
//         bestFor: [
//           "Studying from home preference",
//           "Demanding work schedules",
//           "Live instructor interaction",
//           "Flexible scheduling options",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.pte_academic,
//     exam: {
//       name: "PTE Academic",
//       fullName: "Pearson Test of English",
//       description:
//         "The PTE Academic is a fully computer-based English proficiency exam developed by Pearson. It is widely accepted by thousands of universities and governments around the world, including Australia, Canada, and New Zealand. Results are typically available within 48 hours. The test uses advanced AI scoring technology to evaluate speaking, writing, listening, and reading skills objectively.",
//       usage: [
//         "Fast results turnaround (48 hours)",
//         "Immigration to Australia, Canada & NZ",
//         "Global university admission",
//         "Advanced AI scoring technology",
//       ],
//       types: [
//         {
//           name: "PTE Academic",
//           purpose: "Academic and immigration purposes",
//         },
//       ],
//     },
//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The PTE Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
//         bestFor: [
//           "Need to achieve a high score 79+",
//           "Limited preparation timeframe",
//           "Prefer individual attention & feedback",
//           "Improve specific exam sections quickly",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small, supportive environment",
//           "Friends or family preparing together",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "2 Students Only",
//         },
//       },
//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Structured program coverage",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "Small Groups",
//         },
//       },
//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
//         bestFor: [
//           "Studying from home preference",
//           "Demanding work schedules",
//           "Live instructor interaction",
//           "Flexible scheduling options",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.toefl,
//     exam: {
//       name: "TOEFL iBT",
//       fullName: "Test of English as a Foreign Language",
//       description:
//         "The TOEFL iBT is one of the most respected English proficiency exams, widely used for university admission, especially in the United States and Canada. It is accepted by more than 11,500 institutions in over 160 countries. The exam measures academic English skills needed for studying in an English-speaking environment.",
//       usage: [
//         "University admission in USA & Canada",
//         "Postgraduate studies abroad",
//         "Academic English communication",
//       ],
//       types: [
//         {
//           name: "TOEFL iBT",
//           purpose: "Academic English communication",
//         },
//       ],
//     },
//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The TOEFL iBT Private One-to-One Course offers the most personalized and intensive preparation available. Every session is tailored to your current level, target score, and exam deadline, focusing on realistic tasks and proven strategies.",
//         bestFor: [
//           "Need to achieve a high score",
//           "Limited preparation timeframe",
//           "Prefer individual attention & feedback",
//           "Improve specific sections quickly",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small, supportive environment",
//           "Friends or family preparing together",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "2 Students Only",
//         },
//       },
//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Practical strategies & peer practice",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "Small Groups",
//         },
//       },
//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules that make commuting difficult.",
//         bestFor: [
//           "Studying from home preference",
//           "Demanding work schedules",
//           "Live interaction without commuting",
//           "Flexible real-time instruction",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.selt,
//     exam: {
//       name: "SELT",
//       fullName: "Skills for English (SELT)",
//       description:
//         "Skills for English (SELT) is an English test approved by the UK Home Office for visa and immigration applications to the United Kingdom. It is required for various UK visa categories, including work visas, family visas, and settlement applications. Only specific approved exams fall under the SELT category, such as certain versions of IELTS or language tests provided by authorized testing providers.",
//       usage: [
//         "UK Work Visas",
//         "UK Family and Spouse Visas",
//         "UK Settlement (Indefinite Leave to Remain)",
//         "UK Home Office approved",
//       ],
//       types: [
//         {
//           name: "SELT A1-C2",
//           purpose: "Visa and immigration applications",
//         },
//       ],
//     },
//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The Skills for English (SELT) Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to your current level, target score, and exam deadline.",
//         bestFor: [
//           "Need to achieve a high score CLB 8+",
//           "Limited preparation timeframe",
//           "Prefer individual attention & feedback",
//           "Improve specific exam sections quickly",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },
//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while still benefiting from collaboration. With only two students, the instructor provides detailed guidance while creating opportunities for peer learning and discussion.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small, supportive environment",
//           "Friends or family preparing together",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "2 Students Only",
//         },
//       },
//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "A dynamic classroom environment that covers all exam sections. Small groups ensure every student remains actively involved, fostering motivation and accountability alongside others with similar goals.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Structured program coverage",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//           classSize: "Small Groups",
//         },
//       },
//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "High-quality exam training delivered through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.",
//         bestFor: [
//           "Studying from home preference",
//           "Demanding work schedules",
//           "Live instructor interaction",
//           "Flexible scheduling options",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.cael,
//     exam: {
//       name: "CAEL",
//       fullName: "Canadian Academic English Language Assessment",
//       description:
//         "The CAEL exam is designed primarily for students who want to study at Canadian universities and colleges. It evaluates English proficiency in an academic context, focusing on the type of language students encounter in lectures, classroom discussions, and academic assignments. CAEL is recognized by many Canadian universities and higher education institutions, making it an excellent option for candidates planning to pursue higher education in Canada.",
//       usage: [
//         "Canadian University Admissions",
//         "Canadian College Admissions",
//         "Academic English Proficiency Assessment",
//         "Higher Education in Canada",
//       ],
//       types: [
//         {
//           name: "CAEL",
//           purpose: "Academic study and university admissions in Canada",
//         },
//       ],
//     },

//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The CAEL Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to the candidate’s current level, target score, and exam deadline.",
//         bestFor: [
//           "Need to achieve a high score CLB 8+",
//           "Limited preparation timeframe",
//           "Prefer individual attention & continuous feedback",
//           "Improve specific exam sections quickly",
//         ],
//         features: [
//           "Realistic CAEL exam tasks & simulations",
//           "Section-wise exam strategies",
//           "Detailed writing correction & feedback",
//           "Intensive speaking practice",
//           "Time-management techniques",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while still benefiting from collaboration with another student. The instructor provides detailed guidance while encouraging discussion, interaction, and peer learning.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small supportive environment",
//           "Friends or family preparing together",
//         ],
//         features: [
//           "Guided speaking practice",
//           "Writing analysis & correction",
//           "Reading & listening strategies",
//           "Structured section-wise training",
//           "Exam simulations & confidence building",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           classSize: "2 Students Only",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "The CAEL Group Course is ideal for candidates who benefit from a dynamic classroom environment while still receiving meaningful instructor support. Small groups encourage active participation, discussion, and regular speaking practice.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Consistent instructor guidance",
//         ],
//         features: [
//           "Reading comprehension strategies",
//           "Listening techniques under time pressure",
//           "Writing structures for scoring criteria",
//           "Speaking fluency & confidence practice",
//           "Authentic exam-style questions",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           classSize: "Small Groups",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "Our CAEL Online Preparation Course provides the same high-quality exam training as our classroom programs through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules.",
//         bestFor: [
//           "Studying from home preference",
//           "Busy work or study schedules",
//           "Flexible learning environment",
//           "Live instructor interaction",
//         ],
//         features: [
//           "Live instructor-led online sessions",
//           "Structured training for all sections",
//           "Speaking practice with feedback",
//           "Writing evaluation & improvement guidance",
//           "Flexible scheduling options",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.oet,
//     exam: {
//       name: "OET",
//       fullName: "Occupational English Test",
//       description:
//         "The OET is an English proficiency exam specifically designed for healthcare professionals. It is recognized by medical and healthcare regulatory bodies in countries such as the UK, Australia, New Zealand, Ireland, and Canada. Unlike general English exams, OET focuses on real healthcare communication scenarios, including patient consultations, medical documentation, and professional discussions.",
//       usage: [
//         "Healthcare Professional Registration",
//         "Medical & Nursing Licensing",
//         "Healthcare Migration Requirements",
//         "Professional Communication Assessment",
//       ],
//       professions: [
//         "Doctors",
//         "Nurses",
//         "Dentists",
//         "Pharmacists",
//         "Physiotherapists",
//         "Other Healthcare Specialists",
//       ],
//       types: [
//         {
//           name: "OET",
//           purpose:
//             "English proficiency assessment for healthcare professionals",
//         },
//       ],
//     },

//     courses: [
//       {
//         ...COURSES_DATA.vip_classroom,
//         description:
//           "The OET Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH. Every session is tailored to the candidate’s current level, target score, and exam deadline.",
//         bestFor: [
//           "Need to achieve a high score",
//           "Limited preparation timeframe",
//           "Prefer individual attention & continuous feedback",
//           "Improve specific exam sections quickly",
//         ],
//         features: [
//           "Realistic OET exam tasks & simulations",
//           "Section-wise exam strategies",
//           "Detailed writing correction & feedback",
//           "Intensive speaking practice",
//           "Time-management techniques",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.semi_private_classroom,
//         description:
//           "Designed for candidates who prefer a small learning environment while still benefiting from collaboration with another student. The instructor provides detailed guidance while encouraging discussion, interaction, and peer learning.",
//         bestFor: [
//           "Interactive learning preference",
//           "Collaborative problem solving",
//           "Small supportive environment",
//           "Friends or colleagues preparing together",
//         ],
//         features: [
//           "Guided speaking practice",
//           "Writing analysis & correction",
//           "Reading & listening strategies",
//           "Structured section-wise training",
//           "Exam simulations & confidence building",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           classSize: "2 Students Only",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.group_classroom,
//         description:
//           "The OET Group Course is ideal for candidates who benefit from a dynamic classroom environment while still receiving meaningful instructor support. Small groups encourage active participation, discussion, and regular speaking practice.",
//         bestFor: [
//           "Dynamic classroom preference",
//           "Motivation through peer engagement",
//           "Structured collaborative learning",
//           "Consistent instructor guidance",
//         ],
//         features: [
//           "Reading comprehension strategies",
//           "Listening techniques under time pressure",
//           "Writing structures for scoring criteria",
//           "Speaking fluency & confidence practice",
//           "Authentic exam-style questions",
//         ],
//         details: {
//           duration: "24 Hours",
//           completionTime: "6 Weeks",
//           classSize: "Small Groups",
//           schedule: "Flexible",
//         },
//       },

//       {
//         ...COURSES_DATA.vip_online,
//         description:
//           "Our OET Online Preparation Course provides the same high-quality exam training as our classroom programs through live interactive sessions. Ideal for candidates who prefer studying from home or have demanding schedules.",
//         bestFor: [
//           "Studying from home preference",
//           "Busy work schedules",
//           "Flexible learning environment",
//           "Live instructor interaction",
//         ],
//         features: [
//           "Live instructor-led online sessions",
//           "Structured training for all sections",
//           "Speaking practice with feedback",
//           "Writing evaluation & improvement guidance",
//           "Flexible scheduling options",
//         ],
//         details: {
//           duration: "20 Hours",
//           format: "Live Online Classes",
//           schedule: "Flexible",
//         },
//       },
//     ],
//   },
// ];
// export const EXAM_CARDS_DATA = [
//   {
//     ...EXAM_IDS_DATA.ielts,

//     description:
//       "The world's most popular English proficiency test — accepted for university admissions, migration, and UK visas. Choose the IELTS variant that matches your goal below.",
//   },
//   {
//     ...EXAM_IDS_DATA.toefl,

//     description:
//       "Internet-based English proficiency test used for academic admissions, immigration, and professional certification worldwide.",
//   },
//   {
//     ...EXAM_IDS_DATA.pte,

//     description:
//       "PTE  is a computer-based English language proficiency test for non-native English speakers.",
//   },
//   {
//     ...EXAM_IDS_DATA.celpip,

//     description:
//       "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
//     items: [
//       { ...EXAM_IDS_DATA.celpip_general, type: "description" },
//       { ...EXAM_IDS_DATA.celpip_general_ls, type: "description" },
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.cael,

//     description:
//       "The Canadian Academic English Language Test — specifically designed for study and professional registration in Canada.",
//   },
//   {
//     ...EXAM_IDS_DATA.selt,

//     description:
//       "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
//   },
// ];
export const EXAM_DETAILE_DATA = [
  {
    ...EXAM_IDS_DATA.ielts_academic,
    type: "details",
    subtitle: "The IELTS Academic Exam: Your Gateway to Global Education",
    description:
      "The International English Language Testing System (IELTS) is the world’s most popular English proficiency test. Succeed on the gold standard for measuring English language ability in academic contexts.",
    overview:
      "The International English Language Testing System (IELTS) is globally recognized as the most widely taken English proficiency exam. Within this framework, the **IELTS Academic test** serves as the ultimate international benchmark for evaluating language skills specifically for higher education. If your goal is to pursue an undergraduate or postgraduate degree at an English-speaking college or university, successfully completing the IELTS Academic exam is an essential step in your application journey.",
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
          "This section is specifically structured to evaluate a broad spectrum of auditory comprehension skills. It measures your proficiency in several key areas, including your ability to:",
        skills: [
          "Grasp Core Concepts: Accurately identify the main ideas and central themes of a conversation or lecture.",
          "Identify Perspectives: Discern the underlying attitudes, intentions, and opinions expressed by the speakers.",
          "Track Discussions: Logically follow the flow and development of complex arguments.",
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
          "This section assesses your ability to produce clear, well-structured, and academically appropriate written English. You will have a strict 60-minute time limit to successfully manage and complete two distinct writing tasks.\n\nKey elements of this section include:",
        skills: [
          "Formal Tone: All responses must maintain a professional, academic writing style suitable for university-level communication.",
          "Time Management: You must strategically divide your one hour to ensure both writing tasks are fully addressed and completed.",
        ],
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
          "This section evaluates your verbal communication skills through a direct conversation with a certified examiner. Whether conducted in person or via a live video call on a computer at the test center, this section is uniquely designed to be dynamic and highly interactive, providing the most authentic assessment of your spoken English.\n\nKey features of this section include:",
        skills: [
          "Flexible Interview Formats: Your one-on-one interview can be administered either as a traditional face-to-face meeting or through a secure, live video conference at the testing facility.",
          "Real-World Application: The assessment is structured to closely mimic natural, everyday communication and conversational scenarios.",
          "Expert Assessment: Evaluated by a trained professional in real time to ensure an accurate measure of your fluency, pronunciation, and conversational confidence.",
        ],
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
    subtitle: "The IELTS General Training Exam: Your Key to Global Work and Life",
    description:
      "The IELTS General Training test is designed to measure your English language proficiency in a practical, everyday context. The test reflects both workplace and social situations.",
    overview:
      "The IELTS General Training test is specifically structured to evaluate your English language proficiency within practical, everyday environments. Rather than focusing on academic settings, this version of the exam mirrors the real-world communication skills needed for both professional workplaces and daily social interactions.\n\nWho should take this test? You should choose the IELTS General Training exam if you plan to:",
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
          "This section is designed to evaluate a diverse range of auditory comprehension skills. It specifically measures your ability to process spoken English by focusing on how well you can:",
        skills: [
          "Grasp Core Concepts: Accurately identify and comprehend the primary themes and main messages presented in a conversation or monologue.",
          "Track Discussions: Logically follow the progression of thoughts, details, and conversational arguments.",
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
          "This section evaluates your reading comprehension within a strict 60-minute timeframe. It is crucial to pace yourself effectively throughout the assessment, as this one-hour limit must cover all your reading and answering activities.\n\nKey details of this section include:",
        skills: [
          "Strict Time Management: You have exactly one hour to complete the entire reading assessment.",
          "Answer Transfer: No additional time is provided at the end of the test to move your answers. You must factor in the time needed to transfer your responses from the question booklet onto the official answer sheet within the allotted 60 minutes.",
        ],
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
          "This section evaluates your ability to produce written English for everyday, practical situations. You will have a strict 60-minute time limit to successfully manage and complete two distinct writing tasks.\n\nKey features of this section include:",
        skills: [
          "Real-World Prompts: Your writing tasks will be based on general, practical scenarios, assessing your ability to communicate effectively in everyday social or workplace contexts.",
          "Time Management: You must strategically allocate your one hour to ensure both writing tasks are fully addressed and completed.",
        ],
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
      "Advance Your Career: Secure employment or participate in occupational training programs in an English-speaking country.",
      "Immigrate Abroad: Fulfill the language requirements necessary for permanent residency or citizenship applications.",
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
    ...EXAM_IDS_DATA.ielts_ukvi_academic,
    type: "details",
    subtitle: "IELTS for UKVI (Academic): Approved for UK Visas and Immigration",
    description:
      "The IELTS for UKVI (Academic) is a UK Home Office-approved Secure English Language Test (SELT) specifically designed for individuals applying for UK student visas or seeking professional registration in the United Kingdom.",
    overview:
      "The IELTS for UKVI (Academic) is a UK Home Office-approved Secure English Language Test (SELT) specifically designed for individuals applying for UK student visas or seeking professional registration in the United Kingdom.\n\nWhile this exam features the exact same format, content, and scoring system as the standard IELTS Academic test, it is administered in specialized testing centers equipped with stringent, enhanced security measures, such as voice recording and CCTV monitoring.\n\n**Important Registration Note**: The standard IELTS Academic test is *not* accepted for UK visa applications. To fulfill UK immigration requirements, you must explicitly select the \"IELTS for UKVI\" option and book your exam exclusively through an officially authorized UKVI test center.",
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
    whoShouldTake: [
      "Assessment Components: The test evaluates your English proficiency across four areas: Listening, Reading, Writing, and Speaking, with the Speaking portion conducted as a face-to-face interview.",
      "Testing Options & Results: The exam is available in both paper-based and computer-delivered formats at approved UKVI locations. If you choose the computer-delivered option, you can typically expect your results within 3 to 5 days.",
      "Score Requirements: Minimum score thresholds depend entirely on your specific visa category. For instance, student visas generally require a minimum score of 5.5 across all components, whereas other immigration routes may only require a 4.0.",
      "Certification Validity: Your official Test Report Form will feature a unique identification prefix confirming it meets UKVI standards. These test results remain valid for exactly two years.",
    ],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Universities"],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi_general,
    type: "details",
    subtitle: "IELTS General Training for UKVI: Approved for UK Work and Migration",
    description:
      "The IELTS General Training for UKVI is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals applying for work, migration, or vocational training visas in the United Kingdom. It shares the exact same content, format, scoring system, and level of difficulty as the standard IELTS General Training exam.",
    overview:
      "The IELTS General Training for UKVI is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals applying for work, migration, or vocational training visas in the United Kingdom. It shares the exact same content, format, scoring system, and level of difficulty as the standard IELTS General Training exam.\n\nThe crucial distinction lies in the administrative requirements. The UKVI version is conducted under enhanced security protocols at officially authorized testing centers. Furthermore, your final Test Report Form (TRF) will include a Unique Reference Number (URN), which is necessary to validate your UK visa application.\n\nTest Format Breakdown\n\nThe entire assessment takes 2 hours and 45 minutes to complete and evaluates your proficiency across four fundamental communication skills:",
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
    whoShouldTake: [
      "Listening (30 Minutes): You will answer 40 questions based on four audio recordings featuring everyday conversations and educational monologues.",
      "Reading (60 Minutes): This section includes 40 questions designed to test your comprehension of texts related to daily life, workplace scenarios, and general interest topics.",
      "Writing (60 Minutes): You must complete two distinct tasks. Task 1 involves writing a formal or informal letter, while Task 2 requires you to compose a semi-formal essay.",
      "Speaking (11–14 Minutes): Divided into three parts, this is a live, face-to-face interactive interview where you will discuss familiar topics such as your family, work, or hobbies.",
    ],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Work Permits"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a1,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills A1: English for Family and Spouse Visas",
    description:
      "The IELTS for UKVI Life Skills A1 is a Secure English Language Test (SELT) focused entirely on speaking and listening at CEFR Level A1. It is designed for individuals seeking family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.",
    overview:
      "The IELTS for UKVI Life Skills A1 is a Secure English Language Test (SELT) focused entirely on speaking and listening at CEFR Level A1. It is designed for individuals seeking family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.\n\nTest Format Breakdown\n\nUnlike standard IELTS exams, the Life Skills A1 assessment does not involve any reading or writing components.\n• **Interactive Structure**: The test is conducted in person with a certified examiner and one other candidate. Rest assured, the other test-taker's performance will not negatively impact your results.\n• **Skill Focus**: You will be evaluated strictly on your ability to listen accurately and communicate effectively in conversational English.\n\nCommon Test Topics\n\nThe assessment revolves around practical, everyday experiences. You should be prepared to comfortably discuss common subjects, including:\n• Personal information (e.g., your name and age)\n• Family members and friends\n• Your daily schedule and routines\n• The weather\n• Transportation and travel\n• Your job or hobbies\n• Your housing situation and local neighborhood\n• Shopping and purchasing everyday goods\n\nScoring and Results\n\nYou will not receive a traditional numerical IELTS band score for this assessment. Instead, your results will simply be issued as a **Pass** or **Fail**. Achieving a \"Pass\" officially confirms that you have met the required English language standards for your visa application.",
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
    whoShouldTake: [],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a2,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills A2: English for Visa Extensions",
    description:
      "The IELTS for UKVI Life Skills A2 is a concise, 16-18 minute Secure English Language Test focused entirely on speaking and listening. It is specifically designed for individuals seeking to extend their family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.",
    overview:
      "The IELTS for UKVI Life Skills A2 is a concise, 16-18 minute Secure English Language Test focused entirely on speaking and listening. It is specifically designed for individuals seeking to extend their family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.\n\nTest Format Breakdown\n\nUnlike standard IELTS exams, the Life Skills A2 assessment does not involve any reading or writing components.\n• **Interactive Structure**: The test is conducted in person with a certified examiner and one other candidate. Rest assured, the other test-taker's performance will not negatively impact your results.\n• **Skill Focus**: You will be evaluated strictly on your ability to listen accurately and communicate effectively in conversational English.\n\nCommon Test Topics\n\nDiscussions during the exam are based on familiar, everyday subjects. You should be prepared to talk about:\n• Personal details and daily routines\n• Family members and friends\n• Shopping and transportation\n• Health, leisure activities, and the weather\n• Education, employment, and your housing situation\n\nScoring and Results\n\nYou will not receive a traditional numerical IELTS band score for this assessment. Instead, your results will simply be issued as a **Pass** or **Fail**. Achieving a \"Pass\" officially confirms that you have met the required English language standards for your visa extension.",
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
    whoShouldTake: [],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_b1,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills B1: English for Settlement and Citizenship",
    description:
      "The IELTS for UKVI Life Skills B1 is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals seeking Indefinite Leave to Remain (ILR), settlement, or British Citizenship. This assessment focuses entirely on your face-to-face communication abilities, meaning there are no reading or writing components involved.",
    overview:
      "The IELTS for UKVI Life Skills B1 is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals seeking Indefinite Leave to Remain (ILR), settlement, or British Citizenship. This assessment focuses entirely on your face-to-face communication abilities, meaning there are no reading or writing components involved.\n\nTest Overview\n• **Interactive Format**: The exam is conducted in person with one certified examiner and a second test-taker. Rest assured, the other candidate's performance will not impact your final outcome.\n• **Duration**: The entire assessment takes approximately 22 minutes to complete.\n• **Skill Focus**: Evaluates strictly your speaking and listening proficiencies.\n• **Scoring System**: You will not receive a traditional numerical band score; results are issued simply as a **Pass** or **Fail**.\n\nTest Structure & Phases\n\nAt the B1 level, you are expected to demonstrate the ability to gather and share information, express your preferences, and maintain a structured, coherent discussion. The exam is broken down into four key parts:\n• **Phase 1A (Introduction & Interview)**: You will introduce yourself, provide personal details, and answer basic questions regarding daily life.\n• **Phase 1B (Presentation & Q&A)**: You will deliver a brief spoken presentation (about 1.5 minutes) on a chosen topic, followed by answering questions posed by the other candidate.\n• **Phase 2A (Listening Comprehension)**: You will listen to two short audio recordings, answer specific questions about the content, and discuss what you heard.\n• **Phase 2B (Collaborative Planning)**: You will work together with the other test-taker to discuss a prompt, plan a scenario, or solve a practical problem.\n\nCommon Test Topics\n\nAll tasks throughout the exam revolve around familiar, everyday themes. You should be comfortable discussing subjects such as:\n• Family, friends, and social life\n• Employment, education, and professional training\n• Health, leisure activities, free time, and media\n• Shopping and transportation\n• Your local housing situation and the weather",
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
    whoShouldTake: [],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.toefl,
    slug: "toefl-ibt",
    type: "details",
    subtitle: "The TOEFL iBT: A Global Standard for University Admissions",
    description:
      "Developed by the Educational Testing Service (ETS), the TOEFL iBT (Internet-Based Test) is a premier standardized assessment designed to evaluate your ability to use and comprehend English in an academic environment. It accurately measures your readiness to communicate effectively at the university level.",
    overview:
      "Developed by the Educational Testing Service (ETS), the TOEFL iBT (Internet-Based Test) is a premier standardized assessment designed to evaluate your ability to use and comprehend English in an academic environment. It accurately measures your readiness to communicate effectively at the university level.\n\n**Unmatched Global Recognition**: As one of the most trusted English proficiency exams, the TOEFL iBT opens doors to higher education worldwide. It is officially recognized and accepted by more than 13,000 universities, colleges, and educational institutions across over 160 countries.\n\n**The 2026 TOEFL iBT Format: Everything You Need to Know**\n\nStarting **January 21, 2026**, the TOEFL iBT is undergoing its most significant update in decades. ETS is modernizing the exam to make it shorter, fully adaptive, and better aligned with real-world language use.\n\nWhether you are aiming for undergraduate admission or a highly competitive graduate program, here is exactly what you need to know about the new 90-minute test.\n\n**What's Changing at a Glance**\n• **Shorter Duration**: The test has been compressed from roughly two hours down to just **90 minutes** running completely back-to-back with no scheduled breaks.\n• **Adaptive Difficulty**: The Reading and Listening sections now feature multistage adaptive testing. How well you perform in the first module directly determines the difficulty of the second.\n• **New Scoring Scale**: The traditional 0–120 score is being replaced by a **1.0 to 6.0 band scale** to align directly with the CEFR (Common European Framework of Reference).\n• **Faster Results**: Official scores will now be delivered to test-takers within 72 hours.\n\n**Crucial test-day tip**: The Speaking section has been entirely redesigned. Long, prepared academic speeches are out. Instead, you will be evaluated on spontaneous verbal recall and conversational fluency, with zero preparation time given before you speak.\n\n**Understanding the New 1.0 to 6.0 Scale**\n\nFor decades, the standard for a \"good\" TOEFL score was usually around 80 to 100+. The new system simplifies this by using a 1.0 to 6.0 band (in 0.5 increments).\n• **How it is calculated**: Each of the four sections receives a score from 1.0 to 6.0. Your overall score is the average of those four sections, rounded to the nearest half-band.\n• **The CEFR Alignment**: A score of **6.0** indicates C2 Mastery (equivalent to the old 107–120). A **5.0** or **5.5** indicates C1 Advanced (95–106), which is the standard for highly competitive programs. A **4.0** or **4.5** hits the B2 Upper Intermediate level (72–94), satisfying most standard university admissions.\n• **The Transition Phase (2026–2028)**: Do not panic if universities still ask for a \"100 on the TOEFL.\" Through January 2028, ETS will issue score reports showing both the new 1.0–6.0 band and your comparable 0–120 score to help admissions teams adjust.",
    stats: [
      { label: "Total Duration", value: "90 Minutes" },
      { label: "Score Scale", value: "1.0–6.0 Bands" },
      { label: "Results In", value: "72 Hours" },
      { label: "Validity", value: "2 Years" },
      { label: "Format", value: "Internet-based" },
    ],
    sections: [
      {
        icon: "reading",
        name: "Reading",
        duration: "~30 minutes",
        questions: "50 items",
        details:
          "The Reading section now features multistage adaptive testing. How well you perform in the first module directly determines the difficulty of the second.",
        format:
          "• Complete the Words\n• Read in Daily Life\n• Read an Academic Passage (shorter)",
      },
      {
        icon: "listening",
        name: "Listening",
        duration: "~29 minutes",
        questions: "47 items",
        details:
          "The Listening section now features multistage adaptive testing. How well you perform in the first module directly determines the difficulty of the second.",
        format:
          "• Listen and Choose a Response\n• Listen to campus conversations, announcements, and academic talks",
      },
      {
        icon: "writing",
        name: "Writing",
        duration: "~23 minutes",
        questions: "12 items",
        details:
          "Write responses to academic and practical prompts assessing everyday communication.",
        format:
          "• Build a Sentence\n• Write an Email (7 mins)\n• Write for an Academic Discussion (10 mins)",
      },
      {
        icon: "speaking",
        name: "Speaking",
        duration: "~8 minutes",
        questions: "11 items",
        details:
          "Spontaneous verbal recall and conversational fluency with zero preparation time.",
        format: "• Listen and Repeat (7 progressive prompts)\n• Take an Interview (4 conversational questions)",
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
  // {
  //   ...EXAM_IDS_DATA.pte,
  //   type: "items",
  //   description:
  //     "Fast, computer-based English test for study and migration — accepted by thousands of institutions and governments worldwide.",
  //   items: [
  //     { ...EXAM_IDS_DATA.pte_academic },
  //     { ...EXAM_IDS_DATA.pte_core },
  //     { ...EXAM_IDS_DATA.pte_ukvi },
  //   ],
  // },
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
  // {
  //   ...EXAM_IDS_DATA.pte_ukvi,
  //   type: "items",
  //   description: "Secure English Language Test (SELT) for UK Visas",
  //   items: [
  //     { ...EXAM_IDS_DATA.pte_academic_ukvi },
  //     { ...EXAM_IDS_DATA.pte_home_a1 },
  //     { ...EXAM_IDS_DATA.pte_home_a2 },
  //     { ...EXAM_IDS_DATA.pte_home_b1 },
  //   ],
  // },
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
    subtitle: "PTE Home A2: Secure English Language Test for UK Visa Extensions",
    description:
      "The PTE Home A2 is a Secure English Language Test (SELT) officially approved by the UK Home Office for family visa extensions. Building on beginner foundations, it evaluates Speaking and Listening skills at CEFR Level A2 through basic, everyday situations.",
    overview:
      "If you are already living in the United Kingdom and need to extend your family visa, proving your continued progress in the English language is a mandatory step. The PTE Home A2 is a Secure English Language Test (SELT) specifically designed to meet the UK Home Office requirements for visa extensions.\n\nBuilding slightly on the beginner foundations of the A1 test, the PTE Home A2 evaluates your ability to communicate in basic, everyday situations at an elementary level.\n\n**What is the PTE Home A2?**\n\nLike the A1 version, the PTE Home A2 is a **two-skills test** that focuses entirely on **Speaking and Listening**. It does not include any reading or writing sections. The exam measures your ability to understand and express simple opinions, talk about your routines, and handle short social exchanges.\n\n**Key Takeaway**: You only need to demonstrate an elementary, conversational understanding of English. The test proves you have built upon your basic language skills since your initial arrival in the UK.\n\n**Why Choose the PTE Home A2?**\n\nCandidates choose this test for its efficiency, predictability, and stress-free grading system:\n• **Simple Pass/Fail Result**: Instead of worrying about achieving a specific numerical score, you will simply receive a \"Pass\" or \"Fail\" based on whether you meet the required elementary standard.\n• **Extremely Short Duration**: The entire computer-based exam takes **less than 30 minutes** to complete.\n• **Fast Results**: Your scores are generally returned within **48 hours**, giving you the Unique Reference Number (URN) required to proceed with your visa extension application without delay.\n• **Unbiased AI Scoring**: Your spoken answers are evaluated by an advanced artificial intelligence system, ensuring complete fairness and objectivity.\n\n**When Should You Take the PTE Home A2?**\n\nChoosing the correct test level is critical for UK immigration. The UK Home Office requires the A2 level for applicants applying for a **visa extension** (usually after spending 2.5 years in the UK) in the following categories:\n\nFamily Visa Extensions:\n• Spouse or Partner visa (extending stay)\n• Parent of a Dependent Child visa (extending stay)\n\n*(Note: If you are applying to settle permanently in the UK (Indefinite Leave to Remain) or applying for British Citizenship, you will need a slightly higher level of English, such as the PTE Home B1).*\n\nBy offering a quick, practical, and highly accessible format, the PTE Home A2 takes the stress out of your visa extension process, helping you seamlessly continue your life in the UK.",
    stats: [
      { label: "Test Duration", value: "< 30 mins" },
      { label: "Results In", value: "48 Hours" },
      { label: "Validity", value: "2 Years" },
      { label: "Format", value: "Computer-based" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "< 30 min",
        details: "The exam consists of three straightforward question types designed to simulate everyday conversation and listening comprehension.",
        icon: "speaking",
        format:
          "• Repeat Sentence: Listen to short sentences and repeat them into your microphone exactly as you heard them.\n• Describe Image: Look at simple images (such as everyday scenes or objects) and provide a brief spoken description.\n• Retell Story: Listen to a short, simple story or conversation and then summarize or retell the key points in your own words.",
      },
    ],
    whoShouldTake: [
      "Applicants extending their UK Spouse or Partner visa",
      "Applicants extending their UK Parent of a Dependent Child visa",
    ],
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
  // {
  //   ...EXAM_IDS_DATA.celpip,
  //   type: "items",
  //   description:
  //     "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
  //   items: [
  //     { ...EXAM_IDS_DATA.celpip_general },
  //     { ...EXAM_IDS_DATA.celpip_general_ls },
  //   ],
  // },
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
      { ...EXAM_IDS_DATA.selt_b1_r_w },
      { ...EXAM_IDS_DATA.selt_b2 },
      { ...EXAM_IDS_DATA.selt_c1 },
      { ...EXAM_IDS_DATA.selt_c2 },
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
  {
    ...EXAM_IDS_DATA.selt_b1_r_w,
    type: "details",
    subtitle: "For UK Work and Student visas",
    description:
      "Skills for English (UKVI) B1 Speaking, Listening, Reading and Writing is for UK Work and Student visas.",
    overview:
      "This test measures all four language skills at level B1. It is approved for UK Work (Skilled Worker) and Student visa applications.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "17–22 min", icon: "speaking" },
      { name: "Reading", duration: "60 min", icon: "reading" },
      { name: "Writing", duration: "60 min", icon: "writing" },
    ],
    whoShouldTake: ["Work visa applicants", "Student visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.selt_b2,
    type: "details",
    subtitle: "For UK Work and Professional visas",
    description:
      "Skills for English (UKVI) B2 is for those who need to demonstrate higher level proficiency for work or professional registration.",
    overview:
      "This test measures all four language skills at level B2. It is approved for various UK work visa categories and professional bodies.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "17–22 min", icon: "speaking" },
      { name: "Reading", duration: "60 min", icon: "reading" },
      { name: "Writing", duration: "60 min", icon: "writing" },
    ],
    whoShouldTake: [
      "Professional registration seekers",
      "Advanced work visa applicants",
    ],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.selt_c1,
    type: "details",
    subtitle: "For advanced UK academic and professional requirements",
    description:
      "Skills for English (UKVI) C1 measures advanced proficiency for complex academic or professional environments.",
    overview:
      "This test measures all four language skills at level C1, representing an advanced user of English.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "17–22 min", icon: "speaking" },
      { name: "Reading", duration: "60 min", icon: "reading" },
      { name: "Writing", duration: "60 min", icon: "writing" },
    ],
    whoShouldTake: [
      "Advanced academic students",
      "Senior professional applicants",
    ],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
  {
    ...EXAM_IDS_DATA.selt_c2,
    type: "details",
    subtitle: "For near-native UK requirements",
    description:
      "Skills for English (UKVI) C2 is the highest level of English proficiency test available.",
    overview:
      "This test measures all four language skills at level C2, the highest level on the CEFR scale.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "17–22 min", icon: "speaking" },
      { name: "Reading", duration: "60 min", icon: "reading" },
      { name: "Writing", duration: "60 min", icon: "writing" },
    ],
    whoShouldTake: [
      "Highest level academic seekers",
      "Native-equivalent proficiency seekers",
    ],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
  },
];

// export const FEES_DATA = [
//   {
//     ...EXAM_IDS_DATA.ielts,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.toefl,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.pte,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.psi_ukvi,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.celpip,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.cael,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
//   {
//     ...EXAM_IDS_DATA.oet,
//     service_fee: 100,
//     exam_fee: 1500,
//     workshops: [
//       WORKSHOPS_DATA.workshop_2_hours,
//       WORKSHOPS_DATA.workshop_4_hours,
//       WORKSHOPS_DATA.workshop_6_hours,
//       WORKSHOPS_DATA.workshop_8_hours,
//     ],
//     courses: [
//       COURSES_DATA.group_classroom,
//       COURSES_DATA.semi_private_classroom,
//       COURSES_DATA.vip_classroom,
//       COURSES_DATA.vip_online,
//     ],
//   },
// ];

// INFORMATION

export const INSTITUTIONS_INFO = {
  phone: "+97165531250",
  email: "info@tepth.org",
  address: `The Exam Preparation & Testing House L.L.C\n
  Suite 701, 7th Floor, Tabarak Tower, Corniche Road, Al Mamzar,\n
  Sharjah, United Arab Emirates.`,
};
