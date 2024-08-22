import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/app/globals.css";
import PromoTag from "./PromoTag";
import ReviewBar from "./ReviewBar";
import owl from "../../../src/assets/owl.webp";

export default function Card({
  id,
  imageSrc,
  title,
  description,
  review,
  rating,
  promo,
  prices, // Default to an empty array if undefined
}) {
  const router = useRouter();
  console.log(rating, "Prices in Card title"); // Debugging: check the value of prices

  const handleCardClick = () => {
    if (id) {
      router.push(`/wild/${id}`);
    } else {
      console.error("ID is undefined");
    }
  };

  return (
    <div
      className=" rounded-xl overflow-hidden w-[96%] h-full shadow-lg relative mx-auto cursor-pointer"
      onClick={handleCardClick}
    >
      {promo ? (
        <div>
          <Image className="w-full relative" src={imageSrc} alt={title} />
          <PromoTag promo={promo} />
        </div>
      ) : (
        <div>
          <Image className="w-full relative" src={imageSrc} alt={title} />
        </div>
      )}

      <div className="px-6 py-4 min-h-[240px] bg-white">
      <div className="font-bold text-lg mb-2">
          {title.length > 15 ? `${title.substring(0, 15)}...` : title}
        </div>
        <p className="text-gray-700 text-xs">
        {Array.isArray(prices) && prices.length > 0 ? (
            <span>{prices[0].value}</span>
          ) : (
            "Price not available"
          )}
        </p>
      </div>
      <div className="bg-[#F8F8F8] w-full absolute bottom-0  md:bottom-[-20px] lg:bottom-[-40px] xl:bottom-[-10px]">
        {/* Rating and review display */}
        <div className=" flex flex-col xl:flex xl:flex-row gap-2 ml-3 mt-4 items-center">
          <Image src={owl} alt="owl" className="h-4 w-auto" />
          <ReviewBar rating={rating} />
          {/* <p className="text-[10px]">Based on {review} reviews</p> */}
          <p className="text-[10px]">Based on 500 reviews</p>
        </div>
        <div className="h-8"></div>
        <div className="flex flex-col justify-normal items-center w-full h-auto my-6">
          <div className="w-[80%] mt-2"></div>
        </div>
      </div>
    </div>
  );
}
