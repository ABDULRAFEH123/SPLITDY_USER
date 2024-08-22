import Image from "next/image"
import img1 from "@/assets/TopAttraction1.webp"
import img2 from "@/assets/TopAdventure2.webp"
import { PiArrowRightThin } from "react-icons/pi"

export default function TopAttractions() {
    return (
        <div className="setCenter ">
            <div className="w-[85%] 2xl:w-[70%]">
                <div >
                    <h1 className="boldHeadings">
                        Top attractions and activities
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-5 my-10">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="relative">
                        <Image src={img1} alt="img" />
                        <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                        <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 2xl:text-lg">
                        Nature & Wildlife
                    <PiArrowRightThin className="mt-[4px]" />
                    </div>
                    </div>
                    </div>
                    
                    <div className="col-span-12 lg:col-span-6">
                    <div className="relative">

                        <Image src={img2} alt="img" />
                        <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>

                        <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 2xl:text-lg">
                        Geopark Explore
                    <PiArrowRightThin className="mt-[4px]" />
                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
