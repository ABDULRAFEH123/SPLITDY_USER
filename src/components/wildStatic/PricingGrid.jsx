import img2 from "@/assets/tripadvisor.webp";
import Image from "next/image";
import Pricing from "./Pricing";
import "@/app/globals.css";


export default function PricingGrid() {
  return (
    <div className="flex flex-col items-center mt-16 px-4 md:px-0">
      <div className="w-full max-w-screen-lg gap-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-9 lg:mr-10">
            <Pricing />
          </div>
          <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-20">
              <div className="setCenter">
               <Image src={img2} className="col-span-2" alt="Tripadvisor" height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
