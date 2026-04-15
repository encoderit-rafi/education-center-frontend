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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2JKuFQvxih1YabzrGVhPAMZUJasC224jlpywcKydWwCDWGhvxsN2XfujkewaKqscJfebVlOzM2q6DuimEzsaR6ngDvE-V6JE5faEYOEjygJMq6hPBH5P1nCw7NLETBWnKaZX-lbRhF8qvSLxoOWdCc0GZtWjcRWMg3_d4IqMqClth-NiKly5ueIY1IgTyQWgorNRk6Bn0iMLD5wE74qqmmicjdcRWobkcMRM5Iu_fQF7yLKLudQ4u8gnf9h5B26lrpIgP886_Fg",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzhlJ5BZoGrLIlwQ95AE_MOhf8xDBx_WoYjlRa1OKkpA03pN7jzvuwKhpygzp69Di22tr8G3FgjkUVuPpWi2cfwyskrpjszdTLRW1DHEtpdoAu5-sNVYH1J9XctMrl8TQO-N4VJltzZvmzlqnyuhOdqhVEm8UFEgigxoDyowh2LT_jQYO-7gF41M_nyuEVbR0D3FK-VPj1BZGmlLKNFrz3uzozzKFI9vOlJRfsKb2eef_cMYLVjSmd_vU2HTHabRLkXTuz7iAO5A",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqxmx8PThX49cLQoH9XIClXkTVc-ZtgmqenJwnOGcaYHdjuS2blxFzpwFkEDN30Dr2rMLRITFEZ53lnuZeDLsdZp9T1vqdKoCgCTdcY-fkG_LfvR0yZn2Kx6lsEACx27atWucHRaiYbpYKD0vFSLJotrS1fmHVYOrNETPvO_C0-KTISNsDphCswTpFM-4AqnIOS3n1FaJWbS3EPhkpsy2HITKVLdjYuN6cmD7R5i8I2z8EA82Gwo8K_Vso5Br9VWs_ex6SabDrpw",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApToKIe3jnZMfPPznyWTzE1eZeyTKLgwYkj5TcOlT5LsJnzClzudH__2qDiW6b_a4OPMwpR2F7BXk_qps0cQbOiEH8x8sjWiphrK-vHevVuQZMkijKLK2uUWmEAa--gAyA_um5WDT_X4tE5B-YEKKUp7dgnWemM1dPHCUNIekGs1fhgnJoW96zhUgeX-I-XmIzy-uqvxKzszh_dHU1lR-Sxjmg4w830wheDVhMTwGWFC_DIGQbq0XqQGPJTdTOZ8E2ZCNxBfr_ww",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHKSKDcpn4tFaXKqUZmyu4yCa1XYhcYyK6yX5nu0mPIBDyQ8lIC1vYfkCMfO5mxX0LOvqQyQO-cdbXw_W4R-KeMpqH5H3KYZ-3gT4x6J4U5HgYZBP3bvdhOVj4pjLj_bLu-fkZOcH1ds_wYM0Y0lFj8KFpSWftVRdZFW91t2ly4ZRtdLeGeriFjJa0_B_6JpTcG5bmQtcrFaVK4Dq3nua0On0XEXifhBsJ3RCWkf0ENBa4sZ9ZMIxiCcf-V2D_PNPflKHbBRAr6A",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGClr147e9nNf6T1oF_HXFPuiHDGvGhR_9Pc9ZR4aG69IDT5Vs7bebFSIz29h-hGNuuWlVtjoK1SZmHFznHlpe89d9yBD2k8XVjXgh2QOXSQto8mYjDCe937ysgaQ9NdaB-tqiosyBu0R_RTdb9nn-zBO9Oj3CniBhP2nBbuzTevSfoZhit7L7P2gPU6buhbxv920zQcExrJPlH4zjruju_1Tcol8-7Y0Kba_t5GzWZ5Qwyfq_8ngOkUabEjaSvNR7Sphd17Lhig",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf5RQQYIjazajJIpuK2ZZ-w1DG3p0xEZ0le74ybuAi8wiWD3tRkQU8RmCv26BTTWUz_vqqlm4uCDuLOdhq89nmM3LGG_lZ0bufDTCS-m4Cp8JV3Ljq4X66s7X5XrWORRge3CdV2kgqTe7YgP_qoHxbSX04KOhE9M_gMGvPYcze7wZmqQfr7T1m5lwLbL_d3rnINWEY0I568M-b0cYFEgXZtTJNaTxhHqHJN40okNkT5APFhu5X-Esk6qRD-30CR2WQa47Ewkcv5w",
    },
  },
];
