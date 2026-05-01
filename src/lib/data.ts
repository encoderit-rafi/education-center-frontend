const class_modes = [
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
const class_types = [
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
        name: "PTE UKVI (SELT)",
        image: "/images/pte.png",
        content: "PTE UKVI (SELT) Content",
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
    image: "/images/ielts.png",
    content: "Booking Content",
    exam_types: [
      {
        id: "academic",
        name: "Academic",
        image: "/images/ielts.png",
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
        image: "/images/ielts.png",
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
    image: "/images/ielts.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "toefl_ibt",
    name: "TOEFL iBT",
    image: "/images/toefl_ibt.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "pte",
    name: "PTE",
    image: "/images/pte.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "celpip",
    name: "CELPIP",
    image: "/images/celpip.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "cael",
    name: "CAEL",
    image: "/images/cael.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "selt",
    name: "Skills for English (SELT)",
    image: "/images/selt.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "psi",
    name: "PSI",
    image: "/images/psi.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "oet",
    name: "OET",
    image: "/images/oet.png",
    content:
      "Main Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
