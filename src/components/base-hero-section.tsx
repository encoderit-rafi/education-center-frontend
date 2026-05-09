import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ComponentProps, PropsWithChildren } from "react";

const BaseHeroSection = ({
  image,
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"section"> & { image: string }) => {
  return (
    <section
      className={cn(`relative flex min-h-[70vh]`, className)}
      {...props}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Slider */}
      {/* <div className="absolute inset-0 z-0">
          <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
      </div> */}

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/20" />
      <div className="relative z-20 flex-1 flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default BaseHeroSection;
