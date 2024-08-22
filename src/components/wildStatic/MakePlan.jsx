"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slider from "@/assets/Sliderimg.webp";

export default function MakePlan() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-auto mt-16">
        <div className="w-full md:w-[85%]">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image src={slider} className="w-full" alt="slide" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider} className="w-full" alt="slide" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider} className="w-full" alt="slide" />
                </CarouselItem>
              </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-xs mt-6 text-[#818181] underline text-left w-[80%]">
          <a href="#">Wild kiwi encounter - Stewart Island</a>
        </div>
      </div>
    </div>
  );
}
