import { FindUsHero } from "./_components/find-us-hero";
import { LocationMap } from "./_components/location-map";
import { TransportOptions } from "./_components/transport-options";
import { DrivingRoutes } from "./_components/driving-routes";
import { ParkingInfo } from "./_components/parking-info";

export default function HowToFindUs() {
  return (
    <main>
      <FindUsHero />
      <LocationMap />
      <TransportOptions />
      <DrivingRoutes />
      <ParkingInfo />
    </main>
  );
}
