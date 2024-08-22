// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Category from "@/assets/Category.png";
// import Map from "@/assets/Map.png";
// import Card from "../common/Card";
// import card1 from "@/assets/card1.png";
// import card2 from "@/assets/card2.png";
// import card3 from "@/assets/card3.png";
// import card4 from "@/assets/card4.png";
// import { PiArrowRightThin } from "react-icons/pi";
// import "@/app/globals.css";
// import Tags from "../common/Tags";
// import { useDispatch, useSelector } from "react-redux";
// import { getItineraries } from "@/store/user/userThunk";

// export default function ThingsToDo() {
//   const [activeTag, setActiveTag] = useState(0); // State to track active tag index
//   const dispatch = useDispatch();
//   const { itineraries, loading, error } = useSelector((state) => state.user);

//   console.log(itineraries, "its all the itineraries");
//   useEffect(() => {
//     dispatch(getItineraries());
//   }, [dispatch]);
// //   const cardsData = [
// //     {
// //       id: 1,
// //       imageSrc: card1,
// //       title: "Lost World Full Day Epic",
// //       description: "From HKD $ 595.00",
// //       review: "1660",
// //       rating: 5,
// //     },
// //     {
// //       id: 2,
// //       imageSrc: card2,
// //       title: "Dart River Wilderness Jet Experience",
// //       description: "From HKD $ 299.00",
// //       review: "2632",
// //       rating: 4.5,
// //       promo: "$803 deal available",
// //     },
// //     {
// //       id: 3,
// //       imageSrc: card3,
// //       title: "KJet + Milford Sound Day Tour",
// //       description: "From HKD $ 350.00",
// //       review: "966",
// //       rating: 4.5,
// //     },
// //     {
// //       id: 4,
// //       imageSrc: card4,
// //       title: "Deep Canyon",
// //       description: "HKD $ 370.00 - HKD $ 2300.00",
// //       review: "353",
// //       rating: 5,
// //     },
// //   ];

//   const tags = [
//     "Geopark Explore",
//     "History, Arts & Culture",
//     "Food & Drink Experiences",
//     "Walking & Hiking",
//     "Nature & Wildlife",
//     "Film Experiences",
//   ];

//   const handleTagClick = (index) => {
//     setActiveTag(index);
//   };

//   return (
//     <div className="setCenter bg-[#F8F8F8] mt-10 ">
//     <div className="w-[85%]  2xl:w-[70%]">
//       <h1 className="boldHeadings ">Find things to do</h1>

//       <p className="text-left mt-8 font-medium text-xs">
//         Select type of activity:
//       </p>

//       <div className="flex flex-row ">
//         <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto">
//           <Tags tags={tags} />
//         </div>
//         <div className="flex flex-row gap-2 absolute right-14 lg:right-32  2xl:right-56 text-xs mt-4 options">
//           <Image src={Category} className="h-5 w-auto" alt="category" />
//           <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">
//             See all 3402 activities
//           </p>
//           <span className="text-[#D8D8D8]">|</span>
//           <Image src={Map} className="h-5 w-auto ml-2" alt="map" />
//           <p className="text-[#41913C] cursor-pointer hidden lg:hidden xl:block">
//             Map View
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 my-10">
//           {itineraries.map((itinerary) => (
//             <Card
//               key={itinerary._id}
//               id={itinerary._id}
//               imageSrc={card1} // Placeholder image
//               title={itinerary.title}
//               description={itinerary.description}
//               review={itinerary.review || "No reviews yet"}
//               rating={itinerary.rating || null}
//               promo={itinerary.promo || null}
//             />
//           ))}
//         </div>

//       <p className="text-xs text-[#767676] font-medium">
//         {itineraries.length} activities found
//       </p>

//       <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
//         See all <PiArrowRightThin className="mt-[6px]" />
//       </button>
//     </div>
//   </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../common/Card";
import card1 from "@/assets/card1.png";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from "../common/Tags";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getItineraries } from "@/store/user/userThunk";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ThingsToDo() {
  const [activeTag, setActiveTag] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const { itineraries, loading, error, category } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getItineraries());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const visibleItems =
        window.innerWidth >= 1024
          ? 4 // lg and above (show 4 items)
          : window.innerWidth >= 768
          ? 2 // md (show 2 items)
          : 1; // below md (show 1 item)

      setShowControls(itineraries.length > visibleItems);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [itineraries]);

  const tags = [...category.map((cat) => cat.name)];

  const handleTagClick = (index) => {
    setActiveTag(tags[index]);
    setShowAll(false);
  };

  const filteredItineraries = showAll
    ? itineraries
    : activeTag
    ? itineraries.filter((itinerary) => itinerary.categories === activeTag)
    : itineraries;

  console.log(filteredItineraries, "filteredItineraries");
  return (
    <div className="setCenter bg-[#F8F8F8] mt-10">
      <div className="w-[85%] 2xl:w-[70%]">
        <h1 className="boldHeadings">Find things to do</h1>

        <p className="text-left mt-8 font-medium text-xs">
          Select type of activity:
        </p>

        <div className="flex flex-row">
          <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%] lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto">
            <Tags
              tags={tags}
              handleTagClick={handleTagClick}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
            />
          </div>
          <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-56 text-xs mt-4 options text-nowrap cursor-pointer "   onClick={() => {
                setShowAll(true);
                setActiveTag(null);
              }}>
            <div
              className=" hover:text-[#e3e3e3]   flex text-nowrap gap-2"
            
            >
              <Image src={Category} className="h-5 w-auto" alt="category" />
              <p className="text-[#41913C] cursor-pointer hidden lg:hidden xl:block">
                See all {itineraries.length} activities
              </p>
            </div>

            
            <div className="flex text-nowrap gap-2">
              <span className="text-[#D8D8D8]">|</span>
              <Image src={Map} className="h-5 w-auto ml-2" alt="map" />
              <p className="text-[#41913C] cursor-pointer hidden lg:hidden xl:block">
                Map View
              </p>
            </div>
          </div>
        </div>

        {/* Carousel replacing the grid */}
        <div className="my-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredItineraries.map((itinerary, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1 w-[97%]">
                    <Card
                      id={itinerary._id}
                      imageSrc={card1} // Placeholder image
                      title={itinerary.title}
                      description={itinerary.description}
                      review={itinerary.review || "No reviews yet"}
                      rating={itinerary.rating || null}
                      promo={itinerary.promo || null}
                      prices={itinerary.prices}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {showControls && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>

        <p className="text-xs text-[#767676] font-medium">
          {filteredItineraries.length} activities found
        </p>

        <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex flex-row gap-1">
          See all <PiArrowRightThin className="mt-[6px]" />
        </button>
      </div>
    </div>
  );
}
