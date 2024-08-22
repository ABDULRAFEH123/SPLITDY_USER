"use client"
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card1 from "@/assets/Wildcard5.webp";
import card2 from "@/assets/Wildcard6.webp";
import card3 from "@/assets/Wildcard7.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../common/Tags';
import ThingsToDo from "../landingpage/ThingsToDo";
import ThingsToDoCards from "../planyourtrip/FindThingsToDo";
import CardSection4 from "../planyourtrip/FindPlacesToStay";
export default function WildCard1() {
    const cardsData = [
        {
            id: 1,
            imageSrc: card1,
            title: 'Stewart Island Lodge',
            description: ' NZD $ 469.00 -  NZD $ 529.00',
        },
        {
            id: 2,
            imageSrc: card2,
            title: 'Glendaruel Bed & Breakfast',
            description: ' NZD $ 145.00 -  NZD $ 275.00',
        },
        {
            id: 3,
            imageSrc: card3,
            title: 'Sails Ashore',
            description: ' NZD $ 595.00',
        },
      
       
    ];

    const tags = ['Bed & breakfast', 'Apartments','Boutique & Lodge','Motels','Backpackers & hostels'];

  return (
    <div>
     <CardSection4/>
    </div>
  )
}

    
