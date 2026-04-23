import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CELPIP Preparation Course Fees | TEPTH",
  description: "Explore our CELPIP preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function CelpipFeesPage() {
  return (
    <PricingTemplate 
      courseName="CELPIP Preparation Course"
      courseAbbr="CELPIP"
    />
  );
}
