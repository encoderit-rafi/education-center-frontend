import HeroSection from "@/components/blocks/hero-section";
import CourseList from "@/components/blocks/course-list";
import CoreServices from "@/components/blocks/core-services";
import ExperienceExcellence from "@/components/blocks/experience-excellence";
import Testimonials from "@/components/blocks/testimonials";
import FreeConsultation from "./free-consultation/_components/free-consultation";
import InformationSection from "@/components/blocks/information-section";
import BrandsSection from "@/components/blocks/brands-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InformationSection />
      <BrandsSection />
      <CourseList />
      <CoreServices />
      <ExperienceExcellence />
      <FreeConsultation />
      <Testimonials />
    </div>
  );
}
