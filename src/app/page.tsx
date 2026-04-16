import HeroSection from "@/components/blocks/hero-section";
import CourseList from "@/components/blocks/course-list";
import CoreServices from "@/components/blocks/core-services";
import ExperienceExcellence from "@/components/blocks/experience-excellence";
import LatestBlogs from "@/components/blocks/latest-blogs";
import Testimonials from "@/components/blocks/testimonials";
import CTASection from "@/components/blocks/cta-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CourseList />
      <CoreServices />
      <ExperienceExcellence />
      <LatestBlogs />
      <Testimonials />
      <CTASection />
    </div>
  );
}
