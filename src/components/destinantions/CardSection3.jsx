
"use client"

import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card13 from "@/assets/card13.webp";
import card14 from "@/assets/card14.webp";
import card15 from "@/assets/card15.webp";
import card16 from "@/assets/card16.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../common/Tags';
export default function CardSection3() { 
    const cardsData = [
    {
        id: 1,
        imageSrc: card13,
        title: 'Private - West Coast Photography Tour - 3 Days',
        description: 'From NZD $ 2900.00',
    },
    {
        id: 2,
        imageSrc: card14,
        title: 'Bike the Canterbury Backcountry Trail - PureTrails NZ',
        description: 'From NZD $ 1725.00',
    },
    {
        id: 3,
        imageSrc: card15,
        title: 'Bike the Otago Rail Trail - PureTrails NZ',
        description: 'From NZD $ 1725.00',
    },
    {
        id: 4,
        imageSrc: card16,
        title: 'Treasures of the West Coast Tour Package with Hokitika Scenic Tours',
        description: 'From NZD $ 509.00',
    },
];

const tags = ['Guided Tours', 'Group Tours','Independent Tours'];

return (
<div>
   <div className="setCenter bg-[#F8F8F8]  ">
        <div className="w-[85%]  2xl:w-[70%]">
            <h1 className="font-bold text-3xl">Find a multi-day tour</h1>

            <p className="text-left mt-8 text-xs">Select type of tour:</p>

            <div className="flex flex-row ">
                <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                   <Tags tags={tags}/>
                </div>
                <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-96 text-xs mt-4">
                    <Image src={Category} className="h-5 w-auto" alt="category" />
                    <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 1020 tours</p>
                    <span className="text-[#D8D8D8]">|</span>
                    <Image src={Map} className="h-5 w-auto ml-2" alt="map" />
                    <p className="text-[#41913C] cursor-pointer hidden lg:hidden xl:block">Map View</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-6 my-10">
                {cardsData.map((card) => (
                    <Card 
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <p className="text-xs text-[#767676] font-medium">
            489 Guided Tours
            </p>

            {/* <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                See all <PiArrowRightThin className="mt-[6px]" />
            </button> */}
        </div>
    </div>

</div>
)
}


