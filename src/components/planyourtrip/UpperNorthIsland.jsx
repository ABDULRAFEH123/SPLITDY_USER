import { PiArrowRightThin } from "react-icons/pi";
import img1 from "@/assets/UpperNorth1.webp"
import img2 from "@/assets/UpperNorth2.webp"

import Image from "next/image";
import DynamicText from "../common/DynamicText";
const heading = "Upper North Island"
const txt = "Start your trip along the multicultural city of Auckland to the far north where New Zealand’s political history began. Experience the beauty of the upper North Island's coastlines, landscapes, and rich history."
export default function UpperNorthIsland() {
    return (
        <div>
            <DynamicText heading={heading} text={txt} />

            <div className="setCenter ">
                <div className="w-[85%] 2xl:w-[70%]">
                    <div className="grid grid-cols-12 gap-5 my-6">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="relative">
                                <Image src={img1} alt="img" />
                                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5">
                                    Auckland
                                    <PiArrowRightThin className="mt-[4px]" />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className="relative">

                                <Image src={img2} alt="img" />
                                <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5">
                                    Northland & Bay of Islands
                                    <PiArrowRightThin className="mt-[4px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
