import accom1 from "@/assets/accomCard1.webp";
import accom2 from "@/assets/accomCard2.webp";
import accom3 from "@/assets/accomCard3.webp";
import accom4 from "@/assets/accomCard4.webp";
import DynamicGridSection from "../common/DynamicGridSection";
import SocialMedia from "../common/SocialMedia";
import PlacesToStayCard from "./PlacesToStayCard";

const heading = "Find a special place to stay";
const text = "Hong Kong's luxury accommodation is often found in the most stunning locations. Make your journey extra special with a unique accommodation experience. "
const data = [
    {
        img: accom1,
        title: "Apartments"
    },
    {
        img: accom2,
        title: "Boutique & Lodge "
    },

    {
        img: accom3,
        title: "Camping "
    },
    {
        img: accom4,
        title: "Backpackers & Hostels "
    },

]
export default function FindSpecialPlaceToStay() {
    return (
        <div>
            <div className="mb-12 mt-20 font-serif">
                <div className="setCenter">
                    <div className="w-[70%] md:w-[45%] lg:w-[40%] xl:w-[37%] 2xl:w-[27%]">
                        <div className="ml-0 md:-ml-[30%]">
                            <h1 className="text-3xl lg:text-5xl font-semibold font-serif">
                            Find a special place to stay
                            </h1>
                                <p className="text-xs   2xl:text-lg  mt-5">
                                Hong Kongs luxury accommodation is often found in the most stunning locations. Make your journey extra special with a unique accommodation experience.                                </p>
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20 font-serif">
                <DynamicGridSection imgData={data} />
            </div>
            <div>
                <PlacesToStayCard />
            </div>
            <SocialMedia />
        </div>
    )
}
