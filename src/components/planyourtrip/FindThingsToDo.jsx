"use client"
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
import card4 from "@/assets/card4.png";
import Image from "next/image";
import Card from "../common/Card";

import "@/app/globals.css";
import { PiArrowRightThin } from "react-icons/pi";
import Tags from '../common/Tags';
export default function ThingsToDoCards() {
    const cardsData = [
        {
            id: 1,
            imageSrc: card1,
            title: 'Lost World Full Day Epic',
            description: 'From HKD $ 595.00',
            review: '1660',
            rating: 5
        },
        {
            id: 2,
            imageSrc: card2,
            title: 'Dart River Wilderness Jet Experience',
            description: 'From HKD $ 299.00',
            review: '2632',
            rating: 4.5,
            promo :"$803 deal available"
        },
        {
            id: 3,
            imageSrc: card3,
            title: 'KJet + Milford Sound Day Tour',
            description: 'From HKD $ 350.00',
            review: '966',
            rating: 4.5
        },
        {
            id: 4,
            imageSrc: card4,
            title: 'Deep Canyon',
            description: 'HKD $ 370.00 - HKD $ 2300.00',
            review: '353',
            rating: 5
        },
    ];

    const tags = ['Geopark Explore','History, Arts & Culture', 'Food & Drink','Walking & Hiking', 'Nature & Wildlife', 'Film Experiences'];

  return (
    <div>
      <div className="setCenter bg-[#F8F8F8] mt-10 ">
            <div className="w-[85%]  2xl:w-[70%]">
                <h1 className="boldHeadings ">Find things to do</h1>

                <p className="text-left mt-8 text-xs">Select type of activity:</p>

                <div className="flex flex-row ">
                    <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                       <Tags tags={tags}/>
                    </div>
                    <div className="flex flex-row gap-2 absolute right-14 lg:right-32  2xl:right-56 text-xs mt-4 options">
                        <Image src={Category} className="h-5 w-auto" alt="category" />
                        <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 3402 activities</p>
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
                            review={card.review}
                            rating={card.rating}
                            promo={card.promo}
                        />
                    ))}
                </div>

                <p className="text-xs text-[#767676] font-medium">
                308 Adventure activities
                </p>

                <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                    See all <PiArrowRightThin className="mt-[6px]" />
                </button>
            </div>
        </div>
    </div>
  )
}

    
