import { BadgeCheck } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("NavBar.banner");

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
            {t("marqueeText")}
          </span>
        </div>
      </Marquee>
    </div>
  );
}
