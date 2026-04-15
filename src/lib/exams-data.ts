export interface Exam {
  id: string;
  category: "IELTS" | "OET" | "PTE";
  title: string;
  description: string;
  fee: number;
  icon: string;
  modules: string[];
  duration: string;
  featured?: boolean;
}

export const EXAMS: Exam[] = [
  {
    id: "ielts-computer",
    category: "IELTS",
    title: "IELTS on Computer",
    description: "Faster results (3-5 days) and modern testing interface. Ideal for tech-savvy candidates.",
    fee: 1150,
    icon: "computer",
    modules: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "2h 45m",
    featured: true,
  },
  {
    id: "ielts-paper",
    category: "IELTS",
    title: "IELTS on Paper",
    description: "The traditional format using pen and paper. Results available in 13 days.",
    fee: 1150,
    icon: "edit_note",
    modules: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "2h 45m",
  },
  {
    id: "oet-medicine",
    category: "OET",
    title: "OET Medicine",
    description: "Specifically designed for doctors. Widely accepted by healthcare boards globally.",
    fee: 1650,
    icon: "medical_services",
    modules: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "3h",
  },
  {
    id: "pte-academic",
    category: "PTE",
    title: "PTE Academic",
    description: "AI-based scoring with incredibly fast turnaround. Results often in 48 hours.",
    fee: 980,
    icon: "analytics",
    modules: ["Speaking & Writing", "Reading", "Listening"],
    duration: "2h",
  },
];

export const VENUES = [
  { id: "abu-dhabi", name: "Abu Dhabi Training Center", address: "Hamdan Street, Abu Dhabi" },
  { id: "dubai", name: "Dubai Excellence Hub", address: "Sheikh Zayed Road, Dubai" },
];

export interface TestSlot {
  id: string;
  examId: string;
  category: string;
  date: string;
  time: string;
  venueId: string;
  status: "Open" | "Filling Fast" | "Closed";
}

export const TEST_SCHEDULE: TestSlot[] = [
  { id: "s1", examId: "ielts-computer", category: "IELTS", date: "Oct 24, 2024", time: "09:00 AM", venueId: "abu-dhabi", status: "Filling Fast" },
  { id: "s2", examId: "ielts-paper", category: "IELTS", date: "Oct 26, 2024", time: "10:00 AM", venueId: "dubai", status: "Open" },
  { id: "s3", examId: "pte-academic", category: "PTE", date: "Nov 02, 2024", time: "02:00 PM", venueId: "dubai", status: "Open" },
  { id: "s4", examId: "oet-medicine", category: "OET", date: "Nov 15, 2024", time: "08:30 AM", venueId: "abu-dhabi", status: "Open" },
  { id: "s5", examId: "ielts-computer", category: "IELTS", date: "Nov 20, 2024", time: "09:00 AM", venueId: "dubai", status: "Closed" },
];
