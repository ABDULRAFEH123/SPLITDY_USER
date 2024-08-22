import picture from "@/assets/Picture.webp";
import picture2 from "@/assets/Picture2.webp";
import picture4 from "@/assets/Picture4.webp";
import picture3 from "@/assets/Picture3.webp";
import DynamicGridSection from "../common/DynamicGridSection";


const imgData = [
    {
        img: picture,
        title: "Cities"
    },
    {
        img: picture4,
        title: "Countryside"
    },
    {
        img: picture3,
        title: "Outlying islands"
    },
    {
        img: picture2,
        title: "Explore all regions"
    }
];

export default function FirstPlacesToGo() {
    return (
        <div >
           <DynamicGridSection imgData={imgData}/>
        </div>
    );
}
