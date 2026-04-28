// import { VisionMissionHero } from "@/app/about-us/vision-and-mission/_components/vision-mission-hero";
import { VisionMissionBento } from "@/app/about-us/vision-and-mission/_components/vision-mission-bento";
import { AcademicPillars } from "@/app/about-us/vision-and-mission/_components/academic-pillars";
import { VisionStatementQuote } from "@/app/about-us/vision-and-mission/_components/vision-statement-quote";

export default function VisionAndMission() {
  return (
    <main>
      {/* <VisionMissionHero /> */}
      <VisionMissionBento />
      <AcademicPillars />
      <VisionStatementQuote />
    </main>
  );
}
