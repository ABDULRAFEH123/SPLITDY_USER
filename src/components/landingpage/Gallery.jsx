"use client";
import "@/app/globals.css";
import Gallery1 from "@/assets/Gallery1.webp";
import Gallery2 from "@/assets/Gallery2.webp";
import Gallery3 from "@/assets/Gallery3.webp";
import Gallery4 from "@/assets/Gallery4.webp";
import Gallery5 from "@/assets/Gallery5.webp";
import Gallery6 from "@/assets/Gallery6.webp";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";

export function GalleryComponent() {


  const itemData = [
    {
      title: "Geopark Explore",
      img: Gallery1,
     
    },
    {
      title: "Food & Drink ",
      img: Gallery2,
     
    },
    {
      title: "Walking & hiking",
      img: Gallery3,
   
    },
    {
      title: "Nature & Wildlife",
      img: Gallery4,
     
    },
    {
      title: "Film Experiences ",
      img: Gallery5,
    
    },
    {
      title: "History, Art & Culture ",
      img: Gallery6,
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-[#3B5998] from-80% to-white to-20% h-fit overflow-y-scroll text-white">
      <div className="flex justify-center items-center">
        <div className="w-[85%]  mx-5 md:mx-14 2xl:w-[70%]">
        
          <div className="mt-24">
            <h1 className="boldHeadings sm:text-3xl lg:text-5xl">Must do Hong Kong experiences</h1>
          </div>
          <div className="my-10 ">
        
                    <div className="grid grid-cols-12 gap-3">
                        {itemData.map((image, index) => (
                            <div
                                key={index}
                                className={`relative ${[0, 5].includes(index) ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
                                >
                                <Image src={image.img} alt="img"  />
                                <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% "> </div>

                                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5  2xl:text-lg">
                                    {image.title}
                                    <PiArrowRightThin className="mt-[4px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
     
          </div>
        </div>
  
  );
}
