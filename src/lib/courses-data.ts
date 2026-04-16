export interface Module {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  extendedDescription: string;
  duration: string;
  investment: string;
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
}

export const COURSES: Course[] = [
  {
    id: "ielts-excellence",
    category: "IELTS",
    title: "IELTS Academic Excellence",
    description: "Comprehensive preparation focusing on all four components: Listening, Reading, Writing, and Speaking with expert tutors.",
    extendedDescription: "This masterclass is designed for high-achieving students aiming for a Band 8.0 or higher. We combine rigorous linguistic training with advanced test-taking strategies. You will engage in daily mock speaking sessions, detailed writing feedback loops, and intensive listening drills using authentic academic materials.",
    duration: "12 Weeks",
    investment: "$499",
    level: "Advanced",
    format: "Hybrid (Online + In-Person)",
    image: "/images/exams/ielts.png",
    curriculum: [
      { title: "Module 1: The Foundations of Academic English", description: "Standardizing your grammar and vocabulary for the formal IELTS context." },
      { title: "Module 2: Analytical Reading Strategies", description: "Mastering skim-scanning and inference in complex academic texts." },
      { title: "Module 3: Structured Argumentative Writing", description: "Developing Task 2 essays with logical cohesion and lexical resource." },
      { title: "Module 4: Eloquent Speaking & Fluency", description: "Enhancing part 2 and 3 speaking responses with natural idiomatic language." },
    ],
    eligibility: [
      "Minimum CEFR B2 Level",
      "Standard laptop/tablet for mock tests",
      "Commitment to 10 hours of weekly self-study",
    ],
    instructor: {
      name: "Dr. Elizabeth Sterling",
      role: "Senior IELTS Lead Examiner",
      bio: "With over 15 years of experience in British Council examination standards, Dr. Sterling has helped thousands of students achieve Band 8.5+.",
      image: "/images/student-study.png",
    },
  },
  {
    id: "oet-healthcare",
    category: "OET",
    title: "OET for Healthcare Pros",
    description: "Specialized English language test for healthcare professionals who wish to register and practice in English-speaking environments.",
    extendedDescription: "The Occupational English Test (OET) requires more than just language proficiency; it requires clinical communication competence. This course uses real-world healthcare scenarios to refine your professional language skills across all 12 OET sub-tests.",
    duration: "8 Weeks",
    investment: "$550",
    level: "Professional",
    format: "Online Proctored",
    image: "/images/exams/oet.png",
    curriculum: [
      { title: "Module 1: Clinical Communication Skills", description: "Patient-centered communication and rapport building." },
      { title: "Module 2: Professional Medical Writing", description: "Mastering referral letters and clinical discharge summaries." },
      { title: "Module 3: Medical Listening in Context", description: "Decoding complex interactions between medical staff and patients." },
    ],
    eligibility: [
      "Qualified healthcare professional",
      "Intermediate to Advanced English proficiency",
    ],
    instructor: {
      name: "Marcus Thorne",
      role: "Medical Linguistics Expert",
      bio: "Marcus specializes in the intersection of healthcare professional standards and English language assessment.",
      image: "/images/student-study.png",
    },
  },
  {
    id: "spoken-english",
    category: "Spoken",
    title: "Advanced Spoken English",
    description: "Master the art of conversation and public speaking. Focus on pronunciation, intonation, and cultural nuances.",
    extendedDescription: "Step beyond textbook English. This program focuses on 'Active Fluency'—the ability to articulate complex ideas with precision and confidence in both social and high-stakes professional settings.",
    duration: "6 Weeks",
    investment: "$299",
    level: "Intermediate+",
    format: "In-Person Workshop",
    image: "/images/about-us/mission-student.png",
    curriculum: [
      { title: "Module 1: Phonetics & Intonation", description: "Reducing native-language interference and mastering sentence stress." },
      { title: "Module 2: The Art of Impromptu Speech", description: "Thinking on your feet and structuring thoughts instantly." },
      { title: "Module 3: Cultural Nuance & Idioms", description: "Using natural English placeholders and idiomatic expressions correctly." },
    ],
    eligibility: [
      "Open to all learners above A2 level",
      "Willingness to participate in group debates",
    ],
    instructor: {
      name: "Sarah Jenkins",
      role: "Public Speaking Coach",
      bio: "Sarah is a former TEDx speaker coach with a focus on non-native English speaker empowerment.",
      image: "/images/student-study.png",
    },
  },
  {
    id: "pte-core",
    category: "PTE",
    title: "PTE Academic Core",
    description: "Intensive training for the Pearson Test of English Academic. Learn strategies for the AI-based scoring system.",
    extendedDescription: "PTE Academic is scored by advanced AI algorithms. Our course reverse-engineers the assessment criteria to ensure you maximize your score in speaking, writing, and integrated tasks.",
    duration: "4 Weeks",
    investment: "$350",
    level: "Mixed",
    format: "Online Intensive",
    image: "/images/exams/pte.png",
    curriculum: [
      { title: "Module 1: AI Scoring Mechanics", description: "Understanding how the PTE algorithm evaluates spoken fluency." },
      { title: "Module 2: Integrated Task Mastery", description: "Optimizing Read Aloud and Repeat Sentence performance." },
    ],
    eligibility: [
      "Basic computer literacy",
      "Stable internet connection",
    ],
    instructor: {
      name: "David Chen",
      role: "PTE Specialist",
      bio: "David has assisted over 500 students in achieving a perfect 90 in PTE Academic.",
      image: "/images/student-study.png",
    },
  },
  {
    id: "corporate-pro",
    category: "Business",
    title: "Corporate English Pro",
    description: "Tailored for the professional world. Focus on email etiquette, presentation skills, and high-level negotiation.",
    extendedDescription: "Effective leadership requires effective communication. This program is designed for executives and managers who need to project authority and clarity in global business environments.",
    duration: "10 Weeks",
    investment: "$599",
    level: "Executive",
    format: "Corporate Group / One-on-One",
    image: "/images/about-us/experience-student.png",
    curriculum: [
      { title: "Module 1: Strategic Emailing", description: "Clarity, brevity, and tone management in professional correspondence." },
      { title: "Module 2: High-Stakes Negotiation", description: "Persuasive language and tactical communication in boardrooms." },
    ],
    eligibility: [
      "Current professional role",
      "B1+ English level",
    ],
    instructor: {
      name: "Olivia Vane",
      role: "Corporate Coach",
      bio: "Olivia has consulted for Fortune 500 companies on cross-cultural communication efficiency.",
      image: "/images/student-study.png",
    },
  },
  {
    id: "academic-writing",
    category: "Research",
    title: "Academic Writing Masterclass",
    description: "Learn the structural and linguistic requirements for published academic papers and graduate-level dissertations.",
    extendedDescription: "Publishing in high-impact journals requires a specific stylistic rigor. This masterclass guides you through the entire writing process, from abstract construction to handling peer-review responses.",
    duration: "14 Weeks",
    investment: "$650",
    level: "Postgraduate",
    format: "Mentorship Lab",
    image: "/images/about-us/vision-hero.png",
    curriculum: [
      { title: "Module 1: The Anatomy of a Research Paper", description: "Structuring IMRAD sections for maximum impact." },
      { title: "Module 2: Advanced Coherence & Flow", description: "Linking complex ideas with sophisticated transitionals." },
    ],
    eligibility: [
      "Currently enrolled in or completed a degree program",
      "Fluent academic reading proficiency",
    ],
    instructor: {
      name: "Prof. Arthur Penhaligon",
      role: "Academic Editor",
      bio: "Arthur is a frequent contributor to international linguistics journals and an expert in academic stylistic standards.",
      image: "/images/student-study.png",
    },
  },
];
