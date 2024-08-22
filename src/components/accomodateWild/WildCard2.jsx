"use client"
import { useState } from 'react';
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card1 from "@/assets/Wildcard1.webp";
import card2 from "@/assets/Wildcard2.webp";
import card3 from "@/assets/Wildcard3.webp";
import card4 from "@/assets/Wildcard4.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../common/Tags';
import SocialMedia from '../common/SocialMedia';
import ThingsToDoCards from '../planyourtrip/FindThingsToDo';
export default function WildCard2() {
    const cardsData = [
        {
            id: 1,
            imageSrc: card1,
            title: 'Kiwi Journey',
            description: ' NZD $ 855.00 -  NZD $ 1065.00',
        },
        {
            id: 2,
            imageSrc: card2,
            title: 'Evening Eco Watch/Kiwi Spotting',
            description: ' NZD $ 125.00 -  NZD $ 155.00',
        },
        {
            id: 3,
            imageSrc: card3,
            title: 'Kiwi Spotting',
            description: ' NZD $ 125.00',
        },
        {
            id: 4,
            imageSrc: card4,
            title: 'Evening Kiwi Spotting at Mamaku Point With Ulvas Guided Walks',
            description: ' NZD $ 140.00 -  NZD $ 270.00',
        },
       
    ];

    const tags = ['Kiwi', 'Bird watching'];

  return (
    <div>
     <ThingsToDoCards/>
    </div>
  )
}

    
