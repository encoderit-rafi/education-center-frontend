import { Metadata } from "next";
import TestDayGuidelinesClient from "./_components/test-day-guidelines-client";

export const metadata: Metadata = {
  title: "Test Day Guidelines | TEPTH",
  description: "Official guide and requirements for candidates taking IELTS, PTE, and OET exams at TEPTH centers.",
};

export default function TestDayGuidelinesPage() {
  return <TestDayGuidelinesClient />;
}
