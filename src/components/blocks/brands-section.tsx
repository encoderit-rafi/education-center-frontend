import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const brands = [
  {
    name: "CAEL",
    img: "/images/brands/cael.png",
  },
  {
    name: "CELPIP",
    img: "/images/brands/celpip.png",
  },
  {
    name: "IELTS",
    img: "/images/brands/ielts.png",
  },
  {
    name: "Skills for English",
    img: "/images/brands/skills-for-english.png",
  },
  {
    name: "TOEFL",
    img: "/images/brands/toefl.png",
  },
];

const BrandLogo = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex items-center justify-center px-12 py-4">
      <div className="relative h-12 w-32 md:h-16 md:w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out transform hover:scale-110">
        <Image src={img} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
};

export default function BrandsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <p className="mb-10 text-primary text-center text-[11px] font-bold uppercase tracking-[0.3em] lg:text-xs">
          Authorised Testing Centre For
        </p>
        <Marquee pauseOnHover className="[--duration:30s]">
          {/* Repeat brands to ensure smooth marquee if few items */}
          {brands.map((brand, index) => (
            <BrandLogo key={`${brand.name}-${index}`} {...brand} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
