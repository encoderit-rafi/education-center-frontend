const course_modes = [
  {
    id: "group",
    name: "Group",
    max_students: 5,
  },
  {
    id: "semi_private",
    name: "Semi-Private",
    max_students: 3,
  },
  {
    id: "vip",
    name: "VIP",
    max_students: 1,
  },
];
const course_types = [
  {
    id: "classroom",
    name: "Classroom",
  },
  {
    id: "online",
    name: "Online",
  },
];
export const courses = [
  {
    id: "course_1",
    name: "Group Classroom",
    class_mode_id: "group",
    class_type_id: "classroom",
    price: 1850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
  {
    id: "course_2",
    name: "Semi-Private Classroom",
    class_mode_id: "semi_private",
    class_type_id: "classroom",
    price: 2850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
  {
    id: "course_3",
    name: "VIP Classroom",
    class_mode_id: "vip",
    class_type_id: "classroom",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
  {
    id: "course_4",
    name: "Private Online",
    class_mode_id: "vip",
    class_type_id: "online",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },
];
export const workshops = [
  {
    id: "workshop_1",
    name: "Workshop 2 Hours",
    duration: "2 hours",
    price: 600,
    currency: "AED",
  },
  {
    id: "workshop_2",
    name: "Workshop 4 Hours",
    duration: "4 hours",
    price: 1000,
    currency: "AED",
  },
  {
    id: "workshop_3",
    name: "Workshop 6 Hours",
    duration: "6 hours",
    price: 1350,
    currency: "AED",
  },
  {
    id: "workshop_4",
    name: "Workshop 8 Hours",
    duration: "8 hours",
    price: 1600,
    currency: "AED",
  },
];
export const paid_mock_tests = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    image: "/images/ielts.png",
    content:
      "Mock Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: { currency: "AED", fee: 350 },
  },
];
export const exams_workshops = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    image: "/images/ielts.png",
    content:
      "Workshop Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    workshops: workshops,
  },
];
export const exams_courses = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    class_type_id: "classroom",
    image: "/images/ielts.png",
    content:
      "Classroom Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    courses: [courses[0], courses[1], courses[2]],
  },
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    class_type_id: "online",
    image: "/images/ielts.png",
    content:
      "Online Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    courses: [courses[3]],
  },
];
export const exams_dates = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    image: "/images/ielts.png",
    content: "Dates content",
    // dates
  },
];
export const exams_types = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    types: [
      {
        id: "ielts_academic",
        name: "IELTS Academic",
        image: "/images/ielts.png",
        content: "Academic Content",
        types: [],
      },
      {
        id: "ielts_general",
        name: "IELTS General",
        image: "/images/ielts.png",
        content: "General Content",
        types: [],
      },
      {
        id: "ielts_ukvi",
        name: "IELTS UKVI",
        image: "/images/ielts.png",
        content: "UKVI Content",
        types: [
          {
            id: "ielts_ukvi_academic",
            name: "IELTS for UKVI Academic",
            image: "/images/ielts.png",
            content: "IELTS for UKVI Academic Content",
            types: [],
          },
          {
            id: "ielts_ukvi_general",
            name: "IELTS for UKVI General Training",
            image: "/images/ielts.png",
            content: "IELTS for UKVI General Training Content",
            types: [],
          },
          {
            id: "ielts_life_skills_a1",
            name: "IELTS Life Skills A1",
            image: "/images/ielts.png",
            content: "IELTS Life Skills A1 Content",
            types: [],
          },
          {
            id: "ielts_life_skills_a2",
            name: "IELTS Life Skills A2",
            image: "/images/ielts.png",
            content: "IELTS Life Skills A2 Content",
            types: [],
          },
          {
            id: "ielts_life_skills_b1",
            name: "IELTS Life Skills B1",
            image: "/images/ielts.png",
            content: "IELTS Life Skills B1 Content",
            types: [],
          },
        ],
      },
    ],
  },
  {
    exam: {
      id: "toefl_ibt",
      name: "TOEFL iBT",
    },
    types: [],
  },
  {
    exam: {
      id: "pte",
      name: "PTE",
    },
    types: [
      {
        id: "pte_academic",
        name: "PTE Academic",
        image: "/images/pte.png",
        content: "PTE Academic Content",
        types: [],
      },
      {
        id: "pte_core",
        name: "PTE Core",
        image: "/images/pte.png",
        content: "PTE Core Content",
        types: [],
      },
      {
        id: "pte_ukvi",
        name: "PTE UKVI",
        image: "/images/pte.png",
        content: "PTE UKVI Content",
        types: [
          {
            id: "pte_academic_ukvi",
            name: "PTE Academic UKVI",
            image: "/images/pte.png",
            content: "PTE Academic UKVI Content",
            types: [],
          },
          {
            id: "pte_home_a1",
            name: "PTE Home A1",
            image: "/images/pte.png",
            content: "PTE Home A1 Content",
            types: [],
          },
          {
            id: "pte_home_a2",
            name: "PTE Home A2",
            image: "/images/pte.png",
            content: "PTE Home A2 Content",
            types: [],
          },
          {
            id: "pte_home_b1",
            name: "PTE Home B1",
            image: "/images/pte.png",
            content: "PTE Home B1 Content",
            types: [],
          },
        ],
      },
    ],
  },
  {
    exam: {
      id: "celpip",
      name: "CELPIP",
    },
    types: [
      {
        id: "celpip_general",
        name: "CELPIP General",
        image: "/images/celpip.png",
        content: "CELPIP General Content",
        types: [],
      },
      {
        id: "celpip_general_ls",
        name: "CELPIP General LS",
        image: "/images/celpip.png",
        content: "CELPIP General LS Content",
        types: [],
      },
    ],
  },
  {
    exam: {
      id: "cael",
      name: "CAEL",
    },
    types: [],
  },
  {
    exam: {
      id: "selt",
      name: "Skills for English (SELT)",
    },
    types: [
      {
        id: "selt_a1",
        name: "UKVI Speaking and listening at level A1",
        image: "/images/selt.png",
        content: "UKVI Speaking and listening at level A1 Content",
        types: [],
      },
      {
        id: "selt_a2",
        name: "UKVI Speaking and listening at level A2",
        image: "/images/selt.png",
        content: "UKVI Speaking and listening at level A2 Content",
        types: [],
      },
      {
        id: "selt_b1",
        name: "UKVI Speaking and listening at level B1",
        image: "/images/selt.png",
        content: "UKVI Speaking and listening at level B1 Content",
        types: [],
      },
      {
        id: "selt_b1_r_w",
        name: "UKVI Speaking, listening, reading, and writing at level B1",
        image: "/images/selt.png",
        content:
          "UKVI Speaking, listening, reading, and writing at level B1 Content",
        types: [],
      },
      {
        id: "selt_b2",
        name: "UKVI Speaking, listening, reading, and writing at level B2",
        image: "/images/selt.png",
        content:
          "UKVI Speaking, listening, reading, and writing at level B2 Content",
        types: [],
      },
      {
        id: "selt_c1",
        name: "UKVI Speaking, listening, reading, and writing at level C1",
        image: "/images/selt.png",
        content:
          "UKVI Speaking, listening, reading, and writing at level C1 Content",
        types: [],
      },
      {
        id: "selt_c2",
        name: "UKVI Speaking, listening, reading, and writing at level C2",
        image: "/images/selt.png",
        content:
          "UKVI Speaking, listening, reading, and writing at level C2 Content",
        types: [],
      },
    ],
  },
];
export const exams_bookings = [
  {
    exam: {
      id: "ielts",
      name: "IELTS",
    },
    image: "/images/brands/ielts.png",
    content: "Booking Content",
    exam_types: [
      {
        id: "academic",
        name: "Academic",
        image: "/images/brands/ielts.png",
        content: "Academic Content",
        booking_fees: [
          {
            id: "ielts_academic",
            name: "IELTS Academic",
            currency: "AED",
            service_fee: 100,
            fee: 1330,
            additional_fees: [
              {
                name: "Express Shipping ",
                amount: 35,
                currency: "USD",
              },
              {
                name: "Late fees ( 7 days before exam date ) ",
                amount: 49,
                currency: "USD",
              },
            ],
          },
        ],
      },
      {
        id: "general",
        name: "General",
        image: "/images/brands/ielts.png",
        content: "General Content",
        booking_fees: [
          {
            id: "ielts_general",
            name: "IELTS General",
            currency: "AED",
            service_fee: 100,
            fee: 1330,
            additional_fees: [
              {
                name: "Express Shipping ",
                amount: 35,
                currency: "USD",
              },
              {
                name: "Late fees ( 7 days before exam date ) ",
                amount: 49,
                currency: "USD",
              },
            ],
          },
        ],
      },
    ],
  },
];
export const exams = [
  {
    id: "ielts",
    name: "IELTS",
    provider: "British Council / IDP",
    image: "/images/brands/ielts.png",
    content:
      "The world's most popular English proficiency test — accepted for university admissions, migration, and UK visas. Choose the IELTS variant that matches your goal below.",
    overview:
      "IELTS (International English Language Testing System) is the world's most popular English language proficiency test for higher education and global migration. It is accepted by more than 11,000 organizations worldwide, including universities, employers, professional bodies, and governments.",
    stats: [
      { label: "Test Duration", value: "~2.5 hours" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details:
          "4 sections, 40 items. Tasks include multiple choice, matching, plan/map/diagram labeling, and more.",
        icon: "listening",
      },
      {
        name: "Reading",
        duration: "60 min",
        details:
          "3 sections, 40 items. Tasks include identifying information, matching headings, and sentence completion.",
        icon: "reading",
      },
      {
        name: "Writing",
        duration: "60 min",
        details:
          "2 tasks. Task 1: Describe visual information. Task 2: Write an essay in response to a point of view.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details:
          "3 parts. Face-to-face interview including short questions, speaking on a familiar topic, and a structured discussion.",
        icon: "speaking",
      },
    ],
    whoShouldTake: [
      "University applicants worldwide",
      "Migration applicants (Australia, Canada, New Zealand, UK)",
      "Professional registration for healthcare workers",
      "International job seekers",
    ],
    acceptedFor: [
      "University admissions (Undergraduate & Postgraduate)",
      "Skilled migration and permanent residency",
      "UKVI visa requirements",
      "Professional certification",
    ],
    faqs: [
      {
        question:
          "What is the difference between Academic and General Training?",
        answer:
          "Academic is for university study or professional registration. General Training is for migration, work experience, or secondary education.",
      },
      {
        question: "How long does it take to get results?",
        answer:
          "Computer-delivered IELTS results are usually available in 3-5 days. Paper-based results take 13 days.",
      },
      {
        question: "Is the speaking test on the same day?",
        answer:
          "Usually yes, but it can be scheduled up to 7 days before or after your other test components.",
      },
    ],
  },
  {
    id: "ielts_academic",
    name: "IELTS Academic",
    provider: "British Council / IDP",
    subtitle: "For higher education and professional registration",
    image: "/images/brands/ielts.png",
    content:
      "The world's most popular English test for higher education and professional registration.",
    overview:
      "IELTS Academic measures whether your level of English language proficiency is suitable for an academic environment. It reflects aspects of academic language and evaluates whether you’re ready to begin training or studying.",
    stats: [
      { label: "Test Duration", value: "2 hours 45 mins" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details: "4 recorded monologues and conversations.",
        icon: "listening",
      },
      {
        name: "Academic Reading",
        duration: "60 min",
        details:
          "3 long texts which range from the descriptive and factual to the discursive and analytical.",
        icon: "reading",
      },
      {
        name: "Academic Writing",
        duration: "60 min",
        details:
          "Task 1: describe a chart, graph, or diagram. Task 2: write an essay in response to a point of view.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details: "A face-to-face interview with an examiner.",
        icon: "speaking",
      },
    ],
    whoShouldTake: [
      "Prospective undergraduate students",
      "Prospective postgraduate students",
      "Medical professionals (Doctors, Nurses, etc.)",
      "Professional registration applicants",
    ],
    acceptedFor: [
      "University admissions worldwide",
      "Medical board registration",
      "Student visa applications",
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
    id: "ielts_general",
    name: "IELTS General Training",
    provider: "British Council / IDP",
    subtitle: "For migration, work experience, or secondary education",
    image: "/images/brands/ielts.png",
    content:
      "The world's most popular English test for migration, secondary education, and work experience.",
    overview:
      "IELTS General Training measures English language proficiency in a practical, everyday context. The tasks and tests reflect both workplace and social situations.",
    stats: [
      { label: "Test Duration", value: "2 hours 45 mins" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details: "4 recorded monologues and conversations.",
        icon: "listening",
      },
      {
        name: "General Reading",
        duration: "60 min",
        details:
          "Extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines.",
        icon: "reading",
      },
      {
        name: "General Writing",
        duration: "60 min",
        details:
          "Task 1: write a letter requesting information or explaining a situation. Task 2: write an essay in response to a point of view.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details: "A face-to-face interview with an examiner.",
        icon: "speaking",
      },
    ],
    whoShouldTake: [
      "Migrants to Australia, Canada, New Zealand, and the UK",
      "Secondary school students",
      "Job seekers in English-speaking countries",
      "Vocational training applicants",
    ],
    acceptedFor: [
      "Skilled migration visas",
      "Permanent residency applications",
      "Secondary education admissions",
      "Work permits",
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
    id: "ielts_ukvi",
    name: "IELTS UKVI",
    provider: "British Council / IDP",
    subtitle: "Secure English Language Test (SELT) for UK Visas",
    image: "/images/brands/ielts.png",
    content: "IELTS for UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for visa applications to the UK.",
    overview: "IELTS for UKVI is a Secure English Language Test (SELT) that has been approved by the UK Home Office for use in UK visa applications. The test is available at various levels and variants depending on your visa requirements.",
    stats: [
      { label: "Test Duration", value: "Varies by type" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        details: "4 recorded monologues and conversations.",
        icon: "listening",
      },
      {
        name: "Reading",
        duration: "60 min",
        details: "3 long texts which range from the descriptive and factual to the discursive and analytical.",
        icon: "reading",
      },
      {
        name: "Writing",
        duration: "60 min",
        details: "Task 1: describe a chart, graph, or diagram. Task 2: write an essay in response to a point of view.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "11–14 min",
        details: "A face-to-face interview with an examiner.",
        icon: "speaking",
      },
    ],
    whoShouldTake: [
      "Family visa applicants",
      "Work visa applicants",
      "Student visa applicants (Tier 4)",
      "Citizenship applicants",
    ],
    acceptedFor: [
      "UK Visas and Immigration (UKVI)",
      "Work permits in the UK",
      "UK University admissions",
    ],
    faqs: [
      {
        question: "What is the difference between IELTS and IELTS for UKVI?",
        answer: "IELTS for UKVI is a Secure English Language Test (SELT) approved by the UK Home Office. The test content, format, scoring and level of difficulty are the same, but the Test Report Form will look slightly different.",
      },
    ],
  },
  {
    id: "ielts_ukvi_academic",
    name: "IELTS for UKVI Academic",
    provider: "British Council / IDP",
    subtitle: "For study at degree level and above in the UK",
    image: "/images/brands/ielts.png",
    content: "IELTS Academic for UKVI measures whether your level of English language proficiency is suitable for an academic environment.",
    overview: "IELTS Academic for UKVI is a Secure English Language Test (SELT) that is required for student visa applications to the UK for courses at degree level and above.",
    stats: [
      { label: "Test Duration", value: "2 hours 45 mins" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Listening", duration: "30 min", details: "4 sections, 40 items", icon: "listening" },
      { name: "Academic Reading", duration: "60 min", details: "3 long texts", icon: "reading" },
      { name: "Academic Writing", duration: "60 min", details: "2 tasks", icon: "writing" },
      { name: "Speaking", duration: "11–14 min", details: "Face-to-face interview", icon: "speaking" },
    ],
    whoShouldTake: ["Students applying for UK student visas (degree level)"],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Universities"],
    faqs: [],
  },
  {
    id: "ielts_ukvi_general",
    name: "IELTS for UKVI General Training",
    provider: "British Council / IDP",
    subtitle: "For migration and work in the UK",
    image: "/images/brands/ielts.png",
    content: "IELTS General Training for UKVI measures English language proficiency in a practical, everyday context.",
    overview: "IELTS General Training for UKVI is a Secure English Language Test (SELT) required for UK visa applications for migration, work, or secondary education.",
    stats: [
      { label: "Test Duration", value: "2 hours 45 mins" },
      { label: "Score Scale", value: "0–9 Bands" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Listening", duration: "30 min", details: "4 sections, 40 items", icon: "listening" },
      { name: "General Reading", duration: "60 min", details: "Extracts from books/magazines", icon: "reading" },
      { name: "General Writing", duration: "60 min", details: "2 tasks", icon: "writing" },
      { name: "Speaking", duration: "11–14 min", details: "Face-to-face interview", icon: "speaking" },
    ],
    whoShouldTake: ["Migrants to the UK", "Work visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)", "UK Work Permits"],
    faqs: [],
  },
  {
    id: "toefl_ibt",
    name: "TOEFL iBT",
    provider: "Educational Testing Service (ETS)",
    subtitle: "Test of English as a Foreign Language — Internet-Based Test",
    image: "/images/partners/toefl.png",
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
  {
    id: "pte",
    name: "PTE Academic",
    provider: "Pearson PLC",
    image: "/images/exams/pte.png",
    content:
      "Fast, computer-based English test for study and migration — accepted by thousands of institutions and governments worldwide.",
    overview:
      "PTE Academic is a computer-based English language test that provides a measure of a candidate's language ability in an academic context. The test is accepted by universities, colleges, and governments around the world, including Australia, Canada, New Zealand, the UK, and the USA.",
    stats: [
      { label: "Test Duration", value: "~2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Writing",
        duration: "54–67 min",
        details:
          "Personal introduction, read aloud, repeat sentence, describe image, re-tell lecture, answer short question, summarize written text, essay.",
        icon: "speaking",
      },
      {
        name: "Reading",
        duration: "29–30 min",
        details:
          "Reading & writing: Fill in the blanks, multiple-choice, re-order paragraphs, reading: Fill in the blanks.",
        icon: "reading",
      },
      {
        name: "Listening",
        duration: "30–43 min",
        details:
          "Summarize spoken text, multiple-choice, fill in the blanks, highlight correct summary, select missing word, highlight incorrect words, write from dictation.",
        icon: "listening",
      },
    ],
    whoShouldTake: [
      "Students applying to universities in Australia, New Zealand, and the UK",
      "Skilled migration applicants for Australia and New Zealand",
      "UK visa applicants (Academic and General)",
    ],
    acceptedFor: [
      "University admissions worldwide",
      "Visa applications (Australia, New Zealand, UK)",
      "Professional registration",
    ],
    faqs: [
      {
        question: "When will I get my PTE results?",
        answer: "Typically within 48 hours, often much faster.",
      },
      {
        question: "Is PTE easier than IELTS?",
        answer:
          "Both tests are rigorous. PTE is fully computer-based, which some students prefer over human-led speaking components.",
      },
    ],
  },
  {
    id: "pte_academic",
    name: "PTE Academic",
    provider: "Pearson PLC",
    subtitle: "Fast, computer-based English test for study and migration",
    image: "/images/exams/pte.png",
    content: "PTE Academic is the smart choice for students and migrants who need to demonstrate their English language proficiency.",
    overview: "PTE Academic is a computer-based English language test that measures your listening, reading, speaking, and writing skills in a single, two-hour session.",
    stats: [
      { label: "Test Duration", value: "2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Writing", duration: "54–67 min", details: "Integrated skills assessment", icon: "speaking" },
      { name: "Reading", duration: "29–30 min", details: "Multiple choice, fill in the blanks", icon: "reading" },
      { name: "Listening", duration: "30–43 min", details: "Summarize spoken text, dictation", icon: "listening" },
    ],
    whoShouldTake: ["University applicants", "Skilled migration applicants"],
    acceptedFor: ["University admissions", "Visa applications"],
    faqs: [],
  },
  {
    id: "pte_core",
    name: "PTE Core",
    provider: "Pearson PLC",
    subtitle: "For Canadian migration and work",
    image: "/images/exams/pte.png",
    content: "PTE Core is a general English test for migration to Canada and other work-related purposes.",
    overview: "PTE Core is a computer-based English language test that measures your everyday English skills for migration and work.",
    stats: [
      { label: "Test Duration", value: "2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Writing", duration: "54–67 min", details: "Integrated skills assessment", icon: "speaking" },
      { name: "Reading", duration: "29–30 min", details: "Multiple choice, fill in the blanks", icon: "reading" },
      { name: "Listening", duration: "30–43 min", details: "Summarize spoken text, dictation", icon: "listening" },
    ],
    whoShouldTake: ["Canadian permanent residency applicants", "Work permit applicants"],
    acceptedFor: ["IRCC Canadian Migration", "Work permits"],
    faqs: [],
  },
  {
    id: "pte_ukvi",
    name: "PTE UKVI (SELT)",
    provider: "Pearson PLC",
    subtitle: "Secure English Language Test (SELT) for UK Visas",
    image: "/images/exams/pte.png",
    content: "PTE Academic UKVI is a SELT approved by the UK Home Office for all UK visas that require a four-skill language test.",
    overview: "PTE Academic UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for use in UK visa applications.",
    stats: [
      { label: "Test Duration", value: "2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Writing", duration: "54–67 min", details: "Integrated skills assessment", icon: "speaking" },
      { name: "Reading", duration: "29–30 min", details: "Multiple choice, fill in the blanks", icon: "reading" },
      { name: "Listening", duration: "30–43 min", details: "Summarize spoken text, dictation", icon: "listening" },
    ],
    whoShouldTake: ["UK visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "pte_home_a1",
    name: "PTE Home A1",
    provider: "Pearson PLC",
    subtitle: "For Family and Work visas in the UK",
    image: "/images/exams/pte.png",
    content: "PTE Home A1 is a basic English test for UK Family and Work visas.",
    overview: "PTE Home A1 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Score Scale", value: "Pass/Fail" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "22 min", details: "Speaking and listening tasks only", icon: "speaking" },
    ],
    whoShouldTake: ["UK Family/Spouse visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "pte_home_a2",
    name: "PTE Home A2",
    provider: "Pearson PLC",
    subtitle: "For UK Family visa extension",
    image: "/images/exams/pte.png",
    content: "PTE Home A2 is for those applying for a UK Family visa extension.",
    overview: "PTE Home A2 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Score Scale", value: "Pass/Fail" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "22 min", details: "Speaking and listening tasks only", icon: "speaking" },
    ],
    whoShouldTake: ["UK Family visa extension applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "pte_home_b1",
    name: "PTE Home B1",
    provider: "Pearson PLC",
    subtitle: "For UK Citizenship and Settlement",
    image: "/images/exams/pte.png",
    content: "PTE Home B1 is for UK Citizenship (Naturalisation) and Settlement (Indefinite Leave to Remain).",
    overview: "PTE Home B1 is a Secure English Language Test (SELT) that measures only your speaking and listening skills.",
    stats: [
      { label: "Test Duration", value: "22 mins" },
      { label: "Score Scale", value: "Pass/Fail" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Listening", duration: "22 min", details: "Speaking and listening tasks only", icon: "speaking" },
    ],
    whoShouldTake: ["UK Citizenship and Settlement applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "pte_academic_ukvi",
    name: "PTE Academic UKVI",
    provider: "Pearson PLC",
    subtitle: "Secure English Language Test (SELT) for UK Visas",
    image: "/images/exams/pte.png",
    content: "PTE Academic UKVI is a SELT approved by the UK Home Office for all UK visas that require a four-skill language test.",
    overview: "PTE Academic UKVI is a Secure English Language Test (SELT) approved by the UK Home Office for use in UK visa applications.",
    stats: [
      { label: "Test Duration", value: "2 hours" },
      { label: "Score Scale", value: "10–90" },
      { label: "Results In", value: "48 hours" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      { name: "Speaking & Writing", duration: "54–67 min", details: "Integrated skills assessment", icon: "speaking" },
      { name: "Reading", duration: "29–30 min", details: "Multiple choice, fill in the blanks", icon: "reading" },
      { name: "Listening", duration: "30–43 min", details: "Summarize spoken text, dictation", icon: "listening" },
    ],
    whoShouldTake: ["UK visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "celpip",
    name: "CELPIP",
    provider: "Prometric",
    image: "/images/brands/celpip.png",
    content:
      "The Canadian English Language Proficiency Index Program — the leading English test for permanent residency and citizenship in Canada.",
    overview:
      "CELPIP is a general English language proficiency test. It is the only test designed specifically for Canadian English, and is accepted by Immigration, Refugees and Citizenship Canada (IRCC) for permanent resident status and citizenship.",
    stats: [
      { label: "Test Duration", value: "~3 hours" },
      { label: "Score Scale", value: "M–12" },
      { label: "Results In", value: "4–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Listening",
        duration: "47–55 min",
        details:
          "Listening to problem solving, daily life conversations, information, news items, discussions, and viewpoints.",
        icon: "listening",
      },
      {
        name: "Reading",
        duration: "55–60 min",
        details:
          "Reading correspondence, applied information, for information, and for viewpoints.",
        icon: "reading",
      },
      {
        name: "Writing",
        duration: "53–60 min",
        details:
          "Task 1: Writing an email. Task 2: Responding to survey questions.",
        icon: "writing",
      },
      {
        name: "Speaking",
        duration: "15–20 min",
        details:
          "Giving advice, talking about personal experiences, describing scenes, and making predictions.",
        icon: "speaking",
      },
    ],
    whoShouldTake: [
      "Canadian permanent residency applicants",
      "Canadian citizenship applicants",
      "Professional registration in Canada",
    ],
    acceptedFor: [
      "IRCC Permanent Resident Status",
      "Canadian Citizenship",
      "Professional registration (e.g., real estate, nursing)",
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
    id: "cael",
    name: "CAEL",
    provider: "Prometric",
    image: "/images/brands/cael.png",
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
  {
    id: "selt",
    name: "Skills for English (SELT)",
    provider: "PSI Services",
    image: "/images/brands/skills-for-english.png",
    content:
      "Home Office-approved Secure English Language Tests (SELT) for UK visa applications.",
    overview:
      "Skills for English (UKVI) is a Secure English Language Test (SELT) that has been approved by the UK Home Office for use in UK visa applications. The test is available at various levels from A1 to C2.",
    stats: [
      { label: "Test Duration", value: "Varies by level" },
      { label: "Score Scale", value: "Pass/Fail" },
      { label: "Results In", value: "3–5 days" },
      { label: "Validity", value: "2 years" },
    ],
    sections: [
      {
        name: "Speaking & Listening",
        duration: "Varies",
        details: "Core components for lower level visas (A1/A2).",
        icon: "speaking",
      },
      {
        name: "Reading & Writing",
        duration: "Varies",
        details: "Added for higher level academic or work visas (B1/B2/C1/C2).",
        icon: "reading",
      },
    ],
    whoShouldTake: ["UK Visa applicants (Family, Spouse, Work, Study)"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [
      {
        question: "Which level do I need?",
        answer:
          "The level required depends on the specific visa you are applying for. Please check the UK Home Office website.",
      },
    ],
  },
  {
    id: "psi",
    name: "PSI",
    provider: "PSI Services",
    image: "/images/psi.png",
    content:
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
    faqs: [],
  },
  {
    id: "oet",
    name: "OET",
    provider: "CBLA",
    image: "/images/exams/oet.png",
    content:
      "The Occupational English Test — the English language test specifically for healthcare professionals.",
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
    faqs: [],
  },
  {
    id: "selt_a1",
    name: "SELT A1 Speaking & Listening",
    provider: "PSI Services",
    subtitle: "For UK Family, Spouse or Partner visas",
    image: "/images/brands/skills-for-english.png",
    content: "Skills for English (UKVI) A1 is for those who need to demonstrate speaking and listening skills at level A1.",
    overview: "This test measures speaking and listening skills only. It is approved by the UK Home Office for Family, Spouse or Partner visa applications.",
    stats: [{ label: "Results In", value: "3–5 days" }, { label: "Validity", value: "2 years" }],
    sections: [{ name: "Speaking & Listening", duration: "17–22 min", details: "Face-to-face or online speaking and listening tasks", icon: "speaking" }],
    whoShouldTake: ["UK Family visa applicants", "UK Spouse visa applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "selt_a2",
    name: "SELT A2 Speaking & Listening",
    provider: "PSI Services",
    subtitle: "For UK Family visa extension",
    image: "/images/brands/skills-for-english.png",
    content: "Skills for English (UKVI) A2 is for UK Family visa extensions.",
    overview: "This test measures speaking and listening skills at level A2. It is required for extending a Family, Spouse or Partner visa after 2.5 years.",
    stats: [{ label: "Results In", value: "3–5 days" }, { label: "Validity", value: "2 years" }],
    sections: [{ name: "Speaking & Listening", duration: "17–22 min", details: "Speaking and listening tasks", icon: "speaking" }],
    whoShouldTake: ["UK Family visa extension applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
  {
    id: "selt_b1",
    name: "SELT B1 Speaking & Listening",
    provider: "PSI Services",
    subtitle: "For UK Citizenship and Settlement",
    image: "/images/brands/skills-for-english.png",
    content: "Skills for English (UKVI) B1 Speaking & Listening is for UK Citizenship and Settlement.",
    overview: "This test measures speaking and listening skills at level B1. It is approved for Indefinite Leave to Remain (Settlement) and British Citizenship applications.",
    stats: [{ label: "Results In", value: "3–5 days" }, { label: "Validity", value: "2 years" }],
    sections: [{ name: "Speaking & Listening", duration: "17–22 min", details: "Speaking and listening tasks", icon: "speaking" }],
    whoShouldTake: ["UK Citizenship applicants", "UK Settlement applicants"],
    acceptedFor: ["UK Visas and Immigration (UKVI)"],
    faqs: [],
  },
];
