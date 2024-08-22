"use client"

import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card17 from "@/assets/card17.webp";
import card18 from "@/assets/card18.webp";
import card19 from "@/assets/card19.webp";
import card20 from "@/assets/card20.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../common/Tags';
export default function PlacesToStayCard() { 
    const cardsData = [
    {
        id: 1,
        imageSrc: card17,
        title: 'Release Wanaka - Brownston Street',
        description: 'From HKD $ 1430.00',
    },
    {
        id: 2,
        imageSrc: card18,
        title: 'Bloxham House',
        description: 'HKD $ 2500.00 - HKD $ 3500.00',
    },
    {
        id: 3,
        imageSrc: card19,
        title: 'Release Wanaka - The Banya',
        description: 'From HKD $ 800.00',
    },
    {
        id: 4,
        imageSrc: card20,
        title: 'Release Wanaka - Morrows Mead',
        description: 'HKD $ 1250.00 - HKD $ 1315.00',
    },
];

const tags = ['Apartments', 'Camping','Boutique & Lodge','Backpackers and Hostels','Hotels'];

return (
<div>
   <div className="setCenter bg-[#F8F8F8]  ">
        <div className="w-[85%]  2xl:w-[70%]">
            <h1 className="font-semibold font-serif text-3xl lg:text-5xl mt-6">Find places to stay</h1>

            <p className="text-left mt-8 text-xs">Select type of accommodation:</p>

            <div className="flex flex-row ">
                <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                   <Tags tags={tags}/>
                </div>
                <div className="flex flex-row gap-2 absolute right-14 lg:right-32  2xl:right-56 text-xs mt-4 options">
                <Image src={Category} className="h-5 w-auto" alt="category" />
                    <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 3517 accommodation</p>
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
            994 Apartments
            </p>

            {/* <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                See all <PiArrowRightThin className="mt-[6px]" />
            </button> */}
        </div>
    </div>

</div>
)
}


