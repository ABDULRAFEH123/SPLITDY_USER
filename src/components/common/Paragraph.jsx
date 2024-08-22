import { Akronim, Actor } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";

const akronim = Akronim({
    subsets: ['latin'],
    weight: '400',
});

const text = "Explore golden coastlines fringed with native pohutakawa trees, follow walking trails to waterfalls hidden in beech forests, or cycle through gently rolling vineyards.If you're after New Zealand's famous adventure activities and extreme sports, you can choose from bungy jumping, jet boating, skydiving or zip lining.Or relax and take it easy at beautiful hot pools, cultural attractions and art galleries."
export default function Paragraph({ text, route }) {
    return (
        <div>
            <div className="mx-5 lg:ml-28 2xl:ml-56 flex justify-between flex-col ">
                <p className="text-xs mt-2 flex flex-row gap-1">Home <IoIosArrowForward className="mt-[3px]" />
                    {route}</p>
                <div className=" mt-8">
                    <div className={`${akronim.className} mt-5 w-[80%] lg:w-[45%] text-xl  lg:text-3xl 2xl:text-5xl`}>
                        <p>{text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
