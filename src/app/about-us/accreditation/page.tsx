// import { AccreditationHero } from "./_components/accreditation-hero";
import { PartnershipGrid } from "./_components/partnership-grid";
import { CertificationBento } from "./_components/certification-bento";
import { LocalAuthorities } from "./_components/local-authorities";

export default function Accreditation() {
  return (
    <main>
      {/* <AccreditationHero /> */}
      <PartnershipGrid />
      <LocalAuthorities />
      <CertificationBento />
    </main>
  );
}
