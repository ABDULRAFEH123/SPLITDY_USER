"use client";
import "@/app/globals.css";

import gal1 from "@/assets/gal1.webp"
import gal2 from "@/assets/gal2.webp"
import gal3 from "@/assets/gal3.webp"
import gal4 from "@/assets/gal4.webp"
import gal5 from "@/assets/gal5.webp"
import gal6 from "@/assets/gal6.webp"
import gal7 from "@/assets/gal7.webp"
import gal8 from "@/assets/gal8.webp"
import gal9 from "@/assets/gal9.webp"
import gal0 from "@/assets/gal10.webp"
import Image from 'next/image'

export default function MustDo() {
  const img =[gal1,gal2,gal3,gal4,gal5,gal6,gal7,gal8,gal9,gal0,gal9 ,gal0,gal9]


  return (
    <div className="masonry">
    {img.map((img, index) => (
      <div key={index} className="">
        <Image src={img} alt={`Gallery Image ${index + 1}`} layout="responsive" className="masonryItem object-cover " />
      </div>
    ))}
  </div>
  );
}
