export interface Section {
  title?: string;
  content?: string;
  list?: { text: string; href?: string }[];
  type?: "text" | "links" | "cards";
  cardIds?: string[];
}

export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  extendedDescription: string;
  duration: string;
  investment: string;
  previousInvestment?: string;
  level: string;
  format: string;
  image: string;
  curriculum: Module[];
  eligibility: string[];
  instructor: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  sections?: Section[];
}

export const COURSES: Course[] = [
  // --- TOEFL ---
  {
    id: "toefl-ibt-prep",
    category: "TOEFL",
    title: "TOEFL IBT Test Preparation Course",
    description: "Master the skills and strategies required to achieve your target TOEFL score.",
    extendedDescription: "Crafted by experienced English native speaking instructors to unlock global opportunities.",
    duration: "Various",
    investment: "Starting from AED 1,850",
    level: "Intermediate/Advanced",
    format: "Classroom & Online",
    image: "/images/study-group.png",
    curriculum: [],
    eligibility: ["Intermediate skills required"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "What is the TOEFL IBT Test?",
        content: "TOEFL stands for Test of English as a Foreign Language. TOEFL Test is a way of evaluating your proficiency in spoken and written English as a non-native English speaker. It is important as US educational institutions use results from the test during their evaluation of foreign student applications. So, if you wish to study in the United States, you need to have good scores to show them. TOEFL IBT test preparation course Crafted by experienced English native speaking instructor. This course will give you the skills and understanding to achieve scores that will unlock the opportunities you desire in English-speaking countries."
      },
      {
        title: "Who can take TOEFL IBT Test?",
        content: "If you are looking to pursue work opportunities or any academic career within an English-speaking country. Non-native students must have intermediate or advanced English language skills, to do this course you should take. TEPTH’s TOEFL IBT exam Preparation Course is run by specialized teaching staff who understand what you need to do to get the scores you need.\n\nThey will teach students the skills required and provide highly effective test-taking strategies and tactics to get the results they want. After completing the TOEFL IBT Test Preparation Course, each student takes a complete practice exam. The TOEFL Practice test result will give you a great guide to understanding where your weaknesses and overcome that."
      },
      {
        title: "Course Options",
        type: "cards",
        cardIds: ["toefl-classroom", "toefl-online"]
      }
    ]
  },
  {
    id: "toefl-classroom",
    category: "TOEFL",
    title: "TOEFL Classroom Course",
    description: "Evaluates proficiency in spoken and written English for academic success in the US.",
    extendedDescription: "Intensive face-to-face preparation for the TOEFL IBT exam with native speakers.",
    duration: "6 Weeks",
    investment: "AED 4,850.00",
    level: "Intermediate/Advanced",
    format: "Classroom",
    image: "/images/exams/toefl.png",
    curriculum: [],
    eligibility: ["Intermediate or Advanced English skills"],
    instructor: { name: "Native Expert", role: "TOEFL Specialist", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "toefl-online",
    category: "TOEFL",
    title: "TOEFL IBT Online Course",
    description: "Flexible online preparation with the same high-quality instruction.",
    extendedDescription: "Master the skills and understanding to achieve scores that will unlock opportunities globally.",
    duration: "4 Weeks",
    investment: "AED 3,850.00",
    previousInvestment: "AED 4,000.00",
    level: "Intermediate/Advanced",
    format: "Online",
    image: "/images/exams/toefl.png",
    curriculum: [],
    eligibility: ["Computer with internet"],
    instructor: { name: "TEPTH Online", role: "Instructor", bio: "", image: "/images/student-study.png" },
  },

  // --- IELTS ---
  {
    id: "ielts-prep",
    category: "IELTS",
    title: "IELTS Preparation Course",
    description: "Prepare for the world's most popular English test for higher education.",
    extendedDescription: "Expert-led guidance for both Academic and General Training modules.",
    duration: "Various",
    investment: "Starting from AED 2,850",
    level: "All Levels",
    format: "Classroom & Online",
    image: "/images/exams/ielts.png",
    curriculum: [],
    eligibility: ["Basic English proficiency"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "What is IELTS?",
        content: "IELTS (International English Language Testing System) is designed to help you work, study or migrate to a country where English is the native language."
      },
      {
        title: "IELTS Course Options",
        type: "cards",
        cardIds: ["ielts-classroom", "ielts-online"]
      }
    ]
  },
  {
    id: "ielts-classroom",
    category: "IELTS",
    title: "IELTS Classroom Course",
    description: "Face-to-face preparation focusing on all four test components.",
    extendedDescription: "Listening, Reading, Writing, and Speaking mastery with former examiners.",
    duration: "12 Weeks",
    investment: "AED 3,850.00",
    level: "All Levels",
    format: "Classroom",
    image: "/images/exams/ielts.png",
    curriculum: [],
    eligibility: ["Basic English proficiency"],
    instructor: { name: "IELTS Expert Team", role: "Examiners", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "ielts-online",
    category: "IELTS",
    title: "IELTS Online Masterclass",
    description: "Flexible digital training with real-time feedback.",
    extendedDescription: "Learn strategic writing and speaking fluency from anywhere.",
    duration: "8 Weeks",
    investment: "AED 2,850.00",
    previousInvestment: "AED 3,500.00",
    level: "All Levels",
    format: "Online",
    image: "/images/exams/ielts.png",
    curriculum: [],
    eligibility: ["Computer with internet"],
    instructor: { name: "TEPTH Online Staff", role: "Online Tutors", bio: "", image: "/images/student-study.png" },
  },

  // --- OET ---
  {
    id: "oet-prep",
    category: "OET",
    title: "OET Preparation Course",
    description: "The English test specifically designed for healthcare professionals.",
    extendedDescription: "Prove you have the right level of English for healthcare work.",
    duration: "Various",
    investment: "Starting from AED 3,500",
    level: "Professional",
    format: "Online & Classroom",
    image: "/images/exams/oet.png",
    curriculum: [],
    eligibility: ["Healthcare degree required"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "Why OET?",
        content: "OET uses real healthcare scenarios so you'll feel more confident on test day."
      },
      {
        title: "OET Course Options",
        type: "cards",
        cardIds: ["oet-classroom", "oet-online"]
      }
    ]
  },
  {
    id: "oet-classroom",
    category: "OET",
    title: "OET Classroom Training",
    description: "Hands-on clinical communication training in person.",
    extendedDescription: "Specialized face-to-face sessions focusing on healthcare sub-tests.",
    duration: "8 Weeks",
    investment: "AED 4,500.00",
    level: "Professional",
    format: "Classroom",
    image: "/images/exams/oet.png",
    curriculum: [],
    eligibility: ["Healthcare professional"],
    instructor: { name: "Marcus Thorne", role: "Linguistics Expert", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "oet-online",
    category: "OET",
    title: "OET Online Pro",
    description: "Flexible online prep focusing on clinical writing.",
    extendedDescription: "Master referral letters and discharge summaries with our digital modules.",
    duration: "6 Weeks",
    investment: "AED 3,500.00",
    previousInvestment: "AED 4,200.00",
    level: "Professional",
    format: "Online",
    image: "/images/exams/oet.png",
    curriculum: [],
    eligibility: ["Healthcare professional"],
    instructor: { name: "TEPTH Med-Staff", role: "Certified Tutors", bio: "", image: "/images/student-study.png" },
  },

  // --- PTE ---
  {
    id: "pte-prep",
    category: "PTE",
    title: "PTE Preparation Course",
    description: "Master the Pearson Test of English with AI-based scoring strategies.",
    extendedDescription: "Learn how to optimize your performance for the PTE algorithm.",
    duration: "Various",
    investment: "Starting from AED 1,850",
    level: "Mixed",
    format: "Classroom & Online",
    image: "/images/exams/pte.png",
    curriculum: [],
    eligibility: ["Basic computer literacy"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "Master the AI",
        content: "Because PTE is scored by a machine, there are specific patterns that can boost your score."
      },
      {
        title: "PTE Course Options",
        type: "cards",
        cardIds: ["pte-classroom", "pte-online"]
      }
    ]
  },
  {
    id: "pte-classroom",
    category: "PTE",
    title: "PTE Classroom Intensive",
    description: "Deep dive into the PTE with machine-scored practice in-person.",
    extendedDescription: "Intensive training to trigger the PTE AI for maximum scores.",
    duration: "4 Weeks",
    investment: "AED 2,500.00",
    level: "Mixed",
    format: "Classroom",
    image: "/images/exams/pte.png",
    curriculum: [],
    eligibility: ["Basic computer literacy"],
    instructor: { name: "David Chen", role: "PTE Specialist", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "pte-online",
    category: "PTE",
    title: "PTE Online Core",
    description: "Focus on AI scoring mechanics from your own computer.",
    extendedDescription: "Reverse-engineering the PTE assessment criteria remotely.",
    duration: "4 Weeks",
    investment: "AED 1,850.00",
    previousInvestment: "AED 2,200.00",
    level: "Mixed",
    format: "Online",
    image: "/images/exams/pte.png",
    curriculum: [],
    eligibility: ["Stable internet"],
    instructor: { name: "TEPTH PTE Staff", role: "Online Tutors", bio: "", image: "/images/student-study.png" },
  },

  // --- CELPIP ---
  {
    id: "celpip-prep",
    category: "CELPIP",
    title: "CELPIP Preparation Course",
    description: "Master the Canadian English Language Proficiency Index Program.",
    extendedDescription: "Comprehensive training for Canadian permanent residency and citizenship.",
    duration: "Various",
    investment: "Starting from AED 1,500",
    level: "All Levels",
    format: "Classroom & Online",
    image: "/images/exams/celpip.png",
    curriculum: [],
    eligibility: ["Intending Canadian migrants"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "Canadian Context",
        content: "The CELPIP Test allows you to demonstrate your ability to function in Canada."
      },
      {
        title: "CELPIP Course Options",
        type: "cards",
        cardIds: ["celpip-classroom", "celpip-online"]
      }
    ]
  },
  {
    id: "celpip-classroom",
    category: "CELPIP",
    title: "CELPIP Classroom Training",
    description: "Preparation for Canadian permanent residency in person.",
    extendedDescription: "Face-to-face sessions focusing on Canadian accents and social contexts.",
    duration: "4 Weeks",
    investment: "AED 2,200.00",
    level: "All Levels",
    format: "Classroom",
    image: "/images/exams/celpip.png",
    curriculum: [],
    eligibility: ["Canadian migrants"],
    instructor: { name: "Canadian Prep Team", role: "Specialists", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "celpip-online",
    category: "CELPIP",
    title: "CELPIP Online Express",
    description: "Convenient online preparation for the CELPIP test.",
    extendedDescription: "Learn Canadian workplace context through our digital portal.",
    duration: "3 Weeks",
    investment: "AED 1,500.00",
    previousInvestment: "AED 1,850.00",
    level: "All Levels",
    format: "Online",
    image: "/images/exams/celpip.png",
    curriculum: [],
    eligibility: ["Computer and internet"],
    instructor: { name: "TEPTH Online Staff", role: "Digital Instructors", bio: "", image: "/images/student-study.png" },
  },

  // --- CAEL ---
  {
    id: "cael-prep",
    category: "CAEL",
    title: "CAEL Preparation Course",
    description: "Master the Canadian Academic English Language test.",
    extendedDescription: "Prepare for academic success in Canadian universities.",
    duration: "Various",
    investment: "Starting from AED 2,000",
    level: "Intermediate/Advanced",
    format: "Classroom & Online",
    image: "/images/exams/cael.png",
    curriculum: [],
    eligibility: ["Academic English required"],
    instructor: { name: "", role: "", bio: "", image: "" },
    sections: [
      {
        title: "Academic Canada",
        content: "CAEL is the definitive academic test for study in Canada."
      },
      {
        title: "CAEL Course Options",
        type: "cards",
        cardIds: ["cael-classroom", "cael-online"]
      }
    ]
  },
  {
    id: "cael-classroom",
    category: "CAEL",
    title: "CAEL Classroom Intensive",
    description: "Academic-focused preparation in a classroom setting.",
    extendedDescription: "Simulate university-level tasks like lectures and discussions.",
    duration: "6 Weeks",
    investment: "AED 2,800.00",
    level: "Intermediate/Advanced",
    format: "Classroom",
    image: "/images/exams/cael.png",
    curriculum: [],
    eligibility: ["Academic students"],
    instructor: { name: "CAEL Expert", role: "Academic Tutor", bio: "", image: "/images/student-study.png" },
  },
  {
    id: "cael-online",
    category: "CAEL",
    title: "CAEL Online Prep",
    description: "Flexible digital training for the CAEL test.",
    extendedDescription: "Master integrated tasks of the CAEL exam from anywhere.",
    duration: "5 Weeks",
    investment: "AED 2,000.00",
    previousInvestment: "AED 2,400.00",
    level: "Intermediate/Advanced",
    format: "Online",
    image: "/images/exams/cael.png",
    curriculum: [],
    eligibility: ["Stable internet"],
    instructor: { name: "TEPTH Academic Staff", role: "Online Tutors", bio: "", image: "/images/student-study.png" },
  },
];
