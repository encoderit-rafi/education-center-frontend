import { BadgeCheck } from "lucide-react";
import { Marquee } from "../ui/marquee";

export default function Banner() {
  return (
    <div className="hidden md:block bg-primary text-white">
      {/* <div className="container mx-auto flex h-8 items-center justify-center base-px text-[11px]">
      </div> */}
      <Marquee
        pauseOnHover
        className="[--duration:15s] max-w-3xl overflow-hidden mx-auto flex h-8 items-center justify-center base-px text-[11px]"
      >
        <div className="flex items-center gap-2 text-white">
          <BadgeCheck className="text-yellow-300 size-3" />
          <span className="font-medium tracking-wide">
            Authorised Test Centre &nbsp;·&nbsp; IELTS &nbsp;·&nbsp; TOEFL iBT
            &nbsp;·&nbsp; PTE &nbsp;·&nbsp; CELPIP G &nbsp;·&nbsp; Skills for
            English (SELT) . Save up to 20% when you book your exam and register for the course with TEPTH and pay online on our website
          </span>
        </div>
      </Marquee>
    </div>
  );
}
