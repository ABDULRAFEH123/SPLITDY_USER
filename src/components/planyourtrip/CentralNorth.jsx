"use client"
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import img1 from "@/assets/central.webp"
import img2 from "@/assets/central1.webp"
import img3 from "@/assets/central2.webp"
import img4 from "@/assets/central3.webp"
import img5 from "@/assets/central4.webp"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DynamicText from "../common/DynamicText";

const heading = "Top places to visit"
const txt = "From the stunning beaches in Coromandel to Rotorua's geothermal wonderland, here are some spots in central North Island you shouldn't miss."
export default function CentralNorth() {


  const itemData = [
    {
      title: "Ninepin Islands  ",
      img: img1,
  
    },
    {
      title: "High Island & Po Pin Chau",
      img: img2,
  
    },
    {
      title: "Top 20 beautiful beaches ",
      img: img3,
   
    },
    {
      title: "Devil’s Fist, Port Island and Grass Island  ",
      img: img4,
    
    },
    {
      title: " Ung Kong Group",
      img: img5,
 
    },

  ];
  return (
    <div>
      <DynamicText heading={heading}  />
      <div className="setCenter mt-6">
        <div className="w-[85%] 2xl:w-[70%] mt-2">
          <div className="grid grid-cols-12 gap-3">
            {itemData.map((image, index) => (
              <div
                key={index}
                className={`relative ${[0, 3, 4].includes(index) ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
              >
                <Image src={image.img} alt="img" />
                <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 2xl:text-lg ">
                  {image.title}
                  <PiArrowRightThin className="mt-[4px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
