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
      {/* Content */}
      {/* <div className="container relative z-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-7xl font-headline font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Prep Smarter <br />
            <span className="text-primary italic relative">
              Score
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-50" />
            </span>{" "}
            Higher
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Empowering students with skilled instructors and premium resources
            to achieve their language goals and global recognition.
          </p>

      
        </div>
      </div> */}
    </section>
  );
};

export default BaseHeroSection;
