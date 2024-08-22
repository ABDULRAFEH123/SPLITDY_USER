"use client"
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import img1 from "@/assets/lower1.webp"
import img2 from "@/assets/lower2.webp"
import img3 from "@/assets/lower3.webp"
import img4 from "@/assets/lower4.webp"
import img5 from "@/assets/lower5.webp"
import img6 from "@/assets/lower6.webp"
import img7 from "@/assets/lower7.webp"
import DynamicText from "../common/DynamicText";

const heading = "Lower North Island"
const txt = "No visit to the North Island is complete without exploring the vibrant capital city of Wellington. You can also find great wine regions in the lower North Island, including Hawkes Bay, Martinborough, and Wairarapa."
export default function LowerNorth() {
    const images = [
        { src: img1, alt: "img1", title: "Taranaki " },
        { src: img2, alt: "img2", title: "Ruapehu" },
        { src: img3, alt: "img3", title: "Hawke's Bay " },
        { src: img4, alt: "img4", title: "Manawatū " },
        { src: img5, alt: "img5", title: "Whanganui" },
        { src: img6, alt: "img6", title: "Wellington " },
        { src: img7, alt: "img7", title: "Wairarapa " },
    ];
    return (
        <div>
            <DynamicText heading={heading} text={txt} />
            <div className="setCenter mt-6">
                <div className="w-[85%] 2xl:w-[70%] mt-2">
                    <div className="grid grid-cols-12 gap-3">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative ${index === 0 ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
                            >
                                <Image src={image.src} alt={image.alt} />
                                <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 ">
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
