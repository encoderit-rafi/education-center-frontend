import HeroSection from "@/components/blocks/hero-section";
import CourseList from "@/components/blocks/course-list";
import CoreServices from "@/components/blocks/core-services";
import ExperienceExcellence from "@/components/blocks/experience-excellence";
import Testimonials from "@/components/blocks/testimonials";
import FreeConsultation from "./free-consultation/_components/free-consultation";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CourseList />
      <CoreServices />
      <ExperienceExcellence />
      <Testimonials />
      <section className="py-16 px-4 md:py-32 md:px-8">
        <FreeConsultation />
      </section>
    </div>
  );
}
