
"use client"

import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card9 from "@/assets/card9.webp";
import card10 from "@/assets/plancard10.webp";
import card11 from "@/assets/plancard9.webp";
import card12 from "@/assets/card12.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../common/Tags';
export default function FindTransport() {
    const cardsData = [
        {
            id: 1,
            imageSrc: card12,
            title: 'Thrifty Auckland City',
            description: 'NZD $ 45.00 - NZD $ 190.00',
        },
        {
            id: 2,
            imageSrc: card9,
            title: 'Taupo Airport',
            description: 'NZD $ 80.00 - NZD $ 189.98',
        },
        {
            id: 3,
            imageSrc: card11,
            title: 'Masterton',
            description: 'NZD $ 50.00 - NZD $ 1000.00',
        },
        {
            id: 4,
            imageSrc: card10,
            title: 'Ezi Car Rental - Rotorua Airport',
            description: 'NZD $ 50.00 - NZD $ 150.00',
        },
    ];

    const tags = ['Rental cars', 'Bus & coach transport', 'Custom transfers', 'Airport shuttles', 'Motorhomes'];

    return (
        <div className="py-6">

            <h1 className="font-bold text-3xl">Find transport</h1>

            <p className="text-left mt-8 text-xs">Select type of transport:</p>

            <div className="flex flex-row ">
                <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                    <Tags tags={tags} />
                </div>
                <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-96 text-xs mt-4">
                    <Image src={Category} className="h-5 w-auto" alt="category" />
                    <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 906 transport</p>
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
                463 Rental cars
            </p>

            <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                See all <PiArrowRightThin className="mt-[6px]" />
            </button>
        </div>

    )
}


