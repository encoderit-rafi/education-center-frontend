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
    src: "/images/about-us/about-us-1.jpg",
    name: "Main Reception & Welcome Desk",
  },
  {
    src: "/images/about-us/about-us-2.jpg",
    name: "Shoe Rack Area",
  },
  {
    src: "/images/about-us/about-us-3.jpg",
    name: "Computer Lab",
  },
  {
    src: "/images/about-us/about-us-4.jpg",
    name: "Computer Lab",
  },
  {
    src: "/images/about-us/about-us-5.jpg",
    name: "High-Tech Test Delivery Center",
  },
  {
    src: "/images/about-us/about-us-6.jpg",
    name: "Smart Classroom & Learning Studio",
  },
  {
    src: "/images/about-us/about-us-7.jpg",
    name: "Smart Classroom & Learning Studio",
  },
  {
    src: "/images/about-us/about-us-8.jpg",
    name: "Interactive Group Discussion Area",
  },
  {
    src: "/images/about-us/about-us-9.jpg",
    name: "Lobby",
  },
  {
    src: "/images/about-us/about-us-10.jpg",
    name: "Extrior Building View",
  },
  {
    src: "/images/about-us/about-us-11.jpg",
    name: "Car Parking Zone",
  },
  {
    src: "/images/about-us/who-we-are-1.jpg",
    name: "Reception Area",
  },
  {
    src: "/images/about-us/who-we-are-2.jpg",
    name: "Advanced Multimedia Training Room",
  },
];

export function CampusGallery() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-extrabold text-secondary tracking-tight mb-4">
            Campus Gallery
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Take a closer look at our state-of-the-art infrastructure and vibrant
            student spaces.
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
