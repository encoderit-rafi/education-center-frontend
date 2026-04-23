import { PricingTemplate } from "../_components/pricing-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTE Preparation Course Fees | TEPTH",
  description: "Explore our PTE preparation course plans and pricing. Choose from virtual, group, or private tutoring to achieve your target score.",
};

export default function PteFeesPage() {
  return (
    <PricingTemplate 
      courseName="PTE Preparation Course"
      courseAbbr="PTE"
    />
  );
}
