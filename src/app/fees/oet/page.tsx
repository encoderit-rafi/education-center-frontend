import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OET Preparation Course Fees | TEPTH",
  description: "Explore our OET preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function OetFeesPage() {
  return (
    <PricingTemplate 
      courseName="OET Preparation Course"
      courseAbbr="OET"
    />
  );
}
