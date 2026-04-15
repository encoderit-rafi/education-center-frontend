import HeroSection from "@/components/blocks/hero-section";
import GlobalTestPartners from "@/components/blocks/global-test-partners";
import CoreServices from "@/components/blocks/core-services";
import ExperienceExcellence from "@/components/blocks/experience-excellence";
import LatestBlogs from "@/components/blocks/latest-blogs";
import Testimonials from "@/components/blocks/testimonials";
import CTASection from "@/components/blocks/cta-section";

export default function Home() {
  return (
    <main className="pt-24">
      <HeroSection />
      <GlobalTestPartners />
      <CoreServices />
      <ExperienceExcellence />
      <LatestBlogs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
