// components/PlanYourTrip.js

import Plan1 from "@/assets/Plan1.webp";
import Plan2 from "@/assets/Plan2.webp";
import Plan3 from "@/assets/Plan3.webp";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";

export default function PlanYourTrip() {
 
    const images = [
        { src: Plan1, alt: "Plan1", title: "History, Arts & Culture " },
        { src: Plan2, alt: "Plan2", title: "Walking & Hiking " },
        { src: Plan3, alt: "Plan3", title: "Food & Drink " }
    ];

    return (
        <div>
            <div className="setCenter mt-14">
                <div className="w-[85%] 2xl:w-[70%] mt-2">
                    <div className="grid grid-cols-12 gap-3">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={` ${index === 0 ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
                            >
                                <div className="relative">
                                    <Image src={image.src} alt={image.alt} />
                                    <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                                    <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 2xl:text-lg">
                                        {image.title}
                                        <PiArrowRightThin className="mt-[4px]" />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
