"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

const IMAGE_SRCS = [
  "/images/about-us/Exterior_Building.jpg",
  "/images/about-us/Entrance.jpg",
  "/images/about-us/Classroom.jpg",
  "/images/about-us/Classroom_1.jpg",
  "/images/about-us/Computer_Room_2.jpg",
  "/images/about-us/Lockers.jpg",
  "/images/about-us/Computer_Room_3.jpg",
  "/images/about-us/Computer_Room_4.jpg",
  "/images/about-us/Building_Lobby.jpg",
  "/images/about-us/Building_Lobby_1.jpg",
  "/images/about-us/Parking_Area.jpg",
];

export function CampusGallery() {
  const t = useTranslations("HomePage.CampusGallery");
  const images = t.raw("images") as { name: string }[];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t("description")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {IMAGE_SRCS.map((src, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-lg">
                  <img
                    src={src}
                    alt={images[index]?.name ?? ""}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-medium text-lg">
                      {images[index]?.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
