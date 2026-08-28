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
    id: "skills-for-english-selt",
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
    name: "Exam Fees",
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
    name: "Test Day Guidelines",
    href: "/test-day-guidelines",
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
      "The International English Language Testing System (IELTS) is globally recognized as the most widely taken English proficiency exam. Within this framework, the IELTS Academic test serves as the ultimate international benchmark for evaluating language skills specifically for higher education. If your goal is to pursue an undergraduate or postgraduate degree at an English-speaking college or university, successfully completing the IELTS Academic exam is an essential step in your application journey.",
    overview:
      "The International English Language Testing System (IELTS) is globally recognized as the most widely taken English proficiency exam. Within this framework, the **IELTS Academic test** serves as the ultimate international benchmark for evaluating language skills specifically for higher education.\n\nIf your goal is to pursue an undergraduate or postgraduate degree at an English-speaking college or university, successfully completing the IELTS Academic exam is an essential step in your application journey.",
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
        name: "The Listening Component",
        duration: "",
        details:
          "This section is specifically structured to evaluate a broad spectrum of auditory comprehension skills. It measures your proficiency in several key areas, including your ability to:",
        skills: [
          "Grasp Core Concepts: Accurately identify the main ideas and central themes of a conversation or lecture.",
          "Identify Perspectives: Discern the underlying attitudes, intentions, and opinions expressed by the speakers.",
          "Track Discussions: Logically follow the flow and development of complex arguments.",
        ],
      },
      {
        icon: "reading",
        name: "The Reading Component",
        duration: "",
        details:
          "This section evaluates your reading comprehension through three extensive passages. These texts cover a diverse range of writing styles, moving from straightforward, factual descriptions to more complex, analytical discussions.\n\nTo provide an authentic academic testing experience, all reading materials are sourced directly from real-world publications, including:",
        skills: [
          "Books",
          "Academic and professional journals",
          "Magazines",
          "Newspapers",
        ],
      },
      {
        icon: "writing",
        name: "The Writing Component",
        duration: "",
        details:
          "This section assesses your ability to produce clear, well-structured, and academically appropriate written English. You will have a strict 60-minute time limit to successfully manage and complete two distinct writing tasks.\n\nKey elements of this section include:",
        skills: [
          "Formal Tone: All responses must maintain a professional, academic writing style suitable for university-level communication.",
          "Time Management: You must strategically divide your one hour to ensure both writing tasks are fully addressed and completed.",
        ],
      },
      {
        icon: "speaking",
        name: "The Speaking Component",
        duration: "",
        details:
          "This section evaluates your verbal communication skills through a direct conversation with a certified examiner. Whether conducted in person or via a live video call on a computer at the test center, this section is uniquely designed to be dynamic and highly interactive, providing the most authentic assessment of your spoken English.\n\nKey features of this section include:",
        skills: [
          "Flexible Interview Formats: Your one-on-one interview can be administered either as a traditional face-to-face meeting or through a secure, live video conference at the testing facility.",
          "Real-World Application: The assessment is structured to closely mimic natural, everyday communication and conversational scenarios.",
          "Expert Assessment: Evaluated by a trained professional in real time to ensure an accurate measure of your fluency, pronunciation, and conversational confidence.",
        ],
      },
    ],
    whoShouldTake: [],
    acceptedFor: [],
    faqs: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_general,
    type: "details",
    subtitle: "The IELTS General Training Exam: Your Key to Global Work and Life",
    description:
      "The IELTS General Training test is specifically structured to evaluate your English language proficiency within practical, everyday environments. Rather than focusing on academic settings, this version of the exam mirrors the real-world communication skills needed for both professional workplaces and daily social interactions.",
    overview:
      "The IELTS General Training test is specifically structured to evaluate your English language proficiency within practical, everyday environments. Rather than focusing on academic settings, this version of the exam mirrors the real-world communication skills needed for both professional workplaces and daily social interactions.\n\n**Who should take this test?** You should choose the IELTS General Training exam if you plan to:",
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
        name: "The Listening Component",
        duration: "",
        details:
          "This section is designed to evaluate a diverse range of auditory comprehension skills. It specifically measures your ability to process spoken English by focusing on how well you can:",
        skills: [
          "Grasp Core Concepts: Accurately identify and comprehend the primary themes and main messages presented in a conversation or monologue.",
          "Track Discussions: Logically follow the progression of thoughts, details, and conversational arguments.",
        ],
      },
      {
        icon: "reading",
        name: "The Reading Component",
        duration: "",
        details:
          "This section evaluates your reading comprehension within a strict 60-minute timeframe. It is crucial to pace yourself effectively throughout the assessment, as this one-hour limit must cover all your reading and answering activities.\n\nKey details of this section include:",
        skills: [
          "Strict Time Management: You have exactly one hour to complete the entire reading assessment.",
          "Answer Transfer: No additional time is provided at the end of the test to move your answers. You must factor in the time needed to transfer your responses from the question booklet onto the official answer sheet within the allotted 60 minutes.",
        ],
      },
      {
        icon: "writing",
        name: "The Writing Component",
        duration: "",
        details:
          "This section evaluates your ability to produce written English for everyday, practical situations. You will have a strict 60-minute time limit to successfully manage and complete two distinct writing tasks.\n\nKey features of this section include:",
        skills: [
          "Real-World Prompts: Your writing tasks will be based on general, practical scenarios, assessing your ability to communicate effectively in everyday social or workplace contexts.",
          "Time Management: You must strategically allocate your one hour to ensure both writing tasks are fully addressed and completed.",
        ],
      },
      {
        icon: "speaking",
        name: "The Speaking Component",
        duration: "",
        details:
          "This section evaluates your verbal communication skills through a direct conversation with a certified examiner. Whether conducted in person or via a live video call on a computer at the test center, this section is uniquely designed to be dynamic and highly interactive, providing the most authentic assessment of your spoken English.\n\nKey features of this section include:",
        skills: [
          "Flexible Interview Formats: Your one-on-one interview can be administered either as a traditional face-to-face meeting or through a secure, live video conference at the testing facility.",
          "Real-World Application: The assessment is structured to closely mimic natural, everyday communication and conversational scenarios.",
          "Expert Assessment: Evaluated by a trained professional in real time to ensure an accurate measure of your fluency, pronunciation, and conversational confidence.",
        ],
      },
    ],
    whoShouldTake: [
      "Advance Your Career: Secure employment or participate in occupational training programs in an English-speaking country.",
      "Immigrate Abroad: Fulfill the language requirements necessary for permanent residency or citizenship applications.",
    ],
    acceptedFor: [],
    faqs: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi_academic,
    type: "details",
    subtitle: "IELTS for UKVI (Academic): Approved for UK Visas and Immigration",
    description:
      "The IELTS for UKVI (Academic) is a UK Home Office-approved Secure English Language Test (SELT) specifically designed for individuals applying for UK student visas or seeking professional registration in the United Kingdom.",
    overview:
      "The IELTS for UKVI (Academic) is a UK Home Office-approved Secure English Language Test (SELT) specifically designed for individuals applying for UK student visas or seeking professional registration in the United Kingdom.\n\nWhile this exam features the exact same format, content, and scoring system as the standard IELTS Academic test, it is administered in specialized testing centers equipped with stringent, enhanced security measures, such as voice recording and CCTV monitoring.\n\n**Important Registration Note**: The standard IELTS Academic test is *not* accepted for UK visa applications. To fulfill UK immigration requirements, you must explicitly select the \"IELTS for UKVI\" option and book your exam exclusively through an officially authorized UKVI test center.\n\n**Key Details of the Exam**",
    stats: [
      { label: "Test Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [],
    whoShouldTake: [
      "Assessment Components: The test evaluates your English proficiency across four areas: Listening, Reading, Writing, and Speaking, with the Speaking portion conducted as a face-to-face interview.",
      "Testing Options & Results: The exam is available in both paper-based and computer-delivered formats at approved UKVI locations. If you choose the computer-delivered option, you can typically expect your results within 3 to 5 days.",
      "Score Requirements: Minimum score thresholds depend entirely on your specific visa category. For instance, student visas generally require a minimum score of 5.5 across all components, whereas other immigration routes may only require a 4.0.",
      "Certification Validity: Your official Test Report Form will feature a unique identification prefix confirming it meets UKVI standards. These test results remain valid for exactly two years.",
    ],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_ukvi_general,
    type: "details",
    subtitle: "IELTS General Training for UKVI: Approved for UK Work and Migration",
    description:
      "The IELTS General Training for UKVI is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals applying for work, migration, or vocational training visas in the United Kingdom. It shares the exact same content, format, scoring system, and level of difficulty as the standard IELTS General Training exam.",
    overview:
      "The IELTS General Training for UKVI is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals applying for work, migration, or vocational training visas in the United Kingdom. It shares the exact same content, format, scoring system, and level of difficulty as the standard IELTS General Training exam.\n\nThe crucial distinction lies in the administrative requirements. The UKVI version is conducted under enhanced security protocols at officially authorized testing centers. Furthermore, your final Test Report Form (TRF) will include a Unique Reference Number (URN), which is necessary to validate your UK visa application.\n\n**Test Format Breakdown**\n\nThe entire assessment takes 2 hours and 45 minutes to complete and evaluates your proficiency across four fundamental communication skills:",
    stats: [
      { label: "Test Duration", value: "2h 45m" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [],
    whoShouldTake: [
      "Listening (30 Minutes): You will answer 40 questions based on four audio recordings featuring everyday conversations and educational monologues.",
      "Reading (60 Minutes): This section includes 40 questions designed to test your comprehension of texts related to daily life, workplace scenarios, and general interest topics.",
      "Writing (60 Minutes): You must complete two distinct tasks. Task 1 involves writing a formal or informal letter, while Task 2 requires you to compose a semi-formal essay.",
      "Speaking (11–14 Minutes): Divided into three parts, this is a live, face-to-face interactive interview where you will discuss familiar topics such as your family, work, or hobbies.",
    ],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a1,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills A1: English for Family and Spouse Visas",
    description:
      "The IELTS for UKVI Life Skills A1 is a Secure English Language Test (SELT) focused entirely on speaking and listening at CEFR Level A1. It is designed for individuals seeking family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.",
    overview:
      "The IELTS for UKVI Life Skills A1 is a Secure English Language Test (SELT) focused entirely on speaking and listening at CEFR Level A1. It is designed for individuals seeking family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.\n\n**Test Format Breakdown**\n\nUnlike standard IELTS exams, the Life Skills A1 assessment does not involve any reading or writing components.\n• **Interactive Structure**: The test is conducted in person with a certified examiner and one other candidate. Rest assured, the other test-taker's performance will not negatively impact your results.\n• **Skill Focus**: You will be evaluated strictly on your ability to listen accurately and communicate effectively in conversational English.\n\n**Common Test Topics**\n\nThe assessment revolves around practical, everyday experiences. You should be prepared to comfortably discuss common subjects, including:\n• Personal information (e.g., your name and age)\n• Family members and friends\n• Your daily schedule and routines\n• The weather\n• Transportation and travel\n• Your job or hobbies\n• Your housing situation and local neighborhood\n• Shopping and purchasing everyday goods\n\n**Scoring and Results**\n\nYou will not receive a traditional numerical IELTS band score for this assessment. Instead, your results will simply be issued as a **Pass** or **Fail**. Achieving a \"Pass\" officially confirms that you have met the required English language standards for your visa application.",
    stats: [
      { label: "Duration", value: "16–18 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_a2,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills A2: English for Visa Extensions",
    description:
      "The IELTS for UKVI Life Skills A2 is a concise, 16-18 minute Secure English Language Test focused entirely on speaking and listening. It is specifically designed for individuals seeking to extend their family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.",
    overview:
      "The IELTS for UKVI Life Skills A2 is a concise, 16-18 minute Secure English Language Test focused entirely on speaking and listening. It is specifically designed for individuals seeking to extend their family, spouse, or partner visas in the United Kingdom, evaluating basic English communication skills in practical, everyday contexts.\n\n**Test Format Breakdown**\n\nUnlike standard IELTS exams, the Life Skills A2 assessment does not involve any reading or writing components.\n• **Interactive Structure**: The test is conducted in person with a certified examiner and one other candidate. Rest assured, the other test-taker's performance will not negatively impact your results.\n• **Skill Focus**: You will be evaluated strictly on your ability to listen accurately and communicate effectively in conversational English.\n\n**Common Test Topics**\n\nDiscussions during the exam are based on familiar, everyday subjects. You should be prepared to talk about:\n• Personal details and daily routines\n• Family members and friends\n• Shopping and transportation\n• Health, leisure activities, and the weather\n• Education, employment, and your housing situation\n\n**Scoring and Results**\n\nYou will not receive a traditional numerical IELTS band score for this assessment. Instead, your results will simply be issued as a **Pass** or **Fail**. Achieving a \"Pass\" officially confirms that you have met the required English language standards for your visa extension.",
    stats: [
      { label: "Duration", value: "16–18 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.ielts_life_skills_b1,
    type: "details",
    subtitle: "IELTS for UKVI Life Skills B1: English for Settlement and Citizenship",
    description:
      "The IELTS for UKVI Life Skills B1 is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals seeking Indefinite Leave to Remain (ILR), settlement, or British Citizenship. This assessment focuses entirely on your face-to-face communication abilities, meaning there are no reading or writing components involved.",
    overview:
      "The IELTS for UKVI Life Skills B1 is a Secure English Language Test (SELT) officially mandated by the UK Home Office for individuals seeking Indefinite Leave to Remain (ILR), settlement, or British Citizenship. This assessment focuses entirely on your face-to-face communication abilities, meaning there are no reading or writing components involved.\n\n**Test Overview**\n• **Interactive Format**: The exam is conducted in person with one certified examiner and a second test-taker. Rest assured, the other candidate's performance will not impact your final outcome.\n• **Duration**: The entire assessment takes approximately 22 minutes to complete.\n• **Skill Focus**: Evaluates strictly your speaking and listening proficiencies.\n• **Scoring System**: You will not receive a traditional numerical band score; results are issued simply as a **Pass** or **Fail**.\n\n**Test Structure & Phases**\n\nAt the B1 level, you are expected to demonstrate the ability to gather and share information, express your preferences, and maintain a structured, coherent discussion. The exam is broken down into four key parts:\n• **Phase 1A (Introduction & Interview)**: You will introduce yourself, provide personal details, and answer basic questions regarding daily life.\n• **Phase 1B (Presentation & Q&A)**: You will deliver a brief spoken presentation (about 1.5 minutes) on a chosen topic, followed by answering questions posed by the other candidate.\n• **Phase 2A (Listening Comprehension)**: You will listen to two short audio recordings, answer specific questions about the content, and discuss what you heard.\n• **Phase 2B (Collaborative Planning)**: You will work together with the other test-taker to discuss a prompt, plan a scenario, or solve a practical problem.\n\n**Common Test Topics**\n\nAll tasks throughout the exam revolve around familiar, everyday themes. You should be comfortable discussing subjects such as:\n• Family, friends, and social life\n• Employment, education, and professional training\n• Health, leisure activities, free time, and media\n• Shopping and transportation\n• Your local housing situation and the weather",
    stats: [
      { label: "Duration", value: "22 mins" },
      { label: "Results In", value: "7 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
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
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
    faqs: [],
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
    subtitle: "Your Guide to the PTE Academic Exam",
    description:
      "Preparing to study or work abroad can feel overwhelming, but understanding your language proficiency requirements is a great first step. The PTE Academic (Pearson Test of English Academic) is one of the world's leading computer-based English language tests, designed specifically for international students and professionals.",
    overview:
      "Preparing to study or work abroad can feel overwhelming, but understanding your language proficiency requirements is a great first step. The PTE Academic (Pearson Test of English Academic) is one of the world's leading computer-based English language tests, designed specifically for international students and professionals.\n\nWhether you are applying to a university or seeking a visa, here is everything you need to know about the PTE Academic exam to help you prepare with confidence.\n\n**What is the PTE Academic?**\n\nThe PTE Academic assesses your English skills in an academic context. Instead of testing isolated grammar rules, it evaluates your ability to understand and communicate in real-life academic and everyday scenarios. You will listen to excerpts from university lectures, read graphs and academic passages, and speak your answers directly into a microphone.\n\n**Key Takeaway:** The entire exam is completed in a single session on a computer at a secure test center, making it a streamlined and efficient experience.\n\n**Why Choose the PTE Academic?**\n\nMany candidates prefer the PTE for its modern approach to testing. Here are a few reasons why it stands out:\n• **Fast Results:** Scores are typically available within **48 hours**, making it ideal for meeting tight application deadlines.\n• **Unbiased AI Scoring:** The test is graded entirely by an advanced artificial intelligence system, ensuring your spoken and written answers are judged objectively and consistently.\n• **Frequent Test Dates:** Test centers operate year-round, offering highly flexible scheduling.\n• **Shorter Duration:** The entire test takes just **2 hours** to complete, which helps reduce testing fatigue.\n\n**Test Format and Structure**\n\nThe PTE Academic consists of three main parts, all completed in one sitting.\n\n**Understanding Your Scores**\n\nThe PTE uses the **Global Scale of English (GSE)**. Your overall score will range from **10 to 90 points**, providing a highly precise measurement of your English ability.\n\nAlong with your overall score, your score report will show a detailed breakdown of your communicative skills (Listening, Reading, Speaking, and Writing), allowing you to clearly identify your strengths and areas for improvement.\n\n**Global Recognition**\n\nThe PTE Academic is trusted by thousands of institutions worldwide.\n• **Study:** Accepted by prestigious universities across the USA, UK, Canada, Australia, and New Zealand, including Harvard Business School, INSEAD, and Yale.\n• **Visas & Immigration:** Approved for all UK, Australian, and New Zealand student and migration visa applications.\n\nWith the right preparation and a clear understanding of the test format, you can easily achieve the score you need to take your next big step. We can help you prepare the TEPTH Way.",
    stats: [
      { label: "Total Duration", value: "2 Hours" },
      { label: "Score Scale", value: "10–90 Points" },
      { label: "Results In", value: "48 Hours" },
      { label: "Validity", value: "2 Years" },
      { label: "AI Scored", value: "Yes" },
    ],
    sections: [
      {
        icon: "speaking",
        name: "Part 1: Speaking & Writing",
        duration: "54–67 minutes",
        details:
          "This section tests your spoken fluency, pronunciation, and written grammar in an academic environment.",
        skills: [
          "Read Aloud: Read a text on the screen aloud with proper pronunciation and intonation.",
          "Repeat Sentence: Listen to a recording and repeat the sentence exactly as spoken.",
          "Describe Image: Analyze and describe a chart, graph, map, or picture.",
          "Retell Lecture: Listen to a lecture excerpt and summarize it in your own words.",
          "Write Essay: Write a short, well-structured essay on a given prompt.",
        ],
      },
      {
        icon: "reading",
        name: "Part 2: Reading",
        duration: "29–30 minutes",
        details:
          "This section evaluates your ability to understand written English in academic contexts through different reading materials.",
        skills: [
          "Fill in the Blanks: Provide correct words using context and grammar clues.",
          "Reorder Paragraphs: Arrange randomly placed paragraphs into a logical text flow.",
          "Multiple Choice: Answer single-select or multiple-select questions based on a reading passage.",
        ],
      },
      {
        icon: "listening",
        name: "Part 3: Listening",
        duration: "30–43 minutes",
        details:
          "This section tests your ability to understand spoken English through a variety of audio and video clips (heard only once).",
        skills: [
          "Summarize Spoken Text: Listen to a recording and write a summary.",
          "Fill in the Blanks: Type the missing words in a transcription while listening.",
          "Highlight Incorrect Words: Identify words that do not match the spoken audio.",
          "Write from Dictation: Listen to a short sentence and type it exactly as heard.",
        ],
      },
    ],
    whoShouldTake: [],
    acceptedFor: [],
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
      "If your goal is to study, work, or live in the United Kingdom, you may be required to prove your English language proficiency as part of your visa application. The **PTE Academic UKVI** is a Secure English Language Test (SELT) approved by the UK Home Office.\n\nHere is everything you need to know to determine if this is the right test for you and how to prepare with confidence.\n\n**What is the PTE Academic UKVI?**\n\nThe PTE Academic UKVI is designed to assess your English listening, reading, speaking, and writing skills in an academic context. You will take the exam in a highly secure, authorized test center on a computer.\n\nA defining feature of this exam is its administrative integration with UK immigration systems. When you complete the test, your score report includes a **Unique Reference Number (URN)**, which is a mandatory requirement for certain UK visa applications.\n\n**Key Takeaway:** This test provides a streamlined, all-in-one way to prove your academic English abilities while meeting the strict security protocols of the UK Home Office.\n\n**Why Choose the PTE Academic UKVI?**\n\nCandidates choose this test because it offers a modern, stress-free testing experience tailored specifically for UK immigration purposes:\n• **Fast Results:** Scores are typically delivered within **48 hours**, helping you process your visa application quickly and meet tight deadlines.\n• **Unbiased AI Scoring:** The entire test is graded by an advanced artificial intelligence system alongside human oversight, ensuring your English is judged objectively without human bias.\n• **A Single Sitting:** You will complete all four sections (Speaking, Writing, Reading, and Listening) in one go, taking approximately **2 hours**, reducing testing fatigue.\n• **UK Home Office Approved:** It is recognized as a legitimate SELT, guaranteeing it meets the necessary legal and security requirements for UK visas.\n\n**Test Format and Structure**\n\nThe exam is divided into three consecutive parts, all completed in one continuous session.\n\n| Exam Section | Duration | What to Expect |\n|---|---|---|\n| **Part 1: Speaking & Writing** | 54 – 67 minutes | You will read aloud, repeat sentences, describe images, participate in speaking tasks, and write a short essay. |\n| **Part 2: Reading** | 29 – 30 minutes | You will answer multiple-choice questions, reorder paragraphs, and fill in the blanks using academic and everyday texts. |\n| **Part 3: Listening** | 30 – 43 minutes | You will listen to audio clips, summarize spoken text, and identify incorrect or missing words. |\n\n**When Should You Take the UKVI Version?**\n\nIt is crucial to book the correct test based on your specific UK destination and visa type. You should choose the PTE Academic UKVI if you are applying for:\n\n**1. Study Below Degree Level**\n\nIf you are applying for a foundation course, a pre-sessional English program, a pathway course, or studying at an institution that is **not** a recognized UK Higher Education Institution (HEI).\n\n**2. Specific UK Work Visas**\n\nIf you are applying for visas that require a 4-skills English test, including:\n• Skilled Worker visa\n• Innovator Founder visa\n• Minister of Religion visa\n\nBy securing your PTE Academic UKVI certification, you are ensuring your English credentials are fully compliant with the UK Home Office, smoothing the way for your move to the UK!",
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
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.pte_home_a1,
    type: "details",
    subtitle: "For Family and Work visas in the UK",
    description:
      "PTE Home A1 is a basic English test for UK Family and Work visas.",
    overview:
      "If you are planning to apply for certain family or work visas to settle in the United Kingdom, you may need to prove a basic level of English language proficiency. The **PTE Home A1** is a beginner-level Secure English Language Test (SELT) specifically designed for this purpose.\n\nUnlike the comprehensive, four-skill PTE exams used for university admissions or professional migration, the PTE Home A1 is a shorter, simpler test focused entirely on basic communication.\n\n**What is the PTE Home A1?**\n\nThe PTE Home A1 is a simple **two-skills test** that assesses only your **Speaking** and **Listening** abilities. It does not include reading or writing sections. The exam measures your ability to understand and communicate everyday English at a beginner level.\n\n**Key Takeaway:** You do not need advanced English skills to pass this test. It is designed purely to show that you have the basic language foundation needed to interact and function in daily UK life.\n\n**Why Choose the PTE Home A1?**\n\nCandidates choose this test because it is highly convenient, fast, and removes the stress of complex scoring systems:\n• **Simple Pass/Fail Result:** There is no complicated point scale to worry about. You either pass or fail based on whether you meet the basic required standard.\n• **Extremely Short Duration:** The entire computer-based test takes **less than 30 minutes** to complete.\n• **Fast Results:** Your scores are typically available within **48 hours**, complete with the Unique Reference Number (URN) required for your UK visa application.\n• **Unbiased AI Scoring:** Like all PTE tests, it is scored by an advanced artificial intelligence system, ensuring fair and accurate results without human bias.\n\n**Test Format and Structure**\n\nThe PTE Home A1 is taken on a computer with a headset at a highly secure test center. It consists of three simple question types that simulate basic, real-life conversations.\n\n| Question Type | What to Expect |\n|---|---|\n| **Repeat Sentence** | You will listen to short, simple sentences and be asked to repeat them exactly as you heard them. |\n| **Describe Image** | You will be shown basic, easy-to-understand images and will have a few seconds to briefly describe what you see. |\n| **Conversation: Listen and Answer** | You will listen to short questions or conversational snippets and provide quick spoken answers. |\n\n**When Should You Take the PTE Home A1?**\n\nYou must choose the correct test based on your specific UK visa application. It is required for applicants applying for the *first time* in the following visa categories:\n\n**Family Visas:**\n• Spouse or Partner visa\n• Parent of a Dependent Child visa\n\n**Specific Work Visas:**\n• Representative of an Overseas Business visa\n• Sportsperson visa\n\nWith its short duration and focus on basic, everyday conversation, the PTE Home A1 offers a highly accessible and stress-free way to meet your UK visa requirements!",
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
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.pte_home_a2,
    type: "details",
    subtitle: "PTE Home A2: Secure English Language Test for UK Visa Extensions",
    description:
      "The PTE Home A2 is a Secure English Language Test (SELT) officially approved by the UK Home Office for family visa extensions. Building on beginner foundations, it evaluates Speaking and Listening skills at CEFR Level A2 through basic, everyday situations.",
    overview:
      "If you are already living in the United Kingdom and need to extend your family visa, proving your continued progress in the English language is a mandatory step. The **PTE Home A2** is a Secure English Language Test (SELT) specifically designed to meet the UK Home Office requirements for visa extensions.\n\nBuilding slightly on the beginner foundations of the A1 test, the PTE Home A2 evaluates your ability to communicate in basic, everyday situations at an elementary level.\n\n**What is the PTE Home A2?**\n\nLike the A1 version, the PTE Home A2 is a **two-skills test** that focuses entirely on **Speaking** and **Listening**. It does not include any reading or writing sections. The exam measures your ability to understand and express simple opinions, talk about your routines, and handle short social exchanges.\n\n**Key Takeaway:** You only need to demonstrate an elementary, conversational understanding of English. The test proves you have built upon your basic language skills since your initial arrival in the UK.\n\n**Why Choose the PTE Home A2?**\n\nCandidates choose this test for its efficiency, predictability, and stress-free grading system:\n• **Simple Pass/Fail Result:** Instead of worrying about achieving a specific numerical score, you will simply receive a \"Pass\" or \"Fail\" based on whether you meet the required elementary standard.\n• **Extremely Short Duration:** The entire computer-based exam takes **less than 30 minutes** to complete.\n• **Fast Results:** Your scores are generally returned within **48 hours**, giving you the Unique Reference Number (URN) required to proceed with your visa extension application without delay.\n• **Unbiased AI Scoring:** Your spoken answers are evaluated by an advanced artificial intelligence system, ensuring complete fairness and objectivity.\n\n**Test Format and Structure**\n\nYou will take the PTE Home A2 on a computer with a headset at a highly secure test center. The exam consists of three straightforward question types designed to simulate everyday conversation and listening comprehension.\n\n| Question Type | What to Expect |\n|---|---|\n| **Repeat Sentence** | You will listen to short sentences and must repeat them into your microphone exactly as you heard them. |\n| **Describe Image** | You will look at simple images (such as everyday scenes or objects) and provide a brief spoken description of what you see. |\n| **Retell Story** | You will listen to a short, simple story or conversation and then summarize or retell the key points in your own words. |\n\n**When Should You Take the PTE Home A2?**\n\nChoosing the correct test level is critical for UK immigration. The UK Home Office requires the A2 level for applicants applying for a **visa extension** (usually after spending 2.5 years in the UK) in the following categories:\n\n**Family Visa Extensions:**\n• Spouse or Partner visa (extending stay)\n• Parent of a Dependent Child visa (extending stay)\n\n*(Note: If you are applying to settle permanently in the UK (Indefinite Leave to Remain) or applying for British Citizenship, you will need a slightly higher level of English, such as the PTE Home B1).*\n\nBy offering a quick, practical, and highly accessible format, the PTE Home A2 takes the stress out of your visa extension process, helping you seamlessly continue your life in the UK.",
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
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.pte_home_b1,
    type: "details",
    subtitle: "For UK Citizenship and Settlement",
    description:
      "PTE Home B1 is for UK Citizenship (Naturalisation) and Settlement (Indefinite Leave to Remain).",
    overview:
      "If you are taking the final steps toward making the United Kingdom your permanent home, proving your English proficiency is a vital requirement. The **PTE Home B1** is a Secure English Language Test (SELT) approved by the UK Home Office, specifically designed for individuals applying for settlement or citizenship.\n\nAs a step up from the beginner A1 and A2 exams, the PTE Home B1 evaluates your ability to communicate effectively in familiar, everyday situations at an intermediate level.\n\n**What is the PTE Home B1?**\n\nLike the other PTE Home exams, the B1 level is a **two-skills test** focusing exclusively on **Speaking** and **Listening**. It does not include any reading or writing sections. The exam measures your ability to express yourself clearly, understand standard spoken English, and participate in normal social and workplace conversations.\n\n**Key Takeaway:** You do not need to be perfectly fluent to pass this test. It is designed to prove you have the intermediate, practical communication skills necessary to live and work independently in the UK.\n\n**Why Choose the PTE Home B1?**\n\nCandidates prefer this test because it offers a highly streamlined, stress-free path to meeting mandatory UK immigration requirements:\n• **Simple Pass/Fail Result:** There are no complex score bands to decipher. You will receive a straightforward \"Pass\" or \"Fail\" based on whether you meet the B1 standard required by the UK Home Office.\n• **Extremely Short Duration:** The entire computer-based exam is completed in **less than 30 minutes**.\n• **Fast Results:** Scores are generally returned within **48 hours**, complete with the Unique Reference Number (URN) required to submit your visa or citizenship application.\n• **Unbiased AI Scoring:** Your spoken answers are evaluated by an advanced artificial intelligence system, ensuring completely objective and consistent grading.\n\n**Test Format and Structure**\n\nYou will take the PTE Home B1 on a computer with a headset at a highly secure test center. The exam features straightforward question types designed to test your real-world listening and speaking skills.\n\n| Question Type | What to Expect |\n|---|---|\n| **Repeat Sentence** | You will listen to short sentences and must repeat them into your microphone exactly as you heard them. |\n| **Describe Image** | You will look at a simple visual (such as a chart, map, or everyday scene) and provide a brief spoken description of what you see. |\n| **Retell Story** | You will listen to a short narrative or conversation and then summarize the key details in your own words. |\n| **Listen and Answer** | You will listen to a brief question and provide a short, simple spoken answer (often just one or two words). |\n\n**When Should You Take the PTE Home B1?**\n\nChoosing the correct test level is critical for a successful UK immigration application. The UK Home Office requires the B1 level of English for applicants applying for the following:\n\n**Settlement and Citizenship:**\n• **Settlement:** Indefinite Leave to Remain (ILR)\n• **Citizenship:** Naturalization as a British Citizen\n\n*(Note: If you are applying for certain work or student visas, you may need a 4-skills test like the PTE Academic UKVI instead. Always verify your exact requirement on the UK government website before booking).*\n\nBy offering a fast, focused, and highly practical testing experience, the PTE Home B1 clears a smooth path for finalizing your permanent settlement or citizenship in the UK.",
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
    whoShouldTake: [],
    acceptedFor: [],
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
      "If your goal is to live, work, or become a citizen in Canada, you will need to prove your English language proficiency. The CELPIP (Canadian English Language Proficiency Index Program) is Canada’s leading general English test. Designed specifically for immigration and professional designation, it is one of the most popular choices for individuals navigating the Canadian immigration system.\n\nUnlike academic tests designed for university admissions, the CELPIP test focuses on everyday, real-world English used in Canadian workplaces and social situations.\n\n**What is the CELPIP Test?**\nCELPIP evaluates your ability to use English in everyday Canadian scenarios. Instead of complex academic lectures, you will be tested on practical situations—like communicating with coworkers, understanding a news broadcast, or writing an email to a manager.\nOne of the standout features of CELPIP is that it uses a **single North American accent**. If you are accustomed to Canadian or American English, you will find the audio segments naturally easy to follow.\n\n**Key Takeaway:** The entire test is completely computer-delivered and completed in one single sitting. You will not need to schedule a separate appointment for a face-to-face speaking interview.\n\n**Two Versions of the Test**\nIt is essential to know which version of the test you need before you book. The CELPIP test is available in two distinct formats:\n\n**1. CELPIP - General Test**\n• **Who it's for:** Individuals applying for Canadian Permanent Residency (PR) through Express Entry, Provincial Nominee Programs (PNPs), or seeking professional designation.\n• **What it tests:** All four language skills: Listening, Reading, Writing, and Speaking.\n• **Duration:** Approximately 3 hours.\n\n**2. CELPIP - General LS Test**\n• **Who it's for:** Individuals applying for Canadian Citizenship.\n• **What it tests:** Only two skills: Listening and Speaking.\n• **Duration:** Approximately 1 hour and 10 minutes.\n\n**Why Choose the CELPIP Test?**\nMany candidates prefer the CELPIP test for its modern, user-friendly design and its direct alignment with Canadian immigration standards. Here are the top reasons to choose CELPIP:\n• **Fast Results:** Your official test scores are available online quickly, typically within **4 to 5 calendar days**.\n• **Direct CLB Mapping:** The scoring system is perfectly aligned with the **Canadian Language Benchmarks (CLB)**. A CELPIP score of 8 directly equals a CLB 8, making it incredibly easy to calculate your immigration points.\n• **Helpful Built-in Features:** Because the test is entirely computer-based, the Writing section includes a personal timer, a word counter, and a standard English spell-check tool.\n• **A Single Sitting:** You will complete all components on a computer without having to leave the room or switch testing centers.\n\n**Test Format and Structure (CELPIP - General)**\nFor those taking the full CELPIP - General Test, here is a breakdown of what to expect in your 3-hour session:\n\n| Exam Section | Duration | What to Expect |\n|---|---|---|\n| **Listening** | 46 - 55 minutes | You will listen to short conversations, news items, and discussions, then answer multiple-choice questions. |\n| **Reading** | 43 - 56 minutes | You will read everyday materials like emails, diagrams, and informative articles, followed by comprehension questions. |\n| **Writing** | 53 - 60 minutes | You will write an email regarding a day-to-day matter and respond to a survey question expressing your opinion. |\n| **Speaking** | 15 - 20 minutes | You will speak into a microphone to provide advice, describe a scene, make predictions, and express your opinions based on on-screen prompts. |\n\n**Official Recognition**\nThe CELPIP test is officially recognized by **Immigration, Refugees and Citizenship Canada (IRCC)**. It is also accepted by the Real Estate Council of British Columbia, the College of Immigration and Citizenship Consultants (CICC), and numerous other professional organizations across Canada.\n\nBy choosing the CELPIP test, you are taking an exam designed by Canadians, for Canada, giving you a clear and straightforward path to achieving your immigration goals.",
    stats: [
      { label: "Total Duration", value: "2h 50m" },
      { label: "Format", value: "Computer" },
      { label: "Results In", value: "3–4 Days" },
      { label: "Score Scale", value: "M–12" },
      { label: "Validity", value: "2 Years" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
    faqs: [],
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
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.cael,
    type: "details",
    subtitle: "Canadian Academic English Language Test",
    description:
      "The CAEL Test measures the English language proficiency of students planning to study at Canadian universities and colleges.",
    overview:
      "If your dream is to study at a Canadian university or college, proving your English proficiency is a critical first step in your application journey. The CAEL (Canadian Academic English Language) test is a comprehensive, computer-based exam designed specifically to measure the English level of international students planning to study in Canada.\n\nUnlike other global English tests, CAEL is deeply rooted in the Canadian educational experience, giving you a true taste of what to expect in a North American classroom.\n\n**What is the CAEL Test?**\nThe CAEL test evaluates your ability to use English in an academic context. What makes CAEL completely unique is its **integrated, topic-based approach**.\nInstead of testing your skills in isolation (reading a text about history, then listening to a lecture about biology), CAEL groups tasks by subject. You might read an article about glaciers, listen to a lecture on the same topic, and then use the information from both sources to write a short essay.\n\n**Key Takeaway:** The CAEL test accurately simulates a real first-year Canadian university class. By integrating reading, listening, writing, and speaking around a single topic, it tests how well you synthesize and use information in the real academic world.\n\n**Why Choose CAEL?**\nMany candidates prefer CAEL because it feels less like a traditional test and more like a standard academic assignment. Here is why it stands out:\n• **100% Canadian Focus:** It uses Canadian English vocabulary and accents, preparing you directly for the environment you will be studying in.\n• **Fast Results:** Your official test scores are typically available online within **8 business days** after taking the exam.\n• **Integrated Tasks:** Because the reading and listening materials share the same topic as your writing tasks, you are naturally provided with vocabulary and ideas to help you construct your answers.\n• **A Single Sitting:** You will complete all four components (Speaking, Reading, Listening, and Writing) in one continuous session taking approximately **3.5 hours**.\n\n**Test Format and Structure**\nThe CAEL test is taken entirely on a computer. It is divided into five main sections that move from general speaking tasks to in-depth, integrated academic units.\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will speak into a microphone to answer short questions about your academic experiences, summarize information, and relay details from a short presentation. |\n| **Integrated Reading** | You will read academic passages (like textbook excerpts or articles) and answer comprehension questions. |\n| **Integrated Listening** | You will listen to academic lectures, presentations, or campus conversations and answer questions based on the audio. |\n| **Academic Unit A** | You will read a passage and listen to a lecture on the **same topic**. You will then use information from both sources to write an extended essay. |\n| **Academic Unit B** | Similar to Unit A, but slightly shorter. You will read a passage and listen to a lecture on a unified topic, followed by writing a shorter response. |\n\n**Understanding Your Scores**\nCAEL uses a specialized Band Score system ranging from **10 to 90 points**.\nYour final score report will provide an Overall Band Score, as well as individual scores for your Reading, Listening, Speaking, and Writing components. Most Canadian academic institutions require an overall score between 60 and 70 for direct admission, though this varies by program.\n\n**Official Recognition**\nThe CAEL test is one of the most widely recognized academic English tests in the country.\n• **Universities & Colleges:** It is accepted by 100% of English-speaking Canadian universities and colleges.\n• **Professional Associations:** Many professional organizations across Canada also accept CAEL as proof of English proficiency for licensure and certification.\n\nBy taking the CAEL test, you are not just proving your English skills—you are demonstrating that you are fully prepared to succeed in a Canadian academic environment.",
    stats: [
      { label: "Total Duration", value: "3.5 Hours" },
      { label: "Format", value: "Computer" },
      { label: "Results In", value: "8 Business Days" },
      { label: "Validity", value: "2 Years" },
      { label: "Acceptance", value: "180+ Inst." },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
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
    subtitle: "Secure English Language Tests for UK Visas and Immigration",
    description:
      "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
    overview:
      "Skills for English (UKVI) is a suite of Home Office-approved Secure English Language Tests (SELT) delivered globally by PSI for UK Visa and Immigration applications.\n\nWhether you need a two-skills test (Speaking and Listening) for family, spouse, settlement, or British citizenship applications, or a four-skills test (Speaking, Listening, Reading, and Writing) for work and student visas, Skills for English provides a modern, 100% computer-based exam experience with fast results delivered in just 3 to 5 days.\n\n**Key Benefits:**\n• **100% Computer-Delivered:** All speaking, listening, reading, and writing sections are completed on a computer using a headset, removing the anxiety of facing a live examiner.\n• **Fast Turnaround:** Results are issued online in 3 to 5 days, helping you meet urgent visa deadlines.\n• **UK Home Office Approved:** Includes the essential Unique Reference Number (URN) required for your UKVI application.",
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
      "If you are applying for specific UK family visas, you may need to prove your basic English language proficiency. The **Skills for English SELT (Secure English Language Test) Speaking and Listening at Level A1** is an official, UK Home Office-approved exam designed exactly for this purpose.\n\nDelivered globally by PSI, this test is a convenient and accessible option for individuals who need to demonstrate a beginner level of English to settle with their family or work in the UK.\n\n**What is the Skills for English SELT A1 Test?**\nThis is a straightforward **two-skills test** that assesses only your **Speaking** and **Listening** abilities. There are no reading or writing sections. It measures your English at the CEFR A1 level, which is a beginner standard.\nThe exam evaluates your ability to understand simple spoken English, introduce yourself, and respond to basic everyday questions.\n\n**Key Takeaway:** You do not need advanced English skills to pass. This test is entirely computer-based and is designed purely to prove that you can handle basic, everyday communication in the UK.\n\n**Why Choose Skills for English?**\nCandidates appreciate the Skills for English test because of its modern, user-friendly, and highly efficient delivery:\n• **100% Computer-Based:** You will complete both the speaking and listening parts on a computer using a headset. You will record your spoken answers directly into the system, meaning there is no face-to-face examiner to make you nervous.\n• **Short Duration:** The entire exam takes a maximum of **30 minutes** to complete.\n• **Fast Results:** Test results are typically available online in just **3 to 5 days**, helping you meet tight visa deadlines.\n• **UKVI Approved:** It provides the essential Unique Reference Number (URN) that you must include with your UK visa application to prove your result is genuine.\n\n**Test Format and Structure**\nYou will take the test in a single, continuous session at a secure UKVI-approved test center. The interface is designed to be intuitive and easy to navigate.\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will start by introducing yourself. Then, you will listen to recorded questions or prompts on the screen and speak your answers directly into the microphone. Your responses are digitally recorded and marked by trained assessors later. |\n| **Listening** | You will listen to short audio recordings of spoken English (you will get to hear each recording twice). After listening, you will answer a series of simple questions based on what you heard. This section is automatically marked by the computer. |\n\n**When Should You Take This Test?**\nChoosing the correct SELT level is crucial for your UK immigration application. The UK Home Office requires an A1 level English test for applicants applying for the *first time* under certain visa categories, such as:\n\n**Family Visas:**\n• Spouse or Partner visa\n• Parent of a Dependent Child visa\n\n**Specific Work Visas:**\n• Representative of an Overseas Business visa\n• Sportsperson visa\n\n*(Note: If you are extending a family visa you already have or applying for citizenship, you will likely need a higher level, such as A2 or B1. Always confirm your specific visa requirements before booking).* \n\nWith its stress-free, computer-based format and quick turnaround time, the Skills for English SELT A1 is an excellent, straightforward choice for taking your first step toward living in the UK.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_a2,
    type: "details",
    subtitle: "For UK Family visa extension",
    description:
      "Skills for English (UKVI) A2 is for UK Family visa extensions.",
    overview:
      "If you are already living in the United Kingdom and need to extend your family or partner visa, you will need to prove your continued progress in the English language. The **Skills for English SELT (Secure English Language Test) Speaking and Listening at Level A2** is an official, UK Home Office-approved exam designed specifically for this purpose.\n\nDelivered by PSI, this exam is a highly accessible option for individuals looking for a stress-free way to meet their UK visa extension requirements.\n\n**What is the Skills for English SELT A2 Test?**\nBuilding slightly on the beginner foundations of the A1 exam, the Skills for English SELT A2 is a **two-skills test** that focuses entirely on **Speaking** and **Listening**. It does not include any reading or writing sections.\nThe exam measures your English at the CEFR A2 level, which is considered an elementary standard. It evaluates your ability to handle simple, routine conversations, share basic information about your past and present, and understand everyday spoken English.\n\n**Key Takeaway:** You only need to demonstrate an elementary, conversational understanding of English. The test simply proves you have built upon your basic language skills since your initial arrival in the UK.\n\n**Why Choose Skills for English?**\nCandidates prefer the Skills for English test because it offers a modern, highly predictable testing environment that removes the stress of traditional exams:\n• **100% Computer-Based:** You will complete the entire exam on a computer using a headset. Because you record your spoken answers directly into the system, there is no face-to-face examiner in the room to make you nervous.\n• **Short Duration:** The exam is very quick, taking **under 35 minutes** to complete.\n• **Fast Results:** Your official test scores are typically available online in just **3 to 5 days**, helping you meet strict visa extension deadlines.\n• **UKVI Approved:** Your results report will include the Unique Reference Number (URN) required by the UK Home Office to process your visa application.\n\n**Test Format and Structure**\nYou will take the test in a single, continuous session at a secure UKVI-approved test center. The interface is intuitive, and the tasks are based on highly practical, real-world scenarios like shopping, working, and daily routines.\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will listen to recorded prompts on your screen and speak your answers into the microphone. You will be asked to talk about familiar topics, describe past events or future plans, and express simple opinions. Your answers are recorded and marked by trained assessors later. |\n| **Listening** | You will listen to short audio recordings of spoken English (you will get to hear each clip twice). You will then answer simple questions based on the audio, such as identifying the main point or picking out key details. This section is automatically marked. |\n\n**When Should You Take This Test?**\nChoosing the correct test level is critical for UK immigration. The UK Home Office requires the A2 level for applicants applying for a **visa extension** (usually after spending 2.5 years in the UK) in the following categories:\n\n**Family Visa Extensions:**\n• Spouse or Partner visa (extending stay)\n• Parent of a Dependent Child visa (extending stay)\n\n**Specific Work Visas:**\n• Sportsperson visa (extending stay)\n\n*(Note: If you are applying to settle permanently in the UK (Indefinite Leave to Remain) or applying for British Citizenship, you will need a slightly higher level of English, such as the B1 level. Always check your exact visa requirements on the UK government website before booking).\n\nWith its focused format and quick turnaround time, the Skills for English SELT A2 is a straightforward choice for taking the next step in your UK journey.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_b1,
    type: "details",
    subtitle: "For UK Citizenship and Settlement",
    description:
      "Skills for English (UKVI) B1 Speaking & Listening is for UK Citizenship and Settlement.",
    overview:
      "If you are taking the final, exciting steps to make the United Kingdom your permanent home, proving your English proficiency is a vital requirement. The **Skills for English SELT (Secure English Language Test) Speaking and Listening at Level B1** is an official, UK Home Office-approved exam designed exactly for this purpose.\n\nDelivered globally by PSI, this exam offers a streamlined, highly accessible route for individuals applying for UK citizenship or permanent settlement.\n\n**What is the Skills for English SELT B1 Test?**\nLike the A1 and A2 versions, the B1 level is a **two-skills test** focusing exclusively on **Speaking** and **Listening**. It does not include any reading or writing sections.\nThe exam measures your English at the CEFR B1 level, which is an intermediate standard. It evaluates your ability to communicate effectively in familiar, everyday situations, express opinions, describe past events or future plans, and understand standard spoken English in social or workplace contexts.\n\n**Key Takeaway:** You do not need to be perfectly fluent to pass this test. It is designed to prove you have the practical, intermediate communication skills necessary to live and work independently in the UK.\n\n**Why Choose Skills for English?**\nCandidates prefer this test because it offers a modern, highly predictable testing environment that removes the stress of traditional face-to-face interviews:\n• **100% Computer-Based:** You will complete the entire exam on a computer using a headset. You record your spoken answers directly into the system, meaning there is no examiner in the room to make you nervous.\n• **Short Duration:** The exam is very quick, taking **approximately 35 to 40 minutes** to complete.\n• **Fast Results:** Your official test scores are typically available online in just **3 to 5 days**, helping you meet strict immigration deadlines.\n• **UKVI Approved:** Your results report will include the Unique Reference Number (URN) required by the UK Home Office to process your citizenship or settlement application.\n\n**Test Format and Structure**\nYou will take the test in a single, continuous session at a secure UKVI-approved test center. The interface is intuitive, and the tasks are based on practical, real-world scenarios.\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will listen to recorded prompts and speak your answers into the microphone. You will be asked to discuss familiar topics, provide explanations, and express your opinions clearly. |\n| **Listening** | You will listen to short audio recordings of everyday spoken English. You will then answer simple multiple-choice questions to identify the main points and key details. |\n\n**When Should You Take This Test?**\nChoosing the correct test level is critical for a successful UK immigration application. The UK Home Office requires the B1 level of English for applicants applying for the following permanent statuses:\n\n**Settlement and Citizenship:**\n• **Settlement:** Indefinite Leave to Remain (ILR)\n• **Citizenship:** Naturalization as a British Citizen\n\n*(Note: If you are applying for certain professional work visas or student visas for degree-level studies, you may need a 4-skills test instead. Always verify your exact requirement on the UK government website before booking).*\n\nBy offering a fast, focused, and completely computer-delivered testing experience, the Skills for English SELT B1 clears a smooth path for finalizing your permanent settlement or citizenship in the UK.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "Speaking & Listening" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_b1_r_w,
    type: "details",
    subtitle: "For UK Work and Student visas",
    description:
      "Skills for English (UKVI) B1 Speaking, Listening, Reading and Writing is for UK Work and Student visas.",
    overview:
      "If you are applying for specific UK visa routes—such as certain student visas below degree level—you may be required to prove your English language proficiency across all four core areas. The **Skills for English SELT (Secure English Language Test) B1 (Four Skills)** is an official, UK Home Office-approved exam designed for this purpose.\n\nUnlike the two-skill versions of this test, the \"Four Skills\" format provides a comprehensive assessment of your ability to communicate in an English-speaking environment.\n\n**What is the Skills for English SELT B1 (Four Skills)?**\nThis test is a comprehensive assessment that evaluates your **Speaking, Listening, Reading, and Writing** abilities. It is aligned with the CEFR B1 intermediate level, which is a standard requirement for various work, study, and settlement visa applications.\nThe entire exam is completed in one continuous, computer-based session. By testing all four modalities, it provides a complete picture of your language competency, ensuring you are prepared for the academic or professional requirements of your specific visa route.\n\n**Key Takeaway:** While the two-skill version of this test is often used for citizenship or settlement, the Four Skills version is typically required for visa routes where you must demonstrate your ability to process written information and produce written content in English.\n\n**Why Choose Skills for English?**\nCandidates opt for this test because of its modern, efficient, and user-friendly delivery:\n• **100% Computer-Based:** You will complete all four components on a computer in a single sitting. Speaking and writing responses are digitally recorded and submitted for assessment, meaning you do not have to worry about the pressure of a face-to-face examiner.\n• **Unified Experience:** The transition between each skill is seamless, and because the test is computer-delivered, you benefit from a consistent and controlled environment.\n• **Fast Results:** Official results are typically available online in just **3 to 5 days**, helping you move forward with your visa application quickly.\n• **UKVI Approved:** The test is fully approved by the UK Home Office, and your results will include the mandatory Unique Reference Number (URN) required for your application.\n\n**Test Format and Structure**\nYou will take the test at an approved, secure SELT test center. The test is designed to be intuitive, and you will be guided through each section:\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will listen to prompts and record your spoken responses into a headset. You will be asked to discuss familiar topics, explain your opinions, and describe experiences. |\n| **Listening** | You will listen to audio recordings of everyday English conversations and answer questions to demonstrate your understanding of key details and main ideas. |\n| **Reading** | You will read various short texts—such as notices, emails, or articles—and answer comprehension questions to show you can extract relevant information. |\n| **Writing** | You will write responses to practical tasks, such as drafting an email or a short description, demonstrating your ability to use grammar and vocabulary accurately at an intermediate level. |\n\n**Who Needs the Four-Skills B1 Test?**\nThe requirement for the Four Skills test depends entirely on the visa you are applying for. While many settlement and citizenship routes only require Speaking and Listening, you should choose the B1 Four Skills test if:\n• **Student Visa:** You are applying to study a course below degree level.\n• **Specific Work Routes:** Certain temporary or specialized work visa categories mandate a demonstration of all four language competencies.\n\nBy opting for the Skills for English SELT B1 Four Skills test, you are choosing a modern, efficient, and secure way to meet your UK visa requirements with confidence.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_b2,
    type: "details",
    subtitle: "For UK Work and Professional visas",
    description:
      "Skills for English (UKVI) B2 is for those who need to demonstrate higher level proficiency for work or professional registration.",
    overview:
      "If you are applying for an advanced study program or a specialized work visa in the United Kingdom, you may be required to prove a high level of English proficiency across all communication areas. The **Skills for English SELT (Secure English Language Test) B2 (Four Skills)** is an official, UK Home Office-approved exam explicitly designed to assess your complete language capabilities.\n\nUnlike the beginner and intermediate tests used for settlement, the B2 level is an upper-intermediate qualification. It proves that you have the robust language skills required to thrive in a professional British workplace or a rigorous academic environment.\n\n**What is the Skills for English SELT B2 (Four Skills)?**\nThis comprehensive test evaluates your **Speaking, Listening, Reading, and Writing** abilities. Aligned with the CEFR B2 upper-intermediate level, the exam measures your capacity to understand complex texts, express detailed opinions, and interact with native speakers with a high degree of fluency and spontaneity.\nYou will complete the entire exam in a single, continuous, computer-based session that generally lasts between **175 and 190 minutes**, depending on the specific tasks. By assessing all four language modalities at an advanced level, it provides the UK Home Office and your future sponsor with a complete, accurate picture of your professional and academic readiness.\n\n**Key Takeaway:** The B2 Four Skills test is for individuals taking on significant roles in the UK. It demonstrates that you can comfortably handle technical discussions, write detailed reports, and communicate confidently without straining yourself or the listener.\n\n**Why Choose Skills for English?**\nCandidates taking upper-intermediate exams often prefer the Skills for English format because of its modern, user-friendly, and highly efficient delivery system:\n• **100% Computer-Based:** You will complete all four components on a computer in one sitting. Your spoken and written responses are digitally recorded and submitted for assessment, removing the anxiety of facing a live examiner.\n• **A Unified Experience:** The test transitions smoothly from one skill to the next. Because it is entirely computer-delivered, you benefit from a quiet, controlled environment that allows you to focus deeply on complex reading and writing tasks.\n• **Fast Results:** Even for a comprehensive four-skills test, official results are typically available online in just **3 to 5 days**, helping you meet strict visa application deadlines.\n• **UKVI Approved:** The test is fully approved by the UK Home Office, and your results will include the mandatory Unique Reference Number (URN) required to validate your visa application.\n\n**Test Format and Structure**\nYou will take the test at an approved, secure SELT test center. The interface is intuitive, guiding you clearly through each advanced section:\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking (Approx. 15 mins)** | You will listen to prompts and record your spoken responses using a headset. You will be asked to express detailed viewpoints, weigh the advantages and disadvantages of different options, and describe personal experiences fluently. |\n| **Listening (Approx. 40 mins)** | You will listen to longer audio recordings, such as presentations, interviews, or discussions on abstract topics. You will answer questions to demonstrate your understanding of both the main ideas and the underlying attitudes or opinions of the speakers. |\n| **Reading (Approx. 75 mins)** | You will read complex texts from various sources—such as articles, reports, or academic excerpts—and answer questions to show you can extract specific details, understand text structure, and grasp implied meanings. |\n| **Writing (Approx. 60 mins)** | You will complete practical writing tasks that require you to produce clear, detailed text. This may involve writing an essay, a detailed email, or a report where you must synthesize information and construct a logical argument. |\n\n**Who Needs the Four-Skills B2 Test?**\nThe UK Home Office requires a B2 level of English across all four skills for several high-level visa categories. You will likely need to take this test if you are applying for:\n• **Skilled Worker Visa:** Required for individuals coming to the UK to do an eligible skilled job with an approved employer.\n• **Health and Care Worker Visa:** For medical professionals coming to work in the NHS or related sectors.\n• **Student Visa (Degree Level or Above):** Many universities require a B2 level for bachelor’s or master’s degree programs.\n• **Innovator Founder Visa:** For entrepreneurs looking to set up and run an innovative business in the UK.\n• **Minister of Religion Visa:** For those coming to the UK to take up a key role within their faith community.\n\nBy choosing the Skills for English SELT B2 Four Skills test, you are securing a reliable, stress-free certification that proves you are fully equipped to succeed in the UK's academic and professional spheres.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_c1,
    type: "details",
    subtitle: "For advanced UK academic and professional requirements",
    description:
      "Skills for English (UKVI) C1 measures advanced proficiency for complex academic or professional environments.",
    overview:
      "If you are aiming to enroll in a postgraduate academic program or take on a highly specialized professional role in the United Kingdom, you may be required to prove an advanced level of English proficiency. The **Skills for English SELT (Secure English Language Test) C1 (Four Skills)** is an official, UK Home Office-approved exam designed to assess your language capabilities at a highly sophisticated level.\n\nAs an advanced (CEFR C1) qualification, this test proves that you can express yourself fluently and spontaneously, understand implicit meanings, and use English flexibly for complex academic, professional, and social purposes.\n\n**What is the Skills for English SELT C1 (Four Skills)?**\nThis comprehensive exam evaluates your **Speaking, Listening, Reading, and Writing** abilities at the C1 level. It goes beyond basic comprehension and intermediate communication to test your mastery of the English language.\nYou will complete the entire exam in a single, continuous, computer-based session that allows for a maximum of **190 minutes**. By assessing all four language skills at an advanced tier, the test provides universities and employers with concrete proof that you can handle rigorous, high-level English environments without difficulty.\n\n**Key Takeaway:** The C1 Four Skills test is for individuals pursuing top-tier opportunities in the UK. It demonstrates that you can confidently navigate demanding academic research, lead high-level professional meetings, and comprehend complex, nuanced texts.\n\n**Why Choose Skills for English?**\nCandidates aiming for advanced certifications often prefer the Skills for English format for its efficiency, focus, and modern delivery:\n• **100% Computer-Based:** You will complete all four test components on a computer in one sitting. Your speaking and writing responses are digitally recorded and submitted for assessment, removing the pressure of performing in front of a live, face-to-face examiner.\n• **A Unified Experience:** The test is designed to transition smoothly from one skill to the next. The intuitive computer interface allows you to focus deeply on complex reading passages and advanced writing tasks in a quiet, controlled test center environment.\n• **Fast Results:** Despite being an advanced, comprehensive exam, official results are typically available online in just **3 to 5 days**, helping you meet strict university or visa deadlines.\n• **UKVI Approved:** The test is fully approved by the UK Home Office, and your official results report will include the mandatory Unique Reference Number (URN) required to validate your visa application.\n\n**Test Format and Structure**\nYou will take the test at an approved, secure SELT test center. The interface will guide you clearly through each of the advanced sections:\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will listen to advanced prompts and record your spoken responses using a headset. You will be expected to express ideas fluently and spontaneously, discuss abstract concepts, and communicate complex thoughts with precision. |\n| **Listening** | You will listen to lengthy audio recordings—such as lectures, demanding professional discussions, or detailed presentations. You must answer questions that test your ability to follow extended arguments, recognize underlying attitudes, and grasp implicit meanings. |\n| **Reading** | You will read long, complex texts from varied sources, such as academic journals, specialized articles, or literary excerpts. You will answer questions to demonstrate your ability to understand sophisticated vocabulary, text structure, and nuanced details. |\n| **Writing** | You will be given two distinct writing tasks on relevant, complex topics. You must produce clear, well-structured, and detailed written responses, showing a high degree of grammatical control, extensive vocabulary, and effective use of organizational patterns. |\n\n**Who Needs the Four-Skills C1 Test?**\nThe UK Home Office and UK educational institutions require a C1 level of English for highly demanding roles and advanced study programs. You will likely need to take this test if you are applying for:\n• **Student Visa (Postgraduate or PhD Level):** Many prestigious universities require a C1 level of English for Master's degrees, Doctoral programs, or highly competitive undergraduate courses.\n• **Specialized Professional Roles:** Certain high-level corporate, medical, or academic positions may require proof of advanced English proficiency.\n• **Specific Visa Routes:** While B2 is the minimum for many skilled worker visas, having a C1 qualification can strengthen applications for highly specialized sectors or meet the strict criteria of particular employers.\n\nBy choosing the Skills for English SELT C1 Four Skills test, you are securing a highly respected, stress-free certification that proves you are fully equipped to excel at the highest levels of the UK's academic and professional spheres.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
  },
  {
    ...EXAM_IDS_DATA.selt_c2,
    type: "details",
    subtitle: "For near-native UK requirements",
    description:
      "Skills for English (UKVI) C2 is the highest level of English proficiency test available.",
    overview:
      "If you are applying for top-tier academic positions, leading research roles, or highly specialized professional opportunities in the United Kingdom, you may wish or be required to prove the highest possible level of English proficiency. The **Skills for English SELT (Secure English Language Test) C2 (Four Skills)** is an official, UK Home Office-approved exam designed to assess your language capabilities at a mastery level.\n\nAs the highest qualification on the CEFR scale (C2), this test proves that you have native-like fluency. It demonstrates that you can understand virtually everything you hear or read with ease, and can express yourself spontaneously, very fluently, and precisely in the most complex situations.\n\n**What is the Skills for English SELT C2 (Four Skills)?**\nThis comprehensive exam evaluates your **Speaking, Listening, Reading, and Writing** abilities at the absolute highest standard. It does not just test your ability to communicate; it tests your ability to differentiate finer shades of meaning, handle abstract and structurally complex texts, and engage effortlessly in high-level academic or professional discourse.\nYou will complete the entire exam in a single, continuous, computer-based session that lasts a maximum of **190 minutes**. By passing all four skills at the C2 level, you provide universities, employers, and the UK Home Office with undeniable proof of your exceptional English competency.\n\n**Key Takeaway:** The C2 Four Skills test is for individuals who need to demonstrate total mastery of the English language. It proves that you can handle demanding native-level environments - such as defending a doctoral thesis, publishing advanced academic papers, or negotiating complex corporate contracts - without any language barrier.\n\n**Why Choose Skills for English?**\nCandidates aiming for the highest level of certification often prefer the Skills for English format for its streamlined, highly focused, and modern delivery:\n• **100% Computer-Based:** You will complete all four test components on a computer in a single sitting. Your speaking and writing responses are digitally recorded and submitted for assessment, allowing you to focus completely on the complex tasks without the distraction of a face-to-face examiner.\n• **A Unified Experience:** The test transitions smoothly between skills. The intuitive interface and quiet test center environment allow you to maintain the deep concentration required for C2-level reading and writing tasks.\n• **Fast Results:** Despite being the most advanced comprehensive exam available, official results are typically available online in just **3 to 5 days**, giving you a quick turnaround for strict application deadlines.\n• **UKVI Approved:** The test is fully approved by the UK Home Office, and your official results report will include the mandatory Unique Reference Number (URN) required to validate your visa application.\n\n**Test Format and Structure**\nYou will take the test at an approved, secure SELT test center. The interface will guide you through each of the expert-level sections:\n\n| Exam Section | What to Expect |\n|---|---|\n| **Speaking** | You will listen to advanced prompts and record your spoken responses using a headset. You must demonstrate the ability to express yourself precisely and fluently, discuss highly abstract concepts, and seamlessly adapt your tone and style to the context. |\n| **Listening** | You will listen to lengthy audio recordings—such as fast-paced, native-level discussions, complex presentations, or academic debates. You must answer questions that test your ability to catch subtle nuances, implied meanings, and speaker attitudes. |\n| **Reading** | You will read complex, dense texts from varied high-level sources, such as literary writings, scientific journals, or specialized reports. You will answer questions to show your ability to comprehend both the broad concepts and the finest details effortlessly. |\n| **Writing** | You will complete two demanding writing tasks on relevant, sophisticated topics. You must produce well-structured, compelling, and stylistically accurate written responses, showcasing flawless grammatical control and a vast, sophisticated vocabulary. |\n\n**Who Needs the Four-Skills C2 Test?**\nWhile lower levels (such as B2 or C1) are often sufficient for standard work and student visas, the C2 level is reserved for individuals pursuing the most demanding roles in the UK. You may choose or be required to take this test if you are applying for:\n• **Top-Tier Academic Programs:** For admission into highly competitive postgraduate programs, doctoral (PhD) research, or postdoctoral positions at elite UK universities.\n• **Academic and Teaching Roles:** If you are applying to teach at a UK university, lead high-level research teams, or publish within English-speaking academic communities.\n• **Executive and Specialized Professions:** For senior corporate leadership, legal professions, or advanced medical roles where native-level communication, nuance, and absolute precision are critical.\n\nBy achieving the Skills for English SELT C2 Four Skills certification, you are securing a highly prestigious credential that proves you have conquered the English language and are ready for the highest levels of success in the UK.",
    stats: [
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
      { label: "Skills", value: "All 4 Skills" },
    ],
    sections: [],
    whoShouldTake: [],
    acceptedFor: [],
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
