"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { getAccomodation } from "@/store/user/userThunk";

export default function MakePlan({ accomodate }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccomodation());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-auto mt-16">
        <div className="w-full md:w-[85%]">
          <Carousel>
            <CarouselContent>
              {accomodate.images?.map((image, index) => (
                <CarouselItem key={index}>
               <div className="relative w-full h-[90vh]">
                  <img
                    src={image.url}
                    className="object-fill object-center"
                    priority
                    layout="fill"
                    alt={`Slide ${index + 1}`}
                  
                  />
                  </div>
                 
                </CarouselItem>
              ))}
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
