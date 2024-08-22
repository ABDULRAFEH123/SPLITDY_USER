import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
export default function DynamicGridSection({imgData}) {
  return (
    <div className="h-auto  bg-white my-10">
    <div className="setCenter">
        <div className="w-[85%] 2xl:w-[70%]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
                {imgData.map((data, index) => (
                    
                    <div key={index} className="relative cursor-pointer ">
                        <Image src={data.img} alt="img"  />
                        <div className=" absolute inset-0 bg-gradient-to-t from-[#0000005b] from-20% to-[#fff0] to-80% z-1"> </div>
                        <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 2xl:text-lg">
                            {data.title}
                            <PiArrowRightThin className="mt-[4px]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}
