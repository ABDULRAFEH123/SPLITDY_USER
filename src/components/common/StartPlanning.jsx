"use client";
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import Gallery7 from "@/assets/Gallery7.png";
import Gallery8 from "@/assets/Gallery8.png";
import Gallery9 from "@/assets/Gallery9.png";
import Gallery10 from "@/assets/Gallery10.png";
import Gallery11 from "@/assets/Gallery11.png";
import "@/app/globals.css";
import { PiArrowRightThin } from "react-icons/pi";

export default function StartPlanning() {
  const galleryData = [
    { title: "Recommended trips and itineraries ", img: Gallery7, height: 436, width: 640, colspan: 2 },
    { title: "New Zealand climate and weather ", img: Gallery8, height: 436, width: 310, colspan: 1 },
    { title: "Health and safety ", img: Gallery9, height: 436, width: 310, colspan: 1 },
    { title: "isite Visitor Information Centres ", img: Gallery10, height: 436, width: 630, colspan: 2 },
    { title: "Care for Hong Kong", img: Gallery11, height: 436, width: 630, colspan: 2 },
  ];

  return (
    <div className="setCenter">
      <div className="w-[85%]">
        <h1 className="boldHeadings ">
          Start planning your Hong Kong holiday
        </h1>

        <div className="h-[100vh] mt-10">
          <ImageList className="" gap={10} cols={4} variant="quilted">
            {galleryData.map((item, index) => (
              <ImageListItem
                key={index}
                cols={item.colspan}
                rows={1}
                gap={2}
                style={{ height: item.height, width: item.width, position: 'relative' }}
              >
                <div className="relative">
                  <Image
                    className='cursor-pointer'
                    src={item.img}
                    alt={item.title}
                    style={{ height: item.height, width: item.width }}
                  />
                  <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5">
                    {item.title}
                    <PiArrowRightThin className='mt-[4px]' />
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}
