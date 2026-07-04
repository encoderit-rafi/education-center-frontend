import HeroSection from "@/components/blocks/hero-section";
import CourseList from "@/components/blocks/course-list";
import CoreServices from "@/components/blocks/core-services";
import ExperienceExcellence from "@/components/blocks/experience-excellence";
import Testimonials from "@/components/blocks/testimonials";
import FreeConsultation from "./free-consultation/_components/free-consultation";
import ExperienceSection from "@/components/blocks/experience-section";
import ApartSection from "@/components/blocks/apart-section";
import BrandsSection from "@/components/blocks/brands-section";
import WhyChooseUs from "@/components/blocks/why-choose-us";
import { CampusGallery } from "@/components/blocks/campus-gallery";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <BrandsSection />
      <CourseList />
      <ApartSection />
      <CoreServices />
      <WhyChooseUs />
      <ExperienceExcellence />
      <CampusGallery />
      <Testimonials />
      <FreeConsultation />
    </div>
  );
}
