export interface ExamWorkshop {
  id: string;
  category: string;
  title: string;
  badgeText: string;
  badgeStyle: string;
  durationStr: string;
  hoursStr: string;
  formatStr: string;
  features: string[];
}

const exam_workshops: ExamWorkshop[] = [
  {
    id: "ielts",
    category: "IELTS Academic & General Training",
    title: "IELTS Intensive Weekend Workshop",
    badgeText: "Most Popular",
    badgeStyle: "bg-primary/10 text-primary border-primary/20",
    durationStr: "2 days (Sat–Sun)",
    hoursStr: "12 hours total",
    formatStr: "In-person",
    features: [
      "Reading strategies & time management",
      "Writing Task 1 & Task 2 techniques",
      "Listening answer patterns",
      "Speaking fluency & test tips"
    ]
  },
  {
    id: "toefl",
    category: "TOEFL iBT",
    title: "TOEFL iBT Strategy Workshop",
    badgeText: "Available Online",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    durationStr: "2 days",
    hoursStr: "10 hours total",
    formatStr: "In-person / Online",
    features: [
      "Integrated writing techniques",
      "Reading passage speed strategies",
      "Speaking template frameworks",
      "Listening note-taking methods"
    ]
  },
  {
    id: "pte",
    category: "PTE Academic",
    title: "PTE Academic Fast-Track Workshop",
    badgeText: "1-Day Intensive",
    badgeStyle: "bg-green-50 text-green-700 border-green-200",
    durationStr: "1 day",
    hoursStr: "8 hours total",
    formatStr: "In-person",
    features: [
      "Enabling skills (oral fluency, spelling)",
      "Read Aloud & Repeat Sentence",
      "Summarise Written Text",
      "Re-order Paragraphs"
    ]
  },
  {
    id: "celpip",
    category: "CELPIP & CAEL",
    title: "CELPIP / CAEL Preparation Workshop",
    badgeText: "Canada Focused",
    badgeStyle: "bg-secondary/10 text-secondary border-secondary/20",
    durationStr: "2 days",
    hoursStr: "10 hours total",
    formatStr: "In-person / Online",
    features: [
      "Canadian English comprehension",
      "Writing email and survey responses",
      "Speaking task strategies",
      "Listening checkpoint techniques"
    ]
  }
];

export default exam_workshops;
