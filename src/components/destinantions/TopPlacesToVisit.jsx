"use client"
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Gallery1 from "@/assets/place1.webp";
import Gallery2 from "@/assets/place2.webp";
import Gallery3 from "@/assets/place3.webp";
import Gallery4 from "@/assets/place4.webp";
import Gallery5 from "@/assets/place5.webp";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DynamicText from "../common/DynamicText";

export default function TopPlacesToVisit() {


  const itemData = [
    {
      title: "Explore all regions ",
      img: Gallery1,

    },
    {
      title: "Ninepin Islands",
      img: Gallery2,

    },
    {
      title: "Geopark Explore ",
      img: Gallery3,

    },
    {
      title: "Devil’s Fist, Port Island and Grass Island",
      img: Gallery4,

    },
    {
      title: "Four Sea Arches and Volcanic Rock ",
      img: Gallery5,
    },

  ];
  const heading = "Top places to visit"
  // const txt="From mountains to sand dunes, turquoise seas to glacial lakes, New Zealand's stunning landscapes and natural geography is amazing whichever corner you decide to explore."
  return (
    <div>

      <DynamicText heading={heading} />
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
