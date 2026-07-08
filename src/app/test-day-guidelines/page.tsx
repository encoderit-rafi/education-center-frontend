import { Metadata } from "next";
import TestDayGuidelines from "./test-day-guidelines";

export const metadata: Metadata = {
  title: "Test Day Guidelines | TEPTH",
  description: "Official guide and requirements for candidates taking IELTS, PTE, and OET exams at TEPTH centers.",
};

export default function TestDayGuidelinesPage() {
  return <TestDayGuidelines />;
}
