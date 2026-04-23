import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAEL Preparation Course Fees | TEPTH",
  description: "Explore our CAEL preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function CaelFeesPage() {
  return (
    <PricingTemplate 
      courseName="CAEL Preparation Course"
      courseAbbr="CAEL"
    />
  );
}
