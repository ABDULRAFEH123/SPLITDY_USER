import DynamicGridSection from "../common/DynamicGridSection";
import picture from "@/assets/Picture.webp";
import picture2 from "@/assets/Picture2.webp";
import picture4 from "@/assets/Picture4.webp";
import picture3 from "@/assets/Picture3.webp";
import DynamicText from "../common/DynamicText";

export default function Culture() {
  const Data = [
    {
        img: picture,
        title: "Māori culture "
    },
    {
        img: picture4,
        title: "Food and drink "
    },
    {
        img: picture3,
        title: "Home of Middle‑earth™ "
    },
    {
        img: picture2,
        title: "Events"
    }
];
    const heading="Culture";
    const txt="New Zealand's people are down to earth and friendly. Get know Kiwi culture by practising a few words of Te Reo Māori, chat to local cafe owners while getting your coffee, or take a tour with an expert guide."
  return (
    <div>
      <DynamicText heading={heading} text={txt}/>
      <DynamicGridSection imgData={Data}/>
    </div>
  )
}
