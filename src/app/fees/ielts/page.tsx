import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS Preparation Course Fees | TEPTH",
  description: "Explore our IELTS preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function IeltsFeesPage() {
  return (
    <PricingTemplate 
      courseName="IELTS Preparation Course"
      courseAbbr="IELTS"
    />
  );
}
