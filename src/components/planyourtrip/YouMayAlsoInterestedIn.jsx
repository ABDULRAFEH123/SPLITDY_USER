import "@/app/globals.css";
import Image from "next/image";
import interested1 from "@/assets/interested1.webp";
import interested2 from "@/assets/interested2.webp";
import interested3 from "@/assets/interested3.webp";
import interested4 from "@/assets/interested4.webp";

import { PiArrowRightThin } from "react-icons/pi";

const images = [
    { src: interested1, alt: "img1", title: "Crescent Island" },
    { src: interested2, alt: "img2", title: "Top things to see and do in Hong Kong" },
    { src: interested3, alt: "img3", title: "Four Sea Arches in East Seas" },
    { src: interested4, alt: "img4", title: "12 Best  Snorkelling Sites" },

];

export default function YouMayAlsoInterestedIn() {
    return (
        <div className="setCenter my-16">
            <div className="w-[85%] 2xl:w-[70%]">
                <h1 className="boldHeadings text-center mb-10">You may also be interested in ...</h1>
                <div className="grid grid-cols-12 gap-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="col-span-6 lg:col-span-3 relative"
                        >
                            <Image src={image.src} alt={image.alt} className="w-full h-auto" />
                            <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                            <div className="absolute bottom-0 left-0 right-0  text-white font-bold text-sm p-5 flex gap-2 items-center">
                                {image.title}
                                <PiArrowRightThin className="mt-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
