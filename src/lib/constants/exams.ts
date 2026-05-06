import { Trophy, Award, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export const EXAMS = [
  {
    id: "ielts",
    title: "IELTS",
    shortTitle: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "Master the world's most popular English proficiency test for higher education and global migration. Our expert-led programs ensure you achieve your target band score.",
    highlights: [
      "Accepted by 11,000+ organizations",
      "Available in 140+ countries",
      "Academic & General Training modules",
    ],
    icon: Trophy,
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    shortTitle: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description:
      "Excel in academic English communication. The TOEFL iBT is preferred by universities in the USA, Canada, and across the globe for undergraduate and postgraduate studies.",
    highlights: [
      "Preferred by USA/Canada universities",
      "Accepted by 11,500+ institutions",
      "Focus on academic communication",
    ],
    icon: Award,
  },
  {
    id: "pte-academic",
    title: "PTE Academic",
    shortTitle: "PTE",
    fullName: "Pearson Test of English",
    description:
      "A fast, computer-based English test with results typically delivered within 48 hours. Our training leverages AI-scoring insights to maximize your performance.",
    highlights: [
      "Fast results (48-hour turnaround)",
      "AI-driven objective scoring",
      "Highly trusted for Australia & NZ",
    ],
    icon: Sparkles,
  },
  {
    id: "celpip-general",
    title: "CELPIP General",
    shortTitle: "CELPIP",
    fullName: "Canadian English Language Proficiency Index Program",
    description:
      "The definitive test for Canadian Permanent Residency and Citizenship. Our courses focus on practical, real-life Canadian English scenarios.",
    highlights: [
      "Approved for IRCC applications",
      "Practical real-life scenarios",
      "100% Canadian English context",
    ],
    icon: ShieldCheck,
  },
  {
    id: "selt",
    title: "Skills for English (SELT)",
    shortTitle: "SELT",
    fullName: "Secure English Language Test",
    description:
      "Essential for UK visa and immigration applications. We provide specialized training for work, family, and settlement visa requirements (A1-C2).",
    highlights: [
      "UK Home Office approved",
      "Work, Family & Settlement visas",
      "Official SELT-certified preparation",
    ],
    icon: CheckCircle2,
  },
];

export const EXAM_PREPARATION_COURSES_LINKS = EXAMS.map((item) => ({
  label: item.title,
  href: `/exam-preparation-courses/${item.id}`,
}));
