import { WhoWeAreHero } from "./_components/who-we-are-hero";
import { HeritageBento } from "./_components/heritage-bento";
import { AcademicSolutions } from "./_components/academic-solutions";
import { MissionQuote } from "./_components/mission-quote";

export default function WhoWeAre() {
  return (
    <main>
      <WhoWeAreHero />
      <HeritageBento />
      <AcademicSolutions />
      <MissionQuote />
    </main>
  );
}
