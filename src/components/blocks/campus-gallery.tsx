"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  {
    src: "/images/about-us/Exterior_Building.jpg",
    name: "Exterior Building",
  },
  {
    src: "/images/about-us/Entrance.jpg",
    name: "Main Entrance",
  },
  {
    src: "/images/about-us/Classroom.jpg",
    name: "Classroom",
  },
  {
    src: "/images/about-us/Classroom_1.jpg",
    name: "Classroom",
  },
  {
    src: "/images/about-us/Computer_Room_2.jpg",
    name: "Computer Room",
  },
  {
    src: "/images/about-us/Lockers.jpg",
    name: "Lockers",
  },
  {
    src: "/images/about-us/Computer_Room_3.jpg",
    name: "Computer Room",
  },
  {
    src: "/images/about-us/Computer_Room_4.jpg",
    name: "Computer Room",
  },
  {
    src: "/images/about-us/Building_Lobby.jpg",
    name: "Building Lobby",
  },
  {
    src: "/images/about-us/Building_Lobby_1.jpg",
    name: "Building Lobby",
  },
  {
    src: "/images/about-us/Parking_Area.jpg",
    name: "Parking Zone",
  },
];

export function CampusGallery() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
            Site Gallery
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Take a closer look at our state-of-the-art infrastructure and
            vibrant student spaces.
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
            {carouselImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-lg">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-medium text-lg">
                      {image.name}
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
