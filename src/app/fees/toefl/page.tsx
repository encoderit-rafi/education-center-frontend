import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOEFL Preparation Course Fees | TEPTH",
  description: "Explore our TOEFL preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function ToeflFeesPage() {
  return (
    <PricingTemplate 
      courseName="TOEFL Preparation Course"
      courseAbbr="TOEFL"
    />
  );
}
