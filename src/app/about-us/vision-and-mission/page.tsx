import { VisionMissionHero } from "@/app/about-us/vision-and-mission/_components/vision-mission-hero";
import { VisionMissionContent } from "@/app/about-us/vision-and-mission/_components/vision-mission-content";
import { VisionMissionValues } from "@/app/about-us/vision-and-mission/_components/vision-mission-values";

export default function VisionAndMission() {
  return (
    <main>
      <VisionMissionHero />
      <VisionMissionContent />
      <VisionMissionValues />
      {/* Additional sections for Vision, Mission, and Values can be added here */}
    </main>
  );
}
